import React, {Component} from 'react';
import * as httpUtil from '../utils/httpUtils';

class Comments extends Component{
  constructor(){
    super();
    this.state = {
      stories: []
    };
  }

componentDidMount(){
    httpUtil.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty').then(response =>{
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

export default Comments;