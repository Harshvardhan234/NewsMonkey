import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    let d = new Date(date);

    return (
      <div>
        <div className="card position-relative">
          {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
          </span> */}
          <span
            className="position-absolute badge-top-right"
            style={{
              zIndex: 1,
              top: "-10px",
              right: "-10px",
              backgroundColor: "#dc3545",
              color: "white",
              padding: "4px 10px",
              fontSize: "13px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            {source || "Unknown"}
          </span>
          <img
            src={
              !imageUrl
                ? "https://png.pngtree.com/png-clipart/20230312/original/pngtree-breaking-news-live-tv-label-logo-png-image_8984565.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on {d.toLocaleDateString()} at{" "}
                {d.toLocaleTimeString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
