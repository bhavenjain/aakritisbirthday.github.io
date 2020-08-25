
        let box = document.querySelectorAll(".card");
        function transFunction() {
            var i;
            for (i = 0; i < box.length; i++) {
                box[i].classList.toggle("active");
            }
        }
        function keyFunction(e) {
            var i;
            for (i = 0; i < box.length; i++) {
                if (e.keyCode == 38) {
                    box[i].classList.add("active");
                }
                if (e.keyCode == 40) {
                    box[i].classList.remove("active");
                }
            }
            if (e.keyCode == 39) {
                nextFunction()
            }
            if (e.keyCode == 37) {
                backFunction()
            }
        };

        let n = 0;
        function nextFunction() {
            let i;
            n = n - 475;
            if (n <= (-475)*(box.length/2)) {
                n = (-475)*(box.length/2);
            }
            for (i = 0; i < box.length; i++) {
                box[i].style.marginLeft = n + "px";
            }
        }

        function backFunction() {
            let i;
            console.log(box.length)
            n = n + 475;
            if (n > 0) {
                n = 0;
            }
            for (i = 0; i < box.length; i++) {
                box[i].style.marginLeft = n + "px";
            }
        }

        