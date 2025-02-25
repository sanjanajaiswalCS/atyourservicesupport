document.addEventListener("DOMContentLoaded", function () {
    // Call Now button functionality
    const callButton = document.getElementById("callNow");
    const stickyCallButton = document.getElementById("stickyCallNow");

    if (callButton) {
        callButton.addEventListener("click", function () {
            window.location.href = "tel:8070150803";
        });

        // Adding a bounce effect every 5 seconds
        setInterval(() => {
            callButton.classList.add("bouncing");
            setTimeout(() => {
                callButton.classList.remove("bouncing");
            }, 2000);
        }, 5000);
    }

    if (stickyCallButton) {
        stickyCallButton.addEventListener("click", function () {
            window.location.href = "tel:8070150803";
        });

        // Adding a bounce effect every 5 seconds
        setInterval(() => {
            stickyCallButton.classList.add("bouncing");
            setTimeout(() => {
                stickyCallButton.classList.remove("bouncing");
            }, 2000);
        }, 5000);
    }
});
