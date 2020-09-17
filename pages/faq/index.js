import Head from 'next/head'
import Router from 'next/router';
import Default from '../../layouts/default';
import { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

export default function Faq() {
    useEffect(() => {
        $(document).ready(function() {
            $('.accordion a').click(function(){
                $(this).toggleClass('active');
                $(this).next('.content').slideToggle(400);
            });
        });
    }, []);
    return(
        <Default>
            <Head>
                <link 
                    href="Css/home.css"
                    rel="stylesheet"
                    type="text/css"
                />
            </Head>
            <div>
                <Sidebar></Sidebar>
                <div className="container-fluid h-100" style={{backgroundColor: '#fafafa'}}>
                    <Navbar></Navbar>
                    <div className="container con h-100 conMainBody" style={{padding: '20px 15px', backgroundColor: '#fafafa'}}>
                        <div className="pPageTitle">Frequently Asked Questions</div>
                        <div className="accordion" style={{marginBottom: "80px"}}>
                            <div className="accordion-item">
                                <a>What is UITF?</a>
                                <div className="content">
                                    <p> A Unit Investment Trust Fund (UITF) is an open-ended pooled trust fund denominated in pesos or any acceptable currency, which is established, administered, and maintained by a trust entity and made available by participation. Each UITF product is governed by a Declaration of Trust (or Plan Rules) which contains the investment objectives of the UITF as well as the mechanics for investing, operating, and administering the fund. 
                                        <br/><br/>Most UITFs are considered medium to long term investments. Clients considering investing in UITFs must have the financial resources to stay invested in them for a reasonable period of time in order to maximize earnings potential. If the funds to be invested will be needed by the client in the immediate future, the UITFs may not be a suitable investment vehicle for such clients. 
                                    </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>How does a UTIF work?</a>
                                <div className="content">
                                Funds from various clients with similar investment objectives are pooled together into one fund, which the trustee invests in various types of securities with the aim of maximizing returns within reasonable risk levels. A client invests in a UITF by purchasing units of participation in the fund. The units of participation represent the investor's proportionate beneficial share in the total value of the fund. As an investor in the fund, the client does not own any specific asset of the fund, only a proportionate share in all of the fund's assets.
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>What is a NAVPU?</a>
                                <div className="content">
                                Units of participation are made available to investors based on the Net Asset Value Per Unit (NAVPU) of the fund for the day. The NAVPU is derived by dividing the fund's Net Asset Value (NAV) by the number of outstanding units in the fund. NAV, on the other hand, is the sum of the market value of the investments of the fund less expenses such as taxes, fees and other qualified charges. To determine how many units of participation a certain amount of investment is equivalent to, simply divide the amount to be invested by the prevailing NAVPU for the day. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>What is a PTA?</a>
                                <div className="content">
                                The UITF investor and the trust entity shall execute a Participating Trust Agreement (PTA) to confirm the investor's desire to participate in the fund and the trust entity's acceptance thereof, subject to the terms and conditions set forth in the Declaration of Trust.
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>What is RDS?</a>
                                <div className="content">
                                A Risk Disclosure Statement (RDS) contains the nature of the UITFs and risks involved in investing therein. It is a confirmation that a UITF investor has fully acknowledged, understood, and agreed with the risks disclosed both in RDS and by a certified UITF Salesperson.
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>What are the benefits of investing in a UITF?</a>
                                <div className="content">
                                Investors in UITFs can avail of the following benefits: <br/><br/>
                                <ul>
                                    <li>
                                        <span className="strong">Diversification </span>
                                        - By participating in a UITF, risks are spread out across the various investments held by the pooled trust fund. Diversification comes in the form of various types of investments, issuers and tenors. UITFs are required to observe its exposure in a single entity and its related parties to 15% of the market value of the fund, except in case of government securities. 
                                    </li>
                                    <li>
                                        <span className="strong">Liquidity </span>
                                        - While it is advisable to stay invested in the UITF for a longer period of time, clients can redeem units of participation at any time. The fund will not have difficulty redeeming such units of participation because UITF investments are limited to marketable or tradable securities. 
                                    </li>
                                    <li>
                                        <span className="strong">Affordability </span>
                                        - UITFs generally have low minimum investment requirements. Additional investments may be made in tranches as funds become available to the client. 
                                    </li>
                                    <li>
                                        <span className="strong">Better earnings potential </span>
                                        - Greater earnings potential is achieved without having to invest large sums of money. There are opportunities for potentially higher returns due to possible marked-to- market gains on top of accrued income from investments. UITFs provide access to financial instruments not readily available to retail investors. 
                                    </li>
                                    <li>
                                        <span className="strong">Exempt from reserve requirements </span>
                                        - UITFs are not subject to reserve requirements imposed on bank deposits.  
                                    </li>
                                    <li>
                                        <span className="strong">Professional fund management </span>
                                        - Participating in a UITF allows clients to gain access to the expertise and services of seasoned fund managers who are able to actively monitor the markets for possible investment opportunities.  
                                    </li>
                                    <li>
                                        <span className="strong">Transparency </span>
                                        - Trust entities are required to publish the UITF NAVPUs at least weekly, allowing investors to compare investment performance of various fund managers. Each UITF is subject to a separate annual audit by an independent auditor acceptable to the BSP, the results of which may be made available to investors. In addition, each UITF is required to have a BSP-accredited third party custodian, who is tasked with safekeeping the securities of the UITF and performing independent marking-to-market of such securities. 
                                    </li>
                                    <li>
                                        <span className="strong">Regulated product </span>
                                        - The management and administration of UITFs are governed by the BSP. 
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>Is there a possibility of losing my money? Is my investment guaranteed?</a>
                                <div className="content">
                                Unlike bank deposits, principal investments in UITFs are not protected nor returns can be guaranteed.<br/><br/>
                                Investment in UITFs is not insured by the Philippine Deposit Insurance Corporation (PDIC). The returns of UITFs are not guaranteed and fluctuate from day to day according to the market value of the securities in the portfolio. As a result, past performance is not indicative of future performance. <br/><br/>
                                Different factors affect financial markets and how they react is reflected in the prices of securities. Investments are exposed to risks. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>How will my money earn if I invest in UITFs?</a>
                                <div className="content">
                                An investor can realize profits by redeeming units at a higher NAVPU than what an investor bought these at. A UITF is a unitized trust product which is valued on a marked-to-market basis. This means that the price reflects the accurate value of the fund at the time of your investment/redemption. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>Who manages ATRAM UITFs?</a>
                                <div className="content">
                                ATRAM Trust Corporation is the trustee of ATRAM UITFs. ATRAM Trust Corporation is the first stand-alone trust corporation in the Philippines. It received its license to operate in October 2016 from the Bangko Sentral ng Pilipinas (BSP). ATRAM Trust was the first to launch a complete range of feeder funds in the 
                                Philippines which provide Filipinos access to offshore investments in the US, Europe, Emerging Markets and Asia. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>How can I invest in ATRAM UITFs?</a>
                                <div className="content">
                                Please give yourself the chance to read the Declaration of Trust (DOT) and the Key Information and Investment Disclosure Statement (KIIDS) of the UITF that you are interested in. The DOT and KIIDS are available for download at ATRAM’s website: www.atram.com.ph. The DOT and KIIDS contain the UITF's investment objectives; the broad investment strategies the fund manager will follow; the risks involved in investing in the fund; and the fees, costs and other disclosures essential to good governance and transparency. A careful reading of the DOT and a discussion with a certified UITF salesperson should help you decide whether the fund appropriately matches your financial goals and appetite for risk. <br/><br/>
                                Currently, you may invest in the following ATRAM UITFs through ATRAM Trust Corporation’s online investing platform, www.seedbox.ph:<br/><br/>
                                <p className="strong">- ATRAM Peso Money Market</p>
                                <p className="strong">Fund</p>
                                <p className="content-padding">The Fund is suitable for investors with a short-term investment horizon seeking better returns compared to deposit products, with prime consideration for high liquidity and capital security, and have a conservative risk appetite.</p> 
                                <p className="strong">- ATRAM Total Return Peso Bond </p>
                                <p className="strong">Fund</p>
                                <p className="content-padding">The Fund is suitable for investors with an investment horizon of at least 3 years, has a moderate risk appetite, looking for higher returns compared to other investment outlets with shorter investment horizons, and willing to take on the pertinent risks. </p>
                                <p className="strong">- ATRAM Philippine Equity Smart Index</p>
                                <p className="strong">Fund</p>
                                <p className="content-padding">The Fund is suitable for investors with a long-term investment horizon who seek to invest in Philippine equity securities and have a high-risk appetite.</p>
                                <p className="strong">- ATRAM Global Technology </p>
                                <p className="strong">Feeder Fund</p>
                                <p className="content-padding">The Fund is suitable for investors with a long-term investment horizon seeking to invest in equity securities of companies throughout the world that derive or benefit significantly from technological advances and improvements and have a high-risk appetite. 
                                </p>
                                For other ATRAM UITFs not included in the list, a personal visit to ATRAM Trust Corporation's office is required. We are located at 8th floor, 8 Rockwell, Hidalgo Drive, Rockwell Center, Makati City. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>What are the fees?</a>
                                <div className="content">
                                ATRAM Trust Corporation does not charge investors with sales fees. We do, however, charge trust fees which range from 0.50% p.a. to 1.5% p.a. depending on the UITF. Trust fees are already incorporated in the computation of a UITF’s NAVPU. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>Can I redeem my funds anytime?</a>
                                <div className="content">
                                Yes. ATRAM UITFs are not subject to holding period. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>Can I open an In-Trust-For account?</a>
                                <div className="content">
                                customercare_trust@atram.com.ph for further details. Currently, ATRAM Trust Corporation’s online investment platform, Seedbox, can only accommodate Individual accounts. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>Can I open a joint account?</a>
                                <div className="content">
                                Yes. Kindly send an email to customercare_trust@atram.com.ph for further details. Currently, ATRAM Trust Corporation’s online investment platform, Seedbox, can only accommodate Individual accounts. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>What is a Money Market Fund?</a>
                                <div className="content">
                                A money market fund is invested in liquid fixed income instruments maturing in less than a year. If you wish to invest in a fund that has minimal risk but can potentially give better returns than your regular savings account, you may consider investing in a money market fund. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>What is a Bond Fund?</a>
                                <div className="content">
                                A bond fund or a fixed income fund is invested either in direct government or corporate debt instruments, depending on the investment objective of the fund. It is considered as less risky than equities or stocks. A direct bond, on the other hand, is a debt investment with which the investor loans money to an entity that borrows the funds for a definite period at a specified interest rate. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>What is a Equity Fund?</a>
                                <div className="content">
                                An equity fund is invested in shares of stocks of various corporations. It is recommended for investors who have Aggressive risk profile who can take negative swings in fund performance in exchange for potential high returns. It is recommended that investors in an equity fund stay invested for long-term. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>What is a Feeder Fund?</a>
                                <div className="content">
                                A Feeder Fund is a UITF structure that mandates the fund to invest at least 90% of its assets in a single collective investment scheme. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>Risks Involved in Investing</a>
                                <div className="content">
                                    Investing in funds will always carry risks that correspond to the potential upside. Selection of funds depends on your appetite for risk and how you view the potential upside versus the potential downside on the investment. <br/><br/>
                                    Kindly note that UITFs are not deposit products and earnings as well as the principal are exposed to potential gain or loss. 
                                    <ul>
                                        <li>
                                        If you invest in an equity or aggressive fund (primarily invested in the stock market), there is a high potential for growth but there is also a high potential for loss since it is dependent on movements of the stock market. 
                                        </li>
                                        <li>
                                        If you are more conservative, you can invest in other funds that invest in fixed income assets. These have smaller movements where your potential upside is smaller, but your potential loss is smaller as well. 
                                        </li>
                                        <li>
                                        If you feel you are somewhere in the middle, you can go for a balanced fund that is a combination of equity and bond funds. This provides potential growth due to its investments in equity and the stability from its bond/fixed income investments. 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>What is the ROI?</a>
                                <div className="content">
                                When you invest in UITFs, you are placing your money in different asset classes such as money markets, stocks or bonds (depending on the fund that you select) that appreciate or depreciate depending on market performance of the fund. <br/><br/>
                                These are not deposit products and the principal amount and earnings are subject to appreciation or depreciation, thus there is no fixed ROI. <br/><br/>
                                Investments are long-term in nature as market prices move from day to day. <br/><br/>
                                The best way to achieve your goals is to practice cost averaging or investing at regular intervals whatever the unit price is. This allows you to buy more units when the market is down, less when the market is up. In the long run, the cost averages out and increases your odds of turning a profit. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>Can I invest in funds outside my risk profile? </a>
                                <div className="content">
                                You may invest in funds outside your risk tolerance when you waive the result of the risk profile questionnaire you answered upon registration. You will need to be aware of the potential risks involved in investing in a fund that is outside your risk tolerance. 
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a>What is the minimum initial investment? </a>
                                <div className="content">
                                Minimum initial investment starts at Php 1,000 with a minimum top up investment of Php 500 only. We do not require you to invest monthly. However, we do recommend you do regular investments (e.g. monthly, quarterly or semi-annual) so that you can establish the habit of building wealth. You can start with a small investment and build this over time.  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Default>
    );
}