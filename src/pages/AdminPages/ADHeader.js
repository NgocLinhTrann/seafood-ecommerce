import Avatar from "../../assets/images/avatar-photo.jpg";

function ADHeader() {
    return (
        <div>
            <div className="bg-stone-100 py-2">
                <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
                <form className="hidden h-9 w-2/5 items-center border md:flex bg-white rounded-lg">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="mx-3 h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>

                    <input
                        className="hidden w-11/12 outline-none md:block"
                        type="search"
                        placeholder="Tìm kiếm..."
                    />

                    <button
                        className="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300 rounded-r-lg text-white"
                    >
                        Tìm
                    </button>
                </form>

                <div class="flex items-center">
                     <div class="relative">
                         <a class="flex items-center" href="#">
                             <span class="hidden text-right lg:block">
                                 <span class="block text-sm font-medium text-black dark:text-white">Quản trị viên</span>
                             </span>

                             <span class="h-12 w-12 rounded-full ml-2">
                                 <img src={Avatar} alt="User" />
                             </span>
                         </a>
                     </div>
                 </div>
                </header>
            </div>
        </div>
    )
}
export default ADHeader;