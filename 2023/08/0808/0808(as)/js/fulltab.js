function openTab(e, city, color){
    //console.log(city);
    console.log(this);
    //let i, color;
    let i;
    // switch(city){
    //     case 'community':
    //         color = "red";
    //     break;
    //     case 'review':
    //         color = "green";
    //     break;
    //     case 'qanda':
    //         color= "orange";
    //     break;
    // }
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tabcontent.length; i++ ){
        tabcontent[i].style.display = "none";
    }
    for(i = 0 ; i < tablinks.length; i++){
        //tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].classList.remove("active");
    }
    document.getElementById(city).style.display = 'block';
    //e.currentTarget.className += " active";
    e.style.backgroundColor = color;
}

document.getElementById("default").click();