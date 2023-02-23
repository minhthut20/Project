import React from 'react'

export default function About() {
  return (
    <div className="about" id="about_content">
      <div className="container_width">
        <div className="row d_flex">
          <div className="col-md-7">
            <div className="titlepage text_align_left">
              <h2>Về chúng tôi </h2>
              <p>
                Đồng hành cùng độc giả.<br/>
                Chúng tôi luôn cung cấp thông tin một cách nhanh chóng và chính xác nhất.
              </p>
              <a className="read_more" href="#">
                Xem thêm
              </a>
            </div>
          </div>
          <div className="col-md-5">
            <div className="about_img text_align_center">
              <figure>
                <img src="images/logo_quacau.png" alt="#" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
