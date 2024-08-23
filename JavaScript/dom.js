// const x = document.querySelector('#js');
// x.style.color = "green";

// setTimeout(() => {
//  const design = document.querySelector('#js')

//  design.style.backgroundColor = "black";
//  x.style.color = "white";

// }, (2000));

// function changeColor()
// {
//    const x = document.querySelector('.web');
//    x.style.backgroundColor = "red";
//    x.style.color ="white";
//    x.innerHTML = "By Nikesh ";

// }

// function demo(){
//     const a = document.querySelectorAll('.web')
//     a[1].style.color="blue";
// }

// document.querySelector('#btn').onclick = demo;

// function mouseEvent() {
//   document.querySelector(".box").style.backgroundColor = "green";
//   console.log("Mouse Down");
// }
// function mouseOff() {
//   document.querySelector(".box").style.backgroundColor = "yellow";

//   console.log("Mouse off");
// }
// function clickEvent() {
//   document.querySelector(".box").style.backgroundColor = "brown";

//   console.log("Click Complete");
// }


// function demo(){
//     const x = document.querySelector('#firstName');
//     console.log(x.value);
//     x.value = x.value.toUpperCase();
    

// }

// document.querySelector('#btn').addEventListener("click",demo);
// document.querySelector('#btn').addEventListener("click",demo2);

// function demo(){
//     console.log("Event 1");
    
// }
// function demo2(){
//     console.log("Event 2");
    
// }

function addNew(){
    const para = document.createElement("p");
    const node = document.createTextNode("Best Learning Platform");
    para.appendChild(node);
     const ele = document.querySelector("#box1");
     ele.appendChild(para);
}