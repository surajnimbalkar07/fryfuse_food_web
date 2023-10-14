
        let menu = document.querySelector("#menu-icon");
        let nav = document.querySelector(".nav");

        let isNavVisible = false;

        menu.addEventListener("click", function () {
            if (isNavVisible) {
                nav.classList.remove("active");
            } else {
                nav.classList.add("active");
            }
            isNavVisible = !isNavVisible;
        });
        document.querySelectorAll('.nav a').forEach(item => {
            item.addEventListener('click', () => {
                nav.classList.remove("active");
                isNavVisible = false;
            });
        });
        window.onscroll = () => {
            nav.classList.remove("active");
            isNavVisible = false;
        };

        var light = document.getElementById("light");
        light.onclick = function () {
            document.body.classList.toggle("light-theme");
            if (document.body.classList.contains("light-theme")) {
                light.src = "img/moon.png";
            } else {
                light.src = "img/bulb.png";
            }
        }
    