import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_left">
              <h2>Liên hệ với</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form id="request" className="main_form">
              <div className="row">
                <div className="col-md-12 ">
                  <input className="contactus" placeholder="Họ và tên" type="type" name=" Name" />
                </div>
                <div className="col-md-12">
                  <input className="contactus" placeholder="Số điện thoại" type="type" name="Phone Number" />
                </div>
                <div className="col-md-12">
                  <input className="contactus" placeholder="Email" type="type" name="Email" />
                </div>
                <div className="col-md-12">
                  <textarea className="textarea" placeholder="Lời nhắn" type="type" Message="Name"></textarea>
                </div>
                <div className="col-md-12">
                  <button className="send_btn">Gửi</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="map-responsive">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d44536.40827077221!2d105.82350108167616!3d21.026498865987698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1676014672259!5m2!1svi!2s" width="600" height="540" frameborder="0" style={{ border: 0, width: "100%" }} allowfullscreen=""></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
