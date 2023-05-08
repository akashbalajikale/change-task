cl = console.log;
 
const selectColor =document.getElementById("selectColor")
const alldivs = [... document.querySelectorAll(".all")]
 
 
 

const onClickbtn= (eve) =>{
    let val = eve.target.value;
    cl(val)
    alldivs.forEach(div => div.classList.add( 'd-none'))

   let slctdivs=[...document.querySelectorAll("."+val)]
     slctdivs.forEach(d => d.classList.remove('d-none'))
}




selectColor.addEventListener("click", onClickbtn)


