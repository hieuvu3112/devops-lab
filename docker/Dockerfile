# Sử dụng image chứa NodeJS v14
FROM node:14

# Gắn label với thông tin tác giả
LABEL author="hieuvt3112"
LABEL email="hieu.vt3112@gmail.com"

# Thêm biến môi trường CLASS, APP_PORT, APP_ENV
ENV CLASS="SHB_DevOps" APP_PORT=8080 APP_ENV=dev

# Expose cổng dịch vụ 8080
EXPOSE 8080

# Sao chép file server.js vào thư mục /app
COPY server.js /app/

# Sử dụng CMD để chạy file server.js
CMD ["node", "/app/server.js"]
