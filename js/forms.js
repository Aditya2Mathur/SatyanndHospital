document.addEventListener("DOMContentLoaded",function(){var forms=document.querySelectorAll(".experience-form");forms.forEach(function(form){form.addEventListener("submit",function(event){event.preventDefault();var formData=new FormData(form);var alertMessage=form.querySelector('.alertMessage');alertMessage.innerText="Sending Experience...";alertMessage.style.display="block";fetch(form.action,{method:'POST',body:formData}).then(response=>{if(response.ok){alertMessage.innerText="Experience Shared Successfully!";setTimeout(function(){form.reset();alertMessage.innerText="Your Experience Pending Review for Website."},5000)}else{alertMessage.innerText="Failed to send message"}}).catch(error=>{console.error('Error:',error);alertMessage.innerText="Something Went Wrong: "+error})})})})

document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".contact-form").forEach(function(e){e.addEventListener("submit",function(t){t.preventDefault();var n=new FormData(e),a=e.querySelector('.contactMessage');a.innerText="Your Message is sending...",a.style.display="block",fetch(e.action,{method:'POST',body:n}).then(function(t){t.ok?(a.innerText="Your Message is Sended",setTimeout(function(){e.reset(),a.innerText=""},5000)):a.innerText="Failed to send message"}).catch(function(t){console.error('Error:',t),a.innerText="Something Went Wrong: "+t})})})});