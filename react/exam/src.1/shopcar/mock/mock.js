import Mock from 'mockjs';
import data from './index';

Mock.mock('/api/shopcar',{
    content:data.content
})
