import React from "react";

const PageNotFound = () => {
    return (
        <div class="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
            <div class="rounded-lg bg-white p-8 text-center shadow-xl">
                <h1 class="mb-4 text-4xl font-bold">404</h1>
                <p class="text-gray-600">Trang này hiện không được tìm thấy.</p>
                <a href="/" class="mt-4 inline-block rounded bg-cyan-500 px-4 py-2 font-semibold text-white hover:bg-cyan-600"> Quay về trang chủ </a>
            </div>
        </div>
    )
};

export default PageNotFound;