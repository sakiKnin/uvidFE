const form = document.querySelector('.form')
let result = document.querySelector('.result')
const inputName = document.querySelector('.inputName')
const inputSurname = document.querySelector('.inputSurname')
const inputAddress = document.querySelector('.inputAddress')
const inputArray = document.getElementById('array')

function showForm()
{

    form.classList.remove('close')
    result.classList.remove('show')
  
    for(var i=0; i < result.childNodes.length; i++)
    {
	
	result.removeChild(result.childNodes[i])
	
    }
   
    result.removeChild(result.childNodes[0])
    
    inputName.value=""
    inputSurname.value=""
    inputAddress.value=""
    inputArray.value=""

}

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

	       if(leftSum === rightSum && arr[i+1]===leftSum)
	       {
		   
		   return i+1
		   
	       }

	   }

      return -1

}

const findIndex = (event) => {

           event.preventDefault()
    
	   const name = event.target.elements.name.value

	   const surname = event.target.elements.surname.value

	   const address = event.target.elements.address.value

	   const str = event.target.elements.array.value

	   if(name==="" || surname==="" || address==="" || str==="")
	   {
	             alert("Fill all empty fields...")
	             return
	   }

           form.classList.add('close')
           result.classList.add('show')

	   const arr = str.split(' ').filter(item => item!=='').map((item) => Number(item))

           let splitPoint = findSplitPoint(arr)

           var para = document.createElement("p")
           var node = document.createTextNode("Name: " + name + " , " + "Surname: " + surname + " , " + "Address: " +address )
           para.appendChild(node)
           var element = document.querySelector('.result')
           element.appendChild(para)
    
	   if(splitPoint===-1 || splitPoint===arr.length)
	   {
	       
	       para = document.createElement("h4")
	       node = document.createTextNode("Split point can't be found!")
	       para.appendChild(node)
	       element.appendChild(para)
	      	       
	   }
	   else
           {
	
	       para = document.createElement("h4")
	       node = document.createTextNode("Split point found at index: " + splitPoint)
	       para.appendChild(node)
	       element.appendChild(para)
	      	       
	   }
    
          para = document.createElement("button")
          node = document.createTextNode("Back to form")
          para.onclick = showForm
          para.appendChild(node)
          element.appendChild(para)
       }
       
function checkInput(event)
{

	   const keyCode = event.which || event.keyCode;
	  	   
	   if((keyCode < 48 || keyCode > 57) && keyCode!==32)
	   {
		   document.getElementById("warrningMessage").innerHTML = "INVALID CHARACTER: " + event.key
	       
	           setTimeout( function()
	           {
		       document.getElementById("warrningMessage").innerHTML = ""
	       
	           }, 1000)

	       return false
	   }

     return true
	   
}
    
