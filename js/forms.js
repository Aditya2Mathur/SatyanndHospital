document.addEventListener("DOMContentLoaded",function(){var forms=document.querySelectorAll(".experience-form");forms.forEach(function(form){form.addEventListener("submit",function(event){event.preventDefault();var formData=new FormData(form);var alertMessage=form.querySelector('.alertMessage');alertMessage.innerText="Sending Experience...";alertMessage.style.display="block";fetch(form.action,{method:'POST',body:formData}).then(response=>{if(response.ok){alertMessage.innerText="Experience Shared Successfully!";setTimeout(function(){form.reset();alertMessage.innerText="Your Experience Pending Review for Website."},5000)}else{alertMessage.innerText="Failed to send message"}}).catch(error=>{console.error('Error:',error);alertMessage.innerText="Something Went Wrong: "+error})})})})


document.addEventListener("DOMContentLoaded",function(){var forms=document.querySelectorAll(".contact-form");forms.forEach(function(form){form.addEventListener("submit",function(event){event.preventDefault();var formData=new FormData(form);var contactMessage=form.querySelector('.contactMessage');contactMessage.innerText="Sending Experience...";contactMessage.style.display="block";fetch(form.action,{method:'POST',body:formData}).then(response=>{if(response.ok){contactMessage.innerText="Experience Shared Successfully!";setTimeout(function(){form.reset();contactMessage.innerText="Your Experience Pending Review for Website."},5000)}else{contactMessage.innerText="Failed to send message"}}).catch(error=>{console.error('Error:',error);contactMessage.innerText="Something Went Wrong: "+error})})})})

