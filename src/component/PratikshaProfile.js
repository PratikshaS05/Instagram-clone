import React, { Component } from 'react';
import DpPratiksha from './pratiksha.jpeg';
import '../App.css';
import Pratiksha1 from './pratiksha1.jpeg';
import Pratiksha2 from './pratiksha2.jpeg';
import Icon from './insta-icon.jpeg';
class PratikshaProfile extends Component{

    constructor(props) {
        super(props);
        this.state={
            follow:'Follow',
            Followers:557
        }
          
    }
    change = () => {
     if(this.state.follow === 'Following'){
         this.setState({
             follow:'Follow',
             Followers:this.state.Followers-1
         });
     }else{ 
         this.setState({
        follow:'Following',
        Followers:this.state.Followers+1
    });

     }
    }
  render(){
  return (
    <div style={{borderRadius:25,border:'1px solid grey',marginTop:-20}}>
        <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={Icon} style={{marginRight : 100, blockSize:100}}></img>
                <p></p>
                <p style={{marginRight : 100, marginTop :20}}>pratii_s05 </p>
                <hr />        
            </div>
        </div>

        <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={DpPratiksha} height="140" width="140" style={{borderRadius : 70, marginTop :0, marginRight : 20}}></img>
                <p style={{marginLeft :40, marginTop : 30, fontSize : 25}}>2</p>
                <p style={{marginTop : 80, marginLeft:-30}}>Posts</p>
                <p style={{marginTop : 30,  marginLeft:35,fontSize : 25}}>{this.state.Followers}</p>
                <p style={{marginTop : 80, marginLeft:-50}}>Followers</p>
                <p style={{marginTop : 30, marginLeft:20, fontSize : 25}}>668</p>
                <p style={{marginTop : 80, marginLeft:-40}}>Following</p>

            </div>
        </div>
        
        <div className="ctQZ">   
            <div className="_47KiJ">
                <p style={{marginTop :-19,marginRight:280, fontWeight : 200}}> pratii_s05</p>
                </div>
            </div>


        <div className="ctQZ">   
            <div className="_47KiJ">
                <p  style={{marginTop : -19,marginRight:235, fontWeight : 200}}> <pre>Cake Murderer 5 Dec </pre></p>
                
                </div>
            </div>

            <div className="ctQZ">   
            <div className="_47KiJ">
                <button style={{marginTop : -29, marginRight:50,fontWeight : 200, blockSize : 30,background:'skyblue'}} onClick={this.change}> {this.state.follow}</button>
                <button style={{marginTop : -29,marginRight:70, fontWeight : 200, blockSize : 30,background:'skyblue'}}> Message</button>
                </div>
            </div>

            <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={Pratiksha1} style={{marginTop :0, marginRight:20,fontWeight : 100, blockSize : 100}}></img>
                <img src={Pratiksha2} style={{marginTop : 0, marginRight:50,fontWeight : 100, blockSize : 100}}></img>
                
                
                </div>
            </div>        
    
   </div>
  );
 }
}

export default PratikshaProfile;
