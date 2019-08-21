import Mock from 'mockjs';
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
navdata.forEach(item=>{
    let count = Math.floor(Math.random()*11+10);
    let img = Mock.Random.image('100x100',`rgb(${count},${count+20},${count+40})`,'1611B');
    Mock.mock(item.path,{
        title:item.title,
        [`count|${count}`]:1,
        [`list|${count}`]:[
           {
               title:"@ctitle",
               info:"@name",
               image:img
           } 
        ]
    })
})

