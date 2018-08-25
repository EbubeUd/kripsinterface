/**
 * Captions.js
 * Implementing Kripsinterface Version 1.1
 * Author Ebube Ud
 * Copyright Kripsinterface 2018
 * All Rights Reserved
 */


var captionInstance = {

    "ShortTransitionTime" : 1, //In Seconds
    "MediumTransitionTime" : 2, //In Seconds
    "LongTransitionTime" : 3, //InSeconds
    "delayTimeAfterFadeOut": 1500,
    "delayTimeAfterFadeIn": 15000,
    "transitionTime" : 1000,

    "Music" : "pathToMusic",
    "BackgroundImagesInOrderOfTransition" : ["pathToImages"],
    "Texts": [
        "Over 3,000 years ago, there existed the era of Barons who were an unstoppable force in war and had an unbreakable bond between them. <br> While the Barons enjoyed their victory over the Banditians ( Kingdom of thieves)  in the cool of the night, Sparda poisoned their drinks and sent them into a deep sleep.<br>While the Barons slept, Sparda harvested their souls as sacrifice to the dark lord Amheh.",
        "Sparda with this power laid waste to the kingdoms of the Barons, scattering and dispersing their people to different ends of the earth and cursing them with ailments that bent their bones into different forms. <br> In the quest for the Barons to survive this devastation, some Barons and their people sought to necromancy, creating witches that summoned creatures of the dark; while others mastered the art of looting gold and resources",
        "others devoted their days to science, creating devices that enabled them fly and travel faster to explore the vast lands, a few number of them mastered the art of prayer served as healers for injured and broken spirits. <br> According to the prophecy engraved in the sceptre of Anubis, “There lies a stone in the heart of Sparda that must be destroyed if the Barons are to be united and formidable again.",
        "The house of the Barons must gather resources, build and defend their kingdoms from other kingdoms of the world who also seek the “Stone of Sparda\" for ultimate domination.\n",
        "<img src='/assets/img/logos/ugarsoft.png'><br>Presents",
        "THE WORLD<br> OF<br> CRYPTO BARONS<br> <span id='sloganText'>Barons Awakening</span>"
    ],


}
var Themes = {
    "Light" : {
        "id":1,
        "background": "white",
        "color": "black",
        "OpeningLogo": "/assets/img/logos/newLogo.png"
    },
    "Dark": {
        "id":2,
        "background":"black",
        "color": "white",
        "OpeningLogo": "/assets/img/logos/newLogo.png"
    }
}

function callMe(){
    loadAndShowMenu();
    $('.KIcaption').fadeOut(200);
}


function startEpicCaption(Theme, callBack){
    var captionHolder = $('.KIcaption');
    var captionContent = $('.KIcaption-content');

    var currentCaptionState = 0;
    //Modify The Theme
    $(captionHolder).css('background-color', Theme.background).css('color', Theme.color).fadeIn(1);
    $(captionHolder).fadeIn();

    //Show Logo
    setTimeout(function(){
        //1
        $(captionContent).css('background-image', 'url(/assets/img/mini-game/minigame2.jpg)')
        $(captionContent).html("<div class='content-holder'><p style='font-size:1.4em;  position:relative; top:7rem'>"+ captionInstance.Texts[currentCaptionState]+"</p></div>").css('display', 'none').fadeIn(captionInstance.transitionTime ).delay(captionInstance.delayTimeAfterFadeIn).fadeOut(1000);
    }, 500);


    //2
    setTimeout(function(){
        currentCaptionState +=1;
        $(captionContent).html("<div class='content-holder'><p style='font-size:1.4em;  position:relative; top:7rem'>"+ captionInstance.Texts[currentCaptionState]+"</p></div>").css('display', 'none').fadeIn(captionInstance.transitionTime).delay(captionInstance.delayTimeAfterFadeIn).fadeOut(1000)
    }, 18000);


    //3
    setTimeout(function(){
        $(captionContent).css('background-image', 'url(/assets/img/mini-game/minigame3.jpg)')
        currentCaptionState +=1;
        $(captionContent).html("<div class='content-holder'><p style='font-size:1.4em;  position:relative; top:7rem'>"+ captionInstance.Texts[currentCaptionState]+"</p></div>").css('display', 'none').fadeIn(captionInstance.transitionTime).delay(captionInstance.delayTimeAfterFadeIn).fadeOut(1000)
    }, 35500);


    //4
    setTimeout(function(){
        $(captionContent).css('background-image', 'url(/assets/img/mini-game/mini-game.jpg)')
        currentCaptionState +=1;
        $(captionContent).html("<div class='content-holder'><p style='font-size:1.4em;  position:relative; top:7rem'>"+ captionInstance.Texts[currentCaptionState]+"</p></div>").css('display', 'none').fadeIn(captionInstance.transitionTime).delay(captionInstance.delayTimeAfterFadeIn).fadeOut(1000)
    }, 53000);


    //5
    setTimeout(function(){

        currentCaptionState +=1;
        $(captionContent).html("<div class='content-holder'><p style='font-size:2em;  position:relative; top:5rem; font-family: fantasy'>"+ captionInstance.Texts[currentCaptionState]+"</p></div>").css('display', 'none').fadeIn(captionInstance.transitionTime).delay(captionInstance.delayTimeAfterFadeIn - 8000).fadeOut(1000)
    }, 70500);



    //6
    setTimeout(function(){
        $(captionContent).css('background-image', 'url(/assets/img/mini-game/mini-game.jpg)')

        $(captionContent).css('background-image', 'url(/assets/img/mini-game/mini-game.jpg)')
        currentCaptionState +=1;
        $(captionContent).html("<p style='font-size:5em;  position:relative; top:5rem; font-family:mirageGothic; text-shadow: 5px 11px 26px #3a0000; color: white'>"+ captionInstance.Texts[currentCaptionState]+"</p>").css('display', 'none').fadeIn(captionInstance.transitionTime).delay(captionInstance.delayTimeAfterFadeIn -10000)
    }, 80000);


    setTimeout(function(){
        $('#sloganText').fadeIn(1000, function(){
        })

    }, 85000);

    setTimeout(function(){
        callBack();
    }, 88000);

}

$(document).ready(function(){
    startEpicCaption(Themes.Dark, callMe);
})