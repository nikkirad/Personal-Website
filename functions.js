var num = 0; // global variable
function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x"+num;
}

function load_style()
{
    page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style === null)
    {
     page_style = "green.css";
    }
    document.getElementById('page_style').setAttribute("href", page_style);
}
function pink_mode()
{
    localStorage.setItem("page_stylesheet_name", "pink.css");
    load_style();
}
function green_mode()
{
    localStorage.setItem("page_stylesheet_name", "green.css");
    load_style();
}
load_style()  // load style immediately