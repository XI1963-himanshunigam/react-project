import { Component } from "react";
import Config from "../../Config";
import "../Dashboard/Dashboard.css";
import { Link } from "react-router-dom";
class Posts extends Component {
  constructor() {
    super();
    this.state = {
      data: false,
    };
  }

  componentDidMount() {
    let url = `${Config.baseUrl}/posts`;
    fetch(url, {
      method: "Get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp });
      });
    });
  }

  render() {
    const data = this.state.data;
    console.warn(data);

    return (
      <div class="container">
        {data ? (
          <div>
            <div className="row">
              {data.map(function (d, idx) {
                return (
                  <div className="col-md-3" key={idx}>
                    <Link to={{
                      pathname: `/post-details/${d.id}`,
                      state: { users: d }
                    }}>
                      <ul className="card-list">
                        <li className="card">
                          <span className="card-image">
                            <img
                              src="https://picsum.photos/200/300?random=1"
                              alt="Psychopomp"
                            />
                          </span>
                          <span className="card-description">
                            <h2>Posts</h2>
                            <p class="text-wrap">{d.title}</p>
                          </span>
                        </li>
                      </ul>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p>Please wait</p>
        )}
      </div>
    );
  }
}
export default Posts;
