// KHO DỮ LIỆU 32 MÃ CỔ PHIẾU CỦA DOBN CAPITAL — PHÂN LOẠI THEO KỲ HẠN ĐẦU TƯ VÀ ĐIỂM BIẾN ĐỘNG (THANG 40)
// Long-term (Ít rủi ro/Dài hạn) | Medium-term (Cân bằng/Trung hạn) | Short-term (Biến động mạnh/Ngắn hạn)
const EXPANDED_STOCK_POOL = [
    // NHÓM LONG-TERM (Dài hạn chiến lược / Phòng thủ an toàn: 10 - 20 điểm)
    { code: "VCB", name: "Ngân hàng TMCP Ngoại thương Việt Nam", type: "Long-term", fundamentalscore: "12.0", logo: "logo/VCB.png" },
    { code: "BID", name: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam", type: "Long-term", fundamentalscore: "14.0", logo: "logo/BID.png" },
    { code: "GAS", name: "Tổng Công ty Khí Việt Nam", type: "Long-term", fundamentalscore: "14.0", logo: "logo/GAS.png" },
    { code: "REE", name: "Công ty Cổ phần Cơ điện lạnh", type: "Long-term", fundamentalscore: "15.0", logo: "logo/REE.png" },
    { code: "MBB", name: "Ngân hàng TMCP Quân đội", type: "Long-term", fundamentalscore: "16.0", logo: "logo/MBB.png" },
    { code: "CTG", name: "Ngân hàng TMCP Công thương Việt Nam", type: "Long-term", fundamentalscore: "16.0", logo: "logo/CTG.png" },
    { code: "PLX", name: "Tập đoàn Xăng dầu Việt Nam", type: "Long-term", fundamentalscore: "18.0", logo: "logo/PLX.png" },
    { code: "BVH", name: "Tập đoàn Bảo Việt", type: "Long-term", fundamentalscore: "19.0", logo: "logo/BVH.png" },

    // NHÓM MEDIUM-TERM (Trung hạn tăng trưởng / Phát triển ổn định: 21 - 31 điểm)
    { code: "FPT", name: "Công ty Cổ phần FPT", type: "Medium-term", fundamentalscore: "22.0", logo: "logo/FPT.png" },
    { code: "CTR", name: "Tổng Công ty Cổ phần Công trình Viettel", type: "Medium-term", fundamentalscore: "24.0", logo: "logo/CTR.png" },
    { code: "GMD", name: "Công ty Cổ phần Gemadept", type: "Medium-term", fundamentalscore: "24.0", logo: "logo/GMD.png" },
    { code: "HPG", name: "Công ty Cổ phần Tập đoàn Hòa Phát", type: "Medium-term", fundamentalscore: "25.0", logo: "logo/HPG.png" },
    { code: "TCB", name: "Ngân hàng TMCP Kỹ thương Việt Nam", type: "Medium-term", fundamentalscore: "26.0", logo: "logo/TCB.png" },
    { code: "MWG", name: "Công ty Cổ phần Đầu tư Thế Giới Di Động", type: "Medium-term", fundamentalscore: "26.0", logo: "logo/MWG.png" },
    { code: "VTP", name: "Tổng Công ty Cổ phần Bưu chính Viettel", type: "Medium-term", fundamentalscore: "27.0", logo: "logo/VTP.png" },
    { code: "DCM", name: "Công ty Cổ phần Phân bón Dầu khí Cà Mau", type: "Medium-term", fundamentalscore: "28.0", logo: "logo/DCM.png" },
    { code: "DPM", name: "Tổng Công ty Phân bón và Hóa chất Dầu khí", type: "Medium-term", fundamentalscore: "28.0", logo: "logo/DPM.png" },
    { code: "MSN", name: "Công ty Cổ phần Tập đoàn Masan", type: "Medium-term", fundamentalscore: "29.0", logo: "logo/MSN.png" },
    { code: "KDH", name: "Công ty Cổ phần Đầu tư và Kinh doanh Nhà Khang Điền", type: "Medium-term", fundamentalscore: "30.0", logo: "logo/KDH.png" },
    { code: "HDB", name: "Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh", type: "Medium-term", fundamentalscore: "31.0", logo: "logo/HDB.png" },

    // NHÓM SHORT-TERM (Ngắn hạn tối ưu / Biến động & Chu kỳ: 32 - 40 điểm)
    { code: "SSI", name: "Công ty Cổ phần Chứng khoán SSI", type: "Short-term", fundamentalscore: "33.0", logo: "logo/SSI.png" },
    { code: "VCI", name: "Công ty Cổ phần Chứng khoán Vietcap", type: "Short-term", fundamentalscore: "33.0", logo: "logo/VCI.png" },
    { code: "HCM", name: "Công ty Cổ phần Chứng khoán Thành phố Hồ Chí Minh", type: "Short-term", fundamentalscore: "34.0", logo: "logo/HCM.png" },
    { code: "DGW", name: "Công ty Cổ phần Thế Giới Số", type: "Short-term", fundamentalscore: "34.0", logo: "logo/DGW.png" },
    { code: "GEX", name: "Công ty Cổ phần Tập đoàn GELEX", type: "Short-term", fundamentalscore: "35.0", logo: "logo/GEX.png" },
    { code: "VRE", name: "Công ty Cổ phần Vincom Retail", type: "Short-term", fundamentalscore: "36.0", logo: "logo/VRE.png" },
    { code: "VHM", name: "Công ty Cổ phần Vinhomes", type: "Short-term", fundamentalscore: "37.0", logo: "logo/VHM.png" },
    { code: "DXG", name: "Công ty Cổ phần Tập đoàn Đất Xanh", type: "Short-term", fundamentalscore: "38.0", logo: "logo/DXG.png" },
    { code: "VIC", name: "Tập đoàn Vingroup", type: "Short-term", fundamentalscore: "39.0", logo: "logo/VIC.png" },
    { code: "VJC", name: "Công ty Cổ phần Hàng không VietJet", type: "Short-term", fundamentalscore: "39.0", logo: "logo/VJC.png" },
    { code: "NVL", name: "Công ty Cổ phần Tập đoàn Đầu tư Địa ốc No Va", type: "Short-term", fundamentalscore: "40.0", logo: "logo/NVL.png" },
    { code: "YEG", name: "Công ty Cổ phần Tập đoàn Yeah1", type: "Short-term", fundamentalscore: "40.0", logo: "logo/YEG.png" }
];

function getRecommendations(

    score,
    riskType,
    horizon

){

    // FILTER SAME RISK + SAME HORIZON

    let filteredStocks =

    EXPANDED_STOCK_POOL.filter(stock =>

        stock.type === riskType

        &&

        stock.horizon === horizon

    );

    // IF TOO FEW STOCKS

    if(filteredStocks.length < 5){

        filteredStocks =

        EXPANDED_STOCK_POOL.filter(stock =>

            stock.type === riskType

            ||

            stock.horizon === horizon

        );

    }

    // SORT BY SCORE DISTANCE

    filteredStocks.sort((a,b)=>{

        return Math.abs(
            a.fundamentalscore - score
        )

        -

        Math.abs(
            b.fundamentalscore - score
        );

    });

    return filteredStocks.slice(0,5);

}

// Hàm kết nối lưu thông tin về Google Sheet
function sendToGoogleSheet(formData) {
    // URL action form của Google Form (Thay ID form của bạn vào đây)
    const formURL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
    
    const data = new FormData();
    data.append("entry.111111111", formData.name); 
    data.append("entry.222222222", formData.phone);
    data.append("entry.333333333", formData.assets);
    data.append("entry.444444444", formData.debts);
    data.append("entry.555555555", formData.riskScore);

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: data
    }).then(() => console.log("Dữ liệu khách hàng đã đồng bộ sang Google Sheet thành công!"))
      .catch(err => console.error("Lỗi kết nối đồng bộ:", err));
}
