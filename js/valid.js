function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

function checkEmail(kelas,report){

    var IsiEmail = $(kelas).val();
    var Report = $(report);
    if(!validateEmail(IsiEmail) && IsiEmail.length > 0){
        Report.css({'display':'block'});
    }else{
        Report.css({'display':'none'});
    }
}

function checkNull(kelas,report,jumlah){

    var IsiEmail = $(kelas).val();
    var Report = $(report);
    if(IsiEmail.length < jumlah){
        Report.css({'display':'block'});
    }else{
        Report.css({'display':'none'});
    }
}