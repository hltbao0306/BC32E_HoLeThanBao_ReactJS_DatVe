import React, { Component, Fragment } from "react";
import ThongTinDatGhe from "./ThongTinDatVe";
import danhSachGhe from "../data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class DatVePhim extends Component {
    renderHangGhe = () => {
        return danhSachGhe.map((item, index) => {
            return (
                <Fragment key={index}>
                    <HangGhe hangGhe={item} soHangGhe={index} />
                </Fragment>
        )});
    };
    render() {
        return (
        <div className="fixed w-full h-full bookingMovie" style={{backgroundImage: "url(./img/bgmovie.jpg)", backgroundSize: "100%",}}>
            <div className="fixed w-full h-full bg-black bg-opacity-80">
                <div className="flex mt-5">
                    <div className="w-2/3 px-4">
                        <h1 className="text-yellow-300 text-4xl text-center">
                            ĐẶT VÉ XEM PHIM
                        </h1>
                        <div className="flex flex-col items-center mt-5">
                            <h3 className="text-white text-2xl">Màn hình</h3>
                            <div className="screen mt-5"></div>
                            <div>{this.renderHangGhe()}</div>
                        </div>
                    </div>
                    <div className="w-1/3 px-4">
                        <h1 className="text-white text-3xl text-center">DANH SÁCH GHẾ BẠN CHỌN</h1>
                        <ThongTinDatGhe />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}