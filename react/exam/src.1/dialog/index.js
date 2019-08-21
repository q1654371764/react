import React, { Component } from 'react'
import Dialog from './Dialog'
import DragDialog from './DragDialog';

class Index extends Component {
  render() {
    return (
      <div>
          <Dialog title="输入弹窗">
              <input type="text"/>
          </Dialog>

          <Dialog title="删除弹窗">
              <p>确定要删除吗？</p>
          </Dialog>


          <DragDialog title="空白弹窗">
              <p>空白弹窗</p>
          </DragDialog>
      </div>
    )
  }
}


export default Index;