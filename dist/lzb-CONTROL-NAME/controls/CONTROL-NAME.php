<?php
/**
 * CONTROL_LABEL Control.
 *
 * @package lzb-CONTROL-NAME
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'NAMESPACE_Lzb_Control_CONTROL_NAME' ) ) :
    /**
     * NAMESPACE_Lzb_Control_CONTROL_NAME class.
     *
     * LazyBlocks_Control - https://github.com/nk-o/lazy-blocks/blob/master/src/controls/_base/index.php
     */
    class NAMESPACE_Lzb_Control_CONTROL_NAME extends LazyBlocks_Control {
        /**
         * Constructor
         */
        public function __construct() {
            // Control unique name.
            $this->name = 'CONTROL_NAME';

            // Control icon SVG.
            // You may use these icons https://material.io/resources/icons/?icon=accessibility&style=outline .
            $this->icon = '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></g></svg>';

            // Control value type [string, number, boolean].
            $this->type = 'string';

            // Control label.
            $this->label = __( 'CONTROL_LABEL', 'TEXTDOMAIN' );

            // Category name [basic, content, choice, advanced, layout]
            // How to add custom category - https://lazyblocks.com/documentation/php-filters/lzb-controls-categories/
            $this->category = 'basic';

            // Add/remove some options from control settings.
            // More options see in https://github.com/nk-o/lazy-blocks/blob/master/src/controls/_base/index.php .
            $this->restrictions = array(
                'default_settings' => false,
                'help_settings'    => false,
            );

            // Optional additional attributes, that will be saved in control data.
            $this->attributes = array(
                'CONTROL_NAME_custom_attribute' => 'default_value',
            );

            parent::__construct();
        }

        /**
         * Register control assets.
         */
        public function register_assets() {
            wp_register_script(
                'NAMESPACE-lzb-control-CONTROL_NAME',
                NAMESPACE_Lzb_Plugin_CONTROL_NAME::$plugin_url . 'assets/js/CONTROL-NAME.min.js',
                array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components' ),
                '1.0.0',
                true
            );
            wp_register_style(
                'NAMESPACE-lzb-control-CONTROL_NAME',
                NAMESPACE_Lzb_Plugin_CONTROL_NAME::$plugin_url . 'assets/css/CONTROL-NAME.min.css',
                array(),
                '1.0.0'
            );
        }

        /**
         * Enqueue control scripts.
         *
         * @return array script dependencies.
         */
        public function get_script_depends() {
            return array( 'NAMESPACE-lzb-control-CONTROL_NAME' );
        }

        /**
         * Enqueue control styles.
         *
         * @return array style dependencies.
         */
        public function get_style_depends() {
            return array( 'NAMESPACE-lzb-control-CONTROL_NAME' );
        }
    }

    // Init.
    new NAMESPACE_Lzb_Control_CONTROL_NAME();
endif;
