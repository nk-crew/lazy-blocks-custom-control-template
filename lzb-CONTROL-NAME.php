<?php
/**
 * Plugin Name:       Lazy Blocks: CONTROL_LABEL Control
 * Description:       SHORT_DESCRIPTION
 * Version:           1.0.0
 * Requires at least: 6.2
 * Requires PHP:      8.0
 * Plugin URI:        PLUGIN_URL
 * Author:            AUTHOR_NAME
 * Author URI:        AUTHOR_URL
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       TEXTDOMAIN
 *
 * @package lzb-CONTROL-NAME
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * NAMESPACE_Lzb_Plugin_CONTROL_NAME Class
 */
class NAMESPACE_Lzb_Plugin_CONTROL_NAME {

	/**
	 * Plugin Path.
	 *
	 * @var string
	 */
	public static $plugin_path;

	/**
	 * Plugin URL.
	 *
	 * @var string
	 */
	public static $plugin_url;

	/**
	 * NAMESPACE_Lzb_Plugin_CONTROL_NAME constructor.
	 */
	public function __construct() {}

	/**
	 * Init.
	 *
	 * `lzb/init` only fires when Lazy Blocks is loaded, so no plugin check is
	 * needed here. Priority 6 runs right after Lazy Blocks includes the
	 * LazyBlocks_Control base class on `lzb/init` priority 5, and before the
	 * priority 10 where blocks are usually registered.
	 */
	public static function init() {
		add_action( 'lzb/init', array( 'NAMESPACE_Lzb_Plugin_CONTROL_NAME', 'init_hook' ), 6 );
	}

	/**
	 * Register the control once Lazy Blocks is ready.
	 */
	public static function init_hook() {
		self::$plugin_path = plugin_dir_path( __FILE__ );
		self::$plugin_url  = plugin_dir_url( __FILE__ );

		// Translations.
		load_plugin_textdomain( 'TEXTDOMAIN', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

		// Include control.
		include_once self::$plugin_path . 'controls/CONTROL-NAME.php';
	}

	/**
	 * Get .asset.php file data.
	 *
	 * @param string $filepath asset file path.
	 *
	 * @return array
	 */
	public static function get_asset_file( $filepath ) {
		$asset_path = self::$plugin_path . $filepath . '.asset.php';

		if ( file_exists( $asset_path ) ) {
			// phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude.FileIncludeFound
			return include $asset_path;
		}

		return array(
			'dependencies' => array(),
			'version'      => '1.0.0',
		);
	}
}

NAMESPACE_Lzb_Plugin_CONTROL_NAME::init();
