const EXPANDED_STOCK_POOL = [

    // ======================================================
    // CONSERVATIVE + LONG TERM
    // ======================================================

// ======================================================
    // CONSERVATIVE + LONG TERM
    // ======================================================
    { code:"VCB", name:"Ngân hàng TMCP Ngoại thương Việt Nam", type:"Conservative", horizon:"Long-term", fundamentalscore:12, expectedReturn:"8-10%", volatility:"Low", exchange:"HOSE", logo:"logo/VCB.png" },
    { code:"BID", name:"Ngân hàng TMCP Đầu tư và Phát triển Việt Nam", type:"Conservative", horizon:"Long-term", fundamentalscore:14, expectedReturn:"8-11%", volatility:"Low", exchange:"HOSE", logo:"logo/BID.png" },
    { code:"GAS", name:"Tổng Công ty Khí Việt Nam - CTCP", type:"Conservative", horizon:"Long-term", fundamentalscore:14, expectedReturn:"9-11%", volatility:"Low", exchange:"HOSE", logo:"logo/GAS.png" },
    { code:"REE", name:"Công ty Cổ phần Cơ Điện Lạnh", type:"Conservative", horizon:"Long-term", fundamentalscore:15, expectedReturn:"9-12%", volatility:"Low", exchange:"HOSE", logo:"logo/REE.png" },
    { code:"MBB", name:"Ngân hàng TMCP Quân đội", type:"Conservative", horizon:"Long-term", fundamentalscore:16, expectedReturn:"10-12%", volatility:"Low", exchange:"HOSE", logo:"logo/MBB.png" },
    { code:"CTG", name:"Ngân hàng TMCP Công Thương Việt Nam", type:"Conservative", horizon:"Long-term", fundamentalscore:16, expectedReturn:"10-12%", volatility:"Low", exchange:"HOSE", logo:"logo/CTG.png" },
    { code:"VGI", name:"Tổng Công ty Cổ phần Đầu tư Quốc tế Viettel", type:"Conservative", horizon:"Long-term", fundamentalscore:17, expectedReturn:"10-14%", volatility:"Low", exchange:"UPCOM", logo:"logo/VGI.png" },
    { code:"PLX", name:"Tập đoàn Xăng dầu Việt Nam", type:"Conservative", horizon:"Long-term", fundamentalscore:18, expectedReturn:"10-13%", volatility:"Low", exchange:"HOSE", logo:"logo/PLX.png" },
    { code:"BVH", name:"Tập đoàn Bảo Việt", type:"Conservative", horizon:"Long-term", fundamentalscore:19, expectedReturn:"10-13%", volatility:"Low", exchange:"HOSE", logo:"logo/BVH.png" },
    { code:"VNM", name:"Công ty Cổ phần Sữa Việt Nam", type:"Conservative", horizon:"Long-term", fundamentalscore:20, expectedReturn:"8-11%", volatility:"Low", exchange:"HOSE", logo:"logo/VNM.png" }
     
    // ======================================================
    // BALANCED + MEDIUM TERM
    // ======================================================
    { code:"FPT", name:"Công ty Cổ phần FPT", type:"Balanced", horizon:"Medium-term", fundamentalscore:22, expectedReturn:"12-15%", volatility:"Medium", exchange:"HOSE", logo:"logo/FPT.png" },
    { code:"CTR", name:"Tổng Công ty Cổ phần Công trình Viettel", type:"Balanced", horizon:"Medium-term", fundamentalscore:24, expectedReturn:"12-15%", volatility:"Medium", exchange:"HOSE", logo:"logo/CTR.png" },
    { code:"GMD", name:"Công ty Cổ phần Gemadept", type:"Balanced", horizon:"Medium-term", fundamentalscore:24, expectedReturn:"12-15%", volatility:"Medium", exchange:"HOSE", logo:"logo/GMD.png" },
    { code:"HPG", name:"Công ty Cổ phần Tập đoàn Hòa Phát", type:"Balanced", horizon:"Medium-term", fundamentalscore:25, expectedReturn:"13-16%", volatility:"Medium", exchange:"HOSE", logo:"logo/HPG.png" },
    { code:"TCB", name:"Ngân hàng TMCP Kỹ thương Việt Nam", type:"Balanced", horizon:"Medium-term", fundamentalscore:26, expectedReturn:"13-16%", volatility:"Medium", exchange:"HOSE", logo:"logo/TCB.png" },
    { code:"MWG", name:"Công ty Cổ phần Đầu tư Thế Giới Di Động", type:"Balanced", horizon:"Medium-term", fundamentalscore:26, expectedReturn:"13-17%", volatility:"Medium", exchange:"HOSE", logo:"logo/MWG.png" },
    { code:"VTP", name:"Tổng Công ty Cổ phần Bưu chính Viettel", type:"Balanced", horizon:"Medium-term", fundamentalscore:27, expectedReturn:"13-17%", volatility:"Medium", exchange:"HOSE", logo:"logo/VTP.png" },
    { code:"DCM", name:"Công ty Cổ phần Phân bón Dầu khí Cà Mau", type:"Balanced", horizon:"Medium-term", fundamentalscore:28, expectedReturn:"14-18%", volatility:"Medium", exchange:"HOSE", logo:"logo/DCM.png" },
    { code:"DPM", name:"Tổng Công ty Phân bón và Hóa chất Dầu khí", type:"Balanced", horizon:"Medium-term", fundamentalscore:28, expectedReturn:"14-18%", volatility:"Medium", exchange:"HOSE", logo:"logo/DPM.png" },
    { code:"MSN", name:"Công ty Cổ phần Tập đoàn Masan", type:"Balanced", horizon:"Medium-term", fundamentalscore:29, expectedReturn:"14-18%", volatility:"Medium", exchange:"HOSE", logo:"logo/MSN.png" },
    { code:"KDH", name:"Công ty Cổ phần Đầu tư và Kinh doanh Nhà Khang Điền", type:"Balanced", horizon:"Medium-term", fundamentalscore:30, expectedReturn:"14-18%", volatility:"Medium", exchange:"HOSE", logo:"logo/KDH.png" },
    { code:"HDB", name:"Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh", type:"Balanced", horizon:"Medium-term", fundamentalscore:31, expectedReturn:"15-18%", volatility:"Medium", exchange:"HOSE", logo:"logo/HDB.png" },
{ code:"IDC", name:"Tổng Công ty IDICO - CTCP", type:"Balanced", horizon:"Medium-term", fundamentalscore:25, expectedReturn:"13-16%", volatility:"Medium", exchange:"HNX", logo:"logo/IDC.png" },
    { code:"OIL", name:"Tổng Công ty Dầu Việt Nam - CTCP", type:"Balanced", horizon:"Medium-term", fundamentalscore:27, expectedReturn:"12-15%", volatility:"Medium", exchange:"UPCOM", logo:"logo/OIL.png" },

    // ======================================================
    // AGGRESSIVE + SHORT TERM
    // ======================================================
    { code:"SSI", name:"Công ty Cổ phần Chứng khoán SSI", type:"Aggressive", horizon:"Short-term", fundamentalscore:33, expectedReturn:"18-22%", volatility:"High", exchange:"HOSE", logo:"logo/SSI.png" },
    { code:"VCI", name:"Công ty Cổ phần Chứng khoán Vietcap", type:"Aggressive", horizon:"Short-term", fundamentalscore:33, expectedReturn:"18-22%", volatility:"High", exchange:"HOSE", logo:"logo/VCI.png" },
    { code:"HCM", name:"Công ty Cổ phần Chứng khoán Thành phố Hồ Chí Minh", type:"Aggressive", horizon:"Short-term", fundamentalscore:34, expectedReturn:"18-22%", volatility:"High", exchange:"HOSE", logo:"logo/HCM.png" },
    { code:"DGW", name:"Công ty Cổ phần Thế Giới Số", type:"Aggressive", horizon:"Short-term", fundamentalscore:34, expectedReturn:"18-24%", volatility:"High", exchange:"HOSE", logo:"logo/DGW.png" },
    { code:"GEX", name:"Công ty Cổ phần Tập đoàn GELEX", type:"Aggressive", horizon:"Short-term", fundamentalscore:35, expectedReturn:"18-24%", volatility:"High", exchange:"HOSE", logo:"logo/GEX.png" },
    { code:"VRE", name:"Công ty Cổ phần Vincom Retail", type:"Aggressive", horizon:"Short-term", fundamentalscore:36, expectedReturn:"19-24%", volatility:"High", exchange:"HOSE", logo:"logo/VRE.png" },
    { code:"VHM", name:"Công ty Cổ phần Vinhomes", type:"Aggressive", horizon:"Short-term", fundamentalscore:37, expectedReturn:"20-25%", volatility:"High", exchange:"HOSE", logo:"logo/VHM.png" },
    { code:"DXG", name:"Công ty Cổ phần Tập đoàn Đất Xanh", type:"Aggressive", horizon:"Short-term", fundamentalscore:38, expectedReturn:"20-25%", volatility:"High", exchange:"HOSE", logo:"logo/DXG.png" },
    { code:"VIC", name:"Tập đoàn Vingroup - CTCP", type:"Aggressive", horizon:"Short-term", fundamentalscore:39, expectedReturn:"20-25%", volatility:"High", exchange:"HOSE", logo:"logo/VIC.png" },
    { code:"VJC", name:"Công ty Cổ phần Hàng không Vietjet", type:"Aggressive", horizon:"Short-term", fundamentalscore:39, expectedReturn:"20-25%", volatility:"High", exchange:"HOSE", logo:"logo/VJC.png" },
    { code:"NVL", name:"Công ty Cổ phần Tập đoàn Đầu tư Địa ốc No Va", type:"Aggressive", horizon:"Short-term", fundamentalscore:40, expectedReturn:"25%+", volatility:"Very High", exchange:"HOSE", logo:"logo/NVL.png" },
    { code:"YEG", name:"Công ty Cổ phần Tập đoàn Yeah1", type:"Aggressive", horizon:"Short-term", fundamentalscore:40, expectedReturn:"25%+", volatility:"Very High", exchange:"HOSE", logo:"logo/YEG.png" }

];
// ======================================================
// DOBN CAPITAL RECOMMENDATION ENGINE
// ======================================================

function getRecommendations(

    score,
    riskType,
    horizon,
    logo

){

    // ==========================================
    // PRIORITY 1
    // FILTER THEO TIME HORIZON
    // ==========================================

    let filteredStocks =

    EXPANDED_STOCK_POOL.filter(stock =>

        stock.horizon === horizon

    );



    // ==========================================
    // NẾU KHÔNG ĐỦ STOCK
    // THÌ LẤY THÊM CÙNG RISK
    // ==========================================

    if(filteredStocks.length < 5){

        const sameRisk =

        EXPANDED_STOCK_POOL.filter(stock =>

            stock.type === riskType

        );

        filteredStocks = [

            ...filteredStocks,
            ...sameRisk

        ];

    }



    // ==========================================
    // REMOVE DUPLICATES
    // ==========================================

    filteredStocks =

    [...new Map(

        filteredStocks.map(stock =>

            [stock.code, stock]

        )

    ).values()];



    // ==========================================
    // SORT THEO ĐIỂM GẦN NHẤT
    // ==========================================

    filteredStocks.sort((a,b)=>{

        return Math.abs(
            a.fundamentalscore - score
        )

        -

        Math.abs(
            b.fundamentalscore - score
        );

    });



    // ==========================================
    // RETURN TOP 5
    // ==========================================

    return filteredStocks.slice(0,5);

}
