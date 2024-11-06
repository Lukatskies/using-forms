console.log
function sendIdea() {
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const comments = document.getElementById("comments").value;

    const genres = [];
        if (document.getElementById("rock").checked) genres.push("Rock");
        else if (document.getElementById("jazz").checked) genres.push("Jazz");
        else if (document.getElementById("indie").checked) genres.push("Indie");
        else if (document.getElementById("punk").checked) genres.push("Punk");

    const instrument = [];
        if (document.getElementById("guitar").checked) instrument.push = "Guitar";
        else if (document.getElementById("drums").checked) instrument.push = "Drums";
        else if (document.getElementById("bass").checked) instrument.push = "Bass";
        else if (document.getElementById("triangle").checked) instrument.push = "Triangle";

    //object for formData//
    const formData = {
        email: email,
        date: date,
        genres: genres,
        instrument: instrument,
        comments: comments
        };


event.preventDefault()

}
