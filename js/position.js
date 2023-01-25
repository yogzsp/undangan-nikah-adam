hilang();

function Geser(Tujuan){
    $('body').scrollTop(Tujuan);
}
function CheckPosisi(){
    alert($('body').scrollTop());
}

function HitungPersen(){
    var nilaiPersen = [];
    $(".persen-val").each(function() {
        // alert($(this).html());
        nilaiPersen.push($(this).html());
    });
    i=0;
    $(".bar-persen").each(function() {
        // alert($(this).html());
        $(this).css({
            'width':nilaiPersen[i],
            'transition':'2s'});
        // alert(nilaiPersen[i]);
        i++;
    });
}

function NolPersen(){
    $(".bar-persen").each(function() {
        // alert($(this).html());
        $(this).css({
            'width':'0%',
            'transition':'2s'});
        // alert(nilaiPersen[i]);
    });
}


function hilang(){
    let kelasnya = $(".hilangJS");
    const bodi = $('body').scrollTop();
    if($('body').scrollTop() > 10){
        $('.bg-navbar').css({
            'opacity':'1',
            'transition':'1s'
        });
    }else{
        $('.bg-navbar').css({
            'opacity':'0',
            'transition':'1s'
        });
    }

    // alert($(".hilangJS:nth-child(2)").offset().top);
    // alert(kelasnya.length);
    for (let i = 0; i < kelasnya.length; i++) {
        // kelasnya[i].style.display = "none";  
        // alert($(".hilangJS:nth-child(1)").offset().top);
        // alert($(".hilangJS").eq(i).offset().top);
        if($(".hilangJS").eq(i).offset().top < 350){
            // alert($(".hilangJS").eq(i).offset().top)
            $(".hilangJS").eq(i).css({
                'display':'block',
                'transition':'1s'
            });
        }else{
            $(".hilangJS").eq(i).css({
                'display':'none',
                'transition':'1s'
            });
            
            // alert('kaka')
        }

        //Untuk Persentase Skill
        
        
    }
    setTimeout(hilang, 100); 
}