import React, {Component} from 'react';
import * as httpUtil from '../utils/httpUtils';

class NewList extends Component{
  constructor(){
    super();
    this.state = {
      story:''
    }
  }

  sliceUrl = url =>{
    if(url!=undefined){
      return ('('+url.split('/')[2]+')')
    }
    return null;
    
  }
  componentDidMount(){
    let url = 'https://hacker-news.firebaseio.com/v0/item/' + this.props.id + '.json';
      httpUtil.get(url).then(response =>{
       this.setState({
         story: response.data
       })
      })
  }
  
  render(){
    return(
      <div>
      <span className = "title"><a href ={this.state.story.url}>{this.state.story.title}</a></span>
        <span className = "url">{this.sliceUrl(this.state.story.url)}</span>
        <span className = "points">{this.state.story.score} point by {this.state.story.by}</span>
        </div>
    )
  }
}

export default NewList;