/**
 * Script for CONTROL_LABEL Control
 */
const { __ } = wp.i18n;

const {
    Fragment,
} = wp.element;

const {
    addFilter,
} = wp.hooks;

const {
    PanelBody,
    TextControl,
} = wp.components;

/**
 * Control render in editor.
 */
addFilter( 'lzb.editor.control.CONTROL_NAME.render', 'lzb.editor', ( render, props ) => {
    return (
        <div className="NAMESPACE-lzb-control_CONTROL_NAME">
            <TextControl
                label={ props.data.label }
                help={ props.data.help }
                value={ props.getValue() }
                onChange={ props.onChange }
            />
            <p>
                Custom Control Attribute: { props.data.CONTROL_NAME_custom_attribute }
            </p>
        </div>
    );
} );

/**
 * Control settings render in constructor.
 */
addFilter( 'lzb.constructor.control.CONTROL_NAME.settings', 'lzb.constructor', ( render, props ) => {
    const {
        updateData,
        data,
    } = props;

    // console.log(props);

    return (
        <PanelBody>
            <TextControl
                label={ __( 'Custom Attribute', 'TEXTDOMAIN' ) }
                value={ data.CONTROL_NAME_custom_attribute }
                onChange={ ( val ) => {
                    updateData( {
                        CONTROL_NAME_custom_attribute: val,
                    } );
                } }
            />
        </PanelBody>
    );
} );
