import React, {Component} from 'react';
import * as httpUtil from '../utils/httpUtils';
import ShowList from './showList'


class Show extends Component{
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
      
    
    httpUtil.get('https://hacker-news.firebaseio.com/v0/showstories.json').then(response =>{
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
      console.log(storyId);
      if(i<20*this.state.more){
        return(
        <div key = {storyId} className = "story-wrapper clearfix">
          <ShowList id = {storyId}/>  
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

export default Show;