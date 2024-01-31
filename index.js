let counter = document.getElementById("counter").innerHTML;

function add(){
    let new_counter = parseInt(counter);
    new_counter++;
    counter = new_counter
    console.log(counter);
    document.getElementById("counter").innerHTML = counter;

}
function minus(){
    let old_counter = parseInt(counter);
    old_counter--;
    counter = old_counter
    console.log(counter);
    document.getElementById("counter").innerHTML = counter;
}

