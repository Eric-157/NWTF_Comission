/*Slide show, not using rn
console.log("oi");
var galleries = ["https://docs.google.com/presentation/d/1kdqD9_xsxVUC8bauJFf2y6rkDf_aQZawM7EXrI6DV3s/embed?start=false&loop=false&delayms=60000" 
, "https://docs.google.com/presentation/d/1J8CIcCq4p5rSSwREJHBCTdz07C07Gy9ts5PxaQqJHxQ/embed?start=false&loop=false&delayms=60000"  ,
 "https://docs.google.com/presentation/d/1nE2he_0s8qzlLrH6CBImOJ3osbzVfK3TXhIaIgGFtYk/embed?start=false&loop=false&delayms=60000"  , 
 "https://docs.google.com/presentation/d/1_LvwezflxoMGYaye70HSJt9dAPg1-7G00vZKyT01Jxg/embed?start=false&loop=false&delayms=60000"];
var i=0;

//When click right arrow, slides goes forward
function right()
{
	i=i+1;
	if (i==0)//changing dots and reseting when clicking right arrow and last slide is already selected
	{
		setblack();
		document.getElementById("dot0").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="winter";
	}
	else if (i==1)//changing dots
	{
		setblack();
		document.getElementById("dot1").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="summer";
	}
	else if (i==2)//changing dots
	{
		setblack();
		document.getElementById("dot2").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="spring";
	}
	else if (i==3)//changing dots
	{
		setblack();
		document.getElementById("dot3").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="fall";
	}
	else//changing dots
	{
		i=0;
		setblack();
		document.getElementById("dot0").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="winter";
	}
	
	document.getElementById("slidesshow").src=galleries[i];//changing slide
}

//When click left arrow, slides go backwards.
function left()
{
	i=i-1;
	if(i<0)//changing dots and reseting when clicking left arrow and first slide is already selected
	{
		i=3;
		setblack();
		document.getElementById("dot3").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="fall";
	}
	if (i==0)//changing dots
	{
		setblack();
		document.getElementById("dot0").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="winter";
	}
	else if (i==1)//changing dots
	{
		setblack();
		document.getElementById("dot1").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="summer";
	}
	else if (i==2)//changing dots
	{
		setblack();
		document.getElementById("dot2").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="spring";
	}
	else if (i==3)//changing dots
	{
		setblack();
		document.getElementById("dot3").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="fall";
	}
	
	document.getElementById("slidesshow").src=galleries[i];//changing slide
}

//Changes the slide and the button when you click on dots
function buttonclick(aux)
{
	document.getElementById("slidesshow").src=galleries[aux];//changing slide
	if (aux==0)
	{
		setblack();
		document.getElementById("dot0").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="winter";
	}
	else if (aux==1)
	{
		setblack();
		document.getElementById("dot1").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="summer";
	}
	else if (aux==2)
	{
		setblack();
		document.getElementById("dot2").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="spring";
	}
	else if (aux==3)
	{
		setblack();
		document.getElementById("dot3").src="images/whitedot.png";
		document.getElementById("gallerytitle").innerHTML="fall";
	}
}

//Set all dots to the black one
function setblack()
{
	document.getElementById("dot0").src="images/blackdot.png";
	document.getElementById("dot1").src="images/blackdot.png";
	document.getElementById("dot2").src="images/blackdot.png";
	document.getElementById("dot3").src="images/blackdot.png";
}

*SLIDE SHOW, NOT USING RN*/