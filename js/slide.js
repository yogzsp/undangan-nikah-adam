const productContainers = [...document.querySelectorAll('.slider-container')];
const nxtBtn = [...document.querySelectorAll('.back-list')];
const preBtn = [...document.querySelectorAll('.next-list')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth-200;
        
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth-300;
        
        var maxScrollLeft = item.scrollWidth - item.clientWidth;
        // alert(maxScrollLeft);

        if(item.scrollLeft > maxScrollLeft-2000){
            let kelasnya = $(".slider-container");
            
                for (let i = 0; i < kelasnya.length; i++) {
                    let kelasnya2 = $(".slider-container:eq("+i+") .slider-card");
                    if(kelasnya2.length > 5){
                
                        for (let a = 0; a < 6; a++) {
                            // alert("1")
                            kelasnya2.eq(a).clone().appendTo(kelasnya.eq(i));
                            // alert("2")
                        }
                    }
                    // }

                    //Untuk Persentase Skill
                    
                    
                }
        }
    })
})