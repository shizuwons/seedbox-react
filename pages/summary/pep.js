import Head from 'next/head';
import { useEffect } from 'react';

export default function Pep() {
    useEffect(() => {
        $(document).ready(function() {
            if(localStorage.getItem('government') !== null) {
                $("select[name='government']").val(localStorage.getItem("government")).trigger('change');
                $("select[name='government']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='government']").siblings(".select-placeholder").css({ opacity: "1" });                    
            }

            if(localStorage.getItem('relative') !== null) {
                $("select[name='relative']").val(localStorage.getItem("relative")).trigger('change');
                $("select[name='relative']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='relative']").siblings(".select-placeholder").css({ opacity: "1" });                    
            }
        });
    }, []);
    return (
        <div className="divPep divForm" style={{ marginTop: "30px"}}>
            <form className="pepForm">
                <div className="row">
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                        <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px', fontSize: '1.5em'}}>PEP Declaration</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv">
                        <div className="select-placeholder">Have you worked in a government agency or institution?</div>
                        <select autoComplete="off" className="select2 government" name="government" defaultValue="">
                            <option value="" title="Please fill out this field." disabled>Have you worked in a government agency or
                            institution?
                            </option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        </div>
                        <div className="selectdiv">
                        <div className="select-placeholder">Do you have any relative who is/was an elected/appoi...</div>
                        <select autoComplete="off" className="select2 relative" name="relative" defaultValue="">
                            <option value="" title="Please fill out this field." disabled>Do you have any relative who is/was
                            an elected/appointed
                            government official up to second degree
                            of
                            consanguinity or affinity?
                            </option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}