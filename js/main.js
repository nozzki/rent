// jQuery(document).ready(function($) {
//   // let abc = {
//   //   name: 'Anna',
//   //   age: 30,
//   //   city: 'Yerevan',
//   //   bday: '1995-07-05',
//   //   job: null
//   // }

//   // // let myJs = JSON.stringify(abc);
//   // // // $("#jso").html(myJs) ;
//   // // // alert(typeof myJs)
//   // // localStorage.setItem('first',myJs)
//   // // sessionStorage.setItem('first',myJs)


//   // // let txt = `{
//   // //   "name":"Armen",
//   // //   "age":[19,20],
//   // //   "city":"New-York",
//   // //   "bday":"2001-03-04"
//   // // }`
//   // // console.log(txt)
//   // // let obj = JSON.parse(txt)
//   // // $('#jso').html(`${obj.name},${obj.age},${obj.bday}`)

//   // // obj = JSON.parse(txt,function(key,value){
//   // //   if(key == 'bday') return new Date(value)
//   // //   return value;
//   // // })

//   // // console.log(obj)

//   // for (let i in obj.age){
//   //   console.log(obj.age[i])
//   // }
//   // $.ajax('https://repetitora.net/api/JS/Images')

//   // $.ajax('https://repetitora.net/api/JS/Images',{
//   //   success: function(data){
//   //     console.log(data)
//   //       data.forEach(el => {
//   //         const img = document.createElement('img')
//   //         img.src = el.thumbnail
//   //         document.querySelector('body').appendChild(img)
//   //       })
//   //   }
//   // })


//   //   $.ajax('https://repetitora.net/api/JS/Images?page=2&count=3',{
//   //     success: function(data){
//   //       console.log(data)
//   //       data.forEach(el => {
//   //         const img = document.createElement('img')
//   //         img.src = el.original
//   //         document.querySelector('body').appendChild(img)
//   //       })
//   //     }
//   //   })

//     let x = document.querySelector('#demo')
//     let y = document.querySelector('#btn')
//     let z = document.querySelector('#imgslid')
//     y.addEventListener('click',foo)

//     function foo(){
//       $.ajax(`https://repetitora.net/api/JS/Images?page=${z.value}&count=3`,{
//         success: function(data){
//         console.log(data)
//         data.forEach(el => {
//           const img = document.createElement('img')
//           img.src = el.original
//           document.querySelector('#demo').appendChild(img)
//         })
//         }
//       })
//     }
// });

// function test(){
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       // document.getElementById("test").innerHTML = this.responseText
//       let k = JSON.parse(this.responseText);
//       const img = document.createElement('img')
//       img.src = k[2].original;
//       document.querySelector('#demo').appendChild(img)
//     }
//   };
//   xhttp.open("GET", ' https://repetitora.net/api/JS/Images' , true);
//   xhttp.send()
// }

// test()
 jQuery(document).ready(function($) {

    let divp = document.querySelector('.portofile')

   $('.uparrow').click(function(event) {
    if($(this).hasClass('rotate')){
        $(this).addClass('rotateback');
        $(this).removeClass('rotate');
    }else{
        $(this).addClass('rotate');
        $(this).removeClass('rotateback');
    } ;
   });

 });
  

  // let a;
  // try{
  //   a+=b
  // } catch(error){
  //   alert(error.name)
  //   alert(error.message)
  //   alert(error)
  // }

function funk() {
  let y,x;
  y = document.getElementById("message");
  y.innerHTML = "";
  x = document.getElementById("num").value;
  try{
    if (x == "") throw "Enter number";
    if (isNaN(x)) throw "this is not number";
    if (x<10) throw "bigger then 10";
    if (x>20) throw "above then 20";
  } catch(err){
    y.innerHTML = 'Error:' + err
  }
}

const n = 100,d = 'j';

try {
  // console.log(n/d)
  console.log(s)
} catch(e) {
  console.log('An error caught')
  console.log("error message: " + e);
}
finally{
  console.log('Finnaly will execute every time')
}
let completed = true
let learnJs = new Promise(function (resolve,reject){
  if(completed){
    resolve("i have completed learning js")
  }else{
    reject("i havent completed learning js")
  }
});

learnJs.then(
  value => console.log(value)
).catch(
  err => console.log(err)
).finally(() => console.log('my code'));;


const first = new Promise((resolve,reject) =>{
  resolve('first text')
})

const second = new Promise((resolve,reject) =>{
  resolve(' second text')
})

const third = new Promise((resolve,reject) =>{
  resolve('third text')
})

Promise.all([
  first,
  second,
  third
]).then(message =>{
  console.log(message)
})

Promise.race([
  first,
  second,
  third
]).then(message =>{
  console.log(message)
})


fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response){return response.json()})
  .then(function(data){console.log(data);
    let ab = document.querySelector('#datafetch');
    ab.innerText = data[0].username;

  })


function foo(){
  return new Promise((resolve,reject) => {
    setTimeout(() => resolve('Hello'),3000)
  })
}
async function f(){
  const b = await foo();
  return b + ' world ';
}
f().then(function(result){
  alert(result)
}).catch(function(err){
  alert(err)
})