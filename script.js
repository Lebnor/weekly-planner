// page background color
var colors = ['#7400b8', '#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#118ab2', '#073b4c', 'white'];

var rand = Math.floor(Math.random() * 4);  

// weekly planner
var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];


window.onload = function(){

    chrome.storage.sync.get('bg', function(result) {
        var user_selected = result.bg;
        console.log('Value currently is ' + user_selected);
        if (user_selected === "random color") {
            var rand = Math.floor(Math.random() * (colors.length + 1));
            user_selected = colors[rand];
        }  else if (user_selected === "pic") {
            document.body.style.backgroundImage = "url(images/paper.jpg)"
        }
        if (localStorage.getItem("gradiantcolor") === "on") {
            document.body.style.backgroundImage = "linear-gradient(white, " + user_selected + ")";
        } else {
            document.body.style.backgroundColor = user_selected;
            var p = document.getElementsByTagName("p");
            for (var i = 0; i < p.length; i++) {
                p[i].style.backgroundColor = "darkgrey";
                p[i].style.color = "white";   
            }
        }
    });
    // get current day
    var currday = new Date();

    // save data for each day
    for (var i = 0; i < days.length; i++) {
        var dayobj = document.getElementById(days[i]);
        dayobj.innerText = currday.getFullYear;

        // highlight if current day
        if (i == currday.getDay()) {
            dayobj.style.border = "2px solid gold";
            dayobj.style.boxShadow = "0px 0px 2px gold";
        }
        dayobj.onkeyup = function(e) {
            var element = e.target;
            localStorage.setItem(element.id, element.value);
        }
        dayobj.innerText = localStorage.getItem(days[i]);
    }

    // add button to button group
    var btn = document.getElementById('addbtngroup1');
    btn.addEventListener('click', function() {
        var btngroup1 = document.getElementById('btngroup1');
        var element = document.createElement('button');
        btngroup1.appendChild(element);
    });

    
(function() { if (window["_gainNode"]) { window["_gainNode"].gain.value = parseFloat(prompt('Set the playback rate')); return; } var v = document.querySelector('video'); var audioCtx = new AudioContext(); var source = audioCtx.createMediaElementSource(v); var gainNode = audioCtx.createGain(); gainNode.gain.value = parseFloat(prompt('Set the audio gain')); source.connect(gainNode); gainNode.connect(audioCtx.destination); window["_gainNode"] = gainNode; } )();
}
