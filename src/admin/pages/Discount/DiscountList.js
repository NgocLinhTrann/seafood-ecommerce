import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "axios";

import { PiTrashLight } from "react-icons/pi";

import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
const DiscountList = () => {
  let info;
  try {
    info = JSON.parse(window.localStorage.getItem("auth"));
    console.log(info.token);
  } catch (err) {
    console.log(err);
  }
  const deleteDiscount = (discount) => {
    const deleteApi = async () => {
      await axios({
        method: "delete",
        url: "https://seafoodharbor.azurewebsites.net/api/admin/promocode",
        data: {
          code: discount.code,
        },
        headers: {
          Authorization: `Bearer ${info.token}`,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    deleteApi();

    toast.success(
      `Xóa mã khuyến mãi '${discount.code}' thành công!`
    );
    setDiscounts((remainDiscounts) => {
      return remainDiscounts.filter(
        (item) => item !== discount
      );
    });
  };
  const confirmDelete = () => {
    if (discountToDelete) {
      deleteDiscount(discountToDelete);
      setIsDeleteConfirmationVisible(false);
      setDiscountToDelete(null); // Reset productToDelete after deletion
    }
  };
  const cancelDelete = () => {
    setIsDeleteConfirmationVisible(false);
    setDiscountToDelete(null); // Reset productToDelete if cancel is clicked
  };
  const handleDelete = (discount) => {
    setDiscountToDelete(discount); // Set the product to be deleted
    setIsDeleteConfirmationVisible(true);
  };
  const [discounts, setDiscounts] = useState("");
  const [discountToDelete, setDiscountToDelete] =
    useState(null);
  const [
    isDeleteConfirmationVisible,
    setIsDeleteConfirmationVisible,
  ] = useState(false);
  useEffect(() => {
    try {
      const getApi = async () => {
        const res = await axios.get(
          `https://seafoodharbor.azurewebsites.net/api/admin/promocode?`,
          {
            headers: {
              Authorization: `Bearer ${info.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setDiscounts(res.data.data);
      };
      getApi();
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    discounts
      ? handleState(discounts)
      : console.log(discounts);
  }, [discounts]);
  console.log(discounts);
  const handleState = (state) => {
    console.log(state);
  };
  const columnNameMapping = {
    "Mã khách hàng": "user_id",
    "Mã khuyến mãi": "code",
    "Số lượng": "available",
    "Giá trị khuyến mãi": "value",
  };
  const displayColumns = Object.keys(columnNameMapping);
  return (
    <Layout
      title="Quản lý khuyến mãi"
      activePage="discount"
    >
      <Toaster />
      <div className="w-full">
        <div className="text-2xl ml-12">
          Danh sách khuyến mãi
        </div>
        <div className="w-11/12">
          {/* Discount Show */}
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      {displayColumns.map((col, index) => (
                        <th
                          scope="col"
                          className="px-6 py-4"
                          key={index}
                        >
                          {col}
                        </th>
                      ))}
                    </thead>

                    <tbody>
                      {discounts &&
                        discounts.map &&
                        discounts.map((discount, index) => (
                          <tr
                            className="border-b dark:border-neutral-500"
                            key={index}
                          >
                            {displayColumns.map(
                              (col, colIndex) => (
                                <td
                                  className="whitespace-nowrap px-6 py-4 font-medium"
                                  key={colIndex}
                                >
                                  <h3>
                                    {
                                      discount[
                                        columnNameMapping[
                                          col
                                        ]
                                      ]
                                    }
                                  </h3>
                                </td>
                              )
                            )}
                            <td className="whitespace-nowrap py-4">
                              <div
                                className="text-rose-600 underline ml-3 cursor-pointer hover:text-rose-500"
                                onClick={() =>
                                  handleDelete(discount)
                                }
                              >
                                <PiTrashLight size={24} />
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                    {isDeleteConfirmationVisible &&
                      discountToDelete && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                          <div className="bg-white p-8 rounded-lg shadow-md">
                            <p className="text-lg font-semibold mb-4">
                              Bạn có chắc muốn xóa mã khuyến
                              mãi này không?
                            </p>
                            <div className="flex justify-end">
                              <button
                                className="text-blue-500 mr-4 cursor-pointer"
                                onClick={cancelDelete}
                              >
                                Hủy
                              </button>
                              <button
                                className="text-red-500 cursor-pointer"
                                onClick={confirmDelete}
                              >
                                Xóa
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DiscountList;
