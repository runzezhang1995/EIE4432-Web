import $ from './common';
import '../../style/myprofile.css';
let cuisine="";
const arrowSpan = '&nbsp <span class="caret"></span>';
let restaurantID ='';

function submitInfo(img_url){
    const restaurantInfo ={
        'restaurant_id':restaurantID,
        'restaurantimage':imgurl,
        'restaurantname': $("#Restaurant_Name-input").val(),
        'restaurantaddress': $("#Address-input").val(),
        'restaurantstart' : $("#business-hour-begin-input").val(),
        'restaurantclose' : $("#business-hour-end-input").val(),
        'restaurantsize' : $("#Restaurant_Size-input").val(),
        'restaurantcuisines' : cuisine,
        'restaurantcost' : ($("#Average_Cost-begin-input").val()+"~"+$("#Average_Cost-end-input").val()),
        'restaurantphone' : $("#Phone-input").val(),
        'restaurantwebsite' : $("#Website-input").val()
    }

    console.log(restaurantInfo);
    $.post('/EIE4432-WEB/src/server/api/Setmyprofile.php',restaurantInfo,(data,status,xhr)=>{
        if(status==="success"){
            alert("Infomation Update");
        }
        console.log(data);
        console.log(status);
        console.log(xhr);
    },'json').fail(()=>{
        alert("fail");
    });
};

function submitImg() {
 $.ajax('.php', tupian, (data, status, xhr)=> {
    if(status === 'success') {
        if(data.success && data.img_url) {
            submitInfo(data.img_url);


        }
    }

 }) 

}


function getInfo(){
    $.post('/EIE4432-WEB/src/server/api/Getmyprofile.php',{"restaurant_id":restaurantID},(data,status)=>{
        const restaurantInfo = data.restaurants[0];
        console.log(restaurantInfo);
        $("#Restaurant_Name-input").val(restaurantInfo.restaurant)  ;
        $("#Address-input").val(restaurantInfo.address)  ;
        $("#business-hour-begin-input").val(restaurantInfo.start) ;
        $("#business-hour-end-input").val(restaurantInfo.close) ;
        $("#Restaurant_Size-input").val(restaurantInfo.size) ;
        cuisine = restaurantInfo.cuisines;
        $('#dropdownMenu1').html(cuisine + arrowSpan);
        $("#Phone-input").val(restaurantInfo.phone);
        $("#Website-input").val(restaurantInfo.website);
        const average_costs = restaurantInfo.average_cost.split('~');
        if (average_costs.length == 2) {
            $('#Average_Cost-begin-input').val(average_costs[0]);
            $('#Average_Cost-end-input').val(average_costs[1]);
        }


    },"json").fail(()=>{
        alert("fail");
    });
};

$(() => {
    console.log('ready');   
    
    restaurantID = $('#rid').val();

    getInfo();

    $('#logout-btn').click(()=> {
        $.cookie('uid', null);
        $.cookie('rid', null);
        $.cookie('uname', null);
        $.cookie('rname', null);
        window.location.href = "/EIE4432-WEB/src/server/login.php";
    });

    
    $('.dropdown-selection').click((e) => {
        const tgt = e.currentTarget;
        console.log(tgt);
        cuisine =$(tgt).text();
        const cuisineDisplay = $(tgt).text();
        $('#dropdownMenu1').html(cuisineDisplay + arrowSpan);
    });

    $("#InfoConfirm").click(submitImg);

});

