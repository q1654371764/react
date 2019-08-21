import React from 'react';
const isLogin = (Compoent)=>{  //My
    // console.log(Compoent);
    return class extends React.Component{
        state = {
            islogin:false
        }
        render(){
            let {router:{history,match,location,title}} = this.props;
            let {islogin} = this.state;
            return islogin ? <Compoent history={history} match={match} location={location} title={title} /> : null
        }
        componentDidMount(){
            let islogin = window.localStorage.user;
            if(!islogin){
                this.props.router.history.replace('/login')
            }
            this.setState({islogin});
        }
    }
}

export default isLogin;