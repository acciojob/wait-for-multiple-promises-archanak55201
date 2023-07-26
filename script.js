//your JS code here. If required.
const tbody= document.getElementById("output");


let prom1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve({name1:"Promise 1", time1:2});
	},1000)
})
let prom2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve({name1:"Promise 2",time1:1});
	},2000)
})
let prom3=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve({name1:"Promise 3", time1:3});
	},3000)
})

let promises=[prom1,prom2,prom3];
let x=Promise.all(promises);
x.then((data)=>{
  for(let i=0;i<promises.length;i++){
	  let tr=document.createElement("tr");
		let td1=document.createElement("td");
		td1.innerHTML=data[i].name1;
	  let td2=document.createElement("td");
		td2.innerHTML=data[i].time1;
	  tr.append(td1,td2);
	  tbody.appendChild(tr);
    // console.log(data[i].time1);
  }
})

