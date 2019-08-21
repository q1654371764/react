import React,{Component} from 'react';
// import Table from './table/table'
// import Jd from './jd/jd'
// import Life from './lifecycle/index'
// import NewLife from './lifecycle/newlife'
// import Zk from './zk1/Index'
// import Inp from './inp/index'
// import Todolist from './2019.4.15/index'
// import Events from './events/index'
// import Drag from './events/Drag'
// import Login from './login'
// import Message from './message'
// import Zoompic from './zoomPic'
// import Dialog from './dialog'
// import RouterConfig from './route/routerConfig'
// import Maoyan from './maoyao/router'
// import Zk from './zk2/router'
// import Coding from './coding/router'
import {Provider} from 'react-redux';
import store from './store/index'
import List from './list'
import Shopcar from './shopcar'
// import Context from './connect/util/context'
// import store from './connect/data'
// import Index from './connect/index'
// console.log(Context,store);
class App extends Component{
  render(){ //渲染react元素
    return <div className="app">
        <Provider store={store}>
            <Shopcar />
            <List />
        </Provider>
    </div>
  }
  
}



export default App;