import Mock from 'mockjs';


Mock.mock('/api/login',({body})=>{  //{user:'',pwd:121}
    let {username,pwd} = JSON.parse(body);
    if(username==='zs' && pwd==='1234'){
        return {
            code:1,
            msg:'success'
        }
    }else{
        return {
            code:0,
            msg:'error'
        }
    }
})