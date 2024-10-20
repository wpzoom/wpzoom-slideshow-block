import { __ } from '@wordpress/i18n';
import { store, useBlockProps, useInnerBlocksProps, InspectorControls, ButtonBlockAppender } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, RangeControl, SelectControl, Button, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { useEffect, useRef, useState } from '@wordpress/element';
import { useSelect } from "@wordpress/data";
import { seen, edit } from '@wordpress/icons';
import initSlideshow from './script';
import './editor.scss';

// Only allow wpzoom/slide blocks to be added
const ALLOWED_BLOCKS = ['wpzoom/slide'];

// Define the template for initial slideshow creation with two slides
const SLIDESHOW_TEMPLATE = [
	[
		'wpzoom/slide',
		{},
		[
			[
				'core/cover',
				{
					url: wpzoomSlideshowData.pluginUrl + 'assets/media/demo.jpg',
					customOverlayColor: 'rgba(0, 0, 0, 0.3)',
					lock: {
						move: true,
						remove: true,
					}
				}
			]
		]
	],
	[
		'wpzoom/slide',
		{},
		[
			[
				'core/cover',
				{
					backgroundType: 'video',
					url: wpzoomSlideshowData.pluginUrl + 'assets/media/demo.mp4',
					customOverlayColor: 'rgba(0, 0, 0, 0.3)',
					lock: {
						move: true,
						remove: true,
					}
				}
			]
		]
	]
];

export default function Edit({ clientId, isSelected, attributes, setAttributes }) {
	const {
		useNavigation, usePagination, useScrollbar, autoplay, loop,
		speed, spaceBetween, slidesPerView, effect, direction,
		freeMode, centeredSlides, cssMode, gridRows, controller, uniqueId,
		fullHeight, minHeight
	} = attributes;
	const blockInstance = useRef(null);
	const swiperInstance = useRef(null);

	// States for preview mode
	const [previewMode, setPreviewMode] = useState(false);
	const hasInnerBlocksSelected = useSelect(
		(select) => select(store).hasSelectedInnerBlock(clientId, true)
	);

	// Track the number of inner blocks (slides)
	const innerBlocksCount = useSelect(
		(select) => select(store).getBlock(clientId)?.innerBlocks.length || 0,
		[clientId]
	);

	// Track inner blocks props
	const { children, ...innerBlockProps } = useInnerBlocksProps(useBlockProps(), {
		allowedBlocks: ALLOWED_BLOCKS,
		template: SLIDESHOW_TEMPLATE,
		renderAppender: false
	});

	// Build swiper options to be used in the script.js
	const swiperOptions = JSON.stringify({
		useNavigation,
		usePagination,
		useScrollbar,
		autoplay,
		loop,
		speed,
		spaceBetween,
		slidesPerView,
		effect,
		direction,
		freeMode,
		centeredSlides,
		cssMode,
		grid: {
			rows: gridRows
		}
	});

	// Generate a unique ID only if one doesn't already exist
	useEffect(() => {
		if (!uniqueId) {
			const newUniqueId = 'slideshow-' + Math.random().toString(36).substr(2, 9);
			setAttributes({ uniqueId: newUniqueId });
		}
	}, [uniqueId]);

	// Set preview mode to false when slides are added / removed
	useEffect(() => {
		setPreviewMode(false);
	}, [innerBlocksCount]);

	// Update swiper instance when options change
	useEffect(() => {
		if (previewMode) {
			const currentIndex = swiperInstance.current?.activeIndex || 0;

			if (swiperInstance.current) {
				swiperInstance.current.destroy(true, true); // Destroy with cleanup of DOM and events
			}

			const node = blockInstance.current?.querySelector('.swiper');
			swiperInstance.current = initSlideshow(node);
			swiperInstance.current.slideTo(currentIndex, 0, false);
		}
	}, [swiperOptions]);

	// Initialize the Swiper instance when preview mode is enabled
	useEffect(() => {
		if (!previewMode) {
			swiperInstance.current?.destroy?.();
			return;
		}

		const node = blockInstance.current?.querySelector('.swiper');
		swiperInstance.current = initSlideshow(node);
	}, [previewMode]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Slideshow Settings", "wpzoom-slideshow-block")} initialOpen={true}>
					<ToggleControl
						label="Navigation"
						checked={useNavigation}
						onChange={(value) => setAttributes({ useNavigation: value })}
					/>
					<ToggleControl
						label="Pagination"
						checked={usePagination}
						onChange={(value) => setAttributes({ usePagination: value })}
					/>
					<ToggleControl
						label="Scrollbar"
						checked={useScrollbar}
						onChange={(value) => setAttributes({ useScrollbar: value })}
					/>
					<ToggleControl
						label="Autoplay"
						checked={autoplay}
						onChange={(value) => setAttributes({ autoplay: value })}
					/>
					<ToggleControl
						label="Loop"
						checked={loop}
						onChange={(value) => setAttributes({ loop: value })}
					/>
					<ToggleControl
						label="Free Mode"
						checked={freeMode}
						onChange={(value) => setAttributes({ freeMode: value })}
					/>
					<ToggleControl
						label="Centered Slides"
						checked={centeredSlides}
						onChange={(value) => setAttributes({ centeredSlides: value })}
					/>
					<ToggleControl
						label="CSS Mode"
						checked={cssMode}
						onChange={(value) => setAttributes({ cssMode: value })}
					/>
					<ToggleControl
						label="Controller"
						checked={controller}
						onChange={(value) => setAttributes({ controller: value })}
					/>
					<RangeControl
						label="Speed (ms)"
						value={speed}
						onChange={(value) => setAttributes({ speed: value })}
						min={100}
						max={5000}
					/>
					<RangeControl
						label="Space Between (px)"
						value={spaceBetween}
						onChange={(value) => setAttributes({ spaceBetween: value })}
						min={0}
						max={200}
					/>
					<RangeControl
						label="Slides Per View"
						value={slidesPerView}
						onChange={(value) => setAttributes({ slidesPerView: value })}
						min={1}
						max={5}
					/>
					<RangeControl
						label="Grid Rows"
						value={gridRows}
						onChange={(value) => setAttributes({ gridRows: value })}
						min={1}
						max={5}
					/>
					<SelectControl
						label="Effect"
						value={effect}
						options={[
							{ label: 'Slide', value: 'slide' },
							{ label: 'Fade', value: 'fade' },
							{ label: 'Cube', value: 'cube' },
							{ label: 'Flip', value: 'flip' },
							{ label: 'Coverflow', value: 'coverflow' }
						]}
						onChange={(value) => setAttributes({ effect: value })}
					/>
					<SelectControl
						label="Direction"
						value={direction}
						options={[
							{ label: 'Horizontal', value: 'horizontal' },
							{ label: 'Vertical', value: 'vertical' }
						]}
						onChange={(value) => setAttributes({ direction: value })}
					/>
					<ToggleControl
						label={__("Full Height", "wpzoom-slideshow-block")}
						checked={fullHeight}
						onChange={(value) => setAttributes({ fullHeight: value })}
					/>
					{!fullHeight && (
						<UnitControl
							label="Min Height"
							value={minHeight}
							onChange={(value) => setAttributes({ minHeight: value })}
							units={[
								{ label: 'px', value: 'px', default: 300 },
								{ label: '%', value: '%', default: 10 },
								{ label: 'em', value: 'em', default: 1 },
								{ label: 'rem', value: 'rem', default: 1 },
								{ label: 'vw', value: 'vw', default: 10 },
								{ label: 'vh', value: 'vh', default: 10 }
							]}
						/>
					)}
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()} style={{ minHeight: fullHeight ? '100vh' : minHeight }}>
				{(isSelected || hasInnerBlocksSelected) && (
					<div className="toggle-edit-mode">
						{!previewMode ? (
							<Button onClick={() => setPreviewMode(true)} variant="primary" icon={seen}>Switch to preview mode</Button>
						) : (
							<Button onClick={() => setPreviewMode(false)} variant="primary" icon={edit}>Switch to edit mode</Button>
						)}
					</div>
				)}
				<div className='slideshow-container' ref={blockInstance}>
					{previewMode ? (
						<div id={uniqueId} className="swiper" data-swiper={swiperOptions}>
							<div className="swiper-wrapper">{children}</div>
							{usePagination && <div className="swiper-pagination"></div>}
							{useNavigation && (
								<>
									<div className="swiper-button-prev"></div>
									<div className="swiper-button-next"></div>
								</>
							)}
							{useScrollbar && <div className="swiper-scrollbar"></div>}
						</div>
					) : children}
				</div>
				<div className="append-slide-button">
					<ButtonBlockAppender rootClientId={clientId} />
				</div>
			</div>
		</>
	);
}
