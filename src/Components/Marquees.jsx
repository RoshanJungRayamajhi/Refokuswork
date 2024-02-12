import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  var images = [
    [
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576760319d7680c72bdc3_yahoo-white.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676fe55f16782a900fd_spotify.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576761f08ef9cb13e81f2_mural.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676b5110fb6f1d82849_haufe.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676b5110fb6f1d82849_haufe.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6335767510af0c1535374fbf_basf.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676ce60ad15178cb802_remind.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676418e44be467584c5_mint%20w.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576766a98bf28d587c69b_accel.svg",
    ],
    [
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576760319d7680c72bdc3_yahoo-white.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676fe55f16782a900fd_spotify.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576761f08ef9cb13e81f2_mural.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676b5110fb6f1d82849_haufe.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676b5110fb6f1d82849_haufe.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6335767510af0c1535374fbf_basf.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676ce60ad15178cb802_remind.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676418e44be467584c5_mint%20w.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576766a98bf28d587c69b_accel.svg",
    ],
  ];
  return (
    <div className="w-full mt-20 pb-16 relative overflow-hidden">
      {images.map((items, index) => (
        <Marquee direction={index === 0 ? "left" :"right"} key={index} imgurl={items} index={index} />
      ))}
    </div>
  );
};

export default Marquees;
