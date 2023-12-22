export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET || 'asdasdhlfj',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  },
});
