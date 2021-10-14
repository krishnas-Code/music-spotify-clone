
let audioElement = new Audio('1.mp3') ;

let playNow =  document.getElementById('playNow') ;

// let gifPlaying =  document.getElementsByClassName('gifPlaying') ;



playNow.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play() ;
        playNow.classList.remove('fa-play-circle') ;
        playNow.classList.add('fa-pause-circle') ;
        // document.querySelector('.gifPlaying').style.opacity = 1 ;
        document.getElementById('gplay').style.opacity = 1 ;
       
    }else{
        audioElement.pause() ;
        playNow.classList.remove('fa-pause-circle') ;
        playNow.classList.add('fa-play-circle') ;
        // document.querySelector('.gifPlaying').style.opacity = 0 ;
        document.getElementById('gplay').style.opacity = 0 ;

     
    }
});


