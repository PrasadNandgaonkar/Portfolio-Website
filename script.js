$(document).ready(function() {

    //sticky header
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
          $(".header-area").addClass("sticky");
        } else {
          $(".header-area").removeClass("sticky");
        }
    
        // Update the active section in the header
        updateActiveSection();
      });
    
      $(".header ul li a").click(function(e) {
        e.preventDefault(); 
    
        var target = $(this).attr("href");
    
        if ($(target).hasClass("active-section")) {
          return; 
        }
    
        if (target === "#home") {
          $("html, body").animate(
            {
              scrollTop: 0 
            },
            500
          );
        } else {
          var offset = $(target).offset().top - 40; 
    
          $("html, body").animate(
            {
              scrollTop: offset
            },
            500
          );
        }
    
        $(".header ul li a").removeClass("active");
        $(this).addClass("active");
      });
    
  
      //Initial content revealing js
      ScrollReveal({
        distance: "100px",
        duration: 2000,
        delay: 200
      });
    
      ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
        origin: "left"
      });
      ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
        origin: "right"
      });
      ScrollReveal().reveal(".project-title, .contact-title", {
        origin: "top"
      });
      ScrollReveal().reveal(".projects, .contact", {
        origin: "bottom"
      });
  
    //contact form to excel sheet
    // const scriptURL = 'https://docs.google.com/spreadsheets/d/1jxc5eGNeYGx9uBdLbsUCJx-hiLr2johJ3UJkr9Bpk1w/edit?gid=0#gid=0';
    // const form = document.forms['submitToGoogleSheet']
    // const msg = document.getElementById("msg")
  
    // form.addEventListener('submit', e => {
    //     e.preventDefault()
    //     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    //         .then(response => {
    //             msg.innerHTML = "Message sent successfully"
    //             setTimeout(function () {
    //                 msg.innerHTML = ""
    //             }, 5000)
    //             form.reset()
    //         })
    //         .catch(error => console.error('Error!', error.message))
    // })

    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
      
      // Collect the form data while iterating over the inputs
      let formData = {};
      const formElements = event.target.elements;
      for (let i = 0; i < formElements.length; i++) {
          const input = formElements[i];
          if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
              formData[input.name] = input.value;
          }
      }
      
      // Set up the email message using SMTP.js
      // Email.send({
      //     Host: "smtp.gmail.com",
      //     Username: "prasadnandgaonkar602@gmail.com", // Enter your email address
      //     Password: "chandan2410", // Enter your email password
      //     To: "prasadnandgaonkar602@gmail.com", // Recipient email address
      //     From: formData.email,
      //     Subject: formData.subject || "No subject",
      //     Body: formData.message + "<br><br>From: " + formData.name + "<br>Email: " + formData.email
      // }).then(
      //     message => {
      //         // Reset the form and show success message
      //         event.target.reset();
      //         document.getElementById('msg').innerHTML = "Message sent successfully!";
      //         document.getElementById('msg').classList.add('success');
      //         setTimeout(() => {
      //             document.getElementById('msg').innerHTML = "";
      //             document.getElementById('msg').classList.remove('success');
      //         }, 5000);
      //     }
      // ).catch(err => {
      //     // Show error message if something goes wrong
      //     console.error("Error:", err.message);
      //     document.getElementById('msg').innerHTML = "Failed to send message. Please try again later.";
      //     document.getElementById('msg').classList.add('error');
      //     setTimeout(() => {
      //         document.getElementById('msg').innerHTML = "";
      //         document.getElementById('msg').classList.remove('error');
      //     }, 5000);
      // });
  });

  


      
    });
    
    function updateActiveSection() {
      var scrollPosition = $(window).scrollTop();
    
      // Checking if scroll position is at the top of the page
      if (scrollPosition === 0) {
        $(".header ul li a").removeClass("active");
        $(".header ul li a[href='#home']").addClass("active");
        return;
      }
    
      // Iterate through each section and update the active class in the header
      $("section").each(function() {
        var target = $(this).attr("id");
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();
    
        if (
          scrollPosition >= offset - 40 &&
          scrollPosition < offset + height - 40
        ) {
          $(".header ul li a").removeClass("active");
          $(".header ul li a[href='#" + target + "']").addClass("active");
        }
      });
    }
    
  // MENU ICON
   // Get the menu icon and the navigation menu
  //  const menuIcon = document.querySelector('.header .menu_icon');
  //  const navMenu = document.querySelector('.header ul');
 
  
  //  menuIcon.addEventListener('click', () => {
   
  //    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
  //  });
   
  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.header .menu_icon');
    const navMenu = document.querySelector('.header ul');
  
    // Add a click event listener to the menu icon
    menuIcon.addEventListener('click', function() {
      // Toggle the 'show' class on the navigation menu
      navMenu.classList.toggle('show');
    });
  
    // Close the menu if a menu item is clicked (optional, for better UX)
    navMenu.querySelectorAll('li a').forEach(item => {
      item.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });
  });
  
  
  