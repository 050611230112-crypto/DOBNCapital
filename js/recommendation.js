// Danh sách chuẩn hóa 32 mã cổ phiếu của DOBN Capital
// KHO DỮ LIỆU 32 MÃ CỔ PHIẾU CỦA DOBN CAPITAL — PHÂN BỔ ĐIỂM SỐ THEO MỨC ĐỘ RỦI RO (THANG 40)
// Cổ rủi ro cao = Điểm cao (32-40) | Cân bằng = Điểm trung bình (21-31) | Ít rủi ro = Điểm thấp (10-20)
const EXPANDED_STOCK_POOL = [
    // NHÓM CONSERVATIVE (Ít rủi ro: 10 - 20 điểm)
    { code: "VCB", name: "Ngân hàng TMCP Ngoại thương Việt Nam", type: "Conservative", fundamentalscore: "12.0", logo: "logo/VCB.png" },
    { code: "BID", name: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam", type: "Conservative", fundamentalscore: "14.0", logo: "logo/BID.png" },
    { code: "GAS", name: "Tổng Công ty Khí Việt Nam", type: "Conservative", fundamentalscore: "14.0", logo: "logo/GAS.png" },
    { code: "REE", name: "Công ty Cổ phần Cơ điện lạnh", type: "Conservative", fundamentalscore: "15.0", logo: "logo/REE.png" },
    { code: "MBB", name: "Ngân hàng TMCP Quân đội", type: "Conservative", fundamentalscore: "16.0", logo: "logo/MBB.png" },
    { code: "CTG", name: "Ngân hàng TMCP Công thương Việt Nam", type: "Conservative", fundamentalscore: "16.0", logo: "logo/CTG.png" },
    { code: "PLX", name: "Tập đoàn Xăng dầu Việt Nam", type: "Conservative", fundamentalscore: "18.0", logo: "logo/PLX.png" },
    { code: "BVH", name: "Tập đoàn Bảo Việt", type: "Conservative", fundamentalscore: "19.0", logo: "logo/BVH.png" },

    // NHÓM BALANCED (Rủi ro vừa phải, biến động trung bình: 21 - 31 điểm)
    { code: "FPT", name: "Công ty Cổ phần FPT", type: "Balanced", fundamentalscore: "22.0", logo: "logo/FPT.png" },
    { code: "CTR", name: "Tổng Công ty Cổ phần Công trình Viettel", type: "Balanced", fundamentalscore: "24.0", logo: "logo/CTR.png" },
    { code: "GMD", name: "Công ty Cổ phần Gemadept", type: "Balanced", fundamentalscore: "24.0", logo: "logo/GMD.png" },
    { code: "HPG", name: "Công ty Cổ phần Tập đoàn Hòa Phát", type: "Balanced", fundamentalscore: "25.0", logo: "logo/HPG.png" },
    { code: "TCB", name: "Ngân hàng TMCP Kỹ thương Việt Nam", type: "Balanced", fundamentalscore: "26.0", logo: "logo/TCB.png" },
    { code: "MWG", name: "Công ty Cổ phần Đầu tư Thế Giới Di Động", type: "Balanced", fundamentalscore: "26.0", logo: "logo/MWG.png" },
    { code: "VTP", name: "Tổng Công ty Cổ phần Bưu chính Viettel", type: "Balanced", fundamentalscore: "27.0", logo: "logo/VTP.png" },
    { code: "DCM", name: "Công ty Cổ phần Phân bón Dầu khí Cà Mau", type: "Balanced", fundamentalscore: "28.0", logo: "logo/DCM.png" },
    { code: "DPM", name: "Tổng Công ty Phân bón và Hóa chất Dầu khí", type: "Balanced", fundamentalscore: "28.0", logo: "logo/DPM.png" },
    { code: "MSN", name: "Công ty Cổ phần Tập đoàn Masan", type: "Balanced", fundamentalscore: "29.0", logo: "logo/MSN.png" },
    { code: "KDH", name: "Công ty Cổ phần Đầu tư và Kinh doanh Nhà Khang Điền", type: "Balanced", fundamentalscore: "30.0", logo: "logo/KDH.png" },
    { code: "HDB", name: "Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh", type: "Balanced", fundamentalscore: "31.0", logo: "logo/HDB.png" },

    // NHÓM AGGRESSIVE (Rủi ro cao, biến động mạnh/đầu cơ: 32 - 40 điểm)
    { code: "SSI", name: "Công ty Cổ phần Chứng khoán SSI", type: "Aggressive", fundamentalscore: "33.0", logo: "logo/SSI.png" },
    { code: "VCI", name: "Công ty Cổ phần Chứng khoán Vietcap", type: "Aggressive", fundamentalscore: "33.0", logo: "logo/VCI.png" },
    { code: "HCM", name: "Công ty Cổ phần Chứng khoán Thành phố Hồ Chí Minh", type: "Aggressive", fundamentalscore: "34.0", logo: "logo/HCM.png" },
    { code: "DGW", name: "Công ty Cổ phần Thế Giới Số", type: "Aggressive", fundamentalscore: "34.0", logo: "logo/DGW.png" },
    { code: "GEX", name: "Công ty Cổ phần Tập đoàn GELEX", type: "Aggressive", fundamentalscore: "35.0", logo: "logo/GEX.png" },
    { code: "VRE", name: "Công ty Cổ phần Vincom Retail", type: "Aggressive", fundamentalscore: "36.0", logo: "logo/VRE.png" },
    { code: "VHM", name: "Công ty Cổ phần Vinhomes", type: "Aggressive", fundamentalscore: "37.0", logo: "logo/VHM.png" },
    { code: "DXG", name: "Công ty Cổ phần Tập đoàn Đất Xanh", type: "Aggressive", fundamentalscore: "38.0", logo: "logo/DXG.png" },
    { code: "VIC", name: "Tập đoàn Vingroup", type: "Aggressive", fundamentalscore: "39.0", logo: "logo/VIC.png" },
    { code: "VJC", name: "Công ty Cổ phần Hàng không VietJet", type: "Aggressive", fundamentalscore: "39.0", logo: "logo/VJC.png" },
    { code: "NVL", name: "Công ty Cổ phần Tập đoàn Đầu tư Địa ốc No Va", type: "Aggressive", fundamentalscore: "40.0", logo: "logo/NVL.png" }, // Rủi ro đòn bẩy cao nhất
    { code: "YEG", name: "Công ty Cổ phần Tập đoàn Yeah1", type: "Aggressive", fundamentalscore: "40.0", logo: "logo/YEG.png" }          // Biến động mạnh nhất
];

// ============================================
// RECOMMENDATION ENGINE
// ============================================

function getRecommendations(score){

    // SORT THE ENTIRE DATABASE
    // BASED ON DISTANCE TO CLIENT SCORE

    const sortedStocks =

    [...EXPANDED_STOCK_POOL]

    .sort((a,b)=>{

        return Math.abs(
            a.fundamentalscore - score
        )

        -

        Math.abs(
            b.fundamentalscore - score
        );

    });

    // RETURN TOP 5

    return sortedStocks.slice(0,5);

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
