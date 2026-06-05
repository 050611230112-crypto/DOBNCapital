async function sendToGoogleSheet(formData){
    const scriptURL =
    "https://script.google.com/macros/s/AKfycbxgMDHkltVnKlDWQ6HGK8B3ZPRVRo1lNP8Em5Jnd5-qdbHFLw4NT-9KXub7qch_eg06Fg/exec";
    try{
        await fetch(scriptURL, {
            method: "POST",
            mode: "no-cors",  // ← thêm
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        console.log("Đã gửi dữ liệu lên Google Sheet");
    }
    catch(error){
        console.error(
            "Lỗi Google Sheet:",
            error
        );
    }
}
