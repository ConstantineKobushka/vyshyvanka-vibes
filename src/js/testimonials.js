const config = {
            type: "carousel",
            perView: 3,
            breakpoints: {
                1280: {
                perView: 3
                },
                1279: {
                perView: 2
                },
                767: {
                perView: 1
                }
            }
        };
    new Glide(".glide", config).mount();
