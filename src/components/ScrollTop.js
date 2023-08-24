import React, { Component } from 'react'
import './ScrollTop.css'


export default class ScrollTop extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          isVisible: true,
        };
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
      hideAfterDelay = () => {
        setTimeout(() => {
          this.setState({ isVisible: true });
        }, 4000);
      };

      handleScroll = () => {
        const { isVisible } = this.state;
        if (window.scrollY > 0 && isVisible) {
          this.setState({ isVisible: false });
          this.hideAfterDelay();
        } else if (window.scrollY === 0 && !isVisible) {
          this.setState({ isVisible: true });
        }
      };
      toTop=()=>{
        window.scrollTo(0, 0);
    }
  render() {
    const { isVisible } = this.state;
      return (
      <div className='ScrollToTop' onClick={this.toTop}  style={{
        visibility: isVisible ? 'hidden' : 'visible',
      }}>
        <b>&#8963;</b> 
      </div>
    )
  }
}
