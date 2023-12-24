import React, {
  useState,
  useContext,
  useEffect,
} from "react";
import axios from "axios";
import Layout from "../../components/Layout";

import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const AddDiscount = () => {
  const [userId, setUserId] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState("");
  let info;
  try {
    info = JSON.parse(window.localStorage.getItem("auth"));
    console.log(info.token);
  } catch (err) {
    console.log(err);
  }
  useEffect(() => {
    console.log(userId);
    console.log(code);
    console.log(price / 100);
    console.log(available);
  }, [userId, code, price, available]);
  const handleAdd = (e) => {
    const postApi = async () => {
      await axios({
        method: "post",
        url: "https://seafoodharbor.azurewebsites.net/api/admin/promocode",
        data: {
          code: code,
          user_id: userId,
          available: available,
          value: price / 100,
        },
        headers: {
          Authorization: `Bearer ${info.token}`,
        },
      }).then((res) => {
        console.log(res);
      });
    };
    postApi();
    e.preventDefault();
    toast.success("Tạo mã khuyến mãi thành công!");
    setAvailable("");
    setCode("");
    setUserId("");
    setPrice(0);
  };
  return (
    <Layout
      title="Thêm khuyến mãi"
      activePage="discount add"
    >
      <Toaster />
      <div className="w-2/4 ml-60">
        <form className="mt-2 w-full flex-grow mb-10 px-5">
          <div className="container border px-5 py-5 shadow-sm">
            <div className="flex justify-center">
              <div className="text-3xl font-bold">
                THÊM KHUYẾN MÃI
              </div>
            </div>

            <label className="label mt-3 font-medium">
              Mã khách hàng
            </label>
            <input
              className="input"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            ></input>
            <label className="label mt-3 font-medium">
              Mã Khuyến mãi
            </label>
            <input
              className="input"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            ></input>
            <div className="flex gap-10">
              <div className="field">
                <label className="label mt-3 font-medium ">
                  Giá trị khuyến mãi (%)
                </label>
                <input
                  type="number"
                  className="input"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </div>
              <div className="field">
                <label className="label mt-3 font-medium">
                  Số lượng mã
                </label>
                <input
                  type="text"
                  className="input"
                  value={available}
                  onChange={(e) =>
                    setAvailable(e.target.value)
                  }
                ></input>
              </div>
            </div>
            {/* <label>Hình ảnh sản phẩm</label>
          <label className="block">
            <input
              id="file_input"
              type="file"
              onChange={handleImageChange}
              className="mx-auto ml-5 flex w-full justify-center border-yellow-400 text-sm outline-none file:mr-4 file:bg-amber-400 file:py-2 file:px-4 file:text-sm file:font-semibold"
            />
          </label>
          {image && (
            <img
              src={imageUrl}
              alt="Selected Product"
              style={{ width: "200px", height: "200px" }}
            />
          )}
          <label className="label mt-3 font-medium">
            Trọng lượng
          </label>
          <input
            className="input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></input>

          <label className="label mt-3 font-medium">
            Giá
          </label>
          <input
            className="input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>

          <label className="label mt-3 font-medium">
            Số lượng tồn
          </label>
          <input
            className="input"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
          ></input> */}

            <button
              className="my-5 w-full py-2 text-white bg-amber-500 rounded"
              onClick={(e) => handleAdd(e)}
            >
              THÊM KHUYẾN MÃI
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddDiscount;
