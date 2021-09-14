import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Photos from "./Photos";
import Album from "./Album";
import Posts from "./Posts";
import PhotoDetail from "./PhotoDetail";
import AlbumDetail from "./AlbumDetail";
import PostDetail from "./PostDetail";
import { withRouter } from "react-router-dom";

const Nav = () => (
  <div>
    <div className="float-left">
      <Link to="/photos">Photos</Link>
    </div>
    <div className="float-left ml20">
      <Link to="/album">Album</Link>
    </div>
    <div className="float-left ml20">
      <Link to="/posts">Posts</Link>
    </div>
  </div>
);

class Dashboard extends Component {
  constructor() {
    var storage = JSON.parse(sessionStorage.getItem("userData"));
    super();
    this.state = {
      name: "React",
      user: storage,
    };
  }

  // Logout method
  logout() {
    window.sessionStorage.removeItem("userData");
    this.props.history.push("/login");
  }

  // HTML section starts from here
  render() {
    return (
      <Router>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">Logo</div>

            <div className="col-md-4">
              <h3>Welcome, {this.state.user[0].name}</h3>
            </div>

            <div
              className="col-md-4 text-right cursor-pointer"
              onClick={() => {
                this.logout();
              }}
            >
              Logout
            </div>
            <Nav />
          </div>

          <Route exact path="/photos" component={Photos} />
          <Route path="/album" component={Album} />
          <Route path="/posts" component={Posts} />
          <Route path="/photo-details/:id" component={PhotoDetail} />
          <Route path="/album-details/:id" component={AlbumDetail} />
          <Route path="/post-details/:id" component={PostDetail} />
        </div>
      </Router>
    );
  }
}
export default withRouter(Dashboard);
