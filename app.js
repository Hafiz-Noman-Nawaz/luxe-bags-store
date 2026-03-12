// ===== LUXÉBAG — APP.JS =====

// ===== PRODUCT DATABASE =====
const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Synthetic Leather Handbag",
    category: "Tote Bag",
    image: "images/featured_products/tote1.jpg",
    description:
      "Synthetic Leather Handbags Tote Bag Shoulder Bag Top Handle Satchel Purse Set 4pcs",
    price: "$34.99",
    rating: "4.4",
    reviews: "13.6k",
    badge: "hot",
    badgeLabel: "🔥 Best Seller",
    amazonUrl:
      "https://www.amazon.com/Fashion-Synthetic-Leather-Handbags-Shoulder/dp/B088WDWBY9?crid=CHQ6U3P9XMYZ&dib=eyJ2IjoiMSJ9.8cwQGdg4uYHMnZxGIEVEs4y89mYvLxu0-QvYAWcGs0PgowZQz0p79ikMBV5eMWGLKxtDGqPpp9E-xlklzUJKUzS6dC01dcnrJKyUtbHojgjUe4Y6mcCORyueCCRxAyCUl014aitm4vdeI7lhBWW10jzKlvlowbXSwSOEwZhWmFccZO100zbq-nu31AiXGuiq662a-gPLGoWjzHWQzpwuoRaHauPXiPoLgFjHthWKJl4Hp7eOAkR6beCJFnTXjxmrkrhgb6k9b-M8bDOFmSU9amMWkIgR-Q8_ohDJlWshqsc.SGFI-rdfxXASqtmPF8qBLOwephS4jPZ6jPtUq_Sh59o&dib_tag=se&keywords=designer%2Btote%2Bbags%2Bfor%2Bwomen&qid=1772440605&sprefix=designer%2Btote%2Bbag%2Caps%2C1840&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1&linkCode=ll2&tag=maxine_fashion-20&linkId=e93861dcd20be431ebf4a36b77c67d2c&language=en_US&ref_=as_li_ss_tl",
    color1: "#3d2b1a",
    color2: "#5c3d20",
  },
  {
    id: 2,
    name: "BOSTANTEN Small Crossbody Bag",
    category: "Crossbody Bag",
    image: "images/featured_products/crossbody1.png",
    description: `BOSTANTEN Small Sling Bag Crossbody Bags for Women Trendy Crossbody Purse Leather Chest Bag`,
    price: "$22.99",
    rating: "4.6",
    reviews: "2.4k",
    badge: "new",
    badgeLabel: "✨ New Arrival",
    amazonUrl:
      "https://www.amazon.com/BOSTANTEN-Small-Crossbody-Trendy-Leather/dp/B0C6PLMT6X?content-id=amzn1.sym.142b989c-8a34-4cd3-bbcd-eff9a40d5095%3Aamzn1.sym.142b989c-8a34-4cd3-bbcd-eff9a40d5095&crid=3IF9DZV7AEHOC&cv_ct_cx=crossbody%2Bbags%2Bfor%2Bwomen&keywords=crossbody%2Bbags%2Bfor%2Bwomen&pd_rd_i=B0C6PLMT6X&pd_rd_r=89784d53-6238-4509-af24-558746ec6725&pd_rd_w=h5Q06&pd_rd_wg=haPVc&pf_rd_p=142b989c-8a34-4cd3-bbcd-eff9a40d5095&pf_rd_r=TVCHMQ88FZKVYHZ714HF&qid=1772441297&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=cross%2Bbags%2Bfor%2Bwomen%2Caps%2C1160&sr=1-1-5fce89f9-8fc5-4b48-8d54-c61c70c1ff46-spons&aref=uEn4WDrnFR&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=maxine_fashion-20&linkId=0d914364e643a8eccd18c2aff0177747&language=en_US&ref_=as_li_ss_tl",
    color1: "#1a2a3d",
    color2: "#203a5c",
  },
  {
    id: 3,
    name: "TINDTOP Clutch Purse",
    category: "Clutch Purse",
    image: "images/featured_products/clutch1.png",
    description:
      "TINDTOP Clutch Purses for Women Evening Handbags for Formal Wedding Party Cocktail Prom Crossbody Shoulder Envelope Bag.",
    price: "$15.99",
    rating: "4.5",
    reviews: "525",
    badge: null,
    badgeLabel: null,
    amazonUrl:
      "https://www.amazon.com/TINDTOP-Handbags-Cocktail-Crossbody-Shoulder/dp/B0F9W7NR1Y?crid=2W3FRH88TIHSW&dib=eyJ2IjoiMSJ9.cOa9y99QOUGO_RW9NYB5TPAWFvPZ10R7yMxFUvmNUJNl1aSx0Aq2dE7VJfoMVhZB-0xZqa8xC3zNTO_yqDhD2Y2F_se0RJt_ic8k9l_C3Wo8w7FXewADZ4IGzZBn3Fk3zI9fISTNPBkxQYcP7Ur2-BctkVCv-z3UAvvTcHNWRT6tQoDLKjrnpAbnqBHf_EBqF3hssBMcMDV6dU3C7Ncg8UlwCxo0Hbr8Ltdr-YKPmS9CSr883IWOXtDsMlG3Rau9HkK8w_JTk_Joy_QLi0exYTX0uWO1RCtpHiCjsFcYO64.jvtwONzPRi12-zNT2zTFqVcWLWhQ5gepOpqW4ZNmrkg&dib_tag=se&keywords=clutch%2Bpurses%2Bfor%2Bwomen&qid=1772443212&sprefix=clutch%2Bp%2Caps%2C1009&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=maxine_fashion-20&linkId=268316d05faed0602b0cefa33abd1972&language=en_US&ref_=as_li_ss_tl",
    color1: "#2a1a3d",
    color2: "#3d205c",
  },
  {
    id: 4,
    name: "Adele Bucket Bag",
    category: "Bucket Bag",
    image: "images/featured_products/bucket1.jpg",
    description: "KARL LAGERFELD Paris Women's Adele Bucket Bag.",
    price: "$99.00",
    rating: "4.6",
    reviews: "139",
    badge: "sale",
    badgeLabel: "💸 On Sale",
    amazonUrl:
      "https://www.amazon.com/Lagerfeld-Paris-Adele-Bucket-White/dp/B0DWYJQNNF?crid=130OGGJPTYOK3&dib=eyJ2IjoiMSJ9.24vA3I5zIWZPzw3seKZEDSg9QB1HzDo2_d1-mBRsT_nCjHdDCS5OVMVuLcqnS7bpGrCFvCh7yBqIx7nwxTJnaOKIwyGEEB51Nk058w6Vf3u50xVBnUTdgB6WIrW1e0bxSv5G5imYopAQk6Uic6EJ15q0WtSzYTq_lJk2a_38GuJsim-fiwv-f6zLEHcF6K7auGtDH2Jwn3mx93fcY1S_Nob8hkIuj4pn9p_gPbcUyiCbxu1fxJxjXObxHDcquQ6MW8mv9MlE41U8oij7i8AQqsJLZlBUXW6tdSKPfODASXA.B5q926Uzo91JX2NdJvDE02UiQgwPls9S5SSII5p5cS4&dib_tag=se&keywords=bucket%2Bbags%2Bfor%2Bwomen&qid=1772446126&sprefix=bucket%2B%2Caps%2C2384&sr=8-10&th=1&psc=1&linkCode=ll2&tag=maxine_fashion-20&linkId=800c09bf09219a963b23f68d6eb27dde&language=en_US&ref_=as_li_ss_tl",
    color1: "#3d1a1a",
    color2: "#5c2020",
  },
  {
    id: 5,
    name: "Shoulder Tote Bags Top Handle Satchel",
    category: "Shoulder Bag",
    image: "images/featured_products/shoulder1.jpg",
    description:
      "Purses and Handbags for Women Shoulder Tote Bags Top Handle Satchel, 3 card slots. Luxury in your palm.",
    price: "$30.99",
    rating: "4.4",
    reviews: "12k",
    badge: "hot",
    badgeLabel: "🔥 Trending",
    amazonUrl:
      "https://www.amazon.com/COCIFER-Purses-Handbags-Women-Shoulder-Satchel/dp/B082V17SB4?crid=TZBV0YDT1WJH&dib=eyJ2IjoiMSJ9.Z-sD9_LTW0nRsLGV7EAThAXckPE8hQz30pzwYE98m6AyH3m1Xx0YwctYy_wm_LswK47vAsIUmgEn1btA8tc6VIMVZgN3gtPkqyJap3ZL8Wj6MLC9U2AHZ6znkOuwd0-TJj-zIhAMqB4MPpsmRz9BQZwDdc6J0IVaJctYC2XBrwTWkEeO9ZGhY_wp4C7R66BNdSPYG0WWhuRLoO-cEewWt3OrPjQwWC9dxDKUIEniLZJJCFGosWHtNSK8tvJDTV9ki3vUHNqcFe4KzEIN6AUfBGjDYPNnKJCKl2oG2myuY0s.NeW7a9o8COMb58PtSIHlHAATiTXSGPqJ-PBWXyfYpso&dib_tag=se&keywords=shoulderbags%2Bfor%2Bwomen&qid=1772446488&sprefix=shoulderbags%2Bfor%2Bwomen%2Caps%2C806&sr=8-7&th=1&linkCode=ll2&tag=maxine_fashion-20&linkId=5215fdcf1b136a53772666e948f33a8e&language=en_US&ref_=as_li_ss_tl",
    color1: "#2a3d1a",
    color2: "#3a5c20",
  },
  {
    id: 6,
    name: "Travel Weekender Bag",
    category: "Travel Bag",
    image: "images/featured_products/travel1.jpg",
    description: `Travel Weekender Bag for Women, 21" Overnight Bag with Shoe Compartment 50L Large Travel Duffel Bag Carry On Tote for Weekend, Overnight, Business Trips, Water Resistant`,
    price: "$38.99",
    rating: "4.5",
    reviews: "3.3k",
    badge: null,
    badgeLabel: null,
    amazonUrl:
      "https://www.amazon.com/Weekender-Overnight-Compartment-Oversized-Business/dp/B0B8HF3BQ9?content-id=amzn1.sym.142b989c-8a34-4cd3-bbcd-eff9a40d5095%3Aamzn1.sym.142b989c-8a34-4cd3-bbcd-eff9a40d5095&crid=9Y8DZ7FCDJI0&cv_ct_cx=travel%2Bbags%2Bfor%2Bwomen&keywords=travel%2Bbags%2Bfor%2Bwomen&pd_rd_i=B0B8HF3BQ9&pd_rd_r=2cd6c2e2-974d-4ffa-8efb-bb61059fb492&pd_rd_w=mikxK&pd_rd_wg=NI1mc&pf_rd_p=142b989c-8a34-4cd3-bbcd-eff9a40d5095&pf_rd_r=VBHZHJ26443ZFR347NVB&qid=1772446711&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=travel%2Bbags%2Bfor%2Bwomen%2Caps%2C2841&sr=1-1-5fce89f9-8fc5-4b48-8d54-c61c70c1ff46-spons&aref=KgFfkH8f6T&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=maxine_fashion-20&linkId=d79934c72538a6fe4590195b4223a6b8&language=en_US&ref_=as_li_ss_tl",
    color1: "#1a1a2a",
    color2: "#20203d",
  },
];

const TRENDING_PRODUCTS = [
  {
    id: 7,
    name: "Angel Kiss Hobo Purse",
    category: "Hobo Bag",
    image: "images/trending_products/hobo1.jpg",
    description:
      "Angel Kiss Handbags for Womens Top-Handle Hobo Purse Roomy Casual Shoulder Bags PU Tote Satchel Purse for Women",
    price: "$33.99",
    rating: "4.4",
    reviews: "3.5k",
    badge: "hot",
    badgeLabel: "🔥 Viral Pick",
    amazonUrl:
      "https://www.amazon.com/gp/aw/d/B0739TY3TD?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=9180729d31bac9557e8691ac1bdf4f5a&hsa_cr_id=0&qid=1772447379&sr=1-1-9e67e56a-6f64-441f-a281-df67fc737124&pd_rd_w=4fF7E&content-id=amzn1.sym.9f2b2b9e-47e9-4764-a4dc-2be2f6fca36d%3Aamzn1.sym.9f2b2b9e-47e9-4764-a4dc-2be2f6fca36d&pf_rd_p=9f2b2b9e-47e9-4764-a4dc-2be2f6fca36d&pf_rd_r=H1ZAJXTRET92JJSHGQ7E&pd_rd_wg=S8mvx&pd_rd_r=a8702ace-4a72-4809-9ad5-40b01f8cae90&th=1&linkCode=ll2&tag=maxine_fashion-20&linkId=475816a4704858890b9aca3abc59b861&language=en_US&ref_=as_li_ss_tl",
    color1: "#3d2b0a",
    color2: "#5c421a",
  },
  {
    id: 8,
    name: "LOVEVOOK Satchel Black Purse",
    category: "Satchel",
    image: "images/trending_products/satchel1.jpg",
    description:
      "LOVEVOOK Purses and Handbags for Women, Tote Shoulder Bag Satchel Black Purse and PU Leather Top Handle for ladies",
    price: "$28.99",
    rating: "4.6",
    reviews: "1.5k",
    badge: "new",
    badgeLabel: "✨ Just In",
    amazonUrl:
      "https://www.amazon.com/LOVEVOOK-Handbags-Shoulder-Satchel-Leather/dp/B0CCYFPSQJ?crid=3L19HNAKXCBM8&dib=eyJ2IjoiMSJ9.xS98VSbBv2Q8H103wjqBn7YGQHdiIGLDkR2ZQY8LyEIjZjuC4Eqq2DY3vVc-SyLVC9wwBjExY3JHG5VcoLgjQe1-LcvGVayo-sfgqHHpwcLbdHqxVD8joP5rBadYsOlDN7e_Y5p9wEdTrcc5L7p8bM8D5klVqmQNgp3Gw_ExmUZU5f5_DvcfqrZ8HTULCTA7d1P2isHFHLY78I3z0B8w4Mp9Klk3D2-LbCHCkAVlH2VpXA6npL365AjuiMcEmq7M0AErgt6AQkGUuBDNlxUFycZlIVC-pzlKiWl26Mmw604.G8cX4J8O_myGOl9G6ReIKrgGvIiKQgvFjuf_pqln54M&dib_tag=se&keywords=satchel%2Bpurses%2Bfor%2Bwomen&qid=1772448061&sprefix=Satchel%2B%2Caps%2C920&sr=8-10&th=1&linkCode=ll2&tag=maxine_fashion-20&linkId=9a956ccb001dc11068ef3e4a6a82d656&language=en_US&ref_=as_li_ss_tl",
    color1: "#1a3d2b",
    color2: "#205c42",
  },
  {
    id: 9,
    name: `Michael Kors Double Zip Wristlet`,
    category: "Wristlet",
    image: "images/trending_products/wristlet1.jpg",
    description: `Michael Kors Women's Jet Set Double Zip Wristlet`,
    price: "$129.50",
    rating: "4.7",
    reviews: "2.6k",
    badge: null,
    badgeLabel: null,
    amazonUrl:
      "https://www.amazon.com/Michael-Kors-Double-Wristlet-Vanilla/dp/B097DCV87P?crid=2TU8LCCLKN4VN&dib=eyJ2IjoiMSJ9.S6TKjjTHGpNAVzgyqP_pr0vIAYUZZcuxPU52YBqUuLGbzfl6aDL1M2MZt662C4g37shUo0mqFj9iypqx5_Y9n7uLBN581Yt1rDgD_vKvwh3x32dpZzyAOvf6W5W6Upb8zTdVcVtdZavE7qTMe_gSr4GzPGQHpgJpgpdOTk4lIenZxw3gViWU-eWDh9ZJviZzdAXxuYxmgZ8GWTxIIKBDzRHJ0UsHnEUULo4klHlvLS0Oxubf8TMbWj9Sg6Rn2h5HksOU69Pel18FbuSz9IWg7KFCng_PHV4zbpfsbJ3gJBQ.70kgwYsxBeL1XPN4JVLCtvxrHx9InlbCBoAAGudSFnI&dib_tag=se&keywords=trending%2Bwristlet%2Bfor%2Bwomen&qid=1772448448&sprefix=trendingwristlet%2Bfor%2Bwomen%2Caps%2C694&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1&linkCode=ll2&tag=maxine_fashion-20&linkId=82dd53c3329b386fca67fdf964f48d0a&language=en_US&ref_=as_li_ss_tl",
    color1: "#3d1a2b",
    color2: "#5c203f",
  },
  {
    id: 10,
    name: "PINCNEL Women Backpack",
    category: "Fashion Backpack",
    image: "images/trending_products/backpack1.jpg",
    description:
      "PINCNEL Women Backpack Purse Waterproof Nylon Anti-theft Rucksack Lightweight Shoulder Bag",
    price: "$26.99",
    rating: "4.6",
    reviews: "19.8k",
    badge: "sale",
    badgeLabel: "💸 Deal",
    amazonUrl:
      "https://www.amazon.com/Backpack-Waterproof-Anti-theft-Rucksack-Lightweight/dp/B07C9ZMGRF?crid=3147ZO0A8I5EU&dib=eyJ2IjoiMSJ9.K_zbC9AjmkI9EyFOOEomamWa1lSEMilXeeefyLpyxtJP3YR_46x0kCasBgcc1bLGz7BJwHbKDdqLMKNNNE2WrvYvRCwRzSVGABDVPmrxhjAjwyD8F_jp9T4h-0KglEd6eIPiqt9wjAspWRFcBrNavz0cyk4qnBdR0bx9kmKX46UoS7-Yesn5zZTO8_zu6JfPrKF_1C534P2gctC7pRuqahQVQ0CEGsLbCH2aqagKaACpEXaG-u5x5E-YWzwgOp1FrOvf4CJND0FcTK4FJ-2LXwy471OTSVqsTOCxwPkP8V8.fzXS59_aHzDEE7g-STZlS6RHfBAYQLjWUe3MRmkQcvs&dib_tag=se&keywords=fashion%2Bbackpack%2Bfor%2Bwomen&qid=1772449008&sprefix=fashion%2Bback%2Bfor%2Bwomen%2Caps%2C1772&sr=8-9&th=1&linkCode=ll2&tag=maxine_fashion-20&linkId=c19334bbcec7748b8e558e8f0fcb1e66&language=en_US&ref_=as_li_ss_tl",
    color1: "#0a1a3d",
    color2: "#10255c",
  },
];

// ===== BAG SVG GENERATOR =====
function getBagSVG(style, c1, c2) {
  const svgs = {
    tote: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="38" width="100" height="88" rx="8" fill="url(#bg${style})" stroke="${c2}" stroke-width="1.5" opacity="0.9"/>
      <path d="M32 38 Q32 16 60 16 Q88 16 88 38" stroke="${c2}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <line x1="10" y1="60" x2="110" y2="60" stroke="${c2}" stroke-opacity="0.4" stroke-width="1.5"/>
      <rect x="44" y="68" width="32" height="22" rx="5" stroke="${c2}" stroke-width="1.8" fill="none"/>
      <circle cx="60" cy="79" r="3" fill="${c2}" opacity="0.8"/>
      <defs><linearGradient id="bg${style}" x1="10" y1="38" x2="110" y2="126" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c1}cc"/>
      </linearGradient></defs>
    </svg>`,
    cross: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="50" width="84" height="72" rx="6" fill="url(#bg${style})" stroke="${c2}" stroke-width="1.5"/>
      <path d="M40 50 Q40 32 60 32 Q80 32 80 50" stroke="${c2}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M4 80 Q18 72 18 80 L18 108 Q18 116 4 108 Z" fill="${c1}" stroke="${c2}" stroke-width="1"/>
      <path d="M116 80 Q102 72 102 80 L102 108 Q102 116 116 108 Z" fill="${c1}" stroke="${c2}" stroke-width="1"/>
      <line x1="18" y1="68" x2="102" y2="68" stroke="${c2}" stroke-opacity="0.4" stroke-width="1.5"/>
      <rect x="48" y="76" width="24" height="18" rx="4" stroke="${c2}" stroke-width="1.8" fill="none"/>
      <defs><linearGradient id="bg${style}" x1="18" y1="50" x2="102" y2="122" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c1}bb"/>
      </linearGradient></defs>
    </svg>`,
    clutch: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="48" width="100" height="54" rx="27" fill="url(#bg${style})" stroke="${c2}" stroke-width="1.5"/>
      <ellipse cx="60" cy="75" rx="14" ry="14" stroke="${c2}" stroke-width="1.8" fill="none"/>
      <circle cx="60" cy="75" r="4" fill="${c2}" opacity="0.7"/>
      <line x1="10" y1="75" x2="46" y2="75" stroke="${c2}" stroke-opacity="0.3" stroke-width="1"/>
      <line x1="74" y1="75" x2="110" y2="75" stroke="${c2}" stroke-opacity="0.3" stroke-width="1"/>
      <defs><linearGradient id="bg${style}" x1="10" y1="48" x2="110" y2="102" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c1}bb"/>
      </linearGradient></defs>
    </svg>`,
    bucket: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 42 L15 118 Q15 124 20 124 L100 124 Q105 124 105 118 L95 42 Z" fill="url(#bg${style})" stroke="${c2}" stroke-width="1.5"/>
      <path d="M40 42 Q40 22 60 22 Q80 22 80 42" stroke="${c2}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <line x1="25" y1="60" x2="95" y2="60" stroke="${c2}" stroke-opacity="0.4" stroke-width="1.5"/>
      <circle cx="60" cy="52" r="6" stroke="${c2}" stroke-width="1.5" fill="none"/>
      <defs><linearGradient id="bg${style}" x1="15" y1="42" x2="105" y2="124" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c1}cc"/>
      </linearGradient></defs>
    </svg>`,
    shoulder: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="50" width="96" height="76" rx="10" fill="url(#bg${style})" stroke="${c2}" stroke-width="1.5"/>
      <path d="M32 50 Q32 30 60 30 Q88 30 88 50" stroke="${c2}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M12 72 L108 72" stroke="${c2}" stroke-opacity="0.4" stroke-width="1.5"/>
      <rect x="40" y="80" width="40" height="28" rx="6" stroke="${c2}" stroke-width="1.8" fill="none"/>
      <line x1="53" y1="94" x2="67" y2="94" stroke="${c2}" stroke-width="2" stroke-linecap="round"/>
      <defs><linearGradient id="bg${style}" x1="12" y1="50" x2="108" y2="126" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c1}cc"/>
      </linearGradient></defs>
    </svg>`,
    weekender: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="42" width="108" height="74" rx="10" fill="url(#bg${style})" stroke="${c2}" stroke-width="1.5"/>
      <path d="M36 42 Q36 28 60 28 Q84 28 84 42" stroke="${c2}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <line x1="6" y1="68" x2="114" y2="68" stroke="${c2}" stroke-opacity="0.4" stroke-width="1.5"/>
      <rect x="40" y="76" width="40" height="24" rx="4" stroke="${c2}" stroke-width="1.5" fill="none"/>
      <path d="M40 116 L8 116" stroke="${c2}" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
      <path d="M80 116 L112 116" stroke="${c2}" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
      <defs><linearGradient id="bg${style}" x1="6" y1="42" x2="114" y2="116" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c1}cc"/>
      </linearGradient></defs>
    </svg>`,
    hobo: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 60 Q8 80 10 100 Q12 124 60 124 Q108 124 110 100 Q112 80 100 60 Q88 40 60 40 Q32 40 20 60Z" fill="url(#bg${style})" stroke="${c2}" stroke-width="1.5"/>
      <path d="M40 40 Q40 22 60 22 Q80 22 80 40" stroke="${c2}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M30 82 Q60 74 90 82" stroke="${c2}" stroke-opacity="0.5" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <defs><linearGradient id="bg${style}" x1="10" y1="40" x2="110" y2="124" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c1}cc"/>
      </linearGradient></defs>
    </svg>`,
    satchel: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="36" width="104" height="84" rx="8" fill="url(#bg${style})" stroke="${c2}" stroke-width="1.5"/>
      <rect x="36" y="20" width="48" height="20" rx="4" fill="${c1}" stroke="${c2}" stroke-width="1.5"/>
      <line x1="8" y1="62" x2="112" y2="62" stroke="${c2}" stroke-opacity="0.4" stroke-width="1.5"/>
      <rect x="42" y="72" width="36" height="26" rx="5" stroke="${c2}" stroke-width="1.8" fill="none"/>
      <path d="M53 85 Q60 80 67 85" stroke="${c2}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <defs><linearGradient id="bg${style}" x1="8" y1="36" x2="112" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c1}cc"/>
      </linearGradient></defs>
    </svg>`,
    wristlet: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="46" width="80" height="66" rx="8" fill="url(#bg${style})" stroke="${c2}" stroke-width="1.5"/>
      <path d="M60 46 L60 30 Q60 24 54 24 L50 24" stroke="${c2}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <line x1="20" y1="66" x2="100" y2="66" stroke="${c2}" stroke-opacity="0.4" stroke-width="1.5"/>
      <rect x="44" y="74" width="32" height="22" rx="4" stroke="${c2}" stroke-width="1.8" fill="none"/>
      <circle cx="60" cy="85" r="3" fill="${c2}" opacity="0.8"/>
      <defs><linearGradient id="bg${style}" x1="20" y1="46" x2="100" y2="112" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c1}cc"/>
      </linearGradient></defs>
    </svg>`,
    backpack: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="32" width="84" height="92" rx="10" fill="url(#bg${style})" stroke="${c2}" stroke-width="1.5"/>
      <path d="M40 32 Q40 16 60 16 Q80 16 80 32" stroke="${c2}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <line x1="18" y1="60" x2="102" y2="60" stroke="${c2}" stroke-opacity="0.4" stroke-width="1.5"/>
      <rect x="34" y="68" width="52" height="36" rx="6" stroke="${c2}" stroke-width="1.5" fill="none"/>
      <line x1="60" y1="68" x2="60" y2="104" stroke="${c2}" stroke-opacity="0.3" stroke-width="1"/>
      <defs><linearGradient id="bg${style}" x1="18" y1="32" x2="102" y2="124" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c1}cc"/>
      </linearGradient></defs>
    </svg>`,
  };
  return svgs[style] || svgs.tote;
}

function getCategoryStyle(category) {
  const map = {
    "Tote Bag": "tote",
    "Crossbody Bag": "cross",
    "Clutch Purse": "clutch",
    "Bucket Bag": "bucket",
    "Shoulder Bag": "shoulder",
    "Travel Bag": "weekender",
    "Hobo Bag": "hobo",
    Satchel: "satchel",
    Wristlet: "wristlet",
    "Fashion Backpack": "backpack",
  };
  return map[category] || "tote";
}

// ===== PERSONALIZATION =====
const PERSONAL_MESSAGES = [
  "This would look amazing on you, {name}! ✨",
  "Definitely made for {name} 💫",
  "{name}, this one's calling your name!",
  "Perfect pick for {name}'s collection",
  "{name} would absolutely slay with this 💖",
  "We think {name} needs this in their life ✨",
  "Imagine {name} rocking this look 🔥",
  "This was practically made for {name}!",
];

function getUserName() {
  return localStorage.getItem("luxebag_username") || "";
}

function getPersonalMessage(name) {
  if (!name) return "";
  const msg = PERSONAL_MESSAGES[Math.floor(Math.random() * PERSONAL_MESSAGES.length)];
  return msg.replace(/{name}/g, name);
}

// ===== RENDER PRODUCT CARD =====
function renderProduct(product) {
  const style = getCategoryStyle(product.category);
  const svg = getBagSVG(style + product.id, product.color1, product.color2);
  const userName = getUserName();

  const badgeHTML = product.badge
    ? `<div class="card-badge badge-${product.badge}">${product.badgeLabel}</div>`
    : "";

  const personalMsgHTML = userName
    ? `<div class="card-personal-msg">${getPersonalMessage(userName)}</div>`
    : "";

  return `
    <a href="${product.amazonUrl}" target="_blank" rel="noopener noreferrer" class="product-card sr">
      <div class="card-img-wrap">
        ${badgeHTML}
        <div class="card-img">
          ${
            product.image
              ? `<img src="${product.image}" alt="${product.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;"/>`
              : svg
          }
        </div>
        <div class="card-overlay">
          <div class="card-amazon-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.3 12.6c-.3-.2-.7-.1-.9.2C18.3 16 15.3 18 12 18c-3.2 0-6.3-1.9-8.3-5-.2-.3-.6-.4-.9-.2-.3.2-.4.6-.2.9C4.7 17.4 8.2 19.5 12 19.5c3.7 0 7.2-2 9.3-5.3.2-.3.2-.7-.1-.6z"/>
              <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
            </svg>
            View on Amazon
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-category">${product.category}</div>
        <div class="card-name">${product.name}</div>
        <div class="card-desc">${product.description}</div>
        ${personalMsgHTML}
        <div class="card-footer">
          <div class="card-price">${product.price}</div>
          <div class="card-rating">
            ★ ${product.rating} <span>(${product.reviews})</span>
          </div>
        </div>
      </div>
    </a>
  `;
}

// ===== CATEGORY CAROUSEL RENDERING =====
function renderCategoryCarousel(category, products) {
  const productsHTML = products.map(renderProduct).join("");
  return `
    <div class="category-group">
      <div class="category-group-header">
        <h3 class="category-group-title">${category}</h3>
        <div class="carousel-nav">
          <button class="carousel-arrow carousel-prev" aria-label="Previous">‹</button>
          <button class="carousel-arrow carousel-next" aria-label="Next">›</button>
        </div>
      </div>
      <div class="category-carousel-wrap">
        <div class="category-carousel">
          ${productsHTML}
        </div>
      </div>
    </div>
  `;
}

function mountCategorizedProducts(containerId, products, searchQuery) {
  const container = document.getElementById(containerId);
  if (!container) return 0;

  // Filter by search if needed
  let filtered = products;
  if (searchQuery) {
    filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery),
    );
  }

  // Group by category
  const groups = {};
  filtered.forEach((p) => {
    if (!groups[p.category]) groups[p.category] = [];
    groups[p.category].push(p);
  });

  // Render each group
  container.innerHTML = Object.entries(groups)
    .map(([cat, prods]) => renderCategoryCarousel(cat, prods))
    .join("");

  // Init carousel buttons
  container.querySelectorAll(".category-group").forEach((group) => {
    const carousel = group.querySelector(".category-carousel");
    const prev = group.querySelector(".carousel-prev");
    const next = group.querySelector(".carousel-next");
    if (prev && next && carousel) {
      prev.addEventListener("click", () => {
        carousel.scrollBy({ left: -300, behavior: "smooth" });
      });
      next.addEventListener("click", () => {
        carousel.scrollBy({ left: 300, behavior: "smooth" });
      });
    }
  });

  // Scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  container.querySelectorAll(".sr").forEach((el) => observer.observe(el));

  return filtered.length;
}

// ===== SEARCH =====
let currentSearchQuery = "";

function refreshAll() {
  const featuredCount = mountCategorizedProducts(
    "featuredCarousels",
    FEATURED_PRODUCTS,
    currentSearchQuery,
  );
  const trendingCount = mountCategorizedProducts(
    "trendingCarousels",
    TRENDING_PRODUCTS,
    currentSearchQuery,
  );

  const info = document.getElementById("searchResultsInfo");
  if (info) {
    if (currentSearchQuery) {
      const total = featuredCount + trendingCount;
      info.textContent = `${total} result${total !== 1 ? "s" : ""} found for "${currentSearchQuery}"`;
    } else {
      info.textContent = "";
    }
  }
}

function initSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    currentSearchQuery = searchInput.value.trim().toLowerCase();
    if (searchClear) {
      searchClear.classList.toggle("visible", searchInput.value.length > 0);
    }
    refreshAll();
  });

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      currentSearchQuery = "";
      searchClear.classList.remove("visible");
      refreshAll();
      searchInput.focus();
    });
  }
}

// ===== NAME MODAL =====
function initNameModal() {
  const overlay = document.getElementById("nameModal");
  const form = document.getElementById("nameForm");
  const input = document.getElementById("nameInput");
  if (!overlay || !form || !input) return;

  const existingName = getUserName();
  if (existingName) {
    // Already have name, update personalization
    updatePersonalization(existingName);
    return;
  }

  // Show modal with slight delay for page to render
  setTimeout(() => {
    overlay.classList.add("active");
    input.focus();
  }, 800);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = input.value.trim();
    if (!name) return;

    localStorage.setItem("luxebag_username", name);

    // Close animation
    overlay.classList.add("closing");
    setTimeout(() => {
      overlay.classList.remove("active", "closing");
      overlay.style.display = "none";
      updatePersonalization(name);
      // Refresh products to show personal messages
      refreshAll();
    }, 500);
  });
}

function updatePersonalization(name) {
  // Desktop nav greeting
  const greeting = document.getElementById("userGreeting");
  if (greeting) {
    greeting.textContent = `Hi, ${name} 👋`;
  }
  // Mobile greeting
  const mobileGreeting = document.getElementById("mobileUserGreeting");
  if (mobileGreeting) {
    mobileGreeting.textContent = `Hi, ${name} ✨`;
  }
}

// ===== THEME TOGGLE =====
function initTheme() {
  const saved = localStorage.getItem("luxebag_theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);

  const toggle = document.getElementById("themeToggle");
  const mobileToggle = document.getElementById("mobileThemeToggle");

  function switchTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("luxebag_theme", next);
  }

  if (toggle) toggle.addEventListener("click", switchTheme);
  if (mobileToggle) mobileToggle.addEventListener("click", switchTheme);
}

// ===== LOADING STATES =====
function getLoaderMessages(name) {
  if (name) {
    return [
      `Loading bags for ${name}...`,
      `Curating the perfect picks for ${name}...`,
      `Bringing luxury to ${name}'s doorstep...`,
      `Finding ${name}'s next favorite bag...`,
    ];
  }
  return [
    "Curating the best picks for you...",
    "Loading luxury bags...",
    "Bringing the best bags to you...",
  ];
}

function showLoadersWithDelay(callback) {
  const name = getUserName();
  const messages = getLoaderMessages(name);

  // Set personalized loader text
  const featuredText = document.getElementById("featuredLoaderText");
  const trendingText = document.getElementById("trendingLoaderText");
  if (featuredText) featuredText.textContent = messages[Math.floor(Math.random() * messages.length)];
  if (trendingText) trendingText.textContent = messages[Math.floor(Math.random() * messages.length)];

  // Preload images then show products
  const allProducts = [...FEATURED_PRODUCTS, ...TRENDING_PRODUCTS];
  const imageUrls = allProducts.filter((p) => p.image).map((p) => p.image);

  let loaded = 0;
  const minDelay = 1200; // Minimum show time for loader
  const startTime = Date.now();

  function checkDone() {
    loaded++;
    if (loaded >= imageUrls.length) {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDelay - elapsed);
      setTimeout(() => {
        // Hide loaders
        const fl = document.getElementById("featuredLoader");
        const tl = document.getElementById("trendingLoader");
        if (fl) fl.classList.add("hidden");
        if (tl) tl.classList.add("hidden");

        // Show carousels
        const fc = document.getElementById("featuredCarousels");
        const tc = document.getElementById("trendingCarousels");
        if (fc) fc.style.display = "block";
        if (tc) tc.style.display = "block";

        // Mount products
        callback();
      }, remaining);
    }
  }

  if (imageUrls.length === 0) {
    setTimeout(() => {
      const fl = document.getElementById("featuredLoader");
      const tl = document.getElementById("trendingLoader");
      if (fl) fl.classList.add("hidden");
      if (tl) tl.classList.add("hidden");
      const fc = document.getElementById("featuredCarousels");
      const tc = document.getElementById("trendingCarousels");
      if (fc) fc.style.display = "block";
      if (tc) tc.style.display = "block";
      callback();
    }, minDelay);
    return;
  }

  imageUrls.forEach((url) => {
    const img = new Image();
    img.onload = checkDone;
    img.onerror = checkDone;
    img.src = url;
  });
}

// ===== CUSTOM CURSOR =====
function initCursor() {
  const cursor = document.getElementById("cursor");
  const dot = document.getElementById("cursorDot");
  if (!cursor || !dot) return;

  document.addEventListener("mousemove", (e) => {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener(
      "mouseenter",
      () => (cursor.style.transform = "translate(-50%,-50%) scale(1.5)"),
    );
    el.addEventListener(
      "mouseleave",
      () => (cursor.style.transform = "translate(-50%,-50%) scale(1)"),
    );
  });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  document.querySelectorAll(".sr").forEach((el) => observer.observe(el));
}

// ===== NAV SCROLL =====
function initNav() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// ===== MOBILE MENU =====
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  navToggle.querySelectorAll("span").forEach((s) => {
    s.style.transform = "";
    s.style.opacity = "";
  });
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    const spans = navToggle.querySelectorAll("span");
    if (isOpen) {
      spans[0].style.transform = "translateY(6.5px) rotate(45deg)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "translateY(-6.5px) rotate(-45deg)";
    } else {
      closeMobileMenu();
    }
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  // Theme first (instant, no flash)
  initTheme();

  // Name modal (shows if no name saved)
  initNameModal();

  // Show loaders, preload images, then mount products
  showLoadersWithDelay(() => {
    refreshAll();
    initSearch();
    initCursor();
    initNav();
    setTimeout(initScrollReveal, 100);
  });
});
