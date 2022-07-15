# MiraiV2
<p>Discontinued - i will continue this project when i want to</p>
<p>Cập nhật module fca horizon để có thể sử dụng bot</p>

```sh
npm install fca-horizon-remake@latest
```
## Original project by CatalizCS and SpermLord
Project gốc được làm bởi CatalizCS và SpermLord
<!-- TABLES OF CONTENT -->
<details open="open">
    <summary>Table of Contents</summary>
    <ol>
        <li><a href="#introduce">Giới thiệu</a></li>
        <li><a href="#installation">Cài đặt</a></li>
    </ol>
</details>

<!-- ABOUT -->
## introduce
<p><strong>Q: Mirai Bot là gì?</strong></p>
<br />
<p>
A: Nếu các bạn tìm được đến cái repo này thì các bạn cũng biết <strong>Mirai Project</strong> là gì rồi.
</p>
<p>
Nhưng nếu các bạn chưa biết thì <strong>Mirai Project</strong> là một dự án được làm bởi <strong>CatalizCS</strong> và <strong>SpermLord</strong> nhằm tạo ra một hệ thống bot cho <strong>Messenger</strong> dễ sử dụng.
</p>

<!-- INSTALLATION -->
## installation

Sau đây là các bước cơ bản để có thể cài đặt và vận hành.

### Yêu cầu

- Dung lượng của máy phải trống tầm 500mb - 1gb
- Cần một số phần mềm chỉnh sửa file, khuyến khích sử dụng [notepad++](https://notepad-plus-plus.org/downloads/)
- Biết sơ qua về <strong>JavaScript</strong>, <strong>nodeJS</strong>
- Một tài khoản Facebook. <strong>(nên sử dụng acc clone để tránh khoá acc)</strong>
- Đối với:
    - Windows: Cần cài đặt windows-build-tools.
    - Linux: Cần cài đặt python3 hoặc python2.
    - Android: Sử dụng termux để vận hành bot.
### Cài đặt
#### Windows
1. Tải và cài đặt [Nodejs](https://nodejs.org/en/), [git](https://git-scm.com/)
2. Cài đặt windows-build-tools:\n
    I. Mở powershell với quyền adminstrator thông qua startMenu
    II. Nhập 
     ```sh
     npm install windows-build-tools
     ```
3. Clone source code của bot
    I. chuột phải ở folder cần cài đặt source code nhấn vào git bash
    II. nhập
    ```sh
    git clone https://github.com/TanCatTUwU/MiraiV2.git
    ```
4. Cài đặt các package cần thiết
    1. Mở cmd/terminal ở thư mục bot, LƯU Ý thư mục đó phải có file package.json
    2. Nhập
    ```sh
    npm i
    ```
    3. Sau đó nhập lệnh sau để kiểm tra và update package
    ```sh
    npm audit fix
    ```
    4. Tải chalk
    ```sh
    npm i chalk@4.1.2
    ```
5. Sử dụng appsate hoặc config.json để log in
    1. Appstate
    - Bạn có thể xem cách lấy app state ở [đây](https://github.com/c3cbot/c3c-fbstate)
    - Chuyển file bạn vừa tải về <strong>(fbstate.json)</strong> vào thư mục bot và đổi tên nó thành <strong>appstate.json</strong>
    - Sau đó nhập mật khẩu vào file login.js
    2. Sử dụng config.json để đăng nhập <strong>(không khuyến khích vì khả năng khoá acc là cao)</strong>
    - Nhập email(hoặc số điện thoại) cần để đăng nhập vào config.json
    ```sh
        "EMAIL": "nhap email/sdt o day",
    ```
    - Nhập mật khẩu vào config.json
    ```sh
        "PASSWORD": "nhap pass o day",
    ```
    - Nhập mã OTP <strong>(chỉ cần thiết nếu bạn bật 2fa)</strong>
    ```sh
        "OTPKEY": "nhap ma otp o day",
    ```
    - Lưu file và đóng
6. Chạy bot để download file
    - Mở powershell tại thư mục bot (shift + chuột phải)
    ```sh
    npm run start
    ```
    - Đợi source code tải xong tất cả những opponent cần thiết thì đóng cửa sổ powershell
7. Chạy bot và tận hưởng
```sh
npm run start
```
#### Hệ điều hành dùng linux (Android, Ubuntu,...)
1. Các hệ điều hành Linux khác
   1. Cài đặt node và git bằng cách nhập vào terminal
    ```sh
    sudo apt-get install curl
    curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install nodejs git sqlite3 -y
    sudo npm install -g npm
    ```

   2. Clone source code của bot bằng cách nhập vào terminal
    ```sh
    git clone https://github.com/TanCatTUwU/MiraiV2.git
    ```

   3. Cài đặt các package cần thiết
    1. Mở cmd/terminal ở thư mục bot, LƯU Ý thư mục đó phải có file package.json
    2. Nhập
    ```sh
    npm install
    ``` 
   5. Sử dụng appsate hoặc config.json để log in
    1. Appstate
    - Bạn có thể xem cách lấy app state ở [đây](https://github.com/c3cbot/c3c-fbstate)
    - Chuyển file bạn vừa tải về <strong>(fbstate.json)</strong> vào thư mục bot và đổi tên nó thành <strong>appstate.json</strong>
    - Sau đó nhập mật khẩu vào file login.js
    2. Sử dụng config.json để đăng nhập <strong>(không khuyến khích vì khả năng khoá acc là cao)</strong>
    - Nhập email(hoặc số điện thoại) cần để đăng nhập vào config.json
    ```sh
        "EMAIL": "nhap email/sdt o day",
    ```
    - Nhập mật khẩu vào config.json
    ```sh
        "PASSWORD": "nhap pass o day",
    ```
    - Nhập mã OTP <strong>(chỉ cần thiết nếu bạn bật 2fa)</strong>
    ```sh
        "OTPKEY": "nhap ma otp o day",
    ```
    - Lưu file và đóng
    6. Chạy bot để download file
    - Mở terminal tại thư mục bot (shift + chuột phải)
    ```sh
    npm run start
    ```
    - Đợi source code tải xong tất cả những opponent cần thiết thì đóng cửa sổ terminal
    7. Tải chalk
    ```sh
    npm i chalk@4.1.2
    ```
    8. Chạy bot và tận hưởng
    ```sh
    npm run start
    ```
2. Android
    1. Sử dụng google play và tải termux

    2. Mở termux và nhập
    ```sh
    termux-setup-storage && apt update && apt upgrade && pkg install curl -y && bash <(curl -s
    https://raw.githubusercontent.com/TanCatTUwU/for-raw-source/main/install.sh)
    ```

    3. Đợi mọi package, lib cài đặt thành công là có thể sử dụng

    4. Lấy appstate
    - Bạn có thể sử dụng fbstate của c3c bot, nhưng cần đổi tên lại thành appstate.json hoặc đổi lại tên trong config.json
    - Nhập
    ```sh
    node login
    ```
    - Nhập mã xác thực hai lớp
    - Nếu trên cmd/terminal hiện ```Đã ghi xong appstate``` tức là appstate của bạn đã được lưu lại, còn nếu ra dòng có chữ error thì appstate của bạn chưa được lưu lại, bạn cần phải kiểm tra lại thông tin tài khoản, và kiểm tra xem tài khoản của bạn có phải bị checkpoint hay không.
    - Tải chalk
    ```sh
    npm i chalk@4.1.2
    ```
    5. về cách sử dụng, edit, vận hành
      - Để bật được file manager bạn chỉ cần nhập vào termux
      ```sh
      manager
      ```
      - Để vận hành bot, bạn chỉ cần nhập vào termux
      ```sh
      cd ./miraiv2 && npm start
      ```
