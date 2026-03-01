<?php
/**
 * Nexflow functions and definitions
 */

if ( ! function_exists( 'nexflow_setup' ) ) :
    function nexflow_setup() {
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ) );
    }
endif;
add_action( 'after_setup_theme', 'nexflow_setup' );

function nexflow_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style( 'nexflow-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700;800&display=swap', array(), null );
    
    // Enqueue main stylesheet
    wp_enqueue_style( 'nexflow-style', get_stylesheet_uri(), array(), '1.0' );

    // Enqueue main javascript
    wp_enqueue_script( 'nexflow-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'nexflow_scripts' );
