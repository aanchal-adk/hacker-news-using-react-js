import React, {Component} from 'react';
import * as httpUtil from '../utils/httpUtils';
import TopList from './topList'


class Top extends Component{
  constructor(){
    
    super();
    this.state = {
      stories: [],
      storiesId: [],
      isLoaded:false,
      more: 1
    };
    this.arr = [];
  }

  loadMore = () => {
    this.setState({
      more:this.state.more +1
    });
    console.log(this.state.more);
  }

  componentWillMount(){
    httpUtil.get('https://hacker-news.firebaseio.com/v0/topstories.json').then(response =>{
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
    <div className = "clearfix">{this.state.storiesId.map((storyId,i) => {
      //console.log(storyId);
      if(i<=10*this.state.more){
      return(
       <div key = {storyId} className = "story-wrapper clearfix">
         <TopList id = {storyId}/>  
       </div>
      )
      }
    })
    }
    <button onClick = {this.loadMore}>More</button>
    </div>)
      
    }
    else{return null}
  }
}

export default Top;

