import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";


export default class news extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      loading:true
    };
  }
  
  capitaliseFirstLetter=(text)=>{
text=text.charAt(0).toUpperCase()+text.slice(1)
return text;
  }
  async newsupdate(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a52e0fd22704bcd9dc9326051ec4997&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let news = await data.json();
    this.setState({
      articles: Array.from(news.articles),
      totalResults: news.totalResults,
      loading:false
    });
  }
  async componentDidMount() {
   this.newsupdate()
   document.title=`${this.capitaliseFirstLetter(this.props.category)}-News Express`
  }
  // gonext = async () => {
  //   window.scrollTo(0, 0);
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.newsupdate()
  // };
  // goprev = async () => {
  //   window.scrollTo(0, 0);
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.newsupdate()
  // };
  fetchMoreData= async()=>{
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a52e0fd22704bcd9dc9326051ec4997&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let news = await data.json();
    this.setState({
      articles: this.state.articles.concat(news.articles),
      totalResults: news.totalResults,
    });
  }
  render() {
    const { mode } = this.props;
    return (
      <>
        <h1 className={`text-center text-${(mode==='light')?'dark':'light'}`} style={{marginTop:'75px'}}><b>Trending Topics In {this.props.category}</b></h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<h4><Spinner/></h4>}
          >
            <div className="container">
          <div className="row ">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                    mode={mode}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>

        {/* <div className="d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark "
            onClick={this.goprev}
          >
            &larr; Prev
          </button>
          <button
            disabled={this.state.totalResults === this.state.page}
            type="button"
            className="btn btn-dark "
            onClick={this.gonext}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}
