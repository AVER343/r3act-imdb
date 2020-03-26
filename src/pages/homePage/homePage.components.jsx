import React from 'react';
import {SearchingContainer,SearchingForm,TitleContainer} from './homepage.styles'
import FormInput from '../../components/form-input/form-input.component';
import {fourItemPairs as fIP,myFunction as mF} from'./homepage.utis'
import CollectionPreviewComponent from '../../components/collection-preview/collection-preview.component';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName:'',
      yearOfRelease:'',
      Search:[],
      response:'false',
      totalResults:'',
     }
var timeout
 this.fetchingData = (url)=>{
   timeout= setTimeout(
            ()=>{
               fetch(url)
                   .then(response=>{
                        if(response.status!==200) {return console.error('Not working')};
                             return response.json()})
                    .then(data=>{ 
                                  this.setState({Search:data.Search,response:data.response,totalResults:data.totalResults})
                                  })
                    .catch(error=>
                            {
                              alert(error)
                            })
              }, 2000);};
    this.Search = this.state.Search
    this.url =`https://www.omdbapi.com/?APIKEY=a51d58ac`
    this.myFunction=(state,url,fetchingData)=>mF(state,url,fetchingData)
    this.myStopFunction=  ()=> 
    {
       clearTimeout(timeout);
    }
    this.fourItemPairs=(Search)=>fIP(Search)   
}

   handlePageChange=(event)=>{
    if(this.state.movieName==='')
        {
           console.error("ENTER MOVIE NAME FIRST")
        }
    else {
        this.myStopFunction()
        this.handleChange(event)
        }
   }
   handleChange = (event)=> {
    this.myStopFunction()
    const { value, name } = event.target;
    this.setState({ [name]: value },()=>value?this.myFunction(this.state,this.url,this.fetchingData):null);
  };
  render() {
    return (
      <div><SearchingContainer>
       <SearchingForm>
            <form >
            <FormInput
                name='movieName'
                type='text'
                handleChange={this.handleChange}
                value={this.state.movieName}
                label='movie name'
                required
            />
            <FormInput
                name='yearOfRelease'
                type='number'
                handleChange={this.handleChange}
                value={this.state.yearOfRelease}
                label='year of release'
            />         
            <FormInput
                name='page'
                type='number'
                handleChange={this.handlePageChange}
                value={this.state.page}
                label='page number'
                required
            />
           </form>
       </SearchingForm>
       
    </SearchingContainer>
    <TitleContainer onClick={() => {console.log("Working")}}>
     {this.state.Search?<div>Total Results:{this.state.totalResults}</div>:null}
    </TitleContainer>
    {this.state.Search?this.fourItemPairs(this.state.Search).map(element=>{
        return (<CollectionPreviewComponent key={Math.random()+10*Math.random()} Search={element}></CollectionPreviewComponent>)
      }):null} 
    </div>
    );
  }
}

export default HomePage