import React, { useEffect, useState } from "react";
import GoodsItem from "../components/GoodsItem";
import axios from "axios";

const GoodsList = () => {
    //1.axios를 이용하여 상품정보를 가진 URL로 요청한 후, 응답받은 데이터를
    //상품리스트 state에 저장하는 getGoodsList함수를 구현하시오.
    //URL: http://localhost:3000/goods_list
    const [goods, setGoods] = useState();

    const getGoodsList = async () => {
        const GOODS_URL = "http://54.180.143.66:8088/lunch/api/goods_list";
        const res = await axios.get(GOODS_URL);
        const data = res.data;
        console.log(data);

        setGoods(data.map((item) => <GoodsItem data={item} key={item.id} />));
    };

    //2.useEffect() 를 이용하여 getGoodsList함수를 한 번만 호출하시오.

    useEffect(() => {
        getGoodsList();
    }, []);

    return (
        <div className="goods-list">
            {/* 3.상품리스트 안에 있는 정보를 GoodsItem 컴포넌트를 활용해 출력하시오. */}
            {goods}
        </div>
    );
};

export default GoodsList;
