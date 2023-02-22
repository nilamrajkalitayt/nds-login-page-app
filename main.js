function checkLogin() {
    const username = document.querySelector("input[name='username']").value;
    const password = document.querySelector("input[name='password']").value;
  
    // Validation logic
    if (username === 'nilamdirectservices_user_12345' && password === '1234567890') {
      window.location = "https://nilamdirectservicesltd.github.io/nilamdirectservices-main-website/";
      return false;
    } else {
      alert("Incorrect username or password");
      return false;
    }
  }