
let scoreID=document.getElementById("score")
let whitePop=new Audio('whitePopAudio.wav')
let blackPop=new Audio('blackPopAudio.wav')

function balls(){
    this.x=random(0,windowWidth)
    this.y=0
    this.speed=4
    this.d=40
    this.color=random([100,255])
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  let a=[]
  let count=0
  let score=0


  function draw() {
    background(0);
    
    count++
    
    if(count%30==0){
      a.push(new balls())
    }
    
    for(let i=0;i<a.length;i++)
    {
      fill(a[i].color)
      ellipse(a[i].x,a[i].y,a[i].d,a[i].d)
      a[i].y+=a[i].speed
      
      if(a[i].y>windowHeight){
        a.splice(0,1)
      }
      
    }
    
    
  }
  
  function mousePressed()
  {
    for(let i=0;i<a.length;i++){
      if(mouseX<a[i].x+a[i].d && mouseX>a[i].x-a[i].d && mouseY<a[i].y+a[i].d && mouseY>a[i].y-a[i].d){

        if(a[i].color==255){
            a.splice(i,1)
            score++
            whitePop.play()
        }
        else{
            a.splice(i,1)
            score--
            blackPop.play()
        }
        scoreID.innerHTML=score
      }
    }
  }
  
  const t=1
  let seconds=t*60
  let timerID=document.getElementById("timer")

  setInterval(updateCountdown, 1000)

  function updateCountdown(){
    let m=Math.floor(seconds/60)
    let s=seconds%60

    timerID.innerHTML=m +":" +s
    seconds--
    if(m==0 && s==0){
        alert('Your score is: '+score)
        document.location.reload()
    }

  }