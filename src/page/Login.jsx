import React from "react";
import { useNavigate } from "react-router";

const Login = ({ setAuthenticate }) => {
    //submit 버튼 클릭 시, 로그인 상태값을 전환하고 메인 페이지로 이동되도록 구현하시오.

    const navigate = useNavigate();

    const goToHome = (e) => {
        e.preventDefault();
        setAuthenticate(true);
        navigate("/");
    };

    return (
        <div className="login-box">
            <div className="login-box-tit">
                <h2>로그인</h2>
            </div>
            <div className="login-box-form">
                <form>
                    <div className="input-block">
                        <input type="text" placeholder="아이디를 입력해주세요." />
                    </div>
                    <div className="input-block">
                        <input type="password" placeholder="비밀번호를 입력해주세요." />
                    </div>
                    <div className="submit">
                        <input type="submit" className="login-btn" value="로그인" onClick={goToHome} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
