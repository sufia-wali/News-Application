import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <>
          <div className="card">
            <div className="card-image">
            {/* <div class="col s2"> */}
              <img className="circle responsive-img" src={!imageUrl ? "https://cdn.cnn.com/cnnnext/dam/assets/220116190335-01-us-ballistic-missiel-submarine-guam-intl-hnk-ml-super-tease.jpg" : imageUrl} alt="news_info"  />
            {/* </div> */}
            </div>
            <div className="card-title black-text">{title}</div>
            <div className="card-content hide-on-med-and-down">
              <span >{description}...</span>
            </div>
            <div className="card-action " >
              <span className="card-time" >By {author} on {date}</span>
              <a href={newsUrl} className="btn-floating pulse btn-small  pink darken-3" ><i className="fa fa-angle-double-down"></i> </a>
            </div>
          </div>

      </>
    )
  }
}

export default NewsItem
