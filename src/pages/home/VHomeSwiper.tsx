import ProfileCard from 'pages/profileList/ProfileCard';

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
  Keyboard,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export interface PageProps {
  hasNext: boolean;
}

export interface ShortFormProps {
  map(
    arg0: (
      shortForm: any,
      index: any,
    ) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode;
  petId: number;
  name: string;
  age: string;
  shelterId: number;
  shelterName: string;
  profileShortFormUrl: string;
  adoptionStatus: string;
}

export interface HomeProps {
  pageProps: PageProps;
  shortFormProps: ShortFormProps;
}

const VHomeSwiper = (homeProps: HomeProps) => {
  return (
    <div className="flex flex-col sm:mx-40 lg:mx-64 my-14">
      <h2 className="flex w-60 font-bold text-xl sm:text-2xl items-center whitespace-nowrap"></h2>
      <div className="flex flex-col h-screen w-auto items-center">
        <Swiper
          // install Swiper modules
          className="flex w-full items-center justify-center"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            Mousewheel,
            Keyboard,
          ]}
          spaceBetween={10}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          mousewheel={{
            invert: false,
            thresholdTime: 1,
            sensitivity: 100,
          }}
          longSwipes={false}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('스와이프')}
          autoHeight={true}
          direction={'vertical'}
          keyboard={{ enabled: true, pageUpDown: true, onlyInViewport: true }}
        >
          {homeProps.shortFormProps.map((shortForm, index) => {
            return (
              <SwiperSlide className="flex slide-item items-center" key={index}>
                <div className="flex h-5/6 items-center bg-black justify-center justify-items-center">
                  <video
                    muted
                    autoPlay
                    loop
                    src={shortForm.profileShortFormUrl}
                    className=" w-full h-full"
                  />
                </div>
                <div className="flex flex-row w-5/6 h-20 px-6 pe-5 py-2 justify-between">
                  <div className="text-lg text-neutral-950">
                    {shortForm.name}
                  </div>
                  <div className="flex flex-col h-10 w-10 justify-end">
                    <text className=" text-blue-700 font-semibold whitespace-nowrap">
                      {shortForm.adoptionStatus}{' '}
                    </text>
                    <text className="text-gray-500 whitespace-nowrap">
                      {' '}
                      {shortForm.shelterName}{' '}
                    </text>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* {homeProps.shortFormProps.map((shortForm, index) => (
        <div key={index} className="flex">
          <a
            href={`/pet/${shortForm.petId}`}
            className="flex flex-col items-center justify-center gap-6"
          >
            <video muted autoPlay loop>
              <source src={shortForm.profileShortFormUrl} type="video/mp4" />
            </video>
            <div className="flex flex-row w-full h-20 justify-between">
              <div className="text-lg text-neutral-950">{shortForm.name}</div>
              <div className="flex flex-col h-10 w-10 items-center">
                <text className=" text-blue-700 font-semibold whitespace-nowrap">
                  {shortForm.adoptionStatus}{' '}
                </text>
                <text className="text-gray-500 whitespace-nowrap">
                  {' '}
                  {shortForm.shelterName}{' '}
                </text>
              </div>
            </div>
          </a>
        </div>
      ))} */}
      </div>
    </div>
  );
};

export default VHomeSwiper;
