# Hướng Dẫn Deploy Backend (Node.js) — Đính Kèm PDF Thật

Dùng **Render.com** (free tier) để host server, không cần VPS.

---

## BƯỚC 1: Chuẩn bị Gmail App Password

1. Vào **myaccount.google.com/security**
2. Bật **2-Step Verification** (nếu chưa có)
3. Vào **myaccount.google.com/apppasswords**
4. Chọn app "Mail" → "Other" → đặt tên "DOBN Server"
5. Copy mã 16 ký tự (vd: `abcdefghijklmnop`) — **dán liền, không dấu cách**

⚠️ Dùng **Gmail cá nhân** (@gmail.com), không dùng email trường học (dễ bị chặn OAuth).

---

## BƯỚC 2: Tạo file `package.json`

Trong thư mục `email-server/`, tạo file `package.json`:

```json
{
  "name": "dobn-email-server",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "nodemailer": "^6.9.7",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  }
}
```

---

## BƯỚC 3: Đưa code lên GitHub

1. Tạo repo mới trên **github.com** (public hoặc private đều được), ví dụ tên `dobn-email-server`
2. Upload 2 file: `server.js` và `package.json` vào repo
   - Cách nhanh: vào repo → **Add file → Upload files** → kéo thả 2 file vào → Commit
3. **KHÔNG** upload file `.env` (chứa mật khẩu) lên GitHub

---

## BƯỚC 4: Deploy lên Render

1. Vào **render.com** → **Sign Up** (dùng GitHub account để login nhanh)

2. Sau khi vào Dashboard → bấm **New** → chọn **Web Service**

3. Chọn **"Build and deploy from a Git repository"** → bấm **Connect** với repo `dobn-email-server` vừa tạo

4. Điền cấu hình:
   | Field | Giá trị |
   |---|---|
   | **Name** | `dobn-email-server` (tuỳ ý) |
   | **Region** | Singapore (gần VN nhất) |
   | **Branch** | `main` |
   | **Runtime** | Node |
   | **Build Command** | `npm install` |
   | **Start Command** | `node server.js` |
   | **Instance Type** | **Free** |

5. Kéo xuống mục **Environment Variables** → bấm **Add Environment Variable**, thêm từng dòng:

   | Key | Value |
   |---|---|
   | `SMTP_HOST` | `smtp.gmail.com` |
   | `SMTP_PORT` | `587` |
   | `SMTP_SECURE` | `false` |
   | `SMTP_USER` | email Gmail của bạn |
   | `SMTP_PASS` | App Password 16 ký tự (bước 1) |
   | `INTERNAL_CC` | (để trống hoặc email nội bộ) |
   | `ALLOWED_ORIGIN` | `*` (tạm thời, sau đổi thành domain thật) |

6. Bấm **Create Web Service**

7. Render sẽ tự build + deploy (mất ~2-3 phút). Theo dõi log, khi thấy:
   ```
   🚀 DOBN Email Server đang chạy tại http://localhost:10000
   ```
   → là thành công.

8. Copy **URL** ở đầu trang (dạng `https://dobn-email-server.onrender.com`)

---

## BƯỚC 5: Test server

Mở URL: `https://dobn-email-server.onrender.com/health`

Nếu thấy `{"status":"ok"}` → server đã chạy.

---

## BƯỚC 6: Cập nhật Frontend

Trong file `sendPdfEmail.js` (bản backend), sửa dòng:

```javascript
const EMAIL_SERVER_URL = 'https://dobn-email-server.onrender.com/send-report';
```

Gắn vào `customer.html`:
```html
<script src="sendPdfEmail.js"></script>
```

Xóa hàm `downloadPDFFile()` cũ trong file HTML.

---

## ⚠️ Lưu ý về Free Tier của Render

- Server **free sẽ "ngủ"** sau 15 phút không có request → request đầu tiên sau đó sẽ chậm (~30-50s) để "thức dậy"
- Nếu cần server luôn online, phải trả phí (~$7/tháng) hoặc dùng dịch vụ "ping" miễn phí (vd: cron-job.org gọi `/health` mỗi 10 phút để giữ server thức)

---

## Test thử toàn bộ flow

1. Mở `customer.html`
2. Điền form với email thật của bạn
3. Bấm "Tạo Báo Cáo" → "Tải Xuống Báo Cáo PDF"
4. Đợi (~30s nếu server đang ngủ) → check Gmail
5. Email sẽ có **file PDF đính kèm thật** (không phải link)

---

## Lỗi thường gặp

| Lỗi | Cách fix |
|---|---|
| `EAUTH` khi gửi mail | Sai App Password — tạo lại, dán không dấu cách |
| CORS error | Kiểm tra `ALLOWED_ORIGIN` trên Render khớp domain frontend |
| Server sleep, timeout | Đợi 30-50s lần đầu, hoặc dùng cron-job.org để giữ thức |
| Build failed | Kiểm tra `package.json` đúng format, đã push lên GitHub |
