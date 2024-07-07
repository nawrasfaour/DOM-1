//ex 1:
function EditText() 
{
    const txt = document.querySelector(".text");
    const classInput = document.getElementById("classinput").value;

    if (classInput) 
    {
        txt.classList.add(classInput);
    } 
   
}

// ex 2:

function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
        element.classList.add('hidden');
    } else {
        element.classList.remove('hidden');
        element.classList.add('visible');
    }
}

//ex 3:

function clickbtn()
{
    const btn= document.getElementById('btn');
    
    if(btn.textContent=== 'Click Me!')
        
        btn.textContent='Click!';
        else
        btn.textContent='Click Me!';

        
}