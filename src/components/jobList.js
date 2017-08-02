import React, {Component} from 'react';
import * as httpUtil from '../utils/httpUtils';

class JobList extends Component{
  constructor(){
    super();
    this.state = {
      story:''
    }
  }
  componentDidMount(){
    let url = 'https://hacker-news.firebaseio.com/v0/item/' + this.props.id + '.json';
      httpUtil.get(url).then(response =>{
       this.setState({
         story: response.data
       })
      })
  }
  
  sliceUrl = url =>{
    if(url!=undefined){
      return ('('+url.split('/')[2]+')')
    }
    return null;
    
  }
  render(){
    let currDate = new Date();
    let sec = Math.round(currDate.getTime()/1000);
    let diff =  sec-this.state.story.time;
    let hr = Math.round(diff/3600);
    console.log(this.state.story.title+'hr = '+hr);
    return(
      <div>
        <span className = "title"><a href ={this.state.story.url}> {this.state.story.title}</a></span>
        <span className = "url"> {this.sliceUrl(this.state.story.url)}</span>
        <div className = "time-job"><span className = "time">{hr} hours ago</span></div>
        
        </div>
    )
  }
}

export default JobList;