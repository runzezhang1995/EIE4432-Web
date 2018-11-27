import $ from './common';
import '../../style/login.css';

$(() => {
    console.log('ready');
    console.log('load css');
    $('#toggle_button-one').bootstrapToggle();

  


    
    $('#confirm-button').click((e)=> {

        const username = $('#id_input').val();

        const usernameRS = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!username.match(usernameRS)) {
            alert('please input a valid username');
        }

        const password = $('#psd_input').val();
        const passwordRS = /^[a-zA-Z]\w{5,17}$/;
        if (!password.match(passwordRS)) {
            alert('please input a valid password');
        }
        
        const isOwner = !$('#toggle_button').prop('checked');

        
        e.preventDefault();
        console.log(username);
        console.log(password);
        console.log(isOwner);
    });
});


