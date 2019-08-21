import React, { Component } from 'react'
import {datatop,datacenter} from './mock'
class TableTop extends Component{
    static defaultProps = {
        datatop:{
            title:'jd'
        }
    } 
    render(){
        let {datatop} = this.props;

        return <div className="tableTop">
            <h2>{datatop.title}</h2>
            <dl>
                <dt><img src={datatop.img}/></dt>
                <dd>{datatop.info}</dd>
            </dl>
        </div>
    }
}

function TableCont(props){
    console.log(props);
    return <dl>
            <dt></dt>
            <dd></dd>
    </dl>
}
class TableCenter extends Component{
    state = {
        index:0
    }
    render(){
        let {datacenter} = this.props;
        let {index} = this.state;
        // console.log(index);
        return <div className="tableCenter">
            <div className="tableTitle">
                {
                    datacenter.map((item,i)=><span key={item.id} style={{
                        padding:10,
                        display:'inline-block',
                        color:index===i?'red':'#000'
                    }}
                    onClick={this.aa.bind(this)}>{item.title}</span>)
                }
            </div>
            <TableCont dataCont={datacenter[index].content}/>
        </div>
    }
    aa(){
        console.log(this);
    }
}
function TableLink(props){
    return <div className="tableLink">


    </div>
}
class Table extends Component {
  render() {
    return (
      <div>
          <TableTop datatop={datatop} />
          <TableCenter datacenter={datacenter}/>
          <TableLink />
      </div>
    )
  }
}

export default Table;
