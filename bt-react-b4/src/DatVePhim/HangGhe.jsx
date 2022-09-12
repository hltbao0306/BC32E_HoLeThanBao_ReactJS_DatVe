import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../store/Action";

class HangGhe extends Component {
    renderGhe = () => {
        let { hangGhe } = this.props;
        return hangGhe.danhSachGhe.map((item, index) => {
            //Xét trạng thái ghế đã đặt
            let gheDaDat = "";
            let disabled = false;
            if (item.daDat) {
                gheDaDat = "gheDuocChon";
                disabled = true;
            }
            //Xét trạng thái ghế đang đặt
            let cssGheDangChon = "";
            let indexGheDangChon = this.props.danhSachGheDangDat.findIndex(
                (object) => object.soGhe === item.soGhe
            );
            if (indexGheDangChon !== -1) {
                cssGheDangChon = "gheDangChon";
            }
            return (
                <button disabled={disabled} className={`ghe ${gheDaDat} ${cssGheDangChon} text-black`}
                    key={index}
                    onClick={() => {
                        this.props.dispatch(datGheAction(item));}}>
                    {item.soGhe}
                </button>
            );
        });
    };

    renderHangGhe = () => {
        let { hangGhe, soHangGhe } = this.props;
        if (soHangGhe === 0) {
        return (
            <div>
                {hangGhe.hang}
                {hangGhe.danhSachGhe.map((item, index) => {
                    return (
                    <button key={index} className="rowNumber text-xl">
                        {item.soGhe}
                    </button>
                    );
                })}
            </div>
        );
        }
        return (
        <div>
            <span className="inline-block w-4">{hangGhe.hang}</span>
            {this.renderGhe()}
        </div>
        );
    };
    render() {
        return (
        <div className="text-yellow-300 mt-2 text-xl">{this.renderHangGhe()}</div>
        );
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDangDat: rootReducer.Reducer.danhSachGheDangDat,
    };
};


export default connect(mapStateToProps)(HangGhe);