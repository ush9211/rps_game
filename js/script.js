function rcs(n){
    const com = Math.floor(Math.random()*3);
    let rcsArray = ['가위', '바위', '보'];
    let pst = ["-135px -108px","-70px -6px","-3px -108px"]

    document.getElementById("rcs-me-txt").innerHTML = rcsArray[n];
    document.getElementById("rcs-com-txt").innerHTML = rcsArray[com];
    document.getElementById("rcs-me").style.backgroundPosition = pst[n];
    document.getElementById("rcs-com").style.backgroundPosition = pst[com];

    const win = `이겼습니다! >_<`
    const lose = `졌습니다 ㅜ.ㅜ`
    const same = `비겼습니다. 다시한번!`

    if(com==n){
        document.getElementById("talk").innerHTML = same;
    }else if(n==0&&com==1){
        document.getElementById("talk").innerHTML = lose;
    }else if(n==1&&com==2){
        document.getElementById("talk").innerHTML = lose;
    }else if(n==2&&com==0){
        document.getElementById("talk").innerHTML = lose;
    }else if(n==2&&com==1){
        document.getElementById("talk").innerHTML = win;
    }else if(n==1&&com==0){
        document.getElementById("talk").innerHTML = win;
    }else if(n==0&&com==2){
        document.getElementById("talk").innerHTML = win;
    }
}