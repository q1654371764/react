import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
class Item extends Component {
  render() {
      let {data,history:{push}} = this.props
      console.log(push);
    return (
      <dl>
         <dt>
             <img src={data.img}/>
         </dt>
         <dd>
             <h2>{data.title}</h2>
             观众平<b>{data.num}</b>
             <p>主演:{data.name}</p>
             <button onClick={()=>{
                 push(`/detail/${data.id}`)
             }}>{data.type}</button>
         </dd>
      </dl>
    )
  }
}

export default withRouter(Item);


// function withRouter(Componet){
//     return class extends React.Component{
//         state = {
//             history:{},
//             match:{},
//             location:{}
//         }
//         render(){
//             let {history,match,location} = this.state;
//             let {data} = this.props;
//             return <Componet history={history} match={match} location={location} data={data}></Componet>
//         }
//     }
    
// }

// withRouter(Item);