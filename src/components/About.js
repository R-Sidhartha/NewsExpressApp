import React, { Component } from "react";

export default class About extends Component {
  render() {
    const { savedMode } = this.props; // Get the savedMode from props
    return (
      <div className="container " style={{ marginTop: "70px",color:savedMode==='light' ? 'black' : 'white'}}
      >
          <div className="box">
                  <h1 className='text-center'style={{ fontSize: "45px" }}>About</h1>
                <p>
                  Welcome to News Express, your ultimate source for up-to-date
                  news and information from around the Country. Our cutting-edge
                  platform brings you the latest headlines, insightful articles,
                  and engaging multimedia content, all at your fingertips.
                </p>
          </div>
          <div className="box">                
                  <h2>News Express:</h2>
                <p>
                  A dynamic web app created with a passion for providing users
                  with the latest headlines and in-depth articles from various
                  categories.This platform aims to keep you informed and engaged with the news that matters most. With a focus on India and its diverse topics, India News delivers curated headlines, allowing you to delve deeper into the stories that capture your interest.
                </p>
          </div>
          <div className="box">
                  <h2>Explore Categories:</h2>
             
                <p>
                  Navigate through an array of categories tailored to your
                  interests. Our intuitive user interface allows you to
                  effortlessly browse through specific topics that captivate you
                  the most. Go through the Health situation , explore business
                  trends, dive into the world of technology, or immerse yourself
                  in the vibrant realms of entertainment and sports. News
                  Express offers a holistic news experience, enabling you to
                  explore a multitude of subjects within a single platform.
                </p>
          </div>
          <div className="box">
                  <h2>Seamless Article Reading Experience:</h2>
                <p>
                  With News Express, your journey doesn't stop at headlines.
                  Delve deeper into the stories that pique your curiosity by
                  accessing the full articles through the app just by clicking
                  on <b>Read more</b>. Each article provides comprehensive
                  coverage, insightful analysis, and a balanced perspective,
                  ensuring you have a well-rounded understanding of the topic at
                  hand.
                </p>
          </div>
          <div className="box">
                  <h2>Explore Categories:</h2>
                <p>
                  Navigate through an array of categories tailored to your
                  interests. Our intuitive user interface allows you to
                  effortlessly browse through specific topics that captivate you
                  the most. Go through the Health situation , explore business
                  trends, dive into the world of technology, or immerse yourself
                  in the vibrant realms of entertainment and sports. News
                  Express offers a holistic news experience, enabling you to
                  explore a multitude of subjects within a single platform.
                </p>
          </div>
          <div className="box">
            <h2>Harnessing the Power of React:</h2>
              <p>
                This web app is built on the React framework, a cutting-edge
                technology that elevates the user experience to new heights.
                React's efficient rendering engine ensures lightning-fast page
                loads and seamless navigation, allowing users to explore
                articles with remarkable speed. By leveraging React's
                component-based architecture, I had created a highly modular and
                scalable application that enables to continuously enhance and
                expand the features. With React's robust ecosystem and active
                community support, we can stay at the forefront of web
                development, delivering a top-notch news experience tailored to
                our users' needs.
              </p>
          </div>
        </div>
    );
  }
}
