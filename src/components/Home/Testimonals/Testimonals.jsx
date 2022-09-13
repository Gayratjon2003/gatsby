import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonals.scss";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { testimonals } from "./dataTestimonal";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Fade } from "react-reveal";
function Testimonals() {
  return (
    <div className="testimonals container">
      <Fade bottom duration={2000}>
        <h2 className="testimonals-title">Testimonals</h2>
      </Fade>
      <Fade bottom duration={2000}>
        <p className="testimonals-text">
          Some feedbacks from people who I've worked with
        </p>
      </Fade>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"coverflow"}
        autoplay={{
          delay: 10000000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={true}
      >
        {testimonals.map((data, ind) => {
          return (
            <SwiperSlide key={ind}>
              <Fade bottom duration={2000}>
                <img src={data.img} alt="profile" />
                <p className="text">{data.desc}</p>
                <h5 className="name">{data.name}</h5>
                <h6 className="role">{data.title}</h6>
              </Fade>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>
  );
}

export default Testimonals;
