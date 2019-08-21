import Mock from 'mockjs';
import rightnav from './nav.json';
import leftcont from './list.json';
Mock.mock('/api/rightnav',{
    rightnav
})
Mock.mock('/api/leftcont',({body})=>{
    let {typeid} = JSON.parse(body);
    return leftcont.filter(val=>val.typeId===typeid*1)
})
