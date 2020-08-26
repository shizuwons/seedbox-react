import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Upload() {
    const [type, setType] = useState([]);
    const [year, setYear] = useState([]);
    useEffect(() => {
        async function loadData() {
            const typesDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/lookups');
            const types = await typesDataLoad.data;

            // Lookups
            const type = types.filter(el => el.category === 'ID_TYPE');

            setType(type);

            // Year dropdown
            let minOffset = 1, maxOffset = 50;

            let thisYear = new Date().getFullYear();
            let years = [];

            for (var i = minOffset; i <= maxOffset; i++) {
                let year = thisYear + i;
                years.push(year);
            }

            setYear(years);

            reloadSelect();
        }

        function reloadSelect() {
            $(document).ready(function() {
                if(localStorage.getItem("idType") !== null) {
                    $("select[name='idType']").val(localStorage.getItem("idType")).trigger('change');
                    $("select[name='idType']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='idType']").siblings(".select-placeholder").css({ opacity: "1" });    
                }
    
                if(localStorage.getItem("idExpiryYear") !== null) {
                    $("select[name='idExpiryYear']").val(localStorage.getItem("idExpiryYear")).trigger('change.select2');
                    $("select[name='idExpiryYear']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='idExpiryYear']").siblings(".select-placeholder").css({ opacity: "1" });    
                }
            });
        }

        $(document).ready(function() {
            if(localStorage.getItem("idExpiryMonth") !== null) {
                $("select[name='idExpiryMonth']").val(localStorage.getItem("idExpiryMonth")).trigger('change.select2');
                $("select[name='idExpiryMonth']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='idExpiryMonth']").siblings(".select-placeholder").css({ opacity: "1" });    
            }  
    
            if(localStorage.getItem("idExpiryDay") !== null) {
                $("select[name='idExpiryDay']").val(localStorage.getItem("idExpiryDay")).trigger('change.select2');
                $("select[name='idExpiryDay']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='idExpiryDay']").siblings(".select-placeholder").css({ opacity: "1" });    
            }  
        });

        if(localStorage.getItem("idNumber") !== null) {
            $("input[name='idNumber']").val(localStorage.getItem("idNumber"));
            $("input[name='idNumber']").css({ borderColor: "green"});
        }


        loadData();

        $('.idtype').on("change", function(e) { 
            let value = $('.idtype').val();
            if(value === 'PHU' || value === 'TIN' || value === 'INT' || value === 'NCD' || value === 'SEN' || value === 'SSS') {
              $('.expirymonth').prop('disabled', true);
              $('.expiryday').prop('disabled', true);
              $('.expiryyear').prop('disabled', true);

              $("select[name='idExpiryMonth']").siblings(".select2-container").find(".selection").find(".select2-selection").removeAttr('style');
              $("select[name='idExpiryDay']").siblings(".select2-container").find(".selection").find(".select2-selection").removeAttr('style');
              $("select[name='idExpiryYear']").siblings(".select2-container").find(".selection").find(".select2-selection").removeAttr('style');
            }
        });

        if(localStorage.getItem('idImage').indexOf('http') === -1) {
            let setImage = localStorage.getItem('idImage');
            $('.idimage').attr('src', setImage);
        }

        if(localStorage.getItem('signatureImage').indexOf('http') === -1) {
            let setImage = localStorage.getItem('signatureImage');
            $('.signatureimage').attr('src', setImage);
        }
    }, []);
    return (
        <div className="divUpload divForm" style={{ marginTop: "30px"}}>
            <form className="uploadForm">
                <div className="row">
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                        <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px', fontSize: '1.5em'}}>Upload Documents</p>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="selectdiv" style={{marginTop: '0px'}}>
                            <div className="select-placeholder">ID Type</div>
                            <select autoComplete="off" className="select2 idtype" id="IdType" name="idType" defaultValue="default">
                                <option value="default" disabled>ID Type</option>
                                {type.map((e, index) =>(
                                    <option key={index} value={e.code}>{e.value}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <input required type="text" className="txtusername id-number" name="idNumber" id="txtIdNumber" />
                        <label alt="ID Number" placeholder="ID Number" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12 align-self-center">
                        <p className="pExpiry">Expiry date</p>
                    </div>
                    <div className=" col-lg-3 col-md-3 col-sm-4 col-4">
                        <div className="selectdiv" style={{marginTop: '0px'}}>
                        <div className="select-placeholder">MM</div>
                        <select autoComplete="off" className="select2 expirymonth" name="idExpiryMonth" defaultValue="default">
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
                        <div className="select-placeholder">DD</div>
                        <select autoComplete="off" className="select2 expiryday" name="idExpiryDay" defaultValue="default">
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
                        <div className="select-placeholder">YYYY</div>
                            <select autoComplete="off" className="select2 expiryyear" name="idExpiryYear" defaultValue="default">
                                <option value="default" disabled>YYYY
                                </option>
                                {year.map((e, index) =>(
                                    <option key={index} value={e}>{e}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <input type="file" id="imguploadid" name="idImage" style={{display: "none"}}/> 
                        <img src="Image/upload.png" className="img-fluid idimage" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <input type="file" id="imguploadsig" name="signImage" style={{display: "none"}}/> 
                        <img src="Image/signature.png" className="img-fluid signatureimage" />
                    </div>
                </div>
            </form>
        </div>
    );
}