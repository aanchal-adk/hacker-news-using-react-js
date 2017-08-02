import React, {Component} from 'react';
import * as httpUtil from '../utils/httpUtils';
import JobList from './jobList'


class Job extends Component{
  constructor(){
    
    super();
    this.state = {
      stories: [],
      storiesId: [],
      isLoaded:false,
    };
    this.arr = [];
  }

  componentWillMount(){
    httpUtil.get('https://hacker-news.firebaseio.com/v0/jobstories.json').then(response =>{
      this.setState({
          storiesId:response.data,
          isLoaded:true
        })
    })
  }

  render(){
    //console.log(date)
    if(this.state.isLoaded){
    return(
    <div>{this.state.storiesId.map(storyId => {
      //console.log(storyId);
      return(
       <div key = {storyId} className = "story-wrapper clearfix">
         <JobList id = {storyId}/>  
       </div>
      )
    })
    }</div>)
      
    }
    else{return null}
  }
}

export default Job;

