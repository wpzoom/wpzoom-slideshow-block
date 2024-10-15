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
import { useBlockProps, InnerBlocks, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, RangeControl, SelectControl, Button } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';  // To insert blocks programmatically
import { useEffect } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// Only allow wpzoom/slide blocks to be added
const ALLOWED_BLOCKS = ['wpzoom/slide'];

// Define the template for initial slideshow creation with two slides
const SLIDESHOW_TEMPLATE = [
	[
		'wpzoom/slide',
		{},
		[
			['core/image', {}]
		]
	],
	[
		'wpzoom/slide',
		{},
		[
			['core/video', {}]
		]
	]
];

// Define the block structure for adding new slides with a locked core/cover block
const createNewSlideBlock = () => {
	return createBlock('wpzoom/slide', {}, [
		createBlock('core/cover', {
			lock: {
				remove: true,
				move: true
			}
		}, []), // Creates an empty cover block inside the slide
	]);
};

export default function Edit({ clientId, attributes, setAttributes }) {
	const {
		useNavigation, usePagination, useScrollbar, autoplay, loop,
		speed, spaceBetween, slidesPerView, effect, direction,
		freeMode, centeredSlides, cssMode, gridRows, controller, uniqueId
	} = attributes;

	const { insertBlock } = useDispatch('core/block-editor'); // Allows programmatic block insertion

	// Generate a unique ID only if one doesn't already exist
	useEffect(() => {
		if (!uniqueId) {
			const newUniqueId = 'slideshow-' + Math.random().toString(36).substr(2, 9);
			setAttributes({ uniqueId: newUniqueId });
		}
	}, [uniqueId]);

	// Function to handle adding a new slide with a locked cover block
	const addNewSlide = () => {
		const newSlide = createNewSlideBlock();
		insertBlock(newSlide, undefined, clientId); // Inserts the new slide block
	};

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
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<p>{__('Slideshow Block', 'wpzoom-slideshow-block')}</p>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}  // Limit to Slide blocks
					template={SLIDESHOW_TEMPLATE}   // Automatically adds two slides with image and video blocks
					templateLock={false}            // Allow freeform editing of slides
					renderAppender={false}          // Hide the default "Add Block" button
				/>
				<div className="append-slide-button">
					<Button
						variant="primary"
						onClick={addNewSlide} // Handle click to add a new slide with a cover
					>
						{__('Add Slide', 'wpzoom-slideshow-block')}
					</Button>
				</div>
			</div>
		</>
	);
}
