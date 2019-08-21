import React from 'react';
import Dialog from './Dialog';
const DragDialog = (Com)=>{
    return class extends React.Component{
        render(){
            let {title,children} = this.props;
            //Com Dialog
            return <div><Com title={title}>{children}</Com></div>
        }
    }   
}


export default DragDialog(Dialog);