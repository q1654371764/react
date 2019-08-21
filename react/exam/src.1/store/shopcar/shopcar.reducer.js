import {
    INIT_DATA,
    CHANGE_COUNT,
    CHANGE_CHECKED
} from './shopcar.actionType';

const defaultState = {
    allcheck:false,
    allprice:0,
    content:[]
}
const reducePrice = content =>{
    // return content.reduce((prev,item)=>{  //[0,40]  [0,80]
    //     return prev + item.shopItem.reduce((prev,val)=>{
    //        return prev + (val.check ? val.count * val.price : 0)
    //     },0);
    // },0)

    let price = 0;
    content.forEach(item=>{
        item.shopItem.forEach(val=>{
            if(val.check){
                price += (val.count*val.price)
            }
        })
    })
    return price;
}
const shopcar = (state = defaultState,action)=>{
    let newstate = {...state,content:[...state.content]};
    switch(action.type){
        case INIT_DATA: //获取默认数据 设置content的数据
            newstate.content = action.content;
            newstate.allprice = reducePrice(newstate.content)
            return newstate;
        case CHANGE_COUNT:
        {
            let {itemindex,groupindex,count} = action;
            newstate.content[groupindex].shopItem[itemindex].count = count;
            newstate.allprice = reducePrice(newstate.content)
            return newstate;
        }
        case CHANGE_CHECKED:
        {
            let {itemindex,groupindex,checked} = action;
            let {content} = newstate;
            //全选
            if(itemindex===undefined && groupindex===undefined){
                newstate.allcheck = checked;
                content.forEach(item=>{
                    item.check = checked;
                    item.shopItem.forEach(val=>{
                        val.check = checked;
                    })
                })
            }else if(itemindex === undefined){ //店铺
               content[groupindex].check = checked;
               newstate.allcheck = content.every(item=>item.check);
               content[groupindex].shopItem.forEach(item=>{
                   item.check = checked;
               })
            }else{ //商品
               content[groupindex].shopItem[itemindex].check = checked;
               content[groupindex].check = content[groupindex].shopItem.every(item=>item.check);
               newstate.allcheck = content.every(item=>item.check);
            }
            newstate.allprice = reducePrice(newstate.content)
            return newstate;
        }
        default :
            return state;
    } 
}

export default shopcar;