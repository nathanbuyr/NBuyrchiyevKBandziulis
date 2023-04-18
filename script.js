// This script has been created by Karolis Bandziulis
function darkMode()
{
    document.body.style.backgroundColor = "black";

    // changing all p elements and h1 elements to white
    let textElements = document.getElementsByTagName("p");
    let titleElements = document.getElementsByTagName("h1");

    for(let i = 0; i < textElements.length; i++)
    {
        textElements[i].style.color = "white";
    }

    for(let i = 0; i < titleElements.length; i++)
    {
        titleElements[i].style.color = "white";
    }
}