import React, {Component} from 'react';
import * as httpUtil from './utils/httpUtils';

class TopStories extends Component{
  constructor(){
    super();
    this.state = {
      storyItem: []
    };
  }

componentDidMount(){
    httpUtil.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then(response =>{
    //   console.log(response.data);
      this.setState({
        stories:response.data
      });
    });
  }

  render(){
      
      return(
          <div></div>
      )
  }
}

export default TopStories;