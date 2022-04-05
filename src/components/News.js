import './App.css';
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

  }

  constructor() {
    super();
    this.state = {
      articles: [],
      isLoaded: false,
      page: 1
    };
  }

  async newsUpdate(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a50ee36500b94c94b12cc2bdbcb641a1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ isLoaded: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      isLoaded: false
    });

  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a50ee36500b94c94b12cc2bdbcb641a1&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ isLoaded: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      isLoaded: false
    });
  }
  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a50ee36500b94c94b12cc2bdbcb641a1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({ isLoaded: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   isLoaded: false
    // })

    this.setState({
      page: this.state.page -1
    })
    this.newsUpdate();
  }
  handleNextClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a50ee36500b94c94b12cc2bdbcb641a1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({ isLoaded: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   isLoaded: false
    // })
    this.setState({
      page:this.state.page+1
    })
    this.newsUpdate();
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <section class="news-card">
          <div className='container'>
            <h1>NewsHunt - Top Headlines</h1>
            {this.state.isLoaded && <Spinner />}
            <div className='row'>
              {!this.state.isLoaded && articles.map(articles => (
                <div className="col s12 m4 red" key={articles.url}>
                  <NewsItem title={articles.title ? articles.title : ""}
                    description={articles.description ? articles.description.slice(0, 99) : "Three people including two Indian nationals were killed and six wounded as a suspected d..."}
                    imageUrl={articles.urlToImage} newsUrl={articles.url} author={articles.author} date={articles.author} />
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className='col left' style={{ paddingLeft: "50px", display: this.state.page <= 1 ? 'none' : 'block' }}>
              <button className="btn black" onClick={this.handlePrevClick} style={{ display: this.state.isLoaded == true ? 'none' : 'block' }} ><i className="fa fa-chevron-circle-left"></i>Previous</button>
            </div>
            <div className="col right" style={{ paddingRight: "250px" }} style={{ display: this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) ? 'none' : 'block' }} >
              <button className="btn black" onClick={this.handleNextClick} style={{ display: this.state.isLoaded == true ? 'none' : 'block' }}>Next<i className="fa fa-chevron-circle-right"></i></button>
            </div>
          </div>
        </section>
      </div>
    )

  }
}

export default News
