import Mock from 'mockjs';
let imgage = Mock.Random.image('100x250','#fb0a2a')
let data = Mock.mock({
    'list|15':[
        {
            img:imgage,
            title:'@ctitle',
            'num|1-10':1,
            name:'@cname',
            'id|+1':0,
            'type|1':['购票','预售']
        }
    ]
})
let res = {};
if(!res.list){
    res.list = data.list;
}
Mock.mock('/movie',res);