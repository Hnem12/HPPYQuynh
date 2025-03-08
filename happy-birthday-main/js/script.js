    function checkValid() {
        var input = document.getElementById("nhapngaysinh").value;
        
        if (input === "08/03/2003") {
            window.open("happy-birthday-main/nextpage.html", "_self");
        } else {
            alert("Ngày sinh không chính xác!");
        }
    }

    document.getElementById("nhapngaysinh").addEventListener("keyup", function(e) {
        if (e.key === "Enter" || e.keyCode === 13) {
            checkValid();
        }
    });


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    $("#nhapngaysinh").on('keyup', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            checkValid();
        }
    });
