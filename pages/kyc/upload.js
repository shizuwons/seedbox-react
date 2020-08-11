import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { compareStrings } from '../../functions/functions';

function Upload() {
    const [type, setType] = useState([]);
    useEffect(() => {
        async function loadData() {
            const typesDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/lookups');
            const types = await typesDataLoad.data;

            // Lookups
            const type = types.filter(el => el.category === 'ID_TYPE');

            setType(type);

        }

        loadData();
    }, []);
    return (
        <div className="divUpload divForm" style={{display: 'none'}}>
            <form>
                <div className="row">
                <div className="col-lg-12" style={{marginTop: '10px'}}>
                    <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>Upload Documents</p>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                    <div className="selectdiv" style={{marginTop: '0px'}}>
                    <select autoComplete="off" className="select2 id-type" id="IdType" defaultValue="default">
                        <option value="default" disabled>ID Type</option>
                        {type.map((e, index) =>(
                            <option key={index} value={e.value}>{e.value}</option>
                        ))}
                    </select>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                    <input required type="text" className="txtusername id-number" id="txtIdNumber" />
                    <label alt="ID Number" placeholder="ID Number" />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12 align-self-center">
                    <p className="pExpiry">Expiry date</p>
                </div>
                <div className=" col-lg-3 col-md-3 col-sm-4 col-4">
                    <div className="selectdiv" style={{marginTop: '0px'}}>
                    <select autoComplete="off" className="select2 expirymonth" defaultValue="default">
                        <option value="default" disabled>MM
                        </option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                    <div className="selectdiv" style={{marginTop: '0px'}}>
                    <select autoComplete="off" className="select2 expiryday" defaultValue="default">
                        <option value="default" disabled>DD
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>8</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                <div className="selectdiv" style={{marginTop: '0px'}}>
                    <select autoComplete="off" className="select2 expiryyear" defaultValue="default">
                    <option value="default" disabled>YYYY
                    </option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1929">1929</option>
                    <option value="1928">1928</option>
                    <option value="1927">1927</option>
                    <option value="1926">1926</option>
                    <option value="1925">1925</option>
                    <option value="1924">1924</option>
                    <option value="1923">1923</option>
                    <option value="1922">1922</option>
                    <option value="1921">1921</option>
                    <option value="1920">1920</option>
                    </select>
                </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <img src="Image/upload.png" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <img src="Image/signature.png" className="img-fluid" />
                </div>
                </div>
                <div className="row" style={{marginTop: '20px'}}>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <input type="button" className="btnBack" defaultValue="Back" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <input type="button" className="btnNext btnProceed" defaultValue="Next" />
                </div>
                </div>
            </form>
      </div>
    );
}

export default Upload;