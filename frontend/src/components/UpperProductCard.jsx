import React from 'react';
import { Link } from 'react-router-dom';
const UpperProductCard=()=>{
    return (
    <div className="flex justify-between p-4 mt-2 mb-4 h-1/4vh">
  <div className="w-1/3 h-64 mx-4">
    <div className="flex flex-wrap">
      <div className="w-1/2">
        <Link to="/products">
        <img className="w-full h-auto " src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg" alt="Product Image"/>
        </Link>
      </div>
      <div className="w-1/2">
      <Link to="/products">
        <img className="w-full h-auto " src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg" alt="Product Image"/>
        </Link>
      </div>
      <div className="w-1/2">
      <Link to="/products">
        <img className="w-full h-auto" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg" alt="Product Image"/>
        </Link>
      </div>
      <div className="w-1/2">
      <Link to="/products">
        <img className="w-full h-auto" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" alt="Product Image"/>
        </Link>
      </div>
    </div>
    <div className="flex justify-center items-center">
        <Link to="/products" className="px-4 py-2 bg-white-500 text-blue rounded font-bold italic">See More</Link>
    </div>
  </div>
  <div className="w-1/3 h-64">
    <div className="flex flex-wrap">
      <div className="w-1/2">
      <Link to="/products">
        <img className="w-full h-auto" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg" alt="Product Image"/>
        </Link>
      </div>
      <div className="w-1/2">
      <Link to="/products">
        <img className="w-full h-auto" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg" alt="Product Image"/>
        </Link>
      </div>
      <div className="w-1/2">
      <Link to="/products">
        <img className="w-full h-auto" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg" alt="Product Image"/>
        </Link>
      </div>
      <div className="w-1/2">
      <Link to="/products">
        <img className="w-full h-auto" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg" alt="Product Image"/>
        </Link>
      </div>
    </div>
    <div className="flex justify-center items-center">
        <Link to="/products" className="px-4 py-2 bg-white-500 text-blue rounded font-bold italic">See More</Link>
    </div>
  </div>
  <div className="w-1/3 h-64">
    <div className="flex flex-wrap">
      <div className="w-1/2">
      <Link to="/products">
        <img className="w-full h-auto" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt._SY232_CB553870684_.jpg" alt="Product Image"/>
        </Link>
      </div>
      <div className="w-1/2">
      <Link to="/products">
        <img className="w-full h-auto" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult._SY232_CB553870684_.jpg" alt="Product Image"/>
        </Link>
      </div>
      <div className="w-1/2">
      <Link to="/products">
        <img className="w-full h-auto" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise._SY232_CB553870684_.jpg" alt="Product Image"/>
        </Link>
      </div>
      <div className="w-1/2">
      <Link to="/products">
        <img className="w-full h-auto" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Zeb._SY232_CB553870684_.jpg" alt="Product Image"/>
        </Link>
      </div>
    </div>
    <div className="flex justify-center items-center">
        <Link to="/products" className="px-4 py-2 bg-white-500 text-blue rounded font-bold italic">See More</Link>
    </div>
  </div>
  
</div>

);
};

export default UpperProductCard;