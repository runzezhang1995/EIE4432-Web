import $ from './common';
import '../../style/myprofile.css';
let cuisine="";
const arrowSpan = '&nbsp <span class="caret"></span>';
let restaurantID ='';
let restaurantInfo_g = {};

function submitInfo(img_url){
    const restaurantInfo ={
        'restaurant_id':restaurantID,
        'restaurantimage':img_url,
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


function getObjectURL(file) {
    let url = null ;
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url ;
}

function submitPic(e){
    e.preventDefault();
    var fd = new FormData();
    var files = $('#picupload')[0].files[0];
    
    var imgSize = files.size;  //b
        if(imgSize>1024*1024*1){//1M
            return alert("image cannot be larger than 1M");
        }
    
    if(!files){
        submitInfo(restaurantInfo_g.thumbnail_image);
        return ;
    }


    fd.append('img',files);

    // const imgdata = {
    //     'img': new FormData($('#picupload')[0].files[0])
    // };
    console.log($('#picupload'));
    $.ajax({
        url : '/EIE4432-WEB/src/server/api/Uploadimage.php',
        type:'POST',
        data: fd,
        contentType:false,
        processData:false,
        success: function(response){
            console.log(response);
            const url = $.parseJSON(response).img_url.replace('\\', '');
            console.log(url);

            submitInfo(url);
            if(url){
                $("#yourimg").attr('src',url);
                $(".container-fluid img").show();
            }else{
                alert("File not uploaded");
            }
        }
    });

    // submitInfo();
};

function getInfo(){
    $.post('/EIE4432-WEB/src/server/api/Getmyprofile.php',{"restaurant_id":restaurantID},(data,status)=>{
        const restaurantInfo = data.restaurants[0];
        restaurantInfo_g = restaurantInfo;
        console.log(restaurantInfo);
        $("#Restaurant_Name-input").val(restaurantInfo.restaurant)  ;
        $("#Address-input").val(restaurantInfo.address)  ;
        $("#yourimg").attr('src',restaurantInfo.thumbnail_image);
        $("#business-hour-begin-input").val(restaurantInfo.start) ;
        $("#business-hour-end-input").val(restaurantInfo.close) ;
        $("#Restaurant_Size-input").val(restaurantInfo.size) ;
        cuisine = restaurantInfo.cuisines;
        $('#dropdownMenu1').html(cuisine + arrowSpan);
        $("#Phone-input").val(restaurantInfo.phone);
        $("#Website-input").val(restaurantInfo.website);
        if(restaurantInfo.average_cost) {
            const average_costs = restaurantInfo.average_cost.split('~');
            if (average_costs.length == 2) {
                $('#Average_Cost-begin-input').val(average_costs[0]);
                $('#Average_Cost-end-input').val(average_costs[1]);
            }
        }
        


    },"json").fail(()=>{
        alert("fail");
    });
};

// function readURL(input) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             console.log("111");
//             console.log(e.currenttTarget);
//             $('#yourimg').attr('src', e.currenttTarget.result);
//         }
//         reader.readAsDataURL(input.files[0]);
// }



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

    // $("#picupload").change(()=>{
    //     readURL(this);
    //     console.log("111");
    // });

    $("#picupload").on("change", () => {
        // Get a reference to the fileList
        const ipt = $("#picupload")[0];

        var files = !!ipt.files ? ipt.files : [];
     
        // If no files were selected, or no FileReader support, return
        if (!files.length || !window.FileReader) {
            console.log(ipt);
            console.log('no file');
            return;
        }
        console.log(ipt);
        // Only proceed if the selected file is an image
        if (/^image/.test( files[0].type)){
     
            // Create a new instance of the FileReader
            var reader = new FileReader();
     
            // Read the local file as a DataURL
            reader.readAsDataURL(files[0]);
     
            // When loaded, set image data as background of div
            reader.onloadend = function(){
                
            console.log(getObjectURL(files[0]));

           $("#yourimg").attr('src', getObjectURL(files[0]));
            
            }
     
        } else {
            console.log('not img');
        }
     
    });


    $("#InfoConfirm").click(submitPic);

});

