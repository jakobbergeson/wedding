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

  var menu = ['Itinerary', 'Menu', 'Bar Rules'];

  var events = [
    { time: '12:30 p.m', header: 'Doors Open', paragraph: '' },
    { time: '1:00 p.m', header: 'Ceremony', paragraph: '' },
    { time: '1:30 p.m', header: 'Happy Hour', paragraph: 'Reception' },
    { time: '3:00 p.m', header: 'Lunch', paragraph: 'Reception' },
    { time: '3:30 p.m', header: 'Toasts', paragraph: 'Reception' },
    { time: '4:00 p.m', header: 'Dancing', paragraph: 'Reception' }
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
          <div
            style={{
              height: '100%',
              margin: 'auto',
              backgroundColor: 'rgba(172, 129, 1, 0.04)',
              borderRadius: '8px'

            }}
          >
            <p
              style={{
                fontSize: 'var(--step-4)',
                marginBottom: '0px',
                color: 'var(--link)'
              }}
            >
              To Be Determined
            </p>
            <Image
              src={Icon}
              alt='Icon'
              width={450}
              height={450}
            />

          </div>
        </SwiperSlide>
        <SwiperSlide><div
          style={{
            height: '100%',
            margin: 'auto',
            backgroundColor: 'rgba(172, 129, 1, 0.04)',
            borderRadius: '8px'
          }}
        >
          <p
            style={{
              fontSize: 'var(--step-4)',
              marginBottom: '0px',
              color: 'var(--link)'
            }}
          >
            To Be Determined
          </p>
          <Image
            src={Icon}
            alt='Icon'
            width={450}
            height={450}
          />

        </div>
        </SwiperSlide>
      </Swiper>
    </BoxCol>
  );
}
