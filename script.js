//your JS code here. If required.
const tr= document.getElementsByClassName("task");


let prom1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		 let start=performance.now();
		resolve({name1:"Promise 1", time1:2,tt:start});
	},2000)
})
let prom2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		
		 let start=performance.now();
		resolve({name1:"Promise 2",time1:1,tt:start});
	},1000)
})
let prom3=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		 let start=performance.now();
		resolve({name1:"Promise 3", time1:3,tt:start});
	},3000)
})

let promises=[prom1,prom2,prom3];
let x=Promise.all(promises);
x.then((data)=>{
	
	let total=0;
  for(let i=0;i<promises.length;i++){
	 let td1= tr[i].children[0];
		// let td1=document.createElement("td");
		td1.innerHTML=data[i].name1;
	  // let td2=document.createElement("td");
	 let td2= tr[i].children[1];
	  
		td2.innerHTML=data[i].time1;
	  
	total+=data[i].time1;
    // console.log(data[i].time1);
  }
	let tot= document.getElementById("total");
	tot.innerHTML=4;
	
})

