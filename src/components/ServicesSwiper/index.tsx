import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import { UseCategoryList } from "../../hooks/useCategoryList"

import "swiper/css"
import "swiper/css/navigation"
import "./styles.scss"

function ServicesSwiper() {
  const { listCategory } = UseCategoryList()
  console.log(listCategory[0])
  return (
    <Swiper
      loop={true}
      slidesPerView={3}
      spaceBetween={10}
      grabCursor={true}
      navigation={true}
      modules={[Navigation]}
      className="Swiper"
    >
      {listCategory[0]
        ? listCategory.map((category) => {
            return (
              <SwiperSlide
                className={
                  listCategory.indexOf(category) % 2 != 0 ? "color-two" : ""
                }
                key={category.id}
              >
                <span className="title">{category.name}:</span>
                <br></br>
                {category.details}
              </SwiperSlide>
            )
          })
        : ""}
    </Swiper>
  )
}
export default ServicesSwiper
