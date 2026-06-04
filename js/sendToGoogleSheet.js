
async function sendToGoogleSheet(formData){

    const scriptURL =
    "https://script.google.com/macros/s/AKfycbzHFDtz-56Y5-DlrxIt0ZP7cqkqLw6US_hgm5lH2_7YYs6lbXZgetFIgSZFZ5ITkjJg9g/exec";

    try{

        await fetch(scriptURL, {

            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },

            body: JSON.stringify(formData)

        });

        console.log(
            "Đã lưu khách hàng"
        );

    }

    catch(error){

        console.error(
            "Lỗi Google Sheet:",
            error
        );

    }

}
```
