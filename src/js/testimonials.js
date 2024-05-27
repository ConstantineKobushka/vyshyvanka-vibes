const config = {
            
            type: "carousel",
            
            gap: 26,
            perView: 3,
            
            breakpoints: {
                1280: {
                    perView: 3,
                    
                },
                
                1279: {
                    perView: 2,
                    
                },
                767: {
                    perView: 1
                }
                
    } 
            
};
        
new Glide(".glide", config).mount().apply({ HTMLCollection });   
         

