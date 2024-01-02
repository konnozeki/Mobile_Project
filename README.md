
# Ứng Dụng Mạng Xã Hội Cho Họa Sĩ và Nhiếp Ảnh Gia
## Mô tả
Ứng dụng mạng xã hội dành cho họa sĩ và nhiếp ảnh gia giúp họ chia sẻ tác phẩm, kết nối với cộng đồng nghệ sĩ và tận hưởng những trải nghiệm sáng tạo.

## Yêu Cầu
### Frontend
Sử dụng React Native Expo để phát triển ứng dụng di động. https://expo.dev/
### Backend
Sử dụng Python Django làm backend framework. https://www.djangoproject.com/
### Lưu trữ
Ứng dụng sử dụng Firebase để lưu trữ. 


## Thiết lập 
- Tại file api.js, sửa giá trị HOST dựa theo địa chỉ IP của bạn. Chẳng hạn, nếu địa chỉ IP của bạn là 192.168.0.105 thì HOST = 'http://192.168.0.105:8000/'
- Chạy chương trình trên Expo: `npx expo start`
- Chạy chương trình trên Django: `python manage.py runserver 192.168.0.105:8000` (Thay 192.168.0.105 bằng địa chỉ IP của bạn)


## Tính năng
- Đăng bài và xóa bài viết.
- Tìm kiếm bài viết dựa trên hashtag
- Xem thông báo về tương tác người dùng và bài viết của bạn
- Xem bài viết mình đã thích và đã đăng
- Đề xuất các bài viết dựa theo cá nhân người dùng đó
- Hiển thị danh sách các bài viết hàng đầu.
