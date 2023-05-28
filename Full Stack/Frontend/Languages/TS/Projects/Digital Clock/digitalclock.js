function timer(){
    let munites=0
    let sec=0
    let hours=0
    let mytimer=document.getElementById('root')
    
    setInterval(()=>{
        console.log()
        mytimer.innerHTML=`munites:${munites}sec:${sec}hours:${hours}`
        sec++
        if(sec==10){
            munites++ 
            sec=0
        }
        if (minutes==10){
            hours++
            minutes=0



        }
    },1000)
    
    
    
    }
    
    timer()



