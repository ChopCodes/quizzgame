function logingo(){
    var player1 = document.getElementById("player1_input_name").value;
    var player2 = document.getElementById("player2_input_name").value;
    localStorage.setItem("player1",player1)
    localStorage.setItem("player2",player2)
    window.location = "login.html";
}