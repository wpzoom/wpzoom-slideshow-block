/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, RangeControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// Only allow core/cover blocks to be added
const ALLOWED_BLOCKS = ['wpzoom/slide'];

import { useEffect } from '@wordpress/element';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { useNavigation, usePagination, autoplay, loop, speed, spaceBetween, slidesPerView, uniqueId } = attributes;

	// Generate a unique ID only if one doesn't already exist
	useEffect(() => {
		if (!uniqueId) {
			const newUniqueId = 'slideshow-' + Math.random().toString(36).substr(2, 9);
			setAttributes({ uniqueId: newUniqueId });
		}
	}, [uniqueId]);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Slideshow Settings" initialOpen={true}>
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
						label="Autoplay"
						checked={autoplay}
						onChange={(value) => setAttributes({ autoplay: value })}
					/>
					<ToggleControl
						label="Loop"
						checked={loop}
						onChange={(value) => setAttributes({ loop: value })}
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
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<p>{__('Slideshow Block', 'wpzoom-slideshow-block')}</p>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS} // Limit to Slide blocks
					templateLock={false}           // Allow freeform editing of slides
					renderAppender={InnerBlocks.ButtonBlockAppender} // Appender for adding more blocks
				/>
			</div>
		</>
	);
}
