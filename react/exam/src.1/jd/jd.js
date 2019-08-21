import React,{Component} from 'react'
import Table from './components/Table'
import SlidePic from './components/SlidePic'
import Tabledata from './mock/data.json'
import Slidedata from './mock/slide.json';
import './css/index.scss';
class Content extends Component{
    render(){
        return (
            <div>
                <Table Tabledata={Tabledata}/>
                <SlidePic Slidedata={Slidedata} />
            </div>
        )
    }
}

export default Content;