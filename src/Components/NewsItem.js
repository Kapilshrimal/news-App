import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div>
        <div className="card">
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {date}</small></p>
    <a href={newsUrl} className="btn btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
