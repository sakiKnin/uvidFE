const form = document.querySelector('.form')

function findSplitPoint(arr)
{

	   let i, j, rightSum, leftSum = 0

	   for(i = 0; i < arr.length-2; i++)
	   {
	       
	       leftSum+=arr[i]

	       rightSum=0
	       for(j = i+2; j < arr.length; j++)
	       {
		   
		   rightSum+=arr[j]

	       }

	       if(leftSum === rightSum)
	       {
		   
		   return i+1
		   
	       }

	   }

      return -1

}

const findIndex = (event) => {

           event.preventDefault();

	   const name = event.target.elements.name.value

	   const surname = event.target.elements.surname.value

	   const address = event.target.elements.address.value

	   const str = event.target.elements.array.value

	   if(name==="" || surname==="" || address==="" || str==="")
	   {
	             alert("Fill all empty fields...")
	             return
	   }

	   const arr = str.split(' ').filter(item => item!=='').map((item) => Number(item))

	   let splitPoint = findSplitPoint(arr)

	   if(splitPoint===-1 || splitPoint===arr.length)
	   {
	       
	       //document.getElementById("form").innerHTML = "Split point can't be found!"
	       form.classList.add('close')
	       
	       
	   }
	   else
	   {

	       //document.getElementById("form").innerHTML = "Split point found at index: " + splitPoint

	   }
	       
       }
       
function checkInput(event)
{

	   const keyCode = event.which || event.keyCode;
	  	   
	   if((keyCode < 48 || keyCode > 57) && keyCode!==32)
	   {
		   document.getElementById("warrning").innerHTML = "INVALID CHARACTER: " + event.key
	       
	           setTimeout( function()
	           {
		       document.getElementById("warrning").innerHTML = ""
	       
	           }, 1000)

	       return false
	   }

     return true
	   
}
    
