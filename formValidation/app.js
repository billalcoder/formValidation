  console.log(document.querySelector('#contact-form'));
  
  document.getElementById('contact-form').addEventListener('submit', (e)=> {
            e.preventDefault();
            
          
            document.querySelectorAll('.error').forEach(el => el.textContent = '');
            document.getElementById('success-message').style.display = 'none';
            
           
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
           
            let isValid = true;
            

            if (name === '') {
                document.getElementById('name-error').textContent = 'Name is required';
                isValid = false;
            }
            
           
            if (email === '') {
                document.getElementById('email-error').textContent = 'Email is required';
                isValid = false;
            } else if (!isValidEmail(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
          
            if (message === '') {
                document.getElementById('message-error').textContent = 'Message is required';
                isValid = false;
            }
            
            
            if (isValid) {
                document.getElementById('success-message').style.display = 'block';
            }
        });
        
        function isValidEmail(email) {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return regex.test(email);
        }