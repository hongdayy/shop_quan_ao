import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { AiOutlineHeart } from 'react-icons/ai';

const ProductItem = ({ id, image, name, price }) => {
  const { currency, wishlist, toggleWishlist } = useContext(ShopContext);

  // Kiểm tra sản phẩm đã có trong wishlist hay chưa
  const isFavorite = wishlist.includes(id);

  return (
    <div>
      <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden relative">
          <img
            src={image[0]}
            alt={name}
            className="hover:scale-110 transition-all ease-in-out"
          />
          {/* Nút trái tim thêm vào wishlist */}
          <button
            className="absolute top-2 right-2 bg-white p-1 rounded-full"
            onClick={(e) => {
              e.preventDefault(); // Ngăn mở trang sản phẩm khi ấn vào tim
              toggleWishlist(id); // Thêm hoặc xóa sản phẩm khỏi wishlist
            }}
          >
            {/* Nếu sản phẩm đã có trong wishlist thì hiện icon trái tim đỏ */}
            <AiOutlineHeart
              className={`text-xl ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
            />
          </button>
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">{price} {currency}</p>
      </Link>
    </div>
  );
};

export default ProductItem;
