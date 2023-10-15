import TomHumAlaska from '../assets/images/tom-hum-alaska.png';
import SoHuyetCo from '../assets/images/so_huyet_co.jpg';
import TomTheTuoi from '../assets/images/tom_the_tuoi.jpg';
import HauSuaTachSan from '../assets/images/hau_sua_tach_san.png';
import TomCangXanh from '../assets/images/tom_cang_xanh.jpg';
import OcHuong from '../assets/images/oc_huong.jpg';
import CuaCaMau from '../assets/images/cua_ca_mau.png';
import ChanCuaTuyet from '../assets/images/chan_cua_tuyet.png';

import TextLineCenter from './TextLineCenter';
import Cart from './Cart';

function Product({cart}) {
    return (
        <div>
            <section
                class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4"
            >
                {cart}
                {/* <!-- 1 --> */}
                <Cart srcImg={TomHumAlaska} altImg="TomHumAlaska image" ProductName="Tôm Hùm Alaska Sống Lớn" Price="1,290,000đ" Unit="1kg" Num="12"/>

                {/* <!-- 2 --> */}
                <Cart srcImg={SoHuyetCo} altImg="SoHuyetCo image" ProductName="Sò Huyết Cồ 20-30 Con" Price="180,000đ" Unit="500g" Num="9"/>

                {/* <!-- 3 --> */}
                <Cart srcImg={TomTheTuoi} altImg="TomTheTuoi image" ProductName="Tôm Thẻ Tươi" Price="49,000đ" Unit="250g" Num="8"/>

                {/* <!-- 4 --> */}
                <Cart srcImg={HauSuaTachSan} altImg="HauSuaTachSan image" ProductName="Hàu Sữa Tách Sẵn" Price="90,000đ" Unit="500g" Num="12"/>

                {/* <!-- 5 --> */}
                <Cart srcImg={TomCangXanh} altImg="TomCangXanh image" ProductName="Tôm Càng Xanh" Price="329,000đ" Unit="1kg" Num="8"/>

                {/* <!-- 6 --> */}
                <Cart srcImg={OcHuong} altImg="OcHuong image" ProductName="Ốc Hương Sống" Price="180,000đ" Unit="500g" Num="14"/>

                {/* <!-- 7 --> */}
                <Cart srcImg={CuaCaMau} altImg="CuaCaMau image" ProductName="Cua Cà Mau Sống" Price="186,500đ" Unit="350g" Num="28"/>

                {/* <!-- 8 --> */}

                <Cart srcImg={ChanCuaTuyet} altImg="ChanCuaTuyet image" ProductName="Chân Cua Tuyết" Price="375,000đ" Unit="500g" Num="27"/>

                
            </section>

            <div className='grid justify-items-center mb-12 text-red-600 text-lg hover:text-red-400'>
                <a href='#' className='text-red-600'>
                    <TextLineCenter text="Xem thêm >>"/>
                </a>
            </div>
        </div>
    )
}

export default Product;