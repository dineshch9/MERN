document.getElementById("studentLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("hi");
    // Perform login validation and redirection
    // For simplicity, let's assume successful login redirects to a dashboard
    window.location.href = "C:\Users\dines\Desktop\examsed\student.html";
  });
  
  document.getElementById("facultyLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform login validation and redirection
    // For simplicity, let's assume successful login redirects to a dashboard
    window.location.href = "C:\Users\dines\Desktop\examsed\teacher.html";
  });
  

  function studentform(event){
    event.preventDefault();
    console.log("hi");
    // Perform login validation and redirection
    // For simplicity, let's assume successful login redirects to a dashboard
    window.location.href = "C:\Users\dines\Desktop\examsed\student.html";

  }