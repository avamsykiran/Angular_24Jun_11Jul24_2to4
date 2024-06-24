
export const greetUser = userName => "Hello " + userName;

export const greetByTime = userName => { 
    let h = (new Date()).getHours();
    
    let greeting="";

    if(h>=3 && h<=11) greeting="Good Morning";
    else if(h>=12 && h<=16) greeting="Good Noon";
    else greeting="Good Evening";

    return greeting + " " + userName;
};