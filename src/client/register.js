import $ from './common';
import '../../style/register.css';

$(() => {
    console.log('ready');
    $('#toggle_button-one').bootstrapToggle();
    $('#confirm-button').click((e)=> {
        const username = $('#id_input').val();
        const usernameRS = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!username.match(usernameRS)) {
            alert('please input a valid username');
        }
        const password = $('#psd_input').val();
        const passwordConfirm = $('#psd_confirm_input').val();

        const passwordRS = /^[a-zA-Z]\w{5,17}$/;
        if (!password.match(passwordRS)) {
            alert('please input a valid password, which should start with alphabet, contains alphabet and numbers, length is between 6 and 18');
        } else if (password != passwordConfirm) {
            alert('please input the same password');
        }
        
        const isOwner = !$('#toggle_button').prop('checked');
        e.preventDefault();
        
    
        const url = "/EIE4432-WEB/src/server/api/".concat(isOwner? "restaurantRegister.php" : "customerRegister.php");

        $.post(url, {username, password}, (data, status) => {
            if (status === 'success') {
                if (data.success == 'false') {
                    alert(data.error);
                } else {
                    $('#confirm-button').prop('disabled', true);
                    setTimeout(()=> {
                        window.location.href = "/EIE4432-WEB/src/server/".concat("login.php");
                    },2000);
                    alert('Register success, you will be redirect soon');
                }    
            }    
            
        }, 'json'); 

    });
});


