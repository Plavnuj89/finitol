// var words =[
//     "радость",
//     "удача",
//     "благополучие",
//     "любовь",
//     "счастье",
// ];
// var word = words[Math.floor(Math.random()*words.length)];
// // console.log(word);
// var answerArray = [];
// //длина слова
// for (var i=0;i<word.length;i++){
//     answerArray[i]="_";
// } ;
// // console.log(answerArray);
// var reminingLetters = word.length;
// var guesets =20;
// while (reminingLetters>0 && guesets>0){
//     alert(answerArray.join("   "));
//     var guess= prompt("Выберите букву или нажмите 'cancel' для выхода").toLowerCase();
//     if (guess===null){
//         breakpoints;
//     } else if (guess.length!==1){
//         alert("пожалуйста введие только одну букву");
//
//     } else guesets--;{
//         for (var j =0;j<word.length;j++){
//             if (word[j]===guess && answerArray[j]==="_"){
//                 answerArray[j]=guess;
//                 reminingLetters--;
//             };
//
//         }
//     }
// }
// alert(answerArray.join(" "));
// if (guesets>0){
//     alert("отличная работа, Вы угадали слово "+ word+" !!!");
// } else
// {
//     alert("плохо, Вы не угадали слово "+ word+" !!!");
// }



/*var name = prompt("Введите имя");
var ourFunc = function (e) {
    alert("WoW "+ (e));
};
ourFunc(name);*/
/*var drawCats=function (howmanyTimes) {
    for(var i=0;i<howmanyTimes;i++){
        console.log(i+" -*_*-");
    }
};
drawCats(3);

var print = function (what,howMany) {
    for(var i=0;i<howMany;i++){
        console.log(i+" "+what);
    }

    };
    print("4r4",7);

    var double = function (number) {
        return number*2
    };
   console.log( double(double(3)));

   var naob = function (nummm,fff) {
       for(var i=1;i<nummm;i++) {
        console.log(i+ fff+(nummm-i))
       }
       }
       naob(9,"5");

   var fife = function (name) {
       if (name.length<5){
           return;
       }
     return "the 5 is - "+name[4] ;
   };
   console.log(fife("rere44"));
   var score = function (sc) {
       if (sc<4) {
           return "fu";
       }
       if (sc<8){
           return "poydet";

       }

           return "krasava";
   }
   console.log(score(89))

function multiplay(a,b) {
   return a*b;
}
function add(a,b) {
   return  a+b;
}
  console.log( add(multiplay(36325,9824),777));


function or(a,b) {
    if (a.length!=b.length){
        return false;
    };
    for (var i=0;i<a.length;i++){
        if(a[i]!==b[i]){
            return false
        }
    }
        return true;
}
console.log(or([1,2,3],[1,2,3]));*/

// var hesdel = document.getElementsByClassName("re");
// // console.log(hesdel.innerHTML);
// var newHesdel = prompt("vvedi");
// // hesdel.innerHTML = newHesdel;
// // document.getElementById("jjs").innerText = newHesdel;
// console.log(hesdel);
/*function pickWord() {
    // Возвращает случайно выбранное слово
    var words = [
        "программа",
        "макака",
        "прекрасный",
        "оладушек"
    ];

    return words[Math.floor(Math.random() * words.length)];
};
var setupAnswerArray = function (word) {
    // Возвращает итоговый массив для заданного слова word
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    return answerArray;
};*/
// var ch = document.getElementById("re");
// console.log(ch.innerHTML);
/*var newCh = prompt("new number");
$(".re").text(newCh);
$("body").append("<p> Привета епта</p>");

for (var i=0;i<3;i++){
    // var hobby = prompt(" что вы хотите делать с дж-с?");
    $("body").append("<p>" +'hobby'+ " javascript"+ "</p>");
};
function re(){
    for (var i=0;i<3;i++){
   return slideUp(3000);
   return slideDown(3000);
    }
$("h1")(re());*/
// var direct = "Вправо"
// var offset = 0;
// function moveHading() {
//     if (direct==="Вправо") {
//         $(".re").offset({left:letOffSet});
//     offset++;
//     }
//     $(".re").offset({left:letOffSet});
// letOffSet+=1;
// if (letOffSet>200){
//     $(".re").offset({top:letOffSet});
//
//     // letOffSet = 0;
// }

// };

// setInterval(moveHading,2);



 // var clicCord =function(eva) {
 //     $("h1").append("Click! " + eva.pageX +" " + eva.pageY
 //     );
 //
 // };
 // $("html").click(clicCord);

// $("html").click(function (event) {
//     $(".re").offset({
//         left:event.pageX-50,
//         top:event.pageY-50,
//
//     });
//
// });        setTimeout(event,4000);

// function getRundom(size) {
//     return Math.floor(Math.random()*size);
// };
// var width = 400;
// var hight = 400;
// var clicks = 0;
//
// var target = {
//     x:getRundom(width),
//     y:getRundom(hight)
// };
// console.log(target);
// $("#map").click(function (event) {
//      clicks ++;
//     var dist = getDist(event,target);
//     var distHint = getDistShow(dist);
//     $("#distance").text(distHint);
//
//     if (dist<6){
//         alert("Wow you win!!! " +
//             clicks+" doing")
//     }
// });
// function getDist(event,target) {
//     var diffX = event.offsetX - target.x;
//     var diffY = event.offsetY - target.y;
//     return Math.sqrt((diffX*diffX)+(diffY*diffY));
// };
// // console.log()
// function getDistShow(dist) {
//     if (dist<10){
//         return "почти вьебал";
//     }
//     else if (dist<30) {
//         return "оч горяче";
//
//     }
//     else if (dist<50) {
//         return " горяче";
//
//     }
//     else if (dist<90) {
//         return "жарко";
//
//     }
//     else if (dist<130) {
//         return "теплее";
//
//     }
//     else if (dist<200) {
//         return "холодно";
//
//     }
//     else if (dist<400) {
//         return "оч холодно";
//
//     }
//     else {
//         return "бррр";
//
//     }
// };
// console.log(clicks)


// var getRandomNumber = function (size) {
//     return Math.floor(Math.random() * size);
// };
//
// // Вычислить расстояние от клика (event) до клада (target)
// var getDistance = function (event, target) {
//     var diffX = event.offsetX - target.x;
//     var diffY = event.offsetY - target.y;
//     return Math.sqrt((diffX * diffX) + (diffY * diffY));
// };
//
// // Получить для расстояния строку подсказки
// var getDistanceHint = function (distance) {
//     if (distance < 10) {
//         return "Обожжешься!";
//     } else if (distance < 20) {
//         return "Очень горячо";
//     } else if (distance < 40) {
//         return "Горячо";
//     } else if (distance < 80) {
//         return "Тепло";
//     } else if (distance < 160) {
//         return "Холодно";
//     } else if (distance < 320) {
//         return "Очень холодно";
//     } else {
//         return "Замерзнешь!";
//     }
// };
//
// // Создаем переменные
// var width = 800;
// var height = 800;
// var clicks = 0;
//
// // Случайная позиция клада
// var target = {
//     x: getRandomNumber(width),
//     y: getRandomNumber(height)
// };
// console.log(target)
//
// // Добавляем элементу img обработчик клика
// $("#map").click(function (event) {
//     clicks++;
//
//     // Получаем расстояние от места клика до клада
//     var distance = getDistance(event, target);
//     // Преобразуем расстояние в подсказку
//     var distanceHint = getDistanceHint(distance);
//
//     // Записываем в элемент #distance новую подсказку
//     $("#distance").text(distanceHint);
//
//     // Если клик был достаточно близко, поздравляем с победой
//     if (distance < 8) {
//         alert("Клад найден! Сделано кликов: " + clicks);
//     }
// });

// var dog = {
//     name:"Bonja",
//     age:6,
//     beauniful:true,
// }
// dog.barc=function () {
//     console.log("Гав Гав, меня зовут " +
//         this.name +
//         " !")
// }
/*var direction = "вправо";
var offset = 0;
$("#heading").offset({left:offset,top: offset});
function dvizh() {
    if (direction==="вправо") {
        $("#heading").offset({left:offset});
        offset++;
        if (offset>200){
            offset=0;
            direction="вниз";
            }
        }
        else if (direction==="вниз") {
            $("#heading").offset({top:offset});
            offset++;
            if (offset>200){
                offset=200;
                direction="влево";
            }
        }
        else if (direction==="влево") {
            $("#heading").offset({left: offset});
            offset--;
            if (offset<0){
                offset=200;
                direction="вверх";
            }
        }else if (direction==="вверх"){
            $("#heading").offset({top:offset});
            offset--;
            if (offset<0){
                offset=0;
                direction="вправо"
            }
    }

    };
var int = setInterval(dvizh,1);*/

/*var direction ='вправо';
var offset = 0;
$(".re").offset({ left: offset,top: offset });
var moveHeading = function () {
    if (direction ==='вправо') {
        $(".re").offset({left: offset });
        offset++;
        if (offset>400){
            offset=0;
            direction = 'вниз';
        }
    } else if (direction === 'вниз') {
        $(".re").offset({ top: offset });
        offset++;
        if (offset > 400) {
            offset = 400;
            direction = 'влево';
        }
    } else if (direction === 'влево') {
        $(".re").offset({ left: offset });
        offset--;
        if (offset < 0) {
            offset = 400;
            direction = 'вверх';
        }
    } else if (direction === 'вверх') {
        $(".re").offset({ top: offset });
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = 'вправо';
        }
    }
};
setInterval(moveHeading, 3);*/

// var direct="right";
// var offset=0;
// var t=120;
// $("#heading").offset({left:offset,top:offset});
// function kvadr() {
//
//
// if (direct==="right"){
//     $("#heading").offset({left:offset});
//     offset+=3;
//     if (offset>400){
//         offset=0;
//         direct="down";
//     }
// }else if (direct==="down"){
//     $("#heading").offset({top:offset});
//     offset+=3;
//     if (offset > 400){
//         offset=400;
//         direct="left";
//     }
// } else if (direct==="left"){
//     $("#heading").offset({left:offset});
//     offset-=3;
//     if (offset<0){
//         offset=400;
//         direct="top"
//     }
// } else if (direct==="top"){
//     $("#heading").offset({top:offset});
//     offset-=3;
//     if (offset<0){
//         offset=0;
//         direct="right";
//     }
// }
// };
// var cl = 0;
// var tim = setInterval(kvadr,t);
// $("html").click(function () {
//     cl++;
//     console.log(t);
//
//     if (cl<10){
//         t-=10;
//         tim = setInterval(kvadr,t)
//
//     }
//     else if (cl>=10) {
//         t+=10;
//         tim = setInterval(kvadr,t)
//
//     }
//
//
//
//     });



/*$("html").click(function (e) {
    $("#heading").offset({
        left:e.pageX,
        top:e.pageY,
    })
})*/
/*
var rundSize = function (size) {
    return Math.floor(Math.random()*size);
};


function getDist(event,target) {
    var difX = event.offsetX - target.x;
    var difY = event.offsetY - target.y;
    return Math.sqrt((difX*difX)+(difY*difY));
};
function getDistHint(distance) {
    if (distance<10){
        return"рядышком";
    } else if (distance<30){
        return"почти";
    } else if (distance<60) {
        return "60";
    }else if (distance<100){
        return "100";
    } else if (distance<170){
        return "170";
    } else if (distance<250){
        return "250";
    } else {
        return "ХоЛоДнО";
    }
};
var w=800,
    h=800,
    clicks = 0,
    targer =  {
        x:rundSize(w),
        y:rundSize(h)
    };
$("#map").click(function (event) {
    clicks++;
    var dist = getDist(event,targer),
    distHint = getDistHint(dist);
    $("#distance").text(distHint);
    if (dist<8){
        alert("Woow " +
            clicks +
            " cделано");
    }

    console.log(targer);
    console.log(dist);
    console.log(getDist)
});*/

 /*function rundXY(size) {
    return Math.floor(Math.random()*size);
};

var getDist = function (mu,cil) {
    var difX = mu.offsetX - cil.x;
    var difY = mu.offsetY - cil.y;
    return Math.sqrt((difX*difX)+(difY*difY));
};
var getDistShiw = function (dist) {
    if (dist<10){
        return "10"
    } else if (dist<30){
        return 30;
    } else if (dist<70){
        return 70;
    } else {
        return "rrr"
    }
};
var w =300,
    h = 300,
    cl=0,
    cil = {
    x:rundXY(w),
    y:rundXY(h)
    };

$("#map").click(function (mu) {
    cl++;

var dist = getDist(mu, cil);
var distPodskazka = getDistShiw(dist);
// $("#distance").text(distPodskazka);
 $("#distance").text(getDistShiw(getDist(mu,cil)));
if (dist<6){
    alert("fin")
}
});
console.log(cil);*/
/*
function rund(size) {
    return Math.floor(Math.random()*size);
};

var vzdist = function (mu, cil) {
    var dX = mu.offsetX - cil.x;
    var dY = mu.offsetX - cil.x;
    return Math.sqrt((dX*dX)+(dY*dY));
};
var distSwow = function (dist) {
    if (dist<10){
        return "good"
    } else {
        return "bad"
    }
};
var h=300,
    w=300,
    cl=0,
    cil={
    x:rund(h),
        y:rund(w)
    };
$("#map").click(function (mu) {
    cl++;
    var dist = vzdist(mu,cil);
    var podskazka = distSwow(dist);
    $("#distance").text(podskazka)
    if (cl>10){
        alert("Gameover") ;
    }else {
        console.log(10-cl)
    }
});*/

/*function  run(size) {
    return Math.floor(Math.random()*size);
};
function dist(mu,komp) {
    var distX = mu.offsetX - komp.x,
        distY = mu.offsetY - komp.y;
    return Math.sqrt((distX*distX)+(distY*distY));
};
function rasstoyanie(dist) {
    if (dist<20){
        return 20;
    } else if (dist<80){
        return 80;
    } else if (dist<180){
        return 180;
    }else if (dist<280){
        return 280;
    }else {
        return "brrr"
    }
};
var h=500,
    w=500,
    cl=0,
    komp = {
    x:run(h),
    y:run(w)
    };
$("#map").click(function (mu) {
    cl++;
    var direal=dist(mu,komp);
    var podskazka = rasstoyanie(direal);
    $("#distance").text(podskazka);
    if (cl>14){
       return alert("fuu")
    }
    else if(direal<15){
        alert("W11n " +
            cl)
    }
});*/
/*
function rund(size) {
    return Math.floor(Math.random()*size);
}
function dist(mu,cil) {
    var distX = mu.offsetX - cil.x;
    var distY = mu.offsetY - cil.y;
    return Math.sqrt((distX*distX)+(distY*distY));
}
function distShow(dist) {
    if (dist<30){
        return 30;
    } else if (dist<80){
        return 80;
    } else if(dist<200){
        return 200;
    }else {
        return "cold"
    }
};
var w=400,
    h=400,
    cl=0,
    cil = {
    x:rund(w),
        y:rund(h)
    };
$("#map").click(function (mu) {
    cl++;
    var distR = dist(mu,cil);
    var podskazka = distShow(distR);
    $("#distance").text(podskazka);
    if (distR<20){
        alert("win");
    }
});*/
//
// function run(ar) {
//     return Math.floor(Math.random()*ar);
// };
// function dist(me,co) {
//     var diX = me.offsetX - co.x;
//     var diY = me.offsetY - co.y;
//     return Math.sqrt((diX*diX)+(diY*diY));
// };
// function diShow(dist) {
//     if (dist<40){
//         return 40;
//     } else if (dist<80){
//         return 80;
//     } else if (dist<180){
//         return 180;
//     } else {
//         return "rrr"
//     }
// };
// var x=800,
//     y=800,
//     cl=0,
//     co={
//     x:run(x),
//         y:run(y)
//     };
// $("#map").click(function (me) {
//     cl++;
//    var distR=dist(me,co);
//    var rez = diShow(distR);
//    $("#distance").text(rez);
//    if (distR<25){
//        console.log("Woow");
//    }
//     console.log(distR);
//    console.log("x= " +co.x);
//    console.log("y= "+ co.y);
//    console.log("ты попал в "+me.offsetX+"=x   " +
//        me.offsetY +
//        "=y")
    // $("#map").mousemove(function (me) {
    //     console.log(me.offsetX+"=x   " +
    //         me.offsetY +
    //         "=y")
    // });
// });

// function run(ch) {
//     return Math.floor(Math.random()*ch);
// }
// function rasst(mu,co) {
//     var rastX=mu.offsetX - co.x;
//     var rastY=mu.offsetY - co.y;
//     return Math.sqrt((rastX*rastX)+(rastY*rastY));
// }
// function rastShow(dist) {
//     if (dist<20){
//         return 20;
//     } else  if (dist<60){
//         return 60;
//     }else if (dist<120){
//         return 120;
//     }else if (dist<220){
//         return 220;
//     }else {
//         return  "cold"
//     }
// };
// var w=800,
//     h=800,
//     cl=0,
//     co ={
//     x:run(w),
//         y:run(h)
//     };
// $("#map").click(function (mu) {
//     cl++;
//     var distR=rasst(mu,co);
//     var show = rastShow(distR);
//     $("#distance").text(show);
//     if (distR<15){
//         alert(100)
//     }
// });
// var dog = {
//     name:"Bonja",
//     age:6,
//     beauniful:true,
// }
// dog.barc=function () {
//     console.log("Гав Гав, меня зовут " +
//         this.name +
//         " !")
// };
// dog.barc();
// var speak = function () {
//    return console.log(this.sound+" my name is " +
//         this.name)
// };
// // //
// var cat={
//     sound:"Miaw",
//     name: "Snezhik",
//     speak:speak,
// };
//
// var dog={
//     sound:"Gaw",
//     name: "Bonja",
//     speak:speak,
// };
// var mous={
//     sound:"Pi",
//     name: "Jery",
//     speak:speak,
// };
// var komar={
//     sound:"Zhzhzh",
//     name: "Nosik",
//     speak:speak,
// };
// console.log(cat.speak());
// console.log(dog.speak());
// console.log(mous.speak());
// console.log(komar.speak());





// var Car = function (x,y) {
//     this.x = x;
//     this.y = y;
// };
//
// Car.prototype.draw = function () {
//  this.carEl = $(carHtml);
//  this.carEl.css({
//      position:"absolute",
//      left:this.x,
//      top:this.y
//  });
//  $("body").append(this.carEl);
// };
// var Car = function (x,y) {
//     this.x=x;
//     this.y=y;
// };
// var drawCar = function (car) {
//
//
//     var carHtml = '<img src="img/car.jpeg"width="100px">';
//
//     var  carElement = $(carHtml);
//     carElement.css({
//         position:"absolute",
//         left:car.x,
//         top:car.y
//     });
//     $("body").append(carElement)
// };
// var tesla=new Car(20,30);
// var nissan = new Car(100,200);
// drawCar(tesla);
// drawCar(nissan);
// var tesla = new Car(100,200);
// var nissan = new Car(20,200);
// console.log(tesla);
// tesla.draw();
// nissan.draw();
// var Car = function (x,y) {
//     this.x=x;
//     this.y=y;
//     this.draw();
// };
// Car.prototype.draw = function () {
//
//
//     var carHtml = '<img src="img/car.jpeg"width="100px">';
//
//     this.carElement = $(carHtml);
//     this.carElement.css({
//         position:"absolute",
//         left:this.x,
//         top:this.y
//     });
//     $("body").append(this.carElement)
// };
// var tesla=new Car(20,30);
// var nissan = new Car(20,200);
// Car.prototype.moveRight = function(distanc){
//     this.x+=distanc;
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
// };
// Car.prototype.moveLeft = function(distanc){
//     this.x-=distanc;
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
// };
// Car.prototype.moveUp = function(distanc){
//     this.y-=distanc;
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
// };
// Car.prototype.moveDown = function(distanc){
//     this.y+=distanc;
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
// };
// setInterval(function () {
//     tesla.moveRight(Math.random()*50);
//     nissan.moveRight(Math.random()*50);
//
// },100);
// // // робот
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// ctx.fillRect(75,0,50,50);
//
// ctx.fillStyle="red";
// ctx.fillRect(95,50,10,25);
// ctx.fillStyle="red";
//
// ctx.fillRect(0,75,200,10);
// ctx.fillStyle="Black";
// ctx.fillRect(65,75,70,70);
// ctx.fillStyle="red";
// ctx.fillRect(65,145,10,50);
// ctx.fillRect(125,145,10,50);
// // флаг
// var canvas = document.getElementById("canvas2");
// var ctx = canvas.getContext("2d");
// ctx.fillStyle="red";
// ctx.fillRect(0,0,50,100);
//
// ctx.fillStyle="green";
// ctx.fillRect(50,0,50,100);
//
// ctx.fillStyle="Blue";
// ctx.fillRect(100,0,50,100);
// // прямоугольник
// var canvas = document.getElementById("canvas3");
// var ctx = canvas.getContext("2d");
// ctx.strokeStyle="red";
// ctx.lineWidth = 4;
// ctx.strokeRect(0,6,20,100);
// // крестик
// var canvas = document.getElementById("canvas4");
// var ctx = canvas.getContext("2d");
// ctx.strokeStyle="turquoise";
// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineTo(100,40);
//**//
//
// ctx.moveTo(100,10);
// ctx.lineTo(10,40);
// ctx.stroke();
// // Человечек
// var canvas = document.getElementById("canvas5");
// var ctx = canvas.getContext("2d");
// ctx.strokeStyle="red";
// ctx.lineWidth = 4;
// ctx.strokeRect(50,10,20,20);
// ctx.beginPath();
// ctx.moveTo(60,30);
// ctx.lineTo(60,100);
//
// ctx.moveTo(60,60);
// ctx.lineTo(20,20);
// ctx.moveTo(60,60);
// ctx.lineTo(100,20);
//
//
// ctx.moveTo(60,100);
// ctx.lineTo(30,150);
// ctx.moveTo(60,100);
// ctx.lineTo(90,150);
// ctx.stroke();
// //Домик
// var canvas = document.getElementById("canvas6");
// var ctx = canvas.getContext("2d");
// ctx.fillStyle="red";
// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(100,60),
// ctx.lineTo(150,30),
// ctx.lineTo(200,60),
// ctx.lineTo(200,100),
// ctx.lineTo(100,100)
// ctx.fill();
// // //круг
// var canvas = document.getElementById("canvas7");
// var ctx = canvas.getContext("2d");
// ctx.strokeStyle="red";
// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.arc(50,50,20,0, Math.PI/2,false);
// ctx.stroke();
//
// ctx.beginPath();
// ctx.arc(100,50,20,90, Math.PI*1.5,false);
// ctx.fillStyle = "green"
// ctx.fill();
//
// ctx.beginPath();
// ctx.arc(160,50,25,0, Math.PI*2,false);
// ctx.stroke();
//
// var canvas = document.getElementById("canvas8");
// var ctx = canvas.getContext("2d");
// ctx.lineWidth=4;
// function circ(rad) {
//     ctx.beginPath();
//     ctx.arc(100,100,rad,0,Math.PI*2,false);
//     ctx.stroke();/* fill*/
// };
// circ(10);
// circ(20);
// circ(30);
// ctx.strokeStyle="red";
// circ(40);
// circ(50);
//
// var canvas = document.getElementById("canvas9");
// var ctx = canvas.getContext("2d");
// ctx.lineWidth = 4;
// function bigcirc(x,y,r) {
//     ctx.beginPath();
//     ctx.arc(x,y,r,0,Math.PI*2,false);
//     ctx.stroke()
// };
// bigcirc(100,50,25);
// bigcirc(100,110,35);
// bigcirc(100,190,45);
// function smcirc(x,y) {
//     ctx.beginPath();
//     ctx.arc(x,y,4,0,Math.PI*2,false);
//     ctx.fill()
// };
// smcirc(90,43);
// smcirc(110,43);
// smcirc(100,95);
// smcirc(100,110);
// smcirc(100,125);
// ctx.fillStyle = "purple";
// smcirc(100,50);
// //
// var canvas = document.getElementById("canvas10");
// var ctx = canvas.getContext("2d");
// ctx.lineWidth = 4;
//  function bigcirc(x,y,r) {
//     ctx.beginPath();
//     ctx.arc(x,y,r,0,Math.PI*2,false);
//     ctx.stroke()
// };
// bigcirc(100,50,25);
// bigcirc(100,110,35);
// bigcirc(100,190,45);
// function smcirc(x,y) {
//     ctx.beginPath();
//     ctx.arc(x,y,4,0,Math.PI*2,false);
//     ctx.fill()
// };
// smcirc(90,43);
// smcirc(110,43);
// smcirc(100,95);
// smcirc(100,110);
// smcirc(100,125);
// ctx.fillStyle = "purple";
// smcirc(100,50);

//
// var canvas = document.getElementById("canvas11");
// var ctx = canvas.getContext("2d");
//
// var drawPoints = function (points) {
//     ctx.beginPath();
//     ctx.moveTo(points[0][0], points[0][1]);
//     for (var i = 1; i < points.length; i++) {
//         ctx.lineTo(points[i][0], points[i][1]);
//     }
//     ctx.stroke();
// };
//
// var mysteryPoints = [[0, 0], [50, 20], [100, 30], [130, 10], [145, 50], [100, 90], [0, 0]];
// drawPoints(mysteryPoints);

// var canvas = document.getElementById("canvas12");
// var ctx = canvas.getContext("2d");
// ctx.strokeStyle="green";
// var circle = function (x, y, radius, fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//         ctx.fill();
//     } else {
//         ctx.stroke();
//     }
// };
//
// $('canvas').mousemove(function (event) {
//     circle(event.offsetX, event.offsetY, 3, false);
// });


// var canvas=document.getElementById("canvas13");
// var ctx = canvas.getContext("2d");
// var position = 0;
// var y = 0;
// setInterval(function () {
//     ctx.clearRect(0,0,200,200);
//     ctx.fillRect(position,y,20,20);
//     position++;
//     if (position>200){
//         position=0;
//         y+=20;
//         if (y>200){
//             y=0
//         }
//     }
// },1);

// var canvas=document.getElementById("canvas14");
// var ctx = canvas.getContext("2d");
// var size=0;
// var toggle = false;
// setInterval(function () {
//     ctx.clearRect(0,0,200,200);
//     ctx.fillRect(0,0,size,size);
//     (toggle === false) ? size++ : size--;
//     if (size===200) {
//         toggle = true
//     } else if (size === 0){
//         toggle = false
//     }
//
// },10);
//11111111111111111111111
// var canvas=document.getElementById("canvas14");
// var ctx = canvas.getContext("2d");
// var size=0;
// setInterval(function () {
//     ctx.clearRect(0,0,200,200);
//     ctx.fillRect(0,0,size,size);
//     size++;
//     if (size>200){
//         size=0;
//     }
//
// },10);
//
// var canvas  = document.getElementById("canvas15");
// var ctx=canvas.getContext("2d");
// function circle(x,y,rad,fillcirc) {
//     ctx.beginPath();
//     // ctx.lineWidth=4;
//     ctx.arc(x,y,rad,0,Math.PI*2,false);
//     if (fillcirc){
//         // ctx.fillStyle="yellow";
//
//         ctx.fill();
//
//     } else {
//         ctx.stroke();
//     }
// };
// function drawbe(x,y){
//     ctx.lineWidth = 2;
//     ctx.strokeStyle="black";
//     ctx.fillStyle="gold";
//
// // circle(30,44,8, true);
// // circle(30,44,8, );
// // circle(20,20,5,);
// // circle(40,20,5,);
// // circle(25,40,2, );
// // circle(35,40,2, );
// circle(x,y,8, true);
// circle(x,y,8, );
// circle(x-5,y-11,5,);
// circle(x+5,y-11,5,);
// circle(x-2,y-1,2, );
// circle(x+2,y-1,2, );
// };
// function update(coord) {
//     var offset = Math.random()*4-2;
//     coord+=offset;
//     if (coord>200){
//         coord=200;
//     } if (coord<0){
//         coord = 0;
//     }
//     return coord;
// };
//
// // var canvas = document.getElementById("canvas15");
// // ctx=canvas.getContext("2d");
// var x=100;
// var y=100;
// setInterval(function () {
//     ctx.clearRect(0,0,200,200);
//     drawbe(x,y);
//     x=update(x);
//     y=update(y);
//     ctx.strokeRect(0,0,200,200);
// },1);
//
// var canvas=document.getElementById("canvas16");
// ctx = canvas.getContext("2d");
// function Ball() {
//     this.x =100;
//     this.y =100;
//     this.xSpeed =1;
//     this.ySpeed =3;
//
// };
// function circle(x,y,r,fill) {
//     ctx.beginPath();
//     ctx.arc(x,y,r,0,Math.PI*2,false);
//     if (fill){
//         ctx.fill();
//     } else {
//         ctx.stroke();
//     }
// };
//  Ball.prototype.draw = function(){
//     circle(this.x,this.y,1,true)
// };
//  Ball.prototype.move = function(){
//      this.x+=this.xSpeed;
//      this.y+=this.ySpeed;
// };
//  Ball.prototype.checkCollision = function () {
//      if (this.x<0||this.x>200){
//          this.xSpeed = -this.xSpeed;
//      } if (this.y<0||this.y>200){
//          this.ySpeed = -this.ySpeed;
//      }
//  };
//  var ball = new Ball();
//  setInterval(function () {
//      // ctx.clearRect(0,0,200,200);
//      ball.draw();
//      ball.move();
//      ball.checkCollision();
//      ctx.strokeRect(0,0,200,200);
//  },1);
//
// ctx.fillStyle="green";
// ctx.fillRect(50,0,50,100);
//
// ctx.fillStyle="Blue";
// ctx.fillRect(100,0,50,100);

// ctx.fillRect(10,10,100,100);
// for (var i = 0;i<8;i++){
//     ctx.fillRect(10*i,10*i,1,1);

// }
// setInterval(tesla,moveRight(5),30);
// drawCar(tesla);
// drawCar(nissan);
// var tesla = new Car(100,200);
// var nissan = new Car(20,200);
// console.log(tesla);
// tesla.draw();
// nissan.draw();
// nissan.moveRight;
// tesla.moveRight();
// tesla.moveRight();
// tesla.moveRight();




// var speak = function () {
//     console.log(this.sound+" my name is "+ this.name)
// };
// var dog = {
//     name:"bonja",
//     sound:"gav",
//     speak:speak
// }
//
// var names={
//     32:"пробел",
//     37:"лево",
//     38:"вверх",
//     39:"право",
//     40:"низ",
// };
// $("body").keydown(function (event) {
//     console.log(names[event.keyCode]);
// });
// var canvas = document.getElementById("canvas17");
// var ctx = canvas.getContext("2d");
// var width = canvas.width;
// var height = canvas.height;
// function circle(x,y,r,fill) {
//     ctx.beginPath()
//     ctx.arc(x,y,r,0,Math.PI*2,false)
//     if (fill){
//         ctx.fill();
//     } else {
//         ctx.stroke();
//     }
// };
// //
//
// var Ball = function () {
//     this.x = width/2;
//     this.y = height/2;
//     this.xSpeed = 2;
//     this.ySpeed = 0;
//
// };
// Ball.prototype.move = function () {
//     this.x+= this.xSpeed;
//     this.y+= this.ySpeed;
//     if (this.x<0){
//         this.x=width;
//     } else if (this.x>width){
//         this.x=0;
//     }
//     if (this.y<0){
//         this.y=height;
//     } else if (this.y>height){
//         this.y=0;
//     }
//
// };
// Ball.prototype.draw = function () {
//     circle(this.x,this.y,2,true);
// };
// //
// Ball.prototype.setDirection = function (direction) {
//     if (direction === "up") {
//         this.xSpeed = 0;
//         this.ySpeed = -2;
//     } else if (direction === "down") {
//         this.xSpeed = 0;
//         this.ySpeed = 2;
//     } else if (direction === "left") {
//         this.xSpeed = -2;
//         this.ySpeed = 0;
//     } else if (direction === "right") {
//         this.xSpeed = 2;
//         this.ySpeed = 0;
//     } else if (direction === "stop") {
//         this.xSpeed = 0;
//         this.ySpeed = 0;
//     }
// };
//
// // Create the ball object
// var ball = new Ball();
//
// // An object to convert keycodes into action names
// var keyActions = {
//     32: "stop",
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down"
// };
//
// // The keydown handler that will be called for every keypress
// $("body").keydown(function (event) {
//     var direction = keyActions[event.keyCode];
//     ball.setDirection(direction);
// });
//
// // The animation function, called every 30 ms
// setInterval(function () {
//     // ctx.clearRect(0, 0, width, height);
//
//     ball.draw();
//     ball.move();
//
//     ctx.strokeRect(0, 0, width, height);
// }, 30);




// var canvas = document.getElementById("canvas17");
// var ctx = canvas.getContext("2d");
// var width = canvas.width;
// var height = canvas.height;
//  function circle(x,y,r,fill) {
//      ctx.beginPath();
//      ctx.arc(x,y,r,0,Math.PI*2,false);
//      if (fill){
//          ctx.fill();
//      } else {
//          ctx.stroke();
//      }
//
//  };
//  function Ball() {
//      this.x = width/2;
//      this.y = height/2;
//      this.xSpeed = 5;
//      this.ySpeed = 0;
//  };
//  Ball.prototype.move = function () {
//      this.x+=this.xSpeed;
//  }


// const array = [1,2,3,4,5]
// Array.prototype.multBy = function (n) {
//     return this.map(function (i) {
//         return i*n
//     })
// };
// console.log(array.multBy(3));

// function urlGenerator(domein) {
//     return function (url) {
//         return `https//${url}.${domein}`
//     }
// }
// console.log(urlGenerator("com")("google"));


// var canvas = document.getElementById("canvas17");
// var ctx = canvas.getContext("2d");
// var width = canvas.width;
// var height = canvas.height;
//
// var circle = function (x, y, radius, fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//         ctx.fill();
//     } else {
//         ctx.stroke();
//     }
// };
//
// // The Ball constructor
// var Ball = function () {
//     this.x = width / 2;
//     this.y = height / 2;
//     this.xSpeed = 5;
//     this.ySpeed = 0;
// };
//
// // Update the ball's position based on its speed
// Ball.prototype.move = function () {
//     this.x += this.xSpeed;
//     this.y += this.ySpeed;
//
//     if (this.x < 0) {
//         this.x = width;
//     } else if (this.x > width) {
//         this.x = 0;
//     } else if (this.y < 0) {
//         this.y = height;
//     } else if (this.y > height) {
//         this.y = 0;
//     }
// };
//
// // Draw the ball at its current position
// Ball.prototype.draw = function () {
//     circle(this.x, this.y, 10, true);
// };
//
// // Set the ball's direction based on a string
// Ball.prototype.setDirection = function (direction) {
//     if (direction === "up") {
//         this.xSpeed = 0;
//         this.ySpeed = -5;
//     } else if (direction === "down") {
//         this.xSpeed = 0;
//         this.ySpeed = 5;
//     } else if (direction === "left") {
//         this.xSpeed = -5;
//         this.ySpeed = 0;
//     } else if (direction === "right") {
//         this.xSpeed = 5;
//         this.ySpeed = 0;
//     } else if (direction === "stop") {
//         this.xSpeed = 0;
//         this.ySpeed = 0;
//     }
// };
//
// // Create the ball object
// var ball = new Ball();
//
// // An object to convert keycodes into action names
// var keyActions = {
//     32: "stop",
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down"
// };
//
// // The keydown handler that will be called for every keypress
// $("body").keydown(function (event) {
//     var direction = keyActions[event.keyCode];
//     ball.setDirection(direction);
// });
//
// // The animation function, called every 30 ms
// setInterval(function () {
//     ctx.clearRect(0, 0, width, height);
//
//     ball.draw();
//     ball.move();
//
//     ctx.strokeRect(0, 0, width, height);
// }, 30);

// var keyNames = {
//     81:"q"
// }
// $("body").keydown((event)=>{
//     console.log(keyNames[event.keyCode]);
// });






//
// var canvas = document.getElementById("canvas01");
// var ctx = canvas.getContext("2d");
// var width = canvas.width;
// var height = canvas.height;
//
// // Work out the width and height in blocks
// var blockSize = 10;
// var widthInBlocks = width / blockSize;
// var heightInBlocks = height / blockSize;
//
// // Set score to 0
// var score = 0;
//
// // Draw the border
// var drawBorder = function () {
//     ctx.fillStyle = "Gray";
//     ctx.fillRect(0, 0, width, blockSize);
//     ctx.fillRect(0, height - blockSize, width, blockSize);
//     ctx.fillRect(0, 0, blockSize, height);
//     ctx.fillRect(width - blockSize, 0, blockSize, height);
// };
//
// // Draw the score in the top-left corner
// var drawScore = function () {
//     ctx.font = "20px Courier";
//     ctx.fillStyle = "Black";
//     ctx.textAlign = "left";
//     ctx.textBaseline = "top";
//     ctx.fillText("Score: " + score, blockSize, blockSize);
// };
//
// // Clear the interval and display Game Over text
// var gameOver = function () {
//     clearInterval(intervalId);
//     ctx.font = "60px Courier";
//     ctx.fillStyle = "Black";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.fillText("Game Over", width / 2, height / 2);
// };
//
// // Draw a circle (using the function from Chapter 14)
// var circle = function (x, y, radius, fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//         ctx.fill();
//     } else {
//         ctx.stroke();
//     }
// };
//
// // The Block constructor
// var Block = function (col, row) {
//     this.col = col;
//     this.row = row;
// };
//
// // Draw a square at the block's location
// Block.prototype.drawSquare = function (color) {
//     var x = this.col * blockSize;
//     var y = this.row * blockSize;
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, blockSize, blockSize);
// };
//
// // Draw a circle at the block's location
// Block.prototype.drawCircle = function (color) {
//     var centerX = this.col * blockSize + blockSize / 2;
//     var centerY = this.row * blockSize + blockSize / 2;
//     ctx.fillStyle = color;
//     circle(centerX, centerY, blockSize / 2, true);
// };
//
// // Check if this block is in the same location as another block
// Block.prototype.equal = function (otherBlock) {
//     return this.col === otherBlock.col && this.row === otherBlock.row;
// };
//
// // The Snake constructor
// var Snake = function () {
//     this.segments = [
//         new Block(7, 5),
//         new Block(6, 5),
//         new Block(5, 5)
//     ];
//
//     this.direction = "right";
//     this.nextDirection = "right";
// };
//
// // Draw a square for each segment of the snake's body
// Snake.prototype.draw = function () {
//     for (var i = 0; i < this.segments.length; i++) {
//         this.segments[i].drawSquare("Blue");
//     }
// };
//
// // Create a new head and add it to the beginning of
// // the snake to move the snake in its current direction
// Snake.prototype.move = function () {
//     var head = this.segments[0];
//     var newHead;
//
//     this.direction = this.nextDirection;
//
//     if (this.direction === "right") {
//         newHead = new Block(head.col + 1, head.row);
//     } else if (this.direction === "down") {
//         newHead = new Block(head.col, head.row + 1);
//     } else if (this.direction === "left") {
//         newHead = new Block(head.col - 1, head.row);
//     } else if (this.direction === "up") {
//         newHead = new Block(head.col, head.row - 1);
//     }
//
//     if (this.checkCollision(newHead)) {
//         gameOver();
//         return;
//     }
//
//     this.segments.unshift(newHead);
//
//     if (newHead.equal(apple.position)) {
//         score++;
//         apple.move();
//     } else {
//         this.segments.pop();
//     }
// };
//
// // Check if the snake's new head has collided with the wall or itself
// Snake.prototype.checkCollision = function (head) {
//     var leftCollision = (head.col === 0);
//     var topCollision = (head.row === 0);
//     var rightCollision = (head.col === widthInBlocks - 1);
//     var bottomCollision = (head.row === heightInBlocks - 1);
//
//     var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;
//
//     var selfCollision = false;
//
//     for (var i = 0; i < this.segments.length; i++) {
//         if (head.equal(this.segments[i])) {
//             selfCollision = true;
//         }
//     }
//
//     return wallCollision || selfCollision;
// };
//
// // Set the snake's next direction based on the keyboard
// Snake.prototype.setDirection = function (newDirection) {
//     if (this.direction === "up" && newDirection === "down") {
//         return;
//     } else if (this.direction === "right" && newDirection === "left") {
//         return;
//     } else if (this.direction === "down" && newDirection === "up") {
//         return;
//     } else if (this.direction === "left" && newDirection === "right") {
//         return;
//     }
//
//     this.nextDirection = newDirection;
// };
//
// // The Apple constructor
// var Apple = function () {
//     this.position = new Block(10, 10);
// };
//
// // Draw a circle at the apple's location
// Apple.prototype.draw = function () {
//     this.position.drawCircle("LimeGreen");
// };
//
// // Move the apple to a new random location
// Apple.prototype.move = function () {
//     var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
//     var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
//     this.position = new Block(randomCol, randomRow);
// };
//
// // Create the snake and apple objects
// var snake = new Snake();
// var apple = new Apple();
//
// // Pass an animation function to setInterval
// var intervalId = setInterval(function () {
//     ctx.clearRect(0, 0, width, height);
//     drawScore();
//     snake.move();
//     snake.draw();
//     apple.draw();
//     drawBorder();
// }, 100);
//
// // Convert keycodes to directions
// var directions = {
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down"
// };
//
// // The keydown handler for handling direction key presses
// $("body").keydown(function (event) {
//     var newDirection = directions[event.keyCode];
//     if (newDirection !== undefined) {
//         snake.setDirection(newDirection);
//     }
// });






//     width=canvas.width,
//     height=canvas.height,
// // //размері блоков для движения змейки
//     blockSize = 10,
//     widthInBlocks = width/blockSize,
//     heightInBlocks = height/blockSize,
//     //счет
//     score =0;
// var drawBorder = function (){
//     ctx.fillStyle = "gray";
//     ctx.fillRect(0,0,width,blockSize);
//     ctx.fillRect(0,0,blockSize,height);
//     ctx.fillRect(width -blockSize,0,blockSize,height);
//     ctx.fillRect(0,height-blockSize,width,blockSize);
//
// };
// // drawBorder();
// var drawScore = function(){
//     ctx.font = "14px Courier";
//     ctx.fillStyle="black";
//     ctx.textAlign="left";
//     ctx.textBaseline="top";
//     ctx.fillText("Score: "+score,blockSize,blockSize);
// };
// // drawScore();
// var gameOver = function(){
//     clearInterval(intervalId);
//     ctx.font="60px Courier";
//     ctx.fillStyle = "red";
//     ctx.textAlign="center";
//     ctx.textBaseline="middle";
//     ctx.fillText("Game Over",width/2,height/2);
// };
//
// var circle = function(x,y,rad,fillcirc){
//     ctx.beginPath();
//     ctx.arc(x,y,rad,0,Math.PI*2,false);
//     if (fillcirc){
//         ctx.fill();
//     } else{
//         ctx.stroke();
//     }
// };
//
// var Block = function(col,row){
//     this.col = col;
//     this.row = row;
// };
//
// Block.prototype.drawSquare = function (color) {
//     var x = this.col * blockSize;
//     var y = this.row * blockSize;
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, blockSize, blockSize);
// };
// // var sampleBlock = new Block(5,5);
// // sampleBlock.drawSquare("blue")
// Block.prototype.drawCircle = function(color){
//     var centerX = this.col * blockSize + blockSize/2;
//     var centerY = this.row * blockSize + blockSize/2;
//     ctx.fillStyle="color";
//     circle=(centerX,centerY,blockSize/2,true)
// };
// Block.prototype.equal = function(otherBlock){
//     return this.col===otherBlock.col && this.row===otherBlock.row;
// };
// // var apple = new Block(2,4);
// // var snake = new Block(2,3);
// // snake.equal(apple);
// var Snake = function(){
//     this.segments=[
//         new Block(7,5),
//         new Block(6,5),
//         new Block(5,5)
//     ];
//     this.direction = "right";
//     this.nextdirection = "right";
// };
// Snake.prototype.draw=function(){
//     for (var i=0;i<this.segments.length;i++){
//         this.segments[i].drawSquare("Blue");
//     }
// };
// Snake.prototype.move = function(){
//     var head = this.segments[0];/*1*/
//     var newHead;/*2*/
//     this.direction = this.nextdirection;/*3*/
//     if (this.direction ==="right"){/*4*/
//         newHead = new Block(head.col + 1,head.row);
//     }
//     else if(this.direction ==="down"){
//         newHead=new Block(head.col,head.row+1)
//     }else if(this.direction==="left"){
//         newHead = new Block(head.col - 1,head.row);
//     }
//     else if (this.direction==="top") {
//         newHead = new Block(head.col,head.row - 1)
//     }
//     if(this.checkCollision(newHead)){/*5*/
//         gameOver();
//         return;
//     }
//     this.segments.unshift(newHead);/*6*/
//     if(newHead.equal(apple.position)){/*7*/
//         score++;
//         apple.move();
//     }else{
//         this.segments.pop();
//     }
// };
// Snake.prototype.checkCollision = function(head){
//     var leftCollision =(head.col === 0);
//     var topCollision=(head.row === 0);
//     var rightCollision=(head.row === widthInBlocks-1);
//     var bottomtCollision=(head.col === heightInBlocks-1);
//     var wallCollision = leftCollision || topCollision||rightCollision||bottomtCollision;
//     var selfCollision = false;
//     for(var i=0;i<this.segments.length;i++){
//         if(head.equal(this.segments[i])){
//             selfCollision = true;
//         }
//     }
//     return wallCollision||selfCollision;
// };
//
// Snake.prototype.setDirection = function(newDirection){
//     if(this.direction==="up" && newDirection==="down"){
//         return;
//     }else if(this.direction==="right" && newDirection==="left"){
//         return;
//     }else if (this.direction==="down" &&newDirection==="up"){
//         return;
//     } else if (this.direction==="left" && newDirection==="right") {
//         return;
//     }this.nextdirection=newDirection;
// };
// var Apple = function () {
//     this.position = new Block(10, 10);
// };
//
// // Draw a circle at the apple's location
// Apple.prototype.draw = function () {
//     this.position.drawCircle("LimeGreen");
// };
//
// // Move the apple to a new random location
// Apple.prototype.move = function () {
//     var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
//     var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
//     this.position = new Block(randomCol, randomRow);
// };
//
// // Create the snake and apple objects
// var snake = new Snake();
// var apple = new Apple();
// var intervalId = setInterval(function () {
//     ctx.clearRect(0, 0, width, height);
//     drawScore();
//     snake.move();
//     snake.draw();
//     apple.draw();
//     drawBorder();
// }, 100);
//
// // Convert keycodes to directions
// var directions = {
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down"
// };
//
// // The keydown handler for handling direction key presses
// $("body").keydown(function (event) {
//     var newDirection = directions[event.keyCode];
//     if (newDirection !== undefined) {
//         snake.setDirection(newDirection);
//     }
// });

//
// var mas = [];
// var howZern=1;
// for(var i=0;i<64;i++){
//     howZern*=2;
//     mas[i]=howZern;
//     console.log(howZern);
//     console.log(mas);
// };

// var word = prompt();
// if (word[0]===word[word.length-1]&&word[1]===word[word.length-2]) {
//     alert("wow")
// }else{
//     alert("fuu")
// }
// var num=0;
// var mas = [];
// var rr = ()=>{for (var i =0;i<100;i++){
//     num++;
//     mas[i]=num;
//     if (mas[i]%3==0&&mas[i]%5==0) {
//         mas[i]="th-fv";
//     }
//     else if (mas[i]%3==0) {
//     mas[i]="rrr";}
// else if (mas[i]%5==0) {
//     mas[i]="five";
//     }
// }};
// rr();
// var score= {
//     Max:0,
//     Oles:0
// }
// var ind = [];
// for (var i=0;i<10;i++) {
//     ind[i]=i+1;
// }
// var name = prompt("Введите имя");
// var al = ()=>{
//     for (var i=0;i<name.length;i++) {
//         console.log("My "+ind[i]+" letter is "+ name[i])
//     }
// }
// setInterval(al,1000);
// var zoo = ["утконос","макака","ежик","питон","варан","собака","рыба"];
// for (var i =0; i < zoo.length;i++) {
//     zoo[i] ="тут есть крутой "+zoo[i];
// }
//  var e=zoo.join(" да ");
// console.log(e)

// var alfabet = "qwertyuioplkjhgfdsazxcvbnm";
// var e = Math.floor(Math.random()*alfabet.length);
// console.log(alfabet[e]);
// var strofke = prompt();
// var ootput = "";
// for (var i =0;i<strofke.length;i++){
//     if (strofke[i]==="o" || strofke[i]==="a"|| strofke[i]==="e") {
//         ootput+="#";
//     }else {
//         ootput+=strofke[i];
//     }
// }
// var words =["утконос","макака","ежик","питон","варан","собака","рыба"];
// var word = words[Math.floor(Math.random()*words.length)];
// var answerArray = [];
// for (var i =0;i<word.length;i++) {
//     answerArray[i]=" _ ";
// };
// var letters = word.length;
// alert("cлово из "+word.length+" букв")
//
// while (letters>0) {
//     alert(answerArray.join(""));
//     var guest = prompt("Введите букву из названия животного "+word);
//     if (guest === null) {
//         break;
//     } else if (guest.length !== 1) {
//         alert("Введита только ОДНУ букву")
//     } else {
//         for (var j = 0; j < words.length; j++) {
//             if (word[j] === guest) {
//                 answerArray[j] = guest;
//                 letters--;
//             }
//         }
//
//     }
// }
// alert(answerArray.join("."));
// alert("поздравляем , вы ввели буквы и выиграли с словом "+word);
// var answerArray = [];
// for (var i=0;i<word.length;i++){
//     answerArray[i]=" _ ";
// };
// var letter=word.length;
// while (letter>0){
//     alert(answerArray.join(""));
//     var guests = prompt("введите"+word);
//     if (guests===null){
//         break;
//     } else if (guests.length!==1){
//         alert("Введите 1 букву");
//     } else {
//         for (var j=0;j<word.length;j++){
//             if (word[j]===guests) {
//             answerArray[j]=guests;
//             letter--;
//             }
//         }
//     }
// }
// alert(answerArray.join(" "));
// alert("Вы ввели слово "+word);
//  var words = ["ноутбук","Монитор","мышька","блокнот","телефон","ручка","пульт","макбук","розетка","книга"];
//  var word = words[Math.floor(Math.random()*words.length)];
//  var answerArray = [];
//  for (var i=0;i<word.length;i++){
//      answerArray[i]=" _ ";
//  };
//  var letter=word.length;
//  while (letter>0){
//
//          alert(answerArray.join(""));
//          var guest = prompt("введите букву из слова "+word);
//          if (guest===null){
//              break;
//          } else if (guest.length !== 1){
//              alert("Введите только 1 букву");
//          } else {
//              for (var j=0;j<word.length;j++){
//                  if (guest===word[j]) {
//                      answerArray[j]=guest;
//                      letter--;
//                  }
//          }
//      }
//  }
// alert(answerArray.join(" "));
// alert("Вы ввели слово "+word);

// var fu = function (n) {
//     if (n.length>3){
//         console.log("2");
//     }
//     else if (n.length>1){
//         return"3";
//     }
//     return"5";
// };
//
// var w=fu("rrr");
// var a=0;
// while(a!=10){
//     a+=a;
//     if(a==5){continue;
//         print(a);
//     }if(a==7){break;}
// }
// $("body").keydown((event)=>{
//     console.log(event.keyCode);});
// var answerArray=[];
// for (var i=0;i<word.length;i++){
//     answerArray[i]="_";
// }
// var hM=word.length;
// while (hM>0){
//     alert(answerArray.join(" "));
//     var guest = prompt("Введите букву из примера на столе" + word);
//     if (guest===null){
//         break;
//     } else if (guest.length!==1){
//         alert("Введите только 1 букву");
//     } else {
//         for (var j=0;j<word.length;j++){
//                  if (guest===word[j]) {
//                      answerArray[j]=guest;
//                 hM--;
//             }
//         }
//     }
//
// }
// alert(answerArray.join(" "));
// alert(" Вы угадали слово "+ word);
//
// var answerArray = [];
//      for (var i=0;i<word.length;i++) {
//          answerArray[i] = "_";
//      };
//      var vL=word.length;
// while(vL>0){
//     alert(answerArray.join(" "));
//     var guest = prompt("введите букву из слова " + word);
//     if (guest===null){
//         break;
//     }
//     else if (guest.length!==1){
//         alert("Введите только  1 букву из того, что у вас на столе "+word)
//     } else {
//         for (var y=0;y<word.length;y++){
//             if (guest===word[y]){
//             answerArray[y]=guest;
//             vL--;
//         }
//         }
//     }
//
// }
// alert(answerArray.join(" "));
// alert("слово было "+word);

// var words = ["привет","хай","ммм Ты)","воу воу воу","давно не виделись"];
// var word = words[Math.floor(Math.random()*words.length)];
// var answerArray = [];
// for (var i=0;i<word.length;i++){
//     answerArray[i]="_";
// };
// var vL=word.length;
// while (vL>0){
//     alert(answerArray.join(" "));
//     var guest = prompt("введите букву из приветствия"+word);
//
//         if (guest===null){
//             break;
//         } else if (guest.length!==1){
//             alert("Введите только 1 букву");
//         } else {
//
//                 for (var y=0;y<word.length;y++) {
//                     if (guest===word[y]){
//                         answerArray[y]=guest;
//                         vL--;
//                     }
//                 }
//             }
//     }
//
// alert(answerArray.join(" "));
// alert("Слово было" +word);
// var words = ["му","гав","мяу","кря","хрю","пи"];
// var word = words[Math.floor(Math.random()*words.length)];
// var answerArray=[];
// for (var i=0;i<word.length;i++){
//     answerArray[i] = "_";
// } ;
// var wL=word.length;
// var num = 6;
// while (wL>0&&num>0){
//
//
//     alert(answerArray.join(" "));
//     var guest = prompt("введите приветствие животного "+word);
//     if (guest===null){
//         break;
//     }
//     else if (guest.length!==1){
//         alert("Введите только 1 букву");
//     }
//     else {
//         guest=guest.toLowerCase();
//         num--;
//         for (var j=0;j<word.length;j++){
//             if (guest===word[j]&&guest!=answerArray[j]) {
//                 answerArray[j]=guest;
//                 wL--;
//             }
//         }
//     }
//
// }
// if (num>0){
//     alert("молодец слово было  "+word);
// }
// else {alert("слово было "+ word+", а ты ввел "+answerArray.join('')+" лошара")} ;

// var n = [1011011];
// var r = 1011011;
// var n = r.toString().split("");
// var a=0;
// n.forEach(function (value,index,arr) {
//     return arr[index] =+value;
//
// })
// function dec(nnn) {
//     for (var i=0;i<nnn.length;i++) {
//         a= a*2+nnn[i];
//
//     }
//     console.log(a);
// }
// dec(n);
// var n = [1,0,1,1,0,1,1];
// var n=Array.from(1011011);

//
//
// }
// dec(n);
// console.log(a);
// //как передать значение переменной
// var newArrey = [];
// var last;
// var uniqueInOrder=function(iterable){
// for (var i =0;i<iterable.length;i++){
//     if (iterable[i]!==iterable[i+1]){
//         newArrey.push(last = iterable[i])
//     }
// }return newArrey;
// }
// uniqueInOrder('AAAABBBCCDAABBB')

// function uniqueInOrder(it) {
//     var result = []
//     var last
//
//     for (var i = 0; i < it.length; i++) {
//         if (it[i] !== last) {
//             result.push(last = it[i])
//         }
//     }
//
//     return result
// }

// function persistence(num) {
//     var t=num.toString().split("");
//     var how = num.length;
//     for(var i=0;i<num.length;i++){
//         if (how>1) {
//             t[i]+t[i]+t[i+2]
//         }
//     }
//         }
// persistence(999)


// var words = ["red","blue","green","roose","black","white"];
// var word = words[Math.floor(Math.random()*words.length)];
// var answerArray=[];
// for (var i=0;i<word.length;i++){
//     answerArray[i]="_";
// }
// var hM=word.length;
// var poputok=16;
// while (hM>0&& poputok>0){
//     alert(answerArray.join(" "));
//   var guest = prompt("введите букву из "+word);
//     if (guest===null){
//         break;
//     } else if (guest.length!==1){
//         alert("Введите 1 букву");
//     } else {
//         poputok--;
//         for (var y=0;y<word.length;y++){
//             if (guest===word[y]&&answerArray[y]==="_"){
//                 answerArray[y]=guest;
//                 hM--;
//             }
//         }
//     }
// }
// alert("вы ввели "+ answerArray.join(" "));
// alert("слово = "+ word);


// function sumOfDifferences(arr) {
//     var arrR = arr.reverse();
//     let num = 0;
//
//
//     for(let i = 0; i < arrR.length; i++) {
//         if(i == arr.length-1){break}
//         num = num +(arrR[i]-arrR[i+1])
//     }
//     return num;
// }
// console.log(sumOfDifferences([1, 2, 10]));

// var words = ["Хулуган","Дима","Пєня","Фонарь","Фиц","Рико","Нестор","Кузя"];
// var word = words[Math.floor(Math.random()*words.length)];
//
// var mass = [];
// for(var i=0;i<word.length;i++){
//     mass[i]=" _ ";
// }
// var raz = 14;
// var hL = word.length;
// while (hL>0&&raz>0){
//     alert(mass.join(""));
//    var guest= prompt("Введите букву из позівного "+word );
//     if (guest===null){
//         break;
//     } else if (guest.length!==1){
//         alert("Введите только 1 букву");
//     } else {
//         raz--;
//         for (var e=0;e<word.length;e++){
//             if (guest===word[e]&&mass[e]===" _ "){
//                 mass[e]=guest;
//                 hL--;
//
//             }
//         }
//     }
// }
// alert("Вы ввели слово "+mass.join(" "));
// alert("Загадано было "+word);
//
// alert("Добро пожаловать в бизнес, не допускай моих ошибок");
// if (confirm("вы уверены в поставщике на 100%?")){
//     if (confirm("Цена продукта ниже,чем у конкурента?")) {
//         if (confirm("Товар надежный? качественный?")) {
//             if (confirm("Ты уверен?")) {
//                 if (confirm("Ты проверил?")) {
//                     if (confirm("Цена продукта ниже,чем у конкурента?")) {
//                         alert("Желаю успехов!!!")
//                     }else {
//                         alert("no");
//
//                     }
//                 }else {
//                     alert("no");
//
//                 }
//             }else {
//                 alert("no");
//
//             }
//         }else {
//             alert("no");
//
//         }
//     }else {
//         alert("no");
//
//     }
// }
// else {
//     alert("no");
//
// }
// alert("Добро пожаловать в бизнес, не допускай моих ошибок");
//
// var what = [
//     "Вы уверены в поставщике на 100%?",
//     "Ты уверен?",
//     "Ты проверил?",
//     "Цена продукта ниже,чем у конкурента?",
//     "Ты уверен?",
//     "Ты проверил?",
//     "Товар надежный? качественный?",
//     "Ты уверен?",
//     "Ты проверил?",
//     "Этот товар пользуется спросом?",
//     "Ты уверен?",
//     "Ты проверил?",
//     "Цена продукта ниже,чем у конкурента?",
//     "Ты уверен?",
//     "Ты проверил?",
//     "У тебя получится продать с выгодой для себя?",
//     "Ты уверен?",
//     "Заработок больше чем в такси?",
//     "Ты уверен?",
// ];
// var advice = function () {
//     for (var i =0;i<what.length;i++){
//
//          if (confirm(what[i])){
//              if (i ===what.length-1){
//                  alert("Сделай Это!!!")
//              }
//         }
//             else {
//           return  alert("не связывайся!!!")
//         }
//     }
//
// }
//
// advice()

// function maps(x){
//     for(var i=0;i<x.length;i++){
//         x[i]*=2
//     }
//
// }
// var r=[1,2,3];
// maps(r)
// console.log(r)
// function apple(x){
//     var r=Math.pow(x,2)
//     if(r>1000){
//         alert('It\'s hotter than the sun!!')
//     }else {alert('Help yourself to a honeycomb Yorkie for the glovebox.')}
// }
// var e = prompt(" ")
//
// apple(e)
// var r=0;
// function sumMix(x){
// for (var i=0;i<x.length;i++) {
//       r+=Number(x[i]);
// }
// }
// var t =[9, 3, '12', '3']
// sumMix(t);
// console.log(r)
// function sumMix(x){
//       var somme = 0;
//       for (i = 0; i<x.length; i++) {
//             somme += Number(x[i]);
//       }
//       console.log(somme)
// }
//
// var t =[9, 3, '7', '3']
// sumMix(t);
// function showName(firstName, lastName, ...st) {
//       alert(firstName + ' ' + lastName + ' - ' + st);
// }
//
// // выведет: Юлий Цезарь - Император,Рима
// showName("Юлий", "Цезарь", "Император", "Рима");
// let a =(e)=>e*e;
// console.log(a(5))
// let r = [2,3,-8,5,6,7];
// r.forEach((item,i,r)=>{
//       alert( i + ": " + item + " (массив:" + r + ")" );
//
// })
// r=r.sort((a,b)=>a-b);
// console.log(r)
// var m =[];
// var e=0
// function monkeyCount(n) {
//       for (i=0;i<n;i++){
//             e++
//             m[i]=e;
//       }
// }
// monkeyCount(7)
// function ir(bool, func1, func2) {
//     return  bool? func1() : func2()
// }
// var ee = ir(4<1, function(){console.log("True")}, function(){console.log("false")});
//
//
// console.log(ee)
// describe("Solution", function() {
//       it("should test for something", function() {
//             // Test.assertEquals(1 + 1, 2);
//             // assert.strictEqual(1 + 1, 2);
//       });
// });
// function sumStr(a,b) {
//      return a+b
// }
// sumStr(4,5);
// console.log(sumStr(4,5))
// function mouthSize(animal) {
//       animal=="alligator"? console.log("True"):console.log("fue")
// }
// mouthSize("alligtor")




// class Human {
//     constructor(name,date,color="red",har){
//         this.name = name;
//         this.date = date;
//         this.har = har;
//         this.my =true;
//         // this.howManyYears = fromTo
//     }
//     hello(){
//         console.log("halop")
//     }
//
// }
// let sv=new Human("Света","03.11.1992","истеричка")
//
// console.log(sv.date)
