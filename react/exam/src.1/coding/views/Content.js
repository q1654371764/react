import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import '../css/style.css'
import '../mock';
import axios from 'axios';
const navdata = [
    {
        title:'所有项目',
        path:'/all'
    },
    {
        title:'我创建的',
        path:'/create'
    },
    {
        title:'我参与的',
        path:'/share'
    },
    {
        title:'已归档',
        path:'/end'
    }
]
export default class Content extends Component {
    state = {
        data:{},
        loading:true,
        text:'',
        list:[]
    }
  render() {
      let {data,loading,text,list} = this.state;
      let {history:{push}} = this.props;
    return (
      <div className="main">
        <nav className="nav">
            {
                navdata.map((item,key)=><NavLink key={key} to={item.path}>{item.title}</NavLink>)
            }
        </nav>
        {loading ? <div>loading...</div> : <section className="rightContent">
            <h2>{data.title}({data.count})</h2>
            <div>
                <input type="text" placeholder="搜索项目" value={text} onChange={(e)=>{
                    this.search(e,list)
                }}/>
            </div>
            <div>
                {
                    data.list.map((item,key)=><dl key={key} onClick={()=>{
                        push(`/detail/${key}`)
                    }}>
                        <dt><img src={item.image}/></dt>
                        <dd>
                            <p>{item.title}</p>
                            <p>{item.info}</p>
                        </dd>
                    </dl>)
                }
            </div>
        </section>}
      </div>
    )
  }
  componentDidMount(){
    let {match:{path}} = this.props;
    axios.get(path).then(res=>{
        this.setState({data:res.data,loading:false,list:res.data.list})
    })
  }
  search(e,list){
      let text = e.target.value;
      let {data} = this.state;
      list = list.filter(item=>item.title.includes(text));
      this.setState({text,data:{
          ...data, //{title,count,list}
          list:[...list]
        }})
  }
}
