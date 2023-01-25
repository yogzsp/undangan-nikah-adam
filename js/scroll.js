Posisi();
function Posisi() {
    const bodi = $('body').scrollTop();
    const halaman1 = $(".halaman2").offset().top;
    const halaman2 = $(".halaman3").offset().top;
    const halaman3 = $(".halaman4").offset().top;
    const halaman4 = $(".halaman5").offset().top;
    const halaman5 = $(".halaman6").offset().top;
    
    if(halaman1 > 350){
        $(".halaman2 div div").css({
            'opacity':'0',
            'transition':'0.3s'
        });
        // $(".MyProfile div").css('display','none');
    }else{
        // $(".MyProfile div").css('display','block');
        $(".halaman2 div div").css({
            'opacity':'1',
            'transition':'0.3s'
        });
    }
    if(halaman2 > 350){
        $(".halaman3 div div").css({
            'opacity':'0',
            'transition':'0.3s'
        });
        // $(".MyProfile div").css('display','none');
    }else{
        // $(".MyProfile div").css('display','block');
        $(".halaman3 div div").css({
            'opacity':'1',
            'transition':'0.3s'
        });
    }
    if(halaman3 > 350){
        $(".halaman4 div div").css({
            'opacity':'0',
            'transition':'0.3s'
        });
        // $(".MyProfile div").css('display','none');
    }else{
        // $(".MyProfile div").css('display','block');
        $(".halaman4 div div").css({
            'opacity':'1',
            'transition':'0.3s'
        });
    }
    if(halaman4 > 350){
        $(".halaman5 div div").css({
            'opacity':'0',
            'transition':'0.3s'
        });
        // $(".MyProfile div").css('display','none');
    }else{
        // $(".MyProfile div").css('display','block');
        $(".halaman5 div div").css({
            'opacity':'1',
            'transition':'0.3s'
        });
    }
    if(halaman5 > 350){
        $(".halaman6 div div").css({
            'opacity':'0',
            'transition':'0.3s'
        });
        // $(".MyProfile div").css('display','none');
    }else{
        // $(".MyProfile div").css('display','block');
        $(".halaman6 div div").css({
            'opacity':'1',
            'transition':'0.3s'
        });
    }
  setTimeout(Posisi, 100); 
}