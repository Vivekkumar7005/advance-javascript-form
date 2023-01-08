
function formWork(){

    let firstName = document.querySelector('#firstname').value
    console.log(firstName)

    let lastName = document.querySelector('#lastname').value
    console.log(lastName)

    let firstNameLength = firstNameLength.length
    console.log(firstNameLength)

    let emailId = document.querySelector('#email').value
    console.log(emailId)

    let emailIdLength = emailId.length
    console.log(emailIdLength)

    let emailStructure = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log(emailStructure)

   


    if(firstNameLength < 3 ){
        document.querySelector('.invalid_text').innerText = 'Name is required with miniimum 3 characters !'

    }else if(!emailId.match(emailStructure)){
        document.querySelector('.invalid_text').innerText = 'Please enter a valid e-mail address !'

    }
    else{
        document.querySelector('.invalid_text').innerText = ''
        document.querySelector('.success_message').innerText = 'Details submitted successfully !!!'

    }

}
