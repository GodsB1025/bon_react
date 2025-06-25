import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useState } from "react";

const GoodsDetail = () => {
    //상품정보를 저장하는 state를 정의하시오.
    //state명: good

    const [good, setGood] = useState(null);

    //GoodsItem에서 넘겨받은 상품id를 저장하는 변수를 정의하시오.
    // useParams() 활용

    const { id } = useParams();

    //상품리스트에서 특정 상품정보만 JSON서버로부터 가져온 후, good state에 저장하는
    //getGoods함수를 구현하시오.
    //요청URL : http://localhost:3000/goods_list/상품id

    const getGoods = async () => {
        const URL = `http://54.180.143.66:8088/lunch/api/goods_list/${id}`;
        const res = await axios.get(URL);
        const data = res.data;
        console.log(data);

        setGood(data);
    };

    useEffect(() => {
        getGoods();
    }, []);

    //useEffect()를 이용하여 getGoods 함수를 한 번만 호출하시오.

    return (
        <>
            {good === null ? (
                <span>로딩중</span>
            ) : (
                <div className="goods-detail-box">
                    <div className="goods-detail-box-thumb">
                        <img src={good.main_thumb} alt="이미지" />
                    </div>
                    <div className="goods-detail-box-info">
                        <div className="goods-detail-title">
                            <div className="goods-icon">
                                {/* 해당 상품이 new인지 best인지 조건부 렌더링을 통해 출력하시오. */}
                                {good.isNew ? <em className="goods-new">new</em> : <></>}
                                {good.isBest ? <em className="goods-best">best</em> : <></>}
                            </div>
                            <p className="goods-detail-name">{good.name}</p>
                            <p className="goods-detail-txt">{good.txt}</p>
                            <div className="goods-detail-price-box">
                                <strong>{good.price}원</strong>
                            </div>
                        </div>
                        <div className="goods-detail-summary">{good.summary}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GoodsDetail;
