song = ""
song2 = ""

function setup(){
    canvas = createCanvas(600,500)
    canvas.position(450,150)

    video = createCapture(VIDEO)
    video.hide()
}

function draw(){
image(video,0,0,600,500)
}

function preload(){
    song = loadSound("Mehbooba.mp3")
    song2 = loadSound("PiratesOfTheCaribbeanThemeSong.mp3")
}

function play(){
    song.play()
}