import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const TermsAndConditions = () => {
    return (

        <div>
            {/* <PageTitle title="Terms and Conditions"></PageTitle> */}
            <div id='terms' className='mt-5 text-center  '>
                <h1>TERMS AND CONDITIONS-</h1>
                <h1>WAREHOUSE AND STORAGE</h1>
                <h2>Supershop Grocery Stock</h2>
            </div>
            <div className='mt-4 border shadow-lg p-3 mb-5 '>
                <ul>
                    <li> Agreement to Terms and Conditions. It is agreed that Company Warehouse   Receipt Terms and Conditions shall govern the dealings between Company and Customer for all warehousing and storage services.</li>

                    <li> If Company determines that the original palletization of Goods must be broken down for storage purposes, Company shall be authorized to break down the pallets without further notice required to Customer.</li>

                    <li> Company will store the Goods at its discretion at any one or more buildings at Company's warehouse location identified on the front side of this Warehouse Receipt.</li>
                    <li>
                        Company may provide additional services to Customer as requested and as agreed.
                    </li>
                    <li>
                        Warehousing and storage accounts are due and payable monthly, in advance. Company will issue the monthly statement, in advance to Customer and Customer shall pay Company within 15 days of the invoice date unless otherwise agreed by the Parties in writing. All invoices not paid within 15 days of invoice date will be subject to a late fee of 1.5% per month, or the maximum rate then allowable pursuant to applicable law.
                    </li>
                    <li>
                        Company shall not be liable for any loss or destruction of or damage to the Goods, however caused, unless such loss, damage or destruction resulted from Company's failure to exercise such care in regard to the Goods as a reasonably careful person would exercise under like circumstances.
                    </li>
                    <li>
                        pilferage or theft, unless such loss or damage is caused by the failure of Company to exercise such ordinary care required by law;
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default TermsAndConditions;