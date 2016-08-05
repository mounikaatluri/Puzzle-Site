var i;
var pro = ["two wrongs don't make a right","the pen is mightier than the sword","fortune favors the bold","better late than never","a picture is worth a thousand words","there is no place like home","god helps those who help themselves","cleanliness is next to godliness","a watched pot never boils","beggars cant be choosers","actions speak louder than words","practice makes perfect","easy come easy go","beauty is in the eye of the beholder","necessity is the mother of invention","good things come to those who wait", "two heads are better than one","honesty is the best policy","a penny saved is a penny earned","there's no time like the present","Give credit where credit is due"];
var x=Math.floor((Math.random()*20)+1);
var proverb=pro[x].toUpperCase();
var count=0;
var e=1;
var life=0;
var s=proverb.length/2;
function myFunction1(m)
{
    
    var z=m.value;
    document.getElementById(m).innerHTML=proverb.charAt(m);
    count=count+1;
    if(count>=s&&count<s+1)
    {
        alert("You have no more letters to flip, please make your guess NOW!");
  text();
        document.myform.text.focus();
        return false;
    }
    return true;
}
function load()
{
   
    n=proverb.length;
    for(i=0;i<50;i++)
{
document.getElementById(i).disabled=false;
}

    for(j=n;j<50;j=j+1)
    {
        document.getElementById(j).style.color = "white";
        document.getElementById(j).disabled=true;

    }
}
function myFunction()
{
    
    document.getElementById("demo").innerHTML=proverb;
    alert(proverb.length);
    for(i=0;i<proverb.length;i++)
    {
	

        document.getElementById(i).innerHTML=proverb.charAt(i);
    }
}
function reveal()
{
  
    document.getElementById("demo").innerHTML=proverb;
}
function match()
{
if(e==1)
{
var x = document.createElement("TEXTAREA");
x.name="text";
x.id="msg";
x.cols="25";
x.rows="4";
document.getElementById("f").appendChild(x);
e=e+1;
document.getElementById("guess").innerHTML="Submit Your Answer";
}
else if(life<3)
{  
        var k=0,count1=0;
    

    	var res=document.getElementById("msg").value.toUpperCase();
  	  var res1=res.split(" ");
  	  var proverb1=proverb.split(" ");
   	 for(k=0;k<res1.length;k++)
   	 {
        if(res1[k]==proverb1[k])
        {
            count1++;
        }
        
    	}
    if(count1==proverb1.length)
    {
        if(count<=s-5)
        {
            alert("you are a 5 star guesser");
            document.getElementById("demo").innerHTML="you are a 5 star guesser<br> If you want to continue click on NEW GAME";
        }
        if(count>s-5&&count<s-4)
        {
            alert("you are a 4 star guesser");
            document.getElementById("demo").innerHTML="you are a 4 star guesser<br>. If you want to continue click on NEW GAME";
        }
        if(count>s-4&&count<=s-3)
        {
            alert("You are a 3 star guesser");
            document.getElementById("demo").innerHTML="you are a 3 star guesser<br> If you want to continue click on NEW GAME";
        }
        if(count>s-3&&count<=s-2)
        {
            alert("you are a 2 star guesser");
            document.getElementById("demo").innerHTML="you are a 2 star guesser<br> If you want to continue click on NEW GAME";
        }
        if(count>=s)
        {
            alert("you are a 1 star guesser");
            document.getElementById("demo").innerHTML="you are a 1 star guesser<br> If you want to continue click on NEW GAME";
        }
    }
    else
    {
       life=life+1;
       if(life < 3)
       {
        if (count1>(proverb1.length/2))
        {
            alert("you are almost there");
            document.getElementById("demo").innerHTML="you have "+(3-life)+" chances to guess the proverb";
            document.getElementById("msg").focus();
           document.getElementById("msg").reset();
           
        }
        else
        {
            alert("please try again");
           document.getElementById("demo").innerHTML="you have "+(3-life)+" chances to guess the proverb";
            document.getElementById("msg").focus();
           document.getElementById("msg").reset();
        }
       }

    if(life = 3)
    {
	document.getElementById("demo").innerHTML="";
	document.getElementById("f").innerHTML= "You are out of your chances to guess Proverb<br>";
	document.getElementById("guess").innerHTML="Reveal the Proverb";
 
	}
}
} 
else
{
 for(i=0;i<50;i++)
    {
        document.getElementById(i).innerHTML=proverb.charAt(i);
	document.getElementById("demo").innerHTML=proverb;
   
    }
 }   


}

