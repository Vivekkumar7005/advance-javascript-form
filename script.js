
document.querySelector('.form_submission').addEventListener('click', function(){

    let firstName = document.querySelector('#firstname').value.length
    let lastName = document.querySelector('#lastname').value.length
    let dateofBirth = document.querySelector('#dob').value.length 
    let emailId = document.querySelector('#email').value.length
    // let emailStructure = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


    console.log(emailId)

    if(firstName < 3 ){
        document.querySelector('.invalid_text').innerText = 'Name is required with miniimum 3 characters !'

    }else if(lastName < 3 ){
        document.querySelector('.invalid_text').innerText = 'Last name should contain atleast 3 characters !'
        
    }else if(dateofBirth >= 2000-01-01){
        document.querySelector('.invalid_text').innerText = 'you are not allowed !'

    // }else if(!emailId.match(emailStructure)){
    //     document.querySelector('.invalid_text').innerText = 'Please enter a valid e-mail address !'
    }else{
        document.querySelector('.popup').style.display = 'block'
        document.querySelector('.value_1').innerText = document.querySelector('#firstname').value
        document.querySelector('.value_2').innerText = document.querySelector('#lastname').value
        document.querySelector('.value_3').innerText = document.querySelector('#dob').value
        document.querySelector('.value_4').innerText = document.querySelector('#email').value
        document.querySelector('.value_5').innerText = document.querySelector('#state').value
    }

})

document.querySelector('.preview_submission').addEventListener('click', function(){

    document.querySelector('.success_message').innerText = 'Details submitted successfully !!!'



})




























// function formWork(){

//     let firstName = document.querySelector('#firstname').value
//     console.log(firstName)

//     let lastName = document.querySelector('#lastname').value
//     console.log(lastName)

//     let firstNameLength = firstNameLength.length
//     console.log(firstNameLength)

//     let emailId = document.querySelector('#email').value
//     console.log(emailId)

//     let emailIdLength = emailId.length
//     console.log(emailIdLength)

//     let emailStructure = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
//     console.log(emailStructure)

   


//     if(firstNameLength < 3 ){
//         document.querySelector('.invalid_text').innerText = 'Name is required with miniimum 3 characters !'

//     }else if(!emailId.match(emailStructure)){
//         document.querySelector('.invalid_text').innerText = 'Please enter a valid e-mail address !'

//     }
//     else{
//         document.querySelector('.invalid_text').innerText = ''
//         document.querySelector('.success_message').innerText = 'Details submitted successfully !!!'

//     }

// }
