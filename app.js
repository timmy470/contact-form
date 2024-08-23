//regex for email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//regex for number: /^\d/ between 0-9;

let isQuerySelected = false;
let isContentChecked = null;

function validateform(event){
    event.preventDefault();
    //clear error messages
    const errors = document.querySelectorAll('.error');
    const inputs = document.querySelectorAll('input');
    let textArea = document.querySelector('.text');
    errors.forEach((error)=> error.textContent = '');
    inputs.forEach((input)=> input.classList.remove('invalid'));
     textArea.classList.remove('invalid');
     let isvalid = false;
    //firstname validation
   const firstName = document.querySelector('.first-name');
   const firstNameErr = document.querySelector('.firstNameErr');

   if(firstName.value.trim() == ''){
        firstNameErr.textContent = 'This field is required';
        firstName.classList.add('invalid');
        isvalid = true;
   }else if(/^\d/.test(firstName.value.trim())){
        firstNameErr.textContent = 'Firstname must not start with a number';
        firstName.classList.add('invalid');
        isvalid = true;
   }

   //validate last-name
   const lastName = document.querySelector('.last-name');
   const lastNameErr = document.querySelector('.lastNameErr');
   if(lastName.value.trim() == ''){
        lastNameErr.textContent = 'This field is required';
        lastName.classList.add('invalid');
        isvalid = true;
   }else if(/^\d/.test(lastName.value.trim())){
        lastNameErr.textContent = 'Lastname must not start with a number';
        lastName.classList.add('invalid');
        isvalid = true;
   }

   //validate email
   const email = document.querySelector('.email');
   const emailErr = document.querySelector('.emailErr');
   const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if(email.value.trim() == ''){
        emailErr.textContent = 'This field is required';
        email.classList.add('invalid');
        isvalid = true;
   }else if(!emailReg.test(email.value.trim())){
        emailErr.textContent = 'Please add a valid email address';
        email.classList.add('invalid');
        isvalid = true;
   }

   //validate querry
   if(!isQuerySelected){
        querryErr.textContent = 'Please select a query type';
        isvalid = true;
   }
   //validate textarea
   const textarea = document.querySelector('#textarea');
   const textAreaErr = document.querySelector('.textAreaErr');

   if(textarea.value == ''){
    textAreaErr.textContent = 'This field is required';
    textarea.classList.add('invalid');
    isvalid = true;
   }
   //validate checkbox
   if(!isContentChecked){
        checkErr.textContent = 'To submit this form, please consent to being contacted';
     //    isvalid = true;
   }
   let timeout = null;
   if(!isvalid){
     //submit the form and call up success message
     const success = document.querySelector('.success-message')
     // clearTimeout(timeout);
     clearInterval(timeout);
     timeout = setTimeout(()=>{
          firstName.value = '';
          lastName.value = '',
          email.value = '';
          textArea.value = '';
          success.style.display = 'block';
     },500)
   }
}

const query1 = document.querySelector('.query1');
const query2 = document.querySelector('.query2');
const querryErr = document.querySelector('.querryErr');
const genImg = document.querySelector('.img-gen');
const supImg = document.querySelector('.img-sup');

query1.addEventListener('click',()=>{
    query1.classList.add('selected');
    genImg.style.display = 'block';
    query2.classList.remove('selected');
    supImg.style.display = 'none';
    isQuerySelected = true;
});
query2.addEventListener('click',()=>{
    query2.classList.add('selected');
    supImg.style.display = 'block';
    query1.classList.remove('selected');
    genImg.style.display = 'none';
    isQuerySelected = true;
});

const checkContent = document.querySelector('.check-container');
const checkImg = document.querySelector('.check-container > span > img');
const checkErr = document.querySelector('.checkErr');
checkContent.addEventListener('click',()=>{
    checkImg.style.display = 'block';
})