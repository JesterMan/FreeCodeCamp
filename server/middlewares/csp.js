import helmet from 'helmet';

let trusted = [
  "'self'"
];

if (process.env.NODE_ENV !== 'production') {
  trusted = trusted.concat([
    'ws://localhost:3001',
    'http://localhost:2999',
    'ws://localhost:2999'
  ]);
}

export default function csp() {
  return helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: trusted.concat([
        '*.optimizely.com',
        'https://*.cloudflare.com',
        '*.cloudflare.com'
      ]),
      scriptSrc: [
        "'unsafe-eval'",
        "'unsafe-inline'",
        '*.google-analytics.com',
        '*.gstatic.com',
        '*.optimizely.com',
        'https://*.cloudflare.com',
        '*.cloudflare.com',
        'https://*.gitter.im',
        'https://*.cdnjs.com',
        '*.cdnjs.com',
        'https://*.jsdelivr.com',
        '*.jsdelivr.com',
        '*.twimg.com',
        'https://*.twimg.com',
        '*.youtube.com',
        '*.ytimg.com'
      ].concat(trusted),
      styleSrc: [
        "'unsafe-inline'",
        '*.gstatic.com',
        '*.googleapis.com',
        '*.bootstrapcdn.com',
        'https://*.bootstrapcdn.com',
        '*.cloudflare.com',
        'https://*.cloudflare.com'
      ].concat(trusted),
      fontSrc: [
        '*.cloudflare.com',
        'https://*.cloudflare.com',
        '*.bootstrapcdn.com',
        '*.googleapis.com',
        '*.gstatic.com',
        'https://*.bootstrapcdn.com'
      ].concat(trusted),
      imgSrc: [
        // allow all input since we have user submitted images for
        // public profile
        '*',
        'data:'
      ],
      mediaSrc: [
        '*.bitly.com',
        '*.amazonaws.com',
        '*.twitter.com'
      ].concat(trusted),
      frameSrc: [
        '*.gitter.im',
        '*.gitter.im https:',
        '*.youtube.com',
        '*.twitter.com',
        '*.ghbtns.com',
        '*.freecatphotoapp.com',
        'freecodecamp.github.io'
      ].concat(trusted)
    },
    // set to true if you only want to report errors
    reportOnly: false,
    // set to true if you want to set all headers
    setAllHeaders: false,
    // set to true if you want to force buggy CSP in Safari 5
    safari5: false
  });
}
