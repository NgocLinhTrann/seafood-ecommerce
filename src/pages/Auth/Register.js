import Layout from '../../components/Layouts/Layout';
import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigate } from 'react-router-dom';
import hcm from '../../assets/address/hcm.json';
import API_DOMAIN from '../../config';

const email_REGEX = /^[a-zA-Z][a-zA-Z0-9-_].{10,50}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function SignUpPage() {
    const emailRef = useRef();
    const errRef = useRef();
    const pwdRef = useRef();
    const matchRef = useRef();
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        emailRef.current.focus();
    }, []);
    useEffect(() => {
        const result = email_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email]);

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
    }, [email, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = email_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg('Gmail hoặc mật khẩu không đúng. Xin hãy nhập lại!');
            return;
        }

        axios
            .post(`${API_DOMAIN}/api/user/register`, {
                fullname: name,
                email: email,
                password: pwd,
                phone: phone,
                gender: gender,
                address: address + ', ' + district + ', ' + province + ', ' + city,
                isAdmin: false,
            })
            .then((result) => {
                console.log(result);
                setSuccess(true);
            })
            .catch((err) => {
                if (!err?.response) {
                    setErrMsg('Hệ thống không phản hồi! Xin đợi và thử lại trong giây lát.');
                } else if (err.response?.status === 400) {
                    setErrMsg('Tài khoản gmail này đã được đăng ký!!!');
                } else if (err.response?.status === 500) {
                    setErrMsg('Số điện thoại này đã được đăng ký!!!');
                } else {
                    setErrMsg('Đăng ký thất bại!!!');
                }
                errRef.current.focus();
            });
    };
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [provinces, setProvinces] = useState([]);
    const [districs, setDistricts] = useState([]);
    const changeCity = (event) => {
        setCity(event.target.value);
        setProvinces(hcm.find((city) => city.name === event.target.value).states);
    };
    const changeProvince = (event) => {
        setProvince(event.target.value);
        setDistricts(provinces.find((province) => province.name === event.target.value).cities);
    };
    const changeDistrict = (event) => {
        setDistrict(event.target.value);
    };
    return (
        <>
            {success ? (
                <section>
                    <Navigate to="/login" />
                </section>
            ) : (
                <Layout title={'Đăng kí'}>
                    <section className="mx-auto mt-10 w-full flex-grow mb-10 max-w-[1200px] px-5">
                        <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
                            <div className="flex justify-center">
                                <div className="text-3xl font-bold">ĐĂNG KÝ</div>
                            </div>

                            <div className="field">
                                <label className="label mt-5 font-medium">
                                    Tên đầy đủ
                                    <span style={{ color: 'red' }}>&nbsp;* &nbsp;</span>
                                </label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        id="fullname"
                                        placeholder="Nguyễn Văn A"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="field">
                                    <label className="label mt-5 font-medium">
                                        Giới tính
                                        <span style={{ color: 'red' }}>&nbsp;* &nbsp;</span>
                                    </label>
                                    <div className="control flex justify-normalh">
                                        <label className="radio">
                                            <input
                                                classNameName="mr-1"
                                                type="radio"
                                                name="gender"
                                                id="gender"
                                                onChange={(e) => setGender('Nam')}
                                            />
                                            Nam
                                        </label>
                                        <label className="radio ml-5">
                                            <input
                                                classNameName="mr-1"
                                                type="radio"
                                                name="gender"
                                                id="gender"
                                                onChange={(e) => setGender('Nữ')}
                                            />
                                            Nữ
                                        </label>
                                    </div>

                                    <div className="field">
                                        <label className="label mt-5 font-medium">
                                            Email
                                            <span style={{ color: 'red' }}>&nbsp;* &nbsp;</span>
                                            {/* <span
                        className={
                          validEmail ? "valid" : "hidden"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="green"
                          fontStyle={"bold"}
                        />
                      </span>
                      <span
                        className={
                          validEmail || !email
                            ? "hidden"
                            : "invalid"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faTimes}
                          color="red"
                          fontStyle={"bold"}
                        />
                      </span> */}
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="email"
                                                placeholder="nguyenvana@gmail.com"
                                                id="emailname"
                                                ref={emailRef}
                                                autoComplete="off"
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                aria-invalid={validEmail ? 'false' : 'true'}
                                                aria-describedby="uidnote"
                                                onFocus={() => setEmailFocus(true)}
                                                onBlur={() => setEmailFocus(false)}
                                            />
                                            <p
                                                id="uidnote"
                                                className={
                                                    emailFocus && email && !validEmail
                                                        ? 'instructions'
                                                        : 'hidden'
                                                }
                                                style={{ color: 'red' }}
                                            >
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                &nbsp;được nhập từ 10 đến 50 ký tự.
                                                <br />
                                                Ký tự đầu tiên phải là chữ.
                                                <br />
                                                Chữ, số, gạch dưới, gạch nối được cho phép.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label mt-5 font-medium">
                                            Địa chỉ
                                            <span style={{ color: 'red' }}>&nbsp;* &nbsp;</span>
                                        </label>
                                        <div className="control flex justify-between">
                                            <div className="select">
                                                <select onChange={changeCity} value={city}>
                                                    <option>Tỉnh/TP</option>
                                                    {hcm.map((city) => (
                                                        <option value={city.name}>
                                                            {city.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="select ml-2">
                                                <select onChange={changeProvince} value={province}>
                                                    <option>Quận/Huyện</option>
                                                    {provinces.map((prov) => (
                                                        <option value={prov.name}>
                                                            {prov.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="select ml-2 pr-5">
                                                <select onChange={changeDistrict} value={district}>
                                                    <option>Phường/Xã</option>
                                                    {districs.map((dis) => (
                                                        <option value={dis}>{dis}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="control mt-3 font-medium">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Số nhà/tên đường"
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label mt-5 font-medium">
                                            Số điện thoại
                                            <span style={{ color: 'red' }}>&nbsp;* &nbsp;</span>
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="tel"
                                                id="phoneNum"
                                                placeholder="0391222927"
                                                pattern="[0-9]{10}"
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label mt-5 font-medium">
                                            Mật khẩu
                                            <span style={{ color: 'red' }}>&nbsp;* &nbsp;</span>
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
                                            Nhập lại mật khẩu
                                            <span style={{ color: 'red' }}>&nbsp;* &nbsp;</span>
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
                                                ref={matchRef}
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
                                    <button
                                        className="my-5 w-full py-2 text-white bg-amber-500 rounded"
                                        onClick={handleSubmit}
                                    >
                                        TẠO TÀI KHOẢN
                                    </button>
                                    <div
                                        ref={errRef}
                                        id="errtext"
                                        style={{ color: 'red' }}
                                        className="text-center"
                                    >
                                        {errMsg ? errMsg : ''}
                                    </div>

                                    <p className="text-center">
                                        Bạn đã có tài khoản?
                                        <a
                                            href="/login"
                                            className="text-violet-900 ml-1.5 font-normal"
                                        >
                                            Đăng nhập
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            )}
        </>
    );
}

export default SignUpPage;
