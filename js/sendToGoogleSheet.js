async function sendToGoogleSheet(formData){

    const scriptURL =
    "https://script.google.com/macros/s/AKfycbxgMDHkltVnKlDWQ6HGK8B3ZPRVRo1lNP8Em5Jnd5-qdbHFLw4NT-9KXub7qch_eg06Fg/exec";

    try{

        const response = await fetch(scriptURL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(formData)

        });

        const result = await response.json();

        console.log(
            "Đã lưu khách hàng:",
            result
        );

    }

    catch(error){

        console.error(
            "Lỗi Google Sheet:",
            error
        );

    }

}
