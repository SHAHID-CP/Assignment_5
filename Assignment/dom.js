// theme change
let a=0;
const btn=document.getElementById("colorChange").addEventListener('click',function(event){
    a++;
    if(a===6){
        a=0;
    }

const bgchange=document.getElementById("bgChange");
switch (a) {
    case 0:
    bgchange.style.backgroundColor="#292966";
    break;
    case 1:
        bgchange.style.backgroundColor="#A4A5F5";
    break;
    case 2:
        bgchange.style.backgroundColor="#DD88CF";
    break;
    case 3:
        bgchange.style.backgroundColor="#85DECB";
    break;
    case 4:
        bgchange.style.backgroundColor="#09122C";
    break;
    case 5:
        bgchange.style.backgroundColor="gray";
    break;
}
});
// page change
document.getElementById("changePage").addEventListener("click",function(){
    window.location.href ="extra.html";
})
// document.getElementById("extraChange").addEventListener("click",function(){
//     window.location.href ="index.html";
//     console.log("shahidd");
// })

// Button dynamic
const baton=document.getElementsByClassName("dyBtn");

for(const bt of baton){
    
    bt.addEventListener("click",function(){
        const incremnt=document.getElementById("increment");
        const dicremnt=document.getElementById("dicrement");
        const convInc=parseInt(incremnt.innerText);
        const convDic=parseInt(dicremnt.innerText);

        alert("Board updated Successfully");
        if(convDic===1){
            alert("Congrates!!! You have completed all the current task");
        }
        dicremnt.innerText=convDic-1;
        incremnt.innerText=convInc+1;
        bt.setAttribute('disabled','true');
        bt.style.backgroundColor="lightgray";
        const titleAdd=bt.parentNode.parentNode.firstElementChild.innerText;

        const remm=document.getElementById('allrem');

        const creteSec=document.createElement('section');
        creteSec.innerHTML=`<p class="text-base font-normal rounded-lg p-2 mb-7 bg-[#F4F7FF]">You have Complete The Task ${titleAdd}</p>`
        remm.appendChild(creteSec);
    });
}
// Activity clear
const refreash=document.getElementById("remBtn");
refreash.addEventListener('click',function(){
    const rem=document.getElementById('allrem');
    while(refreash.firstChild){
        rem.removeChild(rem.firstChild);
    }
})
