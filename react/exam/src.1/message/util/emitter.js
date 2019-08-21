class Emitter{
    constructor(){
        this.events = {};  //{hi:[f,f],sum:[f]}
    }
    on(eventname,ck){ //存起来
        if(this.events[eventname] instanceof Array){
            this.events[eventname].push(ck)
        }else{
            this.events[eventname] = [ck]
        }
    }
    emit(eventname,...arg){  //找到它去调用
        this.events[eventname].forEach(ck=>{
            ck(...arg)
        })
    }
    off(eventname,ck){
        this.events[eventname].splice(this.events[eventname].findIndex(callback=>callback===ck),1);
    }
}

export default new Emitter();


