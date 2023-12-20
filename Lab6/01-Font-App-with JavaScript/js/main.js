
function updateText(classN,fontN){
    document.getElementById('text2').innerHTML = document.getElementById('text1').value;
    document.getElementById('text2').className = `${classN}`;
    document.getElementById('fontName').innerHTML = document.getElementById(`${fontN}`).innerHTML;
    document.getElementById('fontName').className = `${classN}`;    

}

