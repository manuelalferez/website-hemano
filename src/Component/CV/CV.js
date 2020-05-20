import React, { Component } from "react";
import Markdown from 'react-markdown'
import "./CV.css";

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ''
    };
  }
  async componentDidMount() {
    const search = this.props.location.pathname;
    if (search) {
      const posted = require(`../../data/CV/cv.md`);
      const data = await fetch(posted).then(res => res.text());
      this.setState({
        post: data
      });
    }
  }

  render() {
    return (
      <div className="Post_graper">
        <div className="Post">
            <Markdown
              source={this.state.post}
              escapeHtml={false}
            />
        </div>
      </div>
    )
  }
}

export default CV;
