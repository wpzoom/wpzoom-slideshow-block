import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		useNavigation, usePagination, useScrollbar, autoplay, loop,
		speed, spaceBetween, slidesPerView, effect, direction,
		freeMode, centeredSlides, cssMode, gridRows, controller, uniqueId,
		fullHeight, minHeight
	} = attributes;

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

	const blockProps = useBlockProps.save({ className: 'swiper-wrapper' });

	return (
		<div id={uniqueId} className={`slideshow-container swiper`} data-swiper={swiperOptions} style={{ minHeight: fullHeight ? '100vh' : minHeight }}>
			<div {...blockProps}>
				<InnerBlocks.Content />
			</div>
			{/* Conditional rendering for pagination, navigation, and scrollbar elements */}
			{usePagination && <div className="swiper-pagination"></div>}
			{useNavigation && (
				<>
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</>
			)}
			{useScrollbar && <div className="swiper-scrollbar"></div>}
		</div>
	);
}
