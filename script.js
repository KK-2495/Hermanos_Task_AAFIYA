    // Loader

    var pageLoader = document.getElementById('loading');

    function loader(){
        pageLoader.style.opacity = 0.5;
            setTimeout(() => {
                pageLoader.style.display = 'none';
                document.getElementById('content').style.display = 'block';
            }, 500);
    }
    window.onload = loader;    

    // Owl Carousel Effect
    $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // Form Submission

    document.getElementById('enquiryForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const fname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const number = document.getElementById("phNumber").value;
        const requirement = document.getElementById("requirement").value;

        const ContactInfo = {
            name: fname,
            email: email,
            number: number,
            requirement: requirement
        };

        localStorage.setItem("AAFIYA", JSON.stringify(ContactInfo));
        
        alert("Enquiry submitted successfully!");
    });
});