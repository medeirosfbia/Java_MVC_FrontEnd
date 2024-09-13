const showCategorys = () => {

    $.ajax({
        type: 'GET',
        url: `${base_url}/category`,
        success: (res) => { 
            console.log(res)

        },
        error: (res) => { console.log(res); }
    });
}