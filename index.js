let form= document.querySelector('form')
        // let user = document.getElementById('user')
        let usermessage=document.getElementById('usermessage')
        
        form.addEventListener('submit',e =>{
            e.preventDefault()
            let user = document.getElementById('user')
            let name=user.value
            usermessage.innerText=''
            // alert(name)
            if (name==""){
                usermessage.innerHTML+='<p>name should contain character</p>'           
             }
            if(name.length<=5){
                usermessage.innerHTML='<p> *name should contains more than 5 characters</p>'
            }

            if (!('A'<= name[0] && name[0]<='Z')){
                usermessage.innerText +='*first letter should be capital letter'
            }
            let mob=document.getElementById('mob')
            let phone=mob.value
            if(String(phone).length != 10){
                usermessage.innerHTML+='<p>*mobile number should consist of 10 digits</p>'
            }
            if (!(['9','8','7','6'].includes(String(phone)[0]))){
                usermessage.innerHTML+='<p>*mobile number should startswith 9/8/7/6</p>'
            }
            let email=document.getElementById('email')
            let mail=String(email.value)
            
            if(!mail.endsWith('@gmail.com')){
                usermessage.innerHTML+='<p> *email should consist of @gmail.com </p>'

            }

        }
        )
