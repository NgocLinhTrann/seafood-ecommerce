import AdminSidebar from "../../components/AdminSidebar";
import ADHeader from "./ADHeader";
import ProductTable from "../../components/ProductTable";

function ADManageProduct() {
    return (
        <div className="flex justify-start">
            <AdminSidebar />
            <div className="w-full">
                <ADHeader />
                <div className="text-2xl ml-12">Danh sách sản phẩm</div>
                <div className="w-11/12">
                    <ProductTable />

                </div>
            </div>
        </div>
    )
}

export default ADManageProduct;