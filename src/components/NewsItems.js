import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,publishedAt, source,mode}=this.props
    const style1 = {
      background: mode === 'light' ? 'white' : 'black',
      color: mode === 'light' ? 'black' : 'white',}
    return (
        <div className="card my-3" style={{border:`1px solid ${style1.color}`}} >
          <img
            src={imageUrl?imageUrl:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/breaking_latest_news_1200x675_1-sixteen_nine_538.jpg?VersionId=iMEtiFS.w9lQmV7Tzxoj1s3B1vj_8NRS'}
            className="card-img-top"
            alt='BREAKING-NEWS'
          />
          <div className="card-body" style={style1}>
          <span className="badge badge-light" style={{background:'rgb(224, 40, 40)'}}>{source}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <p className="card-text "><small className={`text-${style1.color}`}><b>{author?author:'Unknown'}</b> <br></br>{new Date(publishedAt).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
    );
  }
}
