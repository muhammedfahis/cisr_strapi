module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '611e9c735375d111c097ad9c0aa16dbf'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'd9b0df66ff97a666027e665707b4e3e7'),
  }
});
