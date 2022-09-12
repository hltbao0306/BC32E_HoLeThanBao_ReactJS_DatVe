import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../store/Action";
class ThongTinDatGhe extends Component {
    render() {
        return (
        <Fragment>
            <div className="mt-5">
                <div>
                    <div className="flex items-center">
                        <button className="w-10 h-10 bg-yellow-500 rounded"></button>
                        <span className="text-white text-2xl ml-5">Ghế được chọn</span>
                    </div>
                    <div className="flex items-center mt-3">
                        <button className="w-10 h-10 bg-green-500 rounded"></button>
                        <span className="text-white text-2xl ml-5">Ghế đang chọn</span>
                    </div>{" "}
                    <div className="flex items-center mt-3">
                        <button className="border-2 rounded bg-white border-yellow-500 w-10 h-10"></button>
                        <span className="text-white text-2xl ml-5">Ghế chưa chọn</span>
                    </div>
                </div>
                <div className="mt-10">
                    <table className="w-full table-auto border-collapse border border-white">
                    <thead className="">
                        <tr>
                            <th className="text-white text-xl text-left border border-white p-2">
                                Số ghế
                            </th>
                            <th className="text-white text-xl text-left border border-white p-2">
                                Giá (VNĐ)
                            </th>
                            <th className="text-white text-xl text-left border border-white p-2">
                                Hủy
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.danhSachGheDangDat.map((object, index) => {
                            return (
                                <tr key={index}>
                                    <td className="text-yellow-400 text-xl text-left border border-white p-2">
                                        {object.soGhe}
                                    </td>
                                    <td className="text-yellow-400 text-xl text-left border border-white p-2">
                                        {object.gia.toLocaleString()}
                                    </td>
                                    <td className="text-red-500 text-2xl text-left border border-white p-2">
                                        <button onClick={() => {this.props.dispatch(huyGheAction(object));}}>X</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-yellow-400 text-2xl text-left border border-white p-2">Tổng Tiền</td>
                            <td className="text-yellow-400 text-2xl text-left border border-white p-2">
                                {this.props.danhSachGheDangDat.reduce((tongTien, object) => {tongTien +=object.gia;
                                    return (tongTien);},0).toLocaleString()
                                } VNĐ
                            </td>
                        </tr>
                    </tfoot>
                    </table>
                </div>
            </div>
        </Fragment>
        );
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDangDat: rootReducer.Reducer.danhSachGheDangDat,
    };
};
export default connect(mapStateToProps)(ThongTinDatGhe);