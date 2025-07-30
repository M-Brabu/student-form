
    function info(){
        var name=document.getElementById("name")
        var age=document.getElementById("age")
        var course=document.getElementById("course")
        var email=document.getElementById("email")
        var save=document.getElementById("save")
        var tbody=document.getElementById("tbody")
        nameval=name.value
        ageval=age.value
        courseval=course.value
        emailval=email.value
        var row=`<tr><td>${nameval}</td><td>${ageval}</td><td>${courseval}</td><td>${emailval}</td><td><button onclick="deleteele(event)" id="del">Delete</button></td></tr>` 
        tbody.innerHTML=tbody.innerHTML+row
    }
    function deleteele(event){
           event.target.closest("tr").remove()
    }
