
let count = 0;
document.getElementById("iBtn").onclick = function(){
    count++;
    document.getElementById("countLabel").textContent = count;

}

document.getElementById("dBtn").onclick = function(){
    count--;
    document.getElementById("countLabel").textContent = count;

}

document.getElementById("rBtn").onclick = function(){
    count = 0;
    document.getElementById("countLabel").textContent = count;

}
console.log("u are a bad boy and    --- u")