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

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// Only allow core/cover blocks to be added
const ALLOWED_BLOCKS = [
	'core/cover',
	'core/heading',
	'core/paragraph',
	'core/quote',
	'core/list',
	'core/button',
	'core/table',
	'core/image',
	'core/video'
];

const SLIDE_TEMPLATE = [
	[
		'core/cover',
		{
			overlayColor: 'pale-cyan-blue',
			lock: {
				move: true,
				remove: true,
			}
		},
		[
			['core/heading', { placeholder: 'Your title here' }]
		]
	]
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<div {...useBlockProps({ className: 'swiper-slide' })}>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={SLIDE_TEMPLATE}
				templateLock={false}
			/>
		</div>
	);
}
