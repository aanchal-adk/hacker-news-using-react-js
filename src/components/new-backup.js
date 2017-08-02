import React, {Component} from 'react';
import * as httpUtil from '../utils/httpUtils';


class New extends Component{
  constructor(){
    
    super();
    this.state = {
      stories: [],
      isLoaded:false
    };
    this.arr = [];
  }

componentDidMount(){
      
    
    httpUtil.get('https://hacker-news.firebaseio.com/v0/newstories.json').then(response =>{
      // console.log(response.data.length);
      let L = response.data.length;
      for(let i=0 ; i<L ; i++){
      let url = 'https://hacker-news.firebaseio.com/v0/item/' + response.data[i]  + '.json'
      httpUtil.get(url).then(response =>{
        this.arr[i]=response.data;
        //console.log(this.arr[i].id);
        // console.log(response.data);
    //     this.setState({
    //       stories: merge({},this.state.stories,response.data);
    //   });
      });
      //console.log(this.state.stories);
      }
      
    }).then(response =>{
        console.log(this.arr);
        //console.log(this.arr);
        this.setState({
            isLoaded: true,
            stories:this.arr
        })
    }
    );
  }

  render(){
    
    if(this.state.isLoaded){
      console.log(this.state.stories[0]);
    return(
      <div>ggggggggg</div>
    );
  }
  else
    return null;
  }
}

export default New;