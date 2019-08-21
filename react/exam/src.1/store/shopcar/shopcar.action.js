import {INIT_DATA,CHANGE_COUNT,CHANGE_CHECKED} from './shopcar.actionType'
import axios from 'axios';
import '../../shopcar/mock/mock'

export const initGetData = (url)=>{
    return dispatch=>{
        axios.get(url).then(res=>{
            dispatch({
                type:INIT_DATA,
                content:res.data.content
            })
        })
    }
}

export const changecount=(options)=>{
    return {
        type:CHANGE_COUNT,
        ...options
    }  //{type:,itemindex,groupindex,count}
}

export const clickbtn=(obj)=>{
    return {
        type:CHANGE_CHECKED,
        ...obj
    }
}