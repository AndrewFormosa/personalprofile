

let element=document.getElementById("changing_content_1");
let count=0;
let toggle=0;
let texts=[
    "Unity","C#","Node.js","OpenAI APIs","OpenAI function calling","Wordpress","Wordpress APIs",".Net 6", "SQL", "java script","PHP","BASH","Responsive Web-Site Design","Java-Script Algorithms","Data Structures",
"Front end development libraries", "React & Redux","Data-visulisation & D3", "Relational Databases","Audio Transcription","Express Server", "MongoDB and Mongoose", "Backend development and APIs"];
setInterval(changeText, 3000);
function changeText(){
if(toggle==0){
    element.style="opacity:1;translate: 0px 0px;";
    element.innerHTML=texts[count/2];
    toggle=1;
}else{
     element.style="opacity:0;translate: 0px 100px;";
     toggle=0;
}
    count++;

    if(count>texts.length*2-1){
        count=0;
    }
}