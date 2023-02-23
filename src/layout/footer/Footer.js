import React from 'react'
import { map } from "../../assets/images/picture"

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>Tài nguyên</h3>
                <ul className="menu_footer">
                  <li>
                    <a href="index.html">Trang chủ</a>
                  </li>
                  <li></li>
                  <li>
                    <a href="#)">Những gì chúng tôi làm </a>
                  </li>
                  <li></li>
                  <li>
                    {" "}
                    <a href="#)">Media</a>
                  </li>
                  <li></li>
                  <li>
                    {" "}
                    <a href="#)">Tư vấn</a>
                  </li>
                  <li></li>
                  <li>
                    <a href="#)">Bảo vệ</a>
                  </li>
                  <li></li>
                  <li>
                    <a href="#)">Chăm sóc</a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>Về chúng tôi</h3>
                <p>
                  Nhiều gói xuất bản trên máy tính để bàn và trình chỉnh sửa trang web hiện sử dụng
                  Lorem Ipsum làm văn bản mô hình mặc định của họ và tìm kiếm 'lorem
                  ipsum' sẽ phát hiện ra nhiều trang web vẫn còn sơ khai.
                  Nhiều
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="hedingh3  text_align_left">
                <h3>Liên hệ chúng tôi</h3>
                <ul className="top_infomation">
                  <li>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    Biến điều này thành sự thật đầu tiên
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true" />
                    Call : +01 1234567890
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <a href="#)">Email : demo@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>Quốc gia</h3>
                <div className="map">
                  <img src={map} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <p>
                  Design By MinhThu @ 2023{" "}
                  <a href="https://html.design/"> Free html Templates</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
