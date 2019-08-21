let a = {
    num:0,
    lists:[]
}

let b = {...a,lists:[...a.lists]};  //{num:0,lists:[],lists:}

console.log(b===a);
console.log(b.lists === a.lists);