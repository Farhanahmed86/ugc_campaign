const mix = require('laravel-mix');
// mix.setPublicPath('public')
mix.js('resources/assets/js/app.js', 'public/js').vue();
    mix.sass('resources/assets/sass/app.scss', 'public/css');

    // .postCss('resources/assets/sass/app.scss', 'public/css');
    // .sass('resources/assets/sass/app.scss', 'public/css');

    // mix.js('resources/assets/js/app.js', 'public/js')
    // .sass('resources/assets/sass/app.scss', 'public/css');