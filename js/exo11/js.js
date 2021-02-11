// var str1= null;
// var str2=null;
// var n=null;

// function strtok(str1,str2,n)
// {
//     for ()
// }

function strtok(str1, str2, n) 
    {
        
        var res = str1.split(str2);
        console.log(res[n]);
     }

     var str1 = "robert ;dupont ;amiens ;80000";
     var str2 = ";";
     var n = 2;

     strtok(str1, str2, n);