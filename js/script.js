var albumcover = document.getElementById("albums");
var prevBtn = document.querySelector("#prev");
var nextBtn = document.querySelector("#next");
var audio = document.querySelector("#audio");
audio.addEventListener("ended", function () {
    audio.currentTime = 0;
    for (var i = 0; i < tracks.length; i++) {
        document.getElementById('' + i).style.color = "black";
    }

    if (playedtrack == tracks.length) {
        playedtrack = 0;
    }
    if (document.getElementById("album-header").innerHTML == "SR. By Tame Impala") {
        document.getElementById('' + playedtrack).style.color = "red";
        playedtrack++;
        audio.setAttribute('src', "music/The Slow Rush/" + playedtrack + ".mp3")
    }
    else if (document.getElementById("album-header").innerHTML == "RAM. By Daft Punk") {
        document.getElementById('' + playedtrack).style.color = "red";
        playedtrack++;
        audio.setAttribute('src', "music/Random Access Memories/" + playedtrack + ".mp3")
    }
});
var tracks = document.getElementsByClassName("trak-click");
var playedtrack = 1;
prevBtn.addEventListener('click', function (e) {
    e.preventDefault();
    for (var i = 0; i < tracks.length; i++) {
        document.getElementById('' + i).style.color = "black";
    }
    if (playedtrack == 1) {
        playedtrack = tracks.length + 1;
    }
    if (document.getElementById("album-header").innerHTML == "SR. By Tame Impala") {
        playedtrack--;
        document.getElementById('' + (playedtrack - 1)).style.color = "red";
        audio.setAttribute('src', "music/The Slow Rush/" + playedtrack + ".mp3")
    }
    else if (document.getElementById("album-header").innerHTML == "RAM. By Daft Punk") {
        playedtrack--;
        document.getElementById('' + (playedtrack - 1)).style.color = "red";
        audio.setAttribute('src', "music/Random Access Memories/" + playedtrack + ".mp3")
    }

});
nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    for (var i = 0; i < tracks.length; i++) {
        document.getElementById('' + i).style.color = "black";
    }

    if (playedtrack == tracks.length) {
        playedtrack = 0;
    }
    if (document.getElementById("album-header").innerHTML == "SR. By Tame Impala") {
        document.getElementById('' + playedtrack).style.color = "red";
        playedtrack++;
        audio.setAttribute('src', "music/The Slow Rush/" + playedtrack + ".mp3")
    }
    else if (document.getElementById("album-header").innerHTML == "RAM. By Daft Punk") {
        document.getElementById('' + playedtrack).style.color = "red";
        playedtrack++;
        audio.setAttribute('src', "music/Random Access Memories/" + playedtrack + ".mp3")
    }
});

var slowrush = [
    {
        name: "One More Year",
        duration: 5.24,
    },
    {
        name: "Instant Destiny",
        duration: 3.14,
    },
    {
        name: "borderline",
        duration: 3.57,
    },
    {
        name: "Posthumous Forgiveness",
        duration: 6.06,
    },
    {
        name: "Breathe Deeper",
        duration: 6.12,
    },
    {
        name: "Tomorrow's Dust",
        duration: 5.26,
    },
    {
        name: "On Track",
        duration: 5.01,
    },
    {
        name: "Lost In Yesterday",
        duration: 4.09,
    },
    {
        name: "Is It True",
        duration: 3.59,
    },
    {
        name: "It Might Be Time",
        duration: 4.33,
    },
    {
        name: "Glimmer",
        duration: 2.08,
    },
    {
        name: "One More Hour",
        duration: 7.12,
    }
];
var ram = [
    {
        name: "give life back to music",
        duration: 4.35,
    },
    {
        name: "The Game of Love",
        duration: 5.22,
    },
    {
        name: "Giorgio by Moroder",
        duration: 9.04,
    },
    {
        name: "Within",
        duration: 3.48,
    },
    {
        name: "Instant Crush (feat. Julian Casablancas)",
        duration: 5.37,
    },
    {
        name: "Lose Yourself to Dance (feat. Pharrell Williams)",
        duration: 5.53,
    },
    {
        name: "Touch (feat. Paul Williams)",
        duration: 8.18,
    },
    {
        name: "Get Lucky (feat. Pharrell Williams & Nile Rodgers)",
        duration: 6.09,
    },
    {
        name: "Beyond",
        duration: 4.50,
    },
    {
        name: "Motherboard",
        duration: 5.41,
    },
    {
        name: "Fragments of Time (feat. Todd Edwards)",
        duration: 4.39,
    },
    {
        name: "Doin' it Right (feat. Panda Bear)",
        duration: 4.11,
    },
    {
        name: "Contact",
        duration: 6.23,
    }
];
var lefticon = document.getElementById("lefticon");
var righticon = document.getElementById("righticon");
lefticon.addEventListener("click", function (e) {
    e.preventDefault();

    if (document.getElementById("album-header").innerHTML == "RAM. By Daft Punk") {
        document.getElementById("album-header").innerHTML = "SR. By Tame Impala"
        albumcover.style.backgroundImage = "url(css/images/slowrush.jpg)";
        document.getElementById("playlist").innerHTML = "";
        for (var i = 0; i < slowrush.length; i++) {
            document.getElementById("playlist").innerHTML += "<a id='" + i + "' href='' class='trak-click'><div class='track'><p class='track-name'>" + slowrush[i].name + "</p><p class='duration'>" + slowrush[i].duration + "</p></div></a>"
        }
    }
    else {
        document.getElementById("album-header").innerHTML = "RAM. By Daft Punk"
        albumcover.style.backgroundImage = "url(css/images/ram.jpg)";
        document.getElementById("playlist").innerHTML = "";
        for (var i = 0; i < ram.length; i++) {
            document.getElementById("playlist").innerHTML += "<a id='" + i + "' href='' class='trak-click'><div class='track'><p class='track-name'>" + ram[i].name + "</p><p class='duration'>" + ram[i].duration + "</p></div></a>"
        }
    }

    if (document.getElementById("album-header").innerHTML == "SR. By Tame Impala") {
        for (var i = 0; i < tracks.length; i++) {
            tracks[i].addEventListener("click", function (e) {
                for (var i = 0; i < tracks.length; i++) {
                    document.getElementById('' + i).style.color = "black";
                }
                e.preventDefault();
                var clickedtrack = parseInt(this.id) + 1;
                audio.setAttribute('src', "music/The Slow Rush/" + clickedtrack + ".mp3")
                document.getElementById('' + (clickedtrack - 1)).style.color = "red";
                playedtrack = clickedtrack;
            });
        }
    }
    else if (document.getElementById("album-header").innerHTML == "RAM. By Daft Punk") {
        for (var i = 0; i < tracks.length; i++) {
            tracks[i].addEventListener("click", function (e) {
                for (var i = 0; i < tracks.length; i++) {
                    document.getElementById('' + i).style.color = "black";
                }
                e.preventDefault();
                var clickedtrack = parseInt(this.id) + 1;
                audio.setAttribute('src', "music/Random Access Memories/" + clickedtrack + ".mp3")
                document.getElementById('' + (clickedtrack - 1)).style.color = "red";
                playedtrack = clickedtrack;
            });
        }
    }
});
righticon.addEventListener("click", function (e) {
    e.preventDefault();

    if (document.getElementById("album-header").innerHTML == "RAM. By Daft Punk") {
        document.getElementById("album-header").innerHTML = "SR. By Tame Impala"
        albumcover.style.backgroundImage = "url(css/images/slowrush.jpg)";
        document.getElementById("playlist").innerHTML = "";
        for (var i = 0; i < slowrush.length; i++) {
            document.getElementById("playlist").innerHTML += "<a id='" + i + "' href='' class='trak-click'><div class='track'><p class='track-name'>" + slowrush[i].name + "</p><p class='duration'>" + slowrush[i].duration + "</p></div></a>"
        }
    }
    else {
        document.getElementById("album-header").innerHTML = "RAM. By Daft Punk"
        albumcover.style.backgroundImage = "url(css/images/ram.jpg)";
        document.getElementById("playlist").innerHTML = "";
        for (var i = 0; i < ram.length; i++) {
            document.getElementById("playlist").innerHTML += "<a id='" + i + "' href='' class='trak-click'><div class='track'><p class='track-name'>" + ram[i].name + "</p><p class='duration'>" + ram[i].duration + "</p></div></a>"
        }
    }

    if (document.getElementById("album-header").innerHTML == "SR. By Tame Impala") {
        for (var i = 0; i < tracks.length; i++) {
            tracks[i].addEventListener("click", function (e) {
                for (var i = 0; i < tracks.length; i++) {
                    document.getElementById('' + i).style.color = "black";
                }
                e.preventDefault();
                var clickedtrack = parseInt(this.id) + 1;
                audio.setAttribute('src', "music/The Slow Rush/" + clickedtrack + ".mp3")
                document.getElementById('' + (clickedtrack - 1)).style.color = "red";
                playedtrack = clickedtrack;
            });
        }
    }
    else if (document.getElementById("album-header").innerHTML == "RAM. By Daft Punk") {
        for (var i = 0; i < tracks.length; i++) {
            tracks[i].addEventListener("click", function (e) {
                for (var i = 0; i < tracks.length; i++) {
                    document.getElementById('' + i).style.color = "black";
                }
                e.preventDefault();
                var clickedtrack = parseInt(this.id) + 1;
                audio.setAttribute('src', "music/Random Access Memories/" + clickedtrack + ".mp3")
                document.getElementById('' + (clickedtrack - 1)).style.color = "red";
                playedtrack = clickedtrack;
            });
        }
    }

});







for (var i = 0; i < ram.length; i++) {
    document.getElementById("playlist").innerHTML += "<a id='" + i + "' href='' class='trak-click'><div class='track'><p class='track-name'>" + ram[i].name + "</p><p class='duration'>" + ram[i].duration + "</p></div></a>"
}
if (document.getElementById("album-header").innerHTML == "SR. By Tame Impala") {
    for (var i = 0; i < tracks.length; i++) {
    }
    for (var i = 0; i < tracks.length; i++) {
        tracks[i].addEventListener("click", function (e) {
            for (var i = 0; i < tracks.length; i++) {
                document.getElementById('' + i).style.color = "black";
            }
            e.preventDefault();
            document.getElementById("playlist").style.color = "black";
            var clickedtrack = parseInt(this.id) + 1;
            audio.setAttribute('src', "music/The Slow Rush/" + clickedtrack + ".mp3")
            playedtrack = clickedtrack;
            document.getElementById('' + (clickedtrack - 1)).style.color = "red";
        });
    }
}
else if (document.getElementById("album-header").innerHTML == "RAM. By Daft Punk") {

    for (var i = 0; i < tracks.length; i++) {
        tracks[i].addEventListener("click", function (e) {
            for (var i = 0; i < tracks.length; i++) {
                document.getElementById('' + i).style.color = "black";
            }
            e.preventDefault();
            var clickedtrack = parseInt(this.id) + 1;
            audio.setAttribute('src', "music/Random Access Memories/" + clickedtrack + ".mp3")
            playedtrack = clickedtrack;
            document.getElementById('' + (clickedtrack - 1)).style.color = "red";
        });
    }
}

var fname = document.getElementById('fname');
var submit = document.getElementById('submit');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var textarea = document.getElementById('textarea');
var reset = document.getElementById('reset');



submit.addEventListener("click", function (e) {
    e.preventDefault();
    var atposition = email.value.indexOf("@");
    var dotposition = email.value.lastIndexOf(".");
    if (fname.value == "" || lname.value == "" || email.value == "" ||
        textarea.value == "") {
        alert("les champs obligatoire!!")
    }

    else if (atposition < 1 || atposition > dotposition || dotposition + 2 >= email.length || dotposition + 4 < email.length) {
        alert("Email inncorect!");
    }
    else {
        fname.value = "";
        lname.value = "";
        email.value = "";
        textarea.value = "";
        document.getElementById("thanks").style.display = "block";
    }
});






