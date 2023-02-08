// czekanie na html w js
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('dom content loaded js');
// });
//czekanie na html w jquery
$(function() {
    var owl = $("#owl");
    const owlAudio = new Audio("sounds/Owl Hoot Sound Effect.mp3");
    owl.click(function(){
        owlAudio.play();
        owl.animate({
            opacity: 0.25,
        }, 3000, function (){
            owl.animate({
                opacity: 1,
            })
        })
    })
});
$(function() {
    var bear = $("#bear");
    const bearAudio = new Audio("sounds/Bear Sound Effect.mp3");
    bear.click(function(){
       bearAudio.play();
        bear.animate({
            opacity: 0.25,
        }, 3000, function (){
            bear.animate({
                opacity: 1,
            })
        })
    })
});
$(function() {
    var tiger = $("#tiger");
    const tigerAudio = new Audio("sounds/Tiger Roar Sound Effect.mp3");
    tiger.click(function(){
        tigerAudio.play();
        tiger.animate({
            opacity: 0.25,
        }, 3000, function (){
            tiger.animate({
                opacity: 1,
            })
        })
    })
});
$(function() {
    var sheep = $("#sheep");
    const sheepAudio = new Audio("sounds/All Sheep Sounds (Minecraft) - Sound Effect for editing.mp3");
    sheep.click(function(){
        sheepAudio.play();
        sheep.animate({
            opacity: 0.25,
        }, 3000, function (){
            sheep.animate({
                opacity: 1,
            })
        })
    })
});
$(function() {
    var horse = $("#horse");
    const horseAudio = new Audio("sounds/HORSE - Sound Effect.mp3");
    horse.click(function(){
        horseAudio.play();
        horse.animate({
            opacity: 0.25,
        }, 3000, function (){
            horse.animate({
                opacity: 1,
            })
        })
    })
});
$(function() {
    var dog = $("#dog");
    const dogAudio = new Audio("sounds/Dog Bark Sound Effect HD [No Copyright].mp3");
    dog.click(function(){
        dogAudio.play();
        dog.animate({
            opacity: 0.25,
        }, 3000, function (){
            dog.animate({
                opacity: 1,
            })
        })
    })
});
//za pomocą ciasteczek stworz licznik odwiedzin strony
