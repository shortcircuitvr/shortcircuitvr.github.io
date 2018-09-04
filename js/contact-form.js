var contactform =  document.getElementById('cform');
                    contactform.setAttribute('action', 'https://formspree.io/' + 'cindy.ho8197' + '@' + 'gmail' + '.' + 'com');
                 
var showPopup = function (event) {
    event.preventDefault();
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('subject').value == "" || document.getElementById('message').value == ""){
        document.getElementById('popup').style.display = 'block';
        document.getElementById('popup').innerHTML="Please fill all the neccesary fields.";
    }
    else {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('popup').innerHTML="Thanks, your message is sent successfully. I will contact you as soon as possible!";
        document.getElementById('cform').submit();
    }
};

document.getElementById('submit-button').addEventListener('click', showPopup);