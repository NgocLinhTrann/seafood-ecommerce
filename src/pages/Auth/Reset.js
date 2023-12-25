import Layout from '../../components/Layouts/Layout';
import { Navigate } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import API_DOMAIN from '../../config';
function Reset(props) {
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const location = useLocation();
    const pwdRef = useRef();
    const errRef = useRef();

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        pwdRef.current.focus();
    }, []);
    useEffect(() => {
        console.log(location);
    }, [location]);
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatchPwd(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [matchPwd, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = PWD_REGEX.test(pwd);
        console.log(location.state.idOfUser);
        console.log(location.state.idOfResetCode);
        if (!v1 || !validMatchPwd) {
            setErrMsg('Mật khẩu hoặc nhập lại mật khẩu không đúng.  Xin nhập lại!');
        } else {
            axios
                .put(`${API_DOMAIN}/api/resetpass`, {
                    id: location.state.idOfUser,
                    idresetcode: location.state.idOfResetCode,
                    newpass: pwd,
                })
                .then((result) => {
                    console.log(result);
                    setSuccess(true);
                })
                .catch((err) => {
                    if (!err?.response) {
                        setErrMsg('Hệ thống không phản hồi! Xin đợi và thử lại trong giây lát.');
                    } else if (err.response?.status === 400) {
                        setErrMsg(
                            'Đã hết thời gian đổi mật khẩu! Vui lòng thực hiện lại các bước để thực hiện!'
                        );
                    } else if (err.response?.status === 404) {
                        setErrMsg('Lỗi! Không tìm thấy người dùng này!');
                    } else if (err.response?.status === 500) {
                        setErrMsg('Có lỗi xảy ra');
                    } else {
                        setErrMsg('Đăng ký thất bại!!!');
                    }
                    errRef.current.focus();
                });
        }
    };
    return (
        <>
            {success ? (
                <section>
                    <Navigate to="/" />
                </section>
            ) : (
                <Layout title={'Tạo lại mật khẩu'}>
                    <section className="mx-auto mt-10 w-full flex-grow mb-10 max-w-[1200px] px-5">
                        <p
                            ref={errRef}
                            className={errMsg ? 'errmsg' : 'hidden'}
                            aria-live="assertive"
                        ></p>
                        <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
                            <div className="flex justify-center">
                                <div className="text-3xl font-bold">ĐẶT LẠI MẬT KHẨU</div>
                            </div>

                            <div className="field">
                                <div className="field">
                                    <div className="field">
                                        <label className="label mt-5 font-medium">
                                            Mật khẩu
                                            {/* <span
                        className={
                          validPwd ? "valid" : "hidden"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="green"
                        />
                      </span>
                      <span
                        className={
                          validPwd ? "hidden" : "invalid"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faTimes}
                          color="red"
                        />
                      </span> */}
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="password"
                                                ref={pwdRef}
                                                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                                id="password"
                                                onChange={(e) => setPwd(e.target.value)}
                                                required
                                                aria-invalid={validPwd ? 'false' : 'true'}
                                                aria-describedby="pwdnote"
                                                onFocus={() => setPwdFocus(true)}
                                                onBlur={() => setPwdFocus(false)}
                                            />
                                            <p
                                                id="pwdnote"
                                                className={
                                                    pwdFocus && !validPwd
                                                        ? 'instructions'
                                                        : 'hidden'
                                                }
                                                style={{ color: 'red' }}
                                            >
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                &nbsp;Nhập từ 8 đến 24 ký tự. <br />
                                                Phải có chữ in hoa, chữ thường, số và ký tự đặc
                                                biệt.
                                                <br />
                                                Các ký tự đặc biệt được cho phép:{' '}
                                                <span aria-label="exclaimtion-mark">!</span>
                                                <span aria-label="at symbol">@</span>
                                                <span aria-label="hashtag">#</span>
                                                <span aria-label="dollar sign">$</span>
                                                <span aria-label="percent">%</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label mt-5 font-medium">
                                            Nhập lại mật khẩu &nbsp;
                                            <span
                                                className={
                                                    validMatchPwd && matchPwd ? 'valid' : 'hidden'
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                    color="green"
                                                    fontStyle={'bold'}
                                                />
                                            </span>
                                            <span
                                                className={
                                                    validMatchPwd && matchPwd ? 'hidden' : 'invalid'
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTimes}
                                                    color="red"
                                                    fontStyle={'bold'}
                                                />
                                            </span>
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="password"
                                                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                                id="confirm_pwd"
                                                onChange={(e) => setMatchPwd(e.target.value)}
                                                required
                                                aria-invalid={validMatchPwd ? 'false' : 'true'}
                                                aria-describedby="confirmnote"
                                                onFocus={() => setMatchPwdFocus(true)}
                                                onBlur={() => setMatchPwdFocus(false)}
                                            />
                                            <p
                                                id="confirmnote"
                                                className={
                                                    matchPwdFocus ? 'instructions' : 'hidden'
                                                }
                                                style={{ color: 'red' }}
                                            >
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                &nbsp; Trường này phải trùng với trường nhập mật
                                                khẩu
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        ref={errRef}
                                        id="errtext"
                                        style={{ color: 'red' }}
                                        className="text-center"
                                    >
                                        {errMsg ? errMsg : ''}
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className="my-5 w-full py-2 text-white bg-amber-500 rounded"
                                    >
                                        THAY ĐỔI
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            )}
        </>
    );
}

export default Reset;
