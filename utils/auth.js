const withAuth = (req, res, next) => {
    console.log("This is session", req.session);
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;