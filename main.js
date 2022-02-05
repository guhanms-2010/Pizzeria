menu_list_array = ["veg margherita pizza", "Veg Pasta Pizza", "Peppe Panner Pizza", "Farmhouse Pizza ", "Corn and Cheese Pizza ", "Garden Veggie Pizza"]
function getmenu(){
    var htmldata;
    htmldata = "<ol class='menulist'>"
    menu_list_array.sort();
    for (var i=0; i < menu_list_array.length; i++){
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }

    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;

}

function add_item(){
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.sort();
    htmldata = "<section class = 'card'>"
    for (var i=0; i < menu_list_array.length; i++){
        htmldata = htmldata + '<div class="card">' + '<img src="pizaaImg">' + menu_list_array[i] + '</div>'
    }

    htmldata=htmldata + "</section"
    document.getElementById("display_addmenu").innerHTML = htmldata;

}
function add_top(){

    var item = docuement.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}