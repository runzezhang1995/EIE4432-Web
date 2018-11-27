import $ from './common';
import '../../style/myprofile.css';
let cuisine="";
const arrowSpan = '&nbsp <span class="caret"></span>';
const restaurantID = "1";

function submitInfo(){
    const restaurantInfo ={
        'Rname': $("#Restaurant_Name-input").val(),
        'RAddress': $("#Address-input").val(),
        'Rstart' : $("#business-hour-begin-input").val(),
        'Rclose' : $("#business-hour-end-input").val(),
        'Rsize' : $("#Restaurant_Size-input").val(),
        'Rcuisines' : cuisine,
        'Average-cost' : ($("#Average_Cost-begin-input").val()+"~"+$("#Average_Cost-end-input").val()+"HKD"),
        'Phone' : $("#Phone-input").val(),
        'Website' : $("#Website-input").val()
    }
    $.post('http://localhost/EIE4432-WEB/src/server/api/updtrestaurant.php',restaurantInfo,(data,status,xhr)=>{
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
    $.post('',{"RID":restaurantID},(data,status)=>{
        const restaurantInfo = data.profile;
        $("#Restaurant_Name-input").val(restaurantInfo.Rname)  ;
        $("#Address-input").val(restaurantInfo.RAddress)  ;
        $("#business-hour-begin-input").val(restaurantInfo.Rstart) ;
        $("#business-hour-end-input").val(restaurantInfo.Rclose) ;
        $("#Restaurant_Size-input").val(restaurantInfo.Rsize) ;
        cuisine = restaurantInfo.Rcuisines;
        $("#Phone-input").val(restaurantInfo.Phone);
        $("#Website-input").val(restaurantInfo.Website);
    },"json").fail(()=>{
        alert("fail");
    });
};

$(() => {
    console.log('ready');   
    console.log('load css');
    
    $('.dropdown-selection').click((e) => {
        const tgt = e.currentTarget;
        console.log(tgt);
        cuisine = $(tgt).attr('value');
        const cuisineDisplay = $(tgt).text();
        $('#dropdownMenu1').html(cuisineDisplay + arrowSpan);
    });

    $("#InfoConfirm").click(submitInfo);

});

