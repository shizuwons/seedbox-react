import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Personal({ submitPersonal }) {
    // const [data, setData] = useState({
    //     lastName: "",
    //     firstName: "",
    //     maidenName: "",
    //     countryCode: "",
    //     mobileNo: "",
    //     email: "",
    //     civilStatus: "",
    //     gender: "",
    //     month: "",
    //     date: "",
    //     year: "",
    //     birthplace: "",
    //     citizenship: "",
    //     tin: "",
    //     sssGsis: "",
    //     agentCode: "",
    // });

    // const personalSubmit = () => {
    //     this.data.map(function(aaa, i) {
    //         alert(aaa);
    //     })
    // };

    return (
        <div className="divInfo divForm">
        <form className="personalForm">
          <div className="row">
            <div className="col-lg-12">
              <p className="pInfoTitle" style={{marginBottom: '15px'}}>Personal Info</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <input required type="text" className="txtusername lastname" name="lastName" style={{marginTop: '-10px'}} />
              <label alt="Last Name" placeholder="Last Name" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <input required type="text" className="txtusername firstname" style={{marginTop: '-10px'}} />
              <label alt="First Name" placeholder="First Name" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="lastname-error error-message hide"><span></span></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="firstname-error error-message hide"><span></span></div>
            </div>
          </div>
          <p className="pGuide" style={{display: 'none'}}>Name must be comma-separated e.g "Juan, Santos, De la
            Cruz"</p>
          <input required type="text" className="txtusername maidenname" style={{marginTop: '-10px'}} />
          <label alt="Mothers Maiden Name" placeholder="Mothers Maiden Name" />
          <div className="maidenname-error error-message hide"><span></span></div>
          <div className="row">
            <div className="col-lg-6">
              <div className="selectdiv" style={{marginTop: '0px'}}>
                <select autoComplete="off" className="select2 country-code" defaultValue={0} id="Countrycode">
                  <option data-countrycode="PH" value={63}>Philippines (+63)</option>
                  <option value={0} disabled>Country Code
                  </option>
                  <option data-countrycode="DZ" value={213}>Algeria (+213)</option>
                  <option data-countrycode="AD" value={376}>Andorra (+376)</option>
                  <option data-countrycode="AO" value={244}>Angola (+244)</option>
                  <option data-countrycode="AI" value={1264}>Anguilla (+1264)</option>
                  <option data-countrycode="AG" value={1268}>Antigua &amp; Barbuda (+1268)
                  </option>
                  <option data-countrycode="AR" value={54}>Argentina (+54)</option>
                  <option data-countrycode="AM" value={374}>Armenia (+374)</option>
                  <option data-countrycode="AW" value={297}>Aruba (+297)</option>
                  <option data-countrycode="AU" value={61}>Australia (+61)</option>
                  <option data-countrycode="AT" value={43}>Austria (+43)</option>
                  <option data-countrycode="AZ" value={994}>Azerbaijan (+994)</option>
                  <option data-countrycode="BS" value={1242}>Bahamas (+1242)</option>
                  <option data-countrycode="BH" value={973}>Bahrain (+973)</option>
                  <option data-countrycode="BD" value={880}>Bangladesh (+880)</option>
                  <option data-countrycode="BB" value={1246}>Barbados (+1246)</option>
                  <option data-countrycode="BY" value={375}>Belarus (+375)</option>
                  <option data-countrycode="BE" value={32}>Belgium (+32)</option>
                  <option data-countrycode="BZ" value={501}>Belize (+501)</option>
                  <option data-countrycode="BJ" value={229}>Benin (+229)</option>
                  <option data-countrycode="BM" value={1441}>Bermuda (+1441)</option>
                  <option data-countrycode="BT" value={975}>Bhutan (+975)</option>
                  <option data-countrycode="BO" value={591}>Bolivia (+591)</option>
                  <option data-countrycode="BA" value={387}>Bosnia Herzegovina (+387)</option>
                  <option data-countrycode="BW" value={267}>Botswana (+267)</option>
                  <option data-countrycode="BR" value={55}>Brazil (+55)</option>
                  <option data-countrycode="BN" value={673}>Brunei (+673)</option>
                  <option data-countrycode="BG" value={359}>Bulgaria (+359)</option>
                  <option data-countrycode="BF" value={226}>Burkina Faso (+226)</option>
                  <option data-countrycode="BI" value={257}>Burundi (+257)</option>
                  <option data-countrycode="KH" value={855}>Cambodia (+855)</option>
                  <option data-countrycode="CM" value={237}>Cameroon (+237)</option>
                  <option data-countrycode="CA" value={1}>Canada (+1)</option>
                  <option data-countrycode="CV" value={238}>Cape Verde Islands (+238)</option>
                  <option data-countrycode="KY" value={1345}>Cayman Islands (+1345)</option>
                  <option data-countrycode="CF" value={236}>Central African Republic (+236)
                  </option>
                  <option data-countrycode="CL" value={56}>Chile (+56)</option>
                  <option data-countrycode="CN" value={86}>China (+86)</option>
                  <option data-countrycode="CO" value={57}>Colombia (+57)</option>
                  <option data-countrycode="KM" value={269}>Comoros (+269)</option>
                  <option data-countrycode="CG" value={242}>Congo (+242)</option>
                  <option data-countrycode="CK" value={682}>Cook Islands (+682)</option>
                  <option data-countrycode="CR" value={506}>Costa Rica (+506)</option>
                  <option data-countrycode="HR" value={385}>Croatia (+385)</option>
                  <option data-countrycode="CU" value={53}>Cuba (+53)</option>
                  <option data-countrycode="CY" value={90392}>Cyprus North (+90392)</option>
                  <option data-countrycode="CY" value={357}>Cyprus South (+357)</option>
                  <option data-countrycode="CZ" value={42}>Czech Republic (+42)</option>
                  <option data-countrycode="DK" value={45}>Denmark (+45)</option>
                  <option data-countrycode="DJ" value={253}>Djibouti (+253)</option>
                  <option data-countrycode="DM" value={1809}>Dominica (+1809)</option>
                  <option data-countrycode="DO" value={1809}>Dominican Republic (+1809)</option>
                  <option data-countrycode="EC" value={593}>Ecuador (+593)</option>
                  <option data-countrycode="EG" value={20}>Egypt (+20)</option>
                  <option data-countrycode="SV" value={503}>El Salvador (+503)</option>
                  <option data-countrycode="GQ" value={240}>Equatorial Guinea (+240)</option>
                  <option data-countrycode="ER" value={291}>Eritrea (+291)</option>
                  <option data-countrycode="EE" value={372}>Estonia (+372)</option>
                  <option data-countrycode="ET" value={251}>Ethiopia (+251)</option>
                  <option data-countrycode="FK" value={500}>Falkland Islands (+500)</option>
                  <option data-countrycode="FO" value={298}>Faroe Islands (+298)</option>
                  <option data-countrycode="FJ" value={679}>Fiji (+679)</option>
                  <option data-countrycode="FI" value={358}>Finland (+358)</option>
                  <option data-countrycode="FR" value={33}>France (+33)</option>
                  <option data-countrycode="GF" value={594}>French Guiana (+594)</option>
                  <option data-countrycode="PF" value={689}>French Polynesia (+689)</option>
                  <option data-countrycode="GA" value={241}>Gabon (+241)</option>
                  <option data-countrycode="GM" value={220}>Gambia (+220)</option>
                  <option data-countrycode="GE" value={7880}>Georgia (+7880)</option>
                  <option data-countrycode="DE" value={49}>Germany (+49)</option>
                  <option data-countrycode="GH" value={233}>Ghana (+233)</option>
                  <option data-countrycode="GI" value={350}>Gibraltar (+350)</option>
                  <option data-countrycode="GR" value={30}>Greece (+30)</option>
                  <option data-countrycode="GL" value={299}>Greenland (+299)</option>
                  <option data-countrycode="GD" value={1473}>Grenada (+1473)</option>
                  <option data-countrycode="GP" value={590}>Guadeloupe (+590)</option>
                  <option data-countrycode="GU" value={671}>Guam (+671)</option>
                  <option data-countrycode="GT" value={502}>Guatemala (+502)</option>
                  <option data-countrycode="GN" value={224}>Guinea (+224)</option>
                  <option data-countrycode="GW" value={245}>Guinea - Bissau (+245)</option>
                  <option data-countrycode="GY" value={592}>Guyana (+592)</option>
                  <option data-countrycode="HT" value={509}>Haiti (+509)</option>
                  <option data-countrycode="HN" value={504}>Honduras (+504)</option>
                  <option data-countrycode="HK" value={852}>Hong Kong (+852)</option>
                  <option data-countrycode="HU" value={36}>Hungary (+36)</option>
                  <option data-countrycode="IS" value={354}>Iceland (+354)</option>
                  <option data-countrycode="IN" value={91}>India (+91)</option>
                  <option data-countrycode="ID" value={62}>Indonesia (+62)</option>
                  <option data-countrycode="IR" value={98}>Iran (+98)</option>
                  <option data-countrycode="IQ" value={964}>Iraq (+964)</option>
                  <option data-countrycode="IE" value={353}>Ireland (+353)</option>
                  <option data-countrycode="IL" value={972}>Israel (+972)</option>
                  <option data-countrycode="IT" value={39}>Italy (+39)</option>
                  <option data-countrycode="JM" value={1876}>Jamaica (+1876)</option>
                  <option data-countrycode="JP" value={81}>Japan (+81)</option>
                  <option data-countrycode="JO" value={962}>Jordan (+962)</option>
                  <option data-countrycode="KZ" value={7}>Kazakhstan (+7)</option>
                  <option data-countrycode="KE" value={254}>Kenya (+254)</option>
                  <option data-countrycode="KI" value={686}>Kiribati (+686)</option>
                  <option data-countrycode="KP" value={850}>Korea North (+850)</option>
                  <option data-countrycode="KR" value={82}>Korea South (+82)</option>
                  <option data-countrycode="KW" value={965}>Kuwait (+965)</option>
                  <option data-countrycode="KG" value={996}>Kyrgyzstan (+996)</option>
                  <option data-countrycode="LA" value={856}>Laos (+856)</option>
                  <option data-countrycode="LV" value={371}>Latvia (+371)</option>
                  <option data-countrycode="LB" value={961}>Lebanon (+961)</option>
                  <option data-countrycode="LS" value={266}>Lesotho (+266)</option>
                  <option data-countrycode="LR" value={231}>Liberia (+231)</option>
                  <option data-countrycode="LY" value={218}>Libya (+218)</option>
                  <option data-countrycode="LI" value={417}>Liechtenstein (+417)</option>
                  <option data-countrycode="LT" value={370}>Lithuania (+370)</option>
                  <option data-countrycode="LU" value={352}>Luxembourg (+352)</option>
                  <option data-countrycode="MO" value={853}>Macao (+853)</option>
                  <option data-countrycode="MK" value={389}>Macedonia (+389)</option>
                  <option data-countrycode="MG" value={261}>Madagascar (+261)</option>
                  <option data-countrycode="MW" value={265}>Malawi (+265)</option>
                  <option data-countrycode="MY" value={60}>Malaysia (+60)</option>
                  <option data-countrycode="MV" value={960}>Maldives (+960)</option>
                  <option data-countrycode="ML" value={223}>Mali (+223)</option>
                  <option data-countrycode="MT" value={356}>Malta (+356)</option>
                  <option data-countrycode="MH" value={692}>Marshall Islands (+692)</option>
                  <option data-countrycode="MQ" value={596}>Martinique (+596)</option>
                  <option data-countrycode="MR" value={222}>Mauritania (+222)</option>
                  <option data-countrycode="YT" value={269}>Mayotte (+269)</option>
                  <option data-countrycode="MX" value={52}>Mexico (+52)</option>
                  <option data-countrycode="FM" value={691}>Micronesia (+691)</option>
                  <option data-countrycode="MD" value={373}>Moldova (+373)</option>
                  <option data-countrycode="MC" value={377}>Monaco (+377)</option>
                  <option data-countrycode="MN" value={976}>Mongolia (+976)</option>
                  <option data-countrycode="MS" value={1664}>Montserrat (+1664)</option>
                  <option data-countrycode="MA" value={212}>Morocco (+212)</option>
                  <option data-countrycode="MZ" value={258}>Mozambique (+258)</option>
                  <option data-countrycode="MN" value={95}>Myanmar (+95)</option>
                  <option data-countrycode="NA" value={264}>Namibia (+264)</option>
                  <option data-countrycode="NR" value={674}>Nauru (+674)</option>
                  <option data-countrycode="NP" value={977}>Nepal (+977)</option>
                  <option data-countrycode="NL" value={31}>Netherlands (+31)</option>
                  <option data-countrycode="NC" value={687}>New Caledonia (+687)</option>
                  <option data-countrycode="NZ" value={64}>New Zealand (+64)</option>
                  <option data-countrycode="NI" value={505}>Nicaragua (+505)</option>
                  <option data-countrycode="NE" value={227}>Niger (+227)</option>
                  <option data-countrycode="NG" value={234}>Nigeria (+234)</option>
                  <option data-countrycode="NU" value={683}>Niue (+683)</option>
                  <option data-countrycode="NF" value={672}>Norfolk Islands (+672)</option>
                  <option data-countrycode="NP" value={670}>Northern Marianas (+670)</option>
                  <option data-countrycode="NO" value={47}>Norway (+47)</option>
                  <option data-countrycode="OM" value={968}>Oman (+968)</option>
                  <option data-countrycode="PW" value={680}>Palau (+680)</option>
                  <option data-countrycode="PA" value={507}>Panama (+507)</option>
                  <option data-countrycode="PG" value={675}>Papua New Guinea (+675)</option>
                  <option data-countrycode="PY" value={595}>Paraguay (+595)</option>
                  <option data-countrycode="PE" value={51}>Peru (+51)</option>
                  <option data-countrycode="PH" value={63}>Philippines (+63)</option>
                  <option data-countrycode="PL" value={48}>Poland (+48)</option>
                  <option data-countrycode="PT" value={351}>Portugal (+351)</option>
                  <option data-countrycode="PR" value={1787}>Puerto Rico (+1787)</option>
                  <option data-countrycode="QA" value={974}>Qatar (+974)</option>
                  <option data-countrycode="RE" value={262}>Reunion (+262)</option>
                  <option data-countrycode="RO" value={40}>Romania (+40)</option>
                  <option data-countrycode="RU" value={7}>Russia (+7)</option>
                  <option data-countrycode="RW" value={250}>Rwanda (+250)</option>
                  <option data-countrycode="SM" value={378}>San Marino (+378)</option>
                  <option data-countrycode="ST" value={239}>Sao Tome &amp; Principe (+239)
                  </option>
                  <option data-countrycode="SA" value={966}>Saudi Arabia (+966)</option>
                  <option data-countrycode="SN" value={221}>Senegal (+221)</option>
                  <option data-countrycode="CS" value={381}>Serbia (+381)</option>
                  <option data-countrycode="SC" value={248}>Seychelles (+248)</option>
                  <option data-countrycode="SL" value={232}>Sierra Leone (+232)</option>
                  <option data-countrycode="SG" value={65}>Singapore (+65)</option>
                  <option data-countrycode="SK" value={421}>Slovak Republic (+421)</option>
                  <option data-countrycode="SI" value={386}>Slovenia (+386)</option>
                  <option data-countrycode="SB" value={677}>Solomon Islands (+677)</option>
                  <option data-countrycode="SO" value={252}>Somalia (+252)</option>
                  <option data-countrycode="ZA" value={27}>South Africa (+27)</option>
                  <option data-countrycode="ES" value={34}>Spain (+34)</option>
                  <option data-countrycode="LK" value={94}>Sri Lanka (+94)</option>
                  <option data-countrycode="SH" value={290}>St. Helena (+290)</option>
                  <option data-countrycode="KN" value={1869}>St. Kitts (+1869)</option>
                  <option data-countrycode="SC" value={1758}>St. Lucia (+1758)</option>
                  <option data-countrycode="SD" value={249}>Sudan (+249)</option>
                  <option data-countrycode="SR" value={597}>Suriname (+597)</option>
                  <option data-countrycode="SZ" value={268}>Swaziland (+268)</option>
                  <option data-countrycode="SE" value={46}>Sweden (+46)</option>
                  <option data-countrycode="CH" value={41}>Switzerland (+41)</option>
                  <option data-countrycode="SI" value={963}>Syria (+963)</option>
                  <option data-countrycode="TW" value={886}>Taiwan (+886)</option>
                  <option data-countrycode="TJ" value={7}>Tajikstan (+7)</option>
                  <option data-countrycode="TH" value={66}>Thailand (+66)</option>
                  <option data-countrycode="TG" value={228}>Togo (+228)</option>
                  <option data-countrycode="TO" value={676}>Tonga (+676)</option>
                  <option data-countrycode="TT" value={1868}>Trinidad &amp; Tobago (+1868)
                  </option>
                  <option data-countrycode="TN" value={216}>Tunisia (+216)</option>
                  <option data-countrycode="TR" value={90}>Turkey (+90)</option>
                  <option data-countrycode="TM" value={7}>Turkmenistan (+7)</option>
                  <option data-countrycode="TM" value={993}>Turkmenistan (+993)</option>
                  <option data-countrycode="TC" value={1649}>Turks &amp; Caicos Islands (+1649)
                  </option>
                  <option data-countrycode="TV" value={688}>Tuvalu (+688)</option>
                  <option data-countrycode="UG" value={256}>Uganda (+256)</option>
                  {/* <option data-countryCode="GB" value="44">UK (+44)</option> */}
                  <option data-countrycode="UA" value={380}>Ukraine (+380)</option>
                  <option data-countrycode="AE" value={971}>United Arab Emirates (+971)</option>
                  <option data-countrycode="UY" value={598}>Uruguay (+598)</option>
                  {/* <option data-countryCode="US" value="1">USA (+1)</option> */}
                  <option data-countrycode="UZ" value={7}>Uzbekistan (+7)</option>
                  <option data-countrycode="VU" value={678}>Vanuatu (+678)</option>
                  <option data-countrycode="VA" value={379}>Vatican City (+379)</option>
                  <option data-countrycode="VE" value={58}>Venezuela (+58)</option>
                  <option data-countrycode="VN" value={84}>Vietnam (+84)</option>
                  <option data-countrycode="VG" value={84}>Virgin Islands - British (+1284)
                  </option>
                  <option data-countrycode="VI" value={84}>Virgin Islands - US (+1340)</option>
                  <option data-countrycode="WF" value={681}>Wallis &amp; Futuna (+681)</option>
                  <option data-countrycode="YE" value={969}>Yemen (North)(+969)</option>
                  <option data-countrycode="YE" value={967}>Yemen (South)(+967)</option>
                  <option data-countrycode="ZM" value={260}>Zambia (+260)</option>
                  <option data-countrycode="ZW" value={263}>Zimbabwe (+263)</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <input required type="text" className="txtusername mobile" id="Mobile" />
              <label alt="Mobile Number" placeholder="Mobile Number" />
            </div>
            <div className="col-lg-6">
                <div className="country-code-error error-message hide"><span></span></div>
            </div>
            <div className="col-lg-6">
                <div className="mobile-error error-message hide"><span></span></div>
            </div>
          </div>
            <input required type="text" className="txtusername email" />
            <label alt="E-mail" placeholder="E-mail" />
            <div className="email-error error-message hide"><span></span></div>
          {/*

                  <p class="pError pErrorEmail error" style="margin-top:-10px;">Error! Please put a valid email.
                </p>
            */}
          <p className="pError pErrorEmail success">Your email in valid.</p>
          <div className="row" style={{marginTop: '-5px'}}>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="selectdiv" style={{marginTop: '0px'}}>
                <select autoComplete="off" className="select2 civil-status" defaultValue="default">
                  <option value="default" disabled>Civil Status
                  </option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced/Separated</option>
                  <option>Widowed</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="selectdiv" style={{marginTop: '0px'}}>
                <select autoComplete="off" className="select2 gender" defaultValue="default">
                  <option value="default" disabled>Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="civil-status-error error-message hide"><span></span></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="gender-error error-message hide"><span></span></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 col-12 align-self-center">
              <p className="pExpiry" style={{marginLeft: '10px'}}>Birthdate</p>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <div className="selectdiv" style={{marginTop: '0px'}}>
                    <select autoComplete="off" className="select2 month" id="selectMM" defaultValue="default">
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
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <div className="selectdiv" style={{marginTop: '0px'}}>
                    <select autoComplete="off" className="select2 day" id="selectDD" defaultValue="default">
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
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <div className="selectdiv" style={{marginTop: '0px'}}>
                    <select autoComplete="off" className="select2 year" id="selectYY" defaultValue="default">
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
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                <div className="birthdate-error error-message hide"><span></span></div>
            </div>
          </div>
          <div className="col-lg-12" style={{marginTop: '15px'}}>
            <p className="pGuide" style={{marginLeft: '-5px'}}>Only for 18 years old and above.</p>
          </div>
          <div className="row" style={{marginTop: '-10px'}}>
            <div className="col-lg-12" style={{marginTop: '5px'}}>
                <div className="selectdiv" style={{marginTop: '0px'}}>
                  <select autoComplete="off" className="select2 birthplace" defaultValue="default">
                    <option value="default" disabled>Birthplace</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos Islands">Cocos Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of
                      the</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands">Falkland Islands</option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and McDonald Islands">Heard Island and McDonald
                      Islands</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia">Macedonia</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">Micronesia</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="North Korea">North Korea</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory">Palestinian Territory</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">Russian Federation</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the
                      Grenadines</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia">South Georgia</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-Leste">Timor-Leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">United States Minor
                      Outlying Islands</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City">Vatican City</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                    <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="birthplace-error error-message hide"><span></span></div>
            </div>
          </div>
          <div className="row" style={{marginTop: '5px'}}>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="selectdiv" style={{marginTop: '0px'}}>
                  <select autoComplete="off" className="select2 citizenship" defaultValue="default">
                    <option value="default" disabled>Citizenship</option>
                    <option value="FILIPINO">Filipino</option>
                    <option value="OTHERS">Others</option>
                  </select>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <input required type="text" className="txtusername tin" id="txtTin" />
                  <label alt="TIN" placeholder="TIN" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="citizenship-error error-message hide"><span></span></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="tin-error error-message hide"><span></span></div>
            </div>
          </div>
          <div className="row" style={{marginTop: '-10px'}}>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <input required type="text" className="txtusername sss-gsis" />
                  <label alt="SSS/GSIS (Optional)" placeholder="SSS/GSIS (Optional)" />

            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <input required type="text" className="txtusername agent-code" />
                <label alt="Agent Code (Optional)" placeholder="Agent Code (Optional)" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <input type="button" className="btnSubmit btnProceed" id="personalSubmit" defaultValue="Next" style={{marginTop: '-10px'}} />
            </div>
          </div>
        </form>
      </div>
    );
}

export default Personal;