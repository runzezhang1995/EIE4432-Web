import $ from './common';
import '../../style/login.css';


$(() => {
    console.log('ready');
    $('#toggle_button-one').bootstrapToggle();
    
    $('#confirm-button').click((e)=> {
        e.preventDefault();
        const username = $('#id_input').val();

        const usernameRS = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!username.match(usernameRS)) {
            alert('please input a valid username');
        }

        const password = $('#psd_input').val();
        const isOwner = !$('#toggle_button').prop('checked');

        
        e.preventDefault();

        const url = "/EIE4432-WEB/src/server/api/".concat(isOwner? "restaurantLogin.php" : "customerLogin.php");
        $.post(url, {username, password}, (data, status) => {
            if (status === 'success') {
                if (data.success != true) {
                    alert(data.error);
                } else {
                    console.log(data);

                    if (isOwner) {
                        $.cookie('rid', data.rid);
                        $.cookie('rname', username);
                        window.location.href = "/EIE4432-WEB/src/server/restaurantorder.php";
                    } else {
                        $.cookie('uid', data.uid);
                        $.cookie('uname', username);
                        window.location.href = "/EIE4432-WEB/src/server/restaurantList.php";
                    }

                }
                
            }    
            
        }, 'json'); 


    });
});


