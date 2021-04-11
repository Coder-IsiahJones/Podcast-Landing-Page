  //Variables
  const form = document.getElementById('form');
  //   const email = document.getElementById('txtEmail').value;
  const errorMessage = document.getElementById('errorMessage');

  //Email pattern
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  //Validate before button click Event Listener
  form.addEventListener('submit', (e) => {
      //Variables
      const localEmail = document.getElementById('txtEmail').value;

      //Message Array
      let messages = []
      //console.log(email)

      //Check if empty or null
      if (localEmail.length == 0) {
          messages.push('Oops! Please add your email')
          //console.log('empty')
      } else {
          if (localEmail.match(emailPattern)) {
              //console.log('match')
          } else {
              messages.push('Oops! Please check your email')
          }
      }

      //Output messages
      if (messages.length > 0) {
          e.preventDefault()
          errorMessage.innerText = messages.join(', ')
      }

  })

  //Issue need to test.
  //When trying to access the variable (email.value) in the global scope it then cannot be accessed in the event listener. 
  //If it's placed inside the event listener then it can be accessed. Need to test and relearn javascript variable scope access levels. 