export const shopifyElements = (function enableElements() {
	const shopifyModules = {
		stickyHeader: function () {
			class StickyHeader extends HTMLElement {
				constructor() {
					super();
				}

				connectedCallback() {
					this.header = document.getElementById('shopify-section-header');
					this.headerBounds = {};
					this.currentScrollTop = 0;
					this.preventReveal = false;
					this.predictiveSearch = this.querySelector('predictive-search');

					this.onScrollHandler = this.onScroll.bind(this);
					this.hideHeaderOnScrollUp = () => (this.preventReveal = true);

					this.addEventListener(
						'preventHeaderReveal',
						this.hideHeaderOnScrollUp
					);
					window.addEventListener('scroll', this.onScrollHandler, false);

					this.createObserver();
				}

				disconnectedCallback() {
					this.removeEventListener(
						'preventHeaderReveal',
						this.hideHeaderOnScrollUp
					);
					window.removeEventListener('scroll', this.onScrollHandler);
				}

				createObserver() {
					let observer = new IntersectionObserver((entries, observer) => {
						this.headerBounds = entries[0].intersectionRect;
						observer.disconnect();
					});

					observer.observe(this.header);
				}

				onScroll() {
					const scrollTop =
						window.pageYOffset || document.documentElement.scrollTop;

					if (this.predictiveSearch && this.predictiveSearch.isOpen) return;

					if (
						scrollTop > this.currentScrollTop &&
						scrollTop > this.headerBounds.bottom
					) {
						requestAnimationFrame(this.hide.bind(this));
					} else if (
						scrollTop < this.currentScrollTop &&
						scrollTop > this.headerBounds.bottom
					) {
						if (!this.preventReveal) {
							requestAnimationFrame(this.reveal.bind(this));
						} else {
							window.clearTimeout(this.isScrolling);

							this.isScrolling = setTimeout(() => {
								this.preventReveal = false;
							}, 66);

							requestAnimationFrame(this.hide.bind(this));
						}
					} else if (scrollTop <= this.headerBounds.top) {
						requestAnimationFrame(this.reset.bind(this));
					}

					this.currentScrollTop = scrollTop;
				}

				hide() {
					this.header.classList.add(
						'shopify-section-header-hidden',
						'shopify-section-header-sticky'
					);
					this.closeMenuDisclosure();
					this.closeSearchModal();
				}

				reveal() {
					this.header.classList.add('shopify-section-header-sticky', 'animate');
					this.header.classList.remove('shopify-section-header-hidden');
				}

				reset() {
					this.header.classList.remove(
						'shopify-section-header-hidden',
						'shopify-section-header-sticky',
						'animate'
					);
				}

				closeMenuDisclosure() {
					this.disclosures =
						this.disclosures ||
						this.header.querySelectorAll('details-disclosure');
					this.disclosures.forEach((disclosure) => disclosure.close());
				}

				closeSearchModal() {
					this.searchModal =
						this.searchModal || this.header.querySelector('details-modal');
					this.searchModal.close(false);
				}
			}

			customElements.define('sticky-header', StickyHeader);
		},
		search: function () {
			class PredictiveSearch extends HTMLElement {
				constructor() {
					super();
					this.cachedResults = {};
					this.input = this.querySelector('input[type="search"]');
					this.predictiveSearchResults = this.querySelector(
						'[data-predictive-search]'
					);
					this.isOpen = false;

					this.setupEventListeners();
				}

				setupEventListeners() {
					const form = this.querySelector('form.search');
					form.addEventListener('submit', this.onFormSubmit.bind(this));

					this.input.addEventListener(
						'input',
						debounce((event) => {
							this.onChange(event);
						}, 300).bind(this)
					);
					this.input.addEventListener('focus', this.onFocus.bind(this));
					this.addEventListener('focusout', this.onFocusOut.bind(this));
					this.addEventListener('keyup', this.onKeyup.bind(this));
					this.addEventListener('keydown', this.onKeydown.bind(this));
				}

				getQuery() {
					return this.input.value.trim();
				}

				onChange() {
					const searchTerm = this.getQuery();

					if (!searchTerm.length) {
						this.close(true);
						return;
					}

					this.getSearchResults(searchTerm);
				}

				onFormSubmit(event) {
					if (
						!this.getQuery().length ||
						this.querySelector('[aria-selected="true"] a')
					)
						event.preventDefault();
				}

				onFocus() {
					const searchTerm = this.getQuery();

					if (!searchTerm.length) return;

					if (this.getAttribute('results') === 'true') {
						this.open();
					} else {
						this.getSearchResults(searchTerm);
					}
				}

				onFocusOut() {
					setTimeout(() => {
						if (!this.contains(document.activeElement)) this.close();
					});
				}

				onKeyup(event) {
					if (!this.getQuery().length) this.close(true);
					event.preventDefault();

					switch (event.code) {
						case 'ArrowUp':
							this.switchOption('up');
							break;
						case 'ArrowDown':
							this.switchOption('down');
							break;
						case 'Enter':
							this.selectOption();
							break;
					}
				}

				onKeydown(event) {
					// Prevent the cursor from moving in the input when using the up and down arrow keys
					if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
						event.preventDefault();
					}
				}

				switchOption(direction) {
					if (!this.getAttribute('open')) return;

					const moveUp = direction === 'up';
					const selectedElement = this.querySelector('[aria-selected="true"]');
					const allElements = this.querySelectorAll('li');
					let activeElement = this.querySelector('li');

					if (moveUp && !selectedElement) return;

					this.statusElement.textContent = '';

					if (!moveUp && selectedElement) {
						activeElement =
							selectedElement.nextElementSibling || allElements[0];
					} else if (moveUp) {
						activeElement =
							selectedElement.previousElementSibling ||
							allElements[allElements.length - 1];
					}

					if (activeElement === selectedElement) return;

					activeElement.setAttribute('aria-selected', true);
					if (selectedElement)
						selectedElement.setAttribute('aria-selected', false);

					this.setLiveRegionText(activeElement.textContent);
					this.input.setAttribute('aria-activedescendant', activeElement.id);
				}

				selectOption() {
					const selectedProduct = this.querySelector(
						'[aria-selected="true"] a, [aria-selected="true"] button'
					);

					if (selectedProduct) selectedProduct.click();
				}

				getSearchResults(searchTerm) {
					const queryKey = searchTerm.replace(' ', '-').toLowerCase();
					this.setLiveRegionLoadingState();

					if (this.cachedResults[queryKey]) {
						this.renderSearchResults(this.cachedResults[queryKey]);
						return;
					}

					fetch(
						`${routes.predictive_search_url}?q=${encodeURIComponent(
							searchTerm
						)}&${encodeURIComponent(
							'resources[type]'
						)}=product&${encodeURIComponent(
							'resources[limit]'
						)}=4&section_id=predictive-search`
					)
						.then((response) => {
							if (!response.ok) {
								var error = new Error(response.status);
								this.close();
								throw error;
							}

							return response.text();
						})
						.then((text) => {
							const resultsMarkup = new DOMParser()
								.parseFromString(text, 'text/html')
								.querySelector('#shopify-section-predictive-search').innerHTML;
							this.cachedResults[queryKey] = resultsMarkup;
							this.renderSearchResults(resultsMarkup);
						})
						.catch((error) => {
							this.close();
							throw error;
						});
				}

				setLiveRegionLoadingState() {
					this.statusElement =
						this.statusElement ||
						this.querySelector('.predictive-search-status');
					this.loadingText =
						this.loadingText || this.getAttribute('data-loading-text');

					this.setLiveRegionText(this.loadingText);
					this.setAttribute('loading', true);
				}

				setLiveRegionText(statusText) {
					this.statusElement.setAttribute('aria-hidden', 'false');
					this.statusElement.textContent = statusText;

					setTimeout(() => {
						this.statusElement.setAttribute('aria-hidden', 'true');
					}, 1000);
				}

				renderSearchResults(resultsMarkup) {
					this.predictiveSearchResults.innerHTML = resultsMarkup;
					this.setAttribute('results', true);

					this.setLiveRegionResults();
					this.open();
				}

				setLiveRegionResults() {
					this.removeAttribute('loading');
					this.setLiveRegionText(
						this.querySelector(
							'[data-predictive-search-live-region-count-value]'
						).textContent
					);
				}

				getResultsMaxHeight() {
					this.resultsMaxHeight =
						window.innerHeight -
						document
							.getElementById('shopify-section-header')
							.getBoundingClientRect().bottom;
					return this.resultsMaxHeight;
				}

				open() {
					this.predictiveSearchResults.style.maxHeight =
						this.resultsMaxHeight || `${this.getResultsMaxHeight()}px`;
					this.setAttribute('open', true);
					this.input.setAttribute('aria-expanded', true);
					this.isOpen = true;
				}

				close(clearSearchTerm = false) {
					if (clearSearchTerm) {
						this.input.value = '';
						this.removeAttribute('results');
					}

					const selected = this.querySelector('[aria-selected="true"]');

					if (selected) selected.setAttribute('aria-selected', false);

					this.input.setAttribute('aria-activedescendant', '');
					this.removeAttribute('open');
					this.input.setAttribute('aria-expanded', false);
					this.resultsMaxHeight = false;
					this.predictiveSearchResults.removeAttribute('style');

					this.isOpen = false;
				}
			}

			customElements.define('predictive-search', PredictiveSearch);
		},
		gallery: function () {
			if (!customElements.get('media-gallery')) {
				customElements.define(
					'media-gallery',
					class MediaGallery extends HTMLElement {
						constructor() {
							super();
							this.elements = {
								liveRegion: this.querySelector('[id^="GalleryStatus"]'),
								viewer: this.querySelector('[id^="GalleryViewer"]'),
								thumbnails: this.querySelector('[id^="GalleryThumbnails"]'),
							};
							this.mql = window.matchMedia('(min-width: 750px)');
							if (!this.elements.thumbnails) return;

							this.elements.viewer.addEventListener(
								'slideChanged',
								debounce(this.onSlideChanged.bind(this), 500)
							);
							this.elements.thumbnails
								.querySelectorAll('[data-target]')
								.forEach((mediaToSwitch) => {
									mediaToSwitch
										.querySelector('button')
										.addEventListener(
											'click',
											this.setActiveMedia.bind(
												this,
												mediaToSwitch.dataset.target,
												false
											)
										);
								});
							if (this.dataset.desktopLayout !== 'stacked' && this.mql.matches)
								this.removeListSemantic();
						}

						onSlideChanged(event) {
							const thumbnail = this.elements.thumbnails.querySelector(
								`[data-target="${event.detail.currentElement.dataset.mediaId}"]`
							);
							this.setActiveThumbnail(thumbnail);
						}

						setActiveMedia(mediaId, prepend) {
							const activeMedia = this.elements.viewer.querySelector(
								`[data-media-id="${mediaId}"]`
							);
							this.elements.viewer
								.querySelectorAll('[data-media-id]')
								.forEach((element) => {
									element.classList.remove('is-active');
								});
							activeMedia.classList.add('is-active');

							if (prepend) {
								activeMedia.parentElement.prepend(activeMedia);
								if (this.elements.thumbnails) {
									const activeThumbnail =
										this.elements.thumbnails.querySelector(
											`[data-target="${mediaId}"]`
										);
									activeThumbnail.parentElement.prepend(activeThumbnail);
								}
								if (this.elements.viewer.slider)
									this.elements.viewer.resetPages();
							}

							this.preventStickyHeader();
							window.setTimeout(() => {
								if (this.elements.thumbnails) {
									activeMedia.parentElement.scrollTo({
										left: activeMedia.offsetLeft,
									});
								}
								if (
									!this.elements.thumbnails ||
									this.dataset.desktopLayout === 'stacked'
								) {
									activeMedia.scrollIntoView({ behavior: 'smooth' });
								}
							});
							this.playActiveMedia(activeMedia);

							if (!this.elements.thumbnails) return;
							const activeThumbnail = this.elements.thumbnails.querySelector(
								`[data-target="${mediaId}"]`
							);
							this.setActiveThumbnail(activeThumbnail);
							this.announceLiveRegion(
								activeMedia,
								activeThumbnail.dataset.mediaPosition
							);
						}

						setActiveThumbnail(thumbnail) {
							if (!this.elements.thumbnails || !thumbnail) return;

							this.elements.thumbnails
								.querySelectorAll('button')
								.forEach((element) => element.removeAttribute('aria-current'));
							thumbnail
								.querySelector('button')
								.setAttribute('aria-current', true);
							if (this.elements.thumbnails.isSlideVisible(thumbnail, 10))
								return;

							this.elements.thumbnails.slider.scrollTo({
								left: thumbnail.offsetLeft,
							});
						}

						announceLiveRegion(activeItem, position) {
							const image = activeItem.querySelector(
								'.product__modal-opener--image img'
							);
							if (!image) return;
							image.onload = () => {
								this.elements.liveRegion.setAttribute('aria-hidden', false);
								this.elements.liveRegion.innerHTML =
									window.accessibilityStrings.imageAvailable.replace(
										'[index]',
										position
									);
								setTimeout(() => {
									this.elements.liveRegion.setAttribute('aria-hidden', true);
								}, 2000);
							};
							image.src = image.src;
						}

						playActiveMedia(activeItem) {
							pauseAllMedia();
							const deferredMedia = activeItem.querySelector('.deferred-media');
							if (deferredMedia) deferredMedia.loadContent(false);
						}

						preventStickyHeader() {
							this.stickyHeader =
								this.stickyHeader || document.querySelector('sticky-header');
							if (!this.stickyHeader) return;
							this.stickyHeader.dispatchEvent(new Event('preventHeaderReveal'));
						}

						removeListSemantic() {
							if (!this.elements.viewer.slider) return;
							this.elements.viewer.slider.setAttribute('role', 'presentation');
							this.elements.viewer.sliderItems.forEach((slide) =>
								slide.setAttribute('role', 'presentation')
							);
						}
					}
				);
			}
		},
		facets: function () {
			class FacetFiltersForm extends HTMLElement {
				constructor() {
					super();
					this.onActiveFilterClick = this.onActiveFilterClick.bind(this);

					this.debouncedOnSubmit = debounce((event) => {
						this.onSubmitHandler(event);
					}, 500);

					this.querySelector('form').addEventListener(
						'input',
						this.debouncedOnSubmit.bind(this)
					);

					const facetWrapper = this.querySelector('#FacetsWrapperDesktop');
					if (facetWrapper)
						facetWrapper.addEventListener('keyup', onKeyUpEscape);
				}

				static setListeners() {
					const onHistoryChange = (event) => {
						const searchParams = event.state
							? event.state.searchParams
							: FacetFiltersForm.searchParamsInitial;
						if (searchParams === FacetFiltersForm.searchParamsPrev) return;
						FacetFiltersForm.renderPage(searchParams, null, false);
					};
					window.addEventListener('popstate', onHistoryChange);
				}

				static toggleActiveFacets(disable = true) {
					document.querySelectorAll('.js-facet-remove').forEach((element) => {
						element.classList.toggle('disabled', disable);
					});
				}

				static renderPage(searchParams, event, updateURLHash = true) {
					FacetFiltersForm.searchParamsPrev = searchParams;
					const sections = FacetFiltersForm.getSections();
					const countContainer = document.getElementById('ProductCount');
					const countContainerDesktop = document.getElementById(
						'ProductCountDesktop'
					);
					document
						.getElementById('ProductGridContainer')
						.querySelector('.collection')
						.classList.add('loading');
					if (countContainer) {
						countContainer.classList.add('loading');
					}
					if (countContainerDesktop) {
						countContainerDesktop.classList.add('loading');
					}

					sections.forEach((section) => {
						const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
						const filterDataUrl = (element) => element.url === url;

						FacetFiltersForm.filterData.some(filterDataUrl)
							? FacetFiltersForm.renderSectionFromCache(filterDataUrl, event)
							: FacetFiltersForm.renderSectionFromFetch(url, event);
					});

					if (updateURLHash) FacetFiltersForm.updateURLHash(searchParams);
				}

				static renderSectionFromFetch(url, event) {
					fetch(url)
						.then((response) => response.text())
						.then((responseText) => {
							const html = responseText;
							FacetFiltersForm.filterData = [
								...FacetFiltersForm.filterData,
								{ html, url },
							];
							FacetFiltersForm.renderFilters(html, event);
							FacetFiltersForm.renderProductGridContainer(html);
							FacetFiltersForm.renderProductCount(html);
						});
				}

				static renderSectionFromCache(filterDataUrl, event) {
					const html = FacetFiltersForm.filterData.find(filterDataUrl).html;
					FacetFiltersForm.renderFilters(html, event);
					FacetFiltersForm.renderProductGridContainer(html);
					FacetFiltersForm.renderProductCount(html);
				}

				static renderProductGridContainer(html) {
					document.getElementById('ProductGridContainer').innerHTML =
						new DOMParser()
							.parseFromString(html, 'text/html')
							.getElementById('ProductGridContainer').innerHTML;
				}

				static renderProductCount(html) {
					const count = new DOMParser()
						.parseFromString(html, 'text/html')
						.getElementById('ProductCount').innerHTML;
					const container = document.getElementById('ProductCount');
					const containerDesktop = document.getElementById(
						'ProductCountDesktop'
					);
					container.innerHTML = count;
					container.classList.remove('loading');
					if (containerDesktop) {
						containerDesktop.innerHTML = count;
						containerDesktop.classList.remove('loading');
					}
				}

				static renderFilters(html, event) {
					const parsedHTML = new DOMParser().parseFromString(html, 'text/html');

					const facetDetailsElements = parsedHTML.querySelectorAll(
						'#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter'
					);
					const matchesIndex = (element) => {
						const jsFilter = event
							? event.target.closest('.js-filter')
							: undefined;
						return jsFilter
							? element.dataset.index === jsFilter.dataset.index
							: false;
					};
					const facetsToRender = Array.from(facetDetailsElements).filter(
						(element) => !matchesIndex(element)
					);
					const countsToRender =
						Array.from(facetDetailsElements).find(matchesIndex);

					facetsToRender.forEach((element) => {
						document.querySelector(
							`.js-filter[data-index="${element.dataset.index}"]`
						).innerHTML = element.innerHTML;
					});

					FacetFiltersForm.renderActiveFacets(parsedHTML);
					FacetFiltersForm.renderAdditionalElements(parsedHTML);

					if (countsToRender)
						FacetFiltersForm.renderCounts(
							countsToRender,
							event.target.closest('.js-filter')
						);
				}

				static renderActiveFacets(html) {
					const activeFacetElementSelectors = [
						'.active-facets-mobile',
						'.active-facets-desktop',
					];

					activeFacetElementSelectors.forEach((selector) => {
						const activeFacetsElement = html.querySelector(selector);
						if (!activeFacetsElement) return;
						document.querySelector(selector).innerHTML =
							activeFacetsElement.innerHTML;
					});

					FacetFiltersForm.toggleActiveFacets(false);
				}

				static renderAdditionalElements(html) {
					const mobileElementSelectors = [
						'.mobile-facets__open',
						'.mobile-facets__count',
						'.sorting',
					];

					mobileElementSelectors.forEach((selector) => {
						if (!html.querySelector(selector)) return;
						document.querySelector(selector).innerHTML =
							html.querySelector(selector).innerHTML;
					});

					document
						.getElementById('FacetFiltersFormMobile')
						.closest('menu-drawer')
						.bindEvents();
				}

				static renderCounts(source, target) {
					const targetElement = target.querySelector('.facets__selected');
					const sourceElement = source.querySelector('.facets__selected');

					if (sourceElement && targetElement) {
						target.querySelector('.facets__selected').outerHTML =
							source.querySelector('.facets__selected').outerHTML;
					}
				}

				static updateURLHash(searchParams) {
					history.pushState(
						{ searchParams },
						'',
						`${window.location.pathname}${
							searchParams && '?'.concat(searchParams)
						}`
					);
				}

				static getSections() {
					return [
						{
							section: document.getElementById('product-grid').dataset.id,
						},
					];
				}

				onSubmitHandler(event) {
					event.preventDefault();
					const formData = new FormData(event.target.closest('form'));
					const searchParams = new URLSearchParams(formData).toString();
					FacetFiltersForm.renderPage(searchParams, event);
				}

				onActiveFilterClick(event) {
					event.preventDefault();
					FacetFiltersForm.toggleActiveFacets();
					const url =
						event.currentTarget.href.indexOf('?') == -1
							? ''
							: event.currentTarget.href.slice(
									event.currentTarget.href.indexOf('?') + 1
							  );
					FacetFiltersForm.renderPage(url);
				}
			}

			FacetFiltersForm.filterData = [];
			FacetFiltersForm.searchParamsInitial = window.location.search.slice(1);
			FacetFiltersForm.searchParamsPrev = window.location.search.slice(1);
			customElements.define('facet-filters-form', FacetFiltersForm);
			FacetFiltersForm.setListeners();

			class PriceRange extends HTMLElement {
				constructor() {
					super();
					this.querySelectorAll('input').forEach((element) =>
						element.addEventListener('change', this.onRangeChange.bind(this))
					);

					this.setMinAndMaxValues();
				}

				onRangeChange(event) {
					this.adjustToValidValues(event.currentTarget);
					this.setMinAndMaxValues();
				}

				setMinAndMaxValues() {
					const inputs = this.querySelectorAll('input');
					const minInput = inputs[0];
					const maxInput = inputs[1];
					if (maxInput.value) minInput.setAttribute('max', maxInput.value);
					if (minInput.value) maxInput.setAttribute('min', minInput.value);
					if (minInput.value === '') maxInput.setAttribute('min', 0);
					if (maxInput.value === '')
						minInput.setAttribute('max', maxInput.getAttribute('max'));
				}

				adjustToValidValues(input) {
					const value = Number(input.value);
					const min = Number(input.getAttribute('min'));
					const max = Number(input.getAttribute('max'));

					if (value < min) input.value = min;
					if (value > max) input.value = max;
				}
			}

			customElements.define('price-range', PriceRange);

			class FacetRemove extends HTMLElement {
				constructor() {
					super();
					this.querySelector('a').addEventListener('click', (event) => {
						event.preventDefault();
						const form =
							this.closest('facet-filters-form') ||
							document.querySelector('facet-filters-form');
						form.onActiveFilterClick(event);
					});
				}
			}

			customElements.define('facet-remove', FacetRemove);
		},
		productModal: function () {
			if (!customElements.get('product-modal')) {
				customElements.define(
					'product-modal',
					class ProductModal extends ModalDialog {
						constructor() {
							super();
						}

						hide() {
							super.hide();
						}

						show(opener) {
							super.show(opener);
							this.showActiveMedia();
						}

						showActiveMedia() {
							this.querySelectorAll(
								`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute(
									'data-media-id'
								)}"])`
							).forEach((element) => {
								element.classList.remove('active');
							});
							const activeMedia = this.querySelector(
								`[data-media-id="${this.openedBy.getAttribute(
									'data-media-id'
								)}"]`
							);
							const activeMediaTemplate = activeMedia.querySelector('template');
							const activeMediaContent = activeMediaTemplate
								? activeMediaTemplate.content
								: null;
							activeMedia.classList.add('active');
							activeMedia.scrollIntoView();

							const container = this.querySelector('[role="document"]');
							container.scrollLeft =
								(activeMedia.width - container.clientWidth) / 2;

							if (
								activeMedia.nodeName == 'DEFERRED-MEDIA' &&
								activeMediaContent &&
								activeMediaContent.querySelector('.js-youtube')
							)
								activeMedia.loadContent();
						}
					}
				);
			}
		},
		productModel: function () {
			if (!customElements.get('product-model')) {
				customElements.define(
					'product-model',
					class ProductModel extends DeferredMedia {
						constructor() {
							super();
						}

						loadContent() {
							super.loadContent();

							Shopify.loadFeatures([
								{
									name: 'model-viewer-ui',
									version: '1.0',
									onLoad: this.setupModelViewerUI.bind(this),
								},
							]);
						}

						setupModelViewerUI(errors) {
							if (errors) return;

							this.modelViewerUI = new Shopify.ModelViewerUI(
								this.querySelector('model-viewer')
							);
						}
					}
				);
			}

			window.ProductModel = {
				loadShopifyXR() {
					Shopify.loadFeatures([
						{
							name: 'shopify-xr',
							version: '1.0',
							onLoad: this.setupShopifyXR.bind(this),
						},
					]);
				},

				setupShopifyXR(errors) {
					if (errors) return;

					if (!window.ShopifyXR) {
						document.addEventListener('shopify_xr_initialized', () =>
							this.setupShopifyXR()
						);
						return;
					}

					document
						.querySelectorAll('[id^="ProductJSON-"]')
						.forEach((modelJSON) => {
							window.ShopifyXR.addModels(JSON.parse(modelJSON.textContent));
							modelJSON.remove();
						});
					window.ShopifyXR.setupXRElements();
				},
			};

			window.addEventListener('DOMContentLoaded', () => {
				if (window.ProductModel) window.ProductModel.loadShopifyXR();
			});
		},
		productForm: function () {
			if (!customElements.get('product-form')) {
				customElements.define(
					'product-form',
					class ProductForm extends HTMLElement {
						constructor() {
							super();

							this.form = this.querySelector('form');
							this.form.querySelector('[name=id]').disabled = false;
							this.form.addEventListener(
								'submit',
								this.onSubmitHandler.bind(this)
							);
							this.cartNotification =
								document.querySelector('cart-notification');
						}

						onSubmitHandler(evt) {
							evt.preventDefault();
							const submitButton = this.querySelector('[type="submit"]');
							if (submitButton.classList.contains('loading')) return;

							this.handleErrorMessage();
							this.cartNotification.setActiveElement(document.activeElement);

							submitButton.setAttribute('aria-disabled', true);
							submitButton.classList.add('loading');
							this.querySelector('.loading-overlay__spinner').classList.remove(
								'hidden'
							);

							const config = fetchConfig('javascript');
							config.headers['X-Requested-With'] = 'XMLHttpRequest';
							delete config.headers['Content-Type'];

							const formData = new FormData(this.form);
							formData.append(
								'sections',
								this.cartNotification
									.getSectionsToRender()
									.map((section) => section.id)
							);
							formData.append('sections_url', window.location.pathname);
							config.body = formData;

							fetch(`${routes.cart_add_url}`, config)
								.then((response) => response.json())
								.then((response) => {
									if (response.status) {
										this.handleErrorMessage(response.description);
										return;
									}

									this.cartNotification.renderContents(response);
								})
								.catch((e) => {
									console.error(e);
								})
								.finally(() => {
									submitButton.classList.remove('loading');
									submitButton.removeAttribute('aria-disabled');
									this.querySelector('.loading-overlay__spinner').classList.add(
										'hidden'
									);
								});
						}

						handleErrorMessage(errorMessage = false) {
							this.errorMessageWrapper =
								this.errorMessageWrapper ||
								this.querySelector('.product-form__error-message-wrapper');
							this.errorMessage =
								this.errorMessage ||
								this.errorMessageWrapper.querySelector(
									'.product-form__error-message'
								);

							this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

							if (errorMessage) {
								this.errorMessage.textContent = errorMessage;
							}
						}
					}
				);
			}
		},
		pickup: function () {
			if (!customElements.get('pickup-availability')) {
				customElements.define(
					'pickup-availability',
					class PickupAvailability extends HTMLElement {
						constructor() {
							super();

							if (!this.hasAttribute('available')) return;

							this.errorHtml =
								this.querySelector(
									'template'
								).content.firstElementChild.cloneNode(true);
							this.onClickRefreshList = this.onClickRefreshList.bind(this);
							this.fetchAvailability(this.dataset.variantId);
						}

						fetchAvailability(variantId) {
							let rootUrl = this.dataset.rootUrl;
							if (!rootUrl.endsWith('/')) {
								rootUrl = rootUrl + '/';
							}
							const variantSectionUrl = `${rootUrl}variants/${variantId}/?section_id=pickup-availability`;

							fetch(variantSectionUrl)
								.then((response) => response.text())
								.then((text) => {
									const sectionInnerHTML = new DOMParser()
										.parseFromString(text, 'text/html')
										.querySelector('.shopify-section');
									this.renderPreview(sectionInnerHTML);
								})
								.catch((e) => {
									const button = this.querySelector('button');
									if (button)
										button.removeEventListener(
											'click',
											this.onClickRefreshList
										);
									this.renderError();
								});
						}

						onClickRefreshList(evt) {
							this.fetchAvailability(this.dataset.variantId);
						}

						renderError() {
							this.innerHTML = '';
							this.appendChild(this.errorHtml);

							this.querySelector('button').addEventListener(
								'click',
								this.onClickRefreshList
							);
						}

						renderPreview(sectionInnerHTML) {
							const drawer = document.querySelector(
								'pickup-availability-drawer'
							);
							if (drawer) drawer.remove();
							if (
								!sectionInnerHTML.querySelector('pickup-availability-preview')
							) {
								this.innerHTML = '';
								this.removeAttribute('available');
								return;
							}

							this.innerHTML = sectionInnerHTML.querySelector(
								'pickup-availability-preview'
							).outerHTML;
							this.setAttribute('available', '');

							document.body.appendChild(
								sectionInnerHTML.querySelector('pickup-availability-drawer')
							);

							const button = this.querySelector('button');
							if (button)
								button.addEventListener('click', (evt) => {
									document
										.querySelector('pickup-availability-drawer')
										.show(evt.target);
								});
						}
					}
				);
			}

			if (!customElements.get('pickup-availability-drawer')) {
				customElements.define(
					'pickup-availability-drawer',
					class PickupAvailabilityDrawer extends HTMLElement {
						constructor() {
							super();

							this.onBodyClick = this.handleBodyClick.bind(this);

							this.querySelector('button').addEventListener('click', () => {
								this.hide();
							});

							this.addEventListener('keyup', () => {
								if (event.code.toUpperCase() === 'ESCAPE') this.hide();
							});
						}

						handleBodyClick(evt) {
							const target = evt.target;
							if (
								target != this &&
								!target.closest('pickup-availability-drawer') &&
								target.id != 'ShowPickupAvailabilityDrawer'
							) {
								this.hide();
							}
						}

						hide() {
							this.removeAttribute('open');
							document.body.removeEventListener('click', this.onBodyClick);
							document.body.classList.remove('overflow-hidden');
							removeTrapFocus(this.focusElement);
						}

						show(focusElement) {
							this.focusElement = focusElement;
							this.setAttribute('open', '');
							document.body.addEventListener('click', this.onBodyClick);
							document.body.classList.add('overflow-hidden');
							trapFocus(this);
						}
					}
				);
			}
		},
		recommends: function () {
			class ProductRecommendations extends HTMLElement {
				constructor() {
					super();

					const handleIntersection = (entries, observer) => {
						if (!entries[0].isIntersecting) return;
						observer.unobserve(this);

						fetch(this.dataset.url)
							.then((response) => response.text())
							.then((text) => {
								const html = document.createElement('div');
								html.innerHTML = text;
								const recommendations = html.querySelector(
									'product-recommendations'
								);

								if (
									recommendations &&
									recommendations.innerHTML.trim().length
								) {
									this.innerHTML = recommendations.innerHTML;
								}

								if (html.querySelector('.grid__item')) {
									this.classList.add('product-recommendations--loaded');
								}
							})
							.catch((e) => {
								console.error(e);
							});
					};

					new IntersectionObserver(handleIntersection.bind(this), {
						rootMargin: '0px 0px 200px 0px',
					}).observe(this);
				}
			}

			customElements.define('product-recommendations', ProductRecommendations);
		},
		share: function () {
			if (!customElements.get('share-button')) {
				customElements.define(
					'share-button',
					class ShareButton extends DetailsDisclosure {
						constructor() {
							super();

							this.elements = {
								shareButton: this.querySelector('button'),
								shareSummary: this.querySelector('summary'),
								closeButton: this.querySelector('.share-button__close'),
								successMessage: this.querySelector('[id^="ShareMessage"]'),
								urlInput: this.querySelector('input'),
							};
							this.urlToShare = this.elements.urlInput
								? this.elements.urlInput.value
								: document.location.href;

							if (navigator.share) {
								this.mainDetailsToggle.setAttribute('hidden', '');
								this.elements.shareButton.classList.remove('hidden');
								this.elements.shareButton.addEventListener('click', () => {
									navigator.share({
										url: this.urlToShare,
										title: document.title,
									});
								});
							} else {
								this.mainDetailsToggle.addEventListener(
									'toggle',
									this.toggleDetails.bind(this)
								);
								this.mainDetailsToggle
									.querySelector('.share-button__copy')
									.addEventListener('click', this.copyToClipboard.bind(this));
								this.mainDetailsToggle
									.querySelector('.share-button__close')
									.addEventListener('click', this.close.bind(this));
							}
						}

						toggleDetails() {
							if (!this.mainDetailsToggle.open) {
								this.elements.successMessage.classList.add('hidden');
								this.elements.successMessage.textContent = '';
								this.elements.closeButton.classList.add('hidden');
								this.elements.shareSummary.focus();
							}
						}

						copyToClipboard() {
							navigator.clipboard
								.writeText(this.elements.urlInput.value)
								.then(() => {
									this.elements.successMessage.classList.remove('hidden');
									this.elements.successMessage.textContent =
										window.accessibilityStrings.shareSuccess;
									this.elements.closeButton.classList.remove('hidden');
									this.elements.closeButton.focus();
								});
						}

						updateUrl(url) {
							this.urlToShare = url;
							this.elements.urlInput.value = url;
						}
					}
				);
			}
		},
		local: function () {
			class LocalizationForm extends HTMLElement {
				constructor() {
					super();
					this.elements = {
						input: this.querySelector(
							'input[name="locale_code"], input[name="country_code"]'
						),
						button: this.querySelector('button'),
						panel: this.querySelector('.disclosure__list-wrapper'),
					};
					this.elements.button.addEventListener(
						'click',
						this.openSelector.bind(this)
					);
					this.elements.button.addEventListener(
						'focusout',
						this.closeSelector.bind(this)
					);
					this.addEventListener('keyup', this.onContainerKeyUp.bind(this));

					this.querySelectorAll('a').forEach((item) =>
						item.addEventListener('click', this.onItemClick.bind(this))
					);
				}

				hidePanel() {
					this.elements.button.setAttribute('aria-expanded', 'false');
					this.elements.panel.setAttribute('hidden', true);
				}

				onContainerKeyUp(event) {
					if (event.code.toUpperCase() !== 'ESCAPE') return;

					this.hidePanel();
					this.elements.button.focus();
				}

				onItemClick(event) {
					event.preventDefault();
					const form = this.querySelector('form');
					this.elements.input.value = event.currentTarget.dataset.value;
					if (form) form.submit();
				}

				openSelector() {
					this.elements.button.focus();
					this.elements.panel.toggleAttribute('hidden');
					this.elements.button.setAttribute(
						'aria-expanded',
						(
							this.elements.button.getAttribute('aria-expanded') === 'false'
						).toString()
					);
				}

				closeSelector(event) {
					const shouldClose =
						event.relatedTarget && event.relatedTarget.nodeName === 'BUTTON';
					if (event.relatedTarget === null || shouldClose) {
						this.hidePanel();
					}
				}
			}

			customElements.define('localization-form', LocalizationForm);
		},
		cart: function () {
			class CartRemoveButton extends HTMLElement {
				constructor() {
					super();
					this.addEventListener('click', (event) => {
						event.preventDefault();
						this.closest('cart-items').updateQuantity(this.dataset.index, 0);
					});
				}
			}

			customElements.define('cart-remove-button', CartRemoveButton);

			class CartItems extends HTMLElement {
				constructor() {
					super();

					this.lineItemStatusElement = document.getElementById(
						'shopping-cart-line-item-status'
					);

					this.currentItemCount = Array.from(
						this.querySelectorAll('[name="updates[]"]')
					).reduce(
						(total, quantityInput) => total + parseInt(quantityInput.value),
						0
					);

					this.debouncedOnChange = debounce((event) => {
						this.onChange(event);
					}, 300);

					this.addEventListener('change', this.debouncedOnChange.bind(this));
				}

				onChange(event) {
					this.updateQuantity(
						event.target.dataset.index,
						event.target.value,
						document.activeElement.getAttribute('name')
					);
				}

				getSectionsToRender() {
					return [
						{
							id: 'main-cart-items',
							section: document.getElementById('main-cart-items').dataset.id,
							selector: '.js-contents',
						},
						{
							id: 'cart-icon-bubble',
							section: 'cart-icon-bubble',
							selector: '.shopify-section',
						},
						{
							id: 'cart-live-region-text',
							section: 'cart-live-region-text',
							selector: '.shopify-section',
						},
						{
							id: 'main-cart-footer',
							section: document.getElementById('main-cart-footer').dataset.id,
							selector: '.js-contents',
						},
					];
				}

				updateQuantity(line, quantity, name) {
					this.enableLoading(line);

					const body = JSON.stringify({
						line,
						quantity,
						sections: this.getSectionsToRender().map(
							(section) => section.section
						),
						sections_url: window.location.pathname,
					});

					fetch(`${routes.cart_change_url}`, { ...fetchConfig(), ...{ body } })
						.then((response) => {
							return response.text();
						})
						.then((state) => {
							const parsedState = JSON.parse(state);
							this.classList.toggle('is-empty', parsedState.item_count === 0);
							const cartFooter = document.getElementById('main-cart-footer');

							if (cartFooter)
								cartFooter.classList.toggle(
									'is-empty',
									parsedState.item_count === 0
								);

							this.getSectionsToRender().forEach((section) => {
								const elementToReplace =
									document
										.getElementById(section.id)
										.querySelector(section.selector) ||
									document.getElementById(section.id);

								elementToReplace.innerHTML = this.getSectionInnerHTML(
									parsedState.sections[section.section],
									section.selector
								);
							});

							this.updateLiveRegions(line, parsedState.item_count);
							const lineItem = document.getElementById(`CartItem-${line}`);
							if (lineItem && lineItem.querySelector(`[name="${name}"]`))
								lineItem.querySelector(`[name="${name}"]`).focus();
							this.disableLoading();
						})
						.catch(() => {
							this.querySelectorAll('.loading-overlay').forEach((overlay) =>
								overlay.classList.add('hidden')
							);
							document.getElementById('cart-errors').textContent =
								window.cartStrings.error;
							this.disableLoading();
						});
				}

				updateLiveRegions(line, itemCount) {
					if (this.currentItemCount === itemCount) {
						document
							.getElementById(`Line-item-error-${line}`)
							.querySelector('.cart-item__error-text').innerHTML =
							window.cartStrings.quantityError.replace(
								'[quantity]',
								document.getElementById(`Quantity-${line}`).value
							);
					}

					this.currentItemCount = itemCount;
					this.lineItemStatusElement.setAttribute('aria-hidden', true);

					const cartStatus = document.getElementById('cart-live-region-text');
					cartStatus.setAttribute('aria-hidden', false);

					setTimeout(() => {
						cartStatus.setAttribute('aria-hidden', true);
					}, 1000);
				}

				getSectionInnerHTML(html, selector) {
					return new DOMParser()
						.parseFromString(html, 'text/html')
						.querySelector(selector).innerHTML;
				}

				enableLoading(line) {
					document
						.getElementById('main-cart-items')
						.classList.add('cart__items--disabled');
					this.querySelectorAll(`#CartItem-${line} .loading-overlay`).forEach(
						(overlay) => overlay.classList.remove('hidden')
					);
					document.activeElement.blur();
					this.lineItemStatusElement.setAttribute('aria-hidden', false);
				}

				disableLoading() {
					document
						.getElementById('main-cart-items')
						.classList.remove('cart__items--disabled');
				}
			}

			customElements.define('cart-items', CartItems);
		},
		cartNotification: function () {
			class CartNotification extends HTMLElement {
				constructor() {
					super();

					this.notification = document.getElementById('cart-notification');
					this.header = document.querySelector('sticky-header');
					this.onBodyClick = this.handleBodyClick.bind(this);

					this.notification.addEventListener(
						'keyup',
						(evt) => evt.code === 'Escape' && this.close()
					);
					this.querySelectorAll('button[type="button"]').forEach(
						(closeButton) =>
							closeButton.addEventListener('click', this.close.bind(this))
					);
				}

				open() {
					this.notification.classList.add('animate', 'active');

					this.notification.addEventListener(
						'transitionend',
						() => {
							this.notification.focus();
							trapFocus(this.notification);
						},
						{ once: true }
					);

					document.body.addEventListener('click', this.onBodyClick);
				}

				close() {
					this.notification.classList.remove('active');

					document.body.removeEventListener('click', this.onBodyClick);

					removeTrapFocus(this.activeElement);
				}

				renderContents(parsedState) {
					this.cartItemKey = parsedState.key;
					this.getSectionsToRender().forEach((section) => {
						document.getElementById(section.id).innerHTML =
							this.getSectionInnerHTML(
								parsedState.sections[section.id],
								section.selector
							);
					});

					if (this.header) this.header.reveal();
					this.open();
				}

				getSectionsToRender() {
					return [
						{
							id: 'cart-notification-product',
							selector: `[id="cart-notification-product-${this.cartItemKey}"]`,
						},
						{
							id: 'cart-notification-button',
						},
						{
							id: 'cart-icon-bubble',
						},
					];
				}

				getSectionInnerHTML(html, selector = '.shopify-section') {
					return new DOMParser()
						.parseFromString(html, 'text/html')
						.querySelector(selector).innerHTML;
				}

				handleBodyClick(evt) {
					const target = evt.target;
					if (
						target !== this.notification &&
						!target.closest('cart-notification')
					) {
						const disclosure = target.closest('details-disclosure');
						this.activeElement = disclosure
							? disclosure.querySelector('summary')
							: null;
						this.close();
					}
				}

				setActiveElement(element) {
					this.activeElement = element;
				}
			}

			customElements.define('cart-notification', CartNotification);
		},
		cartNote: function () {
			class CartNote extends HTMLElement {
				constructor() {
					super();

					this.addEventListener(
						'change',
						debounce((event) => {
							const body = JSON.stringify({ note: event.target.value });
							fetch(`${routes.cart_update_url}`, {
								...fetchConfig(),
								...{ body },
							});
						}, 300)
					);
				}
			}

			customElements.define('cart-note', CartNote);
		},
		passwordModal: function () {
			class PasswordModal extends DetailsModal {
				constructor() {
					super();

					if (this.querySelector('input[aria-invalid="true"]'))
						this.open({ target: this.querySelector('details') });
				}
			}

			customElements.define('password-modal', PasswordModal);
		},
		customer: function () {
			const selectors = {
				customerAddresses: '[data-customer-addresses]',
				addressCountrySelect: '[data-address-country-select]',
				addressContainer: '[data-address]',
				toggleAddressButton: 'button[aria-expanded]',
				cancelAddressButton: 'button[type="reset"]',
				deleteAddressButton: 'button[data-confirm-message]',
			};

			const attributes = {
				expanded: 'aria-expanded',
				confirmMessage: 'data-confirm-message',
			};

			class CustomerAddresses {
				constructor() {
					this.elements = this._getElements();
					if (Object.keys(this.elements).length === 0) return;
					this._setupCountries();
					this._setupEventListeners();
				}

				_getElements() {
					const container = document.querySelector(selectors.customerAddresses);
					return container
						? {
								container,
								addressContainer: container.querySelector(
									selectors.addressContainer
								),
								toggleButtons: document.querySelectorAll(
									selectors.toggleAddressButton
								),
								cancelButtons: container.querySelectorAll(
									selectors.cancelAddressButton
								),
								deleteButtons: container.querySelectorAll(
									selectors.deleteAddressButton
								),
								countrySelects: container.querySelectorAll(
									selectors.addressCountrySelect
								),
						  }
						: {};
				}

				_setupCountries() {
					if (Shopify && Shopify.CountryProvinceSelector) {
						// eslint-disable-next-line no-new
						new Shopify.CountryProvinceSelector(
							'AddressCountryNew',
							'AddressProvinceNew',
							{
								hideElement: 'AddressProvinceContainerNew',
							}
						);
						this.elements.countrySelects.forEach((select) => {
							const formId = select.dataset.formId;
							// eslint-disable-next-line no-new
							new Shopify.CountryProvinceSelector(
								`AddressCountry_${formId}`,
								`AddressProvince_${formId}`,
								{
									hideElement: `AddressProvinceContainer_${formId}`,
								}
							);
						});
					}
				}

				_setupEventListeners() {
					this.elements.toggleButtons.forEach((element) => {
						element.addEventListener('click', this._handleAddEditButtonClick);
					});
					this.elements.cancelButtons.forEach((element) => {
						element.addEventListener('click', this._handleCancelButtonClick);
					});
					this.elements.deleteButtons.forEach((element) => {
						element.addEventListener('click', this._handleDeleteButtonClick);
					});
				}

				_toggleExpanded(target) {
					target.setAttribute(
						attributes.expanded,
						(target.getAttribute(attributes.expanded) === 'false').toString()
					);
				}

				_handleAddEditButtonClick = ({ currentTarget }) => {
					this._toggleExpanded(currentTarget);
				};

				_handleCancelButtonClick = ({ currentTarget }) => {
					this._toggleExpanded(
						currentTarget
							.closest(selectors.addressContainer)
							.querySelector(`[${attributes.expanded}]`)
					);
				};

				_handleDeleteButtonClick = ({ currentTarget }) => {
					// eslint-disable-next-line no-alert
					if (confirm(currentTarget.getAttribute(attributes.confirmMessage))) {
						Shopify.postLink(currentTarget.dataset.target, {
							parameters: { _method: 'delete' },
						});
					}
				};
			}
		},
		themeEditor: function () {
			document.addEventListener('shopify:block:select', function (event) {
				const blockSelectedIsSlide =
					event.target.classList.contains('slideshow__slide');
				if (!blockSelectedIsSlide) return;

				const parentSlideshowComponent = event.target.closest(
					'slideshow-component'
				);
				parentSlideshowComponent.pause();

				setTimeout(function () {
					parentSlideshowComponent.slider.scrollTo({
						left: event.target.offsetLeft,
					});
				}, 200);
			});

			document.addEventListener('shopify:block:deselect', function (event) {
				const blockDeselectedIsSlide =
					event.target.classList.contains('slideshow__slide');
				if (!blockDeselectedIsSlide) return;
				const parentSlideshowComponent = event.target.closest(
					'slideshow-component'
				);
				if (parentSlideshowComponent.autoplayButtonIsSetToPlay)
					parentSlideshowComponent.play();
			});
		},
	};
	const f$ociety = {
		callShopify: function () {
			return Object.values(shopifyModules).map((value) => {
				if (typeof value === 'function') {
					value.call();
				}
			});
		},
	};
	f$ociety.callShopify();
	return enableElements;
})();
