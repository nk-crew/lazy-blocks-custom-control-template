/**
 * Styles.
 */
import './index.scss';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { useSelect } from '@wordpress/data';
import { PanelBody, TextControl } from '@wordpress/components';

/**
 * Editor Component.
 *
 * @param {Object} props
 */
function EditorComponent(props) {
	const { data, getValue, onChange } = props;

	const { BaseControl, useBlockControlProps } = useSelect((select) => {
		const components = select('lazy-blocks/components').get();
		const hooks = select('lazy-blocks/hooks').get();

		return {
			BaseControl: components.BaseControl,
			useBlockControlProps: hooks.useBlockControlProps,
		};
	});

	return (
		<BaseControl {...useBlockControlProps(props, { label: false })}>
			<TextControl
				label={data.label}
				placeholder={data.placeholder}
				value={getValue()}
				onChange={onChange}
			/>
			<p>
				{__('Custom Control Attribute:', 'TEXTDOMAIN')}{' '}
				{data.CONTROL_NAME_custom_attribute}
			</p>
		</BaseControl>
	);
}

/**
 * Constructor Component.
 *
 * @param {Object} props
 */
function ConstructorComponent(props) {
	const { updateData, data } = props;

	return (
		<PanelBody>
			<TextControl
				label={__('Custom Attribute', 'TEXTDOMAIN')}
				value={data.CONTROL_NAME_custom_attribute}
				onChange={(val) => {
					updateData({
						CONTROL_NAME_custom_attribute: val,
					});
				}}
			/>
		</PanelBody>
	);
}

/**
 * Control render in editor.
 */
addFilter(
	'lzb.editor.control.CONTROL_NAME.render',
	'lzb.editor',
	(render, props) => {
		return <EditorComponent {...props} />;
	}
);

/**
 * Control settings render in constructor.
 */
addFilter(
	'lzb.constructor.control.CONTROL_NAME.settings',
	'lzb.constructor',
	(render, props) => {
		return <ConstructorComponent {...props} />;
	}
);
