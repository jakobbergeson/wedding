import BoxCol from '../BoxCol';
import Item from './Item';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import styles from '../../styles/Itinerary.module.css';

import { Pagination } from "swiper";

export default function Itinerary() {

  var menu = ['Itinerary', 'Menu', 'Bar Rules'];

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
      <p
        className={styles.header}
      >
        Itinerary
      </p>
      <Swiper
        pagination={pagination}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Item
            time={'10 a.m'}
            header={'Item Title'}
            paragraph={'Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.'}
          />
          <Item
            time={'10 a.m'}
            header={'Item Title'}
            paragraph={'Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.'}
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </BoxCol>
  );
}
