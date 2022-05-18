x=0;
y=0;
num=0;
imag=apple.png
SpeechRecognition=window.webkitSpeechRecognition;
Recognition=new SpeechRecognition();
function preload(){
    imag=apple.png
}


function setup(){
    canvas=createCanvas(900, 600)
    canvas.center()
}

function draw(){
    if (num=='set1'){

    image(x, y, imag)
    document.getElementById("number").innerHTML='The apples is drawn';
    num='';
    }

    if (num=='set2'){

        image(x, y, imag)
        image(x, y, imag)
        document.getElementById("number").innerHTML='The apples is drawn';
        num='';
        }

        if (num=='set3'){

            image(x, y, imag)
            image(x, y, imag)
            image(x, y, imag)
            document.getElementById("number").innerHTML='The apples is drawn';
            num='';
            }
            if (num=='set4'){

                image(x, y, imag)
                image(x, y, imag)
                image(x, y, imag)
                image(x, y, imag)
                document.getElementById("number").innerHTML='The apples is drawn';
                num='';
                }
                if (num=='set5'){

                    image(x, y, imag)
                    image(x, y, imag)
                    image(x, y, imag)
                    image(x, y, imag)
                    image(x, y, imag)
                    document.getElementById("number").innerHTML='The apples is drawn';
                    num='';
                    }
    
}

function start(){
    document.getElementById("number").innerHTML='The system listening, please speak';
    Recognition.start();
}

Recognition.onresult=function run(event){
    console.log(event);
    content=event.results[0][0].transcript
    document.getElementById("shape").innerHTML='The speech has been recognised as ' + content;
    if (content==1){
        x=Math.floor(Math.random() * 900)
        y=Math.floor(Math.random() * 600)
        document.getElementById("number").innerHTML='Now drawing apple.';
        num='set1';
    }

    if (content==2){
        x=Math.floor(Math.random() * 900)
        y=Math.floor(Math.random() * 600)
        document.getElementById("number").innerHTML='Now drawing apples.';
        num='set2';
    }

    if (content==3){
        x=Math.floor(Math.random() * 900)
        y=Math.floor(Math.random() * 600)
        document.getElementById("number").innerHTML='Now drawing apples.';
        num='set3';
    }

    if (content==4){
        x=Math.floor(Math.random() * 900)
        y=Math.floor(Math.random() * 600)
        document.getElementById("number").innerHTML='Now drawing apples.';
        num='set4';
    }

    if (content==5){
        x=Math.floor(Math.random() * 900)
        y=Math.floor(Math.random() * 600)
        document.getElementById("number").innerHTML='Now drawing apples.';
        num='set5';
    }
}
