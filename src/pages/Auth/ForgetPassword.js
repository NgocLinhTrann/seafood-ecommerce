import Layout from '../../components/Layouts/Layout';
import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_DOMAIN from '../../config';
function ForgetPassword() {
    const navigate = useNavigate();
    const [idOfResetCode, setIdOfResetCode] = useState('');
    const [idOfUser, setIdOfUser] = useState('');

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [resp, setResp] = useState([]);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, otp]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsShow(true);
        axios
            .post(`${API_DOMAIN}/api/resetpass/checkMail`, {
                email: email,
            })
            .then((res) => {
                setErrMsg(
                    'Đã gửi mã đến email! Mã có thời gian là 3 phút! Vui lòng nhập vào trước thời gian!'
                );
            })
            .catch((err) => {
                if (!err?.response) {
                    setErrMsg('Hệ thống không phản hồi! Xin đợi và thử lại trong giây lát.');
                } else if (err.response?.status === 404) {
                    setErrMsg('Tài khoản email không tồn tại! Vui lòng kiểm tra lại!');
                }
                errRef.current.focus();
            });
    };
    const handleOtp = async (e) => {
        e.preventDefault();
        await axios
            .post(`${API_DOMAIN}/api/resetpass/checkResetCode`, {
                email: email,
                resetcode: otp,
            })
            .then((res) => {
                setResp(res.data);
                setSuccess(true);
            })
            .catch((err) => {
                if (!err?.response) {
                    setErrMsg('Hệ thống không phản hồi! Xin đợi và thử lại trong giây lát.');
                } else if (err.response?.status === 404) {
                    setErrMsg('Tài khoản email không tồn tại! Vui lòng kiểm tra lại!');
                } else if (err.response?.status === 400) {
                    setErrMsg('Mã xác nhận nhập không chính xác!');
                } else {
                    setErrMsg(err);
                }
                errRef.current.focus();
            });
    };

    useEffect(() => {
        console.log(resp);
        resp ? setIdOfResetCode(resp.idOfResetCode) : console.log('');
        resp ? setIdOfUser(resp.idOfUser) : console.log('');
        console.log(idOfResetCode);
        console.log(idOfUser);
    }, [resp]);
    return (
        <>
            {success && idOfResetCode && idOfUser ? (
                navigate('/reset-password/' + idOfResetCode, {
                    state: {
                        idOfUser,
                        idOfResetCode,
                    },
                })
            ) : (
                <Layout title={'Quên mật khẩu'}>
                    <section className="mx-auto mt-10 w-full flex-grow mb-10 max-w-[1200px] px-5">
                        <p
                            ref={errRef}
                            className={errMsg ? 'errmsg' : 'hidden'}
                            aria-live="assertive"
                        ></p>
                        <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
                            <div className="flex justify-center">
                                <div className="text-3xl font-bold">QUÊN MẬT KHẨU</div>
                            </div>

                            <div className="field">
                                <div className="field">
                                    <div className="field">
                                        <label className="label mt-5 font-medium">Email</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="email"
                                                placeholder="nguyenvana@gmail.com"
                                                id="email"
                                                ref={emailRef}
                                                autoComplete="off"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <span className={!isShow ? 'hidden' : 'show'}>
                                        <div className="field">
                                            <label className="label mt-5 font-medium">
                                                Mã xác nhận
                                            </label>
                                            <div className="control">
                                                <input
                                                    className="input"
                                                    type="text"
                                                    id="otp"
                                                    autoComplete="off"
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    value={otp}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </span>
                                    <span className={isShow ? 'hidden' : 'show'}>
                                        <button
                                            onClick={handleSubmit}
                                            className="my-5 w-full py-2 text-white bg-amber-500 rounded"
                                        >
                                            GỬI MÃ XÁC NHẬN
                                        </button>
                                    </span>
                                    <span className={!isShow ? 'hidden' : 'show'}>
                                        <button
                                            onClick={handleOtp}
                                            className="my-5 w-full py-2 text-white bg-amber-500 rounded"
                                        >
                                            XÁC NHẬN
                                        </button>
                                    </span>
                                    <span className={!isShow ? 'hidden' : 'show'}>
                                        <p className="text-center">
                                            Bạn chưa nhận được gmail?
                                            <a
                                                onClick={handleSubmit}
                                                className="hover:text-blue-700 ml-1.5 font-normal"
                                            >
                                                Gửi lại
                                            </a>
                                        </p>
                                    </span>
                                    <div
                                        ref={errRef}
                                        id="errtext"
                                        style={{ color: 'red' }}
                                        className="text-center"
                                    >
                                        {errMsg ? errMsg : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            )}
        </>
    );
}

export default ForgetPassword;
