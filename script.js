// TODO: add code here

window.addEventListener("load", () => {
    const astronautListing = document.getElementById("container");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){            
            json.sort(function(a,b) {return b.hoursInSpace-a.hoursInSpace});
            let count = 0;
            for(let i = 0; i < json.length; ++i){
                astronautListing.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li id="active">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}"></img>
                    </div>
                `;
                ++count;
            }
            const activeArr = document.querySelectorAll("[id=active]");
            for(let i = 0; i < activeArr.length; ++i){
                if(activeArr[i].innerText === "Active: true"){
                    activeArr[i].style.color = "green";
                }
            }
            astronautListing.innerHTML += `<p style="text-align:center"> number of astronauts: ${count}</p>`;
        })
    });
});
