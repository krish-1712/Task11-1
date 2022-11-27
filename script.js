
var health=document.createElement('div')
health.innerHTML=`<input type="text" id="txt" placeholder="  Enter the country name">
<button class="button-class" type="button" onClick="foo()">Search</button>`
health.setAttribute('id','count')
var head=document.getElementById("header")
head.after(health)

function foo() {
    console.log('test');
    var value = document.getElementById('value');
    if(value){
        value.innerText="";
    }
    
const p=new Promise((resolve,reject)=>{
    let covid= document.getElementById("txt").value
    if(!covid){
        alert('please enter country name');
        return;
    }
    var res= fetch(`https://api.covid19api.com/dayone/country/${covid}`);
    res.then((json)=>resolve(json.json())).then((err)=>reject(err));

   

})
console.log('after promise', p);
p.then((res)=>{
    console.log(res)
    let active= res.length-1;
      let activecase= res[active].Active
      console.log(activecase)

     let confirmedcase= res[active].Confirmed
     console.log(confirmedcase)
     let recovercase= res[active].Recovered
     console.log(recovercase)
     let deathcase= res[active].Deaths
     console.log(deathcase)
     let covid = res[active].Country
     console.log(covid)
     
     var health=document.createElement('div')
     document.getElementById('txt').value="";
    health.innerText=`Total Active Cases in ${covid} : ${activecase} 

         Total confirmed Cases in ${covid} : ${confirmedcase}

         Total recover Cases in ${covid} : ${recovercase}

         Total death Cases in ${covid} : ${deathcase}`
         health.setAttribute('id','value')
         health.setAttribute('class','result')
         var res=document.getElementById("result")
         res.after(health)
 
}).catch((err)=>{
    alert("Please enter proper value")
})
}
