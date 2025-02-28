import React, { useState } from "react";
import { feedbackData } from "../../assets/assets";
import Title from "../layout/Title";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BsStarFill, BsStar } from "react-icons/bs";

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3; // Hiển thị 3 feedback cùng lúc
  const totalSlides = feedbackData.length;

  // Hàm chuyển slide tiếp theo
  const nextSlide = () => {
    if (currentIndex + slidesToShow < totalSlides) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Hàm chuyển slide trước đó
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-10 relative">
      <div className="text-center py-8 text-3xl">
        <Title text1="ĐÁNH GIÁ" text2="CỦA KHÁCH HÀNG" />
        <p className="text-gray-600 w-3/4 mx-auto text-sm sm:text-sm md:text-base">
          Lắng nghe những chia sẻ chân thực từ khách hàng về trải nghiệm mua sắm trên trang web của chúng tôi. Chúng tôi luôn nỗ lực mang đến sản phẩm chất lượng và dịch vụ tốt nhất
        </p>
      </div>
      <div className="container mx-auto px-4">
        {/* Khung chứa feedback */}
        <div className="overflow-hidden relative">
          <div
            className="flex gap-4 transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} // Dịch chuyển theo % chiều rộng
          >
            {feedbackData.map((feedback) => (
              <div key={feedback.id} className="w-1/3 min-w-[33.33%] px-4">
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-md min-h-[300px] h-auto flex flex-col justify-between">
                  {/* Thông tin người đánh giá */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                      <img src={feedback.imgSource} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-base">{feedback.name}</p>
                      <span className="text-sm text-gray-500">{feedback.designation}</span>
                    </div>
                  </div>
                  {/* Đánh giá sao */}
                  <ul className="flex text-yellow-400 mt-3">
                    {[...Array(feedback.rating)].map((_, index) => (
                      <li key={index}><BsStarFill className="w-5 h-5" /></li>
                    ))}
                    {[...Array(5 - feedback.rating)].map((_, index) => (
                      <li key={index + feedback.rating}><BsStar className="w-5 h-5" /></li>
                    ))}
                  </ul>
                  {/* Nội dung feedback */}
                  <p className="text-gray-700 mt-3 text-sm">{feedback.feedbackText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Nút điều hướng */}
        <button
          className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300 shadow-lg"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <HiChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300 shadow-lg"
          onClick={nextSlide}
          disabled={currentIndex + slidesToShow >= totalSlides}
        >
          <HiChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Feedback;
