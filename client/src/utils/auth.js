function withAuth(req, res) {
  if (req.session.logged_in) {
    return true;
  } else {
    return false;
  }
};

export default withAuth;