// Logger Middleware
// Logs the HTTP method and URL of every incoming request with a timestamp

const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);

  // Pass control to the next middleware or route handler
  next();
};

module.exports = logger;
