
var isonMode=document.getElementById('modeIcon'); 
const body = document.querySelector('body')
var productName=document.getElementById('productName'); // input kolo 
var price=document.getElementById('price'); 
var productCatagry= document.getElementById('productCatagry'); 
var productdes=document.getElementById('productdes');  
var MainBTN = document.getElementById('MainBTN') ; 
var products ;  
var mod="Add"; 
var temp; //this varable glabel to make all function readed to solve problem need varable between two function 
//not reated function 
// save data in localStorage  
if(localStorage.getItem('products')==null){
    products=[]; 
}else{
    products= JSON.parse(localStorage.getItem('products')) ; 
    Display(products); 
}
 

function AddProduct(){
   var product={ 
    name:productName.value,
    price:price.value, 
    Catagry:productCatagry.value, 
    description:productdes.value
    }   
    if(mod==="Add"){ 
      products.push(product);  
      localStorage.setItem('products', JSON.stringify(products)); 
      Display(products); 
      ClearForm() ; 

    }else{ 
      products[temp]=product; 
      mod="Add" 
      MainBTN.innerHTML="AddProduct" 
      // my error in this step forget make a display of function in crud operation 
      Display(products);
      ClearForm(); 

    }
   
    
} 

// function to display product 
  function Display(productList){ 
    var cartona=``; 
    for(var i =0; i<productList.length; i++){ 
        cartona += ` <tr> 
        <td>${i}</td> 
        <td>${productList[i].name}</td> 
        <td>${productList[i].price}</td> 
        <td>${productList[i].Catagry}</td> 
        <td>${productList[i].description}</td> 
        <td><button onclick="UpDate(${i})" class="btn  mybutton">Update</button></td> 
        <td><button  onclick="Delete(${i})"class="btn mybutton">Delete</button > </td>
    </tr>`


    } 
    document.getElementById('tableRow').innerHTML=cartona; 
  }  
   // call function 
   Display(products); 


// function to clear product 
 function ClearForm(){
    productName.value=""; 
    price.value="";  
    productCatagry.value=""; 
    productdes.value=""; 

 } 

 //function to delete product 
  function Delete(index){
    products.splice(index,1);    
    //after delete item update the original array in localstorage  
    localStorage.setItem('products', JSON.stringify(products)); 
    Display(products); 

  } 

  // function of search product 
  function Search(term){ 
    var  SearchProduct=[]; 
    for(var i=0; i<products.length; i++){ 
      if(products[i].name.toLowerCase().includes(term.toLowerCase())==true){ 
        SearchProduct.push(products[i]); 

      } 


    } 
      Display(SearchProduct);  
  }  

  //UpDate Product  
  /* i have in this function problem when i update data not updated still the same values */ 
  function UpDate(i){  
    productName.value=products[i].name; 
    price.value=products[i].price;  
    productCatagry.value=products[i].Catagry; 
    productdes.value=products[i].description;  
    MainBTN.innerHTML="UpDate"
    mod="UpDate"; 
    temp=i;  
    scroll({
         top:0,
         behavior:"smooth"
    })
    
  }
 
  