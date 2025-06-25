import React from "react";
import { Link } from "react-router";

const GoodsItem = ({ data }) => {
    return (
        <div className="goods-item" style={{ position: "relative" }}>
            <div className="goods-item-icon">
                {/* 해당 상품이 new인지 best인지 조건부 렌더링을 통해 출력하시오. */}
                {data.isNew ? <em className="goods-new">new</em> : <></>}
                {data.isBest ? <em className="goods-best">best</em> : <></>}
            </div>
            <div className="goods-thumb">
                {/* 
          이미지 클릭 시, Link컴포넌트를 이용해 상세페이지로 이동하시오
          상세페이지 URL : /menu/상품의 id
        */}

                <Link to={`/goods/${data.id}`}>
                    <img src={data.main_thumb} alt="이미지" />
                </Link>
            </div>
            <div className="goods-name">
                <h4>{data.name}</h4>
                <p>
                    <span>{data.price}</span>원
                </p>
            </div>
        </div>
    );
};

export default GoodsItem;
