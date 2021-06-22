function init(){
    document.getElementById("home-ref-img").style.display = "none";
}
init();
function move_ref(){
    flag_change_windows(false);
    
}
function flag_change_windows(b_flag_window){
    b_flag_window = !b_flag_window;
    if(b_flag_window){
        setTimeout(() => {
            document.getElementById("home-main-img").style.display = "none";
            document.getElementById("home-ref-img").style.display = "block";
        }, 100);
    }else{
        setTimeout(() => {
            document.getElementById("home-ref-img").style.display = "block";
            document.getElementById("home-main-img").style.display = "none";
        }, 100);
    }
}