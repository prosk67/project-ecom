import React from "react";


const BrandLogos = () => {
  return (
    <div className="rounded-3xl w-[70vw] bg-white py-[32px]">
      <div className="max-w-[80vw] px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          In Collaboration With
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://download.logo.wine/logo/Marshall_Amplification/Marshall_Amplification-Logo.wine.png"
            width={158}
            height={48}
            className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_vn5ckp6e/def_height/2700/def_width/2700/version/100012/type/1"
            width={158}
            height={48}
            className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="https://images.icon-icons.com/2699/PNG/512/bose_logo_icon_168497.png"
            width={158}
            height={48}
            className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="https://www.baionline.com/wp-content/uploads/2017/02/BAI-Online-Manufacturers-_0122_audiotechnica.jpg"
            width={158}
            height={48}
            className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="https://logos-world.net/wp-content/uploads/2021/08/Beats-Emblem.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
    
  
  )
}

export default BrandLogos;
