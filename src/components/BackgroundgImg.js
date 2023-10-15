import HeaderBg from '../assets/images/header-bg.jpg';
import Menu from './Menu';

function BackgroundgImg() {
  return (
    <div className='flex justify-center mt-2'>
      <div className='ml-48 w-1/4'>
        <Menu />
      </div>
      <div className="relative mr-48">
        <img
          className="w-full brightness-75"
          src={HeaderBg}
          alt="header background"
        />

        <div
          className="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5"
        >
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-left">
            Lựa chọn tốt nhất <br/> 
            về hải sản tươi sống
          </h1>
          <p className="pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-left lg:text-base">
            Chúng tôi nỗ lực mỗi ngày để cung cấp
            đến tay khách hàng những sản phẩm ngon nhất, sạch nhất và dịch vụ khách hàng tốt nhất.
          </p>
          <button
            className="mx-auto mt-5 w-1/2 bg-amber-400 px-3 py-1 text-ưhite duration-100 hover:bg-yellow-300 bold lg:mx-0 lg:h-10 lg:w-2/12 lg:px-10 rounded-md"
          >
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  )
}

export default BackgroundgImg;