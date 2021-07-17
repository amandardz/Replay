// class Auth {
//   constructor() {
//     this.authenticated = false;
//   }

//   login(cb) {
//     this.authenticated = true;
//     cb();
//   }

//   logout(cb) {
//     this.authenticated = false;
//     cb();
//   }

//   isAuthenticated(req) {
//     return req.session.logged_in;
//   }
// }

// export default new Auth();

// import React from "react";

function withAuth(req, res) {
  if (req.session.logged_in) {
    return true;
  } else {
    return false;
  }
};

export default withAuth;