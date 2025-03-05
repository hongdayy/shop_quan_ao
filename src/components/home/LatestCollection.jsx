import React, { useContext, useRef } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../layout/Title";
import ProductItem from "../layout/ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const scrollContainerRef = useRef(null);

  // Lấy danh sách 10 sản phẩm mới nhất
  const latestProducts = products.slice(0, 5);

  return (
    <div className="my-10 relative">
      <div className="text-center py-8 text-3xl">
        <Title text1="BỘ SƯU TẬP" text2="MỚI NHẤT" />
        <p className="text-gray-600 w-3/4 mx-auto text-sm sm:text-sm md:text-base">
          Khám phá bộ sưu tập thời trang mới nhất với thiết kế độc đáo, phong cách hiện đại và chất liệu cao cấp, mang đến vẻ đẹp tự tin và đẳng cấp cho bạn.
        </p>
      </div>

      {/* Thanh cuộn sản phẩm */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4"
        >
          {latestProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={`${(item.price * 1000).toLocaleString("vi-VN")} VND`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
