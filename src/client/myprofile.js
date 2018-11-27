import $ from './common';
import '../../style/myprofile.css';
let cuisine="";
const arrowSpan = '&nbsp <span class="caret"></span>';
const restaurantID = "1";

function submitInfo(){
    const restaurantInfo ={
        'restaurant_id':"1",
        'restaurantimage':"111",
        'restaurantname': $("#Restaurant_Name-input").val(),
        'restaurantaddress': $("#Address-input").val(),
        'restaurantstart' : $("#business-hour-begin-input").val(),
        'restaurantclose' : $("#business-hour-end-input").val(),
        'restaurantsize' : $("#Restaurant_Size-input").val(),
        'restaurantcusines' : cuisine,
        'restaurantcost' : ($("#Average_Cost-begin-input").val()+"~"+$("#Average_Cost-end-input").val()+"HKD"),
        'restaurantphone' : $("#Phone-input").val(),
        'restaurantwebsite' : $("#Website-input").val()
    }
    $.post('http://localhost/project/EIE4432-WEB/src/server/api/Setmyprofile.php',restaurantInfo,(data,status,xhr)=>{
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

function getInfo(){
    $.post('http://localhost/project/EIE4432-WEB/src/server/api/Getmyprofile.php',{"restaurant_id":"1"},(data,status)=>{
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
    },"json").fail(()=>{
        alert("fail");
    });
};

$(() => {
    console.log('ready');   
    console.log('load css');
    getInfo();
    
    $('.dropdown-selection').click((e) => {
        const tgt = e.currentTarget;
        console.log(tgt);
        cuisine = $(tgt).attr('value');
        const cuisineDisplay = $(tgt).text();
        $('#dropdownMenu1').html(cuisineDisplay + arrowSpan);
    });

    $("#InfoConfirm").click(submitInfo);

});

