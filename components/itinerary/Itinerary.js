import BoxCol from '../BoxCol';
import Item from './Item';
import Image from 'next/image';
import Icon from '../../public/icon.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import styles from '../../styles/Itinerary.module.css';

import { Pagination } from "swiper";

export default function Itinerary({
  children
}) {

  var menu = ['Itinerary', 'Menu', 'Rules'];

  var events = [
    { time: '12:30 p.m', header: 'Doors Open', paragraph: '' },
    { time: '1:00 p.m', header: 'Ceremony', paragraph: '' },
    { time: '1:30 p.m', header: 'Happy Hour', paragraph: 'Reception' },
    { time: '3:00 p.m', header: 'Lunch', paragraph: 'Reception' },
    { time: '3:30 p.m', header: 'Toasts', paragraph: 'Reception' },
    { time: '4:00 p.m', header: 'Dancing', paragraph: 'Reception' }
  ];

  var food = [
    { time: 'Lunch', header: 'All you can eat tacos', paragraph: '' },
    { time: 'Dessert', header: 'Cupcakes :3', paragraph: '' }
  ];

  var rules = [
    { time: 'Bar', header: '1:30-2:30', paragraph: 'Limited Happy Hour' },
    { time: 'Dress Code', header: 'Semi-Formal', paragraph: 'Or whatever you want' }
  ];

  const pagination = {
    "clickable": true,
    "renderBullet": function (index, className) {

      return '<span  class=\"' + className + '\">' + (menu[index]) + '</span>';

    }
  };

  return (
    <BoxCol
      id='itinerary'
    >
      {children}
      <p
        className={styles.header}
      >
        Itinerary
      </p>
      <Swiper
        pagination={pagination}
        loop={true}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          {
            events.map((e, i) =>
              <Item
                key={i}
                time={e.time}
                header={e.header}
                paragraph={e.paragraph}
                index={i}
              />
            )}
        </SwiperSlide>
        <SwiperSlide>
          {
            food.map((e, i) =>
              <Item
                key={i}
                time={e.time}
                header={e.header}
                paragraph={e.paragraph}
                index={i}
              />
            )}
          <div
            style={{
              height: '100%',
              margin: 'auto',
              backgroundColor: 'transparent',
              borderRadius: '8px'

            }}
          >
            <Image
              src={Icon}
              alt='Icon'
              width={400}
              height={400}
            />


          </div>
        </SwiperSlide>
        <SwiperSlide>
          {
            rules.map((e, i) =>
              <Item
                key={i}
                time={e.time}
                header={e.header}
                paragraph={e.paragraph}
                index={i}
              />
            )}
          <div
            style={{
              height: '100%',
              margin: 'auto',
              backgroundColor: 'transparent',
              borderRadius: '8px'

            }}
          >
            <Image
              src={Icon}
              alt='Icon'
              width={400}
              height={400}
            />


          </div>
        </SwiperSlide>
      </Swiper>
    </BoxCol>
  );
}
