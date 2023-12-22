import { AiFillStar } from "react-icons/ai";

function Cart({ srcImg, altImg, ProductName, Price, Unit, OldPrice, Num }) {
    return (
        <div>
            <div class="flex flex-col">
                <div class="relative flex">
                    <img
                        class=""
                        src={srcImg}
                        alt={altImg}
                    />
                </div>

                <div>
                    <p class="mt-2 font-normal my-0.5">{ProductName}</p>
                    <p class="font-medium text-red-600 my-0.5">
                        {Price}
                        <span class="font-normal text-gray-500 text-sm">/{Unit}</span>
                    </p>

                    <p class="font-medium text-violet-900">
                        <span class="text-sm text-gray-500 line-through">{OldPrice}</span>
                    </p>

                    <div class="flex items-center my-0.5">
                        <AiFillStar className="text-amber-300" />
                        <AiFillStar className="text-amber-300" />
                        <AiFillStar className="text-amber-300" />
                        <AiFillStar className="text-amber-300" />
                        <AiFillStar className="text-slate-200" />
                        <p class="text-sm text-gray-400">({Num})</p>
                    </div>

                    <div>
                        <button class="my-5 h-10 w-full bg-amber-500 text-white rounded">
                            THÊM VÀO GIỎ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;