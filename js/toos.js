document.addEventListener('visibilitychange', function () {
  if (document.visibilityState == 'hidden') {
    normal_title = document.title;
    document.title = '༼ つ ◕_◕ ༽つ不再回来康康嘛';
  } else document.title = normal_title;
});


let btn = document.querySelectorAll('.col-12 ol  li p');
for (let i = 0; i <= btn.length; i++) {
    btn[i].onmouseenter = function () {
        this.style.backgroundColor=`rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`
        this.style.borderRadius='20%'
        this.style.color='#fff'
        this.style.fontWeight=700
        this.style.textAlign='center'
        this.style.fontSize='19px'
    },
    btn[i].onmouseleave = function () {
        this.style.backgroundColor= '#fff'
        this.style.color=''
        this.style.fontWeight=''
        this.style.textAlign=''
        this.style.fontSize=''
    }
}
function getRandom (n, m) {
    return  Math.floor(Math.random()* (m -n +1) + n);
}