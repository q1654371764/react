import Mock from 'mockjs';

Mock.mock('/api/home',{
    'home|10':[
        {
            title:'@ctitle',
            info:'@text',
            image:'@image'
        }
    ]
})
Mock.mock('/api/type',{
    'type|10':[
        {
            title:'@ctitle',
            info:'@text',
            image:'@image'
        }
    ]
})