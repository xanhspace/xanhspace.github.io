/* Dữ liệu mặc định của website Xanh Space. Trang admin.html sẽ ghi đè bằng dữ liệu đã chỉnh sửa (lưu trong trình duyệt). */
window.XS_DEFAULT = {
  company: {
    name: "Xanh Space",
    slogan: "Mang không gian xanh tới gần bạn hơn",
    founded: "2024",
    hotline: "0845.567.601",
    zalo1: "0914.289.601",
    zalo2: "0862.115.729",
    tiktok: "https://www.tiktok.com/@xanhspace68",
    facebook: "https://www.facebook.com/xanhspace86",
    email: "",
    address: "TP. Hồ Chí Minh",
    about: "Xanh Space là đơn vị thiết kế và thi công cảnh quan, mang cây xanh và không gian thiên nhiên đến gần hơn với ngôi nhà, văn phòng và công trình của bạn – từ ý tưởng, thi công đến bảo dưỡng lâu dài."
  },
  stats: [
    { v: "2024", l: "Năm thành lập" },
    { v: "45+", l: "Công trình" },
    { v: "TP.HCM", l: "& các tỉnh thành khác" },
    { v: "Trọn gói", l: "Từ thiết kế, thi công đến bảo dưỡng" }
  ],
  services: [
    { icon: "✎", title: "Thiết kế & Thi công cảnh quan", desc: "Từ ý tưởng, phối cảnh 3D, bản vẽ đến thi công thực tế – phù hợp không gian, phong cách và ngân sách của bạn." },
    { icon: "❀", title: "Cung cấp cây văn phòng", desc: "Cây xanh trang trí, cho thuê và cung cấp cây cho văn phòng, cửa hàng." },
    { icon: "✓", title: "Bảo dưỡng cảnh quan", desc: "Chăm sóc định kỳ, giữ không gian xanh luôn tươi đẹp." },
    { icon: "≈", title: "Lắp đặt hệ thống chiếu sáng & tưới tự động", desc: "Hệ thống đèn chiếu sáng và tưới tự động tiết kiệm nước, chăm sóc cây xanh gọn nhẹ." }
  ],
  process: [
    { title: "Khảo sát & tư vấn", desc: "Gặp gia chủ, đo đạc hiện trạng.", time: "Ngày 1–2" },
    { title: "Thiết kế concept 3D", desc: "Phối cảnh, chỉnh sửa tới khi hài lòng.", time: "Ngày 3–10" },
    { title: "Ký hợp đồng & thi công", desc: "Báo cáo tiến độ hàng tuần.", time: "Tuần 2–8" },
    { title: "Nghiệm thu & bảo hành", desc: "Bàn giao, hướng dẫn chăm sóc.", time: "Sau hoàn thiện" }
  ],
  /* Dự án MẪU – thay bằng dự án thật trong admin.html */
  projectTabs: ["Chậu composite siêu nhẹ", "Chậu xi măng (tiết kiệm chi phí)", "Sân vườn"],
  projects: [
    { name: "Chậu composite (mẫu 1)", category: "Chậu composite siêu nhẹ", region: "Quận 7", type: "Chậu composite", size: "", year: "2025", image: "" },
    { name: "Chậu composite (mẫu 2)", category: "Chậu composite siêu nhẹ", region: "Quận 1", type: "Chậu composite", size: "", year: "2025", image: "" },
    { name: "Chậu composite (mẫu 3)", category: "Chậu composite siêu nhẹ", region: "TP. Thủ Đức", type: "Chậu composite", size: "", year: "2025", image: "" },
    { name: "Chậu xi măng (mẫu 1)", category: "Chậu xi măng (tiết kiệm chi phí)", region: "Quận 3", type: "Chậu xi măng", size: "", year: "2025", image: "" },
    { name: "Chậu xi măng (mẫu 2)", category: "Chậu xi măng (tiết kiệm chi phí)", region: "Bình Dương", type: "Chậu xi măng", size: "", year: "2025", image: "" },
    { name: "Sân vườn biệt thự (mẫu)", category: "Sân vườn", region: "TP. Thủ Đức", type: "Thi công cảnh quan", size: "450 m²", year: "2025", image: "" },
    { name: "Sân vườn nhà phố (mẫu)", category: "Sân vườn", region: "Quận 7", type: "Thiết kế & thi công", size: "80 m²", year: "2025", image: "" },
    { name: "Villa nghỉ dưỡng (mẫu)", category: "Sân vườn", region: "Đà Lạt", type: "Thiết kế & thi công", size: "1.200 m²", year: "2025", image: "" }
  ]
};
(function () {
  window.XS = window.XS_DEFAULT;
})();
