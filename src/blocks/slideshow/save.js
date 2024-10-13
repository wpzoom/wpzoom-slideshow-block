/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { useNavigation, usePagination, autoplay, loop, speed, spaceBetween, slidesPerView, uniqueId } = attributes;

	const swiperOptions = JSON.stringify({
		useNavigation,
		usePagination,
		autoplay,
		loop,
		speed,
		spaceBetween,
		slidesPerView
	});

	const blockProps = useBlockProps.save();
	blockProps.className += ' swiper-wrapper';

	return (
		<div id={uniqueId} className={`slideshow-container swiper`} data-swiper={swiperOptions}>
			<div {...blockProps}>
				<InnerBlocks.Content />
			</div>
			{usePagination && <div className="swiper-pagination"></div>}
			{useNavigation && (
				<>
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</>
			)}
		</div>
	);
}
