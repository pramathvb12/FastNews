import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgurl, newsurl, author, time, source } = this.props;
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src={
              !imgurl ? "https://wallpapercave.com/wp/wp2599602.jpg" : imgurl
            }
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text">
              <small className="text-danger">
                By {!author ? "Unknown" : author} at{" "}
                {new Date(time).toUTCString()}
              </small>
            </p>
            <p>
              Source : :{" "}
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {source}
              </span>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
