module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fNrOwmQ3+BOVpmeH4icDZQ=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '5a/PdoU8MPMuRc7Argn2uQ=='),
  },
});
