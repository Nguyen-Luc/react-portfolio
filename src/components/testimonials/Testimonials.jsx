import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  const avtr_data = [
    {
      avatar: AVTR1,
      name: 'Tina Snow',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat nisi excepturi iste assumenda, nam consequatur adipisci animi, ab iusto distinctio beatae? Rerum, quis. Deleniti tempore delectus saepe ad a!',
    },
    {
      avatar: AVTR2,
      name: 'Shatta Wale',
      review:
        'Lorem ipsum dolor sit amet consectetur,lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur,lorem ipsum dolor sit amet consectetur',
    },
    {
      avatar: AVTR3,
      name: 'Kwame Despite',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, iusto voluptate, voluptatem enim expedita at deserunt distinctio ex atque magnam laudantium. Consectetur rerum, ad laboriosam voluptas error quas nihil placeat',
    },
    {
      avatar: AVTR4,
      name: 'Nana Ama McBrown',
      review:
        'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat nisi excepturi iste assumenda, nam consequatur adipisci animi, ab iusto distinctio beatae? Rerum, quis. Deleniti tempore delectus saepe ad a!',
    },
  ]
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {avtr_data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
