# Yoom App

![License](https://img.shields.io/badge/license-MIT-green.svg)  
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)  
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)  

## 🚀 Giới thiệu
Mô tả ngắn gọn về dự án:
- **Mục tiêu**: Ứng dụng Video Conference nhằm cung cấp một nền tảng giao tiếp hiệu quả và linh hoạt, giúp kết nối người dùng từ mọi nơi trên thế giới thông qua video, âm thanh và tin nhắn
- **Tính năng chính**: 
  - Hỗ trợ đăng nhập qua social network: github, gmail, linkedin
  - Cho phép người dùng tham gia vào các cuộc họp, buổi học, hoặc cuộc trò chuyện video trực tiếp chỉ với một cú click
  - Đặt lịch họp trực tuyến
  - Record
  - ...

---

## 📂 Cấu trúc dự án
```plaintext
├── app/                  # Mã nguồn chính (sử dụng App Router Nextjs v14)
│   ├── (auth)/           # Các thành phần giao diện trang login, logout 
│   ├── (root)/           # Các thành phần giao diện còn lại
│   ├── global.css        # Styling dùng chung
│   └── layout.tsx        # Layout ngoài cùng của app
├── components/          
│   ├── ui/               # Các component của thư viện Radix UI 
│   └── ...               # Các component tự tạo
├── constants/            # Các hằng số được dùng lại nhiều lần trong dự án
├── hooks/                # Custom hook 
├── public/               # Tệp tĩnh (ảnh, favicon, ...)
│   ├── icons/            
│   └── images/          
├── providers/            
├── middleware.ts         # Kiểm tra protected route qua clerk server
├── .gitignore            # Quy tắc bỏ qua trong Git
├── package.json          # Thông tin và phụ thuộc của dự án
└── README.md             # Tệp hướng dẫn
```

## 🛠️ Cài đặt và chạy dự án
**1. Yêu cầu hệ thống**
- Node.js >= 20.x
- npm >= 10.x hoặc yarn >= 1.22.x
- Git (để clone repository)

**2. Cách cài đặt**
- Clone repository:
  ```bash
  git clone git@github.com:dinhdn218/Yoom.git
  cd Yoom
  ```
- Cài đặt các phụ thuộc:
  ```bash
  npm install
  # hoặc
  yarn install
  ```
- Tạo tệp ```.env.local``` và cập nhật thông tin cấu hình:
  ```plaintext
  NEXT_PUBLIC_BASE_URL=localhost:3000
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  Các cấu hình còn lại, xin mời xem tiếp bước 3...
  ```
- Chạy ứng dụng:
  ```bash
  npm start
  # hoặc
  yarn start
  ```
**3. Lấy thông tin file ```.env.local```**
- Đăng nhập vào [https://dashboard.clerk.com/](https://dashboard.clerk.com/). Sau đó chọn vào project Yoom (nếu đã tạo) hoặc tạo mới project.
- Chọn vào thư mục ```Configure``` => ```API Keys``` => ```Copy```
  ```example
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_dG9nZ*******sZS04OC5jbGVyay5hY2NvdW50c****
  CLERK_SECRET_KEY=sk_test_fZ6aIu6Mhs********XbsRniMyxKb****4q8MhQE
  ```
- Đăng nhập vào [https://getstream.io/](https://getstream.io/), sau đó copy ```key``` và ```secret key```
  ```example
  NEXT_PUBLIC_STREAM_API_KEY=mwajjz2*****
  STREAM_SECRET_KEY=6wvhrvw24yv27be4dsn******ssbctua9h644bhq3q3q757g5zb******
  ```


