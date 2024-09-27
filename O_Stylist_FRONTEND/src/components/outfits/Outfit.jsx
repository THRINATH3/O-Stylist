
  const occasionsWithEmojis = [
    { occasion: "Birthday Parties", emoji: "🎉🎂" },
    { occasion: "Weddings", emoji: "💒👰🤵" },
    { occasion: "Graduation Ceremonies", emoji: "🎓🏅" },
    { occasion: "Job Interviews", emoji: "💼📝" },
    { occasion: "First Dates", emoji: "❤️🍽️" },
    { occasion: "Corporate Events", emoji: "🏢📊" },
    { occasion: "Holiday Parties", emoji: "🎄🎆" },
    { occasion: "Casual Outings", emoji: "👕👟" },
    { occasion: "Formal Dinners", emoji: "🍷🍽️" },
    { occasion: "Beach Vacations", emoji: "🏖️🌊" },
    { occasion: "Baby Showers", emoji: "👶🎀" },
    { occasion: "Bridal Showers", emoji: "👰💍" },
    { occasion: "Cocktail Parties", emoji: "🍸🍹" },
    { occasion: "Themed Parties", emoji: "🎃👗" },
    { occasion: "Religious Ceremonies", emoji: "⛪🕌" },
    { occasion: "Sports Events", emoji: "⚽🏀" },
    { occasion: "Traveling", emoji: "✈️🧳" },
    { occasion: "Housewarming Parties", emoji: "🏡🎁" },
    { occasion: "Anniversary Celebrations", emoji: "💑🎉" },
    { occasion: "Reunions", emoji: "👨‍👩‍👧‍👦🎉" },
    { occasion: "Fashion Shows", emoji: "👗👠" },
    { occasion: "Art Gallery Openings", emoji: "🖼️🎨" },
    { occasion: "Club Nights", emoji: "💃🕺" },
    { occasion: "Concerts Or Music Festivals", emoji: "🎤🎸" },
    { occasion: "Funerals Or Memorial Services", emoji: "🖤💐" },
  ];  
  
// outfits.jsx

const malephotos=[
  
]

let maleOutfits = {
    "Birthday Parties": {
      "Skinny Short": [
        {
          top: "Casual button-down shirt",
          bottom: "Slim-fit shorts",
          shoes: "Loafers",
          description: "A casual button-down shirt paired with slim-fit shorts and loafers, ideal for a birthday celebration."
        },
        {
          top: "Short-sleeve floral shirt",
          bottom: "Chino shorts",
          shoes: "Slip-ons",
          description: "A short-sleeve floral shirt with chino shorts and slip-ons for a more festive look."
        },
        {
          top: "Graphic tee",
          bottom: "Denim shorts",
          shoes: "Sneakers",
          description: "A relaxed graphic tee with denim shorts and sneakers, perfect for a casual birthday party."
        }
      ],
      "Skinny Tall": [
        {
          top: "Graphic tee",
          bottom: "Chinos",
          shoes: "Sneakers",
          description: "A graphic tee with chinos and sneakers, perfect for a relaxed birthday party."
        },
        {
          top: "Casual button-down shirt",
          bottom: "Slim-fit jeans",
          shoes: "Loafers",
          description: "A casual button-down shirt with slim-fit jeans and loafers for a more refined look."
        },
        {
          top: "Short-sleeve shirt",
          bottom: "Tailored shorts",
          shoes: "Slip-ons",
          description: "A short-sleeve shirt with tailored shorts and slip-ons for a comfortable yet stylish birthday outfit."
        }
      ],
      "Skinny Average": [
        {
          top: "Casual button-down shirt",
          bottom: "Chinos",
          shoes: "Loafers",
          description: "A relaxed look with a casual button-down shirt, chinos, and loafers, suitable for celebrating birthdays."
        },
        {
          top: "Fitted polo shirt",
          bottom: "Slim-fit shorts",
          shoes: "Casual sneakers",
          description: "A fitted polo shirt with slim-fit shorts and casual sneakers for a sporty birthday party."
        },
        {
          top: "Stylish shirt",
          bottom: "Casual jeans",
          shoes: "Loafers",
          description: "A stylish shirt with casual jeans and loafers for a smart birthday celebration."
        }
      ],
      "Lean Short": [
        {
          top: "Short-sleeve shirt",
          bottom: "Tailored shorts",
          shoes: "Slip-ons",
          description: "A stylish short-sleeve shirt with tailored shorts and slip-ons for a birthday gathering."
        },
        {
          top: "Casual blazer",
          bottom: "Shorts",
          shoes: "Loafers",
          description: "A casual blazer over shorts and loafers for a smart yet comfortable birthday look."
        },
        {
          top: "Relaxed button-down shirt",
          bottom: "Chino shorts",
          shoes: "Sneakers",
          description: "A relaxed button-down shirt with chino shorts and sneakers, ideal for a casual birthday celebration."
        }
      ],
      "Lean Tall": [
        {
          top: "Fitted polo shirt",
          bottom: "Slim-fit jeans",
          shoes: "Casual loafers",
          description: "A fitted polo shirt with slim-fit jeans and casual loafers, perfect for a birthday party."
        },
        {
          top: "Elegant short-sleeve shirt",
          bottom: "Tailored trousers",
          shoes: "Loafers",
          description: "An elegant short-sleeve shirt with tailored trousers and loafers, suitable for a tall, lean physique."
        },
        {
          top: "Stylish blazer",
          bottom: "Chinos",
          shoes: "Slip-ons",
          description: "A stylish blazer with chinos and slip-ons for a refined birthday look."
        }
      ],
      "Lean Average": [
        {
          top: "Smart casual shirt",
          bottom: "Chinos",
          shoes: "Loafers",
          description: "A smart casual shirt paired with chinos and loafers, ideal for a birthday event."
        },
        {
          top: "Casual button-down shirt",
          bottom: "Slim-fit shorts",
          shoes: "Sneakers",
          description: "A casual button-down shirt with slim-fit shorts and sneakers, suitable for a casual birthday party."
        },
        {
          top: "Relaxed fit shirt",
          bottom: "Tailored jeans",
          shoes: "Casual loafers",
          description: "A relaxed fit shirt with tailored jeans and casual loafers, perfect for a birthday celebration."
        }
      ],
      "Lean Muscular Short": [
        {
          top: "Structured blazer",
          bottom: "Dress shorts",
          shoes: "Polished loafers",
          description: "A structured blazer over dress shorts and polished loafers, ideal for a stylish birthday look."
        },
        {
          top: "Tailored button-down shirt",
          bottom: "Shorts",
          shoes: "Casual loafers",
          description: "A tailored button-down shirt with shorts and casual loafers for a sharp birthday outfit."
        },
        {
          top: "Short-sleeve fitted shirt",
          bottom: "Chino shorts",
          shoes: "Sneakers",
          description: "A short-sleeve fitted shirt with chino shorts and sneakers, perfect for a sporty birthday look."
        }
      ],
      "Lean Muscular Tall": [
        {
          top: "Three-piece suit",
          bottom: "Tailored trousers",
          shoes: "Patented leather shoes",
          description: "A sharp three-piece suit with tailored trousers and patented leather shoes, perfect for a muscular, tall physique."
        },
        {
          top: "Fitted blazer",
          bottom: "Slim-fit chinos",
          shoes: "Loafers",
          description: "A fitted blazer with slim-fit chinos and loafers, ideal for a birthday party."
        },
        {
          top: "Casual button-down shirt",
          bottom: "Tailored trousers",
          shoes: "Derby shoes",
          description: "A casual button-down shirt with tailored trousers and Derby shoes for a stylish birthday look."
        }
      ],
      "Lean Muscular Average": [
        {
          top: "Modern suit",
          bottom: "Dress trousers",
          shoes: "Brogues",
          description: "A modern suit with dress trousers and brogues, great for a lean muscular average physique at a birthday."
        },
        {
          top: "Casual blazer",
          bottom: "Slim-fit jeans",
          shoes: "Loafers",
          description: "A casual blazer with slim-fit jeans and loafers, perfect for a birthday celebration."
        },
        {
          top: "Tailored shirt",
          bottom: "Chinos",
          shoes: "Sneakers",
          description: "A tailored shirt with chinos and sneakers for a smart yet relaxed birthday outfit."
        }
      ],
      "Average Short": [
        {
          top: "Casual shirt",
          bottom: "Relaxed shorts",
          shoes: "Casual sneakers",
          description: "A casual shirt with relaxed shorts and casual sneakers, suitable for a birthday celebration."
        },
        {
          top: "Short-sleeve button-down shirt",
          bottom: "Chino shorts",
          shoes: "Loafers",
          description: "A short-sleeve button-down shirt with chino shorts and loafers for a laid-back birthday look."
        },
        {
          top: "Stylish polo shirt",
          bottom: "Tailored shorts",
          shoes: "Slip-ons",
          description: "A stylish polo shirt with tailored shorts and slip-ons, ideal for a casual birthday event."
        }
      ],
      "Average Tall": [
        {
          top: "Smart polo shirt",
          bottom: "Tailored trousers",
          shoes: "Loafers",
          description: "A smart polo shirt paired with tailored trousers and loafers, perfect for a tall average physique at a birthday."
        },
        {
          top: "Casual button-down shirt",
          bottom: "Chinos",
          shoes: "Casual loafers",
          description: "A casual button-down shirt with chinos and casual loafers for a relaxed birthday celebration."
        },
        {
          top: "Elegant shirt",
          bottom: "Dress shorts",
          shoes: "Sneakers",
          description: "An elegant shirt with dress shorts and sneakers for a stylish birthday look."
        }
      ],
      "Average Average": [
        {
          top: "Casual button-down shirt",
          bottom: "Chinos",
          shoes: "Loafers",
          description: "A comfortable button-down shirt with chinos and loafers, ideal for a birthday gathering."
        },
        {
          top: "Stylish polo shirt",
          bottom: "Slim-fit jeans",
          shoes: "Casual sneakers",
          description: "A stylish polo shirt with slim-fit jeans and casual sneakers, great for a casual birthday party."
        },
        {
          top: "Relaxed fit shirt",
          bottom: "Tailored chinos",
          shoes: "Slip-ons",
          description: "A relaxed fit shirt with tailored chinos and slip-ons for a laid-back birthday event."
        }
      ],
      "Chubby Short": [
        {
          top: "Relaxed fit shirt",
          bottom: "Comfortable shorts",
          shoes: "Slip-ons",
          description: "A relaxed fit shirt with comfortable shorts and slip-ons, great for a laid-back birthday celebration."
        },
        {
          top: "Casual polo shirt",
          bottom: "Stretchy shorts",
          shoes: "Casual sneakers",
          description: "A casual polo shirt with stretchy shorts and casual sneakers for a relaxed birthday party."
        },
        {
          top: "Short-sleeve button-down shirt",
          bottom: "Relaxed shorts",
          shoes: "Loafers",
          description: "A short-sleeve button-down shirt with relaxed shorts and loafers, perfect for a comfortable birthday look."
        }
      ],
      "Chubby Tall": [
        {
          top: "Casual button-down shirt",
          bottom: "Well-fitted trousers",
          shoes: "Casual loafers",
          description: "A casual button-down shirt with well-fitted trousers and loafers, suitable for a tall, chubby physique."
        },
        {
          top: "Tailored blazer",
          bottom: "Dress trousers",
          shoes: "Leather loafers",
          description: "A tailored blazer with dress trousers and leather loafers for a smart birthday look."
        },
        {
          top: "Fitted shirt",
          bottom: "Chinos",
          shoes: "Slip-ons",
          description: "A fitted shirt with chinos and slip-ons for a stylish birthday event."
        }
      ],
      "Chubby Average": [
        {
          top: "Comfortable polo shirt",
          bottom: "Relaxed chinos",
          shoes: "Casual sneakers",
          description: "A comfortable polo shirt with relaxed chinos and casual sneakers, ideal for a birthday event."
        },
        {
          top: "Casual button-down shirt",
          bottom: "Stretchy trousers",
          shoes: "Loafers",
          description: "A casual button-down shirt with stretchy trousers and loafers for a relaxed birthday party."
        },
        {
          top: "Smart casual shirt",
          bottom: "Dress shorts",
          shoes: "Slip-ons",
          description: "A smart casual shirt with dress shorts and slip-ons for a more polished birthday look."
        }
      ],
      "Overweight Short": [
        {
          top: "Loose-fitting shirt",
          bottom: "Comfortable shorts",
          shoes: "Slip-ons",
          description: "A loose-fitting shirt with comfortable shorts and slip-ons, perfect for a relaxed birthday party."
        },
        {
          top: "Casual polo shirt",
          bottom: "Relaxed shorts",
          shoes: "Casual sneakers",
          description: "A casual polo shirt with relaxed shorts and casual sneakers, great for a laid-back birthday celebration."
        },
        {
          top: "Short-sleeve button-down shirt",
          bottom: "Comfortable shorts",
          shoes: "Loafers",
          description: "A short-sleeve button-down shirt with comfortable shorts and loafers, suitable for a casual birthday event."
        }
      ],
      "Overweight Tall": [
        {
          top: "Relaxed fit blazer",
          bottom: "Dress trousers",
          shoes: "Leather loafers",
          description: "A relaxed fit blazer with dress trousers and leather loafers, suitable for a tall, overweight physique."
        },
        {
          top: "Loose-fitting button-down shirt",
          bottom: "Tailored trousers",
          shoes: "Casual loafers",
          description: "A loose-fitting button-down shirt with tailored trousers and casual loafers for a relaxed birthday look."
        },
        {
          top: "Elegant short-sleeve shirt",
          bottom: "Chinos",
          shoes: "Slip-ons",
          description: "An elegant short-sleeve shirt with chinos and slip-ons for a stylish birthday celebration."
        }
      ],
    },  
    "Weddings": {
      "Skinny Short": [
        {
          top: "Slim-fit suit",
          bottom: "Dress shorts",
          shoes: "Oxfords",
          description: "A slim-fit suit with dress shorts and Oxfords, stylish for a wedding celebration."
        },
        {
          top: "Short-sleeve shirt",
          bottom: "Dress shorts",
          shoes: "Leather loafers",
          description: "A short-sleeve shirt with dress shorts and leather loafers for a smart look at a wedding."
        },
        {
          top: "Casual blazer",
          bottom: "Dress shorts",
          shoes: "Loafers",
          description: "A casual blazer over dress shorts and loafers for a relaxed yet stylish wedding outfit."
        }
      ],
      "Skinny Tall": [
        {
          top: "Three-piece suit",
          bottom: "Dress trousers",
          shoes: "Leather dress shoes",
          description: "A three-piece suit with dress trousers and leather dress shoes, perfect for a tall, skinny physique at a wedding."
        },
        {
          top: "Elegant button-down shirt",
          bottom: "Tailored trousers",
          shoes: "Loafers",
          description: "An elegant button-down shirt with tailored trousers and loafers for a refined wedding look."
        },
        {
          top: "Casual blazer",
          bottom: "Dress trousers",
          shoes: "Oxfords",
          description: "A casual blazer with dress trousers and Oxfords for a tall, skinny look at a wedding."
        }
      ],
      "Skinny Average": [
        {
          top: "Slim-fit suit",
          bottom: "Dress trousers",
          shoes: "Leather dress shoes",
          description: "A well-tailored slim-fit suit with dress trousers and leather dress shoes, ideal for weddings."
        },
        {
          top: "Casual blazer",
          bottom: "Tailored trousers",
          shoes: "Loafers",
          description: "A casual blazer with tailored trousers and loafers for a smart wedding outfit."
        },
        {
          top: "Stylish button-down shirt",
          bottom: "Chinos",
          shoes: "Derby shoes",
          description: "A stylish button-down shirt with chinos and Derby shoes for a fashionable wedding look."
        }
      ],
      "Lean Short": [
        {
          top: "Tailored blazer",
          bottom: "Dress shorts",
          shoes: "Derby shoes",
          description: "A tailored blazer with dress shorts and Derby shoes, perfect for a smart wedding outfit."
        },
        {
          top: "Smart polo shirt",
          bottom: "Chino shorts",
          shoes: "Slip-ons",
          description: "A smart polo shirt with chino shorts and slip-ons for a stylish yet relaxed wedding look."
        },
        {
          top: "Casual blazer",
          bottom: "Dress shorts",
          shoes: "Casual loafers",
          description: "A casual blazer over dress shorts and casual loafers for a refined wedding outfit."
        }
      ],
      "Lean Tall": [
        {
          top: "Classic suit",
          bottom: "Tailored trousers",
          shoes: "Leather Oxfords",
          description: "A classic suit with tailored trousers and leather Oxfords, perfect for a tall, lean physique at a wedding."
        },
        {
          top: "Fitted blazer",
          bottom: "Slim-fit chinos",
          shoes: "Loafers",
          description: "A fitted blazer with slim-fit chinos and loafers for a stylish wedding look."
        },
        {
          top: "Elegant button-down shirt",
          bottom: "Tailored trousers",
          shoes: "Derby shoes",
          description: "An elegant button-down shirt with tailored trousers and Derby shoes for a tall, lean wedding outfit."
        }
      ],
      "Lean Average": [
        {
          top: "Elegant suit",
          bottom: "Dress trousers",
          shoes: "Leather dress shoes",
          description: "An elegant suit with dress trousers and leather dress shoes, suitable for a wedding."
        },
        {
          top: "Tailored shirt",
          bottom: "Chinos",
          shoes: "Casual loafers",
          description: "A tailored shirt with chinos and casual loafers for a smart yet comfortable wedding look."
        },
        {
          top: "Smart blazer",
          bottom: "Dress trousers",
          shoes: "Oxfords",
          description: "A smart blazer with dress trousers and Oxfords, perfect for a lean average physique at a wedding."
        }
      ],
      "Lean Muscular Short": [
        {
          top: "Structured blazer",
          bottom: "Dress shorts",
          shoes: "Polished loafers",
          description: "A structured blazer over dress shorts and polished loafers, ideal for a stylish wedding look."
        },
        {
          top: "Tailored button-down shirt",
          bottom: "Shorts",
          shoes: "Casual loafers",
          description: "A tailored button-down shirt with shorts and casual loafers for a sharp wedding outfit."
        },
        {
          top: "Fitted blazer",
          bottom: "Chino shorts",
          shoes: "Sneakers",
          description: "A fitted blazer with chino shorts and sneakers for a sporty yet elegant wedding look."
        }
      ],
      "Lean Muscular Tall": [
        {
          top: "Three-piece suit",
          bottom: "Tailored trousers",
          shoes: "Patented leather shoes",
          description: "A sharp three-piece suit with tailored trousers and patented leather shoes, perfect for a muscular, tall physique."
        },
        {
          top: "Fitted blazer",
          bottom: "Slim-fit chinos",
          shoes: "Loafers",
          description: "A fitted blazer with slim-fit chinos and loafers for a stylish wedding outfit."
        },
        {
          top: "Casual button-down shirt",
          bottom: "Tailored trousers",
          shoes: "Derby shoes",
          description: "A casual button-down shirt with tailored trousers and Derby shoes for a refined wedding look."
        }
      ],
      "Lean Muscular Average": [
        {
          top: "Modern suit",
          bottom: "Dress trousers",
          shoes: "Brogues",
          description: "A modern suit with dress trousers and brogues, great for a lean muscular average physique at a wedding."
        },
        {
          top: "Casual blazer",
          bottom: "Slim-fit jeans",
          shoes: "Loafers",
          description: "A casual blazer with slim-fit jeans and loafers, perfect for a wedding celebration."
        },
        {
          top: "Tailored shirt",
          bottom: "Chinos",
          shoes: "Sneakers",
          description: "A tailored shirt with chinos and sneakers for a stylish yet relaxed wedding look."
        }
      ],
      "Average Short": [
        {
          top: "Casual blazer",
          bottom: "Dress shorts",
          shoes: "Loafers",
          description: "A casual blazer over dress shorts and loafers, suitable for a birthday celebration."
        },
        {
          top: "Smart button-down shirt",
          bottom: "Chino shorts",
          shoes: "Casual loafers",
          description: "A smart button-down shirt with chino shorts and casual loafers for a polished look."
        },
        {
          top: "Elegant polo shirt",
          bottom: "Tailored shorts",
          shoes: "Slip-ons",
          description: "An elegant polo shirt with tailored shorts and slip-ons for a stylish birthday event."
        }
      ],
      "Average Tall": [
        {
          top: "Smart blazer",
          bottom: "Dress trousers",
          shoes: "Leather loafers",
          description: "A smart blazer with dress trousers and leather loafers, perfect for a tall average physique at a wedding."
        },
        {
          top: "Elegant button-down shirt",
          bottom: "Tailored chinos",
          shoes: "Casual loafers",
          description: "An elegant button-down shirt with tailored chinos and casual loafers for a sophisticated wedding look."
        },
        {
          top: "Fitted suit",
          bottom: "Dress trousers",
          shoes: "Oxfords",
          description: "A fitted suit with dress trousers and Oxfords for a refined birthday look."
        }
      ],
      "Average Average": [
        {
          top: "Smart suit",
          bottom: "Dress trousers",
          shoes: "Leather dress shoes",
          description: "A smart suit with dress trousers and leather dress shoes, ideal for a wedding."
        },
        {
          top: "Casual blazer",
          bottom: "Tailored chinos",
          shoes: "Loafers",
          description: "A casual blazer with tailored chinos and loafers for a relaxed yet polished look."
        },
        {
          top: "Elegant shirt",
          bottom: "Chinos",
          shoes: "Casual loafers",
          description: "An elegant shirt with chinos and casual loafers, suitable for a stylish wedding event."
        }
      ],
      "Chubby Short": [
        {
          top: "Relaxed blazer",
          bottom: "Comfortable shorts",
          shoes: "Slip-ons",
          description: "A relaxed blazer over comfortable shorts and slip-ons, ideal for a relaxed wedding look."
        },
        {
          top: "Casual polo shirt",
          bottom: "Stretchy shorts",
          shoes: "Casual sneakers",
          description: "A casual polo shirt with stretchy shorts and casual sneakers for a laid-back wedding outfit."
        },
        {
          top: "Short-sleeve button-down shirt",
          bottom: "Relaxed shorts",
          shoes: "Loafers",
          description: "A short-sleeve button-down shirt with relaxed shorts and loafers for a comfortable birthday event."
        }
      ],
      "Chubby Tall": [
        {
          top: "Relaxed blazer",
          bottom: "Dress trousers",
          shoes: "Leather loafers",
          description: "A relaxed blazer with dress trousers and leather loafers, perfect for a tall, chubby physique at a wedding."
        },
        {
          top: "Loose-fitting button-down shirt",
          bottom: "Tailored trousers",
          shoes: "Casual loafers",
          description: "A loose-fitting button-down shirt with tailored trousers and casual loafers for a comfortable wedding look."
        },
        {
          top: "Elegant shirt",
          bottom: "Chinos",
          shoes: "Slip-ons",
          description: "An elegant shirt with chinos and slip-ons for a stylish wedding event."
        }
      ],
      "Chubby Average": [
        {
          top: "Comfortable polo shirt",
          bottom: "Relaxed chinos",
          shoes: "Casual sneakers",
          description: "A comfortable polo shirt with relaxed chinos and casual sneakers, suitable for a wedding."
        },
        {
          top: "Casual button-down shirt",
          bottom: "Stretchy trousers",
          shoes: "Loafers",
          description: "A casual button-down shirt with stretchy trousers and loafers for a relaxed wedding look."
        },
        {
          top: "Smart casual shirt",
          bottom: "Dress shorts",
          shoes: "Slip-ons",
          description: "A smart casual shirt with dress shorts and slip-ons for a more polished wedding outfit."
        }
      ],
      "Overweight Short": [
        {
          top: "Loose-fitting shirt",
          bottom: "Comfortable shorts",
          shoes: "Slip-ons",
          description: "A loose-fitting shirt with comfortable shorts and slip-ons, perfect for a relaxed wedding party."
        },
        {
          top: "Casual polo shirt",
          bottom: "Relaxed shorts",
          shoes: "Casual sneakers",
          description: "A casual polo shirt with relaxed shorts and casual sneakers, great for a laid-back wedding event."
        },
        {
          top: "Short-sleeve button-down shirt",
          bottom: "Comfortable shorts",
          shoes: "Loafers",
          description: "A short-sleeve button-down shirt with comfortable shorts and loafers, ideal for a wedding celebration."
        }
      ],
      "Overweight Tall": [
        {
          top: "Relaxed fit blazer",
          bottom: "Dress trousers",
          shoes: "Leather loafers",
          description: "A relaxed fit blazer with dress trousers and leather loafers, suitable for a tall, overweight physique."
        },
        {
          top: "Loose-fitting button-down shirt",
          bottom: "Tailored trousers",
          shoes: "Casual loafers",
          description: "A loose-fitting button-down shirt with tailored trousers and casual loafers for a comfortable wedding look."
        },
        {
          top: "Elegant short-sleeve shirt",
          bottom: "Chinos",
          shoes: "Slip-ons",
          description: "An elegant short-sleeve shirt with chinos and slip-ons for a stylish wedding event."
        }
      ],
    },
    "Graduation Ceremonies": {
        "Skinny Short": [
          {
            "top": "Slim-fit blazer",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A slim-fit blazer with dress shorts and loafers for a polished graduation look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Chinos",
            "shoes": "Casual loafers",
            "description": "A casual button-down shirt with chinos and loafers for a smart graduation ceremony."
          },
          {
            "top": "Elegant polo shirt",
            "bottom": "Relaxed shorts",
            "shoes": "Sneakers",
            "description": "An elegant polo shirt with relaxed shorts and sneakers for a relaxed yet stylish graduation outfit."
          }
        ],
        "Skinny Tall": [
          {
            "top": "Classic suit",
            "bottom": "Dress trousers",
            "shoes": "Leather Oxfords",
            "description": "A classic suit with dress trousers and leather Oxfords for a tall, skinny graduation look."
          },
          {
            "top": "Fitted blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Loafers",
            "description": "A fitted blazer with slim-fit chinos and loafers for a sharp graduation appearance."
          },
          {
            "top": "Elegant button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Derby shoes",
            "description": "An elegant button-down shirt with tailored trousers and Derby shoes for a sophisticated graduation look."
          }
        ],
        "Skinny Average": [
          {
            "top": "Slim-fit suit",
            "bottom": "Dress trousers",
            "shoes": "Leather dress shoes",
            "description": "A slim-fit suit with dress trousers and leather dress shoes for a standard graduation look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Chinos",
            "shoes": "Loafers",
            "description": "A casual blazer with chinos and loafers for a comfortable yet formal graduation outfit."
          },
          {
            "top": "Stylish button-down shirt",
            "bottom": "Chinos",
            "shoes": "Derby shoes",
            "description": "A stylish button-down shirt with chinos and Derby shoes for a fashionable graduation attire."
          }
        ],
        "Lean Short": [
          {
            "top": "Tailored blazer",
            "bottom": "Dress shorts",
            "shoes": "Derby shoes",
            "description": "A tailored blazer with dress shorts and Derby shoes for a smart graduation look."
          },
          {
            "top": "Smart polo shirt",
            "bottom": "Chino shorts",
            "shoes": "Slip-ons",
            "description": "A smart polo shirt with chino shorts and slip-ons for a stylish graduation outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Relaxed shorts",
            "shoes": "Casual loafers",
            "description": "A casual blazer with relaxed shorts and loafers for a relaxed yet elegant graduation look."
          }
        ],
        "Lean Tall": [
          {
            "top": "Classic suit",
            "bottom": "Tailored trousers",
            "shoes": "Leather Oxfords",
            "description": "A classic suit with tailored trousers and leather Oxfords for a tall, lean graduation look."
          },
          {
            "top": "Fitted blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Loafers",
            "description": "A fitted blazer with slim-fit chinos and loafers for a polished graduation appearance."
          },
          {
            "top": "Elegant button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Derby shoes",
            "description": "An elegant button-down shirt with tailored trousers and Derby shoes for a refined graduation look."
          }
        ],
        "Lean Average": [
          {
            "top": "Modern suit",
            "bottom": "Dress trousers",
            "shoes": "Brogues",
            "description": "A modern suit with dress trousers and brogues for a lean average graduation appearance."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit jeans",
            "shoes": "Loafers",
            "description": "A casual blazer with slim-fit jeans and loafers for a stylish graduation look."
          },
          {
            "top": "Tailored shirt",
            "bottom": "Chinos",
            "shoes": "Sneakers",
            "description": "A tailored shirt with chinos and sneakers for a relaxed yet smart graduation outfit."
          }
        ],
        "Lean Muscular Short": [
          {
            "top": "Structured blazer",
            "bottom": "Dress shorts",
            "shoes": "Polished loafers",
            "description": "A structured blazer with dress shorts and polished loafers for a sharp graduation look."
          },
          {
            "top": "Tailored button-down shirt",
            "bottom": "Shorts",
            "shoes": "Casual loafers",
            "description": "A tailored button-down shirt with shorts and casual loafers for a stylish graduation outfit."
          },
          {
            "top": "Fitted blazer",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A fitted blazer with chino shorts and sneakers for a sporty yet elegant graduation look."
          }
        ],
        "Lean Muscular Tall": [
          {
            "top": "Three-piece suit",
            "bottom": "Tailored trousers",
            "shoes": "Patented leather shoes",
            "description": "A three-piece suit with tailored trousers and patented leather shoes for a tall, muscular graduation look."
          },
          {
            "top": "Fitted blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Loafers",
            "description": "A fitted blazer with slim-fit chinos and loafers for a polished graduation appearance."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Derby shoes",
            "description": "A casual button-down shirt with tailored trousers and Derby shoes for a refined graduation look."
          }
        ],
        "Lean Muscular Average": [
          {
            "top": "Modern suit",
            "bottom": "Dress trousers",
            "shoes": "Brogues",
            "description": "A modern suit with dress trousers and brogues for a lean muscular average graduation appearance."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit jeans",
            "shoes": "Loafers",
            "description": "A casual blazer with slim-fit jeans and loafers for a stylish graduation look."
          },
          {
            "top": "Tailored shirt",
            "bottom": "Chinos",
            "shoes": "Sneakers",
            "description": "A tailored shirt with chinos and sneakers for a relaxed yet smart graduation outfit."
          }
        ],
        "Average Short": [
          {
            "top": "Smart blazer",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A smart blazer with dress shorts and loafers for a comfortable graduation look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Casual loafers",
            "description": "A casual button-down shirt with chino shorts and loafers for a polished graduation appearance."
          },
          {
            "top": "Elegant polo shirt",
            "bottom": "Relaxed shorts",
            "shoes": "Sneakers",
            "description": "An elegant polo shirt with relaxed shorts and sneakers for a stylish graduation event."
          }
        ],
        "Average Tall": [
          {
            "top": "Smart blazer",
            "bottom": "Dress trousers",
            "shoes": "Leather loafers",
            "description": "A smart blazer with dress trousers and leather loafers for a tall average graduation look."
          },
          {
            "top": "Elegant button-down shirt",
            "bottom": "Tailored chinos",
            "shoes": "Casual loafers",
            "description": "An elegant button-down shirt with tailored chinos and casual loafers for a sophisticated graduation outfit."
          },
          {
            "top": "Fitted suit",
            "bottom": "Dress trousers",
            "shoes": "Oxfords",
            "description": "A fitted suit with dress trousers and Oxfords for a refined graduation appearance."
          }
        ],
        "Average Average": [
          {
            "top": "Smart suit",
            "bottom": "Dress trousers",
            "shoes": "Leather dress shoes",
            "description": "A smart suit with dress trousers and leather dress shoes for a well-rounded graduation look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Tailored chinos",
            "shoes": "Loafers",
            "description": "A casual blazer with tailored chinos and loafers for a comfortable yet formal graduation outfit."
          },
          {
            "top": "Elegant shirt",
            "bottom": "Chinos",
            "shoes": "Casual loafers",
            "description": "An elegant shirt with chinos and casual loafers for a stylish graduation event."
          }
        ],
        "Chubby Short": [
          {
            "top": "Relaxed blazer",
            "bottom": "Comfortable shorts",
            "shoes": "Slip-ons",
            "description": "A relaxed blazer with comfortable shorts and slip-ons for a chubby short graduation outfit."
          },
          {
            "top": "Casual polo shirt",
            "bottom": "Stretchy shorts",
            "shoes": "Casual sneakers",
            "description": "A casual polo shirt with stretchy shorts and casual sneakers for a relaxed graduation look."
          },
          {
            "top": "Short-sleeve button-down shirt",
            "bottom": "Relaxed shorts",
            "shoes": "Loafers",
            "description": "A short-sleeve button-down shirt with relaxed shorts and loafers for a smart graduation appearance."
          }
        ],
        "Chubby Tall": [
          {
            "top": "Relaxed blazer",
            "bottom": "Dress trousers",
            "shoes": "Leather loafers",
            "description": "A relaxed blazer with dress trousers and leather loafers for a tall chubby graduation look."
          },
          {
            "top": "Loose-fitting button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Casual loafers",
            "description": "A loose-fitting button-down shirt with tailored trousers and casual loafers for a comfortable graduation outfit."
          },
          {
            "top": "Elegant shirt",
            "bottom": "Chinos",
            "shoes": "Slip-ons",
            "description": "An elegant shirt with chinos and slip-ons for a sophisticated yet comfortable graduation appearance."
          }
        ],
        "Chubby Average": [
          {
            "top": "Comfortable polo shirt",
            "bottom": "Relaxed chinos",
            "shoes": "Casual sneakers",
            "description": "A comfortable polo shirt with relaxed chinos and casual sneakers for a chubby average graduation look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Stretchy trousers",
            "shoes": "Loafers",
            "description": "A casual button-down shirt with stretchy trousers and loafers for a smart graduation appearance."
          },
          {
            "top": "Smart casual shirt",
            "bottom": "Dress shorts",
            "shoes": "Slip-ons",
            "description": "A smart casual shirt with dress shorts and slip-ons for a stylish graduation outfit."
          }
        ],
        "Overweight Short": [
          {
            "top": "Loose-fitting shirt",
            "bottom": "Comfortable shorts",
            "shoes": "Slip-ons",
            "description": "A loose-fitting shirt with comfortable shorts and slip-ons for an overweight short graduation look."
          },
          {
            "top": "Casual polo shirt",
            "bottom": "Relaxed shorts",
            "shoes": "Casual sneakers",
            "description": "A casual polo shirt with relaxed shorts and casual sneakers for a comfortable graduation appearance."
          },
          {
            "top": "Smart button-down shirt",
            "bottom": "Stretchy shorts",
            "shoes": "Loafers",
            "description": "A smart button-down shirt with stretchy shorts and loafers for a relaxed yet stylish graduation outfit."
          }
        ],
        "Overweight Tall": [
          {
            "top": "Relaxed blazer",
            "bottom": "Dress trousers",
            "shoes": "Comfortable loafers",
            "description": "A relaxed blazer with dress trousers and comfortable loafers for an overweight tall graduation look."
          },
          {
            "top": "Loose-fitting button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Casual loafers",
            "description": "A loose-fitting button-down shirt with tailored trousers and casual loafers for a comfortable graduation outfit."
          },
          {
            "top": "Elegant shirt",
            "bottom": "Relaxed chinos",
            "shoes": "Slip-ons",
            "description": "An elegant shirt with relaxed chinos and slip-ons for a sophisticated yet relaxed graduation appearance."
          }
        ],
        "Overweight Average": [
          {
            "top": "Comfortable polo shirt",
            "bottom": "Stretchy chinos",
            "shoes": "Casual sneakers",
            "description": "A comfortable polo shirt with stretchy chinos and casual sneakers for an overweight average graduation look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Relaxed trousers",
            "shoes": "Loafers",
            "description": "A casual button-down shirt with relaxed trousers and loafers for a smart graduation appearance."
          },
          {
            "top": "Smart shirt",
            "bottom": "Dress shorts",
            "shoes": "Slip-ons",
            "description": "A smart shirt with dress shorts and slip-ons for a stylish graduation outfit."
          }
        ]
    },
    "Job Interviews": {
        "Skinny Short": [
          {
            "top": "Slim-fit blazer",
            "bottom": "Dress shorts",
            "shoes": "Oxfords",
            "description": "A slim-fit blazer with dress shorts and Oxfords for a professional yet comfortable job interview look."
          },
          {
            "top": "Short-sleeve shirt",
            "bottom": "Dress shorts",
            "shoes": "Leather loafers",
            "description": "A short-sleeve shirt with dress shorts and leather loafers for a smart, casual job interview outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A casual blazer with dress shorts and loafers for a laid-back yet professional job interview appearance."
          }
        ],
        "Skinny Tall": [
          {
            "top": "Classic suit",
            "bottom": "Dress trousers",
            "shoes": "Leather Oxfords",
            "description": "A classic suit with dress trousers and leather Oxfords for a tall, skinny job interview look."
          },
          {
            "top": "Fitted blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Loafers",
            "description": "A fitted blazer with slim-fit chinos and loafers for a polished job interview appearance."
          },
          {
            "top": "Elegant button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Derby shoes",
            "description": "An elegant button-down shirt with tailored trousers and Derby shoes for a refined job interview look."
          }
        ],
        "Skinny Average": [
          {
            "top": "Slim-fit suit",
            "bottom": "Dress trousers",
            "shoes": "Leather dress shoes",
            "description": "A slim-fit suit with dress trousers and leather dress shoes for a standard job interview appearance."
          },
          {
            "top": "Casual blazer",
            "bottom": "Chinos",
            "shoes": "Loafers",
            "description": "A casual blazer with chinos and loafers for a comfortable yet formal job interview outfit."
          },
          {
            "top": "Stylish button-down shirt",
            "bottom": "Chinos",
            "shoes": "Derby shoes",
            "description": "A stylish button-down shirt with chinos and Derby shoes for a fashionable job interview look."
          }
        ],
        "Lean Short": [
          {
            "top": "Tailored blazer",
            "bottom": "Dress shorts",
            "shoes": "Derby shoes",
            "description": "A tailored blazer with dress shorts and Derby shoes for a smart job interview appearance."
          },
          {
            "top": "Smart polo shirt",
            "bottom": "Chino shorts",
            "shoes": "Slip-ons",
            "description": "A smart polo shirt with chino shorts and slip-ons for a stylish job interview look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Relaxed shorts",
            "shoes": "Casual loafers",
            "description": "A casual blazer with relaxed shorts and loafers for a relaxed yet professional job interview outfit."
          }
        ],
        "Lean Tall": [
          {
            "top": "Classic suit",
            "bottom": "Tailored trousers",
            "shoes": "Leather Oxfords",
            "description": "A classic suit with tailored trousers and leather Oxfords for a tall, lean job interview look."
          },
          {
            "top": "Fitted blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Loafers",
            "description": "A fitted blazer with slim-fit chinos and loafers for a polished job interview appearance."
          },
          {
            "top": "Elegant button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Derby shoes",
            "description": "An elegant button-down shirt with tailored trousers and Derby shoes for a refined job interview look."
          }
        ],
        "Lean Average": [
          {
            "top": "Modern suit",
            "bottom": "Dress trousers",
            "shoes": "Brogues",
            "description": "A modern suit with dress trousers and brogues for a lean average job interview appearance."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit jeans",
            "shoes": "Loafers",
            "description": "A casual blazer with slim-fit jeans and loafers for a stylish job interview outfit."
          },
          {
            "top": "Tailored shirt",
            "bottom": "Chinos",
            "shoes": "Sneakers",
            "description": "A tailored shirt with chinos and sneakers for a relaxed yet smart job interview look."
          }
        ],
        "Lean Muscular Short": [
          {
            "top": "Structured blazer",
            "bottom": "Dress shorts",
            "shoes": "Polished loafers",
            "description": "A structured blazer with dress shorts and polished loafers for a sharp job interview look."
          },
          {
            "top": "Tailored button-down shirt",
            "bottom": "Shorts",
            "shoes": "Casual loafers",
            "description": "A tailored button-down shirt with shorts and casual loafers for a smart job interview outfit."
          },
          {
            "top": "Fitted blazer",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A fitted blazer with chino shorts and sneakers for a sporty yet elegant job interview look."
          }
        ],
        "Lean Muscular Tall": [
          {
            "top": "Three-piece suit",
            "bottom": "Tailored trousers",
            "shoes": "Patented leather shoes",
            "description": "A three-piece suit with tailored trousers and patented leather shoes for a tall, muscular job interview look."
          },
          {
            "top": "Fitted blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Loafers",
            "description": "A fitted blazer with slim-fit chinos and loafers for a polished job interview appearance."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Derby shoes",
            "description": "A casual button-down shirt with tailored trousers and Derby shoes for a refined job interview look."
          }
        ],
        "Lean Muscular Average": [
          {
            "top": "Modern suit",
            "bottom": "Dress trousers",
            "shoes": "Brogues",
            "description": "A modern suit with dress trousers and brogues for a lean muscular average job interview appearance."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit jeans",
            "shoes": "Loafers",
            "description": "A casual blazer with slim-fit jeans and loafers for a stylish job interview outfit."
          },
          {
            "top": "Tailored shirt",
            "bottom": "Chinos",
            "shoes": "Sneakers",
            "description": "A tailored shirt with chinos and sneakers for a relaxed yet smart job interview look."
          }
        ],
        "Average Short": [
          {
            "top": "Smart blazer",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A smart blazer with dress shorts and loafers for a professional job interview look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Casual loafers",
            "description": "A casual button-down shirt with chino shorts and loafers for a relaxed job interview appearance."
          },
          {
            "top": "Elegant polo shirt",
            "bottom": "Relaxed shorts",
            "shoes": "Sneakers",
            "description": "An elegant polo shirt with relaxed shorts and sneakers for a stylish job interview outfit."
          }
        ],
        "Average Tall": [
          {
            "top": "Smart blazer",
            "bottom": "Dress trousers",
            "shoes": "Leather loafers",
            "description": "A smart blazer with dress trousers and leather loafers for a tall average job interview look."
          },
          {
            "top": "Elegant button-down shirt",
            "bottom": "Tailored chinos",
            "shoes": "Casual loafers",
            "description": "An elegant button-down shirt with tailored chinos and casual loafers for a sophisticated job interview outfit."
          },
          {
            "top": "Fitted suit",
            "bottom": "Dress trousers",
            "shoes": "Oxfords",
            "description": "A fitted suit with dress trousers and Oxfords for a polished job interview appearance."
          }
        ],
        "Average Average": [
          {
            "top": "Smart suit",
            "bottom": "Dress trousers",
            "shoes": "Leather dress shoes",
            "description": "A smart suit with dress trousers and leather dress shoes for a well-rounded job interview look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Tailored chinos",
            "shoes": "Loafers",
            "description": "A casual blazer with tailored chinos and loafers for a comfortable yet formal job interview outfit."
          },
          {
            "top": "Elegant shirt",
            "bottom": "Chinos",
            "shoes": "Casual loafers",
            "description": "An elegant shirt with chinos and casual loafers for a stylish job interview appearance."
          }
        ],
        "Chubby Short": [
          {
            "top": "Relaxed blazer",
            "bottom": "Comfortable shorts",
            "shoes": "Slip-ons",
            "description": "A relaxed blazer with comfortable shorts and slip-ons for a chubby short job interview look."
          },
          {
            "top": "Casual polo shirt",
            "bottom": "Stretchy shorts",
            "shoes": "Casual sneakers",
            "description": "A casual polo shirt with stretchy shorts and casual sneakers for a relaxed job interview appearance."
          },
          {
            "top": "Short-sleeve button-down shirt",
            "bottom": "Relaxed shorts",
            "shoes": "Loafers",
            "description": "A short-sleeve button-down shirt with relaxed shorts and loafers for a smart job interview outfit."
          }
        ],
        "Chubby Tall": [
          {
            "top": "Relaxed blazer",
            "bottom": "Dress trousers",
            "shoes": "Leather loafers",
            "description": "A relaxed blazer with dress trousers and leather loafers for a tall chubby job interview look."
          },
          {
            "top": "Loose-fitting button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Casual loafers",
            "description": "A loose-fitting button-down shirt with tailored trousers and casual loafers for a comfortable job interview outfit."
          },
          {
            "top": "Elegant shirt",
            "bottom": "Chinos",
            "shoes": "Slip-ons",
            "description": "An elegant shirt with chinos and slip-ons for a sophisticated yet comfortable job interview appearance."
          }
        ],
        "Chubby Average": [
          {
            "top": "Comfortable polo shirt",
            "bottom": "Relaxed chinos",
            "shoes": "Casual sneakers",
            "description": "A comfortable polo shirt with relaxed chinos and casual sneakers for a chubby average job interview look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Stretchy trousers",
            "shoes": "Loafers",
            "description": "A casual button-down shirt with stretchy trousers and loafers for a smart job interview appearance."
          },
          {
            "top": "Smart casual shirt",
            "bottom": "Dress shorts",
            "shoes": "Slip-ons",
            "description": "A smart casual shirt with dress shorts and slip-ons for a stylish job interview outfit."
          }
        ],
        "Overweight Short": [
          {
            "top": "Loose-fitting shirt",
            "bottom": "Comfortable shorts",
            "shoes": "Slip-ons",
            "description": "A loose-fitting shirt with comfortable shorts and slip-ons for an overweight short job interview look."
          },
          {
            "top": "Casual polo shirt",
            "bottom": "Relaxed shorts",
            "shoes": "Casual sneakers",
            "description": "A casual polo shirt with relaxed shorts and casual sneakers for a comfortable job interview appearance."
          },
          {
            "top": "Smart button-down shirt",
            "bottom": "Stretchy shorts",
            "shoes": "Loafers",
            "description": "A smart button-down shirt with stretchy shorts and loafers for a relaxed yet stylish job interview outfit."
          }
        ],
        "Overweight Tall": [
          {
            "top": "Relaxed blazer",
            "bottom": "Dress trousers",
            "shoes": "Comfortable loafers",
            "description": "A relaxed blazer with dress trousers and comfortable loafers for an overweight tall job interview look."
          },
          {
            "top": "Loose-fitting button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Casual loafers",
            "description": "A loose-fitting button-down shirt with tailored trousers and casual loafers for a comfortable job interview outfit."
          },
          {
            "top": "Elegant shirt",
            "bottom": "Relaxed chinos",
            "shoes": "Slip-ons",
            "description": "An elegant shirt with relaxed chinos and slip-ons for a sophisticated yet relaxed job interview appearance."
          }
        ],
        "Overweight Average": [
          {
            "top": "Comfortable polo shirt",
            "bottom": "Stretchy chinos",
            "shoes": "Casual sneakers",
            "description": "A comfortable polo shirt with stretchy chinos and casual sneakers for an overweight average job interview look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Relaxed trousers",
            "shoes": "Loafers",
            "description": "A casual button-down shirt with relaxed trousers and loafers for a smart job interview appearance."
          },
          {
            "top": "Smart shirt",
            "bottom": "Dress shorts",
            "shoes": "Slip-ons",
            "description": "A smart shirt with dress shorts and slip-ons for a stylish job interview outfit."
          }
        ]
    },
    "First Dates": {
        "Skinny Short": [
          {
            "top": "Slim-fit blazer",
            "bottom": "Casual shorts",
            "shoes": "Loafers",
            "description": "A slim-fit blazer with casual shorts and loafers for a stylish yet relaxed date night look."
          },
          {
            "top": "Short-sleeve button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Casual sneakers",
            "description": "A short-sleeve button-down shirt with chino shorts and casual sneakers for a casual yet trendy date night outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Denim shorts",
            "shoes": "Casual loafers",
            "description": "A casual blazer with denim shorts and casual loafers for a relaxed date night appearance."
          }
        ],
        "Skinny Tall": [
          {
            "top": "Tailored blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Leather loafers",
            "description": "A tailored blazer with slim-fit chinos and leather loafers for a sophisticated date night look."
          },
          {
            "top": "Fitted shirt",
            "bottom": "Slim-fit trousers",
            "shoes": "Derby shoes",
            "description": "A fitted shirt with slim-fit trousers and Derby shoes for a stylish and elegant date night outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Tailored chinos",
            "shoes": "Loafers",
            "description": "A casual blazer with tailored chinos and loafers for a polished date night appearance."
          }
        ],
        "Skinny Average": [
          {
            "top": "Smart blazer",
            "bottom": "Dark jeans",
            "shoes": "Leather dress shoes",
            "description": "A smart blazer with dark jeans and leather dress shoes for a versatile date night look."
          },
          {
            "top": "Stylish button-down shirt",
            "bottom": "Chinos",
            "shoes": "Casual loafers",
            "description": "A stylish button-down shirt with chinos and casual loafers for a chic date night outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit jeans",
            "shoes": "Sneakers",
            "description": "A casual blazer with slim-fit jeans and sneakers for a relaxed yet fashionable date night appearance."
          }
        ],
        "Lean Short": [
          {
            "top": "Tailored blazer",
            "bottom": "Casual shorts",
            "shoes": "Derby shoes",
            "description": "A tailored blazer with casual shorts and Derby shoes for a sharp date night look."
          },
          {
            "top": "Smart polo shirt",
            "bottom": "Chino shorts",
            "shoes": "Casual loafers",
            "description": "A smart polo shirt with chino shorts and casual loafers for a stylish yet comfortable date night outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Denim shorts",
            "shoes": "Casual loafers",
            "description": "A casual blazer with denim shorts and casual loafers for a laid-back date night appearance."
          }
        ],
        "Lean Tall": [
          {
            "top": "Tailored blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Leather loafers",
            "description": "A tailored blazer with slim-fit trousers and leather loafers for an elegant date night look."
          },
          {
            "top": "Fitted shirt",
            "bottom": "Slim-fit chinos",
            "shoes": "Derby shoes",
            "description": "A fitted shirt with slim-fit chinos and Derby shoes for a sophisticated and trendy date night outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Tailored chinos",
            "shoes": "Loafers",
            "description": "A casual blazer with tailored chinos and loafers for a polished date night appearance."
          }
        ],
        "Lean Average": [
          {
            "top": "Modern suit",
            "bottom": "Dress trousers",
            "shoes": "Brogues",
            "description": "A modern suit with dress trousers and brogues for a lean muscular average date night look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit jeans",
            "shoes": "Loafers",
            "description": "A casual blazer with slim-fit jeans and loafers for a stylish date night appearance."
          },
          {
            "top": "Tailored shirt",
            "bottom": "Chinos",
            "shoes": "Sneakers",
            "description": "A tailored shirt with chinos and sneakers for a relaxed yet fashionable date night outfit."
          }
        ],
        "Lean Muscular Short": [
          {
            "top": "Structured blazer",
            "bottom": "Casual shorts",
            "shoes": "Loafers",
            "description": "A structured blazer with casual shorts and loafers for a sharp and stylish date night look."
          },
          {
            "top": "Fitted button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Casual loafers",
            "description": "A fitted button-down shirt with chino shorts and casual loafers for a smart and casual date night outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Denim shorts",
            "shoes": "Sneakers",
            "description": "A casual blazer with denim shorts and sneakers for a laid-back yet fashionable date night appearance."
          }
        ],
        "Lean Muscular Tall": [
          {
            "top": "Three-piece suit",
            "bottom": "Tailored trousers",
            "shoes": "Patented leather shoes",
            "description": "A three-piece suit with tailored trousers and patented leather shoes for a tall, muscular date night look."
          },
          {
            "top": "Tailored blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Derby shoes",
            "description": "A tailored blazer with slim-fit chinos and Derby shoes for a sophisticated date night outfit."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Leather loafers",
            "description": "A casual button-down shirt with tailored trousers and leather loafers for a refined date night appearance."
          }
        ],
        "Lean Muscular Average": [
          {
            "top": "Modern suit",
            "bottom": "Dress trousers",
            "shoes": "Brogues",
            "description": "A modern suit with dress trousers and brogues for a lean muscular average date night look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit jeans",
            "shoes": "Loafers",
            "description": "A casual blazer with slim-fit jeans and loafers for a stylish date night appearance."
          },
          {
            "top": "Tailored shirt",
            "bottom": "Chinos",
            "shoes": "Sneakers",
            "description": "A tailored shirt with chinos and sneakers for a relaxed yet fashionable date night outfit."
          }
        ],
        "Average Short": [
          {
            "top": "Smart blazer",
            "bottom": "Casual shorts",
            "shoes": "Loafers",
            "description": "A smart blazer with casual shorts and loafers for a well-dressed date night look."
          },
          {
            "top": "Stylish button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Casual loafers",
            "description": "A stylish button-down shirt with chino shorts and casual loafers for a chic and relaxed date night outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Denim shorts",
            "shoes": "Sneakers",
            "description": "A casual blazer with denim shorts and sneakers for a laid-back date night appearance."
          }
        ],
        "Average Tall": [
          {
            "top": "Smart blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Leather loafers",
            "description": "A smart blazer with slim-fit trousers and leather loafers for an elegant date night look."
          },
          {
            "top": "Stylish button-down shirt",
            "bottom": "Tailored chinos",
            "shoes": "Derby shoes",
            "description": "A stylish button-down shirt with tailored chinos and Derby shoes for a sophisticated date night outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Dark jeans",
            "shoes": "Loafers",
            "description": "A casual blazer with dark jeans and loafers for a relaxed yet stylish date night appearance."
          }
        ],
        "Average Average": [
          {
            "top": "Modern suit",
            "bottom": "Dress trousers",
            "shoes": "Brogues",
            "description": "A modern suit with dress trousers and brogues for a well-rounded date night look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit jeans",
            "shoes": "Loafers",
            "description": "A casual blazer with slim-fit jeans and loafers for a chic date night outfit."
          },
          {
            "top": "Tailored shirt",
            "bottom": "Chinos",
            "shoes": "Sneakers",
            "description": "A tailored shirt with chinos and sneakers for a stylish yet casual date night appearance."
          }
        ],
        "Chubby Short": [
          {
            "top": "Relaxed blazer",
            "bottom": "Casual shorts",
            "shoes": "Loafers",
            "description": "A relaxed blazer with casual shorts and loafers for a comfortable yet stylish date night look."
          },
          {
            "top": "Casual polo shirt",
            "bottom": "Stretchy shorts",
            "shoes": "Casual sneakers",
            "description": "A casual polo shirt with stretchy shorts and casual sneakers for a relaxed date night outfit."
          },
          {
            "top": "Short-sleeve button-down shirt",
            "bottom": "Comfortable shorts",
            "shoes": "Slip-ons",
            "description": "A short-sleeve button-down shirt with comfortable shorts and slip-ons for a casual date night appearance."
          }
        ],
        "Chubby Tall": [
          {
            "top": "Relaxed blazer",
            "bottom": "Tailored trousers",
            "shoes": "Leather loafers",
            "description": "A relaxed blazer with tailored trousers and leather loafers for a chubby tall date night look."
          },
          {
            "top": "Loose-fitting button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Casual loafers",
            "description": "A loose-fitting button-down shirt with tailored trousers and casual loafers for a comfortable date night outfit."
          },
          {
            "top": "Elegant shirt",
            "bottom": "Chinos",
            "shoes": "Slip-ons",
            "description": "An elegant shirt with chinos and slip-ons for a sophisticated yet relaxed date night appearance."
          }
        ],
        "Chubby Average": [
          {
            "top": "Comfortable polo shirt",
            "bottom": "Relaxed chinos",
            "shoes": "Casual sneakers",
            "description": "A comfortable polo shirt with relaxed chinos and casual sneakers for a chubby average date night look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Stretchy trousers",
            "shoes": "Loafers",
            "description": "A casual button-down shirt with stretchy trousers and loafers for a smart date night appearance."
          },
          {
            "top": "Smart casual shirt",
            "bottom": "Dress shorts",
            "shoes": "Slip-ons",
            "description": "A smart casual shirt with dress shorts and slip-ons for a stylish date night outfit."
          }
        ],
        "Overweight Short": [
          {
            "top": "Loose-fitting shirt",
            "bottom": "Comfortable shorts",
            "shoes": "Slip-ons",
            "description": "A loose-fitting shirt with comfortable shorts and slip-ons for an overweight short date night look."
          },
          {
            "top": "Casual polo shirt",
            "bottom": "Stretchy shorts",
            "shoes": "Casual sneakers",
            "description": "A casual polo shirt with stretchy shorts and casual sneakers for a relaxed date night appearance."
          },
          {
            "top": "Smart button-down shirt",
            "bottom": "Comfortable shorts",
            "shoes": "Loafers",
            "description": "A smart button-down shirt with comfortable shorts and loafers for a stylish date night outfit."
          }
        ],
        "Overweight Tall": [
          {
            "top": "Relaxed blazer",
            "bottom": "Dress trousers",
            "shoes": "Comfortable loafers",
            "description": "A relaxed blazer with dress trousers and comfortable loafers for an overweight tall date night look."
          },
          {
            "top": "Loose-fitting button-down shirt",
            "bottom": "Tailored trousers",
            "shoes": "Casual loafers",
            "description": "A loose-fitting button-down shirt with tailored trousers and casual loafers for a relaxed date night outfit."
          },
          {
            "top": "Elegant shirt",
            "bottom": "Relaxed chinos",
            "shoes": "Slip-ons",
            "description": "An elegant shirt with relaxed chinos and slip-ons for a sophisticated yet relaxed date night appearance."
          }
        ],
        "Overweight Average": [
          {
            "top": "Comfortable polo shirt",
            "bottom": "Stretchy chinos",
            "shoes": "Casual sneakers",
            "description": "A comfortable polo shirt with stretchy chinos and casual sneakers for an overweight average date night look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Relaxed trousers",
            "shoes": "Loafers",
            "description": "A casual button-down shirt with relaxed trousers and loafers for a smart date night appearance."
          },
          {
            "top": "Smart shirt",
            "bottom": "Dress shorts",
            "shoes": "Slip-ons",
            "description": "A smart shirt with dress shorts and slip-ons for a stylish date night outfit."
          }
        ]
    },
    "Corporate Events": {
    "Skinny Short": [
      {
        top: "Slim-fit blazer",
        bottom: "Tailored shorts",
        shoes: "Loafers",
        description: "A slim-fit blazer with tailored shorts and loafers for a polished corporate event look."
      },
      {
        top: "Button-down shirt",
        bottom: "Dress shorts",
        shoes: "Leather loafers",
        description: "A button-down shirt with dress shorts and leather loafers for a smart corporate appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Chino shorts",
        shoes: "Casual loafers",
        description: "A casual blazer with chino shorts and loafers for a relaxed yet professional look."
      }
    ],
    "Skinny Tall": [
      {
        top: "Tailored blazer",
        bottom: "Slim-fit chinos",
        shoes: "Derby shoes",
        description: "A tailored blazer with slim-fit chinos and Derby shoes for a sharp corporate event outfit."
      },
      {
        top: "Smart shirt",
        bottom: "Dress trousers",
        shoes: "Leather loafers",
        description: "A smart shirt with dress trousers and leather loafers for a sophisticated appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Tailored chinos",
        shoes: "Loafers",
        description: "A casual blazer with tailored chinos and loafers for a comfortable yet formal look."
      }
    ],
    "Skinny Average": [
      {
        top: "Smart blazer",
        bottom: "Dark jeans",
        shoes: "Leather dress shoes",
        description: "A smart blazer with dark jeans and leather dress shoes for a versatile corporate look."
      },
      {
        top: "Fitted shirt",
        bottom: "Chinos",
        shoes: "Loafers",
        description: "A fitted shirt with chinos and loafers for a stylish corporate event outfit."
      },
      {
        top: "Casual blazer",
        bottom: "Slim-fit trousers",
        shoes: "Casual loafers",
        description: "A casual blazer with slim-fit trousers and casual loafers for a relaxed yet professional appearance."
      }
    ],
    "Lean Short": [
      {
        top: "Tailored blazer",
        bottom: "Chino shorts",
        shoes: "Derby shoes",
        description: "A tailored blazer with chino shorts and Derby shoes for a sharp corporate look."
      },
      {
        top: "Smart polo shirt",
        bottom: "Dress shorts",
        shoes: "Casual loafers",
        description: "A smart polo shirt with dress shorts and casual loafers for a stylish yet comfortable appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Chino shorts",
        shoes: "Loafers",
        description: "A casual blazer with chino shorts and loafers for a relaxed corporate event outfit."
      }
    ],
    "Lean Tall": [
      {
        top: "Three-piece suit",
        bottom: "Tailored trousers",
        shoes: "Leather dress shoes",
        description: "A three-piece suit with tailored trousers and leather dress shoes for an elegant corporate event look."
      },
      {
        top: "Tailored blazer",
        bottom: "Slim-fit chinos",
        shoes: "Derby shoes",
        description: "A tailored blazer with slim-fit chinos and Derby shoes for a sophisticated appearance."
      },
      {
        top: "Casual button-down shirt",
        bottom: "Tailored trousers",
        shoes: "Leather loafers",
        description: "A casual button-down shirt with tailored trousers and leather loafers for a refined corporate outfit."
      }
    ],
    "Lean Average": [
      {
        top: "Modern suit",
        bottom: "Dress trousers",
        shoes: "Brogues",
        description: "A modern suit with dress trousers and brogues for a well-rounded corporate look."
      },
      {
        top: "Casual blazer",
        bottom: "Slim-fit jeans",
        shoes: "Loafers",
        description: "A casual blazer with slim-fit jeans and loafers for a chic corporate appearance."
      },
      {
        top: "Tailored shirt",
        bottom: "Chinos",
        shoes: "Sneakers",
        description: "A tailored shirt with chinos and sneakers for a stylish yet casual corporate outfit."
      }
    ],
    "Lean Muscular Short": [
      {
        top: "Structured blazer",
        bottom: "Chino shorts",
        shoes: "Loafers",
        description: "A structured blazer with chino shorts and loafers for a sharp corporate look."
      },
      {
        top: "Fitted button-down shirt",
        bottom: "Chino shorts",
        shoes: "Casual loafers",
        description: "A fitted button-down shirt with chino shorts and casual loafers for a smart corporate appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Chino shorts",
        shoes: "Sneakers",
        description: "A casual blazer with chino shorts and sneakers for a relaxed yet professional look."
      }
    ],
    "Lean Muscular Tall": [
      {
        top: "Three-piece suit",
        bottom: "Tailored trousers",
        shoes: "Patented leather shoes",
        description: "A three-piece suit with tailored trousers and patented leather shoes for a muscular, sophisticated look."
      },
      {
        top: "Tailored blazer",
        bottom: "Slim-fit chinos",
        shoes: "Derby shoes",
        description: "A tailored blazer with slim-fit chinos and Derby shoes for a stylish corporate event appearance."
      },
      {
        top: "Casual button-down shirt",
        bottom: "Tailored trousers",
        shoes: "Leather loafers",
        description: "A casual button-down shirt with tailored trousers and leather loafers for a refined look."
      }
    ],
    "Lean Muscular Average": [
      {
        top: "Modern suit",
        bottom: "Dress trousers",
        shoes: "Brogues",
        description: "A modern suit with dress trousers and brogues for a lean muscular average corporate look."
      },
      {
        top: "Casual blazer",
        bottom: "Slim-fit jeans",
        shoes: "Loafers",
        description: "A casual blazer with slim-fit jeans and loafers for a stylish corporate appearance."
      },
      {
        top: "Tailored shirt",
        bottom: "Chinos",
        shoes: "Sneakers",
        description: "A tailored shirt with chinos and sneakers for a relaxed yet professional look."
      }
    ],
    "Average Short": [
      {
        top: "Smart blazer",
        bottom: "Chino shorts",
        shoes: "Loafers",
        description: "A smart blazer with chino shorts and loafers for a well-dressed corporate event look."
      },
      {
        top: "Stylish button-down shirt",
        bottom: "Dress shorts",
        shoes: "Casual loafers",
        description: "A stylish button-down shirt with dress shorts and casual loafers for a chic corporate appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Chino shorts",
        shoes: "Sneakers",
        description: "A casual blazer with chino shorts and sneakers for a relaxed yet stylish corporate outfit."
      }
    ],
    "Average Tall": [
      {
        top: "Smart blazer",
        bottom: "Tailored trousers",
        shoes: "Leather loafers",
        description: "A smart blazer with tailored trousers and leather loafers for an elegant corporate event look."
      },
      {
        top: "Stylish button-down shirt",
        bottom: "Chinos",
        shoes: "Derby shoes",
        description: "A stylish button-down shirt with chinos and Derby shoes for a sophisticated appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Dark jeans",
        shoes: "Loafers",
        description: "A casual blazer with dark jeans and loafers for a relaxed yet fashionable corporate outfit."
      }
    ],
    "Average Average": [
      {
        top: "Modern suit",
        bottom: "Dress trousers",
        shoes: "Brogues",
        description: "A modern suit with dress trousers and brogues for a well-rounded corporate look."
      },
      {
        top: "Casual blazer",
        bottom: "Slim-fit jeans",
        shoes: "Loafers",
        description: "A casual blazer with slim-fit jeans and loafers for a chic corporate appearance."
      },
      {
        top: "Tailored shirt",
        bottom: "Chinos",
        shoes: "Sneakers",
        description: "A tailored shirt with chinos and sneakers for a stylish yet casual corporate outfit."
      }
    ],
    "Chubby Short": [
      {
        top: "Relaxed blazer",
        bottom: "Casual shorts",
        shoes: "Loafers",
        description: "A relaxed blazer with casual shorts and loafers for a comfortable yet stylish corporate look."
      },
      {
        top: "Casual polo shirt",
        bottom: "Stretchy shorts",
        shoes: "Casual sneakers",
        description: "A casual polo shirt with stretchy shorts and casual sneakers for a relaxed corporate appearance."
      },
      {
        top: "Short-sleeve button-down shirt",
        bottom: "Comfortable shorts",
        shoes: "Slip-ons",
        description: "A short-sleeve button-down shirt with comfortable shorts and slip-ons for a casual corporate outfit."
      }
    ],
    "Chubby Tall": [
      {
        top: "Relaxed blazer",
        bottom: "Tailored trousers",
        shoes: "Leather loafers",
        description: "A relaxed blazer with tailored trousers and leather loafers for a chubby tall corporate look."
      },
      {
        top: "Loose-fitting button-down shirt",
        bottom: "Tailored trousers",
        shoes: "Casual loafers",
        description: "A loose-fitting button-down shirt with tailored trousers and casual loafers for a comfortable appearance."
      },
      {
        top: "Elegant shirt",
        bottom: "Chinos",
        shoes: "Slip-ons",
        description: "An elegant shirt with chinos and slip-ons for a sophisticated yet relaxed corporate outfit."
      }
    ],
    "Chubby Average": [
      {
        top: "Comfortable polo shirt",
        bottom: "Relaxed chinos",
        shoes: "Casual sneakers",
        description: "A comfortable polo shirt with relaxed chinos and casual sneakers for a chubby average corporate look."
      },
      {
        top: "Casual button-down shirt",
        bottom: "Stretchy trousers",
        shoes: "Loafers",
        description: "A casual button-down shirt with stretchy trousers and loafers for a smart corporate appearance."
      },
      {
        top: "Smart casual shirt",
        bottom: "Dress shorts",
        shoes: "Slip-ons",
        description: "A smart casual shirt with dress shorts and slip-ons for a stylish corporate outfit."
      }
    ],
    "Overweight Short": [
      {
        top: "Loose-fitting shirt",
        bottom: "Comfortable shorts",
        shoes: "Slip-ons",
        description: "A loose-fitting shirt with comfortable shorts and slip-ons for an overweight short corporate look."
      },
      {
        top: "Casual polo shirt",
        bottom: "Stretchy shorts",
        shoes: "Casual sneakers",
        description: "A casual polo shirt with stretchy shorts and casual sneakers for a relaxed corporate appearance."
      },
      {
        top: "Smart button-down shirt",
        bottom: "Comfortable shorts",
        shoes: "Loafers",
        description: "A smart button-down shirt with comfortable shorts and loafers for a stylish corporate outfit."
      }
    ],
    "Overweight Tall": [
      {
        top: "Relaxed blazer",
        bottom: "Dress trousers",
        shoes: "Comfortable loafers",
        description: "A relaxed blazer with dress trousers and comfortable loafers for an overweight tall corporate look."
      },
      {
        top: "Loose-fitting button-down shirt",
        bottom: "Tailored trousers",
        shoes: "Casual loafers",
        description: "A loose-fitting button-down shirt with tailored trousers and casual loafers for a relaxed appearance."
      },
      {
        top: "Elegant shirt",
        bottom: "Relaxed chinos",
        shoes: "Slip-ons",
        description: "An elegant shirt with relaxed chinos and slip-ons for a sophisticated yet comfortable corporate outfit."
      }
    ],
    "Overweight Average": [
      {
        top: "Comfortable polo shirt",
        bottom: "Stretchy chinos",
        shoes: "Casual sneakers",
        description: "A comfortable polo shirt with stretchy chinos and casual sneakers for an overweight average corporate look."
      },
      {
        top: "Casual button-down shirt",
        bottom: "Relaxed trousers",
        shoes: "Loafers",
        description: "A casual button-down shirt with relaxed trousers and loafers for a smart corporate appearance."
      },
      {
        top: "Smart shirt",
        bottom: "Dress shorts",
        shoes: "Slip-ons",
        description: "A smart shirt with dress shorts and slip-ons for a stylish corporate outfit."
      }
    ]
     },
    "Holiday Parties": {
    "Skinny Short": [
      {
        top: "Festive sweater",
        bottom: "Dress shorts",
        shoes: "Casual loafers",
        description: "A festive sweater with dress shorts and casual loafers for a cheerful holiday party look."
      },
      {
        top: "Short-sleeve shirt",
        bottom: "Patterned shorts",
        shoes: "Sneakers",
        description: "A short-sleeve shirt with patterned shorts and sneakers for a fun holiday party appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Chino shorts",
        shoes: "Loafers",
        description: "A casual blazer over chino shorts and loafers for a stylish holiday party outfit."
      }
    ],
    "Skinny Tall": [
      {
        top: "Festive blazer",
        bottom: "Slim-fit jeans",
        shoes: "Leather loafers",
        description: "A festive blazer with slim-fit jeans and leather loafers for a sophisticated holiday party look."
      },
      {
        top: "Stylish sweater",
        bottom: "Dark chinos",
        shoes: "Casual loafers",
        description: "A stylish sweater with dark chinos and casual loafers for a festive appearance."
      },
      {
        top: "Casual button-down shirt",
        bottom: "Slim-fit trousers",
        shoes: "Loafers",
        description: "A casual button-down shirt with slim-fit trousers and loafers for a relaxed yet smart holiday party look."
      }
    ],
    "Skinny Average": [
      {
        top: "Festive sweater",
        bottom: "Dark jeans",
        shoes: "Casual loafers",
        description: "A festive sweater with dark jeans and casual loafers for a cheerful holiday party look."
      },
      {
        top: "Button-down shirt",
        bottom: "Chinos",
        shoes: "Leather loafers",
        description: "A button-down shirt with chinos and leather loafers for a stylish holiday party outfit."
      },
      {
        top: "Casual blazer",
        bottom: "Dark jeans",
        shoes: "Sneakers",
        description: "A casual blazer with dark jeans and sneakers for a festive yet casual holiday party appearance."
      }
    ],
    "Lean Short": [
      {
        top: "Festive shirt",
        bottom: "Chino shorts",
        shoes: "Sneakers",
        description: "A festive shirt with chino shorts and sneakers for a fun holiday party look."
      },
      {
        top: "Short-sleeve button-down shirt",
        bottom: "Patterned shorts",
        shoes: "Loafers",
        description: "A short-sleeve button-down shirt with patterned shorts and loafers for a stylish holiday outfit."
      },
      {
        top: "Casual blazer",
        bottom: "Chino shorts",
        shoes: "Casual loafers",
        description: "A casual blazer with chino shorts and casual loafers for a relaxed holiday party appearance."
      }
    ],
    "Lean Tall": [
      {
        top: "Festive suit",
        bottom: "Slim-fit trousers",
        shoes: "Leather dress shoes",
        description: "A festive suit with slim-fit trousers and leather dress shoes for a sophisticated holiday party look."
      },
      {
        top: "Stylish sweater",
        bottom: "Chinos",
        shoes: "Casual loafers",
        description: "A stylish sweater with chinos and casual loafers for a festive appearance."
      },
      {
        top: "Casual button-down shirt",
        bottom: "Slim-fit jeans",
        shoes: "Sneakers",
        description: "A casual button-down shirt with slim-fit jeans and sneakers for a relaxed holiday party outfit."
      }
    ],
    "Lean Average": [
      {
        top: "Festive shirt",
        bottom: "Slim-fit jeans",
        shoes: "Casual loafers",
        description: "A festive shirt with slim-fit jeans and casual loafers for a muscular, stylish holiday party look."
      },
      {
        top: "Casual blazer",
        bottom: "Chinos",
        shoes: "Sneakers",
        description: "A casual blazer with chinos and sneakers for a comfortable yet festive appearance."
      },
      {
        top: "Stylish sweater",
        bottom: "Dark jeans",
        shoes: "Loafers",
        description: "A stylish sweater with dark jeans and loafers for a well-dressed holiday outfit."
      }
    ],
    "Lean Muscular Short": [
      {
        top: "Festive shirt",
        bottom: "Chino shorts",
        shoes: "Sneakers",
        description: "A festive shirt with chino shorts and sneakers for a stylish holiday party look."
      },
      {
        top: "Casual button-down shirt",
        bottom: "Patterned shorts",
        shoes: "Loafers",
        description: "A casual button-down shirt with patterned shorts and loafers for a cheerful holiday outfit."
      },
      {
        top: "Casual blazer",
        bottom: "Chino shorts",
        shoes: "Casual loafers",
        description: "A casual blazer with chino shorts and casual loafers for a comfortable yet festive appearance."
      }
    ],
    "Lean Muscular Tall": [
      {
        top: "Festive suit",
        bottom: "Tailored trousers",
        shoes: "Leather dress shoes",
        description: "A festive suit with tailored trousers and leather dress shoes for a muscular, elegant holiday party look."
      },
      {
        top: "Stylish button-down shirt",
        bottom: "Chinos",
        shoes: "Loafers",
        description: "A stylish button-down shirt with chinos and loafers for a sophisticated holiday appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Slim-fit jeans",
        shoes: "Sneakers",
        description: "A casual blazer with slim-fit jeans and sneakers for a relaxed yet polished holiday outfit."
      }
    ],
    "Lean Muscular Average": [
      {
        top: "Festive shirt",
        bottom: "Slim-fit jeans",
        shoes: "Casual loafers",
        description: "A festive shirt with slim-fit jeans and casual loafers for a muscular, stylish holiday party look."
      },
      {
        top: "Casual blazer",
        bottom: "Chinos",
        shoes: "Sneakers",
        description: "A casual blazer with chinos and sneakers for a comfortable yet festive appearance."
      },
      {
        top: "Stylish sweater",
        bottom: "Dark jeans",
        shoes: "Loafers",
        description: "A stylish sweater with dark jeans and loafers for a well-dressed holiday outfit."
      }
    ],
    "Average Short": [
      {
        top: "Festive sweater",
        bottom: "Chino shorts",
        shoes: "Casual loafers",
        description: "A festive sweater with chino shorts and casual loafers for a cheerful holiday party look."
      },
      {
        top: "Button-down shirt",
        bottom: "Patterned shorts",
        shoes: "Sneakers",
        description: "A button-down shirt with patterned shorts and sneakers for a fun holiday appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Chino shorts",
        shoes: "Loafers",
        description: "A casual blazer with chino shorts and loafers for a stylish holiday outfit."
      }
    ],
    "Average Tall": [
      {
        top: "Festive suit",
        bottom: "Tailored trousers",
        shoes: "Leather loafers",
        description: "A festive suit with tailored trousers and leather loafers for an elegant holiday party look."
      },
      {
        top: "Stylish button-down shirt",
        bottom: "Dark chinos",
        shoes: "Casual loafers",
        description: "A stylish button-down shirt with dark chinos and casual loafers for a festive appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Dark jeans",
        shoes: "Sneakers",
        description: "A casual blazer with dark jeans and sneakers for a relaxed yet polished holiday outfit."
      }
    ],
    "Average Average": [
      {
        top: "Festive sweater",
        bottom: "Dark jeans",
        shoes: "Loafers",
        description: "A festive sweater with dark jeans and loafers for a well-rounded holiday party look."
      },
      {
        top: "Button-down shirt",
        bottom: "Chinos",
        shoes: "Casual loafers",
        description: "A button-down shirt with chinos and casual loafers for a stylish holiday appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Slim-fit jeans",
        shoes: "Sneakers",
        description: "A casual blazer with slim-fit jeans and sneakers for a relaxed yet festive outfit."
      }
    ],
    "Chubby Short": [
      {
        top: "Festive polo shirt",
        bottom: "Comfortable shorts",
        shoes: "Casual sneakers",
        description: "A festive polo shirt with comfortable shorts and casual sneakers for a relaxed holiday look."
      },
      {
        top: "Casual button-down shirt",
        bottom: "Stretchy shorts",
        shoes: "Slip-ons",
        description: "A casual button-down shirt with stretchy shorts and slip-ons for a cheerful holiday appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Stretchy shorts",
        shoes: "Loafers",
        description: "A casual blazer with stretchy shorts and loafers for a comfortable holiday party outfit."
      }
    ],
    "Chubby Tall": [
      {
        top: "Festive shirt",
        bottom: "Tailored trousers",
        shoes: "Leather loafers",
        description: "A festive shirt with tailored trousers and leather loafers for a chubby tall holiday party look."
      },
      {
        top: "Loose-fitting sweater",
        bottom: "Chinos",
        shoes: "Casual loafers",
        description: "A loose-fitting sweater with chinos and casual loafers for a comfortable holiday appearance."
      },
      {
        top: "Casual blazer",
        bottom: "Dark jeans",
        shoes: "Sneakers",
        description: "A casual blazer with dark jeans and sneakers for a relaxed yet festive outfit."
      }
    ],
    "Chubby Average": [
      {
        top: "Comfortable shirt",
        bottom: "Stretchy chinos",
        shoes: "Casual sneakers",
        description: "A comfortable shirt with stretchy chinos and casual sneakers for a chubby average holiday party look."
      },
      {
        top: "Casual sweater",
        bottom: "Relaxed trousers",
        shoes: "Loafers",
        description: "A casual sweater with relaxed trousers and loafers for a cozy holiday appearance."
      },
      {
        top: "Smart casual shirt",
        bottom: "Comfortable shorts",
        shoes: "Slip-ons",
        description: "A smart casual shirt with comfortable shorts and slip-ons for a stylish holiday outfit."
      }
    ],
    "Overweight Short": [
      {
        top: "Festive shirt",
        bottom: "Comfortable shorts",
        shoes: "Casual sneakers",
        description: "A festive shirt with comfortable shorts and casual sneakers for an overweight short holiday look."
      },
      {
        top: "Loose-fitting polo shirt",
        bottom: "Stretchy shorts",
        shoes: "Slip-ons",
        description: "A loose-fitting polo shirt with stretchy shorts and slip-ons for a relaxed holiday appearance."
      },
      {
        top: "Casual button-down shirt",
        bottom: "Comfortable shorts",
        shoes: "Loafers",
        description: "A casual button-down shirt with comfortable shorts and loafers for a stylish holiday outfit."
      }
    ],
    "Overweight Tall": [
      {
        top: "Festive blazer",
        bottom: "Dress trousers",
        shoes: "Comfortable loafers",
        description: "A festive blazer with dress trousers and comfortable loafers for an overweight tall holiday look."
      },
      {
        top: "Loose-fitting button-down shirt",
        bottom: "Tailored trousers",
        shoes: "Casual loafers",
        description: "A loose-fitting button-down shirt with tailored trousers and casual loafers for a relaxed appearance."
      },
      {
        top: "Elegant shirt",
        bottom: "Relaxed chinos",
        shoes: "Slip-ons",
        description: "An elegant shirt with relaxed chinos and slip-ons for a sophisticated yet comfortable holiday outfit."
      }
    ],
    "Overweight Average": [
      {
        top: "Comfortable shirt",
        bottom: "Stretchy chinos",
        shoes: "Casual sneakers",
        description: "A comfortable shirt with stretchy chinos and casual sneakers for an overweight average holiday look."
      },
      {
        top: "Casual sweater",
        bottom: "Relaxed trousers",
        shoes: "Loafers",
        description: "A casual sweater with relaxed trousers and loafers for a cozy holiday appearance."
      },
      {
        top: "Smart casual shirt",
        bottom: "Comfortable shorts",
        shoes: "Slip-ons",
        description: "A smart casual shirt with comfortable shorts and slip-ons for a stylish holiday outfit."
      }
    ]
    },
    "Casual Outings": {
    "Skinny Short": [
      {
        "top": "Slim-fit t-shirt",
        "bottom": "Chino shorts",
        "shoes": "Casual sneakers",
        "description": "A slim-fit t-shirt with chino shorts and casual sneakers, perfect for a relaxed outing."
      },
      {
        "top": "Graphic tee",
        "bottom": "Denim shorts",
        "shoes": "Canvas sneakers",
        "description": "A graphic tee paired with denim shorts and canvas sneakers for a trendy casual look."
      },
      {
        "top": "Short-sleeve button-down",
        "bottom": "Bermuda shorts",
        "shoes": "Slip-on loafers",
        "description": "A short-sleeve button-down shirt with Bermuda shorts and slip-on loafers for a smart casual style."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Slim-fit polo shirt",
        "bottom": "Tailored shorts",
        "shoes": "Espadrilles",
        "description": "A slim-fit polo shirt with tailored shorts and espadrilles for a sleek casual look."
      },
      {
        "top": "Lightweight sweater",
        "bottom": "Well-fitted shorts",
        "shoes": "Boat shoes",
        "description": "A lightweight sweater with well-fitted shorts and boat shoes for a casual yet refined look."
      },
      {
        "top": "Casual henley shirt",
        "bottom": "Slim-fit shorts",
        "shoes": "Loafers",
        "description": "A casual henley shirt with slim-fit shorts and loafers for a chic casual appearance."
      }
    ],
    "Skinny Average": [
      {
        "top": "Crew-neck t-shirt",
        "bottom": "Denim shorts",
        "shoes": "Sneakers",
        "description": "A crew-neck t-shirt with denim shorts and sneakers for a comfortable and laid-back look."
      },
      {
        "top": "Casual shirt",
        "bottom": "Casual shorts",
        "shoes": "Casual slip-ons",
        "description": "A casual shirt with casual shorts and slip-ons, ideal for a casual day out."
      },
      {
        "top": "Short-sleeve button-down",
        "bottom": "Linen shorts",
        "shoes": "Sandals",
        "description": "A short-sleeve button-down shirt with linen shorts and sandals for a relaxed summer look."
      }
    ],
    "Lean Short": [
      {
        "top": "Fitted tank top",
        "bottom": "Athletic shorts",
        "shoes": "Running shoes",
        "description": "A fitted tank top with athletic shorts and running shoes for an active and sporty look."
      },
      {
        "top": "Lightweight polo",
        "bottom": "Cargo shorts",
        "shoes": "Loafers",
        "description": "A lightweight polo with cargo shorts and loafers for a comfortable yet stylish casual outfit."
      },
      {
        "top": "Casual long-sleeve shirt",
        "bottom": "Slim-fit shorts",
        "shoes": "Casual sneakers",
        "description": "A casual long-sleeve shirt with slim-fit shorts and casual sneakers for a relaxed day out."
      }
    ],
    "Lean Tall": [
      {
        "top": "Fitted short-sleeve shirt",
        "bottom": "Well-tailored shorts",
        "shoes": "Boat shoes",
        "description": "A fitted short-sleeve shirt with well-tailored shorts and boat shoes for a polished casual look."
      },
      {
        "top": "Casual blazer",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A casual blazer over a fitted shirt with chino shorts and loafers for a sophisticated casual appearance."
      },
      {
        "top": "Slim-fit henley",
        "bottom": "Linen shorts",
        "shoes": "Casual slip-ons",
        "description": "A slim-fit henley with linen shorts and casual slip-ons for a stylish summer look."
      }
    ],
    "Lean Average": [
      {
        "top": "Fitted tank top",
        "bottom": "Chino shorts",
        "shoes": "Sporty loafers",
        "description": "A fitted tank top with chino shorts and sporty loafers for a comfortable and athletic casual look."
      },
      {
        "top": "Casual button-down",
        "bottom": "Relaxed shorts",
        "shoes": "Casual slip-ons",
        "description": "A casual button-down shirt with relaxed shorts and casual slip-ons for a laid-back yet polished appearance."
      },
      {
        "top": "Short-sleeve henley",
        "bottom": "Stretch shorts",
        "shoes": "Running shoes",
        "description": "A short-sleeve henley with stretch shorts and running shoes for a sporty, casual outfit."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Fitted polo",
        "bottom": "Stretch shorts",
        "shoes": "Sporty loafers",
        "description": "A fitted polo with stretch shorts and sporty loafers for a comfortable, athletic casual look."
      },
      {
        "top": "Casual short-sleeve shirt",
        "bottom": "Relaxed shorts",
        "shoes": "Slip-on sneakers",
        "description": "A casual short-sleeve shirt with relaxed shorts and slip-on sneakers for a smart-casual style."
      },
      {
        "top": "Lightweight henley",
        "bottom": "Athletic shorts",
        "shoes": "Running shoes",
        "description": "A lightweight henley with athletic shorts and running shoes for a sporty, casual outfit."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Fitted short-sleeve shirt",
        "bottom": "Tailored shorts",
        "shoes": "Boat shoes",
        "description": "A fitted short-sleeve shirt with tailored shorts and boat shoes for a sleek, athletic look."
      },
      {
        "top": "Casual blazer",
        "bottom": "Well-fitted shorts",
        "shoes": "Loafers",
        "description": "A casual blazer over a fitted shirt with well-fitted shorts and loafers for an elegant, athletic appearance."
      },
      {
        "top": "Slim-fit henley",
        "bottom": "Linen shorts",
        "shoes": "Casual slip-ons",
        "description": "A slim-fit henley with linen shorts and casual slip-ons for a stylish summer look."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Fitted tank top",
        "bottom": "Chino shorts",
        "shoes": "Sporty loafers",
        "description": "A fitted tank top with chino shorts and sporty loafers for a comfortable and athletic casual look."
      },
      {
        "top": "Casual button-down",
        "bottom": "Relaxed shorts",
        "shoes": "Casual slip-ons",
        "description": "A casual button-down shirt with relaxed shorts and casual slip-ons for a laid-back yet polished appearance."
      },
      {
        "top": "Short-sleeve henley",
        "bottom": "Stretch shorts",
        "shoes": "Running shoes",
        "description": "A short-sleeve henley with stretch shorts and running shoes for a sporty, casual outfit."
      }
    ],
    "Average Short": [
      {
        "top": "Crew-neck t-shirt",
        "bottom": "Chino shorts",
        "shoes": "Sneakers",
        "description": "A crew-neck t-shirt with chino shorts and sneakers for a comfortable, everyday look."
      },
      {
        "top": "Casual button-down",
        "bottom": "Denim shorts",
        "shoes": "Casual loafers",
        "description": "A casual button-down shirt with denim shorts and casual loafers for a relaxed style."
      },
      {
        "top": "Short-sleeve polo",
        "bottom": "Bermuda shorts",
        "shoes": "Slip-on sneakers",
        "description": "A short-sleeve polo with Bermuda shorts and slip-on sneakers for a smart casual outfit."
      }
    ],
    "Average Tall": [
      {
        "top": "Crew-neck t-shirt",
        "bottom": "Tailored shorts",
        "shoes": "Boat shoes",
        "description": "A crew-neck t-shirt with tailored shorts and boat shoes for a balanced casual look."
      },
      {
        "top": "Lightweight button-down",
        "bottom": "Well-fitted shorts",
        "shoes": "Espadrilles",
        "description": "A lightweight button-down shirt with well-fitted shorts and espadrilles for a refined casual appearance."
      },
      {
        "top": "Short-sleeve henley",
        "bottom": "Chino shorts",
        "shoes": "Casual loafers",
        "description": "A short-sleeve henley with chino shorts and casual loafers for a laid-back yet polished style."
      }
    ],
    "Average Average": [
      {
        "top": "Crew-neck t-shirt",
        "bottom": "Denim shorts",
        "shoes": "Sneakers",
        "description": "A crew-neck t-shirt with denim shorts and sneakers for a comfortable and casual look."
      },
      {
        "top": "Casual shirt",
        "bottom": "Chino shorts",
        "shoes": "Casual loafers",
        "description": "A casual shirt with chino shorts and loafers for a smart-casual outfit."
      },
      {
        "top": "Short-sleeve button-down",
        "bottom": "Linen shorts",
        "shoes": "Sandals",
        "description": "A short-sleeve button-down shirt with linen shorts and sandals for a relaxed summer look."
      }
    ],
    "Chubby Short": [
      {
        "top": "Casual shirt",
        "bottom": "Relaxed-fit shorts",
        "shoes": "Comfortable loafers",
        "description": "A casual shirt with relaxed-fit shorts and comfortable loafers for a laid-back day out."
      },
      {
        "top": "Loose-fitting t-shirt",
        "bottom": "Stretch shorts",
        "shoes": "Casual slip-ons",
        "description": "A loose-fitting t-shirt with stretch shorts and casual slip-ons for a comfortable and easygoing look."
      },
      {
        "top": "Short-sleeve button-down",
        "bottom": "Chino shorts",
        "shoes": "Casual sneakers",
        "description": "A short-sleeve button-down shirt with chino shorts and casual sneakers for a relaxed style."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Loose-fitting polo",
        "bottom": "Tailored shorts",
        "shoes": "Boat shoes",
        "description": "A loose-fitting polo with tailored shorts and boat shoes for a comfortable and stylish look."
      },
      {
        "top": "Casual long-sleeve shirt",
        "bottom": "Well-fitted shorts",
        "shoes": "Casual loafers",
        "description": "A casual long-sleeve shirt with well-fitted shorts and casual loafers for a relaxed yet polished appearance."
      },
      {
        "top": "Lightweight button-down",
        "bottom": "Chino shorts",
        "shoes": "Espadrilles",
        "description": "A lightweight button-down shirt with chino shorts and espadrilles for a smart casual outfit."
      }
    ],
    "Chubby Average": [
      {
        "top": "Loose-fitting t-shirt",
        "bottom": "Denim shorts",
        "shoes": "Sneakers",
        "description": "A loose-fitting t-shirt with denim shorts and sneakers for a comfortable and casual look."
      },
      {
        "top": "Casual button-down",
        "bottom": "Chino shorts",
        "shoes": "Casual loafers",
        "description": "A casual button-down shirt with chino shorts and casual loafers for a laid-back style."
      },
      {
        "top": "Short-sleeve polo",
        "bottom": "Relaxed-fit shorts",
        "shoes": "Sandals",
        "description": "A short-sleeve polo with relaxed-fit shorts and sandals for a comfortable summer outfit."
      }
    ],
    "Overweight Short": [
      {
        "top": "Loose-fitting shirt",
        "bottom": "Comfortable shorts",
        "shoes": "Comfortable sneakers",
        "description": "A loose-fitting shirt with comfortable shorts and sneakers for a relaxed and easygoing look."
      },
      {
        "top": "Casual long-sleeve shirt",
        "bottom": "Stretch shorts",
        "shoes": "Casual loafers",
        "description": "A casual long-sleeve shirt with stretch shorts and loafers for a laid-back yet stylish outfit."
      },
      {
        "top": "Short-sleeve button-down",
        "bottom": "Chino shorts",
        "shoes": "Casual sneakers",
        "description": "A short-sleeve button-down shirt with chino shorts and sneakers for a comfortable, casual appearance."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Loose-fitting polo",
        "bottom": "Tailored shorts",
        "shoes": "Comfortable loafers",
        "description": "A loose-fitting polo with tailored shorts and loafers for a relaxed and stylish look."
      },
      {
        "top": "Casual blazer",
        "bottom": "Chino shorts",
        "shoes": "Boat shoes",
        "description": "A casual blazer over a relaxed shirt with chino shorts and boat shoes for an elegant appearance."
      },
      {
        "top": "Lightweight button-down",
        "bottom": "Well-fitted shorts",
        "shoes": "Espadrilles",
        "description": "A lightweight button-down shirt with well-fitted shorts and espadrilles for a smart casual style."
      }
    ],
    "Overweight Average": [
      {
        "top": "Loose-fitting t-shirt",
        "bottom": "Denim shorts",
        "shoes": "Sneakers",
        "description": "A loose-fitting t-shirt with denim shorts and sneakers for a relaxed and comfortable look."
      },
      {
        "top": "Casual shirt",
        "bottom": "Chino shorts",
        "shoes": "Casual loafers",
        "description": "A casual shirt with chino shorts and loafers for a laid-back, everyday outfit."
      },
      {
        "top": "Short-sleeve polo",
        "bottom": "Relaxed-fit shorts",
        "shoes": "Sandals",
        "description": "A short-sleeve polo with relaxed-fit shorts and sandals for a comfortable summer appearance."
      }
    ]
    },
    "Formal Dinners": {
        "Skinny Short": [
          {
            "top": "Slim-fit dress shirt",
            "bottom": "Tailored dress shorts",
            "shoes": "Dress loafers",
            "description": "A slim-fit dress shirt with tailored dress shorts and dress loafers for a refined formal dinner look."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Dress shorts",
            "shoes": "Oxfords",
            "description": "A lightweight blazer over a dress shirt with dress shorts and Oxfords for an elegant appearance."
          },
          {
            "top": "Fitted button-down shirt",
            "bottom": "Slim dress shorts",
            "shoes": "Brogues",
            "description": "A fitted button-down shirt with slim dress shorts and brogues for a stylish formal outfit."
          }
        ],
        "Skinny Tall": [
          {
            "top": "Slim-fit dress shirt",
            "bottom": "Tailored trousers",
            "shoes": "Oxford shoes",
            "description": "A slim-fit dress shirt with tailored trousers and Oxford shoes for a sleek formal dinner look."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Well-fitted trousers",
            "shoes": "Loafers",
            "description": "A lightweight blazer over a dress shirt with well-fitted trousers and loafers for an elegant appearance."
          },
          {
            "top": "Dress shirt with a vest",
            "bottom": "Tailored trousers",
            "shoes": "Derby shoes",
            "description": "A dress shirt with a vest and tailored trousers, paired with Derby shoes for a refined formal dinner outfit."
          }
        ],
        "Skinny Average": [
          {
            "top": "Fitted dress shirt",
            "bottom": "Tailored trousers",
            "shoes": "Oxford shoes",
            "description": "A fitted dress shirt with tailored trousers and Oxford shoes for a classic formal dinner look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Well-fitted dress pants",
            "shoes": "Dress loafers",
            "description": "A casual blazer with well-fitted dress pants and dress loafers for a relaxed yet elegant appearance."
          },
          {
            "top": "Long-sleeve button-down",
            "bottom": "Dress trousers",
            "shoes": "Brogues",
            "description": "A long-sleeve button-down shirt with dress trousers and brogues for a sophisticated look."
          }
        ],
        "Lean Short": [
          {
            "top": "Fitted dress shirt",
            "bottom": "Slim-fit dress shorts",
            "shoes": "Loafers",
            "description": "A fitted dress shirt with slim-fit dress shorts and loafers for a stylish and comfortable formal dinner look."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Dress shorts",
            "shoes": "Oxfords",
            "description": "A lightweight blazer over a fitted shirt with dress shorts and Oxfords for a chic appearance."
          },
          {
            "top": "Tailored dress shirt",
            "bottom": "Chino shorts",
            "shoes": "Dress loafers",
            "description": "A tailored dress shirt with chino shorts and dress loafers for a refined casual formal outfit."
          }
        ],
        "Lean Tall": [
          {
            "top": "Slim-fit dress shirt",
            "bottom": "Well-tailored trousers",
            "shoes": "Oxford shoes",
            "description": "A slim-fit dress shirt with well-tailored trousers and Oxford shoes for a sophisticated formal dinner look."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Tailored trousers",
            "shoes": "Loafers",
            "description": "A lightweight blazer over a dress shirt with tailored trousers and loafers for an elegant style."
          },
          {
            "top": "Dress shirt with vest",
            "bottom": "Tailored trousers",
            "shoes": "Derby shoes",
            "description": "A dress shirt with a vest and tailored trousers, paired with Derby shoes for a classic formal dinner appearance."
          }
        ],
        "Lean Muscular Short": [
          {
            "top": "Fitted dress shirt",
            "bottom": "Stretch dress shorts",
            "shoes": "Dress loafers",
            "description": "A fitted dress shirt with stretch dress shorts and dress loafers for a sharp and athletic formal look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit dress shorts",
            "shoes": "Oxfords",
            "description": "A casual blazer with slim-fit dress shorts and Oxfords for a refined yet comfortable outfit."
          },
          {
            "top": "Tailored dress shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A tailored dress shirt with chino shorts and loafers for a smart-casual formal dinner appearance."
          }
        ],
        "Lean Muscular Tall": [
          {
            "top": "Slim-fit dress shirt",
            "bottom": "Well-tailored trousers",
            "shoes": "Oxford shoes",
            "description": "A slim-fit dress shirt with well-tailored trousers and Oxford shoes for a polished formal dinner look."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Tailored trousers",
            "shoes": "Loafers",
            "description": "A lightweight blazer over a fitted shirt with tailored trousers and loafers for an elegant appearance."
          },
          {
            "top": "Dress shirt with vest",
            "bottom": "Tailored trousers",
            "shoes": "Derby shoes",
            "description": "A dress shirt with a vest and tailored trousers, paired with Derby shoes for a classic formal dinner outfit."
          }
        ],
        "Lean Muscular Average": [
          {
            "top": "Fitted dress shirt",
            "bottom": "Chino trousers",
            "shoes": "Brogues",
            "description": "A fitted dress shirt with chino trousers and brogues for a stylish and athletic formal look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Tailored trousers",
            "shoes": "Dress loafers",
            "description": "A casual blazer with tailored trousers and dress loafers for a relaxed yet sophisticated appearance."
          },
          {
            "top": "Short-sleeve dress shirt",
            "bottom": "Slim-fit trousers",
            "shoes": "Oxford shoes",
            "description": "A short-sleeve dress shirt with slim-fit trousers and Oxford shoes for a refined yet comfortable outfit."
          }
        ],
        "Average Short": [
          {
            "top": "Dress shirt",
            "bottom": "Tailored dress shorts",
            "shoes": "Dress loafers",
            "description": "A dress shirt with tailored dress shorts and dress loafers for a classic formal dinner look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Dress shorts",
            "shoes": "Oxfords",
            "description": "A casual blazer with dress shorts and Oxfords for a relaxed yet sophisticated appearance."
          },
          {
            "top": "Long-sleeve button-down",
            "bottom": "Slim-fit dress shorts",
            "shoes": "Brogues",
            "description": "A long-sleeve button-down shirt with slim-fit dress shorts and brogues for a stylish look."
          }
        ],
        "Average Tall": [
          {
            "top": "Dress shirt",
            "bottom": "Tailored trousers",
            "shoes": "Oxford shoes",
            "description": "A classic dress shirt with tailored trousers and Oxford shoes for a polished formal dinner look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Well-fitted trousers",
            "shoes": "Loafers",
            "description": "A casual blazer with well-fitted trousers and loafers for an elegant and relaxed style."
          },
          {
            "top": "Long-sleeve button-down",
            "bottom": "Chino trousers",
            "shoes": "Brogues",
            "description": "A long-sleeve button-down shirt with chino trousers and brogues for a refined appearance."
          }
        ],
        "Average Average": [
          {
            "top": "Dress shirt",
            "bottom": "Tailored trousers",
            "shoes": "Oxford shoes",
            "description": "A dress shirt with tailored trousers and Oxford shoes for a classic and sophisticated formal look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Well-fitted dress pants",
            "shoes": "Loafers",
            "description": "A casual blazer with well-fitted dress pants and loafers for a relaxed yet elegant outfit."
          },
          {
            "top": "Long-sleeve button-down",
            "bottom": "Chino trousers",
            "shoes": "Casual loafers",
            "description": "A long-sleeve button-down shirt with chino trousers and casual loafers for a polished yet comfortable appearance."
          }
        ],
        "Chubby Short": [
          {
            "top": "Relaxed-fit dress shirt",
            "bottom": "Comfortable dress shorts",
            "shoes": "Comfortable loafers",
            "description": "A relaxed-fit dress shirt with comfortable dress shorts and loafers for a stylish, comfortable dinner look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Relaxed dress shorts",
            "shoes": "Dress loafers",
            "description": "A casual blazer with relaxed dress shorts and dress loafers for a comfortable yet elegant appearance."
          },
          {
            "top": "Loose-fitting button-down",
            "bottom": "Chino shorts",
            "shoes": "Casual sneakers",
            "description": "A loose-fitting button-down shirt with chino shorts and casual sneakers for a laid-back formal style."
          }
        ],
        "Chubby Tall": [
          {
            "top": "Loose-fitting dress shirt",
            "bottom": "Tailored dress shorts",
            "shoes": "Comfortable loafers",
            "description": "A loose-fitting dress shirt with tailored dress shorts and comfortable loafers for a refined yet relaxed look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Well-fitted trousers",
            "shoes": "Boat shoes",
            "description": "A casual blazer over a dress shirt with well-fitted trousers and boat shoes for an elegant appearance."
          },
          {
            "top": "Lightweight button-down",
            "bottom": "Chino trousers",
            "shoes": "Espadrilles",
            "description": "A lightweight button-down shirt with chino trousers and espadrilles for a smart, comfortable outfit."
          }
        ],
        "Chubby Average": [
          {
            "top": "Loose-fitting dress shirt",
            "bottom": "Comfortable trousers",
            "shoes": "Casual loafers",
            "description": "A loose-fitting dress shirt with comfortable trousers and casual loafers for a relaxed, formal dinner look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Chino shorts",
            "shoes": "Casual loafers",
            "description": "A casual blazer with chino shorts and casual loafers for a comfortable yet stylish appearance."
          },
          {
            "top": "Relaxed button-down",
            "bottom": "Tailored trousers",
            "shoes": "Brogues",
            "description": "A relaxed button-down shirt with tailored trousers and brogues for a polished yet comfortable outfit."
          }
        ],
        "Overweight Short": [
          {
            "top": "Loose-fitting dress shirt",
            "bottom": "Comfortable dress shorts",
            "shoes": "Comfortable loafers",
            "description": "A loose-fitting dress shirt with comfortable dress shorts and loafers for a relaxed formal dinner look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Relaxed-fit shorts",
            "shoes": "Casual sneakers",
            "description": "A casual blazer with relaxed-fit shorts and casual sneakers for a comfortable yet polished look."
          },
          {
            "top": "Long-sleeve button-down",
            "bottom": "Chino shorts",
            "shoes": "Casual loafers",
            "description": "A long-sleeve button-down shirt with chino shorts and casual loafers for a laid-back formal outfit."
          }
        ],
        "Overweight Tall": [
          {
            "top": "Loose-fitting dress shirt",
            "bottom": "Tailored trousers",
            "shoes": "Comfortable loafers",
            "description": "A loose-fitting dress shirt with tailored trousers and comfortable loafers for a refined, relaxed look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Well-fitted trousers",
            "shoes": "Boat shoes",
            "description": "A casual blazer over a dress shirt with well-fitted trousers and boat shoes for a sophisticated appearance."
          },
          {
            "top": "Lightweight button-down",
            "bottom": "Chino trousers",
            "shoes": "Espadrilles",
            "description": "A lightweight button-down shirt with chino trousers and espadrilles for a smart, comfortable formal outfit."
          }
        ],
        "Overweight Average": [
          {
            "top": "Loose-fitting dress shirt",
            "bottom": "Comfortable trousers",
            "shoes": "Casual loafers",
            "description": "A loose-fitting dress shirt with comfortable trousers and casual loafers for a relaxed formal dinner look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Chino trousers",
            "shoes": "Casual loafers",
            "description": "A casual blazer with chino trousers and casual loafers for a laid-back yet stylish appearance."
          },
          {
            "top": "Long-sleeve button-down",
            "bottom": "Tailored trousers",
            "shoes": "Brogues",
            "description": "A long-sleeve button-down shirt with tailored trousers and brogues for a polished look."
          }
        ]
    },
    "Beach Vacations": {
        "Skinny Short": [
          {
            "top": "Lightweight short-sleeve shirt",
            "bottom": "Tailored swim trunks",
            "shoes": "Flip-flops",
            "description": "A lightweight short-sleeve shirt with tailored swim trunks and flip-flops for a stylish beach look."
          },
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a relaxed beach day."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Short swim trunks",
            "shoes": "Espadrilles",
            "description": "A casual button-down shirt with short swim trunks and espadrilles for a chic beach vacation."
          }
        ],
        "Skinny Tall": [
          {
            "top": "Lightweight button-down shirt",
            "bottom": "Tailored swim trunks",
            "shoes": "Loafers",
            "description": "A lightweight button-down shirt with tailored swim trunks and loafers for an elegant beach style."
          },
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a comfortable beach outfit."
          },
          {
            "top": "Short-sleeve shirt",
            "bottom": "Chino shorts",
            "shoes": "Espadrilles",
            "description": "A short-sleeve shirt with chino shorts and espadrilles for a sophisticated beach look."
          }
        ],
        "Skinny Average": [
          {
            "top": "Short-sleeve shirt",
            "bottom": "Swim trunks",
            "shoes": "Flip-flops",
            "description": "A short-sleeve shirt with swim trunks and flip-flops for a classic beach style."
          },
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a laid-back beach appearance."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Espadrilles",
            "description": "A casual button-down shirt with chino shorts and espadrilles for a relaxed yet stylish beach outfit."
          }
        ],
        "Lean Short": [
          {
            "top": "Lightweight tank top",
            "bottom": "Short swim trunks",
            "shoes": "Flip-flops",
            "description": "A lightweight tank top with short swim trunks and flip-flops for a sporty beach look."
          },
          {
            "top": "Short-sleeve shirt",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A short-sleeve shirt with board shorts and sandals for a casual beach day."
          },
          {
            "top": "Casual linen shirt",
            "bottom": "Tailored shorts",
            "shoes": "Espadrilles",
            "description": "A casual linen shirt with tailored shorts and espadrilles for a smart beach outfit."
          }
        ],
        "Lean Tall": [
          {
            "top": "Lightweight button-down shirt",
            "bottom": "Swim trunks",
            "shoes": "Loafers",
            "description": "A lightweight button-down shirt with swim trunks and loafers for a refined beach look."
          },
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a relaxed, athletic beach style."
          },
          {
            "top": "Short-sleeve button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Espadrilles",
            "description": "A short-sleeve button-down shirt with chino shorts and espadrilles for an elegant beach appearance."
          }
        ],
        "Lean Average": [
          {
            "top": "Fitted tank top",
            "bottom": "Board shorts",
            "shoes": "Flip-flops",
            "description": "A fitted tank top with board shorts and flip-flops for an athletic beach look."
          },
          {
            "top": "Short-sleeve shirt",
            "bottom": "Swim trunks",
            "shoes": "Sandals",
            "description": "A short-sleeve shirt with swim trunks and sandals for a casual beach day."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Tailored shorts",
            "shoes": "Espadrilles",
            "description": "A casual button-down shirt with tailored shorts and espadrilles for a smart beach outfit."
          }
        ],
        "Lean Muscular Short": [
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a sporty beach look."
          },
          {
            "top": "Short-sleeve button-down shirt",
            "bottom": "Swim trunks",
            "shoes": "Espadrilles",
            "description": "A short-sleeve button-down shirt with swim trunks and espadrilles for a stylish beach appearance."
          },
          {
            "top": "Casual shirt",
            "bottom": "Tailored shorts",
            "shoes": "Loafers",
            "description": "A casual shirt with tailored shorts and loafers for a refined beach look."
          }
        ],
        "Lean Muscular Tall": [
          {
            "top": "Lightweight button-down shirt",
            "bottom": "Tailored swim trunks",
            "shoes": "Loafers",
            "description": "A lightweight button-down shirt with tailored swim trunks and loafers for an elegant beach outfit."
          },
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a sporty, comfortable look."
          },
          {
            "top": "Short-sleeve shirt",
            "bottom": "Chino shorts",
            "shoes": "Espadrilles",
            "description": "A short-sleeve shirt with chino shorts and espadrilles for a sophisticated beach style."
          }
        ],
        "Lean Muscular Average": [
          {
            "top": "Fitted tank top",
            "bottom": "Short swim trunks",
            "shoes": "Flip-flops",
            "description": "A fitted tank top with short swim trunks and flip-flops for a stylish athletic look."
          },
          {
            "top": "Short-sleeve button-down",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A short-sleeve button-down with board shorts and sandals for a chic beach appearance."
          },
          {
            "top": "Casual shirt",
            "bottom": "Tailored shorts",
            "shoes": "Espadrilles",
            "description": "A casual shirt with tailored shorts and espadrilles for a refined beach style."
          }
        ],
        "Average Short": [
          {
            "top": "Short-sleeve shirt",
            "bottom": "Swim trunks",
            "shoes": "Flip-flops",
            "description": "A short-sleeve shirt with swim trunks and flip-flops for a classic beach look."
          },
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a relaxed beach day."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Espadrilles",
            "description": "A casual button-down shirt with chino shorts and espadrilles for a stylish beach appearance."
          }
        ],
        "Average Tall": [
          {
            "top": "Lightweight button-down shirt",
            "bottom": "Swim trunks",
            "shoes": "Loafers",
            "description": "A lightweight button-down shirt with swim trunks and loafers for a sophisticated beach look."
          },
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a laid-back beach style."
          },
          {
            "top": "Short-sleeve shirt",
            "bottom": "Chino shorts",
            "shoes": "Espadrilles",
            "description": "A short-sleeve shirt with chino shorts and espadrilles for an elegant beach appearance."
          }
        ],
        "Average Average": [
          {
            "top": "Casual button-down shirt",
            "bottom": "Tailored swim trunks",
            "shoes": "Espadrilles",
            "description": "A casual button-down shirt with tailored swim trunks and espadrilles for a relaxed beach look."
          },
          {
            "top": "Short-sleeve shirt",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A short-sleeve shirt with board shorts and sandals for a classic beach day."
          },
          {
            "top": "Tank top",
            "bottom": "Chino shorts",
            "shoes": "Flip-flops",
            "description": "A tank top with chino shorts and flip-flops for a comfortable beach outfit."
          }
        ],
        "Chubby Short": [
          {
            "top": "Relaxed-fit short-sleeve shirt",
            "bottom": "Short swim trunks",
            "shoes": "Flip-flops",
            "description": "A relaxed-fit short-sleeve shirt with short swim trunks and flip-flops for a comfortable beach look."
          },
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a casual beach day."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Tailored shorts",
            "shoes": "Espadrilles",
            "description": "A casual button-down shirt with tailored shorts and espadrilles for a smart beach outfit."
          }
        ],
        "Chubby Tall": [
          {
            "top": "Lightweight button-down shirt",
            "bottom": "Swim trunks",
            "shoes": "Loafers",
            "description": "A lightweight button-down shirt with swim trunks and loafers for a refined beach look."
          },
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a laid-back beach style."
          },
          {
            "top": "Short-sleeve shirt",
            "bottom": "Chino shorts",
            "shoes": "Espadrilles",
            "description": "A short-sleeve shirt with chino shorts and espadrilles for a sophisticated beach appearance."
          }
        ],
        "Chubby Average": [
          {
            "top": "Relaxed-fit short-sleeve shirt",
            "bottom": "Tailored swim trunks",
            "shoes": "Flip-flops",
            "description": "A relaxed-fit short-sleeve shirt with tailored swim trunks and flip-flops for a comfortable beach outfit."
          },
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a casual beach day."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Shorts",
            "shoes": "Espadrilles",
            "description": "A casual button-down shirt with shorts and espadrilles for a relaxed beach appearance."
          }
        ],
        "Overweight Short": [
          {
            "top": "Loose-fit short-sleeve shirt",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A loose-fit short-sleeve shirt with board shorts and sandals for a relaxed beach day."
          },
          {
            "top": "Tank top",
            "bottom": "Swim trunks",
            "shoes": "Flip-flops",
            "description": "A tank top with swim trunks and flip-flops for a comfortable beach look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Tailored shorts",
            "shoes": "Espadrilles",
            "description": "A casual button-down shirt with tailored shorts and espadrilles for a laid-back beach style."
          }
        ],
        "Overweight Tall": [
          {
            "top": "Lightweight button-down shirt",
            "bottom": "Swim trunks",
            "shoes": "Loafers",
            "description": "A lightweight button-down shirt with swim trunks and loafers for a sophisticated beach look."
          },
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a comfortable beach day."
          },
          {
            "top": "Short-sleeve shirt",
            "bottom": "Chino shorts",
            "shoes": "Espadrilles",
            "description": "A short-sleeve shirt with chino shorts and espadrilles for a relaxed beach appearance."
          }
        ],
        "Overweight Average": [
          {
            "top": "Loose-fit short-sleeve shirt",
            "bottom": "Tailored swim trunks",
            "shoes": "Flip-flops",
            "description": "A loose-fit short-sleeve shirt with tailored swim trunks and flip-flops for a comfortable beach outfit."
          },
          {
            "top": "Tank top",
            "bottom": "Board shorts",
            "shoes": "Sandals",
            "description": "A tank top with board shorts and sandals for a laid-back beach look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Shorts",
            "shoes": "Espadrilles",
            "description": "A casual button-down shirt with shorts and espadrilles for a relaxed beach style."
          }
        ]
    },
    
    "Baby Showers": {
        "Skinny Short": [
          {
            "top": "Short-sleeve button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Casual loafers",
            "description": "A short-sleeve button-down shirt with chino shorts and casual loafers for a smart baby shower look."
          },
          {
            "top": "Lightweight cardigan",
            "bottom": "Khaki shorts",
            "shoes": "Sneakers",
            "description": "A lightweight cardigan with khaki shorts and sneakers, perfect for a relaxed baby shower."
          },
          {
            "top": "Printed polo shirt",
            "bottom": "Denim shorts",
            "shoes": "Boat shoes",
            "description": "A printed polo shirt with denim shorts and boat shoes for a casual yet stylish appearance."
          }
        ],
        "Skinny Tall": [
          {
            "top": "Slim-fit dress shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A slim-fit dress shirt with chino shorts and loafers for a sophisticated baby shower look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Tailored shorts",
            "shoes": "Dress shoes",
            "description": "A casual blazer over tailored shorts with dress shoes for a refined baby shower outfit."
          },
          {
            "top": "Light sweater",
            "bottom": "Denim shorts",
            "shoes": "Sneakers",
            "description": "A light sweater with denim shorts and sneakers for a smart casual baby shower style."
          }
        ],
        "Skinny Average": [
          {
            "top": "Casual shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A casual shirt with chino shorts and loafers for a neat and comfortable baby shower outfit."
          },
          {
            "top": "Lightweight pullover",
            "bottom": "Khaki shorts",
            "shoes": "Sneakers",
            "description": "A lightweight pullover with khaki shorts and sneakers for a relaxed yet polished look."
          },
          {
            "top": "Short-sleeve polo",
            "bottom": "Denim shorts",
            "shoes": "Boat shoes",
            "description": "A short-sleeve polo with denim shorts and boat shoes for a casual baby shower appearance."
          }
        ],
        "Lean Short": [
          {
            "top": "Fitted graphic tee",
            "bottom": "Cargo shorts",
            "shoes": "Sneakers",
            "description": "A fitted graphic tee with cargo shorts and sneakers for a comfortable and trendy baby shower outfit."
          },
          {
            "top": "Casual shirt",
            "bottom": "Khaki shorts",
            "shoes": "Loafers",
            "description": "A casual shirt with khaki shorts and loafers for a relaxed yet stylish appearance."
          },
          {
            "top": "Short-sleeve hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A short-sleeve hoodie with denim shorts and high-top sneakers for a cool, casual look."
          }
        ],
        "Lean Tall": [
          {
            "top": "Fitted dress shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A fitted dress shirt with chino shorts and loafers for a polished baby shower outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Tailored shorts",
            "shoes": "Dress shoes",
            "description": "A casual blazer with tailored shorts and dress shoes for a sophisticated appearance."
          },
          {
            "top": "Light sweater",
            "bottom": "Denim shorts",
            "shoes": "Sneakers",
            "description": "A light sweater with denim shorts and sneakers for a smart casual baby shower look."
          }
        ],
        "Lean Average": [
          {
            "top": "Fitted graphic tee",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A fitted graphic tee with chino shorts and sneakers for a trendy baby shower outfit."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Khaki shorts",
            "shoes": "Loafers",
            "description": "A casual button-down shirt with khaki shorts and loafers for a smart yet casual look."
          },
          {
            "top": "Short-sleeve hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A short-sleeve hoodie with denim shorts and high-top sneakers for a relaxed style."
          }
        ],
        "Lean Muscular Short": [
          {
            "top": "Muscle-fit graphic tee",
            "bottom": "Cargo shorts",
            "shoes": "Sneakers",
            "description": "A muscle-fit graphic tee with cargo shorts and sneakers for an athletic yet comfortable baby shower look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A casual button-down shirt with chino shorts and loafers for a polished appearance."
          },
          {
            "top": "Short-sleeve hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A short-sleeve hoodie with denim shorts and high-top sneakers for a trendy and relaxed look."
          }
        ],
        "Lean Muscular Tall": [
          {
            "top": "Muscle-fit dress shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A muscle-fit dress shirt with chino shorts and loafers for a sophisticated baby shower outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Tailored shorts",
            "shoes": "Dress shoes",
            "description": "A casual blazer over tailored shorts with dress shoes for a refined look."
          },
          {
            "top": "Light sweater",
            "bottom": "Denim shorts",
            "shoes": "Sneakers",
            "description": "A light sweater with denim shorts and sneakers for a casual yet stylish appearance."
          }
        ],
        "Lean Muscular Average": [
          {
            "top": "Muscle-fit graphic tee",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A muscle-fit graphic tee with chino shorts and sneakers for an athletic baby shower look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Khaki shorts",
            "shoes": "Loafers",
            "description": "A casual button-down shirt with khaki shorts and loafers for a stylish and relaxed appearance."
          },
          {
            "top": "Short-sleeve hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A short-sleeve hoodie with denim shorts and high-top sneakers for a cool, laid-back look."
          }
        ],
        "Average Short": [
          {
            "top": "Casual t-shirt",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A casual t-shirt with chino shorts and sneakers for a comfortable baby shower look."
          },
          {
            "top": "Short-sleeve button-down",
            "bottom": "Khaki shorts",
            "shoes": "Loafers",
            "description": "A short-sleeve button-down shirt with khaki shorts and loafers for a relaxed yet neat appearance."
          },
          {
            "top": "Hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A hoodie with denim shorts and high-top sneakers for a laid-back style."
          }
        ],
        "Average Tall": [
          {
            "top": "Casual button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A casual button-down shirt with chino shorts and loafers for a polished baby shower look."
          },
          {
            "top": "Lightweight sweater",
            "bottom": "Khaki shorts",
            "shoes": "Sneakers",
            "description": "A lightweight sweater with khaki shorts and sneakers for a smart casual appearance."
          },
          {
            "top": "Casual jacket",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A casual jacket with denim shorts and high-top sneakers for a relaxed yet stylish look."
          }
        ],
        "Average Average": [
          {
            "top": "Casual t-shirt",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A casual t-shirt with chino shorts and sneakers for a comfortable and casual baby shower outfit."
          },
          {
            "top": "Short-sleeve button-down",
            "bottom": "Khaki shorts",
            "shoes": "Loafers",
            "description": "A short-sleeve button-down shirt with khaki shorts and loafers for a relaxed yet polished look."
          },
          {
            "top": "Lightweight hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A lightweight hoodie with denim shorts and high-top sneakers for a cool, comfortable style."
          }
        ],
        "Chubby Short": [
          {
            "top": "Loose-fit button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Casual loafers",
            "description": "A loose-fit button-down shirt with chino shorts and casual loafers for a relaxed baby shower appearance."
          },
          {
            "top": "Comfortable hoodie",
            "bottom": "Khaki shorts",
            "shoes": "Sneakers",
            "description": "A comfortable hoodie with khaki shorts and sneakers for a laid-back look."
          },
          {
            "top": "Relaxed graphic tee",
            "bottom": "Denim shorts",
            "shoes": "Boat shoes",
            "description": "A relaxed graphic tee with denim shorts and boat shoes for a casual baby shower outfit."
          }
        ],
        "Chubby Tall": [
          {
            "top": "Loose-fit shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A loose-fit shirt with chino shorts and loafers for a comfortable baby shower look."
          },
          {
            "top": "Lightweight jacket",
            "bottom": "Khaki shorts",
            "shoes": "Sneakers",
            "description": "A lightweight jacket with khaki shorts and sneakers for a stylish appearance."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A casual hoodie with denim shorts and high-top sneakers for a relaxed style."
          }
        ],
        "Chubby Average": [
          {
            "top": "Loose-fit button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A loose-fit button-down shirt with chino shorts and sneakers for a comfortable baby shower outfit."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Khaki shorts",
            "shoes": "Boat shoes",
            "description": "A casual hoodie with khaki shorts and boat shoes for a relaxed appearance."
          },
          {
            "top": "Graphic tee",
            "bottom": "Denim shorts",
            "shoes": "Sneakers",
            "description": "A graphic tee with denim shorts and sneakers for a laid-back baby shower style."
          }
        ],
        "Overweight Short": [
          {
            "top": "Loose-fit shirt",
            "bottom": "Chino shorts",
            "shoes": "Casual loafers",
            "description": "A loose-fit shirt with chino shorts and casual loafers for a comfortable baby shower look."
          },
          {
            "top": "Comfortable hoodie",
            "bottom": "Khaki shorts",
            "shoes": "Sneakers",
            "description": "A comfortable hoodie with khaki shorts and sneakers for a relaxed appearance."
          },
          {
            "top": "Relaxed graphic tee",
            "bottom": "Denim shorts",
            "shoes": "Boat shoes",
            "description": "A relaxed graphic tee with denim shorts and boat shoes for a casual baby shower outfit."
          }
        ],
        "Overweight Tall": [
          {
            "top": "Loose-fit button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A loose-fit button-down shirt with chino shorts and loafers for a neat baby shower appearance."
          },
          {
            "top": "Lightweight jacket",
            "bottom": "Khaki shorts",
            "shoes": "Sneakers",
            "description": "A lightweight jacket with khaki shorts and sneakers for a stylish, comfortable look."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A casual hoodie with denim shorts and high-top sneakers for a relaxed style."
          }
        ],
        "Overweight Average": [
          {
            "top": "Loose-fit graphic tee",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A loose-fit graphic tee with chino shorts and sneakers for a comfortable baby shower look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Khaki shorts",
            "shoes": "Boat shoes",
            "description": "A casual button-down shirt with khaki shorts and boat shoes for a relaxed yet neat appearance."
          },
          {
            "top": "Comfortable hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A comfortable hoodie with denim shorts and high-top sneakers for a laid-back baby shower style."
          }
        ]
    },
    "Bridal Showers": {
        "Skinny Short": [
          {
            "top": "Floral short-sleeve shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A floral short-sleeve shirt with chino shorts and loafers for a chic bridal shower look."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A lightweight blazer over dress shorts with loafers, stylish for a bridal shower."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Khaki shorts",
            "shoes": "Boat shoes",
            "description": "A casual button-down shirt with khaki shorts and boat shoes for a relaxed bridal shower outfit."
          }
        ],
        "Skinny Tall": [
          {
            "top": "Slim-fit dress shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A slim-fit dress shirt with chino shorts and loafers for a sophisticated bridal shower look."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Tailored shorts",
            "shoes": "Dress shoes",
            "description": "A lightweight blazer over tailored shorts with dress shoes for an elegant bridal shower outfit."
          },
          {
            "top": "Casual sweater",
            "bottom": "Denim shorts",
            "shoes": "Sneakers",
            "description": "A casual sweater with denim shorts and sneakers for a comfortable yet stylish appearance."
          }
        ],
        "Skinny Average": [
          {
            "top": "Printed short-sleeve shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A printed short-sleeve shirt with chino shorts and loafers, perfect for a bridal shower."
          },
          {
            "top": "Casual button-down",
            "bottom": "Khaki shorts",
            "shoes": "Boat shoes",
            "description": "A casual button-down with khaki shorts and boat shoes for a laid-back bridal shower outfit."
          },
          {
            "top": "Light sweater",
            "bottom": "Denim shorts",
            "shoes": "Sneakers",
            "description": "A light sweater with denim shorts and sneakers for a relaxed look at a bridal shower."
          }
        ],
        "Lean Short": [
          {
            "top": "Fitted floral shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A fitted floral shirt with chino shorts and loafers for a stylish bridal shower look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Khaki shorts",
            "shoes": "Boat shoes",
            "description": "A casual blazer over khaki shorts with boat shoes, perfect for a chic bridal shower outfit."
          },
          {
            "top": "Short-sleeve hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A short-sleeve hoodie with denim shorts and high-top sneakers for a trendy bridal shower style."
          }
        ],
        "Lean Tall": [
          {
            "top": "Fitted dress shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A fitted dress shirt with chino shorts and loafers for a polished bridal shower appearance."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Tailored shorts",
            "shoes": "Dress shoes",
            "description": "A lightweight blazer with tailored shorts and dress shoes for a sophisticated bridal shower outfit."
          },
          {
            "top": "Casual sweater",
            "bottom": "Denim shorts",
            "shoes": "Sneakers",
            "description": "A casual sweater with denim shorts and sneakers for a relaxed yet stylish look."
          }
        ],
        "Lean Average": [
          {
            "top": "Fitted graphic tee",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A fitted graphic tee with chino shorts and sneakers for a casual bridal shower look."
          },
          {
            "top": "Casual button-down",
            "bottom": "Khaki shorts",
            "shoes": "Boat shoes",
            "description": "A casual button-down with khaki shorts and boat shoes for a relaxed yet refined appearance."
          },
          {
            "top": "Short-sleeve hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A short-sleeve hoodie with denim shorts and high-top sneakers for a cool, casual style."
          }
        ],
        "Lean Muscular Short": [
          {
            "top": "Muscle-fit graphic tee",
            "bottom": "Cargo shorts",
            "shoes": "Sneakers",
            "description": "A muscle-fit graphic tee with cargo shorts and sneakers for a comfortable yet athletic bridal shower look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A casual button-down shirt with chino shorts and loafers for a stylish appearance."
          },
          {
            "top": "Short-sleeve hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A short-sleeve hoodie with denim shorts and high-top sneakers for a trendy and relaxed outfit."
          }
        ],
        "Lean Muscular Tall": [
          {
            "top": "Muscle-fit dress shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A muscle-fit dress shirt with chino shorts and loafers for a polished bridal shower look."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Tailored shorts",
            "shoes": "Dress shoes",
            "description": "A lightweight blazer with tailored shorts and dress shoes for a sophisticated appearance."
          },
          {
            "top": "Casual sweater",
            "bottom": "Denim shorts",
            "shoes": "Sneakers",
            "description": "A casual sweater with denim shorts and sneakers for a relaxed yet stylish look."
          }
        ],
        "Lean Muscular Average": [
          {
            "top": "Muscle-fit graphic tee",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A muscle-fit graphic tee with chino shorts and sneakers for a stylish bridal shower outfit."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Khaki shorts",
            "shoes": "Boat shoes",
            "description": "A casual button-down shirt with khaki shorts and boat shoes for a relaxed yet neat appearance."
          },
          {
            "top": "Short-sleeve hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A short-sleeve hoodie with denim shorts and high-top sneakers for a laid-back style."
          }
        ],
        "Average Short": [
          {
            "top": "Casual t-shirt",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A casual t-shirt with chino shorts and sneakers for a comfortable bridal shower look."
          },
          {
            "top": "Short-sleeve button-down shirt",
            "bottom": "Khaki shorts",
            "shoes": "Loafers",
            "description": "A short-sleeve button-down shirt with khaki shorts and loafers for a relaxed yet neat appearance."
          },
          {
            "top": "Hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A hoodie with denim shorts and high-top sneakers for a casual style."
          }
        ],
        "Average Tall": [
          {
            "top": "Casual button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A casual button-down shirt with chino shorts and loafers for a polished look at a bridal shower."
          },
          {
            "top": "Lightweight sweater",
            "bottom": "Khaki shorts",
            "shoes": "Sneakers",
            "description": "A lightweight sweater with khaki shorts and sneakers for a smart yet relaxed appearance."
          },
          {
            "top": "Casual jacket",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A casual jacket with denim shorts and high-top sneakers for a laid-back style."
          }
        ],
        "Average Average": [
          {
            "top": "Casual t-shirt",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A casual t-shirt with chino shorts and sneakers for a comfortable and laid-back bridal shower outfit."
          },
          {
            "top": "Short-sleeve button-down shirt",
            "bottom": "Khaki shorts",
            "shoes": "Loafers",
            "description": "A short-sleeve button-down shirt with khaki shorts and loafers for a stylish appearance."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A casual hoodie with denim shorts and high-top sneakers for a relaxed look."
          }
        ],
        "Chubby Short": [
          {
            "top": "Loose-fit floral shirt",
            "bottom": "Chino shorts",
            "shoes": "Boat shoes",
            "description": "A loose-fit floral shirt with chino shorts and boat shoes for a relaxed bridal shower outfit."
          },
          {
            "top": "Comfortable button-down shirt",
            "bottom": "Khaki shorts",
            "shoes": "Casual loafers",
            "description": "A comfortable button-down shirt with khaki shorts and casual loafers for a laid-back style."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Denim shorts",
            "shoes": "Sneakers",
            "description": "A casual hoodie with denim shorts and sneakers for a casual bridal shower appearance."
          }
        ],
        "Chubby Tall": [
          {
            "top": "Loose-fit shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A loose-fit shirt with chino shorts and loafers for a comfortable bridal shower look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Khaki shorts",
            "shoes": "Sneakers",
            "description": "A casual blazer with khaki shorts and sneakers for a smart yet relaxed outfit."
          },
          {
            "top": "Lightweight hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A lightweight hoodie with denim shorts and high-top sneakers for a comfortable look."
          }
        ],
        "Chubby Average": [
          {
            "top": "Loose-fit button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A loose-fit button-down shirt with chino shorts and sneakers for a relaxed bridal shower style."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Khaki shorts",
            "shoes": "Boat shoes",
            "description": "A casual hoodie with khaki shorts and boat shoes for a laid-back appearance."
          },
          {
            "top": "Graphic tee",
            "bottom": "Denim shorts",
            "shoes": "Sneakers",
            "description": "A graphic tee with denim shorts and sneakers for a casual bridal shower look."
          }
        ],
        "Overweight Short": [
          {
            "top": "Loose-fit button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Casual loafers",
            "description": "A loose-fit button-down shirt with chino shorts and casual loafers for a comfortable look."
          },
          {
            "top": "Comfortable hoodie",
            "bottom": "Khaki shorts",
            "shoes": "Sneakers",
            "description": "A comfortable hoodie with khaki shorts and sneakers for a relaxed bridal shower outfit."
          },
          {
            "top": "Relaxed graphic tee",
            "bottom": "Denim shorts",
            "shoes": "Boat shoes",
            "description": "A relaxed graphic tee with denim shorts and boat shoes for a casual appearance."
          }
        ],
        "Overweight Tall": [
          {
            "top": "Loose-fit button-down shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A loose-fit button-down shirt with chino shorts and loafers for a neat appearance."
          },
          {
            "top": "Lightweight jacket",
            "bottom": "Khaki shorts",
            "shoes": "Sneakers",
            "description": "A lightweight jacket with khaki shorts and sneakers for a stylish look."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A casual hoodie with denim shorts and high-top sneakers for a relaxed bridal shower outfit."
          }
        ],
        "Overweight Average": [
          {
            "top": "Loose-fit graphic tee",
            "bottom": "Chino shorts",
            "shoes": "Sneakers",
            "description": "A loose-fit graphic tee with chino shorts and sneakers for a comfortable bridal shower look."
          },
          {
            "top": "Casual button-down shirt",
            "bottom": "Khaki shorts",
            "shoes": "Boat shoes",
            "description": "A casual button-down shirt with khaki shorts and boat shoes for a relaxed appearance."
          },
          {
            "top": "Comfortable hoodie",
            "bottom": "Denim shorts",
            "shoes": "High-top sneakers",
            "description": "A comfortable hoodie with denim shorts and high-top sneakers for a laid-back style."
          }
        ]
    },
   "Cocktail Parties": {
    "Skinny Short": [
      {
        "top": "Tailored blazer",
        "bottom": "Dress shorts",
        "shoes": "Loafers",
        "description": "A tailored blazer with dress shorts and loafers for a sophisticated cocktail party look."
      },
      {
        "top": "Short-sleeve button-down shirt",
        "bottom": "Chino shorts",
        "shoes": "Dress shoes",
        "description": "A short-sleeve button-down shirt with chino shorts and dress shoes for a chic appearance."
      },
      {
        "top": "Casual blazer",
        "bottom": "Dress shorts",
        "shoes": "Oxfords",
        "description": "A casual blazer over dress shorts and Oxfords, perfect for a stylish cocktail party."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Slim-fit blazer",
        "bottom": "Tailored shorts",
        "shoes": "Loafers",
        "description": "A slim-fit blazer with tailored shorts and loafers for a refined cocktail party outfit."
      },
      {
        "top": "Dress shirt",
        "bottom": "Chino shorts",
        "shoes": "Dress shoes",
        "description": "A classic dress shirt with chino shorts and dress shoes for an elegant look."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Dress shorts",
        "shoes": "Oxfords",
        "description": "A lightweight blazer with dress shorts and Oxfords, ideal for a sophisticated cocktail event."
      }
    ],
    "Skinny Average": [
      {
        "top": "Fitted dress shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A fitted dress shirt with chino shorts and loafers for a stylish cocktail party appearance."
      },
      {
        "top": "Casual blazer",
        "bottom": "Tailored shorts",
        "shoes": "Dress shoes",
        "description": "A casual blazer with tailored shorts and dress shoes for a chic cocktail outfit."
      },
      {
        "top": "Short-sleeve button-down",
        "bottom": "Dress shorts",
        "shoes": "Loafers",
        "description": "A short-sleeve button-down with dress shorts and loafers for a casual yet sophisticated look."
      }
    ],
    "Lean Short": [
      {
        "top": "Fitted blazer",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A fitted blazer with chino shorts and loafers for a trendy cocktail party look."
      },
      {
        "top": "Tailored shirt",
        "bottom": "Dress shorts",
        "shoes": "Dress shoes",
        "description": "A tailored shirt with dress shorts and dress shoes for a polished appearance."
      },
      {
        "top": "Casual blazer",
        "bottom": "Chino shorts",
        "shoes": "Boat shoes",
        "description": "A casual blazer with chino shorts and boat shoes for a relaxed yet stylish cocktail outfit."
      }
    ],
    "Lean Tall": [
      {
        "top": "Slim-fit dress shirt",
        "bottom": "Tailored shorts",
        "shoes": "Loafers",
        "description": "A slim-fit dress shirt with tailored shorts and loafers for an elegant cocktail party look."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Chino shorts",
        "shoes": "Dress shoes",
        "description": "A lightweight blazer with chino shorts and dress shoes for a refined appearance."
      },
      {
        "top": "Casual button-down",
        "bottom": "Dress shorts",
        "shoes": "Oxfords",
        "description": "A casual button-down with dress shorts and Oxfords for a stylish cocktail outfit."
      }
    ],
    "Lean Average": [
      {
        "top": "Fitted shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A fitted shirt with chino shorts and loafers for a sophisticated cocktail party look."
      },
      {
        "top": "Casual blazer",
        "bottom": "Tailored shorts",
        "shoes": "Dress shoes",
        "description": "A casual blazer with tailored shorts and dress shoes for a chic and stylish appearance."
      },
      {
        "top": "Short-sleeve button-down",
        "bottom": "Dress shorts",
        "shoes": "Loafers",
        "description": "A short-sleeve button-down with dress shorts and loafers for a relaxed cocktail outfit."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Muscle-fit blazer",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A muscle-fit blazer with chino shorts and loafers for a sharp and stylish cocktail party look."
      },
      {
        "top": "Fitted dress shirt",
        "bottom": "Dress shorts",
        "shoes": "Dress shoes",
        "description": "A fitted dress shirt with dress shorts and dress shoes for a polished appearance."
      },
      {
        "top": "Short-sleeve shirt",
        "bottom": "Chino shorts",
        "shoes": "Boat shoes",
        "description": "A short-sleeve shirt with chino shorts and boat shoes for a relaxed yet elegant cocktail outfit."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Muscle-fit dress shirt",
        "bottom": "Tailored shorts",
        "shoes": "Loafers",
        "description": "A muscle-fit dress shirt with tailored shorts and loafers for a sleek cocktail party look."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Chino shorts",
        "shoes": "Dress shoes",
        "description": "A lightweight blazer with chino shorts and dress shoes for a stylish and sophisticated appearance."
      },
      {
        "top": "Casual button-down",
        "bottom": "Dress shorts",
        "shoes": "Oxfords",
        "description": "A casual button-down with dress shorts and Oxfords for a fashionable cocktail outfit."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Muscle-fit shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A muscle-fit shirt with chino shorts and loafers for a trendy cocktail party look."
      },
      {
        "top": "Casual blazer",
        "bottom": "Tailored shorts",
        "shoes": "Dress shoes",
        "description": "A casual blazer with tailored shorts and dress shoes for a refined and stylish appearance."
      },
      {
        "top": "Short-sleeve shirt",
        "bottom": "Dress shorts",
        "shoes": "Boat shoes",
        "description": "A short-sleeve shirt with dress shorts and boat shoes for a chic cocktail outfit."
      }
    ],
    "Average Short": [
      {
        "top": "Casual dress shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A casual dress shirt with chino shorts and loafers for a comfortable cocktail party look."
      },
      {
        "top": "Blazer",
        "bottom": "Dress shorts",
        "shoes": "Dress shoes",
        "description": "A blazer over dress shorts and dress shoes for a smart cocktail appearance."
      },
      {
        "top": "Short-sleeve button-down",
        "bottom": "Khaki shorts",
        "shoes": "Boat shoes",
        "description": "A short-sleeve button-down with khaki shorts and boat shoes for a stylish outfit."
      }
    ],
    "Average Tall": [
      {
        "top": "Button-down shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A button-down shirt with chino shorts and loafers for a sophisticated cocktail party look."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Tailored shorts",
        "shoes": "Dress shoes",
        "description": "A lightweight blazer with tailored shorts and dress shoes for an elegant appearance."
      },
      {
        "top": "Short-sleeve shirt",
        "bottom": "Khaki shorts",
        "shoes": "Boat shoes",
        "description": "A short-sleeve shirt with khaki shorts and boat shoes for a chic cocktail outfit."
      }
    ],
    "Average Average": [
      {
        "top": "Casual button-down shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A casual button-down shirt with chino shorts and loafers for a stylish cocktail party look."
      },
      {
        "top": "Blazer",
        "bottom": "Dress shorts",
        "shoes": "Dress shoes",
        "description": "A blazer with dress shorts and dress shoes for a smart appearance."
      },
      {
        "top": "Short-sleeve shirt",
        "bottom": "Khaki shorts",
        "shoes": "Boat shoes",
        "description": "A short-sleeve shirt with khaki shorts and boat shoes for a relaxed yet fashionable cocktail outfit."
      }
    ],
    "Chubby Short": [
      {
        "top": "Loose-fit dress shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A loose-fit dress shirt with chino shorts and loafers for a comfortable cocktail party look."
      },
      {
        "top": "Casual button-down",
        "bottom": "Khaki shorts",
        "shoes": "Boat shoes",
        "description": "A casual button-down with khaki shorts and boat shoes for a relaxed appearance."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Denim shorts",
        "shoes": "Sneakers",
        "description": "A lightweight blazer with denim shorts and sneakers for a laid-back cocktail outfit."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Loose-fit shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A loose-fit shirt with chino shorts and loafers for a comfortable cocktail party appearance."
      },
      {
        "top": "Casual blazer",
        "bottom": "Khaki shorts",
        "shoes": "Sneakers",
        "description": "A casual blazer with khaki shorts and sneakers for a stylish yet relaxed outfit."
      },
      {
        "top": "Short-sleeve button-down",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A short-sleeve button-down with denim shorts and high-top sneakers for a casual cocktail look."
      }
    ],
    "Chubby Average": [
      {
        "top": "Loose-fit button-down shirt",
        "bottom": "Chino shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit button-down shirt with chino shorts and sneakers for a relaxed cocktail party style."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Khaki shorts",
        "shoes": "Boat shoes",
        "description": "A casual hoodie with khaki shorts and boat shoes for a laid-back appearance."
      },
      {
        "top": "Graphic tee",
        "bottom": "Denim shorts",
        "shoes": "Sneakers",
        "description": "A graphic tee with denim shorts and sneakers for a casual cocktail outfit."
      }
    ],
    "Overweight Short": [
      {
        "top": "Loose-fit button-down shirt",
        "bottom": "Chino shorts",
        "shoes": "Casual loafers",
        "description": "A loose-fit button-down shirt with chino shorts and casual loafers for a comfortable cocktail party look."
      },
      {
        "top": "Comfortable hoodie",
        "bottom": "Khaki shorts",
        "shoes": "Sneakers",
        "description": "A comfortable hoodie with khaki shorts and sneakers for a relaxed cocktail outfit."
      },
      {
        "top": "Relaxed graphic tee",
        "bottom": "Denim shorts",
        "shoes": "Boat shoes",
        "description": "A relaxed graphic tee with denim shorts and boat shoes for a casual cocktail appearance."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Loose-fit button-down shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A loose-fit button-down shirt with chino shorts and loafers for a neat cocktail party look."
      },
      {
        "top": "Lightweight jacket",
        "bottom": "Khaki shorts",
        "shoes": "Sneakers",
        "description": "A lightweight jacket with khaki shorts and sneakers for a stylish cocktail outfit."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A casual hoodie with denim shorts and high-top sneakers for a comfortable look."
      }
    ],
    "Overweight Average": [
      {
        "top": "Loose-fit graphic tee",
        "bottom": "Chino shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit graphic tee with chino shorts and sneakers for a relaxed cocktail party look."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Khaki shorts",
        "shoes": "Boat shoes",
        "description": "A casual button-down shirt with khaki shorts and boat shoes for a laid-back appearance."
      },
      {
        "top": "Comfortable hoodie",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A comfortable hoodie with denim shorts and high-top sneakers for a relaxed style."
      }
    ]
    },
    "Themed Parties": {
    "Skinny Short": [
      {
        "top": "Fitted graphic tee",
        "bottom": "Printed shorts",
        "shoes": "Sneakers",
        "description": "A fitted graphic tee with printed shorts and sneakers for a fun-themed party look."
      },
      {
        "top": "Short-sleeve button-down shirt",
        "bottom": "Colorful shorts",
        "shoes": "Slip-ons",
        "description": "A short-sleeve button-down shirt with colorful shorts and slip-ons for a playful party appearance."
      },
      {
        "top": "Casual blazer",
        "bottom": "Patterned shorts",
        "shoes": "Loafers",
        "description": "A casual blazer over patterned shorts and loafers for a stylish themed party outfit."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Slim-fit graphic tee",
        "bottom": "Brightly colored shorts",
        "shoes": "Sneakers",
        "description": "A slim-fit graphic tee with brightly colored shorts and sneakers for a vibrant themed party look."
      },
      {
        "top": "Dress shirt with unique prints",
        "bottom": "Tailored shorts",
        "shoes": "Loafers",
        "description": "A dress shirt with unique prints and tailored shorts for an elegant themed party appearance."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Printed shorts",
        "shoes": "Slip-ons",
        "description": "A lightweight blazer with printed shorts and slip-ons for a trendy themed party outfit."
      }
    ],
    "Skinny Average": [
      {
        "top": "Graphic tee",
        "bottom": "Bright shorts",
        "shoes": "Sneakers",
        "description": "A graphic tee with bright shorts and sneakers for a casual themed party look."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Patterned shorts",
        "shoes": "Loafers",
        "description": "A casual button-down shirt with patterned shorts and loafers for a stylish party appearance."
      },
      {
        "top": "Blazer with fun prints",
        "bottom": "Colorful shorts",
        "shoes": "Slip-ons",
        "description": "A blazer with fun prints over colorful shorts and slip-ons for a playful themed party outfit."
      }
    ],
    "Lean Short": [
      {
        "top": "Fitted graphic tee",
        "bottom": "Brightly patterned shorts",
        "shoes": "Sneakers",
        "description": "A fitted graphic tee with brightly patterned shorts and sneakers for a lively themed party look."
      },
      {
        "top": "Tailored button-down shirt",
        "bottom": "Colorful shorts",
        "shoes": "Loafers",
        "description": "A tailored button-down shirt with colorful shorts and loafers for a smart themed party appearance."
      },
      {
        "top": "Casual blazer",
        "bottom": "Patterned shorts",
        "shoes": "Boat shoes",
        "description": "A casual blazer with patterned shorts and boat shoes for a stylish yet relaxed themed party outfit."
      }
    ],
    "Lean Tall": [
      {
        "top": "Slim-fit graphic tee",
        "bottom": "Bright shorts",
        "shoes": "Sneakers",
        "description": "A slim-fit graphic tee with bright shorts and sneakers for a trendy themed party look."
      },
      {
        "top": "Unique printed shirt",
        "bottom": "Tailored shorts",
        "shoes": "Loafers",
        "description": "A unique printed shirt with tailored shorts and loafers for an elegant themed party appearance."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Brightly patterned shorts",
        "shoes": "Slip-ons",
        "description": "A lightweight blazer with brightly patterned shorts and slip-ons for a sophisticated themed party outfit."
      }
    ],
    "Lean Average": [
      {
        "top": "Fitted graphic shirt",
        "bottom": "Patterned shorts",
        "shoes": "Sneakers",
        "description": "A fitted graphic shirt with patterned shorts and sneakers for a fun-themed party look."
      },
      {
        "top": "Casual blazer",
        "bottom": "Colorful shorts",
        "shoes": "Loafers",
        "description": "A casual blazer with colorful shorts and loafers for a chic party appearance."
      },
      {
        "top": "Short-sleeve shirt with fun prints",
        "bottom": "Denim shorts",
        "shoes": "Slip-ons",
        "description": "A short-sleeve shirt with fun prints and denim shorts for a stylish themed party outfit."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Muscle-fit graphic tee",
        "bottom": "Brightly patterned shorts",
        "shoes": "Sneakers",
        "description": "A muscle-fit graphic tee with brightly patterned shorts and sneakers for a bold themed party look."
      },
      {
        "top": "Fitted button-down shirt",
        "bottom": "Colorful shorts",
        "shoes": "Loafers",
        "description": "A fitted button-down shirt with colorful shorts and loafers for a smart party appearance."
      },
      {
        "top": "Casual blazer",
        "bottom": "Patterned shorts",
        "shoes": "Boat shoes",
        "description": "A casual blazer over patterned shorts and boat shoes for a stylish themed party outfit."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Muscle-fit graphic shirt",
        "bottom": "Bright shorts",
        "shoes": "Sneakers",
        "description": "A muscle-fit graphic shirt with bright shorts and sneakers for a trendy themed party look."
      },
      {
        "top": "Unique printed shirt",
        "bottom": "Tailored shorts",
        "shoes": "Loafers",
        "description": "A unique printed shirt with tailored shorts and loafers for a refined party appearance."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Brightly patterned shorts",
        "shoes": "Slip-ons",
        "description": "A lightweight blazer with brightly patterned shorts and slip-ons for a sophisticated themed party outfit."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Muscle-fit graphic tee",
        "bottom": "Colorful shorts",
        "shoes": "Sneakers",
        "description": "A muscle-fit graphic tee with colorful shorts and sneakers for a lively themed party look."
      },
      {
        "top": "Casual blazer",
        "bottom": "Patterned shorts",
        "shoes": "Loafers",
        "description": "A casual blazer with patterned shorts and loafers for a chic party appearance."
      },
      {
        "top": "Short-sleeve shirt with fun prints",
        "bottom": "Denim shorts",
        "shoes": "Slip-ons",
        "description": "A short-sleeve shirt with fun prints and denim shorts for a stylish themed party outfit."
      }
    ],
    "Average Short": [
      {
        "top": "Graphic tee",
        "bottom": "Bright shorts",
        "shoes": "Sneakers",
        "description": "A graphic tee with bright shorts and sneakers for a casual themed party look."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Patterned shorts",
        "shoes": "Loafers",
        "description": "A casual button-down shirt with patterned shorts and loafers for a laid-back party appearance."
      },
      {
        "top": "Blazer with fun prints",
        "bottom": "Colorful shorts",
        "shoes": "Slip-ons",
        "description": "A blazer with fun prints over colorful shorts and slip-ons for a playful themed party outfit."
      }
    ],
    "Average Tall": [
      {
        "top": "Button-down shirt with prints",
        "bottom": "Bright shorts",
        "shoes": "Sneakers",
        "description": "A button-down shirt with prints and bright shorts for a vibrant themed party look."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Patterned shorts",
        "shoes": "Loafers",
        "description": "A lightweight blazer with patterned shorts and loafers for a stylish party appearance."
      },
      {
        "top": "Short-sleeve shirt with fun patterns",
        "bottom": "Denim shorts",
        "shoes": "Slip-ons",
        "description": "A short-sleeve shirt with fun patterns and denim shorts for a trendy themed party outfit."
      }
    ],
    "Average Average": [
      {
        "top": "Casual graphic tee",
        "bottom": "Patterned shorts",
        "shoes": "Sneakers",
        "description": "A casual graphic tee with patterned shorts and sneakers for a fun-themed party look."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Colorful shorts",
        "shoes": "Loafers",
        "description": "A casual button-down shirt with colorful shorts and loafers for a stylish party appearance."
      },
      {
        "top": "Blazer with playful prints",
        "bottom": "Denim shorts",
        "shoes": "Slip-ons",
        "description": "A blazer with playful prints over denim shorts and slip-ons for a fashionable themed party outfit."
      }
    ],
    "Chubby Short": [
      {
        "top": "Loose-fit graphic tee",
        "bottom": "Printed shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit graphic tee with printed shorts and sneakers for a comfortable themed party look."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Bright shorts",
        "shoes": "Boat shoes",
        "description": "A casual button-down shirt with bright shorts and boat shoes for a relaxed appearance."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Patterned shorts",
        "shoes": "Sneakers",
        "description": "A lightweight blazer with patterned shorts and sneakers for a laid-back themed party outfit."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Loose-fit graphic shirt",
        "bottom": "Bright shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit graphic shirt with bright shorts and sneakers for a casual themed party look."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Patterned shorts",
        "shoes": "Loafers",
        "description": "A casual button-down shirt with patterned shorts and loafers for a stylish appearance."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Colorful shorts",
        "shoes": "Sneakers",
        "description": "A lightweight blazer with colorful shorts and sneakers for a trendy themed party outfit."
      }
    ],
    "Chubby Average": [
      {
        "top": "Loose-fit graphic tee",
        "bottom": "Patterned shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit graphic tee with patterned shorts and sneakers for a comfortable themed party look."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Bright shorts",
        "shoes": "Boat shoes",
        "description": "A casual hoodie with bright shorts and boat shoes for a relaxed appearance."
      },
      {
        "top": "Graphic tee",
        "bottom": "Colorful shorts",
        "shoes": "Sneakers",
        "description": "A graphic tee with colorful shorts and sneakers for a laid-back themed party outfit."
      }
    ],
    "Overweight Short": [
      {
        "top": "Loose-fit graphic tee",
        "bottom": "Patterned shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit graphic tee with patterned shorts and sneakers for a comfortable themed party look."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Bright shorts",
        "shoes": "Boat shoes",
        "description": "A casual hoodie with bright shorts and boat shoes for a relaxed appearance."
      },
      {
        "top": "Relaxed graphic tee",
        "bottom": "Colorful shorts",
        "shoes": "Sneakers",
        "description": "A relaxed graphic tee with colorful shorts and sneakers for a laid-back themed party outfit."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Loose-fit graphic shirt",
        "bottom": "Bright shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit graphic shirt with bright shorts and sneakers for a casual themed party look."
      },
      {
        "top": "Comfortable hoodie",
        "bottom": "Patterned shorts",
        "shoes": "Boat shoes",
        "description": "A comfortable hoodie with patterned shorts and boat shoes for a relaxed appearance."
      },
      {
        "top": "Lightweight jacket",
        "bottom": "Colorful shorts",
        "shoes": "Sneakers",
        "description": "A lightweight jacket with colorful shorts and sneakers for a trendy themed party outfit."
      }
    ],
    "Overweight Average": [
      {
        "top": "Loose-fit graphic tee",
        "bottom": "Patterned shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit graphic tee with patterned shorts and sneakers for a comfortable themed party look."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Bright shorts",
        "shoes": "Boat shoes",
        "description": "A casual button-down shirt with bright shorts and boat shoes for a laid-back appearance."
      },
      {
        "top": "Comfortable hoodie",
        "bottom": "Colorful shorts",
        "shoes": "Sneakers",
        "description": "A comfortable hoodie with colorful shorts and sneakers for a relaxed themed party outfit."
      }
    ]
    },
    "Religious Ceremonies": {
    "Skinny Short": [
      {
        "top": "Slim-fit dress shirt",
        "bottom": "Tailored dress shorts",
        "shoes": "Dress shoes",
        "description": "A slim-fit dress shirt with tailored dress shorts and dress shoes for a respectful yet stylish religious ceremony look."
      },
      {
        "top": "Short-sleeve dress shirt",
        "bottom": "Formal shorts",
        "shoes": "Loafers",
        "description": "A short-sleeve dress shirt with formal shorts and loafers for a smart appearance at a religious ceremony."
      },
      {
        "top": "Casual blazer",
        "bottom": "Dress shorts",
        "shoes": "Oxfords",
        "description": "A casual blazer over dress shorts and Oxfords for a sophisticated yet relaxed outfit for a religious ceremony."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Fitted dress shirt",
        "bottom": "Tailored dress shorts",
        "shoes": "Dress shoes",
        "description": "A fitted dress shirt with tailored dress shorts and dress shoes for an elegant religious ceremony look."
      },
      {
        "top": "Short-sleeve dress shirt",
        "bottom": "Formal shorts",
        "shoes": "Loafers",
        "description": "A short-sleeve dress shirt with formal shorts and loafers for a polished appearance at a religious ceremony."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Dress shorts",
        "shoes": "Oxfords",
        "description": "A lightweight blazer over dress shorts and Oxfords for a refined and stylish religious ceremony outfit."
      }
    ],
    "Skinny Average": [
      {
        "top": "Dress shirt",
        "bottom": "Formal shorts",
        "shoes": "Loafers",
        "description": "A dress shirt with formal shorts and loafers for a classic look at a religious ceremony."
      },
      {
        "top": "Short-sleeve dress shirt",
        "bottom": "Tailored shorts",
        "shoes": "Dress shoes",
        "description": "A short-sleeve dress shirt with tailored shorts and dress shoes for a formal religious ceremony appearance."
      },
      {
        "top": "Casual blazer",
        "bottom": "Formal shorts",
        "shoes": "Oxfords",
        "description": "A casual blazer with formal shorts and Oxfords for a comfortable yet elegant outfit for a religious ceremony."
      }
    ],
    "Lean Short": [
      {
        "top": "Fitted dress shirt",
        "bottom": "Tailored dress shorts",
        "shoes": "Dress shoes",
        "description": "A fitted dress shirt with tailored dress shorts and dress shoes for a sharp and respectful religious ceremony look."
      },
      {
        "top": "Short-sleeve button-down shirt",
        "bottom": "Formal shorts",
        "shoes": "Loafers",
        "description": "A short-sleeve button-down shirt with formal shorts and loafers for a clean and polished appearance at a religious ceremony."
      },
      {
        "top": "Blazer",
        "bottom": "Dress shorts",
        "shoes": "Oxfords",
        "description": "A blazer with dress shorts and Oxfords for a sophisticated yet relaxed outfit suitable for a religious ceremony."
      }
    ],
    "Lean Tall": [
      {
        "top": "Fitted dress shirt",
        "bottom": "Tailored dress shorts",
        "shoes": "Dress shoes",
        "description": "A fitted dress shirt with tailored dress shorts and dress shoes for an elegant and respectful look at a religious ceremony."
      },
      {
        "top": "Short-sleeve button-down shirt",
        "bottom": "Formal shorts",
        "shoes": "Loafers",
        "description": "A short-sleeve button-down shirt with formal shorts and loafers for a polished and stylish appearance at a religious ceremony."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Dress shorts",
        "shoes": "Oxfords",
        "description": "A lightweight blazer with dress shorts and Oxfords for a refined and comfortable outfit for a religious ceremony."
      }
    ],
    "Lean Average": [
      {
        "top": "Fitted dress shirt",
        "bottom": "Formal shorts",
        "shoes": "Loafers",
        "description": "A fitted dress shirt with formal shorts and loafers for a classic and respectful look at a religious ceremony."
      },
      {
        "top": "Short-sleeve button-down shirt",
        "bottom": "Tailored shorts",
        "shoes": "Dress shoes",
        "description": "A short-sleeve button-down shirt with tailored shorts and dress shoes for a polished appearance at a religious ceremony."
      },
      {
        "top": "Blazer",
        "bottom": "Formal shorts",
        "shoes": "Oxfords",
        "description": "A blazer with formal shorts and Oxfords for a sophisticated and elegant outfit for a religious ceremony."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Muscle-fit dress shirt",
        "bottom": "Tailored dress shorts",
        "shoes": "Dress shoes",
        "description": "A muscle-fit dress shirt with tailored dress shorts and dress shoes for a sharp and formal look at a religious ceremony."
      },
      {
        "top": "Fitted button-down shirt",
        "bottom": "Formal shorts",
        "shoes": "Loafers",
        "description": "A fitted button-down shirt with formal shorts and loafers for a sleek and polished appearance at a religious ceremony."
      },
      {
        "top": "Casual blazer",
        "bottom": "Dress shorts",
        "shoes": "Oxfords",
        "description": "A casual blazer with dress shorts and Oxfords for a stylish yet relaxed outfit for a religious ceremony."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Muscle-fit dress shirt",
        "bottom": "Tailored dress shorts",
        "shoes": "Dress shoes",
        "description": "A muscle-fit dress shirt with tailored dress shorts and dress shoes for an elegant and formal look at a religious ceremony."
      },
      {
        "top": "Fitted button-down shirt",
        "bottom": "Formal shorts",
        "shoes": "Loafers",
        "description": "A fitted button-down shirt with formal shorts and loafers for a sophisticated and polished appearance at a religious ceremony."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Dress shorts",
        "shoes": "Oxfords",
        "description": "A lightweight blazer with dress shorts and Oxfords for a refined and stylish outfit suitable for a religious ceremony."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Muscle-fit dress shirt",
        "bottom": "Formal shorts",
        "shoes": "Loafers",
        "description": "A muscle-fit dress shirt with formal shorts and loafers for a sharp and classic look at a religious ceremony."
      },
      {
        "top": "Fitted button-down shirt",
        "bottom": "Tailored shorts",
        "shoes": "Dress shoes",
        "description": "A fitted button-down shirt with tailored shorts and dress shoes for a polished appearance at a religious ceremony."
      },
      {
        "top": "Blazer",
        "bottom": "Formal shorts",
        "shoes": "Oxfords",
        "description": "A blazer with formal shorts and Oxfords for a sophisticated and elegant outfit for a religious ceremony."
      }
    ],
    "Average Short": [
      {
        "top": "Dress shirt",
        "bottom": "Tailored shorts",
        "shoes": "Loafers",
        "description": "A dress shirt with tailored shorts and loafers for a classic and respectful look at a religious ceremony."
      },
      {
        "top": "Short-sleeve dress shirt",
        "bottom": "Formal shorts",
        "shoes": "Dress shoes",
        "description": "A short-sleeve dress shirt with formal shorts and dress shoes for a refined appearance at a religious ceremony."
      },
      {
        "top": "Casual blazer",
        "bottom": "Tailored shorts",
        "shoes": "Oxfords",
        "description": "A casual blazer over tailored shorts and Oxfords for a sophisticated yet comfortable outfit for a religious ceremony."
      }
    ],
    "Average Tall": [
      {
        "top": "Button-down dress shirt",
        "bottom": "Tailored shorts",
        "shoes": "Loafers",
        "description": "A button-down dress shirt with tailored shorts and loafers for a smart and respectful look at a religious ceremony."
      },
      {
        "top": "Short-sleeve dress shirt",
        "bottom": "Formal shorts",
        "shoes": "Dress shoes",
        "description": "A short-sleeve dress shirt with formal shorts and dress shoes for a polished appearance at a religious ceremony."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Tailored shorts",
        "shoes": "Oxfords",
        "description": "A lightweight blazer with tailored shorts and Oxfords for a refined and stylish outfit for a religious ceremony."
      }
    ],
    "Average Average": [
      {
        "top": "Dress shirt",
        "bottom": "Formal shorts",
        "shoes": "Loafers",
        "description": "A dress shirt with formal shorts and loafers for a classic and respectful appearance at a religious ceremony."
      },
      {
        "top": "Short-sleeve button-down shirt",
        "bottom": "Tailored shorts",
        "shoes": "Dress shoes",
        "description": "A short-sleeve button-down shirt with tailored shorts and dress shoes for a refined look at a religious ceremony."
      },
      {
        "top": "Casual blazer",
        "bottom": "Formal shorts",
        "shoes": "Oxfords",
        "description": "A casual blazer with formal shorts and Oxfords for a sophisticated and comfortable outfit for a religious ceremony."
      }
    ],
    "Chubby Short": [
      {
        "top": "Loose-fit dress shirt",
        "bottom": "Tailored shorts",
        "shoes": "Loafers",
        "description": "A loose-fit dress shirt with tailored shorts and loafers for a comfortable and respectful appearance at a religious ceremony."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Formal shorts",
        "shoes": "Boat shoes",
        "description": "A casual button-down shirt with formal shorts and boat shoes for a relaxed yet polished look at a religious ceremony."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Tailored shorts",
        "shoes": "Sneakers",
        "description": "A lightweight blazer over tailored shorts and sneakers for a comfortable yet stylish outfit for a religious ceremony."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Loose-fit dress shirt",
        "bottom": "Tailored shorts",
        "shoes": "Loafers",
        "description": "A loose-fit dress shirt with tailored shorts and loafers for a relaxed and respectful appearance at a religious ceremony."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Formal shorts",
        "shoes": "Boat shoes",
        "description": "A casual button-down shirt with formal shorts and boat shoes for a laid-back yet stylish look at a religious ceremony."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Tailored shorts",
        "shoes": "Sneakers",
        "description": "A lightweight blazer with tailored shorts and sneakers for a comfortable and elegant outfit for a religious ceremony."
      }
    ],
    "Chubby Average": [
      {
        "top": "Loose-fit dress shirt",
        "bottom": "Formal shorts",
        "shoes": "Loafers",
        "description": "A loose-fit dress shirt with formal shorts and loafers for a relaxed yet respectful look at a religious ceremony."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Tailored shorts",
        "shoes": "Boat shoes",
        "description": "A casual button-down shirt with tailored shorts and boat shoes for a laid-back appearance at a religious ceremony."
      },
      {
        "top": "Lightweight blazer",
        "bottom": "Formal shorts",
        "shoes": "Sneakers",
        "description": "A lightweight blazer with formal shorts and sneakers for a stylish yet comfortable outfit for a religious ceremony."
      }
    ],
    "Overweight Short": [
      {
        "top": "Loose-fit dress shirt",
        "bottom": "Tailored shorts",
        "shoes": "Loafers",
        "description": "A loose-fit dress shirt with tailored shorts and loafers for a comfortable and respectful appearance at a religious ceremony."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Formal shorts",
        "shoes": "Boat shoes",
        "description": "A casual hoodie with formal shorts and boat shoes for a relaxed and laid-back look at a religious ceremony."
      },
      {
        "top": "Relaxed button-down shirt",
        "bottom": "Patterned shorts",
        "shoes": "Sneakers",
        "description": "A relaxed button-down shirt with patterned shorts and sneakers for a comfortable yet stylish outfit for a religious ceremony."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Loose-fit dress shirt",
        "bottom": "Tailored shorts",
        "shoes": "Loafers",
        "description": "A loose-fit dress shirt with tailored shorts and loafers for a relaxed and respectful look at a religious ceremony."
      },
      {
        "top": "Comfortable hoodie",
        "bottom": "Formal shorts",
        "shoes": "Boat shoes",
        "description": "A comfortable hoodie with formal shorts and boat shoes for a laid-back and stylish appearance at a religious ceremony."
      },
      {
        "top": "Lightweight jacket",
        "bottom": "Tailored shorts",
        "shoes": "Sneakers",
        "description": "A lightweight jacket with tailored shorts and sneakers for a comfortable and elegant outfit for a religious ceremony."
      }
    ],
    "Overweight Average": [
      {
        "top": "Loose-fit dress shirt",
        "bottom": "Formal shorts",
        "shoes": "Loafers",
        "description": "A loose-fit dress shirt with formal shorts and loafers for a comfortable yet respectful look at a religious ceremony."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Tailored shorts",
        "shoes": "Boat shoes",
        "description": "A casual button-down shirt with tailored shorts and boat shoes for a relaxed and polished appearance at a religious ceremony."
      },
      {
        "top": "Comfortable hoodie",
        "bottom": "Formal shorts",
        "shoes": "Sneakers",
        "description": "A comfortable hoodie with formal shorts and sneakers for a stylish yet laid-back outfit for a religious ceremony."
      }
    ]
    },
    "Sports Events": {
        "Skinny Short": [
          {
            "top": "Athletic tank top",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "An athletic tank top with sport shorts and running shoes for a comfortable and active look at a sports event."
          },
          {
            "top": "Short-sleeve moisture-wicking shirt",
            "bottom": "Sport shorts",
            "shoes": "Sneakers",
            "description": "A short-sleeve moisture-wicking shirt with sport shorts and sneakers for a practical and stylish outfit at a sports event."
          },
          {
            "top": "Sporty polo shirt",
            "bottom": "Athletic shorts",
            "shoes": "Athletic sneakers",
            "description": "A sporty polo shirt with athletic shorts and sneakers for a casual and comfortable appearance at a sports event."
          }
        ],
        "Skinny Tall": [
          {
            "top": "Fitted athletic shirt",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "A fitted athletic shirt with sport shorts and running shoes for an active and sleek look at a sports event."
          },
          {
            "top": "Short-sleeve moisture-wicking top",
            "bottom": "Athletic shorts",
            "shoes": "Sneakers",
            "description": "A short-sleeve moisture-wicking top with athletic shorts and sneakers for a comfortable and efficient outfit at a sports event."
          },
          {
            "top": "Lightweight athletic jacket",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "A lightweight athletic jacket over sport shorts and running shoes for a versatile and sporty look at a sports event."
          }
        ],
        "Skinny Average": [
          {
            "top": "Athletic shirt",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "An athletic shirt with sport shorts and running shoes for a practical and stylish look at a sports event."
          },
          {
            "top": "Short-sleeve sports top",
            "bottom": "Athletic shorts",
            "shoes": "Sneakers",
            "description": "A short-sleeve sports top with athletic shorts and sneakers for a comfortable and active outfit at a sports event."
          },
          {
            "top": "Sporty jacket",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "A sporty jacket over sport shorts and running shoes for a casual and versatile look at a sports event."
          }
        ],
        "Lean Short": [
          {
            "top": "Muscle-fit tank top",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A muscle-fit tank top with athletic shorts and running shoes for a sharp and active appearance at a sports event."
          },
          {
            "top": "Fitted sports shirt",
            "bottom": "Sport shorts",
            "shoes": "Sneakers",
            "description": "A fitted sports shirt with sport shorts and sneakers for a sleek and comfortable outfit at a sports event."
          },
          {
            "top": "Lightweight athletic jacket",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A lightweight athletic jacket with athletic shorts and running shoes for a stylish and practical look at a sports event."
          }
        ],
        "Lean Tall": [
          {
            "top": "Muscle-fit athletic shirt",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "A muscle-fit athletic shirt with sport shorts and running shoes for a sharp and athletic look at a sports event."
          },
          {
            "top": "Fitted sports top",
            "bottom": "Athletic shorts",
            "shoes": "Sneakers",
            "description": "A fitted sports top with athletic shorts and sneakers for a sleek and active outfit at a sports event."
          },
          {
            "top": "Lightweight jacket",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "A lightweight jacket with sport shorts and running shoes for a stylish and functional look at a sports event."
          }
        ],
        "Lean Average": [
          {
            "top": "Muscle-fit shirt",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A muscle-fit shirt with athletic shorts and running shoes for a comfortable and sporty appearance at a sports event."
          },
          {
            "top": "Fitted sports top",
            "bottom": "Sport shorts",
            "shoes": "Sneakers",
            "description": "A fitted sports top with sport shorts and sneakers for a sleek and active look at a sports event."
          },
          {
            "top": "Sporty jacket",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A sporty jacket with athletic shorts and running shoes for a practical and stylish outfit at a sports event."
          }
        ],
        "Lean Muscular Short": [
          {
            "top": "Muscle-fit tank top",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A muscle-fit tank top with athletic shorts and running shoes for a strong and active appearance at a sports event."
          },
          {
            "top": "Fitted athletic shirt",
            "bottom": "Sport shorts",
            "shoes": "Sneakers",
            "description": "A fitted athletic shirt with sport shorts and sneakers for a sharp and comfortable look at a sports event."
          },
          {
            "top": "Sporty jacket",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A sporty jacket over athletic shorts and running shoes for a stylish and muscular appearance at a sports event."
          }
        ],
        "Lean Muscular Tall": [
          {
            "top": "Muscle-fit shirt",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "A muscle-fit shirt with sport shorts and running shoes for a strong and athletic look at a sports event."
          },
          {
            "top": "Fitted athletic shirt",
            "bottom": "Athletic shorts",
            "shoes": "Sneakers",
            "description": "A fitted athletic shirt with athletic shorts and sneakers for a sleek and active outfit at a sports event."
          },
          {
            "top": "Lightweight jacket",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "A lightweight jacket with sport shorts and running shoes for a stylish and muscular appearance at a sports event."
          }
        ],
        "Lean Muscular Average": [
          {
            "top": "Muscle-fit shirt",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A muscle-fit shirt with athletic shorts and running shoes for a strong and sporty look at a sports event."
          },
          {
            "top": "Fitted sports top",
            "bottom": "Sport shorts",
            "shoes": "Sneakers",
            "description": "A fitted sports top with sport shorts and sneakers for a sleek and muscular outfit at a sports event."
          },
          {
            "top": "Sporty jacket",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A sporty jacket with athletic shorts and running shoes for a stylish and active look at a sports event."
          }
        ],
        "Average Short": [
          {
            "top": "Athletic shirt",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "An athletic shirt with sport shorts and running shoes for a practical and comfortable look at a sports event."
          },
          {
            "top": "Short-sleeve sports top",
            "bottom": "Athletic shorts",
            "shoes": "Sneakers",
            "description": "A short-sleeve sports top with athletic shorts and sneakers for a casual and active outfit at a sports event."
          },
          {
            "top": "Sporty jacket",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "A sporty jacket over sport shorts and running shoes for a relaxed and versatile look at a sports event."
          }
        ],
        "Average Tall": [
          {
            "top": "Button-down athletic shirt",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "A button-down athletic shirt with sport shorts and running shoes for a sleek and practical look at a sports event."
          },
          {
            "top": "Short-sleeve sports top",
            "bottom": "Athletic shorts",
            "shoes": "Sneakers",
            "description": "A short-sleeve sports top with athletic shorts and sneakers for a comfortable and stylish appearance at a sports event."
          },
          {
            "top": "Lightweight athletic jacket",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "A lightweight athletic jacket with sport shorts and running shoes for a practical and active outfit at a sports event."
          }
        ],
        "Average Average": [
          {
            "top": "Athletic shirt",
            "bottom": "Formal shorts",
            "shoes": "Running shoes",
            "description": "An athletic shirt with formal shorts and running shoes for a practical and stylish appearance at a sports event."
          },
          {
            "top": "Short-sleeve sports shirt",
            "bottom": "Athletic shorts",
            "shoes": "Sneakers",
            "description": "A short-sleeve sports shirt with athletic shorts and sneakers for a comfortable and active look at a sports event."
          },
          {
            "top": "Sporty jacket",
            "bottom": "Formal shorts",
            "shoes": "Running shoes",
            "description": "A sporty jacket with formal shorts and running shoes for a versatile and stylish outfit at a sports event."
          }
        ],
        "Chubby Short": [
          {
            "top": "Loose-fit athletic shirt",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "A loose-fit athletic shirt with sport shorts and running shoes for a comfortable and relaxed appearance at a sports event."
          },
          {
            "top": "Casual moisture-wicking shirt",
            "bottom": "Athletic shorts",
            "shoes": "Sneakers",
            "description": "A casual moisture-wicking shirt with athletic shorts and sneakers for a laid-back yet practical look at a sports event."
          },
          {
            "top": "Sporty jacket",
            "bottom": "Sport shorts",
            "shoes": "Running shoes",
            "description": "A sporty jacket with sport shorts and running shoes for a comfortable and casual outfit at a sports event."
          }
        ],
        "Chubby Tall": [
          {
            "top": "Loose-fit sports shirt",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A loose-fit sports shirt with athletic shorts and running shoes for a relaxed and comfortable look at a sports event."
          },
          {
            "top": "Casual moisture-wicking top",
            "bottom": "Sport shorts",
            "shoes": "Sneakers",
            "description": "A casual moisture-wicking top with sport shorts and sneakers for a laid-back yet stylish appearance at a sports event."
          },
          {
            "top": "Lightweight jacket",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A lightweight jacket with athletic shorts and running shoes for a comfortable and active outfit at a sports event."
          }
        ],
        "Chubby Average": [
          {
            "top": "Loose-fit athletic shirt",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A loose-fit athletic shirt with athletic shorts and running shoes for a relaxed yet practical appearance at a sports event."
          },
          {
            "top": "Casual moisture-wicking shirt",
            "bottom": "Sport shorts",
            "shoes": "Sneakers",
            "description": "A casual moisture-wicking shirt with sport shorts and sneakers for a laid-back yet active look at a sports event."
          },
          {
            "top": "Sporty jacket",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A sporty jacket with athletic shorts and running shoes for a comfortable and casual outfit at a sports event."
          }
        ],
        "Overweight Short": [
          {
            "top": "Loose-fit sports shirt",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A loose-fit sports shirt with athletic shorts and running shoes for a relaxed and comfortable look at a sports event."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Sport shorts",
            "shoes": "Sneakers",
            "description": "A casual hoodie with sport shorts and sneakers for a laid-back and practical outfit at a sports event."
          },
          {
            "top": "Relaxed sports shirt",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A relaxed sports shirt with athletic shorts and running shoes for a comfortable and active appearance at a sports event."
          }
        ],
        "Overweight Tall": [
          {
            "top": "Loose-fit sports shirt",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A loose-fit sports shirt with athletic shorts and running shoes for a relaxed and comfortable look at a sports event."
          },
          {
            "top": "Comfortable hoodie",
            "bottom": "Sport shorts",
            "shoes": "Sneakers",
            "description": "A comfortable hoodie with sport shorts and sneakers for a casual and practical outfit at a sports event."
          },
          {
            "top": "Lightweight jacket",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A lightweight jacket with athletic shorts and running shoes for a stylish and comfortable look at a sports event."
          }
        ],
        "Overweight Average": [
          {
            "top": "Loose-fit sports shirt",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A loose-fit sports shirt with athletic shorts and running shoes for a relaxed and comfortable look at a sports event."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Sport shorts",
            "shoes": "Sneakers",
            "description": "A casual hoodie with sport shorts and sneakers for a laid-back and active appearance at a sports event."
          },
          {
            "top": "Relaxed sports shirt",
            "bottom": "Athletic shorts",
            "shoes": "Running shoes",
            "description": "A relaxed sports shirt with athletic shorts and running shoes for a comfortable and practical outfit at a sports event."
          }
        ]
    },
    "Traveling": {
    "Skinny Short": [
      {
        "top": "Lightweight T-shirt",
        "bottom": "Comfortable shorts",
        "shoes": "Sneakers",
        "description": "A lightweight T-shirt with comfortable shorts and sneakers, ideal for long journeys and exploring new places."
      },
      {
        "top": "Breathable polo shirt",
        "bottom": "Casual shorts",
        "shoes": "Loafers",
        "description": "A breathable polo shirt with casual shorts and loafers for a relaxed yet stylish travel outfit."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A casual button-down shirt with chino shorts and slip-ons for a smart and comfortable travel look."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Fitted T-shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Sneakers",
        "description": "A fitted T-shirt with lightweight shorts and sneakers for a sleek and comfortable travel outfit."
      },
      {
        "top": "Breathable shirt",
        "bottom": "Casual shorts",
        "shoes": "Loafers",
        "description": "A breathable shirt with casual shorts and loafers for a relaxed and stylish appearance while traveling."
      },
      {
        "top": "Lightweight long-sleeve shirt",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A lightweight long-sleeve shirt with chino shorts and slip-ons for a comfortable and smart look during travel."
      }
    ],
    "Skinny Average": [
      {
        "top": "Comfortable T-shirt",
        "bottom": "Casual shorts",
        "shoes": "Sneakers",
        "description": "A comfortable T-shirt with casual shorts and sneakers for an easygoing travel outfit."
      },
      {
        "top": "Breathable polo",
        "bottom": "Lightweight shorts",
        "shoes": "Loafers",
        "description": "A breathable polo with lightweight shorts and loafers for a practical yet stylish travel look."
      },
      {
        "top": "Casual button-down",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A casual button-down with chino shorts and slip-ons for a smart and comfortable travel outfit."
      }
    ],
    "Lean Short": [
      {
        "top": "Muscle-fit T-shirt",
        "bottom": "Comfortable shorts",
        "shoes": "Sneakers",
        "description": "A muscle-fit T-shirt with comfortable shorts and sneakers for an active and sleek travel look."
      },
      {
        "top": "Fitted breathable shirt",
        "bottom": "Casual shorts",
        "shoes": "Loafers",
        "description": "A fitted breathable shirt with casual shorts and loafers for a stylish and functional travel outfit."
      },
      {
        "top": "Slim-fit button-down shirt",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A slim-fit button-down shirt with chino shorts and slip-ons for a smart and comfortable travel look."
      }
    ],
    "Lean Tall": [
      {
        "top": "Muscle-fit T-shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Sneakers",
        "description": "A muscle-fit T-shirt with lightweight shorts and sneakers for a sleek and active travel outfit."
      },
      {
        "top": "Fitted breathable shirt",
        "bottom": "Casual shorts",
        "shoes": "Loafers",
        "description": "A fitted breathable shirt with casual shorts and loafers for a stylish and practical look while traveling."
      },
      {
        "top": "Lightweight long-sleeve shirt",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A lightweight long-sleeve shirt with chino shorts and slip-ons for a comfortable and smart travel outfit."
      }
    ],
    "Lean Average": [
      {
        "top": "Muscle-fit T-shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Sneakers",
        "description": "A muscle-fit T-shirt with lightweight shorts and sneakers for a sporty and comfortable travel look."
      },
      {
        "top": "Fitted breathable shirt",
        "bottom": "Casual shorts",
        "shoes": "Loafers",
        "description": "A fitted breathable shirt with casual shorts and loafers for a sleek and versatile travel outfit."
      },
      {
        "top": "Slim-fit button-down",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A slim-fit button-down with chino shorts and slip-ons for a smart and practical travel look."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Muscle-fit tank top",
        "bottom": "Comfortable shorts",
        "shoes": "Sneakers",
        "description": "A muscle-fit tank top with comfortable shorts and sneakers for an athletic and comfortable travel look."
      },
      {
        "top": "Fitted sports shirt",
        "bottom": "Casual shorts",
        "shoes": "Loafers",
        "description": "A fitted sports shirt with casual shorts and loafers for a sporty and stylish travel outfit."
      },
      {
        "top": "Slim-fit button-down",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A slim-fit button-down with chino shorts and slip-ons for a smart and comfortable travel look."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Muscle-fit T-shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Sneakers",
        "description": "A muscle-fit T-shirt with lightweight shorts and sneakers for a sleek and athletic travel outfit."
      },
      {
        "top": "Fitted breathable shirt",
        "bottom": "Casual shorts",
        "shoes": "Loafers",
        "description": "A fitted breathable shirt with casual shorts and loafers for a stylish and functional travel outfit."
      },
      {
        "top": "Lightweight long-sleeve shirt",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A lightweight long-sleeve shirt with chino shorts and slip-ons for a comfortable and smart travel look."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Muscle-fit T-shirt",
        "bottom": "Comfortable shorts",
        "shoes": "Sneakers",
        "description": "A muscle-fit T-shirt with comfortable shorts and sneakers for a sporty and relaxed travel look."
      },
      {
        "top": "Fitted breathable shirt",
        "bottom": "Casual shorts",
        "shoes": "Loafers",
        "description": "A fitted breathable shirt with casual shorts and loafers for a sleek and versatile travel outfit."
      },
      {
        "top": "Slim-fit button-down",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A slim-fit button-down with chino shorts and slip-ons for a smart and practical travel look."
      }
    ],
    "Average Short": [
      {
        "top": "Casual T-shirt",
        "bottom": "Comfortable shorts",
        "shoes": "Sneakers",
        "description": "A casual T-shirt with comfortable shorts and sneakers for an easygoing and practical travel outfit."
      },
      {
        "top": "Breathable shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Loafers",
        "description": "A breathable shirt with lightweight shorts and loafers for a comfortable and stylish travel look."
      },
      {
        "top": "Relaxed button-down",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A relaxed button-down with chino shorts and slip-ons for a smart and casual travel appearance."
      }
    ],
    "Average Tall": [
      {
        "top": "Casual T-shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Sneakers",
        "description": "A casual T-shirt with lightweight shorts and sneakers for a practical and comfortable travel outfit."
      },
      {
        "top": "Breathable shirt",
        "bottom": "Casual shorts",
        "shoes": "Loafers",
        "description": "A breathable shirt with casual shorts and loafers for a relaxed and stylish travel look."
      },
      {
        "top": "Lightweight button-down",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A lightweight button-down with chino shorts and slip-ons for a smart and comfortable travel appearance."
      }
    ],
    "Average Average": [
      {
        "top": "Comfortable T-shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Sneakers",
        "description": "A comfortable T-shirt with lightweight shorts and sneakers for a relaxed and practical travel look."
      },
      {
        "top": "Breathable polo",
        "bottom": "Casual shorts",
        "shoes": "Loafers",
        "description": "A breathable polo with casual shorts and loafers for a stylish and comfortable travel outfit."
      },
      {
        "top": "Relaxed button-down",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A relaxed button-down with chino shorts and slip-ons for a smart and easygoing travel appearance."
      }
    ],
    "Chubby Short": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Comfortable shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit T-shirt with comfortable shorts and sneakers for a relaxed and practical travel outfit."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Loafers",
        "description": "A casual button-down shirt with lightweight shorts and loafers for a comfortable and stylish travel look."
      },
      {
        "top": "Breathable polo",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo with chino shorts and slip-ons for a laid-back and smart travel appearance."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit T-shirt with lightweight shorts and sneakers for a relaxed and comfortable travel outfit."
      },
      {
        "top": "Casual button-down",
        "bottom": "Comfortable shorts",
        "shoes": "Loafers",
        "description": "A casual button-down with comfortable shorts and loafers for a laid-back and stylish travel look."
      },
      {
        "top": "Breathable polo shirt",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo shirt with chino shorts and slip-ons for a smart and comfortable travel appearance."
      }
    ],
    "Chubby Average": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit T-shirt with lightweight shorts and sneakers for a comfortable and casual travel look."
      },
      {
        "top": "Casual button-down",
        "bottom": "Comfortable shorts",
        "shoes": "Loafers",
        "description": "A casual button-down with comfortable shorts and loafers for a laid-back and stylish travel outfit."
      },
      {
        "top": "Breathable polo",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo with chino shorts and slip-ons for a relaxed and smart travel appearance."
      }
    ],
    "Overweight Short": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Comfortable shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit T-shirt with comfortable shorts and sneakers for a relaxed and practical travel outfit."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Lightweight shorts",
        "shoes": "Loafers",
        "description": "A casual hoodie with lightweight shorts and loafers for a comfortable and laid-back travel look."
      },
      {
        "top": "Breathable polo shirt",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo shirt with chino shorts and slip-ons for a relaxed and stylish travel outfit."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit T-shirt with lightweight shorts and sneakers for a comfortable and relaxed travel look."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Comfortable shorts",
        "shoes": "Loafers",
        "description": "A casual hoodie with comfortable shorts and loafers for a laid-back and practical travel outfit."
      },
      {
        "top": "Breathable polo shirt",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo shirt with chino shorts and slip-ons for a smart and comfortable travel look."
      }
    ],
    "Overweight Average": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Comfortable shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit T-shirt with comfortable shorts and sneakers for a relaxed and practical travel look."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Lightweight shorts",
        "shoes": "Loafers",
        "description": "A casual hoodie with lightweight shorts and loafers for a comfortable and laid-back travel outfit."
      },
      {
        "top": "Breathable polo",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo with chino shorts and slip-ons for a stylish and comfortable travel look."
      }
    ]
    },
    "Housewarming Parties": {
    "Skinny Short": [
      {
        "top": "Fitted casual shirt",
        "bottom": "Lightweight chinos",
        "shoes": "Loafers",
        "description": "A fitted casual shirt with lightweight chinos and loafers for a chic yet comfortable housewarming look."
      },
      {
        "top": "Slim-fit polo shirt",
        "bottom": "Casual shorts",
        "shoes": "Slip-ons",
        "description": "A slim-fit polo shirt with casual shorts and slip-ons for a relaxed and stylish housewarming outfit."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Lightweight trousers",
        "shoes": "Loafers",
        "description": "A casual button-down shirt with lightweight trousers and loafers for a sophisticated housewarming appearance."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Fitted casual shirt",
        "bottom": "Lightweight chinos",
        "shoes": "Loafers",
        "description": "A fitted casual shirt with lightweight chinos and loafers for a sleek and comfortable housewarming look."
      },
      {
        "top": "Slim-fit polo shirt",
        "bottom": "Casual shorts",
        "shoes": "Slip-ons",
        "description": "A slim-fit polo shirt with casual shorts and slip-ons for a relaxed and stylish housewarming outfit."
      },
      {
        "top": "Casual long-sleeve shirt",
        "bottom": "Lightweight trousers",
        "shoes": "Loafers",
        "description": "A casual long-sleeve shirt with lightweight trousers and loafers for a smart and comfortable housewarming look."
      }
    ],
    "Skinny Average": [
      {
        "top": "Fitted casual shirt",
        "bottom": "Lightweight chinos",
        "shoes": "Loafers",
        "description": "A fitted casual shirt with lightweight chinos and loafers for a sharp and stylish housewarming outfit."
      },
      {
        "top": "Slim-fit polo shirt",
        "bottom": "Casual shorts",
        "shoes": "Slip-ons",
        "description": "A slim-fit polo shirt with casual shorts and slip-ons for a comfortable and relaxed housewarming look."
      },
      {
        "top": "Casual button-down",
        "bottom": "Lightweight trousers",
        "shoes": "Loafers",
        "description": "A casual button-down with lightweight trousers and loafers for a smart and easygoing housewarming outfit."
      }
    ],
    "Lean Short": [
      {
        "top": "Muscle-fit casual shirt",
        "bottom": "Lightweight chinos",
        "shoes": "Loafers",
        "description": "A muscle-fit casual shirt with lightweight chinos and loafers for an athletic yet stylish housewarming look."
      },
      {
        "top": "Fitted polo shirt",
        "bottom": "Casual shorts",
        "shoes": "Slip-ons",
        "description": "A fitted polo shirt with casual shorts and slip-ons for a sleek and relaxed housewarming outfit."
      },
      {
        "top": "Slim-fit button-down shirt",
        "bottom": "Lightweight trousers",
        "shoes": "Loafers",
        "description": "A slim-fit button-down shirt with lightweight trousers and loafers for a smart and comfortable housewarming appearance."
      }
    ],
    "Lean Tall": [
      {
        "top": "Muscle-fit casual shirt",
        "bottom": "Lightweight chinos",
        "shoes": "Loafers",
        "description": "A muscle-fit casual shirt with lightweight chinos and loafers for a sleek and athletic housewarming look."
      },
      {
        "top": "Fitted polo shirt",
        "bottom": "Casual shorts",
        "shoes": "Slip-ons",
        "description": "A fitted polo shirt with casual shorts and slip-ons for a stylish and relaxed housewarming outfit."
      },
      {
        "top": "Lightweight long-sleeve shirt",
        "bottom": "Lightweight trousers",
        "shoes": "Loafers",
        "description": "A lightweight long-sleeve shirt with lightweight trousers and loafers for a smart and comfortable housewarming appearance."
      }
    ],
    "Lean Average": [
      {
        "top": "Muscle-fit casual shirt",
        "bottom": "Lightweight chinos",
        "shoes": "Loafers",
        "description": "A muscle-fit casual shirt with lightweight chinos and loafers for a sharp and sporty housewarming look."
      },
      {
        "top": "Fitted polo shirt",
        "bottom": "Casual shorts",
        "shoes": "Slip-ons",
        "description": "A fitted polo shirt with casual shorts and slip-ons for a sleek and comfortable housewarming outfit."
      },
      {
        "top": "Slim-fit button-down shirt",
        "bottom": "Lightweight trousers",
        "shoes": "Loafers",
        "description": "A slim-fit button-down shirt with lightweight trousers and loafers for a stylish and relaxed housewarming appearance."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Muscle-fit tank top",
        "bottom": "Comfortable shorts",
        "shoes": "Sneakers",
        "description": "A muscle-fit tank top with comfortable shorts and sneakers for an athletic and casual housewarming look."
      },
      {
        "top": "Fitted sports shirt",
        "bottom": "Casual shorts",
        "shoes": "Loafers",
        "description": "A fitted sports shirt with casual shorts and loafers for a sporty and relaxed housewarming outfit."
      },
      {
        "top": "Slim-fit button-down shirt",
        "bottom": "Lightweight trousers",
        "shoes": "Loafers",
        "description": "A slim-fit button-down shirt with lightweight trousers and loafers for a smart and comfortable housewarming appearance."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Muscle-fit casual shirt",
        "bottom": "Lightweight chinos",
        "shoes": "Loafers",
        "description": "A muscle-fit casual shirt with lightweight chinos and loafers for a sleek and athletic housewarming look."
      },
      {
        "top": "Fitted polo shirt",
        "bottom": "Casual shorts",
        "shoes": "Slip-ons",
        "description": "A fitted polo shirt with casual shorts and slip-ons for a stylish and relaxed housewarming outfit."
      },
      {
        "top": "Lightweight long-sleeve shirt",
        "bottom": "Lightweight trousers",
        "shoes": "Loafers",
        "description": "A lightweight long-sleeve shirt with lightweight trousers and loafers for a comfortable and smart housewarming appearance."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Muscle-fit casual shirt",
        "bottom": "Lightweight chinos",
        "shoes": "Loafers",
        "description": "A muscle-fit casual shirt with lightweight chinos and loafers for a stylish and sporty housewarming look."
      },
      {
        "top": "Fitted polo shirt",
        "bottom": "Casual shorts",
        "shoes": "Slip-ons",
        "description": "A fitted polo shirt with casual shorts and slip-ons for a relaxed and sleek housewarming outfit."
      },
      {
        "top": "Slim-fit button-down",
        "bottom": "Lightweight trousers",
        "shoes": "Loafers",
        "description": "A slim-fit button-down with lightweight trousers and loafers for a smart and comfortable housewarming appearance."
      }
    ],
    "Average Short": [
      {
        "top": "Casual shirt",
        "bottom": "Comfortable chinos",
        "shoes": "Loafers",
        "description": "A casual shirt with comfortable chinos and loafers for a relaxed yet stylish housewarming look."
      },
      {
        "top": "Breathable polo shirt",
        "bottom": "Casual shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo shirt with casual shorts and slip-ons for a comfortable and easygoing housewarming outfit."
      },
      {
        "top": "Relaxed button-down shirt",
        "bottom": "Lightweight trousers",
        "shoes": "Loafers",
        "description": "A relaxed button-down shirt with lightweight trousers and loafers for a smart and comfortable housewarming appearance."
      }
    ],
    "Average Tall": [
      {
        "top": "Casual shirt",
        "bottom": "Lightweight chinos",
        "shoes": "Loafers",
        "description": "A casual shirt with lightweight chinos and loafers for a practical and stylish housewarming look."
      },
      {
        "top": "Breathable polo shirt",
        "bottom": "Casual shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo shirt with casual shorts and slip-ons for a relaxed and comfortable housewarming outfit."
      },
      {
        "top": "Lightweight button-down shirt",
        "bottom": "Lightweight trousers",
        "shoes": "Loafers",
        "description": "A lightweight button-down shirt with lightweight trousers and loafers for a smart and casual housewarming appearance."
      }
    ],
    "Average Average": [
      {
        "top": "Casual shirt",
        "bottom": "Comfortable chinos",
        "shoes": "Loafers",
        "description": "A casual shirt with comfortable chinos and loafers for a relaxed and stylish housewarming look."
      },
      {
        "top": "Breathable polo shirt",
        "bottom": "Casual shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo shirt with casual shorts and slip-ons for a comfortable and laid-back housewarming outfit."
      },
      {
        "top": "Relaxed button-down shirt",
        "bottom": "Lightweight trousers",
        "shoes": "Loafers",
        "description": "A relaxed button-down shirt with lightweight trousers and loafers for a smart and easygoing housewarming appearance."
      }
    ],
    "Chubby Short": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Comfortable shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit T-shirt with comfortable shorts and sneakers for a relaxed and practical housewarming outfit."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Loafers",
        "description": "A casual button-down shirt with lightweight shorts and loafers for a laid-back and stylish housewarming look."
      },
      {
        "top": "Breathable polo",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo with chino shorts and slip-ons for a relaxed and smart housewarming appearance."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit T-shirt with lightweight shorts and sneakers for a comfortable and relaxed housewarming look."
      },
      {
        "top": "Casual button-down",
        "bottom": "Comfortable shorts",
        "shoes": "Loafers",
        "description": "A casual button-down with comfortable shorts and loafers for a laid-back and practical housewarming outfit."
      },
      {
        "top": "Breathable polo shirt",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo shirt with chino shorts and slip-ons for a smart and casual housewarming appearance."
      }
    ],
    "Chubby Average": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit T-shirt with lightweight shorts and sneakers for a comfortable and casual housewarming look."
      },
      {
        "top": "Casual button-down",
        "bottom": "Comfortable shorts",
        "shoes": "Loafers",
        "description": "A casual button-down with comfortable shorts and loafers for a laid-back and stylish housewarming outfit."
      },
      {
        "top": "Breathable polo",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo with chino shorts and slip-ons for a relaxed and smart housewarming appearance."
      }
    ],
    "Overweight Short": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Comfortable shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit T-shirt with comfortable shorts and sneakers for a relaxed and practical housewarming outfit."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Lightweight shorts",
        "shoes": "Loafers",
        "description": "A casual hoodie with lightweight shorts and loafers for a comfortable and laid-back housewarming look."
      },
      {
        "top": "Breathable polo shirt",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo shirt with chino shorts and slip-ons for a relaxed and stylish housewarming outfit."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Lightweight shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit T-shirt with lightweight shorts and sneakers for a comfortable and relaxed housewarming look."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Comfortable shorts",
        "shoes": "Loafers",
        "description": "A casual hoodie with comfortable shorts and loafers for a laid-back and practical housewarming outfit."
      },
      {
        "top": "Breathable polo shirt",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo shirt with chino shorts and slip-ons for a smart and comfortable housewarming look."
      }
    ],
    "Overweight Average": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Comfortable shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit T-shirt with comfortable shorts and sneakers for a relaxed and practical housewarming look."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Lightweight shorts",
        "shoes": "Loafers",
        "description": "A casual hoodie with lightweight shorts and loafers for a comfortable and laid-back housewarming outfit."
      },
      {
        "top": "Breathable polo",
        "bottom": "Chino shorts",
        "shoes": "Slip-ons",
        "description": "A breathable polo with chino shorts and slip-ons for a stylish and comfortable housewarming look."
      }
    ]
    },
    "Anniversary Celebrations": {
        "Skinny Short": [
          {
            "top": "Slim-fit dress shirt",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A slim-fit dress shirt with dress shorts and loafers for a sharp and sophisticated anniversary look."
          },
          {
            "top": "Short-sleeve button-up shirt",
            "bottom": "Dress shorts",
            "shoes": "Leather loafers",
            "description": "A short-sleeve button-up shirt with dress shorts and leather loafers for a stylish yet casual anniversary outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A casual blazer paired with dress shorts and loafers for a smart and relaxed anniversary look."
          }
        ],
        "Skinny Tall": [
          {
            "top": "Slim-fit dress shirt",
            "bottom": "Lightweight chinos",
            "shoes": "Loafers",
            "description": "A slim-fit dress shirt with lightweight chinos and loafers for a sophisticated and elegant anniversary outfit."
          },
          {
            "top": "Short-sleeve button-up shirt",
            "bottom": "Lightweight chinos",
            "shoes": "Leather loafers",
            "description": "A short-sleeve button-up shirt with lightweight chinos and leather loafers for a stylish and comfortable anniversary look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Lightweight chinos",
            "shoes": "Loafers",
            "description": "A casual blazer over lightweight chinos and loafers for a refined and stylish anniversary appearance."
          }
        ],
        "Skinny Average": [
          {
            "top": "Slim-fit dress shirt",
            "bottom": "Dress trousers",
            "shoes": "Loafers",
            "description": "A slim-fit dress shirt with dress trousers and loafers for a sharp and classy anniversary outfit."
          },
          {
            "top": "Short-sleeve button-up shirt",
            "bottom": "Dress trousers",
            "shoes": "Leather loafers",
            "description": "A short-sleeve button-up shirt with dress trousers and leather loafers for a sophisticated yet comfortable anniversary look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Dress trousers",
            "shoes": "Loafers",
            "description": "A casual blazer paired with dress trousers and loafers for an elegant and relaxed anniversary outfit."
          }
        ],
        "Lean Short": [
          {
            "top": "Muscle-fit dress shirt",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A muscle-fit dress shirt with dress shorts and loafers for a stylish and athletic anniversary look."
          },
          {
            "top": "Fitted button-up shirt",
            "bottom": "Dress shorts",
            "shoes": "Leather loafers",
            "description": "A fitted button-up shirt with dress shorts and leather loafers for a chic and comfortable anniversary outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A casual blazer over dress shorts and loafers for a refined yet relaxed anniversary appearance."
          }
        ],
        "Lean Tall": [
          {
            "top": "Muscle-fit dress shirt",
            "bottom": "Lightweight chinos",
            "shoes": "Loafers",
            "description": "A muscle-fit dress shirt with lightweight chinos and loafers for a sharp and athletic anniversary look."
          },
          {
            "top": "Fitted button-up shirt",
            "bottom": "Lightweight chinos",
            "shoes": "Leather loafers",
            "description": "A fitted button-up shirt with lightweight chinos and leather loafers for a stylish and sophisticated anniversary outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Lightweight chinos",
            "shoes": "Loafers",
            "description": "A casual blazer paired with lightweight chinos and loafers for a smart and comfortable anniversary look."
          }
        ],
        "Lean Average": [
          {
            "top": "Muscle-fit dress shirt",
            "bottom": "Dress trousers",
            "shoes": "Loafers",
            "description": "A muscle-fit dress shirt with dress trousers and loafers for an athletic yet classy anniversary appearance."
          },
          {
            "top": "Fitted button-up shirt",
            "bottom": "Dress trousers",
            "shoes": "Leather loafers",
            "description": "A fitted button-up shirt with dress trousers and leather loafers for a sharp and comfortable anniversary look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Dress trousers",
            "shoes": "Loafers",
            "description": "A casual blazer over dress trousers and loafers for a stylish and refined anniversary outfit."
          }
        ],
        "Lean Muscular Short": [
          {
            "top": "Muscle-fit tank top",
            "bottom": "Dress shorts",
            "shoes": "Sneakers",
            "description": "A muscle-fit tank top with dress shorts and sneakers for an athletic and casual anniversary look."
          },
          {
            "top": "Fitted sports shirt",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A fitted sports shirt with dress shorts and loafers for a sporty and stylish anniversary outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A casual blazer paired with dress shorts and loafers for a refined yet relaxed anniversary look."
          }
        ],
        "Lean Muscular Tall": [
          {
            "top": "Muscle-fit dress shirt",
            "bottom": "Lightweight chinos",
            "shoes": "Loafers",
            "description": "A muscle-fit dress shirt with lightweight chinos and loafers for an athletic and elegant anniversary look."
          },
          {
            "top": "Fitted button-up shirt",
            "bottom": "Lightweight chinos",
            "shoes": "Leather loafers",
            "description": "A fitted button-up shirt with lightweight chinos and leather loafers for a sharp and stylish anniversary outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Lightweight chinos",
            "shoes": "Loafers",
            "description": "A casual blazer over lightweight chinos and loafers for a refined and comfortable anniversary look."
          }
        ],
        "Lean Muscular Average": [
          {
            "top": "Muscle-fit dress shirt",
            "bottom": "Dress trousers",
            "shoes": "Loafers",
            "description": "A muscle-fit dress shirt with dress trousers and loafers for a stylish and athletic anniversary appearance."
          },
          {
            "top": "Fitted button-up shirt",
            "bottom": "Dress trousers",
            "shoes": "Leather loafers",
            "description": "A fitted button-up shirt with dress trousers and leather loafers for a sharp and comfortable anniversary outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Dress trousers",
            "shoes": "Loafers",
            "description": "A casual blazer over dress trousers and loafers for a sophisticated and relaxed anniversary look."
          }
        ],
        "Average Short": [
          {
            "top": "Casual dress shirt",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A casual dress shirt with dress shorts and loafers for a stylish and comfortable anniversary look."
          },
          {
            "top": "Breathable button-up shirt",
            "bottom": "Dress shorts",
            "shoes": "Leather loafers",
            "description": "A breathable button-up shirt with dress shorts and leather loafers for a chic and relaxed anniversary outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Dress shorts",
            "shoes": "Loafers",
            "description": "A casual blazer paired with dress shorts and loafers for a refined yet comfortable anniversary look."
          }
        ],
        "Average Tall": [
          {
            "top": "Casual dress shirt",
            "bottom": "Lightweight chinos",
            "shoes": "Loafers",
            "description": "A casual dress shirt with lightweight chinos and loafers for a sharp and comfortable anniversary appearance."
          },
          {
            "top": "Breathable button-up shirt",
            "bottom": "Lightweight chinos",
            "shoes": "Leather loafers",
            "description": "A breathable button-up shirt with lightweight chinos and leather loafers for a stylish and relaxed anniversary look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Lightweight chinos",
            "shoes": "Loafers",
            "description": "A casual blazer over lightweight chinos and loafers for a refined and comfortable anniversary outfit."
          }
        ],
        "Average Average": [
          {
            "top": "Casual dress shirt",
            "bottom": "Dress trousers",
            "shoes": "Loafers",
            "description": "A casual dress shirt with dress trousers and loafers for a stylish and comfortable anniversary look."
          },
          {
            "top": "Breathable button-up shirt",
            "bottom": "Dress trousers",
            "shoes": "Leather loafers",
            "description": "A breathable button-up shirt with dress trousers and leather loafers for a chic and relaxed anniversary outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Dress trousers",
            "shoes": "Loafers",
            "description": "A casual blazer over dress trousers and loafers for a refined yet comfortable anniversary appearance."
          }
        ],
        "Chubby Short": [
          {
            "top": "Loose-fit button-up shirt",
            "bottom": "Comfortable shorts",
            "shoes": "Sneakers",
            "description": "A loose-fit button-up shirt with comfortable shorts and sneakers for a relaxed and casual anniversary look."
          },
          {
            "top": "Breathable polo shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A breathable polo shirt with chino shorts and loafers for a laid-back and smart anniversary outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Comfortable shorts",
            "shoes": "Loafers",
            "description": "A casual blazer paired with comfortable shorts and loafers for a stylish yet relaxed anniversary appearance."
          }
        ],
        "Chubby Tall": [
          {
            "top": "Loose-fit button-up shirt",
            "bottom": "Lightweight shorts",
            "shoes": "Sneakers",
            "description": "A loose-fit button-up shirt with lightweight shorts and sneakers for a comfortable and casual anniversary look."
          },
          {
            "top": "Breathable polo shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A breathable polo shirt with chino shorts and loafers for a laid-back and smart anniversary outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Lightweight shorts",
            "shoes": "Loafers",
            "description": "A casual blazer paired with lightweight shorts and loafers for a refined yet relaxed anniversary look."
          }
        ],
        "Chubby Average": [
          {
            "top": "Loose-fit button-up shirt",
            "bottom": "Comfortable shorts",
            "shoes": "Sneakers",
            "description": "A loose-fit button-up shirt with comfortable shorts and sneakers for a relaxed and casual anniversary appearance."
          },
          {
            "top": "Breathable polo shirt",
            "bottom": "Chino shorts",
            "shoes": "Loafers",
            "description": "A breathable polo shirt with chino shorts and loafers for a laid-back and smart anniversary look."
          },
          {
            "top": "Casual blazer",
            "bottom": "Comfortable shorts",
            "shoes": "Loafers",
            "description": "A casual blazer over comfortable shorts and loafers for a stylish and relaxed anniversary outfit."
          }
        ],
        "Overweight Short": [
          {
            "top": "Loose-fit T-shirt",
            "bottom": "Comfortable shorts",
            "shoes": "Sneakers",
            "description": "A loose-fit T-shirt with comfortable shorts and sneakers for a relaxed and practical anniversary look."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Comfortable shorts",
            "shoes": "Loafers",
            "description": "A casual hoodie with comfortable shorts and loafers for a laid-back and casual anniversary outfit."
          },
          {
            "top": "Breathable polo shirt",
            "bottom": "Chino shorts",
            "shoes": "Slip-ons",
            "description": "A breathable polo shirt with chino shorts and slip-ons for a relaxed and smart anniversary look."
          }
        ],
        "Overweight Tall": [
          {
            "top": "Loose-fit T-shirt",
            "bottom": "Lightweight shorts",
            "shoes": "Sneakers",
            "description": "A loose-fit T-shirt with lightweight shorts and sneakers for a comfortable and casual anniversary look."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Lightweight shorts",
            "shoes": "Loafers",
            "description": "A casual hoodie with lightweight shorts and loafers for a relaxed and practical anniversary outfit."
          },
          {
            "top": "Breathable polo shirt",
            "bottom": "Chino shorts",
            "shoes": "Slip-ons",
            "description": "A breathable polo shirt with chino shorts and slip-ons for a smart and casual anniversary look."
          }
        ],
        "Overweight Average": [
          {
            "top": "Loose-fit T-shirt",
            "bottom": "Comfortable shorts",
            "shoes": "Sneakers",
            "description": "A loose-fit T-shirt with comfortable shorts and sneakers for a relaxed and practical anniversary appearance."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Comfortable shorts",
            "shoes": "Loafers",
            "description": "A casual hoodie with comfortable shorts and loafers for a laid-back and casual anniversary outfit."
          },
          {
            "top": "Breathable polo shirt",
            "bottom": "Chino shorts",
            "shoes": "Slip-ons",
            "description": "A breathable polo shirt with chino shorts and slip-ons for a stylish and comfortable anniversary look."
          }
        ]
    },
    "Reunions": {
        "Skinny Short": [
          {
            "top": "Slim-fit button-up shirt",
            "bottom": "Casual shorts",
            "shoes": "Casual loafers",
            "description": "A slim-fit button-up shirt with casual shorts and loafers for a trendy and comfortable reunion outfit."
          },
          {
            "top": "Short-sleeve shirt",
            "bottom": "Casual shorts",
            "shoes": "Sneakers",
            "description": "A short-sleeve shirt with casual shorts and sneakers for a laid-back and stylish reunion look."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Casual shorts",
            "shoes": "Casual loafers",
            "description": "A lightweight blazer over casual shorts and loafers for a chic yet relaxed reunion outfit."
          }
        ],
        "Skinny Tall": [
          {
            "top": "Slim-fit button-up shirt",
            "bottom": "Casual chinos",
            "shoes": "Casual loafers",
            "description": "A slim-fit button-up shirt with casual chinos and loafers for a sophisticated yet comfortable reunion look."
          },
          {
            "top": "Short-sleeve button-up shirt",
            "bottom": "Casual chinos",
            "shoes": "Sneakers",
            "description": "A short-sleeve button-up shirt with casual chinos and sneakers for a relaxed and stylish reunion outfit."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Casual chinos",
            "shoes": "Casual loafers",
            "description": "A lightweight blazer over casual chinos and loafers for a refined yet casual reunion appearance."
          }
        ],
        "Skinny Average": [
          {
            "top": "Slim-fit button-up shirt",
            "bottom": "Casual trousers",
            "shoes": "Casual loafers",
            "description": "A slim-fit button-up shirt with casual trousers and loafers for a neat and stylish reunion outfit."
          },
          {
            "top": "Short-sleeve button-up shirt",
            "bottom": "Casual trousers",
            "shoes": "Sneakers",
            "description": "A short-sleeve button-up shirt with casual trousers and sneakers for a comfortable and trendy reunion look."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Casual trousers",
            "shoes": "Casual loafers",
            "description": "A lightweight blazer paired with casual trousers and loafers for a sophisticated yet laid-back reunion outfit."
          }
        ],
        "Lean Short": [
          {
            "top": "Muscle-fit button-up shirt",
            "bottom": "Casual shorts",
            "shoes": "Casual loafers",
            "description": "A muscle-fit button-up shirt with casual shorts and loafers for a stylish and sporty reunion look."
          },
          {
            "top": "Fitted short-sleeve shirt",
            "bottom": "Casual shorts",
            "shoes": "Sneakers",
            "description": "A fitted short-sleeve shirt with casual shorts and sneakers for a comfortable and chic reunion outfit."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Casual shorts",
            "shoes": "Casual loafers",
            "description": "A lightweight blazer over casual shorts and loafers for a trendy yet relaxed reunion appearance."
          }
        ],
        "Lean Tall": [
          {
            "top": "Muscle-fit button-up shirt",
            "bottom": "Casual chinos",
            "shoes": "Casual loafers",
            "description": "A muscle-fit button-up shirt with casual chinos and loafers for an athletic and polished reunion look."
          },
          {
            "top": "Fitted short-sleeve shirt",
            "bottom": "Casual chinos",
            "shoes": "Sneakers",
            "description": "A fitted short-sleeve shirt with casual chinos and sneakers for a comfortable and stylish reunion outfit."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Casual chinos",
            "shoes": "Casual loafers",
            "description": "A lightweight blazer over casual chinos and loafers for a sophisticated yet relaxed reunion appearance."
          }
        ],
        "Lean Average": [
          {
            "top": "Muscle-fit button-up shirt",
            "bottom": "Casual trousers",
            "shoes": "Casual loafers",
            "description": "A muscle-fit button-up shirt with casual trousers and loafers for an athletic and stylish reunion look."
          },
          {
            "top": "Fitted short-sleeve shirt",
            "bottom": "Casual trousers",
            "shoes": "Sneakers",
            "description": "A fitted short-sleeve shirt with casual trousers and sneakers for a chic and comfortable reunion outfit."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Casual trousers",
            "shoes": "Casual loafers",
            "description": "A lightweight blazer over casual trousers and loafers for a refined yet casual reunion appearance."
          }
        ],
        "Lean Muscular Short": [
          {
            "top": "Muscle-fit T-shirt",
            "bottom": "Casual shorts",
            "shoes": "Casual sneakers",
            "description": "A muscle-fit T-shirt with casual shorts and sneakers for a sporty and relaxed reunion look."
          },
          {
            "top": "Fitted sports shirt",
            "bottom": "Casual shorts",
            "shoes": "Casual loafers",
            "description": "A fitted sports shirt with casual shorts and loafers for a comfortable yet stylish reunion outfit."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Casual shorts",
            "shoes": "Casual loafers",
            "description": "A lightweight blazer over casual shorts and loafers for a chic yet relaxed reunion appearance."
          }
        ],
        "Lean Muscular Tall": [
          {
            "top": "Muscle-fit button-up shirt",
            "bottom": "Casual chinos",
            "shoes": "Casual loafers",
            "description": "A muscle-fit button-up shirt with casual chinos and loafers for an athletic and polished reunion look."
          },
          {
            "top": "Fitted sports shirt",
            "bottom": "Casual chinos",
            "shoes": "Casual sneakers",
            "description": "A fitted sports shirt with casual chinos and sneakers for a smart and stylish reunion outfit."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Casual chinos",
            "shoes": "Casual loafers",
            "description": "A lightweight blazer over casual chinos and loafers for a sophisticated yet casual reunion appearance."
          }
        ],
        "Lean Muscular Average": [
          {
            "top": "Muscle-fit button-up shirt",
            "bottom": "Casual trousers",
            "shoes": "Casual loafers",
            "description": "A muscle-fit button-up shirt with casual trousers and loafers for an athletic and stylish reunion look."
          },
          {
            "top": "Fitted sports shirt",
            "bottom": "Casual trousers",
            "shoes": "Casual sneakers",
            "description": "A fitted sports shirt with casual trousers and sneakers for a smart and relaxed reunion outfit."
          },
          {
            "top": "Lightweight blazer",
            "bottom": "Casual trousers",
            "shoes": "Casual loafers",
            "description": "A lightweight blazer over casual trousers and loafers for a refined yet comfortable reunion appearance."
          }
        ],
        "Average Short": [
          {
            "top": "Classic button-up shirt",
            "bottom": "Casual shorts",
            "shoes": "Casual loafers",
            "description": "A classic button-up shirt with casual shorts and loafers for a neat and comfortable reunion look."
          },
          {
            "top": "Breathable T-shirt",
            "bottom": "Casual shorts",
            "shoes": "Sneakers",
            "description": "A breathable T-shirt with casual shorts and sneakers for a relaxed and stylish reunion outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Casual shorts",
            "shoes": "Casual loafers",
            "description": "A casual blazer over casual shorts and loafers for a smart and laid-back reunion appearance."
          }
        ],
        "Average Tall": [
          {
            "top": "Classic button-up shirt",
            "bottom": "Casual chinos",
            "shoes": "Casual loafers",
            "description": "A classic button-up shirt with casual chinos and loafers for a sophisticated and comfortable reunion look."
          },
          {
            "top": "Breathable T-shirt",
            "bottom": "Casual chinos",
            "shoes": "Sneakers",
            "description": "A breathable T-shirt with casual chinos and sneakers for a relaxed and stylish reunion outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Casual chinos",
            "shoes": "Casual loafers",
            "description": "A casual blazer over casual chinos and loafers for a refined yet relaxed reunion appearance."
          }
        ],
        "Average Average": [
          {
            "top": "Classic button-up shirt",
            "bottom": "Casual trousers",
            "shoes": "Casual loafers",
            "description": "A classic button-up shirt with casual trousers and loafers for a neat and stylish reunion look."
          },
          {
            "top": "Breathable T-shirt",
            "bottom": "Casual trousers",
            "shoes": "Sneakers",
            "description": "A breathable T-shirt with casual trousers and sneakers for a relaxed and comfortable reunion outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Casual trousers",
            "shoes": "Casual loafers",
            "description": "A casual blazer over casual trousers and loafers for a smart yet laid-back reunion appearance."
          }
        ],
        "Chubby Short": [
          {
            "top": "Loose-fit button-up shirt",
            "bottom": "Casual shorts",
            "shoes": "Casual sneakers",
            "description": "A loose-fit button-up shirt with casual shorts and sneakers for a relaxed and comfortable reunion look."
          },
          {
            "top": "Breathable T-shirt",
            "bottom": "Casual shorts",
            "shoes": "Casual loafers",
            "description": "A breathable T-shirt with casual shorts and loafers for a comfortable and laid-back reunion outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Casual shorts",
            "shoes": "Casual loafers",
            "description": "A casual blazer over casual shorts and loafers for a refined yet relaxed reunion appearance."
          }
        ],
        "Chubby Tall": [
          {
            "top": "Loose-fit button-up shirt",
            "bottom": "Casual chinos",
            "shoes": "Casual sneakers",
            "description": "A loose-fit button-up shirt with casual chinos and sneakers for a comfortable and stylish reunion look."
          },
          {
            "top": "Breathable T-shirt",
            "bottom": "Casual chinos",
            "shoes": "Casual loafers",
            "description": "A breathable T-shirt with casual chinos and loafers for a laid-back and smart reunion outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Casual chinos",
            "shoes": "Casual loafers",
            "description": "A casual blazer over casual chinos and loafers for a sophisticated yet relaxed reunion appearance."
          }
        ],
        "Chubby Average": [
          {
            "top": "Loose-fit button-up shirt",
            "bottom": "Casual trousers",
            "shoes": "Casual sneakers",
            "description": "A loose-fit button-up shirt with casual trousers and sneakers for a comfortable and stylish reunion look."
          },
          {
            "top": "Breathable T-shirt",
            "bottom": "Casual trousers",
            "shoes": "Casual loafers",
            "description": "A breathable T-shirt with casual trousers and loafers for a laid-back yet smart reunion outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Casual trousers",
            "shoes": "Casual loafers",
            "description": "A casual blazer over casual trousers and loafers for a refined yet relaxed reunion appearance."
          }
        ],
        "Overweight Short": [
          {
            "top": "Loose-fit T-shirt",
            "bottom": "Casual shorts",
            "shoes": "Casual sneakers",
            "description": "A loose-fit T-shirt with casual shorts and sneakers for a comfortable and laid-back reunion look."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Casual shorts",
            "shoes": "Casual loafers",
            "description": "A casual hoodie with casual shorts and loafers for a relaxed yet stylish reunion outfit."
          },
          {
            "top": "Breathable T-shirt",
            "bottom": "Casual shorts",
            "shoes": "Casual slip-ons",
            "description": "A breathable T-shirt with casual shorts and slip-ons for a comfortable and easygoing reunion appearance."
          }
        ],
        "Overweight Tall": [
          {
            "top": "Loose-fit T-shirt",
            "bottom": "Casual chinos",
            "shoes": "Casual sneakers",
            "description": "A loose-fit T-shirt with casual chinos and sneakers for a relaxed and comfortable reunion look."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Casual chinos",
            "shoes": "Casual loafers",
            "description": "A casual hoodie with casual chinos and loafers for a laid-back yet stylish reunion outfit."
          },
          {
            "top": "Breathable T-shirt",
            "bottom": "Casual chinos",
            "shoes": "Casual slip-ons",
            "description": "A breathable T-shirt with casual chinos and slip-ons for a comfortable and relaxed reunion appearance."
          }
        ],
        "Overweight Average": [
          {
            "top": "Loose-fit T-shirt",
            "bottom": "Casual trousers",
            "shoes": "Casual sneakers",
            "description": "A loose-fit T-shirt with casual trousers and sneakers for a comfortable and stylish reunion look."
          },
          {
            "top": "Casual hoodie",
            "bottom": "Casual trousers",
            "shoes": "Casual loafers",
            "description": "A casual hoodie with casual trousers and loafers for a laid-back yet smart reunion outfit."
          },
          {
            "top": "Breathable T-shirt",
            "bottom": "Casual trousers",
            "shoes": "Casual slip-ons",
            "description": "A breathable T-shirt with casual trousers and slip-ons for a relaxed and comfortable reunion appearance."
          }
        ]
    },
    "Fashion Shows": {
    "Skinny Short": [
      {
        "top": "Tailored blazer",
        "bottom": "High-waisted shorts",
        "shoes": "Stylish loafers",
        "description": "A tailored blazer with high-waisted shorts and stylish loafers for a fashion-forward and chic look at a fashion show."
      },
      {
        "top": "Fitted shirt",
        "bottom": "Dress shorts",
        "shoes": "Fashion sneakers",
        "description": "A fitted shirt with dress shorts and fashion sneakers for a trendy and modern outfit at a fashion show."
      },
      {
        "top": "Casual blazer",
        "bottom": "High-waisted shorts",
        "shoes": "Loafers",
        "description": "A casual blazer over high-waisted shorts and loafers for a stylish and relaxed appearance at a fashion show."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Tailored blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Dress shoes",
        "description": "A tailored blazer with slim-fit trousers and dress shoes for a sophisticated and elegant look at a fashion show."
      },
      {
        "top": "Fitted shirt",
        "bottom": "Slim-fit chinos",
        "shoes": "Fashion sneakers",
        "description": "A fitted shirt with slim-fit chinos and fashion sneakers for a trendy and modern fashion show outfit."
      },
      {
        "top": "Casual blazer",
        "bottom": "Slim-fit chinos",
        "shoes": "Loafers",
        "description": "A casual blazer over slim-fit chinos and loafers for a stylish and relaxed appearance at a fashion show."
      }
    ],
    "Skinny Average": [
      {
        "top": "Tailored blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Dress shoes",
        "description": "A tailored blazer with slim-fit trousers and dress shoes for a chic and sophisticated fashion show look."
      },
      {
        "top": "Fitted shirt",
        "bottom": "Slim-fit trousers",
        "shoes": "Fashion sneakers",
        "description": "A fitted shirt with slim-fit trousers and fashion sneakers for a stylish and modern appearance at a fashion show."
      },
      {
        "top": "Casual blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Loafers",
        "description": "A casual blazer over slim-fit trousers and loafers for a relaxed yet fashionable look at a fashion show."
      }
    ],
    "Lean Short": [
      {
        "top": "Muscle-fit blazer",
        "bottom": "High-waisted shorts",
        "shoes": "Fashion sneakers",
        "description": "A muscle-fit blazer with high-waisted shorts and fashion sneakers for an athletic and stylish look at a fashion show."
      },
      {
        "top": "Fitted T-shirt",
        "bottom": "Dress shorts",
        "shoes": "Casual loafers",
        "description": "A fitted T-shirt with dress shorts and casual loafers for a trendy and comfortable fashion show outfit."
      },
      {
        "top": "Casual blazer",
        "bottom": "High-waisted shorts",
        "shoes": "Loafers",
        "description": "A casual blazer over high-waisted shorts and loafers for a chic yet relaxed fashion show appearance."
      }
    ],
    "Lean Tall": [
      {
        "top": "Muscle-fit blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Dress shoes",
        "description": "A muscle-fit blazer with slim-fit trousers and dress shoes for a polished and athletic look at a fashion show."
      },
      {
        "top": "Fitted T-shirt",
        "bottom": "Slim-fit chinos",
        "shoes": "Fashion sneakers",
        "description": "A fitted T-shirt with slim-fit chinos and fashion sneakers for a modern and trendy fashion show outfit."
      },
      {
        "top": "Casual blazer",
        "bottom": "Slim-fit chinos",
        "shoes": "Loafers",
        "description": "A casual blazer over slim-fit chinos and loafers for a stylish and laid-back fashion show appearance."
      }
    ],
    "Lean Average": [
      {
        "top": "Muscle-fit blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Dress shoes",
        "description": "A muscle-fit blazer with slim-fit trousers and dress shoes for a sophisticated and athletic fashion show look."
      },
      {
        "top": "Fitted T-shirt",
        "bottom": "Slim-fit trousers",
        "shoes": "Fashion sneakers",
        "description": "A fitted T-shirt with slim-fit trousers and fashion sneakers for a trendy and comfortable appearance at a fashion show."
      },
      {
        "top": "Casual blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Loafers",
        "description": "A casual blazer over slim-fit trousers and loafers for a refined yet relaxed fashion show outfit."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Muscle-fit blazer",
        "bottom": "High-waisted shorts",
        "shoes": "Fashion sneakers",
        "description": "A muscle-fit blazer with high-waisted shorts and fashion sneakers for a sporty and chic look at a fashion show."
      },
      {
        "top": "Fitted sports shirt",
        "bottom": "Dress shorts",
        "shoes": "Casual loafers",
        "description": "A fitted sports shirt with dress shorts and casual loafers for a comfortable and trendy fashion show outfit."
      },
      {
        "top": "Casual blazer",
        "bottom": "High-waisted shorts",
        "shoes": "Loafers",
        "description": "A casual blazer over high-waisted shorts and loafers for a relaxed yet fashionable appearance at a fashion show."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Muscle-fit blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Dress shoes",
        "description": "A muscle-fit blazer with slim-fit trousers and dress shoes for an athletic and polished fashion show look."
      },
      {
        "top": "Fitted sports shirt",
        "bottom": "Slim-fit chinos",
        "shoes": "Fashion sneakers",
        "description": "A fitted sports shirt with slim-fit chinos and fashion sneakers for a modern and stylish fashion show outfit."
      },
      {
        "top": "Casual blazer",
        "bottom": "Slim-fit chinos",
        "shoes": "Loafers",
        "description": "A casual blazer over slim-fit chinos and loafers for a sophisticated yet relaxed fashion show appearance."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Muscle-fit blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Dress shoes",
        "description": "A muscle-fit blazer with slim-fit trousers and dress shoes for a refined and athletic fashion show look."
      },
      {
        "top": "Fitted sports shirt",
        "bottom": "Slim-fit trousers",
        "shoes": "Fashion sneakers",
        "description": "A fitted sports shirt with slim-fit trousers and fashion sneakers for a stylish and comfortable fashion show outfit."
      },
      {
        "top": "Casual blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Loafers",
        "description": "A casual blazer over slim-fit trousers and loafers for a chic yet laid-back fashion show appearance."
      }
    ],
    "Average Short": [
      {
        "top": "Classic blazer",
        "bottom": "High-waisted shorts",
        "shoes": "Fashion loafers",
        "description": "A classic blazer with high-waisted shorts and fashion loafers for a stylish and trendy fashion show look."
      },
      {
        "top": "Stylish shirt",
        "bottom": "Dress shorts",
        "shoes": "Fashion sneakers",
        "description": "A stylish shirt with dress shorts and fashion sneakers for a modern and chic fashion show outfit."
      },
      {
        "top": "Casual blazer",
        "bottom": "High-waisted shorts",
        "shoes": "Loafers",
        "description": "A casual blazer over high-waisted shorts and loafers for a relaxed yet fashionable appearance at a fashion show."
      }
    ],
    "Average Tall": [
      {
        "top": "Classic blazer",
        "bottom": "Slim-fit chinos",
        "shoes": "Dress shoes",
        "description": "A classic blazer with slim-fit chinos and dress shoes for a sophisticated and stylish fashion show look."
      },
      {
        "top": "Stylish shirt",
        "bottom": "Slim-fit chinos",
        "shoes": "Fashion sneakers",
        "description": "A stylish shirt with slim-fit chinos and fashion sneakers for a modern and trendy fashion show outfit."
      },
      {
        "top": "Casual blazer",
        "bottom": "Slim-fit chinos",
        "shoes": "Loafers",
        "description": "A casual blazer over slim-fit chinos and loafers for a chic yet relaxed fashion show appearance."
      }
    ],
    "Average Average": [
      {
        "top": "Classic blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Dress shoes",
        "description": "A classic blazer with slim-fit trousers and dress shoes for a stylish and sophisticated fashion show look."
      },
      {
        "top": "Stylish shirt",
        "bottom": "Slim-fit trousers",
        "shoes": "Fashion sneakers",
        "description": "A stylish shirt with slim-fit trousers and fashion sneakers for a trendy and modern fashion show outfit."
      },
      {
        "top": "Casual blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Loafers",
        "description": "A casual blazer over slim-fit trousers and loafers for a chic yet laid-back fashion show appearance."
      }
    ],
    "Chubby Short": [
      {
        "top": "Loose-fit blazer",
        "bottom": "High-waisted shorts",
        "shoes": "Casual sneakers",
        "description": "A loose-fit blazer with high-waisted shorts and casual sneakers for a comfortable yet stylish fashion show look."
      },
      {
        "top": "Relaxed T-shirt",
        "bottom": "Dress shorts",
        "shoes": "Casual loafers",
        "description": "A relaxed T-shirt with dress shorts and casual loafers for a laid-back and fashionable fashion show outfit."
      },
      {
        "top": "Casual blazer",
        "bottom": "High-waisted shorts",
        "shoes": "Loafers",
        "description": "A casual blazer over high-waisted shorts and loafers for a refined yet relaxed fashion show appearance."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Loose-fit blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Casual sneakers",
        "description": "A loose-fit blazer with slim-fit trousers and casual sneakers for a comfortable and stylish fashion show look."
      },
      {
        "top": "Relaxed T-shirt",
        "bottom": "Slim-fit chinos",
        "shoes": "Casual loafers",
        "description": "A relaxed T-shirt with slim-fit chinos and casual loafers for a laid-back yet trendy fashion show outfit."
      },
      {
        "top": "Casual blazer",
        "bottom": "Slim-fit chinos",
        "shoes": "Loafers",
        "description": "A casual blazer over slim-fit chinos and loafers for a chic yet comfortable fashion show appearance."
      }
    ],
    "Chubby Average": [
      {
        "top": "Loose-fit blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Casual sneakers",
        "description": "A loose-fit blazer with slim-fit trousers and casual sneakers for a relaxed and stylish fashion show look."
      },
      {
        "top": "Relaxed T-shirt",
        "bottom": "Slim-fit trousers",
        "shoes": "Casual loafers",
        "description": "A relaxed T-shirt with slim-fit trousers and casual loafers for a comfortable and modern fashion show outfit."
      },
      {
        "top": "Casual blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Loafers",
        "description": "A casual blazer over slim-fit trousers and loafers for a laid-back yet refined fashion show appearance."
      }
    ],
    "Overweight Short": [
      {
        "top": "Loose-fit blazer",
        "bottom": "High-waisted shorts",
        "shoes": "Casual sneakers",
        "description": "A loose-fit blazer with high-waisted shorts and casual sneakers for a comfortable and relaxed fashion show look."
      },
      {
        "top": "Relaxed hoodie",
        "bottom": "Dress shorts",
        "shoes": "Casual loafers",
        "description": "A relaxed hoodie with dress shorts and casual loafers for a laid-back yet stylish fashion show outfit."
      },
      {
        "top": "Breathable T-shirt",
        "bottom": "High-waisted shorts",
        "shoes": "Casual slip-ons",
        "description": "A breathable T-shirt with high-waisted shorts and slip-ons for a relaxed and easygoing fashion show appearance."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Loose-fit blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Casual sneakers",
        "description": "A loose-fit blazer with slim-fit trousers and casual sneakers for a comfortable and stylish fashion show look."
      },
      {
        "top": "Relaxed hoodie",
        "bottom": "Slim-fit chinos",
        "shoes": "Casual loafers",
        "description": "A relaxed hoodie with slim-fit chinos and casual loafers for a laid-back yet fashionable fashion show outfit."
      },
      {
        "top": "Breathable T-shirt",
        "bottom": "Slim-fit chinos",
        "shoes": "Casual slip-ons",
        "description": "A breathable T-shirt with slim-fit chinos and slip-ons for a comfortable and relaxed fashion show appearance."
      }
    ],
    "Overweight Average": [
      {
        "top": "Loose-fit blazer",
        "bottom": "Slim-fit trousers",
        "shoes": "Casual sneakers",
        "description": "A loose-fit blazer with slim-fit trousers and casual sneakers for a relaxed and stylish fashion show look."
      },
      {
        "top": "Relaxed hoodie",
        "bottom": "Slim-fit trousers",
        "shoes": "Casual loafers",
        "description": "A relaxed hoodie with slim-fit trousers and casual loafers for a laid-back yet smart fashion show outfit."
      },
      {
        "top": "Breathable T-shirt",
        "bottom": "Slim-fit trousers",
        "shoes": "Casual slip-ons",
        "description": "A breathable T-shirt with slim-fit trousers and slip-ons for a comfortable and stylish fashion show appearance."
      }
    ]
    },
    "Art Gallery Openings": {
        "Skinny Short": [
          {
            "top": "Tailored blazer",
            "bottom": "High-waisted shorts",
            "shoes": "Loafers",
            "description": "A tailored blazer with high-waisted shorts and loafers for a refined and stylish appearance at an art gallery opening."
          },
          {
            "top": "Fitted shirt",
            "bottom": "Dress shorts",
            "shoes": "Brogues",
            "description": "A fitted shirt with dress shorts and brogues for a sleek and modern look at an art gallery opening."
          },
          {
            "top": "Casual blazer",
            "bottom": "High-waisted shorts",
            "shoes": "Casual loafers",
            "description": "A casual blazer over high-waisted shorts and casual loafers for a chic yet relaxed gallery outfit."
          }
        ],
        "Skinny Tall": [
          {
            "top": "Tailored blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Oxford shoes",
            "description": "A tailored blazer with slim-fit trousers and Oxford shoes for an elegant and sophisticated look at an art gallery opening."
          },
          {
            "top": "Fitted shirt",
            "bottom": "Slim-fit chinos",
            "shoes": "Brogues",
            "description": "A fitted shirt with slim-fit chinos and brogues for a modern and stylish gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Loafers",
            "description": "A casual blazer over slim-fit chinos and loafers for a chic yet laid-back appearance at an art gallery opening."
          }
        ],
        "Skinny Average": [
          {
            "top": "Tailored blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Oxford shoes",
            "description": "A tailored blazer with slim-fit trousers and Oxford shoes for a stylish and sophisticated art gallery look."
          },
          {
            "top": "Fitted shirt",
            "bottom": "Slim-fit trousers",
            "shoes": "Brogues",
            "description": "A fitted shirt with slim-fit trousers and brogues for a modern and elegant gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Loafers",
            "description": "A casual blazer over slim-fit trousers and loafers for a relaxed yet fashionable appearance at an art gallery."
          }
        ],
        "Lean Short": [
          {
            "top": "Muscle-fit blazer",
            "bottom": "High-waisted shorts",
            "shoes": "Fashion loafers",
            "description": "A muscle-fit blazer with high-waisted shorts and fashion loafers for a stylish and athletic look at an art gallery opening."
          },
          {
            "top": "Fitted T-shirt",
            "bottom": "Dress shorts",
            "shoes": "Casual loafers",
            "description": "A fitted T-shirt with dress shorts and casual loafers for a modern and trendy gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "High-waisted shorts",
            "shoes": "Loafers",
            "description": "A casual blazer over high-waisted shorts and loafers for a relaxed yet sophisticated gallery appearance."
          }
        ],
        "Lean Tall": [
          {
            "top": "Muscle-fit blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Oxford shoes",
            "description": "A muscle-fit blazer with slim-fit trousers and Oxford shoes for a polished and athletic look at an art gallery opening."
          },
          {
            "top": "Fitted T-shirt",
            "bottom": "Slim-fit chinos",
            "shoes": "Brogues",
            "description": "A fitted T-shirt with slim-fit chinos and brogues for a trendy and modern gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Loafers",
            "description": "A casual blazer over slim-fit chinos and loafers for a chic yet comfortable appearance at an art gallery opening."
          }
        ],
        "Lean Average": [
          {
            "top": "Muscle-fit blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Oxford shoes",
            "description": "A muscle-fit blazer with slim-fit trousers and Oxford shoes for an athletic and stylish gallery look."
          },
          {
            "top": "Fitted T-shirt",
            "bottom": "Slim-fit trousers",
            "shoes": "Brogues",
            "description": "A fitted T-shirt with slim-fit trousers and brogues for a modern and comfortable gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Loafers",
            "description": "A casual blazer over slim-fit trousers and loafers for a relaxed yet elegant appearance at an art gallery."
          }
        ],
        "Lean Muscular Short": [
          {
            "top": "Muscle-fit blazer",
            "bottom": "High-waisted shorts",
            "shoes": "Fashion sneakers",
            "description": "A muscle-fit blazer with high-waisted shorts and fashion sneakers for a sporty and stylish gallery look."
          },
          {
            "top": "Fitted sports shirt",
            "bottom": "Dress shorts",
            "shoes": "Casual loafers",
            "description": "A fitted sports shirt with dress shorts and casual loafers for a trendy and relaxed gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "High-waisted shorts",
            "shoes": "Loafers",
            "description": "A casual blazer over high-waisted shorts and loafers for a comfortable yet fashionable gallery appearance."
          }
        ],
        "Lean Muscular Tall": [
          {
            "top": "Muscle-fit blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Oxford shoes",
            "description": "A muscle-fit blazer with slim-fit trousers and Oxford shoes for a polished and athletic gallery look."
          },
          {
            "top": "Fitted sports shirt",
            "bottom": "Slim-fit chinos",
            "shoes": "Brogues",
            "description": "A fitted sports shirt with slim-fit chinos and brogues for a stylish and modern gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Loafers",
            "description": "A casual blazer over slim-fit chinos and loafers for a chic yet relaxed appearance at an art gallery opening."
          }
        ],
        "Lean Muscular Average": [
          {
            "top": "Muscle-fit blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Oxford shoes",
            "description": "A muscle-fit blazer with slim-fit trousers and Oxford shoes for a stylish and athletic gallery look."
          },
          {
            "top": "Fitted sports shirt",
            "bottom": "Slim-fit trousers",
            "shoes": "Brogues",
            "description": "A fitted sports shirt with slim-fit trousers and brogues for a modern and sophisticated gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Loafers",
            "description": "A casual blazer over slim-fit trousers and loafers for a relaxed yet stylish art gallery appearance."
          }
        ],
        "Average Short": [
          {
            "top": "Classic blazer",
            "bottom": "High-waisted shorts",
            "shoes": "Loafers",
            "description": "A classic blazer with high-waisted shorts and loafers for a chic and elegant look at an art gallery opening."
          },
          {
            "top": "Stylish shirt",
            "bottom": "Dress shorts",
            "shoes": "Fashion sneakers",
            "description": "A stylish shirt with dress shorts and fashion sneakers for a modern and trendy gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "High-waisted shorts",
            "shoes": "Casual loafers",
            "description": "A casual blazer over high-waisted shorts and casual loafers for a relaxed yet fashionable gallery appearance."
          }
        ],
        "Average Tall": [
          {
            "top": "Classic blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Oxford shoes",
            "description": "A classic blazer with slim-fit chinos and Oxford shoes for a sophisticated and stylish art gallery look."
          },
          {
            "top": "Stylish shirt",
            "bottom": "Slim-fit chinos",
            "shoes": "Brogues",
            "description": "A stylish shirt with slim-fit chinos and brogues for a modern and elegant gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Loafers",
            "description": "A casual blazer over slim-fit chinos and loafers for a chic yet relaxed art gallery appearance."
          }
        ],
        "Average Average": [
          {
            "top": "Classic blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Oxford shoes",
            "description": "A classic blazer with slim-fit trousers and Oxford shoes for a stylish and elegant gallery look."
          },
          {
            "top": "Stylish shirt",
            "bottom": "Slim-fit trousers",
            "shoes": "Brogues",
            "description": "A stylish shirt with slim-fit trousers and brogues for a modern and refined art gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Loafers",
            "description": "A casual blazer over slim-fit trousers and loafers for a relaxed yet fashionable appearance at an art gallery."
          }
        ],
        "Chubby Short": [
          {
            "top": "Loose-fit blazer",
            "bottom": "High-waisted shorts",
            "shoes": "Casual sneakers",
            "description": "A loose-fit blazer with high-waisted shorts and casual sneakers for a relaxed and stylish gallery look."
          },
          {
            "top": "Relaxed T-shirt",
            "bottom": "Dress shorts",
            "shoes": "Casual loafers",
            "description": "A relaxed T-shirt with dress shorts and casual loafers for a laid-back yet trendy gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "High-waisted shorts",
            "shoes": "Loafers",
            "description": "A casual blazer over high-waisted shorts and loafers for a comfortable and fashionable art gallery appearance."
          }
        ],
        "Chubby Tall": [
          {
            "top": "Loose-fit blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Casual sneakers",
            "description": "A loose-fit blazer with slim-fit chinos and casual sneakers for a relaxed and stylish gallery look."
          },
          {
            "top": "Relaxed T-shirt",
            "bottom": "Slim-fit chinos",
            "shoes": "Casual loafers",
            "description": "A relaxed T-shirt with slim-fit chinos and casual loafers for a comfortable and modern gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Loafers",
            "description": "A casual blazer over slim-fit chinos and loafers for a chic yet relaxed art gallery appearance."
          }
        ],
        "Chubby Average": [
          {
            "top": "Loose-fit blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Casual sneakers",
            "description": "A loose-fit blazer with slim-fit trousers and casual sneakers for a relaxed and stylish gallery look."
          },
          {
            "top": "Relaxed T-shirt",
            "bottom": "Slim-fit trousers",
            "shoes": "Casual loafers",
            "description": "A relaxed T-shirt with slim-fit trousers and casual loafers for a comfortable and modern gallery outfit."
          },
          {
            "top": "Casual blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Loafers",
            "description": "A casual blazer over slim-fit trousers and loafers for a laid-back yet refined art gallery appearance."
          }
        ],
        "Overweight Short": [
          {
            "top": "Loose-fit blazer",
            "bottom": "High-waisted shorts",
            "shoes": "Casual sneakers",
            "description": "A loose-fit blazer with high-waisted shorts and casual sneakers for a comfortable and relaxed gallery look."
          },
          {
            "top": "Relaxed hoodie",
            "bottom": "Dress shorts",
            "shoes": "Casual loafers",
            "description": "A relaxed hoodie with dress shorts and casual loafers for a laid-back yet stylish gallery outfit."
          },
          {
            "top": "Breathable T-shirt",
            "bottom": "High-waisted shorts",
            "shoes": "Casual slip-ons",
            "description": "A breathable T-shirt with high-waisted shorts and slip-ons for a relaxed and easygoing gallery appearance."
          }
        ],
        "Overweight Tall": [
          {
            "top": "Loose-fit blazer",
            "bottom": "Slim-fit chinos",
            "shoes": "Casual sneakers",
            "description": "A loose-fit blazer with slim-fit chinos and casual sneakers for a comfortable and stylish gallery look."
          },
          {
            "top": "Relaxed hoodie",
            "bottom": "Slim-fit chinos",
            "shoes": "Casual loafers",
            "description": "A relaxed hoodie with slim-fit chinos and casual loafers for a laid-back yet fashionable gallery outfit."
          },
          {
            "top": "Breathable T-shirt",
            "bottom": "Slim-fit chinos",
            "shoes": "Casual slip-ons",
            "description": "A breathable T-shirt with slim-fit chinos and slip-ons for a comfortable and relaxed art gallery appearance."
          }
        ],
        "Overweight Average": [
          {
            "top": "Loose-fit blazer",
            "bottom": "Slim-fit trousers",
            "shoes": "Casual sneakers",
            "description": "A loose-fit blazer with slim-fit trousers and casual sneakers for a relaxed and stylish gallery look."
          },
          {
            "top": "Relaxed hoodie",
            "bottom": "Slim-fit trousers",
            "shoes": "Casual loafers",
            "description": "A relaxed hoodie with slim-fit trousers and casual loafers for a laid-back yet smart gallery outfit."
          },
          {
            "top": "Breathable T-shirt",
            "bottom": "Slim-fit trousers",
            "shoes": "Casual slip-ons",
            "description": "A breathable T-shirt with slim-fit trousers and slip-ons for a comfortable and stylish art gallery appearance."
          }
        ]
    },
    "Club Nights": {
    "Skinny Short": [
      {
        "top": "Slim-fit T-shirt",
        "bottom": "Skinny jeans",
        "shoes": "Chelsea boots",
        "description": "A slim-fit T-shirt with skinny jeans and Chelsea boots for a trendy and stylish club look."
      },
      {
        "top": "Casual shirt",
        "bottom": "Tailored shorts",
        "shoes": "Sneakers",
        "description": "A casual shirt with tailored shorts and sneakers for a comfortable yet fashionable club outfit."
      },
      {
        "top": "Leather jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A leather jacket over slim-fit jeans and combat boots for a bold and edgy club appearance."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Fitted T-shirt",
        "bottom": "Slim-fit jeans",
        "shoes": "Chelsea boots",
        "description": "A fitted T-shirt with slim-fit jeans and Chelsea boots for a sleek and stylish club look."
      },
      {
        "top": "Casual shirt",
        "bottom": "Tailored trousers",
        "shoes": "Loafers",
        "description": "A casual shirt with tailored trousers and loafers for a comfortable yet trendy club outfit."
      },
      {
        "top": "Leather jacket",
        "bottom": "Skinny jeans",
        "shoes": "Combat boots",
        "description": "A leather jacket over skinny jeans and combat boots for a bold and edgy club appearance."
      }
    ],
    "Skinny Average": [
      {
        "top": "Slim-fit T-shirt",
        "bottom": "Skinny jeans",
        "shoes": "Chelsea boots",
        "description": "A slim-fit T-shirt with skinny jeans and Chelsea boots for a trendy and stylish club look."
      },
      {
        "top": "Casual shirt",
        "bottom": "Tailored trousers",
        "shoes": "Sneakers",
        "description": "A casual shirt with tailored trousers and sneakers for a comfortable yet fashionable club outfit."
      },
      {
        "top": "Leather jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A leather jacket over slim-fit jeans and combat boots for a bold and edgy club appearance."
      }
    ],
    "Lean Short": [
      {
        "top": "Muscle-fit T-shirt",
        "bottom": "Slim-fit jeans",
        "shoes": "Chelsea boots",
        "description": "A muscle-fit T-shirt with slim-fit jeans and Chelsea boots for a trendy and athletic club look."
      },
      {
        "top": "Fitted shirt",
        "bottom": "Tailored shorts",
        "shoes": "Sneakers",
        "description": "A fitted shirt with tailored shorts and sneakers for a modern and stylish club outfit."
      },
      {
        "top": "Leather jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A leather jacket over slim-fit jeans and combat boots for a bold and edgy club appearance."
      }
    ],
    "Lean Tall": [
      {
        "top": "Muscle-fit T-shirt",
        "bottom": "Skinny jeans",
        "shoes": "Chelsea boots",
        "description": "A muscle-fit T-shirt with skinny jeans and Chelsea boots for a sleek and athletic club look."
      },
      {
        "top": "Fitted shirt",
        "bottom": "Tailored trousers",
        "shoes": "Loafers",
        "description": "A fitted shirt with tailored trousers and loafers for a modern and stylish club outfit."
      },
      {
        "top": "Leather jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A leather jacket over slim-fit jeans and combat boots for a bold and edgy club appearance."
      }
    ],
    "Lean Average": [
      {
        "top": "Muscle-fit T-shirt",
        "bottom": "Slim-fit jeans",
        "shoes": "Chelsea boots",
        "description": "A muscle-fit T-shirt with slim-fit jeans and Chelsea boots for a trendy and athletic club look."
      },
      {
        "top": "Fitted shirt",
        "bottom": "Tailored trousers",
        "shoes": "Sneakers",
        "description": "A fitted shirt with tailored trousers and sneakers for a modern and stylish club outfit."
      },
      {
        "top": "Leather jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A leather jacket over slim-fit jeans and combat boots for a bold and edgy club appearance."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Muscle-fit T-shirt",
        "bottom": "Skinny jeans",
        "shoes": "Chelsea boots",
        "description": "A muscle-fit T-shirt with skinny jeans and Chelsea boots for a stylish and athletic club look."
      },
      {
        "top": "Fitted tank top",
        "bottom": "Tailored shorts",
        "shoes": "Sneakers",
        "description": "A fitted tank top with tailored shorts and sneakers for a modern and trendy club outfit."
      },
      {
        "top": "Leather jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A leather jacket over slim-fit jeans and combat boots for a bold and edgy club appearance."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Muscle-fit T-shirt",
        "bottom": "Skinny jeans",
        "shoes": "Chelsea boots",
        "description": "A muscle-fit T-shirt with skinny jeans and Chelsea boots for a sleek and athletic club look."
      },
      {
        "top": "Fitted tank top",
        "bottom": "Tailored trousers",
        "shoes": "Loafers",
        "description": "A fitted tank top with tailored trousers and loafers for a modern and stylish club outfit."
      },
      {
        "top": "Leather jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A leather jacket over slim-fit jeans and combat boots for a bold and edgy club appearance."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Muscle-fit T-shirt",
        "bottom": "Skinny jeans",
        "shoes": "Chelsea boots",
        "description": "A muscle-fit T-shirt with skinny jeans and Chelsea boots for a stylish and athletic club look."
      },
      {
        "top": "Fitted tank top",
        "bottom": "Tailored trousers",
        "shoes": "Sneakers",
        "description": "A fitted tank top with tailored trousers and sneakers for a modern and trendy club outfit."
      },
      {
        "top": "Leather jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A leather jacket over slim-fit jeans and combat boots for a bold and edgy club appearance."
      }
    ],
    "Average Short": [
      {
        "top": "Casual T-shirt",
        "bottom": "Skinny jeans",
        "shoes": "Chelsea boots",
        "description": "A casual T-shirt with skinny jeans and Chelsea boots for a stylish and comfortable club look."
      },
      {
        "top": "Button-down shirt",
        "bottom": "Tailored shorts",
        "shoes": "Sneakers",
        "description": "A button-down shirt with tailored shorts and sneakers for a trendy and modern club outfit."
      },
      {
        "top": "Denim jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A denim jacket over slim-fit jeans and combat boots for a bold and edgy club appearance."
      }
    ],
    "Average Tall": [
      {
        "top": "Casual T-shirt",
        "bottom": "Slim-fit jeans",
        "shoes": "Chelsea boots",
        "description": "A casual T-shirt with slim-fit jeans and Chelsea boots for a stylish and comfortable club look."
      },
      {
        "top": "Button-down shirt",
        "bottom": "Tailored trousers",
        "shoes": "Loafers",
        "description": "A button-down shirt with tailored trousers and loafers for a trendy and modern club outfit."
      },
      {
        "top": "Denim jacket",
        "bottom": "Skinny jeans",
        "shoes": "Combat boots",
        "description": "A denim jacket over skinny jeans and combat boots for a bold and edgy club appearance."
      }
    ],
    "Average Average": [
      {
        "top": "Casual T-shirt",
        "bottom": "Skinny jeans",
        "shoes": "Chelsea boots",
        "description": "A casual T-shirt with skinny jeans and Chelsea boots for a stylish and comfortable club look."
      },
      {
        "top": "Button-down shirt",
        "bottom": "Tailored trousers",
        "shoes": "Sneakers",
        "description": "A button-down shirt with tailored trousers and sneakers for a trendy and modern club outfit."
      },
      {
        "top": "Denim jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A denim jacket over slim-fit jeans and combat boots for a bold and edgy club appearance."
      }
    ],
    "Chubby Short": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Tailored shorts",
        "shoes": "Casual sneakers",
        "description": "A loose-fit T-shirt with tailored shorts and casual sneakers for a comfortable and relaxed club look."
      },
      {
        "top": "Relaxed shirt",
        "bottom": "Slim-fit jeans",
        "shoes": "Loafers",
        "description": "A relaxed shirt with slim-fit jeans and loafers for a trendy and stylish club outfit."
      },
      {
        "top": "Denim jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A denim jacket over slim-fit jeans and combat boots for a bold and fashionable club appearance."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Slim-fit jeans",
        "shoes": "Casual sneakers",
        "description": "A loose-fit T-shirt with slim-fit jeans and casual sneakers for a comfortable and relaxed club look."
      },
      {
        "top": "Relaxed shirt",
        "bottom": "Tailored trousers",
        "shoes": "Loafers",
        "description": "A relaxed shirt with tailored trousers and loafers for a trendy and stylish club outfit."
      },
      {
        "top": "Denim jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A denim jacket over slim-fit jeans and combat boots for a bold and fashionable club appearance."
      }
    ],
    "Chubby Average": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Tailored shorts",
        "shoes": "Casual sneakers",
        "description": "A loose-fit T-shirt with tailored shorts and casual sneakers for a comfortable and relaxed club look."
      },
      {
        "top": "Relaxed shirt",
        "bottom": "Slim-fit jeans",
        "shoes": "Loafers",
        "description": "A relaxed shirt with slim-fit jeans and loafers for a trendy and stylish club outfit."
      },
      {
        "top": "Denim jacket",
        "bottom": "Slim-fit jeans",
        "shoes": "Combat boots",
        "description": "A denim jacket over slim-fit jeans and combat boots for a bold and fashionable club appearance."
      }
    ],
    "Overweight Short": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Tailored shorts",
        "shoes": "Casual sneakers",
        "description": "A loose-fit T-shirt with tailored shorts and casual sneakers for a comfortable and relaxed club look."
      },
      {
        "top": "Relaxed hoodie",
        "bottom": "Slim-fit jeans",
        "shoes": "Casual loafers",
        "description": "A relaxed hoodie with slim-fit jeans and casual loafers for a laid-back yet trendy club outfit."
      },
      {
        "top": "Breathable tank top",
        "bottom": "Tailored shorts",
        "shoes": "Slip-ons",
        "description": "A breathable tank top with tailored shorts and slip-ons for a relaxed and stylish club appearance."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Slim-fit jeans",
        "shoes": "Casual sneakers",
        "description": "A loose-fit T-shirt with slim-fit jeans and casual sneakers for a comfortable and relaxed club look."
      },
      {
        "top": "Relaxed hoodie",
        "bottom": "Tailored trousers",
        "shoes": "Loafers",
        "description": "A relaxed hoodie with tailored trousers and loafers for a laid-back yet trendy club outfit."
      },
      {
        "top": "Breathable tank top",
        "bottom": "Slim-fit jeans",
        "shoes": "Slip-ons",
        "description": "A breathable tank top with slim-fit jeans and slip-ons for a relaxed and stylish club appearance."
      }
    ],
    "Overweight Average": [
      {
        "top": "Loose-fit T-shirt",
        "bottom": "Tailored shorts",
        "shoes": "Casual sneakers",
        "description": "A loose-fit T-shirt with tailored shorts and casual sneakers for a comfortable and relaxed club look."
      },
      {
        "top": "Relaxed hoodie",
        "bottom": "Slim-fit jeans",
        "shoes": "Casual loafers",
        "description": "A relaxed hoodie with slim-fit jeans and casual loafers for a laid-back yet trendy club outfit."
      },
      {
        "top": "Breathable tank top",
        "bottom": "Slim-fit jeans",
        "shoes": "Slip-ons",
        "description": "A breathable tank top with slim-fit jeans and slip-ons for a relaxed and stylish club appearance."
      }
    ]
    },
    "Concerts Or Music Festivals": {
    "Skinny Short": [
      {
        "top": "Graphic tee",
        "bottom": "Ripped denim shorts",
        "shoes": "Sneakers",
        "description": "A graphic tee with ripped denim shorts and sneakers, perfect for a lively concert or music festival."
      },
      {
        "top": "Band t-shirt",
        "bottom": "Cargo shorts",
        "shoes": "Boots",
        "description": "A band t-shirt with cargo shorts and boots for a comfortable yet edgy festival look."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A casual hoodie with denim shorts and high-top sneakers for a relaxed concert outfit."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Fitted graphic tee",
        "bottom": "Slim-fit jeans",
        "shoes": "Sneakers",
        "description": "A fitted graphic tee with slim-fit jeans and sneakers for a stylish festival appearance."
      },
      {
        "top": "Band t-shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A band t-shirt with chino shorts and loafers for a chic concert look."
      },
      {
        "top": "Lightweight bomber jacket",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A lightweight bomber jacket over denim shorts and high-top sneakers for a cool festival outfit."
      }
    ],
    "Skinny Average": [
      {
        "top": "Graphic tee",
        "bottom": "Denim shorts",
        "shoes": "Sneakers",
        "description": "A graphic tee with denim shorts and sneakers for a casual and comfortable festival look."
      },
      {
        "top": "Band t-shirt",
        "bottom": "Cargo shorts",
        "shoes": "Boots",
        "description": "A band t-shirt with cargo shorts and boots for a practical and stylish concert outfit."
      },
      {
        "top": "Casual jacket",
        "bottom": "Ripped jeans",
        "shoes": "High-top sneakers",
        "description": "A casual jacket with ripped jeans and high-top sneakers for a relaxed yet fashionable appearance."
      }
    ],
    "Lean Short": [
      {
        "top": "Tank top",
        "bottom": "Ripped denim shorts",
        "shoes": "Sneakers",
        "description": "A tank top with ripped denim shorts and sneakers for a trendy festival look."
      },
      {
        "top": "Graphic tee",
        "bottom": "Cargo shorts",
        "shoes": "Boots",
        "description": "A graphic tee with cargo shorts and boots for a rugged concert outfit."
      },
      {
        "top": "Casual vest",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A casual vest over denim shorts and high-top sneakers for a cool, laid-back festival appearance."
      }
    ],
    "Lean Tall": [
      {
        "top": "Fitted tank top",
        "bottom": "Slim-fit jeans",
        "shoes": "Sneakers",
        "description": "A fitted tank top with slim-fit jeans and sneakers for a sleek and stylish festival look."
      },
      {
        "top": "Graphic tee",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A graphic tee with chino shorts and loafers for a relaxed yet polished concert appearance."
      },
      {
        "top": "Lightweight bomber jacket",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A lightweight bomber jacket over denim shorts and high-top sneakers for a fashionable festival outfit."
      }
    ],
    "Lean Average": [
      {
        "top": "Fitted graphic tee",
        "bottom": "Denim shorts",
        "shoes": "Sneakers",
        "description": "A fitted graphic tee with denim shorts and sneakers for a trendy concert look."
      },
      {
        "top": "Tank top",
        "bottom": "Cargo shorts",
        "shoes": "Boots",
        "description": "A tank top with cargo shorts and boots for a practical festival outfit."
      },
      {
        "top": "Casual jacket",
        "bottom": "Ripped jeans",
        "shoes": "High-top sneakers",
        "description": "A casual jacket with ripped jeans and high-top sneakers for a stylish concert appearance."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Sleeveless graphic tee",
        "bottom": "Ripped denim shorts",
        "shoes": "Sneakers",
        "description": "A sleeveless graphic tee with ripped denim shorts and sneakers for an athletic yet trendy festival look."
      },
      {
        "top": "Muscle-fit t-shirt",
        "bottom": "Cargo shorts",
        "shoes": "Boots",
        "description": "A muscle-fit t-shirt with cargo shorts and boots for a rugged festival outfit."
      },
      {
        "top": "Casual vest",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A casual vest with denim shorts and high-top sneakers for a cool and comfortable concert appearance."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Fitted tank top",
        "bottom": "Slim-fit jeans",
        "shoes": "Sneakers",
        "description": "A fitted tank top with slim-fit jeans and sneakers for a sleek, muscular look at the festival."
      },
      {
        "top": "Graphic tee",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A graphic tee with chino shorts and loafers for a stylish and comfortable concert outfit."
      },
      {
        "top": "Lightweight bomber jacket",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A lightweight bomber jacket over denim shorts and high-top sneakers for a fashionable festival appearance."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Fitted graphic tee",
        "bottom": "Board shorts",
        "shoes": "Sneakers",
        "description": "A fitted graphic tee with board shorts and sneakers for an athletic festival look."
      },
      {
        "top": "Tank top",
        "bottom": "Cargo shorts",
        "shoes": "Boots",
        "description": "A tank top with cargo shorts and boots for a rugged concert outfit."
      },
      {
        "top": "Casual jacket",
        "bottom": "Ripped jeans",
        "shoes": "High-top sneakers",
        "description": "A casual jacket with ripped jeans and high-top sneakers for a stylish yet relaxed appearance."
      }
    ],
    "Average Short": [
      {
        "top": "Graphic tee",
        "bottom": "Ripped denim shorts",
        "shoes": "Sneakers",
        "description": "A graphic tee with ripped denim shorts and sneakers for a classic concert look."
      },
      {
        "top": "Casual t-shirt",
        "bottom": "Cargo shorts",
        "shoes": "Boots",
        "description": "A casual t-shirt with cargo shorts and boots for a comfortable festival outfit."
      },
      {
        "top": "Hoodie",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A hoodie with denim shorts and high-top sneakers for a relaxed concert appearance."
      }
    ],
    "Average Tall": [
      {
        "top": "Graphic tee",
        "bottom": "Slim-fit jeans",
        "shoes": "Sneakers",
        "description": "A graphic tee with slim-fit jeans and sneakers for a stylish festival look."
      },
      {
        "top": "Casual shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A casual shirt with chino shorts and loafers for a chic concert appearance."
      },
      {
        "top": "Lightweight bomber jacket",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A lightweight bomber jacket over denim shorts and high-top sneakers for a cool festival style."
      }
    ],
    "Average Average": [
      {
        "top": "Graphic tee",
        "bottom": "Board shorts",
        "shoes": "Sneakers",
        "description": "A graphic tee with board shorts and sneakers for a trendy festival outfit."
      },
      {
        "top": "Casual t-shirt",
        "bottom": "Cargo shorts",
        "shoes": "Boots",
        "description": "A casual t-shirt with cargo shorts and boots for a relaxed concert look."
      },
      {
        "top": "Hoodie",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A hoodie with denim shorts and high-top sneakers for a comfortable festival appearance."
      }
    ],
    "Chubby Short": [
      {
        "top": "Relaxed-fit graphic tee",
        "bottom": "Ripped denim shorts",
        "shoes": "Sneakers",
        "description": "A relaxed-fit graphic tee with ripped denim shorts and sneakers for a comfortable concert look."
      },
      {
        "top": "Casual t-shirt",
        "bottom": "Cargo shorts",
        "shoes": "Boots",
        "description": "A casual t-shirt with cargo shorts and boots for a laid-back festival outfit."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A casual hoodie with denim shorts and high-top sneakers for a relaxed concert style."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Loose-fit graphic tee",
        "bottom": "Slim-fit jeans",
        "shoes": "Sneakers",
        "description": "A loose-fit graphic tee with slim-fit jeans and sneakers for a comfortable festival look."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A casual button-down shirt with chino shorts and loafers for a chic concert appearance."
      },
      {
        "top": "Lightweight jacket",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A lightweight jacket with denim shorts and high-top sneakers for a stylish festival outfit."
      }
    ],
    "Chubby Average": [
      {
        "top": "Relaxed-fit graphic tee",
        "bottom": "Board shorts",
        "shoes": "Sneakers",
        "description": "A relaxed-fit graphic tee with board shorts and sneakers for a comfortable festival appearance."
      },
      {
        "top": "Casual t-shirt",
        "bottom": "Cargo shorts",
        "shoes": "Boots",
        "description": "A casual t-shirt with cargo shorts and boots for a relaxed concert look."
      },
      {
        "top": "Casual hoodie",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A casual hoodie with denim shorts and high-top sneakers for a laid-back festival outfit."
      }
    ],
    "Overweight Short": [
      {
        "top": "Loose-fit graphic tee",
        "bottom": "Ripped denim shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit graphic tee with ripped denim shorts and sneakers for a relaxed concert look."
      },
      {
        "top": "Casual t-shirt",
        "bottom": "Cargo shorts",
        "shoes": "Boots",
        "description": "A casual t-shirt with cargo shorts and boots for a laid-back festival outfit."
      },
      {
        "top": "Comfortable hoodie",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A comfortable hoodie with denim shorts and high-top sneakers for a relaxed festival style."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Loose-fit graphic tee",
        "bottom": "Slim-fit jeans",
        "shoes": "Sneakers",
        "description": "A loose-fit graphic tee with slim-fit jeans and sneakers for a comfortable festival appearance."
      },
      {
        "top": "Casual button-down shirt",
        "bottom": "Chino shorts",
        "shoes": "Loafers",
        "description": "A casual button-down shirt with chino shorts and loafers for a polished concert look."
      },
      {
        "top": "Lightweight jacket",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A lightweight jacket with denim shorts and high-top sneakers for a stylish festival outfit."
      }
    ],
    "Overweight Average": [
      {
        "top": "Loose-fit graphic tee",
        "bottom": "Board shorts",
        "shoes": "Sneakers",
        "description": "A loose-fit graphic tee with board shorts and sneakers for a comfortable festival look."
      },
      {
        "top": "Casual t-shirt",
        "bottom": "Cargo shorts",
        "shoes": "Boots",
        "description": "A casual t-shirt with cargo shorts and boots for a laid-back concert outfit."
      },
      {
        "top": "Comfortable hoodie",
        "bottom": "Denim shorts",
        "shoes": "High-top sneakers",
        "description": "A comfortable hoodie with denim shorts and high-top sneakers for a relaxed festival style."
      }
    ]
    },
    "Funerals Or Memorial Services": {
      "Skinny Short": [
        {
          "top": "Slim-fit dress shirt",
          "bottom": "Dark dress shorts",
          "shoes": "Black loafers",
          "description": "A slim-fit dress shirt with dark dress shorts and black loafers for a respectful yet stylish funeral appearance."
        },
        {
          "top": "Short-sleeve button-up shirt",
          "bottom": "Dark dress shorts",
          "shoes": "Black leather loafers",
          "description": "A short-sleeve button-up shirt with dark dress shorts and black leather loafers for a smart and appropriate funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark dress shorts",
          "shoes": "Black loafers",
          "description": "A casual blazer over dark dress shorts and black loafers for a refined yet respectful funeral look."
        }
      ],
      "Skinny Tall": [
        {
          "top": "Slim-fit dress shirt",
          "bottom": "Dark chinos",
          "shoes": "Black loafers",
          "description": "A slim-fit dress shirt with dark chinos and black loafers for a dignified and elegant funeral outfit."
        },
        {
          "top": "Short-sleeve button-up shirt",
          "bottom": "Dark chinos",
          "shoes": "Black leather loafers",
          "description": "A short-sleeve button-up shirt with dark chinos and black leather loafers for a respectful and stylish funeral look."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark chinos",
          "shoes": "Black loafers",
          "description": "A casual blazer paired with dark chinos and black loafers for a sophisticated yet respectful funeral appearance."
        }
      ],
      "Skinny Average": [
        {
          "top": "Slim-fit dress shirt",
          "bottom": "Dark dress trousers",
          "shoes": "Black loafers",
          "description": "A slim-fit dress shirt with dark dress trousers and black loafers for a classic and appropriate funeral look."
        },
        {
          "top": "Short-sleeve button-up shirt",
          "bottom": "Dark dress trousers",
          "shoes": "Black leather loafers",
          "description": "A short-sleeve button-up shirt with dark dress trousers and black leather loafers for a respectful and smart funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark dress trousers",
          "shoes": "Black loafers",
          "description": "A casual blazer over dark dress trousers and black loafers for a refined and respectful funeral appearance."
        }
      ],
      "Lean Short": [
        {
          "top": "Muscle-fit dress shirt",
          "bottom": "Dark dress shorts",
          "shoes": "Black loafers",
          "description": "A muscle-fit dress shirt with dark dress shorts and black loafers for a respectful and athletic funeral look."
        },
        {
          "top": "Fitted button-up shirt",
          "bottom": "Dark dress shorts",
          "shoes": "Black leather loafers",
          "description": "A fitted button-up shirt with dark dress shorts and black leather loafers for a dignified and stylish funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark dress shorts",
          "shoes": "Black loafers",
          "description": "A casual blazer paired with dark dress shorts and black loafers for a refined yet appropriate funeral look."
        }
      ],
      "Lean Tall": [
        {
          "top": "Muscle-fit dress shirt",
          "bottom": "Dark chinos",
          "shoes": "Black loafers",
          "description": "A muscle-fit dress shirt with dark chinos and black loafers for an athletic and dignified funeral appearance."
        },
        {
          "top": "Fitted button-up shirt",
          "bottom": "Dark chinos",
          "shoes": "Black leather loafers",
          "description": "A fitted button-up shirt with dark chinos and black leather loafers for a stylish and respectful funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark chinos",
          "shoes": "Black loafers",
          "description": "A casual blazer over dark chinos and black loafers for a refined and appropriate funeral look."
        }
      ],
      "Lean Average": [
        {
          "top": "Muscle-fit dress shirt",
          "bottom": "Dark dress trousers",
          "shoes": "Black loafers",
          "description": "A muscle-fit dress shirt with dark dress trousers and black loafers for an athletic and respectful funeral appearance."
        },
        {
          "top": "Fitted button-up shirt",
          "bottom": "Dark dress trousers",
          "shoes": "Black leather loafers",
          "description": "A fitted button-up shirt with dark dress trousers and black leather loafers for a stylish and dignified funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark dress trousers",
          "shoes": "Black loafers",
          "description": "A casual blazer over dark dress trousers and black loafers for a refined and respectful funeral look."
        }
      ],
      "Lean Muscular Short": [
        {
          "top": "Muscle-fit T-shirt",
          "bottom": "Dark dress shorts",
          "shoes": "Black sneakers",
          "description": "A muscle-fit T-shirt with dark dress shorts and black sneakers for a casual yet respectful funeral appearance."
        },
        {
          "top": "Fitted sports shirt",
          "bottom": "Dark dress shorts",
          "shoes": "Black loafers",
          "description": "A fitted sports shirt with dark dress shorts and black loafers for a sporty yet dignified funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark dress shorts",
          "shoes": "Black loafers",
          "description": "A casual blazer over dark dress shorts and black loafers for a refined and respectful funeral look."
        }
      ],
      "Lean Muscular Tall": [
        {
          "top": "Muscle-fit dress shirt",
          "bottom": "Dark chinos",
          "shoes": "Black loafers",
          "description": "A muscle-fit dress shirt with dark chinos and black loafers for an athletic and sophisticated funeral appearance."
        },
        {
          "top": "Fitted button-up shirt",
          "bottom": "Dark chinos",
          "shoes": "Black leather loafers",
          "description": "A fitted button-up shirt with dark chinos and black leather loafers for a stylish and respectful funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark chinos",
          "shoes": "Black loafers",
          "description": "A casual blazer paired with dark chinos and black loafers for a refined and dignified funeral look."
        }
      ],
      "Lean Muscular Average": [
        {
          "top": "Muscle-fit dress shirt",
          "bottom": "Dark dress trousers",
          "shoes": "Black loafers",
          "description": "A muscle-fit dress shirt with dark dress trousers and black loafers for an athletic and classic funeral appearance."
        },
        {
          "top": "Fitted button-up shirt",
          "bottom": "Dark dress trousers",
          "shoes": "Black leather loafers",
          "description": "A fitted button-up shirt with dark dress trousers and black leather loafers for a stylish and respectful funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark dress trousers",
          "shoes": "Black loafers",
          "description": "A casual blazer over dark dress trousers and black loafers for a refined and dignified funeral look."
        }
      ],
      "Average Short": [
        {
          "top": "Classic dress shirt",
          "bottom": "Dark dress shorts",
          "shoes": "Black loafers",
          "description": "A classic dress shirt with dark dress shorts and black loafers for a traditional and respectful funeral appearance."
        },
        {
          "top": "Breathable polo shirt",
          "bottom": "Dark dress shorts",
          "shoes": "Black loafers",
          "description": "A breathable polo shirt with dark dress shorts and black loafers for a comfortable yet respectful funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark dress shorts",
          "shoes": "Black loafers",
          "description": "A casual blazer paired with dark dress shorts and black loafers for a classic and respectful funeral look."
        }
      ],
      "Average Tall": [
        {
          "top": "Classic dress shirt",
          "bottom": "Dark chinos",
          "shoes": "Black loafers",
          "description": "A classic dress shirt with dark chinos and black loafers for a sophisticated and respectful funeral outfit."
        },
        {
          "top": "Breathable polo shirt",
          "bottom": "Dark chinos",
          "shoes": "Black loafers",
          "description": "A breathable polo shirt with dark chinos and black loafers for a comfortable yet elegant funeral appearance."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark chinos",
          "shoes": "Black loafers",
          "description": "A casual blazer over dark chinos and black loafers for a refined and respectful funeral look."
        }
      ],
      "Average Average": [
        {
          "top": "Classic dress shirt",
          "bottom": "Dark dress trousers",
          "shoes": "Black loafers",
          "description": "A classic dress shirt with dark dress trousers and black loafers for a traditional and respectful funeral appearance."
        },
        {
          "top": "Breathable polo shirt",
          "bottom": "Dark dress trousers",
          "shoes": "Black loafers",
          "description": "A breathable polo shirt with dark dress trousers and black loafers for a comfortable yet respectful funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark dress trousers",
          "shoes": "Black loafers",
          "description": "A casual blazer over dark dress trousers and black loafers for a sophisticated and respectful funeral look."
        }
      ],
      "Chubby Short": [
        {
          "top": "Loose-fit dress shirt",
          "bottom": "Dark dress shorts",
          "shoes": "Black sneakers",
          "description": "A loose-fit dress shirt with dark dress shorts and black sneakers for a relaxed yet respectful funeral appearance."
        },
        {
          "top": "Breathable polo shirt",
          "bottom": "Dark dress shorts",
          "shoes": "Black loafers",
          "description": "A breathable polo shirt with dark dress shorts and black loafers for a comfortable and respectful funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark dress shorts",
          "shoes": "Black loafers",
          "description": "A casual blazer paired with dark dress shorts and black loafers for a refined yet respectful funeral look."
        }
      ],
      "Chubby Tall": [
        {
          "top": "Loose-fit dress shirt",
          "bottom": "Dark chinos",
          "shoes": "Black sneakers",
          "description": "A loose-fit dress shirt with dark chinos and black sneakers for a comfortable and respectful funeral appearance."
        },
        {
          "top": "Breathable polo shirt",
          "bottom": "Dark chinos",
          "shoes": "Black loafers",
          "description": "A breathable polo shirt with dark chinos and black loafers for a smart and respectful funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark chinos",
          "shoes": "Black loafers",
          "description": "A casual blazer over dark chinos and black loafers for a sophisticated and respectful funeral look."
        }
      ],
      "Chubby Average": [
        {
          "top": "Loose-fit dress shirt",
          "bottom": "Dark dress trousers",
          "shoes": "Black sneakers",
          "description": "A loose-fit dress shirt with dark dress trousers and black sneakers for a comfortable yet respectful funeral appearance."
        },
        {
          "top": "Breathable polo shirt",
          "bottom": "Dark dress trousers",
          "shoes": "Black loafers",
          "description": "A breathable polo shirt with dark dress trousers and black loafers for a smart and respectful funeral outfit."
        },
        {
          "top": "Casual blazer",
          "bottom": "Dark dress trousers",
          "shoes": "Black loafers",
          "description": "A casual blazer over dark dress trousers and black loafers for a refined and respectful funeral look."
        }
      ],
      "Overweight Short": [
        {
          "top": "Loose-fit T-shirt",
          "bottom": "Dark dress shorts",
          "shoes": "Black sneakers",
          "description": "A loose-fit T-shirt with dark dress shorts and black sneakers for a relaxed and practical funeral appearance."
        },
        {
          "top": "Casual hoodie",
          "bottom": "Dark dress shorts",
          "shoes": "Black loafers",
          "description": "A casual hoodie with dark dress shorts and black loafers for a laid-back and respectful funeral look."
        },
        {
          "top": "Breathable polo shirt",
          "bottom": "Dark dress shorts",
          "shoes": "Black slip-ons",
          "description": "A breathable polo shirt with dark dress shorts and black slip-ons for a comfortable and respectful funeral outfit."
        }
      ],
      "Overweight Tall": [
        {
          "top": "Loose-fit T-shirt",
          "bottom": "Dark chinos",
          "shoes": "Black sneakers",
          "description": "A loose-fit T-shirt with dark chinos and black sneakers for a relaxed and practical funeral appearance."
        },
        {
          "top": "Casual hoodie",
          "bottom": "Dark chinos",
          "shoes": "Black loafers",
          "description": "A casual hoodie with dark chinos and black loafers for a comfortable and respectful funeral look."
        },
        {
          "top": "Breathable polo shirt",
          "bottom": "Dark chinos",
          "shoes": "Black slip-ons",
          "description": "A breathable polo shirt with dark chinos and black slip-ons for a smart and respectful funeral outfit."
        }
      ],
      "Overweight Average": [
        {
          "top": "Loose-fit T-shirt",
          "bottom": "Dark dress trousers",
          "shoes": "Black sneakers",
          "description": "A loose-fit T-shirt with dark dress trousers and black sneakers for a comfortable and respectful funeral appearance."
        },
        {
          "top": "Casual hoodie",
          "bottom": "Dark dress trousers",
          "shoes": "Black loafers",
          "description": "A casual hoodie with dark dress trousers and black loafers for a laid-back and respectful funeral look."
        },
        {
          "top": "Breathable polo shirt",
          "bottom": "Dark dress trousers",
          "shoes": "Black slip-ons",
          "description": "A breathable polo shirt with dark dress trousers and black slip-ons for a smart and comfortable funeral outfit."
        }
      ]
    }
  };

let femaleOutfits={
    "Birthday Parties": {
    "Skinny Short": [
      {
        "top": "Kurti with jacket",
        "bottom": "Palazzo pants",
        "shoes": "Juttis",
        "description": "A stylish kurti with a jacket, paired with palazzo pants and juttis for a festive birthday look."
      },
      {
        "top": "Anarkali dress",
        "bottom": "Leggings",
        "shoes": "Wedges",
        "description": "A beautiful Anarkali dress with leggings and wedges for a graceful birthday outfit."
      },
      {
        "top": "Chikankari kurta",
        "bottom": "Jeans",
        "shoes": "Kolhapuris",
        "description": "A Chikankari kurta with jeans and Kolhapuris for a chic and comfortable birthday celebration."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Crop top",
        "bottom": "High-waisted skirt",
        "shoes": "Block heels",
        "description": "A crop top with a high-waisted skirt and block heels for a stylish birthday look."
      },
      {
        "top": "Off-shoulder blouse",
        "bottom": "Palazzo pants",
        "shoes": "Heeled sandals",
        "description": "An off-shoulder blouse with palazzo pants and heeled sandals for a trendy birthday outfit."
      },
      {
        "top": "Sequin top",
        "bottom": "Jeans",
        "shoes": "Stilettos",
        "description": "A sequin top with jeans and stilettos for a glamorous birthday appearance."
      }
    ],
    "Skinny Average": [
      {
        "top": "Peplum top",
        "bottom": "Flared pants",
        "shoes": "Mules",
        "description": "A peplum top with flared pants and mules for a chic birthday look."
      },
      {
        "top": "Tunic dress",
        "bottom": "Leggings",
        "shoes": "Ballet flats",
        "description": "A tunic dress with leggings and ballet flats for a comfortable and stylish birthday outfit."
      },
      {
        "top": "Embroidered blouse",
        "bottom": "Jeans",
        "shoes": "Wedges",
        "description": "An embroidered blouse with jeans and wedges for a casual yet festive birthday celebration."
      }
    ],
    "Lean Short": [
      {
        "top": "Long kurti",
        "bottom": "Churidar",
        "shoes": "Kitten heels",
        "description": "A long kurti with churidar and kitten heels for a traditional birthday look."
      },
      {
        "top": "Silk top",
        "bottom": "Skirt",
        "shoes": "Mojaris",
        "description": "A silk top with a skirt and mojaris for a festive and elegant birthday outfit."
      },
      {
        "top": "Printed tunic",
        "bottom": "Leggings",
        "shoes": "Flat sandals",
        "description": "A printed tunic with leggings and flat sandals for a comfortable birthday celebration."
      }
    ],
    "Lean Tall": [
      {
        "top": "Anarkali top",
        "bottom": "Cigarette pants",
        "shoes": "Block heels",
        "description": "An Anarkali top with cigarette pants and block heels for a stylish birthday look."
      },
      {
        "top": "Crop top",
        "bottom": "Palazzo pants",
        "shoes": "Wedges",
        "description": "A crop top with palazzo pants and wedges for a trendy birthday outfit."
      },
      {
        "top": "Peplum blouse",
        "bottom": "Jeans",
        "shoes": "Stilettos",
        "description": "A peplum blouse with jeans and stilettos for a chic birthday appearance."
      }
    ],
    "Lean Average": [
      {
        "top": "Kurti",
        "bottom": "Skirt",
        "shoes": "Kolhapuris",
        "description": "A kurti with a skirt and Kolhapuris for a traditional and stylish birthday look."
      },
      {
        "top": "Tunic",
        "bottom": "Palazzo pants",
        "shoes": "Heeled sandals",
        "description": "A tunic with palazzo pants and heeled sandals for a comfortable birthday outfit."
      },
      {
        "top": "Off-shoulder blouse",
        "bottom": "Jeans",
        "shoes": "Mules",
        "description": "An off-shoulder blouse with jeans and mules for a casual birthday celebration."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Embroidered top",
        "bottom": "Dhoti pants",
        "shoes": "Juttis",
        "description": "An embroidered top with dhoti pants and juttis for a festive and comfortable birthday outfit."
      },
      {
        "top": "Choli",
        "bottom": "Lehenga skirt",
        "shoes": "Wedges",
        "description": "A choli with a lehenga skirt and wedges for a traditional birthday look."
      },
      {
        "top": "Kurta",
        "bottom": "Jeans",
        "shoes": "Kolhapuris",
        "description": "A kurta with jeans and Kolhapuris for a stylish birthday appearance."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Tunic",
        "bottom": "Cigarette pants",
        "shoes": "Block heels",
        "description": "A tunic with cigarette pants and block heels for a chic birthday look."
      },
      {
        "top": "Crop top",
        "bottom": "Palazzo pants",
        "shoes": "Heeled sandals",
        "description": "A crop top with palazzo pants and heeled sandals for a trendy birthday outfit."
      },
      {
        "top": "Embroidered blouse",
        "bottom": "Jeans",
        "shoes": "Stilettos",
        "description": "An embroidered blouse with jeans and stilettos for a stylish birthday celebration."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Anarkali dress",
        "bottom": "Leggings",
        "shoes": "Juttis",
        "description": "An Anarkali dress with leggings and juttis for a traditional birthday look."
      },
      {
        "top": "Kurti",
        "bottom": "Palazzo pants",
        "shoes": "Kolhapuris",
        "description": "A kurti with palazzo pants and Kolhapuris for a comfortable birthday outfit."
      },
      {
        "top": "Off-shoulder top",
        "bottom": "Jeans",
        "shoes": "Wedges",
        "description": "An off-shoulder top with jeans and wedges for a chic birthday appearance."
      }
    ],
    "Average Short": [
      {
        "top": "Kurta",
        "bottom": "Churidar",
        "shoes": "Kitten heels",
        "description": "A kurta with churidar and kitten heels for a traditional birthday look."
      },
      {
        "top": "Silk blouse",
        "bottom": "Skirt",
        "shoes": "Mojaris",
        "description": "A silk blouse with a skirt and mojaris for a festive birthday outfit."
      },
      {
        "top": "Tunic",
        "bottom": "Leggings",
        "shoes": "Flat sandals",
        "description": "A tunic with leggings and flat sandals for a comfortable birthday celebration."
      }
    ],
    "Average Tall": [
      {
        "top": "Peplum top",
        "bottom": "Cigarette pants",
        "shoes": "Block heels",
        "description": "A peplum top with cigarette pants and block heels for a stylish birthday look."
      },
      {
        "top": "Crop top",
        "bottom": "Palazzo pants",
        "shoes": "Wedges",
        "description": "A crop top with palazzo pants and wedges for a trendy birthday outfit."
      },
      {
        "top": "Off-shoulder blouse",
        "bottom": "Jeans",
        "shoes": "Stilettos",
        "description": "An off-shoulder blouse with jeans and stilettos for a chic birthday appearance."
      }
    ],
    "Average Average": [
      {
        "top": "Chikankari kurti",
        "bottom": "Jeans",
        "shoes": "Kolhapuris",
        "description": "A Chikankari kurti with jeans and Kolhapuris for a casual and comfortable birthday look."
      },
      {
        "top": "Tunic dress",
        "bottom": "Leggings",
        "shoes": "Ballet flats",
        "description": "A tunic dress with leggings and ballet flats for a comfortable birthday outfit."
      },
      {
        "top": "Peplum top",
        "bottom": "Flared pants",
        "shoes": "Mules",
        "description": "A peplum top with flared pants and mules for a stylish birthday celebration."
      }
    ],
    "Chubby Short": [
      {
        "top": "Long kurti",
        "bottom": "Palazzo pants",
        "shoes": "Juttis",
        "description": "A long kurti with palazzo pants and juttis for a festive birthday look."
      },
      {
        "top": "Anarkali dress",
        "bottom": "Leggings",
        "shoes": "Wedges",
        "description": "An Anarkali dress with leggings and wedges for a graceful birthday outfit."
      },
      {
        "top": "Choli",
        "bottom": "Lehenga skirt",
        "shoes": "Mojaris",
        "description": "A choli with a lehenga skirt and mojaris for a traditional birthday appearance."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Crop top",
        "bottom": "High-waisted skirt",
        "shoes": "Block heels",
        "description": "A crop top with a high-waisted skirt and block heels for a chic birthday look."
      },
      {
        "top": "Peplum blouse",
        "bottom": "Palazzo pants",
        "shoes": "Heeled sandals",
        "description": "A peplum blouse with palazzo pants and heeled sandals for a trendy birthday outfit."
      },
      {
        "top": "Sequin top",
        "bottom": "Jeans",
        "shoes": "Stilettos",
        "description": "A sequin top with jeans and stilettos for a glamorous birthday celebration."
      }
    ],
    "Chubby Average": [
      {
        "top": "Tunic",
        "bottom": "Cigarette pants",
        "shoes": "Kolhapuris",
        "description": "A tunic with cigarette pants and Kolhapuris for a comfortable and stylish birthday look."
      },
      {
        "top": "Kurti",
        "bottom": "Leggings",
        "shoes": "Mules",
        "description": "A kurti with leggings and mules for a casual birthday outfit."
      },
      {
        "top": "Off-shoulder top",
        "bottom": "Jeans",
        "shoes": "Wedges",
        "description": "An off-shoulder top with jeans and wedges for a chic birthday appearance."
      }
    ],
    "Overweight Short": [
      {
        "top": "Long kurti",
        "bottom": "Palazzo pants",
        "shoes": "Juttis",
        "description": "A long kurti with palazzo pants and juttis for a festive birthday look."
      },
      {
        "top": "Anarkali dress",
        "bottom": "Leggings",
        "shoes": "Wedges",
        "description": "An Anarkali dress with leggings and wedges for a graceful birthday outfit."
      },
      {
        "top": "Choli",
        "bottom": "Lehenga skirt",
        "shoes": "Mojaris",
        "description": "A choli with a lehenga skirt and mojaris for a traditional birthday appearance."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Crop top",
        "bottom": "High-waisted skirt",
        "shoes": "Block heels",
        "description": "A crop top with a high-waisted skirt and block heels for a chic birthday look."
      },
      {
        "top": "Peplum blouse",
        "bottom": "Palazzo pants",
        "shoes": "Heeled sandals",
        "description": "A peplum blouse with palazzo pants and heeled sandals for a trendy birthday outfit."
      },
      {
        "top": "Sequin top",
        "bottom": "Jeans",
        "shoes": "Stilettos",
        "description": "A sequin top with jeans and stilettos for a glamorous birthday celebration."
      }
    ],
    "Overweight Average": [
      {
        "top": "Tunic",
        "bottom": "Cigarette pants",
        "shoes": "Kolhapuris",
        "description": "A tunic with cigarette pants and Kolhapuris for a comfortable and stylish birthday look."
      },
      {
        "top": "Kurti",
        "bottom": "Leggings",
        "shoes": "Mules",
        "description": "A kurti with leggings and mules for a casual birthday outfit."
      },
      {
        "top": "Off-shoulder top",
        "bottom": "Jeans",
        "shoes": "Wedges",
        "description": "An off-shoulder top with jeans and wedges for a chic birthday appearance."
      }
    ]
    },
    "Weddings": {
    "Skinny Short": [
      {
        "top": "Lehenga choli",
        "bottom": "Lehenga",
        "shoes": "Heeled sandals",
        "description": "A lehenga choli with a lehenga and heeled sandals for a traditional wedding look."
      },
      {
        "top": "Saree",
        "bottom": "N/A",
        "shoes": "Juttis",
        "description": "A classic saree with juttis for an elegant wedding appearance."
      },
      {
        "top": "Anarkali suit",
        "bottom": "Salwar",
        "shoes": "Wedges",
        "description": "An Anarkali suit with a salwar and wedges for a graceful wedding outfit."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Saree",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A stunning saree with heeled sandals for a sophisticated wedding look."
      },
      {
        "top": "Lehenga choli",
        "bottom": "Lehenga",
        "shoes": "Block heels",
        "description": "A lehenga choli with a lehenga and block heels for a stylish wedding appearance."
      },
      {
        "top": "Sharara suit",
        "bottom": "Sharara",
        "shoes": "Heeled sandals",
        "description": "A sharara suit with a sharara and heeled sandals for a chic wedding outfit."
      }
    ],
    "Skinny Average": [
      {
        "top": "Anarkali dress",
        "bottom": "Leggings",
        "shoes": "Wedges",
        "description": "An Anarkali dress with leggings and wedges for a traditional wedding look."
      },
      {
        "top": "Lehenga choli",
        "bottom": "Lehenga",
        "shoes": "Juttis",
        "description": "A lehenga choli with a lehenga and juttis for an elegant wedding appearance."
      },
      {
        "top": "Saree",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A classic saree with heeled sandals for a sophisticated wedding outfit."
      }
    ],
    "Lean Short": [
      {
        "top": "Choli",
        "bottom": "Lehenga skirt",
        "shoes": "Juttis",
        "description": "A choli with a lehenga skirt and juttis for a traditional wedding look."
      },
      {
        "top": "Silk saree",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A silk saree with heeled sandals for an elegant wedding appearance."
      },
      {
        "top": "Anarkali suit",
        "bottom": "Leggings",
        "shoes": "Wedges",
        "description": "An Anarkali suit with leggings and wedges for a graceful wedding outfit."
      }
    ],
    "Lean Tall": [
      {
        "top": "Saree",
        "bottom": "N/A",
        "shoes": "Block heels",
        "description": "A beautiful saree with block heels for a sophisticated wedding look."
      },
      {
        "top": "Lehenga choli",
        "bottom": "Lehenga",
        "shoes": "Heeled sandals",
        "description": "A lehenga choli with a lehenga and heeled sandals for a stylish wedding appearance."
      },
      {
        "top": "Sharara suit",
        "bottom": "Sharara",
        "shoes": "Block heels",
        "description": "A sharara suit with a sharara and block heels for a chic wedding outfit."
      }
    ],
    "Lean Average": [
      {
        "top": "Choli",
        "bottom": "Lehenga",
        "shoes": "Juttis",
        "description": "A choli with a lehenga and juttis for a traditional wedding look."
      },
      {
        "top": "Anarkali dress",
        "bottom": "Leggings",
        "shoes": "Heeled sandals",
        "description": "An Anarkali dress with leggings and heeled sandals for a graceful wedding appearance."
      },
      {
        "top": "Saree",
        "bottom": "N/A",
        "shoes": "Wedges",
        "description": "A saree with wedges for a classic wedding outfit."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Anarkali dress",
        "bottom": "Leggings",
        "shoes": "Juttis",
        "description": "An Anarkali dress with leggings and juttis for a graceful wedding look."
      },
      {
        "top": "Choli",
        "bottom": "Lehenga skirt",
        "shoes": "Heeled sandals",
        "description": "A choli with a lehenga skirt and heeled sandals for a traditional wedding appearance."
      },
      {
        "top": "Saree",
        "bottom": "N/A",
        "shoes": "Block heels",
        "description": "A saree with block heels for an elegant wedding outfit."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Saree",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A stunning saree with heeled sandals for a sophisticated wedding look."
      },
      {
        "top": "Lehenga choli",
        "bottom": "Lehenga",
        "shoes": "Block heels",
        "description": "A lehenga choli with a lehenga and block heels for a stylish wedding appearance."
      },
      {
        "top": "Sharara suit",
        "bottom": "Sharara",
        "shoes": "Heeled sandals",
        "description": "A sharara suit with a sharara and heeled sandals for a chic wedding outfit."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Choli",
        "bottom": "Lehenga",
        "shoes": "Juttis",
        "description": "A choli with a lehenga and juttis for a traditional wedding look."
      },
      {
        "top": "Anarkali dress",
        "bottom": "Leggings",
        "shoes": "Block heels",
        "description": "An Anarkali dress with leggings and block heels for a graceful wedding appearance."
      },
      {
        "top": "Saree",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A saree with heeled sandals for an elegant wedding outfit."
      }
    ],
    "Average Short": [
      {
        "top": "Anarkali suit",
        "bottom": "Salwar",
        "shoes": "Juttis",
        "description": "An Anarkali suit with salwar and juttis for a traditional wedding look."
      },
      {
        "top": "Lehenga choli",
        "bottom": "Lehenga",
        "shoes": "Wedges",
        "description": "A lehenga choli with lehenga and wedges for an elegant wedding appearance."
      },
      {
        "top": "Saree",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A classic saree with heeled sandals for a sophisticated wedding outfit."
      }
    ],
    "Average Tall": [
      {
        "top": "Saree",
        "bottom": "N/A",
        "shoes": "Block heels",
        "description": "A beautiful saree with block heels for a sophisticated wedding look."
      },
      {
        "top": "Lehenga choli",
        "bottom": "Lehenga",
        "shoes": "Heeled sandals",
        "description": "A lehenga choli with lehenga and heeled sandals for a stylish wedding appearance."
      },
      {
        "top": "Sharara suit",
        "bottom": "Sharara",
        "shoes": "Block heels",
        "description": "A sharara suit with sharara and block heels for a chic wedding outfit."
      }
    ],
    "Average Average": [
      {
        "top": "Kurti",
        "bottom": "Churidar",
        "shoes": "Kolhapuris",
        "description": "A kurti with churidar and Kolhapuris for a traditional wedding look."
      },
      {
        "top": "Anarkali dress",
        "bottom": "Leggings",
        "shoes": "Wedges",
        "description": "An Anarkali dress with leggings and wedges for a graceful wedding appearance."
      },
      {
        "top": "Saree",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A classic saree with heeled sandals for a sophisticated wedding outfit."
      }
    ],
    "Chubby Short": [
      {
        "top": "Long kurti",
        "bottom": "Palazzo pants",
        "shoes": "Juttis",
        "description": "A long kurti with palazzo pants and juttis for a festive wedding look."
      },
      {
        "top": "Anarkali dress",
        "bottom": "Leggings",
        "shoes": "Wedges",
        "description": "An Anarkali dress with leggings and wedges for a graceful wedding outfit."
      },
      {
        "top": "Choli",
        "bottom": "Lehenga skirt",
        "shoes": "Mojaris",
        "description": "A choli with a lehenga skirt and mojaris for a traditional wedding appearance."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Crop top",
        "bottom": "High-waisted skirt",
        "shoes": "Block heels",
        "description": "A crop top with a high-waisted skirt and block heels for a chic wedding look."
      },
      {
        "top": "Peplum blouse",
        "bottom": "Palazzo pants",
        "shoes": "Heeled sandals",
        "description": "A peplum blouse with palazzo pants and heeled sandals for a trendy wedding outfit."
      },
      {
        "top": "Sequin top",
        "bottom": "Jeans",
        "shoes": "Stilettos",
        "description": "A sequin top with jeans and stilettos for a glamorous wedding celebration."
      }
    ],
    "Chubby Average": [
      {
        "top": "Tunic",
        "bottom": "Cigarette pants",
        "shoes": "Kolhapuris",
        "description": "A tunic with cigarette pants and Kolhapuris for a comfortable and stylish wedding look."
      },
      {
        "top": "Kurti",
        "bottom": "Leggings",
        "shoes": "Mules",
        "description": "A kurti with leggings and mules for a casual wedding outfit."
      },
      {
        "top": "Off-shoulder top",
        "bottom": "Jeans",
        "shoes": "Wedges",
        "description": "An off-shoulder top with jeans and wedges for a chic wedding appearance."
      }
    ],
    "Overweight Short": [
      {
        "top": "Long kurti",
        "bottom": "Palazzo pants",
        "shoes": "Juttis",
        "description": "A long kurti with palazzo pants and juttis for a festive wedding look."
      },
      {
        "top": "Anarkali dress",
        "bottom": "Leggings",
        "shoes": "Wedges",
        "description": "An Anarkali dress with leggings and wedges for a graceful wedding outfit."
      },
      {
        "top": "Choli",
        "bottom": "Lehenga skirt",
        "shoes": "Mojaris",
        "description": "A choli with a lehenga skirt and mojaris for a traditional wedding appearance."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Crop top",
        "bottom": "High-waisted skirt",
        "shoes": "Block heels",
        "description": "A crop top with a high-waisted skirt and block heels for a chic wedding look."
      },
      {
        "top": "Peplum blouse",
        "bottom": "Palazzo pants",
        "shoes": "Heeled sandals",
        "description": "A peplum blouse with palazzo pants and heeled sandals for a trendy wedding outfit."
      },
      {
        "top": "Sequin top",
        "bottom": "Jeans",
        "shoes": "Stilettos",
        "description": "A sequin top with jeans and stilettos for a glamorous wedding celebration."
      }
    ],
    "Overweight Average": [
      {
        "top": "Tunic",
        "bottom": "Cigarette pants",
        "shoes": "Kolhapuris",
        "description": "A tunic with cigarette pants and Kolhapuris for a comfortable and stylish wedding look."
      },
      {
        "top": "Kurti",
        "bottom": "Leggings",
        "shoes": "Mules",
        "description": "A kurti with leggings and mules for a casual wedding outfit."
      },
      {
        "top": "Off-shoulder top",
        "bottom": "Jeans",
        "shoes": "Wedges",
        "description": "An off-shoulder top with jeans and wedges for a chic wedding appearance."
      }
    ]
    },
    "Graduation Ceremonies": {
  "Skinny Short": [
    {
      "top": "Anarkali kurta",
      "bottom": "Leggings",
      "shoes": "Juttis",
      "description": "A stylish Anarkali kurta with leggings and juttis for a formal yet elegant graduation ceremony."
    },
    {
      "top": "Silk saree",
      "bottom": "Saree",
      "shoes": "Heels",
      "description": "A silk saree paired with heels for a traditional and sophisticated look at graduation."
    },
    {
      "top": "Kurti with palazzo pants",
      "bottom": "Palazzo pants",
      "shoes": "Sandals",
      "description": "A modern kurti paired with palazzo pants and sandals for a contemporary graduation outfit."
    }
  ],
  "Skinny Tall": [
    {
      "top": "Designer salwar kameez",
      "bottom": "Salwar",
      "shoes": "Pumps",
      "description": "A designer salwar kameez with pumps for a chic and comfortable graduation ceremony."
    },
    {
      "top": "Chiffon saree",
      "bottom": "Saree",
      "shoes": "High heels",
      "description": "A chiffon saree with high heels for a graceful and poised graduation look."
    },
    {
      "top": "Lehenga choli",
      "bottom": "Lehenga",
      "shoes": "Stilettos",
      "description": "A lehenga choli with stilettos for a stunning and fashionable graduation ensemble."
    }
  ],
  "Skinny Average": [
    {
      "top": "Embroidered kurti",
      "bottom": "Leggings",
      "shoes": "Ballerina flats",
      "description": "An embroidered kurti with leggings and ballerina flats for a comfortable yet stylish graduation outfit."
    },
    {
      "top": "Georgette saree",
      "bottom": "Saree",
      "shoes": "Wedges",
      "description": "A georgette saree with wedges for a simple and elegant graduation look."
    },
    {
      "top": "Cotton salwar suit",
      "bottom": "Salwar",
      "shoes": "Sandals",
      "description": "A cotton salwar suit paired with sandals for a comfortable and traditional graduation ceremony outfit."
    }
  ],
  "Lean Short": [
    {
      "top": "Anarkali gown",
      "bottom": "N/A",
      "shoes": "Heels",
      "description": "An Anarkali gown paired with heels for an elegant graduation ceremony."
    },
    {
      "top": "Silk kurti",
      "bottom": "Leggings",
      "shoes": "Pumps",
      "description": "A silk kurti with leggings and pumps for a chic graduation outfit."
    },
    {
      "top": "Chanderi saree",
      "bottom": "Saree",
      "shoes": "Kolhapuris",
      "description": "A Chanderi saree with Kolhapuri sandals for a traditional graduation look."
    }
  ],
  "Lean Tall": [
    {
      "top": "Designer lehenga",
      "bottom": "Lehenga",
      "shoes": "Heeled sandals",
      "description": "A designer lehenga paired with heeled sandals for a glamorous graduation ensemble."
    },
    {
      "top": "Georgette kurti",
      "bottom": "Palazzo pants",
      "shoes": "Wedges",
      "description": "A georgette kurti with palazzo pants and wedges for a contemporary graduation outfit."
    },
    {
      "top": "Chiffon Anarkali",
      "bottom": "N/A",
      "shoes": "Stilettos",
      "description": "A chiffon Anarkali with stilettos for a sophisticated and stylish graduation look."
    }
  ],
  "Lean Average": [
    {
      "top": "Printed saree",
      "bottom": "Saree",
      "shoes": "Heels",
      "description": "A printed saree paired with heels for a trendy graduation ceremony."
    },
    {
      "top": "Embroidered Anarkali",
      "bottom": "N/A",
      "shoes": "Sandals",
      "description": "An embroidered Anarkali paired with sandals for a traditional graduation look."
    },
    {
      "top": "Chanderi salwar suit",
      "bottom": "Salwar",
      "shoes": "Pumps",
      "description": "A Chanderi salwar suit with pumps for a comfortable yet elegant graduation ensemble."
    }
  ],
  "Lean Muscular Short": [
    {
      "top": "Banarasi saree",
      "bottom": "Saree",
      "shoes": "Heels",
      "description": "A Banarasi saree paired with heels for a luxurious graduation look."
    },
    {
      "top": "Cotton Anarkali",
      "bottom": "N/A",
      "shoes": "Flats",
      "description": "A cotton Anarkali with flats for a comfortable and stylish graduation ceremony."
    },
    {
      "top": "Designer lehenga",
      "bottom": "Lehenga",
      "shoes": "Stilettos",
      "description": "A designer lehenga paired with stilettos for a fashionable graduation outfit."
    }
  ],
  "Lean Muscular Tall": [
    {
      "top": "Chiffon saree",
      "bottom": "Saree",
      "shoes": "High heels",
      "description": "A chiffon saree with high heels for an elegant and graceful graduation look."
    },
    {
      "top": "Georgette Anarkali",
      "bottom": "N/A",
      "shoes": "Pumps",
      "description": "A georgette Anarkali with pumps for a stylish graduation ensemble."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Palazzo pants",
      "shoes": "Sandals",
      "description": "An embroidered kurti paired with palazzo pants and sandals for a comfortable and chic graduation outfit."
    }
  ],
  "Lean Muscular Average": [
    {
      "top": "Designer saree",
      "bottom": "Saree",
      "shoes": "Heeled sandals",
      "description": "A designer saree paired with heeled sandals for a stylish graduation look."
    },
    {
      "top": "Anarkali suit",
      "bottom": "N/A",
      "shoes": "Flats",
      "description": "An Anarkali suit with flats for a traditional and comfortable graduation ensemble."
    },
    {
      "top": "Printed lehenga",
      "bottom": "Lehenga",
      "shoes": "Pumps",
      "description": "A printed lehenga paired with pumps for a trendy and fashionable graduation outfit."
    }
  ],
  "Average Short": [
    {
      "top": "Silk saree",
      "bottom": "Saree",
      "shoes": "Heels",
      "description": "A silk saree paired with heels for an elegant graduation look."
    },
    {
      "top": "Embroidered salwar suit",
      "bottom": "Salwar",
      "shoes": "Pumps",
      "description": "An embroidered salwar suit with pumps for a chic and comfortable graduation outfit."
    },
    {
      "top": "Anarkali kurta",
      "bottom": "Leggings",
      "shoes": "Sandals",
      "description": "An Anarkali kurta paired with leggings and sandals for a stylish graduation ceremony."
    }
  ],
  "Average Tall": [
    {
      "top": "Chiffon saree",
      "bottom": "Saree",
      "shoes": "Heels",
      "description": "A chiffon saree with heels for a sophisticated graduation look."
    },
    {
      "top": "Designer Anarkali",
      "bottom": "N/A",
      "shoes": "Stilettos",
      "description": "A designer Anarkali paired with stilettos for a glamorous graduation outfit."
    },
    {
      "top": "Printed salwar kameez",
      "bottom": "Salwar",
      "shoes": "Flats",
      "description": "A printed salwar kameez with flats for a comfortable and stylish graduation ceremony."
    }
  ],
  "Average Average": [
    {
      "top": "Georgette saree",
      "bottom": "Saree",
      "shoes": "Heels",
      "description": "A georgette saree paired with heels for a chic graduation look."
    },
    {
      "top": "Chanderi Anarkali",
      "bottom": "N/A",
      "shoes": "Sandals",
      "description": "A Chanderi Anarkali with sandals for a traditional and stylish graduation outfit."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Palazzo pants",
      "shoes": "Pumps",
      "description": "An embroidered kurti with palazzo pants and pumps for a comfortable and fashionable graduation ceremony."
    }
  ],
  "Chubby Short": [
    {
      "top": "Silk saree",
      "bottom": "Saree",
      "shoes": "Heels",
      "description": "A silk saree paired with heels for a graceful and elegant graduation look."
    },
    {
      "top": "Georgette salwar suit",
      "bottom": "Salwar",
      "shoes": "Sandals",
      "description": "A georgette salwar suit with sandals for a comfortable and stylish graduation outfit."
    },
    {
      "top": "Anarkali gown",
      "bottom": "N/A",
      "shoes": "Flats",
      "description": "An Anarkali gown with flats for a chic and traditional graduation ceremony."
    }
  ],
  "Chubby Tall": [
    {
      "top": "Chiffon saree",
      "bottom": "Saree",
      "shoes": "Heels",
      "description": "A chiffon saree paired with heels for a sophisticated graduation look."
    },
    {
      "top": "Designer lehenga",
      "bottom": "Lehenga",
      "shoes": "Stilettos",
      "description": "A designer lehenga with stilettos for a glamorous graduation outfit."
    },
    {
      "top": "Printed salwar kameez",
      "bottom": "Salwar",
      "shoes": "Flats",
      "description": "A printed salwar kameez with flats for a comfortable and stylish graduation ceremony."
    }
  ],
  "Chubby Average": [
    {
      "top": "Georgette saree",
      "bottom": "Saree",
      "shoes": "Heels",
      "description": "A georgette saree paired with heels for a chic graduation look."
    },
    {
      "top": "Embroidered Anarkali",
      "bottom": "N/A",
      "shoes": "Sandals",
      "description": "An embroidered Anarkali with sandals for a traditional and stylish graduation outfit."
    },
    {
      "top": "Chanderi salwar suit",
      "bottom": "Salwar",
      "shoes": "Pumps",
      "description": "A Chanderi salwar suit with pumps for a comfortable and elegant graduation ceremony."
    }
  ],
  "Overweight Short": [
    {
      "top": "Banarasi saree",
      "bottom": "Saree",
      "shoes": "Heels",
      "description": "A Banarasi saree paired with heels for a luxurious graduation look."
    },
    {
      "top": "Georgette salwar suit",
      "bottom": "Salwar",
      "shoes": "Sandals",
      "description": "A georgette salwar suit with sandals for a comfortable and stylish graduation outfit."
    },
    {
      "top": "Anarkali gown",
      "bottom": "N/A",
      "shoes": "Flats",
      "description": "An Anarkali gown with flats for a chic and traditional graduation ceremony."
    }
  ],
  "Overweight Tall": [
    {
      "top": "Chiffon saree",
      "bottom": "Saree",
      "shoes": "Heels",
      "description": "A chiffon saree paired with heels for a sophisticated graduation look."
    },
    {
      "top": "Designer lehenga",
      "bottom": "Lehenga",
      "shoes": "Stilettos",
      "description": "A designer lehenga with stilettos for a glamorous graduation outfit."
    },
    {
      "top": "Printed salwar kameez",
      "bottom": "Salwar",
      "shoes": "Flats",
      "description": "A printed salwar kameez with flats for a comfortable and stylish graduation ceremony."
    }
  ],
  "Overweight Average": [
    {
      "top": "Georgette saree",
      "bottom": "Saree",
      "shoes": "Heels",
      "description": "A georgette saree paired with heels for a chic graduation look."
    },
    {
      "top": "Embroidered Anarkali",
      "bottom": "N/A",
      "shoes": "Sandals",
      "description": "An embroidered Anarkali with sandals for a traditional and stylish graduation outfit."
    },
    {
      "top": "Chanderi salwar suit",
      "bottom": "Salwar",
      "shoes": "Pumps",
      "description": "A Chanderi salwar suit with pumps for a comfortable and elegant graduation ceremony."
    }
  ]
    },
    "Job Interviews": {
  "Skinny Short": [
    {
      "top": "Cotton kurti",
      "bottom": "Leggings",
      "shoes": "Ballerina flats",
      "description": "A simple cotton kurti with leggings and ballerina flats for a comfortable and professional job interview look."
    },
    {
      "top": "Formal blouse",
      "bottom": "Trousers",
      "shoes": "Loafers",
      "description": "A formal blouse paired with trousers and loafers for a polished and professional interview outfit."
    },
    {
      "top": "Tailored jacket",
      "bottom": "Skirt",
      "shoes": "Heels",
      "description": "A tailored jacket with a skirt and heels for a sharp and confident interview appearance."
    }
  ],
  "Skinny Tall": [
    {
      "top": "Formal kurta",
      "bottom": "Churidar",
      "shoes": "Pumps",
      "description": "A formal kurta paired with churidar and pumps for a traditional yet professional interview outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Palazzo pants",
      "shoes": "Heels",
      "description": "A silk blouse with palazzo pants and heels for a chic and modern interview look."
    },
    {
      "top": "Blazer",
      "bottom": "Trousers",
      "shoes": "Loafers",
      "description": "A blazer with trousers and loafers for a classic and professional job interview ensemble."
    }
  ],
  "Skinny Average": [
    {
      "top": "Printed kurti",
      "bottom": "Leggings",
      "shoes": "Flats",
      "description": "A printed kurti with leggings and flats for a comfortable and stylish interview outfit."
    },
    {
      "top": "Formal shirt",
      "bottom": "Skirt",
      "shoes": "Heels",
      "description": "A formal shirt paired with a skirt and heels for a sharp and professional interview look."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Trousers",
      "shoes": "Pumps",
      "description": "A chiffon blouse with trousers and pumps for a polished and modern interview ensemble."
    }
  ],
  "Lean Short": [
    {
      "top": "Embroidered kurti",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "An embroidered kurti paired with churidar and heels for a professional and stylish interview look."
    },
    {
      "top": "Formal jacket",
      "bottom": "Trousers",
      "shoes": "Loafers",
      "description": "A formal jacket with trousers and loafers for a confident and polished interview outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Skirt",
      "shoes": "Flats",
      "description": "A silk blouse with a skirt and flats for a comfortable and elegant interview appearance."
    }
  ],
  "Lean Tall": [
    {
      "top": "Cotton kurti",
      "bottom": "Palazzo pants",
      "shoes": "Heels",
      "description": "A cotton kurti with palazzo pants and heels for a modern and professional interview look."
    },
    {
      "top": "Formal blazer",
      "bottom": "Trousers",
      "shoes": "Pumps",
      "description": "A formal blazer paired with trousers and pumps for a sharp and confident interview outfit."
    },
    {
      "top": "Printed shirt",
      "bottom": "Skirt",
      "shoes": "Flats",
      "description": "A printed shirt with a skirt and flats for a stylish and professional interview appearance."
    }
  ],
  "Lean Average": [
    {
      "top": "Formal kurta",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A formal kurta with churidar and heels for a traditional and professional interview look."
    },
    {
      "top": "Silk blouse",
      "bottom": "Trousers",
      "shoes": "Pumps",
      "description": "A silk blouse paired with trousers and pumps for a polished and modern interview outfit."
    },
    {
      "top": "Tailored jacket",
      "bottom": "Skirt",
      "shoes": "Flats",
      "description": "A tailored jacket with a skirt and flats for a stylish and confident interview ensemble."
    }
  ],
  "Lean Muscular Short": [
    {
      "top": "Embroidered kurti",
      "bottom": "Leggings",
      "shoes": "Heels",
      "description": "An embroidered kurti paired with leggings and heels for a professional and stylish interview look."
    },
    {
      "top": "Formal blazer",
      "bottom": "Trousers",
      "shoes": "Loafers",
      "description": "A formal blazer with trousers and loafers for a confident and polished interview outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Skirt",
      "shoes": "Flats",
      "description": "A silk blouse with a skirt and flats for a comfortable and elegant interview appearance."
    }
  ],
  "Lean Muscular Tall": [
    {
      "top": "Cotton kurti",
      "bottom": "Palazzo pants",
      "shoes": "Heels",
      "description": "A cotton kurti with palazzo pants and heels for a modern and professional interview look."
    },
    {
      "top": "Formal blazer",
      "bottom": "Trousers",
      "shoes": "Pumps",
      "description": "A formal blazer paired with trousers and pumps for a sharp and confident interview outfit."
    },
    {
      "top": "Printed shirt",
      "bottom": "Skirt",
      "shoes": "Flats",
      "description": "A printed shirt with a skirt and flats for a stylish and professional interview appearance."
    }
  ],
  "Lean Muscular Average": [
    {
      "top": "Formal kurta",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A formal kurta with churidar and heels for a traditional and professional interview look."
    },
    {
      "top": "Silk blouse",
      "bottom": "Trousers",
      "shoes": "Pumps",
      "description": "A silk blouse paired with trousers and pumps for a polished and modern interview outfit."
    },
    {
      "top": "Tailored jacket",
      "bottom": "Skirt",
      "shoes": "Flats",
      "description": "A tailored jacket with a skirt and flats for a stylish and confident interview ensemble."
    }
  ],
  "Average Short": [
    {
      "top": "Cotton kurti",
      "bottom": "Leggings",
      "shoes": "Flats",
      "description": "A simple cotton kurti with leggings and flats for a comfortable and professional job interview look."
    },
    {
      "top": "Formal blouse",
      "bottom": "Trousers",
      "shoes": "Loafers",
      "description": "A formal blouse paired with trousers and loafers for a polished and professional interview outfit."
    },
    {
      "top": "Tailored jacket",
      "bottom": "Skirt",
      "shoes": "Heels",
      "description": "A tailored jacket with a skirt and heels for a sharp and confident interview appearance."
    }
  ],
  "Average Tall": [
    {
      "top": "Formal kurta",
      "bottom": "Churidar",
      "shoes": "Pumps",
      "description": "A formal kurta with churidar and pumps for a traditional yet professional interview outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Palazzo pants",
      "shoes": "Heels",
      "description": "A silk blouse with palazzo pants and heels for a chic and modern interview look."
    },
    {
      "top": "Blazer",
      "bottom": "Trousers",
      "shoes": "Loafers",
      "description": "A blazer with trousers and loafers for a classic and professional job interview ensemble."
    }
  ],
  "Average Average": [
    {
      "top": "Printed kurti",
      "bottom": "Leggings",
      "shoes": "Flats",
      "description": "A printed kurti with leggings and flats for a comfortable and stylish interview outfit."
    },
    {
      "top": "Formal shirt",
      "bottom": "Skirt",
      "shoes": "Heels",
      "description": "A formal shirt paired with a skirt and heels for a sharp and professional interview look."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Trousers",
      "shoes": "Pumps",
      "description": "A chiffon blouse with trousers and pumps for a polished and modern interview ensemble."
    }
  ],
  "Chubby Short": [
    {
      "top": "Embroidered kurti",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "An embroidered kurti paired with churidar and heels for a professional and stylish interview look."
    },
    {
      "top": "Formal jacket",
      "bottom": "Trousers",
      "shoes": "Loafers",
      "description": "A formal jacket with trousers and loafers for a confident and polished interview outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Skirt",
      "shoes": "Flats",
      "description": "A silk blouse with a skirt and flats for a comfortable and elegant interview appearance."
    }
  ],
  "Chubby Tall": [
    {
      "top": "Cotton kurti",
      "bottom": "Palazzo pants",
      "shoes": "Heels",
      "description": "A cotton kurti with palazzo pants and heels for a modern and professional interview look."
    },
    {
      "top": "Formal blazer",
      "bottom": "Trousers",
      "shoes": "Pumps",
      "description": "A formal blazer paired with trousers and pumps for a sharp and confident interview outfit."
    },
    {
      "top": "Printed shirt",
      "bottom": "Skirt",
      "shoes": "Flats",
      "description": "A printed shirt with a skirt and flats for a stylish and professional interview appearance."
    }
  ],
  "Chubby Average": [
    {
      "top": "Formal kurta",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A formal kurta with churidar and heels for a traditional and professional interview look."
    },
    {
      "top": "Silk blouse",
      "bottom": "Trousers",
      "shoes": "Pumps",
      "description": "A silk blouse paired with trousers and pumps for a polished and modern interview outfit."
    },
    {
      "top": "Tailored jacket",
      "bottom": "Skirt",
      "shoes": "Flats",
      "description": "A tailored jacket with a skirt and flats for a stylish and confident interview ensemble."
    }
  ],
  "Overweight Short": [
    {
      "top": "Embroidered kurti",
      "bottom": "Leggings",
      "shoes": "Heels",
      "description": "An embroidered kurti paired with leggings and heels for a professional and stylish interview look."
    },
    {
      "top": "Formal blazer",
      "bottom": "Trousers",
      "shoes": "Loafers",
      "description": "A formal blazer with trousers and loafers for a confident and polished interview outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Skirt",
      "shoes": "Flats",
      "description": "A silk blouse with a skirt and flats for a comfortable and elegant interview appearance."
    }
  ],
  "Overweight Tall": [
    {
      "top": "Cotton kurti",
      "bottom": "Palazzo pants",
      "shoes": "Heels",
      "description": "A cotton kurti with palazzo pants and heels for a modern and professional interview look."
    },
    {
      "top": "Formal blazer",
      "bottom": "Trousers",
      "shoes": "Pumps",
      "description": "A formal blazer paired with trousers and pumps for a sharp and confident interview outfit."
    },
    {
      "top": "Printed shirt",
      "bottom": "Skirt",
      "shoes": "Flats",
      "description": "A printed shirt with a skirt and flats for a stylish and professional interview appearance."
    }
  ],
  "Overweight Average": [
    {
      "top": "Formal kurta",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A formal kurta with churidar and heels for a traditional and professional interview look."
    },
    {
      "top": "Silk blouse",
      "bottom": "Trousers",
      "shoes": "Pumps",
      "description": "A silk blouse paired with trousers and pumps for a polished and modern interview outfit."
    },
    {
      "top": "Tailored jacket",
      "bottom": "Skirt",
      "shoes": "Flats",
      "description": "A tailored jacket with a skirt and flats for a stylish and confident interview ensemble."
    }
  ]
    },
    "First Dates": {
  "Skinny Short": [
    {
      "top": "Floral blouse",
      "bottom": "A-line skirt",
      "shoes": "Ballet flats",
      "description": "A floral blouse with an A-line skirt and ballet flats for a cute and romantic first date outfit."
    },
    {
      "top": "Lace top",
      "bottom": "Jeans",
      "shoes": "Heels",
      "description": "A lace top paired with jeans and heels for a stylish and casual first date look."
    },
    {
      "top": "Off-shoulder top",
      "bottom": "Shorts",
      "shoes": "Sandals",
      "description": "An off-shoulder top with shorts and sandals for a flirty and comfortable first date ensemble."
    }
  ],
  "Skinny Tall": [
    {
      "top": "Peplum top",
      "bottom": "Skinny jeans",
      "shoes": "Heels",
      "description": "A peplum top with skinny jeans and heels for a chic and sophisticated first date outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Palazzo pants",
      "shoes": "Flats",
      "description": "A silk blouse with palazzo pants and flats for an elegant and comfortable first date look."
    },
    {
      "top": "Crop top",
      "bottom": "High-waisted skirt",
      "shoes": "Wedges",
      "description": "A crop top paired with a high-waisted skirt and wedges for a trendy and stylish first date ensemble."
    }
  ],
  "Skinny Average": [
    {
      "top": "Ruffled blouse",
      "bottom": "Denim skirt",
      "shoes": "Sneakers",
      "description": "A ruffled blouse with a denim skirt and sneakers for a cute and casual first date outfit."
    },
    {
      "top": "Chiffon top",
      "bottom": "Jeans",
      "shoes": "Booties",
      "description": "A chiffon top paired with jeans and booties for a stylish and comfortable first date look."
    },
    {
      "top": "Knit sweater",
      "bottom": "Mini skirt",
      "shoes": "Heels",
      "description": "A knit sweater with a mini skirt and heels for a cozy and trendy first date ensemble."
    }
  ],
  "Lean Short": [
    {
      "top": "Floral kurti",
      "bottom": "Leggings",
      "shoes": "Sandals",
      "description": "A floral kurti with leggings and sandals for a cute and comfortable first date outfit."
    },
    {
      "top": "Off-shoulder blouse",
      "bottom": "Jeans",
      "shoes": "Heels",
      "description": "An off-shoulder blouse paired with jeans and heels for a stylish and flirty first date look."
    },
    {
      "top": "Tank top",
      "bottom": "Shorts",
      "shoes": "Sneakers",
      "description": "A tank top with shorts and sneakers for a casual and comfortable first date ensemble."
    }
  ],
  "Lean Tall": [
    {
      "top": "Peplum kurti",
      "bottom": "Palazzo pants",
      "shoes": "Flats",
      "description": "A peplum kurti with palazzo pants and flats for a chic and comfortable first date outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A silk blouse paired with churidar and heels for an elegant and stylish first date look."
    },
    {
      "top": "Crop top",
      "bottom": "High-waisted jeans",
      "shoes": "Sneakers",
      "description": "A crop top with high-waisted jeans and sneakers for a trendy and casual first date ensemble."
    }
  ],
  "Lean Average": [
    {
      "top": "Ruffled blouse",
      "bottom": "Denim skirt",
      "shoes": "Sneakers",
      "description": "A ruffled blouse with a denim skirt and sneakers for a cute and casual first date outfit."
    },
    {
      "top": "Chiffon top",
      "bottom": "Jeans",
      "shoes": "Booties",
      "description": "A chiffon top paired with jeans and booties for a stylish and comfortable first date look."
    },
    {
      "top": "Knit sweater",
      "bottom": "Mini skirt",
      "shoes": "Heels",
      "description": "A knit sweater with a mini skirt and heels for a cozy and trendy first date ensemble."
    }
  ],
  "Lean Muscular Short": [
    {
      "top": "Floral kurti",
      "bottom": "Leggings",
      "shoes": "Sandals",
      "description": "A floral kurti with leggings and sandals for a cute and comfortable first date outfit."
    },
    {
      "top": "Off-shoulder blouse",
      "bottom": "Jeans",
      "shoes": "Heels",
      "description": "An off-shoulder blouse paired with jeans and heels for a stylish and flirty first date look."
    },
    {
      "top": "Tank top",
      "bottom": "Shorts",
      "shoes": "Sneakers",
      "description": "A tank top with shorts and sneakers for a casual and comfortable first date ensemble."
    }
  ],
  "Lean Muscular Tall": [
    {
      "top": "Peplum kurti",
      "bottom": "Palazzo pants",
      "shoes": "Flats",
      "description": "A peplum kurti with palazzo pants and flats for a chic and comfortable first date outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A silk blouse paired with churidar and heels for an elegant and stylish first date look."
    },
    {
      "top": "Crop top",
      "bottom": "High-waisted jeans",
      "shoes": "Sneakers",
      "description": "A crop top with high-waisted jeans and sneakers for a trendy and casual first date ensemble."
    }
  ],
  "Lean Muscular Average": [
    {
      "top": "Ruffled blouse",
      "bottom": "Denim skirt",
      "shoes": "Sneakers",
      "description": "A ruffled blouse with a denim skirt and sneakers for a cute and casual first date outfit."
    },
    {
      "top": "Chiffon top",
      "bottom": "Jeans",
      "shoes": "Booties",
      "description": "A chiffon top paired with jeans and booties for a stylish and comfortable first date look."
    },
    {
      "top": "Knit sweater",
      "bottom": "Mini skirt",
      "shoes": "Heels",
      "description": "A knit sweater with a mini skirt and heels for a cozy and trendy first date ensemble."
    }
  ],
  "Average Short": [
    {
      "top": "Floral blouse",
      "bottom": "A-line skirt",
      "shoes": "Ballet flats",
      "description": "A floral blouse with an A-line skirt and ballet flats for a cute and romantic first date outfit."
    },
    {
      "top": "Lace top",
      "bottom": "Jeans",
      "shoes": "Heels",
      "description": "A lace top paired with jeans and heels for a stylish and casual first date look."
    },
    {
      "top": "Off-shoulder top",
      "bottom": "Shorts",
      "shoes": "Sandals",
      "description": "An off-shoulder top with shorts and sandals for a flirty and comfortable first date ensemble."
    }
  ],
  "Average Tall": [
    {
      "top": "Peplum top",
      "bottom": "Skinny jeans",
      "shoes": "Heels",
      "description": "A peplum top with skinny jeans and heels for a chic and sophisticated first date outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Palazzo pants",
      "shoes": "Flats",
      "description": "A silk blouse with palazzo pants and flats for an elegant and comfortable first date look."
    },
    {
      "top": "Crop top",
      "bottom": "High-waisted skirt",
      "shoes": "Wedges",
      "description": "A crop top paired with a high-waisted skirt and wedges for a trendy and stylish first date ensemble."
    }
  ],
  "Average Average": [
    {
      "top": "Ruffled blouse",
      "bottom": "Denim skirt",
      "shoes": "Sneakers",
      "description": "A ruffled blouse with a denim skirt and sneakers for a cute and casual first date outfit."
    },
    {
      "top": "Chiffon top",
      "bottom": "Jeans",
      "shoes": "Booties",
      "description": "A chiffon top paired with jeans and booties for a stylish and comfortable first date look."
    },
    {
      "top": "Knit sweater",
      "bottom": "Mini skirt",
      "shoes": "Heels",
      "description": "A knit sweater with a mini skirt and heels for a cozy and trendy first date ensemble."
    }
  ],
  "Chubby Short": [
    {
      "top": "Floral kurti",
      "bottom": "Leggings",
      "shoes": "Sandals",
      "description": "A floral kurti with leggings and sandals for a cute and comfortable first date outfit."
    },
    {
      "top": "Off-shoulder blouse",
      "bottom": "Jeans",
      "shoes": "Heels",
      "description": "An off-shoulder blouse paired with jeans and heels for a stylish and flirty first date look."
    },
    {
      "top": "Tank top",
      "bottom": "Shorts",
      "shoes": "Sneakers",
      "description": "A tank top with shorts and sneakers for a casual and comfortable first date ensemble."
    }
  ],
  "Chubby Tall": [
    {
      "top": "Peplum kurti",
      "bottom": "Palazzo pants",
      "shoes": "Flats",
      "description": "A peplum kurti with palazzo pants and flats for a chic and comfortable first date outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A silk blouse paired with churidar and heels for an elegant and stylish first date look."
    },
    {
      "top": "Crop top",
      "bottom": "High-waisted jeans",
      "shoes": "Sneakers",
      "description": "A crop top with high-waisted jeans and sneakers for a trendy and casual first date ensemble."
    }
  ],
  "Chubby Average": [
    {
      "top": "Ruffled blouse",
      "bottom": "Denim skirt",
      "shoes": "Sneakers",
      "description": "A ruffled blouse with a denim skirt and sneakers for a cute and casual first date outfit."
    },
    {
      "top": "Chiffon top",
      "bottom": "Jeans",
      "shoes": "Booties",
      "description": "A chiffon top paired with jeans and booties for a stylish and comfortable first date look."
    },
    {
      "top": "Knit sweater",
      "bottom": "Mini skirt",
      "shoes": "Heels",
      "description": "A knit sweater with a mini skirt and heels for a cozy and trendy first date ensemble."
    }
  ],
  "Overweight Short": [
    {
      "top": "Floral kurti",
      "bottom": "Leggings",
      "shoes": "Sandals",
      "description": "A floral kurti with leggings and sandals for a cute and comfortable first date outfit."
    },
    {
      "top": "Off-shoulder blouse",
      "bottom": "Jeans",
      "shoes": "Heels",
      "description": "An off-shoulder blouse paired with jeans and heels for a stylish and flirty first date look."
    },
    {
      "top": "Tank top",
      "bottom": "Shorts",
      "shoes": "Sneakers",
      "description": "A tank top with shorts and sneakers for a casual and comfortable first date ensemble."
    }
  ],
  "Overweight Tall": [
    {
      "top": "Peplum kurti",
      "bottom": "Palazzo pants",
      "shoes": "Flats",
      "description": "A peplum kurti with palazzo pants and flats for a chic and comfortable first date outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A silk blouse paired with churidar and heels for an elegant and stylish first date look."
    },
    {
      "top": "Crop top",
      "bottom": "High-waisted jeans",
      "shoes": "Sneakers",
      "description": "A crop top with high-waisted jeans and sneakers for a trendy and casual first date ensemble."
    }
  ],
  "Overweight Average": [
    {
      "top": "Ruffled blouse",
      "bottom": "Denim skirt",
      "shoes": "Sneakers",
      "description": "A ruffled blouse with a denim skirt and sneakers for a cute and casual first date outfit."
    },
    {
      "top": "Chiffon top",
      "bottom": "Jeans",
      "shoes": "Booties",
      "description": "A chiffon top paired with jeans and booties for a stylish and comfortable first date look."
    },
    {
      "top": "Knit sweater",
      "bottom": "Mini skirt",
      "shoes": "Heels",
      "description": "A knit sweater with a mini skirt and heels for a cozy and trendy first date ensemble."
    }
  ]
    },
    "Corporate Events": {
  "Skinny Short": [
    {
      "top": "Blazer",
      "bottom": "Tailored trousers",
      "shoes": "Heels",
      "description": "A blazer paired with tailored trousers and heels for a professional and polished corporate event look."
    },
    {
      "top": "Silk blouse",
      "bottom": "Pencil skirt",
      "shoes": "Flats",
      "description": "A silk blouse with a pencil skirt and flats for an elegant and comfortable corporate outfit."
    },
    {
      "top": "Formal kurti",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A formal kurti with churidar and heels for a traditional yet professional appearance."
    }
  ],
  "Skinny Tall": [
    {
      "top": "Tailored blazer",
      "bottom": "Wide-leg trousers",
      "shoes": "Heels",
      "description": "A tailored blazer with wide-leg trousers and heels for a chic and sophisticated corporate look."
    },
    {
      "top": "Button-down shirt",
      "bottom": "A-line skirt",
      "shoes": "Loafers",
      "description": "A button-down shirt paired with an A-line skirt and loafers for a smart and stylish outfit."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Palazzo pants",
      "shoes": "Flats",
      "description": "An embroidered kurti with palazzo pants and flats for a blend of traditional and modern style."
    }
  ],
  "Skinny Average": [
    {
      "top": "Blazer",
      "bottom": "Cigarette pants",
      "shoes": "Heels",
      "description": "A blazer with cigarette pants and heels for a sharp and professional corporate look."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Midi skirt",
      "shoes": "Ballet flats",
      "description": "A chiffon blouse paired with a midi skirt and ballet flats for a comfortable and elegant outfit."
    },
    {
      "top": "Printed kurta",
      "bottom": "Leggings",
      "shoes": "Sandals",
      "description": "A printed kurta with leggings and sandals for a casual yet professional appearance."
    }
  ],
  "Lean Short": [
    {
      "top": "Blazer",
      "bottom": "Tailored trousers",
      "shoes": "Heels",
      "description": "A blazer paired with tailored trousers and heels for a professional and polished corporate event look."
    },
    {
      "top": "Silk blouse",
      "bottom": "Pencil skirt",
      "shoes": "Flats",
      "description": "A silk blouse with a pencil skirt and flats for an elegant and comfortable corporate outfit."
    },
    {
      "top": "Formal kurti",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A formal kurti with churidar and heels for a traditional yet professional appearance."
    }
  ],
  "Lean Tall": [
    {
      "top": "Tailored blazer",
      "bottom": "Wide-leg trousers",
      "shoes": "Heels",
      "description": "A tailored blazer with wide-leg trousers and heels for a chic and sophisticated corporate look."
    },
    {
      "top": "Button-down shirt",
      "bottom": "A-line skirt",
      "shoes": "Loafers",
      "description": "A button-down shirt paired with an A-line skirt and loafers for a smart and stylish outfit."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Palazzo pants",
      "shoes": "Flats",
      "description": "An embroidered kurti with palazzo pants and flats for a blend of traditional and modern style."
    }
  ],
  "Lean Average": [
    {
      "top": "Blazer",
      "bottom": "Cigarette pants",
      "shoes": "Heels",
      "description": "A blazer with cigarette pants and heels for a sharp and professional corporate look."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Midi skirt",
      "shoes": "Ballet flats",
      "description": "A chiffon blouse paired with a midi skirt and ballet flats for a comfortable and elegant outfit."
    },
    {
      "top": "Printed kurta",
      "bottom": "Leggings",
      "shoes": "Sandals",
      "description": "A printed kurta with leggings and sandals for a casual yet professional appearance."
    }
  ],
  "Lean Muscular Short": [
    {
      "top": "Blazer",
      "bottom": "Tailored trousers",
      "shoes": "Heels",
      "description": "A blazer paired with tailored trousers and heels for a professional and polished corporate event look."
    },
    {
      "top": "Silk blouse",
      "bottom": "Pencil skirt",
      "shoes": "Flats",
      "description": "A silk blouse with a pencil skirt and flats for an elegant and comfortable corporate outfit."
    },
    {
      "top": "Formal kurti",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A formal kurti with churidar and heels for a traditional yet professional appearance."
    }
  ],
  "Lean Muscular Tall": [
    {
      "top": "Tailored blazer",
      "bottom": "Wide-leg trousers",
      "shoes": "Heels",
      "description": "A tailored blazer with wide-leg trousers and heels for a chic and sophisticated corporate look."
    },
    {
      "top": "Button-down shirt",
      "bottom": "A-line skirt",
      "shoes": "Loafers",
      "description": "A button-down shirt paired with an A-line skirt and loafers for a smart and stylish outfit."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Palazzo pants",
      "shoes": "Flats",
      "description": "An embroidered kurti with palazzo pants and flats for a blend of traditional and modern style."
    }
  ],
  "Lean Muscular Average": [
    {
      "top": "Blazer",
      "bottom": "Cigarette pants",
      "shoes": "Heels",
      "description": "A blazer with cigarette pants and heels for a sharp and professional corporate look."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Midi skirt",
      "shoes": "Ballet flats",
      "description": "A chiffon blouse paired with a midi skirt and ballet flats for a comfortable and elegant outfit."
    },
    {
      "top": "Printed kurta",
      "bottom": "Leggings",
      "shoes": "Sandals",
      "description": "A printed kurta with leggings and sandals for a casual yet professional appearance."
    }
  ],
  "Average Short": [
    {
      "top": "Blazer",
      "bottom": "Tailored trousers",
      "shoes": "Heels",
      "description": "A blazer paired with tailored trousers and heels for a professional and polished corporate event look."
    },
    {
      "top": "Silk blouse",
      "bottom": "Pencil skirt",
      "shoes": "Flats",
      "description": "A silk blouse with a pencil skirt and flats for an elegant and comfortable corporate outfit."
    },
    {
      "top": "Formal kurti",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A formal kurti with churidar and heels for a traditional yet professional appearance."
    }
  ],
  "Average Tall": [
    {
      "top": "Tailored blazer",
      "bottom": "Wide-leg trousers",
      "shoes": "Heels",
      "description": "A tailored blazer with wide-leg trousers and heels for a chic and sophisticated corporate look."
    },
    {
      "top": "Button-down shirt",
      "bottom": "A-line skirt",
      "shoes": "Loafers",
      "description": "A button-down shirt paired with an A-line skirt and loafers for a smart and stylish outfit."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Palazzo pants",
      "shoes": "Flats",
      "description": "An embroidered kurti with palazzo pants and flats for a blend of traditional and modern style."
    }
  ],
  "Average Average": [
    {
      "top": "Blazer",
      "bottom": "Cigarette pants",
      "shoes": "Heels",
      "description": "A blazer with cigarette pants and heels for a sharp and professional corporate look."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Midi skirt",
      "shoes": "Ballet flats",
      "description": "A chiffon blouse paired with a midi skirt and ballet flats for a comfortable and elegant outfit."
    },
    {
      "top": "Printed kurta",
      "bottom": "Leggings",
      "shoes": "Sandals",
      "description": "A printed kurta with leggings and sandals for a casual yet professional appearance."
    }
  ],
  "Chubby Short": [
    {
      "top": "Blazer",
      "bottom": "Tailored trousers",
      "shoes": "Heels",
      "description": "A blazer paired with tailored trousers and heels for a professional and polished corporate event look."
    },
    {
      "top": "Silk blouse",
      "bottom": "Pencil skirt",
      "shoes": "Flats",
      "description": "A silk blouse with a pencil skirt and flats for an elegant and comfortable corporate outfit."
    },
    {
      "top": "Formal kurti",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A formal kurti with churidar and heels for a traditional yet professional appearance."
    }
  ],
  "Chubby Tall": [
    {
      "top": "Tailored blazer",
      "bottom": "Wide-leg trousers",
      "shoes": "Heels",
      "description": "A tailored blazer with wide-leg trousers and heels for a chic and sophisticated corporate look."
    },
    {
      "top": "Button-down shirt",
      "bottom": "A-line skirt",
      "shoes": "Loafers",
      "description": "A button-down shirt paired with an A-line skirt and loafers for a smart and stylish outfit."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Palazzo pants",
      "shoes": "Flats",
      "description": "An embroidered kurti with palazzo pants and flats for a blend of traditional and modern style."
    }
  ],
  "Chubby Average": [
    {
      "top": "Blazer",
      "bottom": "Cigarette pants",
      "shoes": "Heels",
      "description": "A blazer with cigarette pants and heels for a sharp and professional corporate look."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Midi skirt",
      "shoes": "Ballet flats",
      "description": "A chiffon blouse paired with a midi skirt and ballet flats for a comfortable and elegant outfit."
    },
    {
      "top": "Printed kurta",
      "bottom": "Leggings",
      "shoes": "Sandals",
      "description": "A printed kurta with leggings and sandals for a casual yet professional appearance."
    }
  ],
  "Overweight Short": [
    {
      "top": "Blazer",
      "bottom": "Tailored trousers",
      "shoes": "Heels",
      "description": "A blazer paired with tailored trousers and heels for a professional and polished corporate event look."
    },
    {
      "top": "Silk blouse",
      "bottom": "Pencil skirt",
      "shoes": "Flats",
      "description": "A silk blouse with a pencil skirt and flats for an elegant and comfortable corporate outfit."
    },
    {
      "top": "Formal kurti",
      "bottom": "Churidar",
      "shoes": "Heels",
      "description": "A formal kurti with churidar and heels for a traditional yet professional appearance."
    }
  ],
  "Overweight Tall": [
    {
      "top": "Tailored blazer",
      "bottom": "Wide-leg trousers",
      "shoes": "Heels",
      "description": "A tailored blazer with wide-leg trousers and heels for a chic and sophisticated corporate look."
    },
    {
      "top": "Button-down shirt",
      "bottom": "A-line skirt",
      "shoes": "Loafers",
      "description": "A button-down shirt paired with an A-line skirt and loafers for a smart and stylish outfit."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Palazzo pants",
      "shoes": "Flats",
      "description": "An embroidered kurti with palazzo pants and flats for a blend of traditional and modern style."
    }
  ],
  "Overweight Average": [
    {
      "top": "Blazer",
      "bottom": "Cigarette pants",
      "shoes": "Heels",
      "description": "A blazer with cigarette pants and heels for a sharp and professional corporate look."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Midi skirt",
      "shoes": "Ballet flats",
      "description": "A chiffon blouse paired with a midi skirt and ballet flats for a comfortable and elegant outfit."
    },
    {
      "top": "Printed kurta",
      "bottom": "Leggings",
      "shoes": "Sandals",
      "description": "A printed kurta with leggings and sandals for a casual yet professional appearance."
    }
  ]
    },
    "Holiday Parties": {
  "Skinny Short": [
    {
      "top": "Sequin blouse",
      "bottom": "Midi skirt",
      "shoes": "Heels",
      "description": "A sequin blouse with a midi skirt and heels for a sparkling and festive holiday party outfit."
    },
    {
      "top": "Velvet top",
      "bottom": "Palazzo pants",
      "shoes": "Booties",
      "description": "A velvet top paired with palazzo pants and booties for a luxurious and stylish look."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Churidar",
      "shoes": "Sandals",
      "description": "An embroidered kurti with churidar and sandals for a traditional and festive appearance."
    }
  ],
  "Skinny Tall": [
    {
      "top": "Off-shoulder top",
      "bottom": "A-line skirt",
      "shoes": "Heels",
      "description": "An off-shoulder top with an A-line skirt and heels for an elegant and trendy holiday outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Wide-leg trousers",
      "shoes": "Flats",
      "description": "A silk blouse paired with wide-leg trousers and flats for a sophisticated and comfortable look."
    },
    {
      "top": "Anarkali dress",
      "bottom": "Leggings",
      "shoes": "Heels",
      "description": "An Anarkali dress with leggings and heels for a traditional and festive appearance."
    }
  ],
  "Skinny Average": [
    {
      "top": "Crop top",
      "bottom": "High-waisted skirt",
      "shoes": "Heels",
      "description": "A crop top paired with a high-waisted skirt and heels for a chic and stylish holiday party outfit."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Pencil skirt",
      "shoes": "Booties",
      "description": "A chiffon blouse with a pencil skirt and booties for an elegant and trendy look."
    },
    {
      "top": "Kurta",
      "bottom": "Palazzo pants",
      "shoes": "Sandals",
      "description": "A kurta with palazzo pants and sandals for a comfortable and traditional appearance."
    }
  ],
  "Lean Short": [
    {
      "top": "Sequin blouse",
      "bottom": "Midi skirt",
      "shoes": "Heels",
      "description": "A sequin blouse with a midi skirt and heels for a sparkling and festive holiday party outfit."
    },
    {
      "top": "Velvet top",
      "bottom": "Palazzo pants",
      "shoes": "Booties",
      "description": "A velvet top paired with palazzo pants and booties for a luxurious and stylish look."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Churidar",
      "shoes": "Sandals",
      "description": "An embroidered kurti with churidar and sandals for a traditional and festive appearance."
    }
  ],
  "Lean Tall": [
    {
      "top": "Off-shoulder top",
      "bottom": "A-line skirt",
      "shoes": "Heels",
      "description": "An off-shoulder top with an A-line skirt and heels for an elegant and trendy holiday outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Wide-leg trousers",
      "shoes": "Flats",
      "description": "A silk blouse paired with wide-leg trousers and flats for a sophisticated and comfortable look."
    },
    {
      "top": "Anarkali dress",
      "bottom": "Leggings",
      "shoes": "Heels",
      "description": "An Anarkali dress with leggings and heels for a traditional and festive appearance."
    }
  ],
  "Lean Average": [
    {
      "top": "Crop top",
      "bottom": "High-waisted skirt",
      "shoes": "Heels",
      "description": "A crop top paired with a high-waisted skirt and heels for a chic and stylish holiday party outfit."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Pencil skirt",
      "shoes": "Booties",
      "description": "A chiffon blouse with a pencil skirt and booties for an elegant and trendy look."
    },
    {
      "top": "Kurta",
      "bottom": "Palazzo pants",
      "shoes": "Sandals",
      "description": "A kurta with palazzo pants and sandals for a comfortable and traditional appearance."
    }
  ],
  "Lean Muscular Short": [
    {
      "top": "Sequin blouse",
      "bottom": "Midi skirt",
      "shoes": "Heels",
      "description": "A sequin blouse with a midi skirt and heels for a sparkling and festive holiday party outfit."
    },
    {
      "top": "Velvet top",
      "bottom": "Palazzo pants",
      "shoes": "Booties",
      "description": "A velvet top paired with palazzo pants and booties for a luxurious and stylish look."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Churidar",
      "shoes": "Sandals",
      "description": "An embroidered kurti with churidar and sandals for a traditional and festive appearance."
    }
  ],
  "Lean Muscular Tall": [
    {
      "top": "Off-shoulder top",
      "bottom": "A-line skirt",
      "shoes": "Heels",
      "description": "An off-shoulder top with an A-line skirt and heels for an elegant and trendy holiday outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Wide-leg trousers",
      "shoes": "Flats",
      "description": "A silk blouse paired with wide-leg trousers and flats for a sophisticated and comfortable look."
    },
    {
      "top": "Anarkali dress",
      "bottom": "Leggings",
      "shoes": "Heels",
      "description": "An Anarkali dress with leggings and heels for a traditional and festive appearance."
    }
  ],
  "Lean Muscular Average": [
    {
      "top": "Crop top",
      "bottom": "High-waisted skirt",
      "shoes": "Heels",
      "description": "A crop top paired with a high-waisted skirt and heels for a chic and stylish holiday party outfit."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Pencil skirt",
      "shoes": "Booties",
      "description": "A chiffon blouse with a pencil skirt and booties for an elegant and trendy look."
    },
    {
      "top": "Kurta",
      "bottom": "Palazzo pants",
      "shoes": "Sandals",
      "description": "A kurta with palazzo pants and sandals for a comfortable and traditional appearance."
    }
  ],
  "Average Short": [
    {
      "top": "Sequin blouse",
      "bottom": "Midi skirt",
      "shoes": "Heels",
      "description": "A sequin blouse with a midi skirt and heels for a sparkling and festive holiday party outfit."
    },
    {
      "top": "Velvet top",
      "bottom": "Palazzo pants",
      "shoes": "Booties",
      "description": "A velvet top paired with palazzo pants and booties for a luxurious and stylish look."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Churidar",
      "shoes": "Sandals",
      "description": "An embroidered kurti with churidar and sandals for a traditional and festive appearance."
    }
  ],
  "Average Tall": [
    {
      "top": "Off-shoulder top",
      "bottom": "A-line skirt",
      "shoes": "Heels",
      "description": "An off-shoulder top with an A-line skirt and heels for an elegant and trendy holiday outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Wide-leg trousers",
      "shoes": "Flats",
      "description": "A silk blouse paired with wide-leg trousers and flats for a sophisticated and comfortable look."
    },
    {
      "top": "Anarkali dress",
      "bottom": "Leggings",
      "shoes": "Heels",
      "description": "An Anarkali dress with leggings and heels for a traditional and festive appearance."
    }
  ],
  "Average Average": [
    {
      "top": "Crop top",
      "bottom": "High-waisted skirt",
      "shoes": "Heels",
      "description": "A crop top paired with a high-waisted skirt and heels for a chic and stylish holiday party outfit."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Pencil skirt",
      "shoes": "Booties",
      "description": "A chiffon blouse with a pencil skirt and booties for an elegant and trendy look."
    },
    {
      "top": "Kurta",
      "bottom": "Palazzo pants",
      "shoes": "Sandals",
      "description": "A kurta with palazzo pants and sandals for a comfortable and traditional appearance."
    }
  ],
  "Chubby Short": [
    {
      "top": "Sequin blouse",
      "bottom": "Midi skirt",
      "shoes": "Heels",
      "description": "A sequin blouse with a midi skirt and heels for a sparkling and festive holiday party outfit."
    },
    {
      "top": "Velvet top",
      "bottom": "Palazzo pants",
      "shoes": "Booties",
      "description": "A velvet top paired with palazzo pants and booties for a luxurious and stylish look."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Churidar",
      "shoes": "Sandals",
      "description": "An embroidered kurti with churidar and sandals for a traditional and festive appearance."
    }
  ],
  "Chubby Tall": [
    {
      "top": "Off-shoulder top",
      "bottom": "A-line skirt",
      "shoes": "Heels",
      "description": "An off-shoulder top with an A-line skirt and heels for an elegant and trendy holiday outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Wide-leg trousers",
      "shoes": "Flats",
      "description": "A silk blouse paired with wide-leg trousers and flats for a sophisticated and comfortable look."
    },
    {
      "top": "Anarkali dress",
      "bottom": "Leggings",
      "shoes": "Heels",
      "description": "An Anarkali dress with leggings and heels for a traditional and festive appearance."
    }
  ],
  "Chubby Average": [
    {
      "top": "Crop top",
      "bottom": "High-waisted skirt",
      "shoes": "Heels",
      "description": "A crop top paired with a high-waisted skirt and heels for a chic and stylish holiday party outfit."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Pencil skirt",
      "shoes": "Booties",
      "description": "A chiffon blouse with a pencil skirt and booties for an elegant and trendy look."
    },
    {
      "top": "Kurta",
      "bottom": "Palazzo pants",
      "shoes": "Sandals",
      "description": "A kurta with palazzo pants and sandals for a comfortable and traditional appearance."
    }
  ],
  "Overweight Short": [
    {
      "top": "Sequin blouse",
      "bottom": "Midi skirt",
      "shoes": "Heels",
      "description": "A sequin blouse with a midi skirt and heels for a sparkling and festive holiday party outfit."
    },
    {
      "top": "Velvet top",
      "bottom": "Palazzo pants",
      "shoes": "Booties",
      "description": "A velvet top paired with palazzo pants and booties for a luxurious and stylish look."
    },
    {
      "top": "Embroidered kurti",
      "bottom": "Churidar",
      "shoes": "Sandals",
      "description": "An embroidered kurti with churidar and sandals for a traditional and festive appearance."
    }
  ],
  "Overweight Tall": [
    {
      "top": "Off-shoulder top",
      "bottom": "A-line skirt",
      "shoes": "Heels",
      "description": "An off-shoulder top with an A-line skirt and heels for an elegant and trendy holiday outfit."
    },
    {
      "top": "Silk blouse",
      "bottom": "Wide-leg trousers",
      "shoes": "Flats",
      "description": "A silk blouse paired with wide-leg trousers and flats for a sophisticated and comfortable look."
    },
    {
      "top": "Anarkali dress",
      "bottom": "Leggings",
      "shoes": "Heels",
      "description": "An Anarkali dress with leggings and heels for a traditional and festive appearance."
    }
  ],
  "Overweight Average": [
    {
      "top": "Crop top",
      "bottom": "High-waisted skirt",
      "shoes": "Heels",
      "description": "A crop top paired with a high-waisted skirt and heels for a chic and stylish holiday party outfit."
    },
    {
      "top": "Chiffon blouse",
      "bottom": "Pencil skirt",
      "shoes": "Booties",
      "description": "A chiffon blouse with a pencil skirt and booties for an elegant and trendy look."
    },
    {
      "top": "Kurta",
      "bottom": "Palazzo pants",
      "shoes": "Sandals",
      "description": "A kurta with palazzo pants and sandals for a comfortable and traditional appearance."
    }
  ]
    },
    "Casual Outings": {
      "Skinny Short": [
        {
          top: "T-shirt",
          bottom: "Jeans",
          shoes: "Sneakers",
          description: "A comfortable T-shirt with jeans and sneakers for a casual day out."
        },
        {
          top: "Tank top",
          bottom: "Shorts",
          shoes: "Flip-flops",
          description: "A tank top with shorts and flip-flops for a relaxed and casual look."
        },
        {
          top: "Crop top",
          bottom: "High-waisted pants",
          shoes: "Sandals",
          description: "A crop top with high-waisted pants and sandals for a stylish yet casual outfit."
        }
      ],
      "Skinny Tall": [
        {
          top: "Button-down shirt",
          bottom: "Skinny jeans",
          shoes: "Loafers",
          description: "A button-down shirt with skinny jeans and loafers for a sleek casual look."
        },
        {
          top: "Peplum top",
          bottom: "Leggings",
          shoes: "Ankle boots",
          description: "A peplum top with leggings and ankle boots for a chic casual outfit."
        },
        {
          top: "Tank top",
          bottom: "Maxi skirt",
          shoes: "Sandals",
          description: "A tank top with a maxi skirt and sandals for a comfortable yet stylish look."
        }
      ],
      "Skinny Average": [
        {
          top: "Blouse",
          bottom: "Culottes",
          shoes: "Ballet flats",
          description: "A blouse with culottes and ballet flats for a relaxed and fashionable casual look."
        },
        {
          top: "Crop top",
          bottom: "Palazzo pants",
          shoes: "Sandals",
          description: "A crop top with palazzo pants and sandals for an easy-going outfit."
        },
        {
          top: "Graphic tee",
          bottom: "High-waisted shorts",
          shoes: "Sneakers",
          description: "A graphic tee with high-waisted shorts and sneakers for a fun and casual look."
        }
      ],
      "Lean Short": [
        {
          top: "Off-shoulder top",
          bottom: "Jeans",
          shoes: "Sneakers",
          description: "An off-shoulder top with jeans and sneakers for a trendy casual outfit."
        },
        {
          top: "V-neck tee",
          bottom: "Skirt",
          shoes: "Sandals",
          description: "A V-neck tee with a skirt and sandals for a simple and stylish look."
        },
        {
          top: "Tank top",
          bottom: "Joggers",
          shoes: "Slip-ons",
          description: "A tank top with joggers and slip-ons for a comfortable casual look."
        }
      ],
      "Lean Tall": [
        {
          top: "Knit top",
          bottom: "Skinny jeans",
          shoes: "Boots",
          description: "A knit top with skinny jeans and boots for a fashionable casual look."
        },
        {
          top: "Tunic",
          bottom: "Leggings",
          shoes: "Sandals",
          description: "A tunic with leggings and sandals for a comfortable yet stylish outfit."
        },
        {
          top: "Sweatshirt",
          bottom: "Shorts",
          shoes: "Sneakers",
          description: "A sweatshirt with shorts and sneakers for a relaxed casual look."
        }
      ],
      "Lean Average": [
        {
          top: "Crop sweater",
          bottom: "High-waisted jeans",
          shoes: "Ankle boots",
          description: "A crop sweater with high-waisted jeans and ankle boots for a chic casual outfit."
        },
        {
          top: "Tank top",
          bottom: "Flared pants",
          shoes: "Sandals",
          description: "A tank top with flared pants and sandals for a comfortable casual look."
        },
        {
          top: "Peplum blouse",
          bottom: "Capri pants",
          shoes: "Flats",
          description: "A peplum blouse with capri pants and flats for a stylish casual outfit."
        }
      ],
      "Lean Muscular Short": [
        {
          top: "Fitted tee",
          bottom: "Cargo pants",
          shoes: "Sneakers",
          description: "A fitted tee with cargo pants and sneakers for a sporty casual look."
        },
        {
          top: "Halter top",
          bottom: "Jeans",
          shoes: "Sandals",
          description: "A halter top with jeans and sandals for a stylish casual outfit."
        },
        {
          top: "Sweater",
          bottom: "Joggers",
          shoes: "Slip-ons",
          description: "A sweater with joggers and slip-ons for a comfortable casual look."
        }
      ],
      "Lean Muscular Tall": [
        {
          top: "Blazer",
          bottom: "Skinny jeans",
          shoes: "Loafers",
          description: "A blazer with skinny jeans and loafers for a polished casual look."
        },
        {
          top: "Tank top",
          bottom: "Shorts",
          shoes: "Sneakers",
          description: "A tank top with shorts and sneakers for a sporty casual outfit."
        },
        {
          top: "Turtleneck",
          bottom: "Leggings",
          shoes: "Boots",
          description: "A turtleneck with leggings and boots for a fashionable casual look."
        }
      ],
      "Lean Muscular Average": [
        {
          top: "Button-down shirt",
          bottom: "Capri pants",
          shoes: "Flats",
          description: "A button-down shirt with capri pants and flats for a comfortable casual outfit."
        },
        {
          top: "Tank top",
          bottom: "Joggers",
          shoes: "Sneakers",
          description: "A tank top with joggers and sneakers for a sporty casual look."
        },
        {
          top: "Sweater",
          bottom: "Jeans",
          shoes: "Boots",
          description: "A sweater with jeans and boots for a stylish casual outfit."
        }
      ],
      "Average Short": [
        {
          top: "T-shirt",
          bottom: "Shorts",
          shoes: "Sandals",
          description: "A T-shirt with shorts and sandals for a relaxed casual look."
        },
        {
          top: "Blouse",
          bottom: "Jeans",
          shoes: "Flats",
          description: "A blouse with jeans and flats for a comfortable casual outfit."
        },
        {
          top: "Tank top",
          bottom: "Culottes",
          shoes: "Sneakers",
          description: "A tank top with culottes and sneakers for a trendy casual look."
        }
      ],
      "Average Tall": [
        {
          top: "Button-down shirt",
          bottom: "Jeans",
          shoes: "Loafers",
          description: "A button-down shirt with jeans and loafers for a polished casual look."
        },
        {
          top: "Crop top",
          bottom: "Maxi skirt",
          shoes: "Sandals",
          description: "A crop top with a maxi skirt and sandals for a stylish casual outfit."
        },
        {
          top: "Sweatshirt",
          bottom: "Leggings",
          shoes: "Sneakers",
          description: "A sweatshirt with leggings and sneakers for a comfortable casual look."
        }
      ],
      "Average Average": [
        {
          top: "V-neck tee",
          bottom: "Jeans",
          shoes: "Flats",
          description: "A V-neck tee with jeans and flats for a relaxed casual outfit."
        },
        {
          top: "Blouse",
          bottom: "Capri pants",
          shoes: "Sandals",
          description: "A blouse with capri pants and sandals for a comfortable casual look."
        },
        {
          top: "Tank top",
          bottom: "Skirt",
          shoes: "Sneakers",
          description: "A tank top with a skirt and sneakers for a fun casual outfit."
        }
      ],
      "Chubby Short": [
        {
          top: "Tunic",
          bottom: "Leggings",
          shoes: "Flats",
          description: "A tunic with leggings and flats for a comfortable casual look."
        },
        {
          top: "Blouse",
          bottom: "Jeans",
          shoes: "Sandals",
          description: "A blouse with jeans and sandals for a relaxed casual outfit."
        },
        {
          top: "Sweater",
          bottom: "Joggers",
          shoes: "Sneakers",
          description: "A sweater with joggers and sneakers for a sporty casual look."
        }
      ],
      "Chubby Tall": [
        {
          top: "Button-down shirt",
          bottom: "Leggings",
          shoes: "Loafers",
          description: "A button-down shirt with leggings and loafers for a stylish casual look."
        },
        {
          top: "Tank top",
          bottom: "Jeans",
          shoes: "Sneakers",
          description: "A tank top with jeans and sneakers for a relaxed casual outfit."
        },
        {
          top: "Crop top",
          bottom: "Skirt",
          shoes: "Sandals",
          description: "A crop top with a skirt and sandals for a fun casual look."
        }
      ],
      "Chubby Average": [
        {
          top: "T-shirt",
          bottom: "Jeans",
          shoes: "Sneakers",
          description: "A T-shirt with jeans and sneakers for a comfortable casual outfit."
        },
        {
          top: "Blouse",
          bottom: "Culottes",
          shoes: "Flats",
          description: "A blouse with culottes and flats for a relaxed casual look."
        },
        {
          top: "Sweater",
          bottom: "Leggings",
          shoes: "Boots",
          description: "A sweater with leggings and boots for a stylish casual outfit."
        }
      ],
      "Overweight Short": [
        {
          top: "Tunic",
          bottom: "Leggings",
          shoes: "Flats",
          description: "A tunic with leggings and flats for a comfortable casual outfit."
        },
        {
          top: "Blouse",
          bottom: "Jeans",
          shoes: "Sneakers",
          description: "A blouse with jeans and sneakers for a relaxed casual look."
        },
        {
          top: "Tank top",
          bottom: "Culottes",
          shoes: "Sandals",
          description: "A tank top with culottes and sandals for a fun casual look."
        }
      ],
      "Overweight Tall": [
        {
          top: "Button-down shirt",
          bottom: "Jeans",
          shoes: "Loafers",
          description: "A button-down shirt with jeans and loafers for a stylish casual outfit."
        },
        {
          top: "Blouse",
          bottom: "Leggings",
          shoes: "Flats",
          description: "A blouse with leggings and flats for a comfortable casual look."
        },
        {
          top: "Sweater",
          bottom: "Skirt",
          shoes: "Boots",
          description: "A sweater with a skirt and boots for a chic casual look."
        }
      ],
      "Overweight Average": [
        {
          top: "T-shirt",
          bottom: "Joggers",
          shoes: "Sneakers",
          description: "A T-shirt with joggers and sneakers for a sporty casual outfit."
        },
        {
          top: "Blouse",
          bottom: "Jeans",
          shoes: "Sandals",
          description: "A blouse with jeans and sandals for a comfortable casual look."
        },
        {
          top: "Tank top",
          bottom: "Leggings",
          shoes: "Flats",
          description: "A tank top with leggings and flats for a relaxed casual look."
        }
      ]
    },
    "Formal Dinners": {
      "Skinny Short": [
        {
          top: "Blouse",
          bottom: "Pencil skirt",
          shoes: "Heels",
          description: "A blouse with a pencil skirt and heels for a sophisticated formal dinner look."
        },
        {
          top: "Peplum top",
          bottom: "Slim trousers",
          shoes: "Stilettos",
          description: "A peplum top with slim trousers and stilettos for an elegant outfit."
        },
        {
          top: "Wrap dress",
          bottom: "",
          shoes: "Heels",
          description: "A wrap dress with heels for a chic formal dinner outfit."
        }
      ],
      "Skinny Tall": [
        {
          top: "Silk blouse",
          bottom: "Wide-leg pants",
          shoes: "Heels",
          description: "A silk blouse with wide-leg pants and heels for a sophisticated look."
        },
        {
          top: "Lace top",
          bottom: "Midi skirt",
          shoes: "Stilettos",
          description: "A lace top with a midi skirt and stilettos for a classy outfit."
        },
        {
          top: "Cocktail dress",
          bottom: "",
          shoes: "Heels",
          description: "A cocktail dress with heels for a formal dinner."
        }
      ],
      "Skinny Average": [
        {
          top: "Chiffon blouse",
          bottom: "A-line skirt",
          shoes: "Heels",
          description: "A chiffon blouse with an A-line skirt and heels for a stylish formal look."
        },
        {
          top: "Bardot top",
          bottom: "Slim trousers",
          shoes: "Stilettos",
          description: "A Bardot top with slim trousers and stilettos for an elegant outfit."
        },
        {
          top: "Fit and flare dress",
          bottom: "",
          shoes: "Heels",
          description: "A fit and flare dress with heels for a formal dinner."
        }
      ],
      "Lean Short": [
        {
          top: "Off-shoulder top",
          bottom: "Pencil skirt",
          shoes: "Heels",
          description: "An off-shoulder top with a pencil skirt and heels for a chic formal dinner look."
        },
        {
          top: "Blouse",
          bottom: "Culottes",
          shoes: "Stilettos",
          description: "A blouse with culottes and stilettos for an elegant outfit."
        },
        {
          top: "Wrap dress",
          bottom: "",
          shoes: "Heels",
          description: "A wrap dress with heels for a formal dinner."
        }
      ],
      "Lean Tall": [
        {
          top: "Silk camisole",
          bottom: "Wide-leg pants",
          shoes: "Heels",
          description: "A silk camisole with wide-leg pants and heels for a sophisticated look."
        },
        {
          top: "Blouse",
          bottom: "Midi skirt",
          shoes: "Stilettos",
          description: "A blouse with a midi skirt and stilettos for a classy outfit."
        },
        {
          top: "Cocktail dress",
          bottom: "",
          shoes: "Heels",
          description: "A cocktail dress with heels for a formal dinner."
        }
      ],
      "Lean Average": [
        {
          top: "Peplum top",
          bottom: "Slim trousers",
          shoes: "Heels",
          description: "A peplum top with slim trousers and heels for a stylish formal look."
        },
        {
          top: "Chiffon blouse",
          bottom: "A-line skirt",
          shoes: "Stilettos",
          description: "A chiffon blouse with an A-line skirt and stilettos for an elegant outfit."
        },
        {
          top: "Fit and flare dress",
          bottom: "",
          shoes: "Heels",
          description: "A fit and flare dress with heels for a formal dinner."
        }
      ],
      "Lean Muscular Short": [
        {
          top: "Blouse",
          bottom: "Pencil skirt",
          shoes: "Heels",
          description: "A blouse with a pencil skirt and heels for a sophisticated formal dinner look."
        },
        {
          top: "Peplum top",
          bottom: "Slim trousers",
          shoes: "Stilettos",
          description: "A peplum top with slim trousers and stilettos for an elegant outfit."
        },
        {
          top: "Wrap dress",
          bottom: "",
          shoes: "Heels",
          description: "A wrap dress with heels for a formal dinner."
        }
      ],
      "Lean Muscular Tall": [
        {
          top: "Silk blouse",
          bottom: "Wide-leg pants",
          shoes: "Heels",
          description: "A silk blouse with wide-leg pants and heels for a sophisticated look."
        },
        {
          top: "Lace top",
          bottom: "Midi skirt",
          shoes: "Stilettos",
          description: "A lace top with a midi skirt and stilettos for a classy outfit."
        },
        {
          top: "Cocktail dress",
          bottom: "",
          shoes: "Heels",
          description: "A cocktail dress with heels for a formal dinner."
        }
      ],
      "Lean Muscular Average": [
        {
          top: "Chiffon blouse",
          bottom: "A-line skirt",
          shoes: "Heels",
          description: "A chiffon blouse with an A-line skirt and heels for a stylish formal look."
        },
        {
          top: "Bardot top",
          bottom: "Slim trousers",
          shoes: "Stilettos",
          description: "A Bardot top with slim trousers and stilettos for an elegant outfit."
        },
        {
          top: "Fit and flare dress",
          bottom: "",
          shoes: "Heels",
          description: "A fit and flare dress with heels for a formal dinner."
        }
      ],
      "Average Short": [
        {
          top: "Off-shoulder top",
          bottom: "Pencil skirt",
          shoes: "Heels",
          description: "An off-shoulder top with a pencil skirt and heels for a chic formal dinner look."
        },
        {
          top: "Blouse",
          bottom: "Culottes",
          shoes: "Stilettos",
          description: "A blouse with culottes and stilettos for an elegant outfit."
        },
        {
          top: "Wrap dress",
          bottom: "",
          shoes: "Heels",
          description: "A wrap dress with heels for a formal dinner."
        }
      ],
      "Average Tall": [
        {
          top: "Silk camisole",
          bottom: "Wide-leg pants",
          shoes: "Heels",
          description: "A silk camisole with wide-leg pants and heels for a sophisticated look."
        },
        {
          top: "Blouse",
          bottom: "Midi skirt",
          shoes: "Stilettos",
          description: "A blouse with a midi skirt and stilettos for a classy outfit."
        },
        {
          top: "Cocktail dress",
          bottom: "",
          shoes: "Heels",
          description: "A cocktail dress with heels for a formal dinner."
        }
      ],
      "Average Average": [
        {
          top: "Peplum top",
          bottom: "Slim trousers",
          shoes: "Heels",
          description: "A peplum top with slim trousers and heels for a stylish formal look."
        },
        {
          top: "Chiffon blouse",
          bottom: "A-line skirt",
          shoes: "Stilettos",
          description: "A chiffon blouse with an A-line skirt and stilettos for an elegant outfit."
        },
        {
          top: "Fit and flare dress",
          bottom: "",
          shoes: "Heels",
          description: "A fit and flare dress with heels for a formal dinner."
        }
      ],
      "Chubby Short": [
        {
          top: "Blouse",
          bottom: "Pencil skirt",
          shoes: "Heels",
          description: "A blouse with a pencil skirt and heels for a sophisticated formal dinner look."
        },
        {
          top: "Peplum top",
          bottom: "Slim trousers",
          shoes: "Stilettos",
          description: "A peplum top with slim trousers and stilettos for an elegant outfit."
        },
        {
          top: "Wrap dress",
          bottom: "",
          shoes: "Heels",
          description: "A wrap dress with heels for a formal dinner."
        }
      ],
      "Chubby Tall": [
        {
          top: "Silk blouse",
          bottom: "Wide-leg pants",
          shoes: "Heels",
          description: "A silk blouse with wide-leg pants and heels for a sophisticated look."
        },
        {
          top: "Lace top",
          bottom: "Midi skirt",
          shoes: "Stilettos",
          description: "A lace top with a midi skirt and stilettos for a classy outfit."
        },
        {
          top: "Cocktail dress",
          bottom: "",
          shoes: "Heels",
          description: "A cocktail dress with heels for a formal dinner."
        }
      ],
      "Chubby Average": [
        {
          top: "Chiffon blouse",
          bottom: "A-line skirt",
          shoes: "Heels",
          description: "A chiffon blouse with an A-line skirt and heels for a stylish formal look."
        },
        {
          top: "Bardot top",
          bottom: "Slim trousers",
          shoes: "Stilettos",
          description: "A Bardot top with slim trousers and stilettos for an elegant outfit."
        },
        {
          top: "Fit and flare dress",
          bottom: "",
          shoes: "Heels",
          description: "A fit and flare dress with heels for a formal dinner."
        }
      ],
      "Overweight Short": [
        {
          top: "Blouse",
          bottom: "Pencil skirt",
          shoes: "Heels",
          description: "A blouse with a pencil skirt and heels for a sophisticated formal dinner look."
        },
        {
          top: "Peplum top",
          bottom: "Slim trousers",
          shoes: "Stilettos",
          description: "A peplum top with slim trousers and stilettos for an elegant outfit."
        },
        {
          top: "Wrap dress",
          bottom: "",
          shoes: "Heels",
          description: "A wrap dress with heels for a formal dinner."
        }
      ],
      "Overweight Tall": [
        {
          top: "Silk blouse",
          bottom: "Wide-leg pants",
          shoes: "Heels",
          description: "A silk blouse with wide-leg pants and heels for a sophisticated look."
        },
        {
          top: "Lace top",
          bottom: "Midi skirt",
          shoes: "Stilettos",
          description: "A lace top with a midi skirt and stilettos for a classy outfit."
        },
        {
          top: "Cocktail dress",
          bottom: "",
          shoes: "Heels",
          description: "A cocktail dress with heels for a formal dinner."
        }
      ],
      "Overweight Average": [
        {
          top: "Chiffon blouse",
          bottom: "A-line skirt",
          shoes: "Heels",
          description: "A chiffon blouse with an A-line skirt and heels for a stylish formal look."
        },
        {
          top: "Bardot top",
          bottom: "Slim trousers",
          shoes: "Stilettos",
          description: "A Bardot top with slim trousers and stilettos for an elegant outfit."
        },
        {
          top: "Fit and flare dress",
          bottom: "",
          shoes: "Heels",
          description: "A fit and flare dress with heels for a formal dinner."
        }
      ]
    },
    "Beach Vacations": {
      "Skinny Short": [
        {
          top: "Bikini top",
          bottom: "Shorts",
          shoes: "Flip-flops",
          description: "A bikini top with shorts and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach skirt",
          shoes: "Sandals",
          description: "A tank top with a beach skirt and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Skinny Tall": [
        {
          top: "Bikini top",
          bottom: "Sarong",
          shoes: "Flip-flops",
          description: "A bikini top with a sarong and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach shorts",
          shoes: "Sandals",
          description: "A tank top with beach shorts and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Skinny Average": [
        {
          top: "Bikini top",
          bottom: "Beach skirt",
          shoes: "Flip-flops",
          description: "A bikini top with a beach skirt and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach pants",
          shoes: "Sandals",
          description: "A tank top with beach pants and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Lean Short": [
        {
          top: "Bikini top",
          bottom: "Shorts",
          shoes: "Flip-flops",
          description: "A bikini top with shorts and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach skirt",
          shoes: "Sandals",
          description: "A tank top with a beach skirt and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Lean Tall": [
        {
          top: "Bikini top",
          bottom: "Sarong",
          shoes: "Flip-flops",
          description: "A bikini top with a sarong and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach shorts",
          shoes: "Sandals",
          description: "A tank top with beach shorts and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Lean Average": [
        {
          top: "Bikini top",
          bottom: "Beach skirt",
          shoes: "Flip-flops",
          description: "A bikini top with a beach skirt and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach pants",
          shoes: "Sandals",
          description: "A tank top with beach pants and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Lean Muscular Short": [
        {
          top: "Bikini top",
          bottom: "Shorts",
          shoes: "Flip-flops",
          description: "A bikini top with shorts and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach skirt",
          shoes: "Sandals",
          description: "A tank top with a beach skirt and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Lean Muscular Tall": [
        {
          top: "Bikini top",
          bottom: "Sarong",
          shoes: "Flip-flops",
          description: "A bikini top with a sarong and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach shorts",
          shoes: "Sandals",
          description: "A tank top with beach shorts and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Lean Muscular Average": [
        {
          top: "Bikini top",
          bottom: "Beach skirt",
          shoes: "Flip-flops",
          description: "A bikini top with a beach skirt and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach pants",
          shoes: "Sandals",
          description: "A tank top with beach pants and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Average Short": [
        {
          top: "Bikini top",
          bottom: "Shorts",
          shoes: "Flip-flops",
          description: "A bikini top with shorts and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach skirt",
          shoes: "Sandals",
          description: "A tank top with a beach skirt and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Average Tall": [
        {
          top: "Bikini top",
          bottom: "Sarong",
          shoes: "Flip-flops",
          description: "A bikini top with a sarong and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach shorts",
          shoes: "Sandals",
          description: "A tank top with beach shorts and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Average Average": [
        {
          top: "Bikini top",
          bottom: "Beach skirt",
          shoes: "Flip-flops",
          description: "A bikini top with a beach skirt and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach pants",
          shoes: "Sandals",
          description: "A tank top with beach pants and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Chubby Short": [
        {
          top: "Bikini top",
          bottom: "Shorts",
          shoes: "Flip-flops",
          description: "A bikini top with shorts and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach skirt",
          shoes: "Sandals",
          description: "A tank top with a beach skirt and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Chubby Tall": [
        {
          top: "Bikini top",
          bottom: "Sarong",
          shoes: "Flip-flops",
          description: "A bikini top with a sarong and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach shorts",
          shoes: "Sandals",
          description: "A tank top with beach shorts and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Chubby Average": [
        {
          top: "Bikini top",
          bottom: "Beach skirt",
          shoes: "Flip-flops",
          description: "A bikini top with a beach skirt and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach pants",
          shoes: "Sandals",
          description: "A tank top with beach pants and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Overweight Short": [
        {
          top: "Bikini top",
          bottom: "Shorts",
          shoes: "Flip-flops",
          description: "A bikini top with shorts and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach skirt",
          shoes: "Sandals",
          description: "A tank top with a beach skirt and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Overweight Tall": [
        {
          top: "Bikini top",
          bottom: "Sarong",
          shoes: "Flip-flops",
          description: "A bikini top with a sarong and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach shorts",
          shoes: "Sandals",
          description: "A tank top with beach shorts and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ],
      "Overweight Average": [
        {
          top: "Bikini top",
          bottom: "Beach skirt",
          shoes: "Flip-flops",
          description: "A bikini top with a beach skirt and flip-flops for a relaxed beach vacation look."
        },
        {
          top: "Tank top",
          bottom: "Beach pants",
          shoes: "Sandals",
          description: "A tank top with beach pants and sandals for a casual beach look."
        },
        {
          top: "Cover-up",
          bottom: "Swimsuit",
          shoes: "Flip-flops",
          description: "A cover-up over a swimsuit and flip-flops for a comfortable beach outfit."
        }
      ]
    },
    "Concerts Or Music Festivals": {
      "Skinny Short": [
        {
          top: "Crop top",
          bottom: "Denim shorts",
          shoes: "Sneakers",
          description: "A crop top with denim shorts and sneakers for a cool concert look."
        },
        {
          top: "Graphic tee",
          bottom: "Mini skirt",
          shoes: "Boots",
          description: "A graphic tee with a mini skirt and boots for a stylish festival outfit."
        },
        {
          top: "Tank top",
          bottom: "Jogger pants",
          shoes: "Sandals",
          description: "A tank top with jogger pants and sandals for a comfy concert look."
        }
      ],
      "Skinny Tall": [
        {
          top: "Halter top",
          bottom: "High-waisted shorts",
          shoes: "Sneakers",
          description: "A halter top with high-waisted shorts and sneakers for a trendy concert outfit."
        },
        {
          top: "Band tee",
          bottom: "Distressed jeans",
          shoes: "Boots",
          description: "A band tee with distressed jeans and boots for a rock concert look."
        },
        {
          top: "Tank top",
          bottom: "Flowy pants",
          shoes: "Sandals",
          description: "A tank top with flowy pants and sandals for a relaxed festival look."
        }
      ],
      "Skinny Average": [
        {
          top: "Tank top",
          bottom: "Shorts",
          shoes: "Sneakers",
          description: "A tank top with shorts and sneakers for a classic concert outfit."
        },
        {
          top: "Graphic tee",
          bottom: "Jeans",
          shoes: "Boots",
          description: "A graphic tee with jeans and boots for a comfortable festival look."
        },
        {
          top: "Off-shoulder top",
          bottom: "Maxi skirt",
          shoes: "Sandals",
          description: "An off-shoulder top with a maxi skirt and sandals for a boho concert look."
        }
      ],
      "Lean Short": [
        {
          top: "Crop top",
          bottom: "Denim shorts",
          shoes: "Sneakers",
          description: "A crop top with denim shorts and sneakers for a cool concert look."
        },
        {
          top: "Graphic tee",
          bottom: "Mini skirt",
          shoes: "Boots",
          description: "A graphic tee with a mini skirt and boots for a stylish festival outfit."
        },
        {
          top: "Tank top",
          bottom: "Jogger pants",
          shoes: "Sandals",
          description: "A tank top with jogger pants and sandals for a comfy concert look."
        }
      ],
      "Lean Tall": [
        {
          top: "Halter top",
          bottom: "High-waisted shorts",
          shoes: "Sneakers",
          description: "A halter top with high-waisted shorts and sneakers for a trendy concert outfit."
        },
        {
          top: "Band tee",
          bottom: "Distressed jeans",
          shoes: "Boots",
          description: "A band tee with distressed jeans and boots for a rock concert look."
        },
        {
          top: "Tank top",
          bottom: "Flowy pants",
          shoes: "Sandals",
          description: "A tank top with flowy pants and sandals for a relaxed festival look."
        }
      ],
      "Lean Average": [
        {
          top: "Tank top",
          bottom: "Shorts",
          shoes: "Sneakers",
          description: "A tank top with shorts and sneakers for a classic concert outfit."
        },
        {
          top: "Graphic tee",
          bottom: "Jeans",
          shoes: "Boots",
          description: "A graphic tee with jeans and boots for a comfortable festival look."
        },
        {
          top: "Off-shoulder top",
          bottom: "Maxi skirt",
          shoes: "Sandals",
          description: "An off-shoulder top with a maxi skirt and sandals for a boho concert look."
        }
      ],
      "Lean Muscular Short": [
        {
          top: "Crop top",
          bottom: "Denim shorts",
          shoes: "Sneakers",
          description: "A crop top with denim shorts and sneakers for a cool concert look."
        },
        {
          top: "Graphic tee",
          bottom: "Mini skirt",
          shoes: "Boots",
          description: "A graphic tee with a mini skirt and boots for a stylish festival outfit."
        },
        {
          top: "Tank top",
          bottom: "Jogger pants",
          shoes: "Sandals",
          description: "A tank top with jogger pants and sandals for a comfy concert look."
        }
      ],
      "Lean Muscular Tall": [
        {
          top: "Halter top",
          bottom: "High-waisted shorts",
          shoes: "Sneakers",
          description: "A halter top with high-waisted shorts and sneakers for a trendy concert outfit."
        },
        {
          top: "Band tee",
          bottom: "Distressed jeans",
          shoes: "Boots",
          description: "A band tee with distressed jeans and boots for a rock concert look."
        },
        {
          top: "Tank top",
          bottom: "Flowy pants",
          shoes: "Sandals",
          description: "A tank top with flowy pants and sandals for a relaxed festival look."
        }
      ],
      "Lean Muscular Average": [
        {
          top: "Tank top",
          bottom: "Shorts",
          shoes: "Sneakers",
          description: "A tank top with shorts and sneakers for a classic concert outfit."
        },
        {
          top: "Graphic tee",
          bottom: "Jeans",
          shoes: "Boots",
          description: "A graphic tee with jeans and boots for a comfortable festival look."
        },
        {
          top: "Off-shoulder top",
          bottom: "Maxi skirt",
          shoes: "Sandals",
          description: "An off-shoulder top with a maxi skirt and sandals for a boho concert look."
        }
      ],
      "Average Short": [
        {
          top: "Crop top",
          bottom: "Denim shorts",
          shoes: "Sneakers",
          description: "A crop top with denim shorts and sneakers for a cool concert look."
        },
        {
          top: "Graphic tee",
          bottom: "Mini skirt",
          shoes: "Boots",
          description: "A graphic tee with a mini skirt and boots for a stylish festival outfit."
        },
        {
          top: "Tank top",
          bottom: "Jogger pants",
          shoes: "Sandals",
          description: "A tank top with jogger pants and sandals for a comfy concert look."
        }
      ],
      "Average Tall": [
        {
          top: "Halter top",
          bottom: "High-waisted shorts",
          shoes: "Sneakers",
          description: "A halter top with high-waisted shorts and sneakers for a trendy concert outfit."
        },
        {
          top: "Band tee",
          bottom: "Distressed jeans",
          shoes: "Boots",
          description: "A band tee with distressed jeans and boots for a rock concert look."
        },
        {
          top: "Tank top",
          bottom: "Flowy pants",
          shoes: "Sandals",
          description: "A tank top with flowy pants and sandals for a relaxed festival look."
        }
      ],
      "Average Average": [
        {
          top: "Tank top",
          bottom: "Shorts",
          shoes: "Sneakers",
          description: "A tank top with shorts and sneakers for a classic concert outfit."
        },
        {
          top: "Graphic tee",
          bottom: "Jeans",
          shoes: "Boots",
          description: "A graphic tee with jeans and boots for a comfortable festival look."
        },
        {
          top: "Off-shoulder top",
          bottom: "Maxi skirt",
          shoes: "Sandals",
          description: "An off-shoulder top with a maxi skirt and sandals for a boho concert look."
        }
      ],
      "Chubby Short": [
        {
          top: "Crop top",
          bottom: "Denim shorts",
          shoes: "Sneakers",
          description: "A crop top with denim shorts and sneakers for a cool concert look."
        },
        {
          top: "Graphic tee",
          bottom: "Mini skirt",
          shoes: "Boots",
          description: "A graphic tee with a mini skirt and boots for a stylish festival outfit."
        },
        {
          top: "Tank top",
          bottom: "Jogger pants",
          shoes: "Sandals",
          description: "A tank top with jogger pants and sandals for a comfy concert look."
        }
      ],
      "Chubby Tall": [
        {
          top: "Halter top",
          bottom: "High-waisted shorts",
          shoes: "Sneakers",
          description: "A halter top with high-waisted shorts and sneakers for a trendy concert outfit."
        },
        {
          top: "Band tee",
          bottom: "Distressed jeans",
          shoes: "Boots",
          description: "A band tee with distressed jeans and boots for a rock concert look."
        },
        {
          top: "Tank top",
          bottom: "Flowy pants",
          shoes: "Sandals",
          description: "A tank top with flowy pants and sandals for a relaxed festival look."
        }
      ],
      "Chubby Average": [
        {
          top: "Tank top",
          bottom: "Shorts",
          shoes: "Sneakers",
          description: "A tank top with shorts and sneakers for a classic concert outfit."
        },
        {
          top: "Graphic tee",
          bottom: "Jeans",
          shoes: "Boots",
          description: "A graphic tee with jeans and boots for a comfortable festival look."
        },
        {
          top: "Off-shoulder top",
          bottom: "Maxi skirt",
          shoes: "Sandals",
          description: "An off-shoulder top with a maxi skirt and sandals for a boho concert look."
        }
      ],
      "Overweight Short": [
        {
          top: "Crop top",
          bottom: "Denim shorts",
          shoes: "Sneakers",
          description: "A crop top with denim shorts and sneakers for a cool concert look."
        },
        {
          top: "Graphic tee",
          bottom: "Mini skirt",
          shoes: "Boots",
          description: "A graphic tee with a mini skirt and boots for a stylish festival outfit."
        },
        {
          top: "Tank top",
          bottom: "Jogger pants",
          shoes: "Sandals",
          description: "A tank top with jogger pants and sandals for a comfy concert look."
        }
      ],
      "Overweight Tall": [
        {
          top: "Halter top",
          bottom: "High-waisted shorts",
          shoes: "Sneakers",
          description: "A halter top with high-waisted shorts and sneakers for a trendy concert outfit."
        },
        {
          top: "Band tee",
          bottom: "Distressed jeans",
          shoes: "Boots",
          description: "A band tee with distressed jeans and boots for a rock concert look."
        },
        {
          top: "Tank top",
          bottom: "Flowy pants",
          shoes: "Sandals",
          description: "A tank top with flowy pants and sandals for a relaxed festival look."
        }
      ],
      "Overweight Average": [
        {
          top: "Tank top",
          bottom: "Shorts",
          shoes: "Sneakers",
          description: "A tank top with shorts and sneakers for a classic concert outfit."
        },
        {
          top: "Graphic tee",
          bottom: "Jeans",
          shoes: "Boots",
          description: "A graphic tee with jeans and boots for a comfortable festival look."
        },
        {
          top: "Off-shoulder top",
          bottom: "Maxi skirt",
          shoes: "Sandals",
          description: "An off-shoulder top with a maxi skirt and sandals for a boho concert look."
        }
      ]
    },
    "Baby Showers": {
      "Skinny Short": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Skinny Tall": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Skinny Average": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Lean Short": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Lean Tall": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Lean Average": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Lean Muscular Short": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Lean Muscular Tall": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Lean Muscular Average": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Average Short": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Average Tall": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Average Average": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Chubby Short": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Chubby Tall": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Chubby Average": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Overweight Short": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Overweight Tall": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ],
      "Overweight Average": [
        {
          top: "Kurtis",
          bottom: "Leggings",
          shoes: "Ballet flats",
          description: "A kurti with leggings and ballet flats for a comfortable baby shower look."
        },
        {
          top: "Anarkali",
          bottom: "Leggings",
          shoes: "Juttis",
          description: "An Anarkali suit with leggings and juttis for an elegant baby shower outfit."
        },
        {
          top: "Maxi dress",
          bottom: "None",
          shoes: "Sandals",
          description: "A maxi dress with sandals for a chic baby shower look."
        }
      ]
    },
    "Bridal Showers": {
      "Skinny Short": [
        {
          "top": "Embroidered kurti",
          "bottom": "Leggings",
          "shoes": "Juttis",
          "description": "An embroidered kurti with leggings and juttis for a charming bridal shower appearance."
        },
        {
          "top": "Chikankari blouse",
          "bottom": "Palazzo pants",
          "shoes": "Sandals",
          "description": "A chikankari blouse with palazzo pants and sandals for a traditional bridal shower look."
        },
        {
          "top": "Peplum top",
          "bottom": "Midi skirt",
          "shoes": "Ballet flats",
          "description": "A peplum top with a midi skirt and ballet flats for a stylish bridal shower outfit."
        }
      ],
      "Skinny Tall": [
        {
          "top": "Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An Anarkali dress with heeled sandals for an elegant bridal shower look."
        },
        {
          "top": "Kurti",
          "bottom": "Churidar",
          "shoes": "Kolhapuris",
          "description": "A kurti with churidar and Kolhapuris for a traditional bridal shower outfit."
        },
        {
          "top": "Maxi dress",
          "bottom": "N/A",
          "shoes": "Wedges",
          "description": "A flowing maxi dress with wedges for a graceful bridal shower appearance."
        }
      ],
      "Skinny Average": [
        {
          "top": "Embellished top",
          "bottom": "A-line skirt",
          "shoes": "Mules",
          "description": "An embellished top with an A-line skirt and mules for a chic bridal shower look."
        },
        {
          "top": "Printed kurti",
          "bottom": "Leggings",
          "shoes": "Juttis",
          "description": "A printed kurti with leggings and juttis for a traditional bridal shower outfit."
        },
        {
          "top": "Peplum top",
          "bottom": "Palazzo pants",
          "shoes": "Sandals",
          "description": "A peplum top with palazzo pants and sandals for a stylish bridal shower appearance."
        }
      ],
      "Lean Short": [
        {
          "top": "Anarkali suit",
          "bottom": "Leggings",
          "shoes": "Heeled sandals",
          "description": "An Anarkali suit with leggings and heeled sandals for an elegant bridal shower look."
        },
        {
          "top": "Choli",
          "bottom": "Lehenga skirt",
          "shoes": "Mojaris",
          "description": "A choli with lehenga skirt and mojaris for a traditional bridal shower outfit."
        },
        {
          "top": "Peplum blouse",
          "bottom": "A-line skirt",
          "shoes": "Ballet flats",
          "description": "A peplum blouse with an A-line skirt and ballet flats for a stylish bridal shower appearance."
        }
      ],
      "Lean Tall": [
        {
          "top": "Kurti",
          "bottom": "Palazzo pants",
          "shoes": "Kolhapuris",
          "description": "A kurti with palazzo pants and Kolhapuris for a traditional bridal shower look."
        },
        {
          "top": "Maxi dress",
          "bottom": "N/A",
          "shoes": "Wedges",
          "description": "A flowing maxi dress with wedges for a graceful bridal shower outfit."
        },
        {
          "top": "Embroidered top",
          "bottom": "A-line skirt",
          "shoes": "Mules",
          "description": "An embroidered top with an A-line skirt and mules for a chic bridal shower appearance."
        }
      ],
      "Lean Average": [
        {
          "top": "Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An Anarkali dress with heeled sandals for an elegant bridal shower look."
        },
        {
          "top": "Printed kurti",
          "bottom": "Churidar",
          "shoes": "Kolhapuris",
          "description": "A printed kurti with churidar and Kolhapuris for a traditional bridal shower outfit."
        },
        {
          "top": "Peplum top",
          "bottom": "Palazzo pants",
          "shoes": "Sandals",
          "description": "A peplum top with palazzo pants and sandals for a stylish bridal shower appearance."
        }
      ],
      "Lean Muscular Short": [
        {
          "top": "Choli",
          "bottom": "Lehenga skirt",
          "shoes": "Mojaris",
          "description": "A choli with lehenga skirt and mojaris for a traditional bridal shower outfit."
        },
        {
          "top": "Kurti",
          "bottom": "Palazzo pants",
          "shoes": "Kolhapuris",
          "description": "A kurti with palazzo pants and Kolhapuris for a traditional bridal shower look."
        },
        {
          "top": "Peplum blouse",
          "bottom": "A-line skirt",
          "shoes": "Ballet flats",
          "description": "A peplum blouse with an A-line skirt and ballet flats for a stylish bridal shower appearance."
        }
      ],
      "Lean Muscular Tall": [
        {
          "top": "Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An Anarkali dress with heeled sandals for an elegant bridal shower look."
        },
        {
          "top": "Maxi dress",
          "bottom": "N/A",
          "shoes": "Wedges",
          "description": "A flowing maxi dress with wedges for a graceful bridal shower outfit."
        },
        {
          "top": "Embroidered top",
          "bottom": "A-line skirt",
          "shoes": "Mules",
          "description": "An embroidered top with an A-line skirt and mules for a chic bridal shower appearance."
        }
      ],
      "Lean Muscular Average": [
        {
          "top": "Kurti",
          "bottom": "Churidar",
          "shoes": "Kolhapuris",
          "description": "A kurti with churidar and Kolhapuris for a traditional bridal shower outfit."
        },
        {
          "top": "Printed peplum top",
          "bottom": "Palazzo pants",
          "shoes": "Sandals",
          "description": "A printed peplum top with palazzo pants and sandals for a stylish bridal shower look."
        },
        {
          "top": "Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An Anarkali dress with heeled sandals for an elegant bridal shower appearance."
        }
      ],
      "Average Short": [
        {
          "top": "Choli",
          "bottom": "Lehenga skirt",
          "shoes": "Mojaris",
          "description": "A choli with lehenga skirt and mojaris for a traditional bridal shower outfit."
        },
        {
          "top": "Kurti",
          "bottom": "Palazzo pants",
          "shoes": "Kolhapuris",
          "description": "A kurti with palazzo pants and Kolhapuris for a traditional bridal shower look."
        },
        {
          "top": "Peplum blouse",
          "bottom": "A-line skirt",
          "shoes": "Ballet flats",
          "description": "A peplum blouse with an A-line skirt and ballet flats for a stylish bridal shower appearance."
        }
      ],
      "Average Tall": [
        {
          "top": "Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An Anarkali dress with heeled sandals for an elegant bridal shower look."
        },
        {
          "top": "Maxi dress",
          "bottom": "N/A",
          "shoes": "Wedges",
          "description": "A flowing maxi dress with wedges for a graceful bridal shower outfit."
        },
        {
          "top": "Embroidered top",
          "bottom": "A-line skirt",
          "shoes": "Mules",
          "description": "An embroidered top with an A-line skirt and mules for a chic bridal shower appearance."
        }
      ],
      "Average Average": [
        {
          "top": "Kurti",
          "bottom": "Churidar",
          "shoes": "Kolhapuris",
          "description": "A kurti with churidar and Kolhapuris for a traditional bridal shower outfit."
        },
        {
          "top": "Printed peplum top",
          "bottom": "Palazzo pants",
          "shoes": "Sandals",
          "description": "A printed peplum top with palazzo pants and sandals for a stylish bridal shower look."
        },
        {
          "top": "Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An Anarkali dress with heeled sandals for an elegant bridal shower appearance."
        }
      ],
      "Chubby Short": [
        {
          "top": "Peplum blouse",
          "bottom": "A-line skirt",
          "shoes": "Ballet flats",
          "description": "A peplum blouse with an A-line skirt and ballet flats for a stylish bridal shower appearance."
        },
        {
          "top": "Chikankari kurti",
          "bottom": "Leggings",
          "shoes": "Sandals",
          "description": "A chikankari kurti with leggings and sandals for a traditional bridal shower outfit."
        },
        {
          "top": "Embellished top",
          "bottom": "Palazzo pants",
          "shoes": "Kolhapuris",
          "description": "An embellished top with palazzo pants and Kolhapuris for a stylish bridal shower look."
        }
      ],
      "Chubby Tall": [
        {
          "top": "Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An Anarkali dress with heeled sandals for an elegant bridal shower look."
        },
        {
          "top": "Maxi dress",
          "bottom": "N/A",
          "shoes": "Wedges",
          "description": "A flowing maxi dress with wedges for a graceful bridal shower outfit."
        },
        {
          "top": "Kurti",
          "bottom": "Palazzo pants",
          "shoes": "Kolhapuris",
          "description": "A kurti with palazzo pants and Kolhapuris for a traditional bridal shower appearance."
        }
      ],
      "Chubby Average": [
        {
          "top": "Printed peplum top",
          "bottom": "Palazzo pants",
          "shoes": "Sandals",
          "description": "A printed peplum top with palazzo pants and sandals for a stylish bridal shower look."
        },
        {
          "top": "Embellished top",
          "bottom": "A-line skirt",
          "shoes": "Mules",
          "description": "An embellished top with an A-line skirt and mules for a chic bridal shower appearance."
        },
        {
          "top": "Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An Anarkali dress with heeled sandals for an elegant bridal shower look."
        }
      ],
      "Overweight Short": [
        {
          "top": "Peplum blouse",
          "bottom": "A-line skirt",
          "shoes": "Ballet flats",
          "description": "A peplum blouse with an A-line skirt and ballet flats for a stylish bridal shower appearance."
        },
        {
          "top": "Chikankari kurti",
          "bottom": "Leggings",
          "shoes": "Sandals",
          "description": "A chikankari kurti with leggings and sandals for a traditional bridal shower outfit."
        },
        {
          "top": "Embellished top",
          "bottom": "Palazzo pants",
          "shoes": "Kolhapuris",
          "description": "An embellished top with palazzo pants and Kolhapuris for a stylish bridal shower look."
        }
      ],
      "Overweight Tall": [
        {
          "top": "Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An Anarkali dress with heeled sandals for an elegant bridal shower look."
        },
        {
          "top": "Maxi dress",
          "bottom": "N/A",
          "shoes": "Wedges",
          "description": "A flowing maxi dress with wedges for a graceful bridal shower outfit."
        },
        {
          "top": "Kurti",
          "bottom": "Palazzo pants",
          "shoes": "Kolhapuris",
          "description": "A kurti with palazzo pants and Kolhapuris for a traditional bridal shower appearance."
        }
      ],
      "Overweight Average": [
        {
          "top": "Printed peplum top",
          "bottom": "Palazzo pants",
          "shoes": "Sandals",
          "description": "A printed peplum top with palazzo pants and sandals for a stylish bridal shower look."
        },
        {
          "top": "Embellished top",
          "bottom": "A-line skirt",
          "shoes": "Mules",
          "description": "An embellished top with an A-line skirt and mules for a chic bridal shower appearance."
        },
        {
          "top": "Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An Anarkali dress with heeled sandals for an elegant bridal shower look."
        }
      ]
    },
    "Cocktail Parties": {
      "Skinny Short": [
        {
          "top": "Sequined top",
          "bottom": "Bodycon skirt",
          "shoes": "Stilettos",
          "description": "A sequined top with a bodycon skirt and stilettos for a glamorous cocktail party look."
        },
        {
          "top": "Off-shoulder dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An off-shoulder dress with heeled sandals for an elegant cocktail party appearance."
        },
        {
          "top": "Blazer",
          "bottom": "Tailored trousers",
          "shoes": "Heels",
          "description": "A stylish blazer with tailored trousers and heels for a chic cocktail party outfit."
        }
      ],
      "Skinny Tall": [
        {
          "top": "Slip dress",
          "bottom": "N/A",
          "shoes": "Strappy heels",
          "description": "A sleek slip dress with strappy heels for a sophisticated cocktail party look."
        },
        {
          "top": "Crop top",
          "bottom": "High-waisted pants",
          "shoes": "Heels",
          "description": "A crop top with high-waisted pants and heels for a trendy cocktail party outfit."
        },
        {
          "top": "Silk blouse",
          "bottom": "Pencil skirt",
          "shoes": "Pumps",
          "description": "A silk blouse with a pencil skirt and pumps for a classic cocktail party appearance."
        }
      ],
      "Skinny Average": [
        {
          "top": "One-shoulder dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A one-shoulder dress with heeled sandals for an elegant cocktail party look."
        },
        {
          "top": "Sequined top",
          "bottom": "High-waisted trousers",
          "shoes": "Heels",
          "description": "A sequined top with high-waisted trousers and heels for a glamorous cocktail party outfit."
        },
        {
          "top": "Blazer",
          "bottom": "Pencil skirt",
          "shoes": "Pumps",
          "description": "A stylish blazer with a pencil skirt and pumps for a chic cocktail party appearance."
        }
      ],
      "Lean Short": [
        {
          "top": "Slip dress",
          "bottom": "N/A",
          "shoes": "Strappy heels",
          "description": "A sleek slip dress with strappy heels for a sophisticated cocktail party look."
        },
        {
          "top": "Sequined blouse",
          "bottom": "Pencil skirt",
          "shoes": "Heels",
          "description": "A sequined blouse with a pencil skirt and heels for a glamorous cocktail party outfit."
        },
        {
          "top": "Blazer",
          "bottom": "Tailored trousers",
          "shoes": "Heels",
          "description": "A stylish blazer with tailored trousers and heels for a chic cocktail party appearance."
        }
      ],
      "Lean Tall": [
        {
          "top": "Off-shoulder dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An off-shoulder dress with heeled sandals for an elegant cocktail party look."
        },
        {
          "top": "Sequined top",
          "bottom": "Bodycon skirt",
          "shoes": "Stilettos",
          "description": "A sequined top with a bodycon skirt and stilettos for a glamorous cocktail party appearance."
        },
        {
          "top": "Silk blouse",
          "bottom": "Pencil skirt",
          "shoes": "Pumps",
          "description": "A silk blouse with a pencil skirt and pumps for a classic cocktail party outfit."
        }
      ],
      "Lean Average": [
        {
          "top": "One-shoulder dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A one-shoulder dress with heeled sandals for an elegant cocktail party look."
        },
        {
          "top": "Sequined blouse",
          "bottom": "High-waisted trousers",
          "shoes": "Heels",
          "description": "A sequined blouse with high-waisted trousers and heels for a glamorous cocktail party outfit."
        },
        {
          "top": "Blazer",
          "bottom": "Pencil skirt",
          "shoes": "Pumps",
          "description": "A stylish blazer with a pencil skirt and pumps for a chic cocktail party appearance."
        }
      ],
      "Lean Muscular Short": [
        {
          "top": "Slip dress",
          "bottom": "N/A",
          "shoes": "Strappy heels",
          "description": "A sleek slip dress with strappy heels for a sophisticated cocktail party look."
        },
        {
          "top": "Sequined top",
          "bottom": "Bodycon skirt",
          "shoes": "Stilettos",
          "description": "A sequined top with a bodycon skirt and stilettos for a glamorous cocktail party outfit."
        },
        {
          "top": "Blazer",
          "bottom": "Tailored trousers",
          "shoes": "Heels",
          "description": "A stylish blazer with tailored trousers and heels for a chic cocktail party appearance."
        }
      ],
      "Lean Muscular Tall": [
        {
          "top": "Off-shoulder dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An off-shoulder dress with heeled sandals for an elegant cocktail party look."
        },
        {
          "top": "Sequined blouse",
          "bottom": "Pencil skirt",
          "shoes": "Heels",
          "description": "A sequined blouse with a pencil skirt and heels for a glamorous cocktail party outfit."
        },
        {
          "top": "Silk blouse",
          "bottom": "Pencil skirt",
          "shoes": "Pumps",
          "description": "A silk blouse with a pencil skirt and pumps for a classic cocktail party appearance."
        }
      ],
      "Lean Muscular Average": [
        {
          "top": "One-shoulder dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A one-shoulder dress with heeled sandals for an elegant cocktail party look."
        },
        {
          "top": "Sequined top",
          "bottom": "High-waisted trousers",
          "shoes": "Heels",
          "description": "A sequined top with high-waisted trousers and heels for a glamorous cocktail party outfit."
        },
        {
          "top": "Blazer",
          "bottom": "Pencil skirt",
          "shoes": "Pumps",
          "description": "A stylish blazer with a pencil skirt and pumps for a chic cocktail party appearance."
        }
      ],
      "Average Short": [
        {
          "top": "Sequined top",
          "bottom": "Bodycon skirt",
          "shoes": "Stilettos",
          "description": "A sequined top with a bodycon skirt and stilettos for a glamorous cocktail party look."
        },
        {
          "top": "Off-shoulder dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An off-shoulder dress with heeled sandals for an elegant cocktail party appearance."
        },
        {
          "top": "Blazer",
          "bottom": "Tailored trousers",
          "shoes": "Heels",
          "description": "A stylish blazer with tailored trousers and heels for a chic cocktail party outfit."
        }
      ],
      "Average Tall": [
        {
          "top": "Slip dress",
          "bottom": "N/A",
          "shoes": "Strappy heels",
          "description": "A sleek slip dress with strappy heels for a sophisticated cocktail party look."
        },
        {
          "top": "Crop top",
          "bottom": "High-waisted pants",
          "shoes": "Heels",
          "description": "A crop top with high-waisted pants and heels for a trendy cocktail party outfit."
        },
        {
          "top": "Silk blouse",
          "bottom": "Pencil skirt",
          "shoes": "Pumps",
          "description": "A silk blouse with a pencil skirt and pumps for a classic cocktail party appearance."
        }
      ],
      "Average Average": [
        {
          "top": "One-shoulder dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A one-shoulder dress with heeled sandals for an elegant cocktail party look."
        },
        {
          "top": "Sequined top",
          "bottom": "High-waisted trousers",
          "shoes": "Heels",
          "description": "A sequined top with high-waisted trousers and heels for a glamorous cocktail party outfit."
        },
        {
          "top": "Blazer",
          "bottom": "Pencil skirt",
          "shoes": "Pumps",
          "description": "A stylish blazer with a pencil skirt and pumps for a chic cocktail party appearance."
        }
      ],
      "Chubby Short": [
        {
          "top": "Blazer",
          "bottom": "Tailored trousers",
          "shoes": "Heels",
          "description": "A stylish blazer with tailored trousers and heels for a chic cocktail party outfit."
        },
        {
          "top": "Sequined blouse",
          "bottom": "Pencil skirt",
          "shoes": "Heels",
          "description": "A sequined blouse with a pencil skirt and heels for a glamorous cocktail party look."
        },
        {
          "top": "Off-shoulder dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An off-shoulder dress with heeled sandals for an elegant cocktail party appearance."
        }
      ],
      "Chubby Tall": [
        {
          "top": "Slip dress",
          "bottom": "N/A",
          "shoes": "Strappy heels",
          "description": "A sleek slip dress with strappy heels for a sophisticated cocktail party look."
        },
        {
          "top": "Crop top",
          "bottom": "High-waisted pants",
          "shoes": "Heels",
          "description": "A crop top with high-waisted pants and heels for a trendy cocktail party outfit."
        },
        {
          "top": "Silk blouse",
          "bottom": "Pencil skirt",
          "shoes": "Pumps",
          "description": "A silk blouse with a pencil skirt and pumps for a classic cocktail party appearance."
        }
      ],
      "Chubby Average": [
        {
          "top": "One-shoulder dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A one-shoulder dress with heeled sandals for an elegant cocktail party look."
        },
        {
          "top": "Sequined top",
          "bottom": "High-waisted trousers",
          "shoes": "Heels",
          "description": "A sequined top with high-waisted trousers and heels for a glamorous cocktail party outfit."
        },
        {
          "top": "Blazer",
          "bottom": "Pencil skirt",
          "shoes": "Pumps",
          "description": "A stylish blazer with a pencil skirt and pumps for a chic cocktail party appearance."
        }
      ],
      "Overweight Short": [
        {
          "top": "Blazer",
          "bottom": "Tailored trousers",
          "shoes": "Heels",
          "description": "A stylish blazer with tailored trousers and heels for a chic cocktail party outfit."
        },
        {
          "top": "Sequined blouse",
          "bottom": "Pencil skirt",
          "shoes": "Heels",
          "description": "A sequined blouse with a pencil skirt and heels for a glamorous cocktail party look."
        },
        {
          "top": "Off-shoulder dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An off-shoulder dress with heeled sandals for an elegant cocktail party appearance."
        }
      ],
      "Overweight Tall": [
        {
          "top": "Slip dress",
          "bottom": "N/A",
          "shoes": "Strappy heels",
          "description": "A sleek slip dress with strappy heels for a sophisticated cocktail party look."
        },
        {
          "top": "Crop top",
          "bottom": "High-waisted pants",
          "shoes": "Heels",
          "description": "A crop top with high-waisted pants and heels for a trendy cocktail party outfit."
        },
        {
          "top": "Silk blouse",
          "bottom": "Pencil skirt",
          "shoes": "Pumps",
          "description": "A silk blouse with a pencil skirt and pumps for a classic cocktail party appearance."
        }
      ],
      "Overweight Average": [
        {
          "top": "One-shoulder dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A one-shoulder dress with heeled sandals for an elegant cocktail party look."
        },
        {
          "top": "Sequined top",
          "bottom": "High-waisted trousers",
          "shoes": "Heels",
          "description": "A sequined top with high-waisted trousers and heels for a glamorous cocktail party outfit."
        },
        {
          "top": "Blazer",
          "bottom": "Pencil skirt",
          "shoes": "Pumps",
          "description": "A stylish blazer with a pencil skirt and pumps for a chic cocktail party appearance."
        }
      ]
    },
    "Themed Parties": {
    "Skinny Short": [
      {
        "top": "Printed crop top",
        "bottom": "Mini skirt",
        "shoes": "Ankle boots",
        "description": "A printed crop top with a mini skirt and ankle boots for a fun themed party."
      },
      {
        "top": "Graphic tee",
        "bottom": "Ripped jeans",
        "shoes": "Sneakers",
        "description": "A graphic tee with ripped jeans and sneakers for a casual themed party."
      },
      {
        "top": "Sequin jacket",
        "bottom": "Skinny jeans",
        "shoes": "Heels",
        "description": "A sequin jacket over skinny jeans and heels for a glamorous themed party outfit."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Off-shoulder top",
        "bottom": "High-waisted pants",
        "shoes": "Heels",
        "description": "An off-shoulder top with high-waisted pants and heels for an elegant themed party look."
      },
      {
        "top": "Tank top",
        "bottom": "Midi skirt",
        "shoes": "Sandals",
        "description": "A tank top with a midi skirt and sandals for a stylish themed party appearance."
      },
      {
        "top": "Denim jacket",
        "bottom": "Shorts",
        "shoes": "Sneakers",
        "description": "A denim jacket over shorts and sneakers for a cool themed party outfit."
      }
    ],
    "Skinny Average": [
      {
        "top": "Floral blouse",
        "bottom": "A-line skirt",
        "shoes": "Ballet flats",
        "description": "A floral blouse with an A-line skirt and ballet flats for a cute themed party look."
      },
      {
        "top": "Turtleneck",
        "bottom": "Plaid pants",
        "shoes": "Boots",
        "description": "A turtleneck with plaid pants and boots for a trendy themed party outfit."
      },
      {
        "top": "Leather jacket",
        "bottom": "Jeans",
        "shoes": "Boots",
        "description": "A leather jacket over jeans and boots for a stylish themed party appearance."
      }
    ],
    "Lean Short": [
      {
        "top": "Peplum top",
        "bottom": "Skinny jeans",
        "shoes": "Heels",
        "description": "A peplum top with skinny jeans and heels for a chic themed party look."
      },
      {
        "top": "Off-shoulder blouse",
        "bottom": "Shorts",
        "shoes": "Sandals",
        "description": "An off-shoulder blouse with shorts and sandals for a relaxed themed party outfit."
      },
      {
        "top": "Bomber jacket",
        "bottom": "Leggings",
        "shoes": "Sneakers",
        "description": "A bomber jacket over leggings and sneakers for a sporty themed party appearance."
      }
    ],
    "Lean Tall": [
      {
        "top": "Halter top",
        "bottom": "Wide-leg pants",
        "shoes": "Heels",
        "description": "A halter top with wide-leg pants and heels for a sophisticated themed party look."
      },
      {
        "top": "Sweater",
        "bottom": "Mini skirt",
        "shoes": "Boots",
        "description": "A sweater with a mini skirt and boots for a cozy themed party outfit."
      },
      {
        "top": "Denim shirt",
        "bottom": "Leather pants",
        "shoes": "Ankle boots",
        "description": "A denim shirt over leather pants and ankle boots for a trendy themed party appearance."
      }
    ],
    "Lean Average": [
      {
        "top": "Blazer",
        "bottom": "Skinny jeans",
        "shoes": "Heels",
        "description": "A blazer with skinny jeans and heels for a stylish themed party look."
      },
      {
        "top": "Cropped hoodie",
        "bottom": "Joggers",
        "shoes": "Sneakers",
        "description": "A cropped hoodie with joggers and sneakers for a casual themed party outfit."
      },
      {
        "top": "Kimono",
        "bottom": "Shorts",
        "shoes": "Sandals",
        "description": "A kimono over shorts and sandals for a relaxed themed party appearance."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Ruffled blouse",
        "bottom": "High-waisted skirt",
        "shoes": "Heels",
        "description": "A ruffled blouse with a high-waisted skirt and heels for a feminine themed party look."
      },
      {
        "top": "Tank top",
        "bottom": "Cargo pants",
        "shoes": "Boots",
        "description": "A tank top with cargo pants and boots for a rugged themed party outfit."
      },
      {
        "top": "Cardigan",
        "bottom": "Leggings",
        "shoes": "Sneakers",
        "description": "A cardigan over leggings and sneakers for a cozy themed party appearance."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Crop top",
        "bottom": "Palazzo pants",
        "shoes": "Heels",
        "description": "A crop top with palazzo pants and heels for a stylish themed party look."
      },
      {
        "top": "Sweater",
        "bottom": "Midi skirt",
        "shoes": "Boots",
        "description": "A sweater with a midi skirt and boots for a cozy themed party outfit."
      },
      {
        "top": "Blazer",
        "bottom": "Jeans",
        "shoes": "Loafers",
        "description": "A blazer over jeans and loafers for a smart themed party appearance."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Halter top",
        "bottom": "Skinny jeans",
        "shoes": "Heels",
        "description": "A halter top with skinny jeans and heels for a chic themed party look."
      },
      {
        "top": "Sweatshirt",
        "bottom": "Joggers",
        "shoes": "Sneakers",
        "description": "A sweatshirt with joggers and sneakers for a comfortable themed party outfit."
      },
      {
        "top": "Kimono",
        "bottom": "Shorts",
        "shoes": "Sandals",
        "description": "A kimono over shorts and sandals for a relaxed themed party appearance."
      }
    ],
    "Average Short": [
      {
        "top": "Peplum top",
        "bottom": "Skinny jeans",
        "shoes": "Heels",
        "description": "A peplum top with skinny jeans and heels for a chic themed party look."
      },
      {
        "top": "Off-shoulder blouse",
        "bottom": "Shorts",
        "shoes": "Sandals",
        "description": "An off-shoulder blouse with shorts and sandals for a relaxed themed party outfit."
      },
      {
        "top": "Bomber jacket",
        "bottom": "Leggings",
        "shoes": "Sneakers",
        "description": "A bomber jacket over leggings and sneakers for a sporty themed party appearance."
      }
    ],
    "Average Tall": [
      {
        "top": "Halter top",
        "bottom": "Wide-leg pants",
        "shoes": "Heels",
        "description": "A halter top with wide-leg pants and heels for a sophisticated themed party look."
      },
      {
        "top": "Sweater",
        "bottom": "Mini skirt",
        "shoes": "Boots",
        "description": "A sweater with a mini skirt and boots for a cozy themed party outfit."
      },
      {
        "top": "Denim shirt",
        "bottom": "Leather pants",
        "shoes": "Ankle boots",
        "description": "A denim shirt over leather pants and ankle boots for a trendy themed party appearance."
      }
    ],
    "Average Average": [
      {
        "top": "Blazer",
        "bottom": "Skinny jeans",
        "shoes": "Heels",
        "description": "A blazer with skinny jeans and heels for a stylish themed party look."
      },
      {
        "top": "Cropped hoodie",
        "bottom": "Joggers",
        "shoes": "Sneakers",
        "description": "A cropped hoodie with joggers and sneakers for a casual themed party outfit."
      },
      {
        "top": "Kimono",
        "bottom": "Shorts",
        "shoes": "Sandals",
        "description": "A kimono over shorts and sandals for a relaxed themed party appearance."
      }
    ],
    "Chubby Short": [
      {
        "top": "Ruffled blouse",
        "bottom": "High-waisted skirt",
        "shoes": "Heels",
        "description": "A ruffled blouse with a high-waisted skirt and heels for a feminine themed party look."
      },
      {
        "top": "Tank top",
        "bottom": "Cargo pants",
        "shoes": "Boots",
        "description": "A tank top with cargo pants and boots for a rugged themed party outfit."
      },
      {
        "top": "Cardigan",
        "bottom": "Leggings",
        "shoes": "Sneakers",
        "description": "A cardigan over leggings and sneakers for a cozy themed party appearance."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Maxi dress",
        "bottom": "",
        "shoes": "Flats",
        "description": "A flowy maxi dress with flats for a comfortable and elegant themed party look."
      },
      {
        "top": "Long-sleeve blouse",
        "bottom": "Wide-leg pants",
        "shoes": "Heels",
        "description": "A long-sleeve blouse with wide-leg pants and heels for a stylish themed party outfit."
      },
      {
        "top": "Denim jacket",
        "bottom": "Midi skirt",
        "shoes": "Boots",
        "description": "A denim jacket over a midi skirt and boots for a trendy themed party appearance."
      }
    ],
    "Chubby Average": [
      {
        "top": "Peplum top",
        "bottom": "High-waisted jeans",
        "shoes": "Heels",
        "description": "A peplum top with high-waisted jeans and heels for a flattering themed party look."
      },
      {
        "top": "V-neck blouse",
        "bottom": "A-line skirt",
        "shoes": "Flats",
        "description": "A V-neck blouse with an A-line skirt and flats for a comfortable themed party outfit."
      },
      {
        "top": "Kimono",
        "bottom": "Leggings",
        "shoes": "Sandals",
        "description": "A kimono over leggings and sandals for a relaxed themed party appearance."
      }
    ],
    "Overweight Short": [
      {
        "top": "Flowy blouse",
        "bottom": "High-waisted skirt",
        "shoes": "Heels",
        "description": "A flowy blouse with a high-waisted skirt and heels for a flattering themed party look."
      },
      {
        "top": "Wrap dress",
        "bottom": "",
        "shoes": "Flats",
        "description": "A wrap dress with flats for a comfortable and elegant themed party outfit."
      },
      {
        "top": "Long cardigan",
        "bottom": "Leggings",
        "shoes": "Sneakers",
        "description": "A long cardigan over leggings and sneakers for a casual themed party appearance."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Maxi dress",
        "bottom": "",
        "shoes": "Flats",
        "description": "A flowy maxi dress with flats for a comfortable and elegant themed party look."
      },
      {
        "top": "Long-sleeve blouse",
        "bottom": "Wide-leg pants",
        "shoes": "Heels",
        "description": "A long-sleeve blouse with wide-leg pants and heels for a stylish themed party outfit."
      },
      {
        "top": "Denim jacket",
        "bottom": "Midi skirt",
        "shoes": "Boots",
        "description": "A denim jacket over a midi skirt and boots for a trendy themed party appearance."
      }
    ],
    "Overweight Average": [
      {
        "top": "Peplum top",
        "bottom": "High-waisted jeans",
        "shoes": "Heels",
        "description": "A peplum top with high-waisted jeans and heels for a flattering themed party look."
      },
      {
        "top": "V-neck blouse",
        "bottom": "A-line skirt",
        "shoes": "Flats",
        "description": "A V-neck blouse with an A-line skirt and flats for a comfortable themed party outfit."
      },
      {
        "top": "Kimono",
        "bottom": "Leggings",
        "shoes": "Sandals",
        "description": "A kimono over leggings and sandals for a relaxed themed party appearance."
      }
    ]
    },
    "Religious Ceremonies": {
    "Skinny Short": [
      {
        "top": "Kurti",
        "bottom": "Churidar",
        "shoes": "Ballet flats",
        "description": "A kurti with churidar and ballet flats for a traditional and comfortable look."
      },
      {
        "top": "Anarkali top",
        "bottom": "Leggings",
        "shoes": "Flats",
        "description": "An Anarkali top with leggings and flats for a graceful and modest outfit."
      },
      {
        "top": "Straight cut kurta",
        "bottom": "Palazzo pants",
        "shoes": "Sandals",
        "description": "A straight cut kurta with palazzo pants and sandals for a relaxed yet elegant look."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Long kurti",
        "bottom": "Leggings",
        "shoes": "Heels",
        "description": "A long kurti with leggings and heels for a sophisticated and formal appearance."
      },
      {
        "top": "Anarkali dress",
        "bottom": "",
        "shoes": "Flats",
        "description": "An Anarkali dress with flats for a graceful and traditional outfit."
      },
      {
        "top": "Churidar kurta",
        "bottom": "Churidar",
        "shoes": "Ballet flats",
        "description": "A churidar kurta with churidar and ballet flats for a classic and comfortable look."
      }
    ],
    "Skinny Average": [
      {
        "top": "A-line kurti",
        "bottom": "Churidar",
        "shoes": "Heels",
        "description": "An A-line kurti with churidar and heels for a balanced and elegant appearance."
      },
      {
        "top": "Straight cut kurta",
        "bottom": "Palazzo pants",
        "shoes": "Sandals",
        "description": "A straight cut kurta with palazzo pants and sandals for a stylish and modest look."
      },
      {
        "top": "Long kurti",
        "bottom": "Leggings",
        "shoes": "Flats",
        "description": "A long kurti with leggings and flats for a traditional yet comfortable outfit."
      }
    ],
    "Lean Short": [
      {
        "top": "Kurti",
        "bottom": "Churidar",
        "shoes": "Ballet flats",
        "description": "A kurti with churidar and ballet flats for a traditional and elegant look."
      },
      {
        "top": "Anarkali top",
        "bottom": "Leggings",
        "shoes": "Flats",
        "description": "An Anarkali top with leggings and flats for a graceful and modest appearance."
      },
      {
        "top": "Straight cut kurta",
        "bottom": "Palazzo pants",
        "shoes": "Sandals",
        "description": "A straight cut kurta with palazzo pants and sandals for a relaxed and elegant outfit."
      }
    ],
    "Lean Tall": [
      {
        "top": "Long kurti",
        "bottom": "Leggings",
        "shoes": "Heels",
        "description": "A long kurti with leggings and heels for a formal and sophisticated appearance."
      },
      {
        "top": "Anarkali dress",
        "bottom": "",
        "shoes": "Flats",
        "description": "An Anarkali dress with flats for a traditional and graceful look."
      },
      {
        "top": "Churidar kurta",
        "bottom": "Churidar",
        "shoes": "Ballet flats",
        "description": "A churidar kurta with churidar and ballet flats for a classic and elegant outfit."
      }
    ],
    "Lean Average": [
      {
        "top": "A-line kurti",
        "bottom": "Churidar",
        "shoes": "Heels",
        "description": "An A-line kurti with churidar and heels for a stylish and elegant appearance."
      },
      {
        "top": "Straight cut kurta",
        "bottom": "Palazzo pants",
        "shoes": "Sandals",
        "description": "A straight cut kurta with palazzo pants and sandals for a relaxed and modest look."
      },
      {
        "top": "Long kurti",
        "bottom": "Leggings",
        "shoes": "Flats",
        "description": "A long kurti with leggings and flats for a comfortable and traditional outfit."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Ruffled kurti",
        "bottom": "Churidar",
        "shoes": "Heels",
        "description": "A ruffled kurti with churidar and heels for a feminine and elegant look."
      },
      {
        "top": "Embellished Anarkali top",
        "bottom": "Leggings",
        "shoes": "Flats",
        "description": "An embellished Anarkali top with leggings and flats for a graceful appearance."
      },
      {
        "top": "Straight cut kurta",
        "bottom": "Palazzo pants",
        "shoes": "Sandals",
        "description": "A straight cut kurta with palazzo pants and sandals for a relaxed yet stylish outfit."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Long kurti",
        "bottom": "Leggings",
        "shoes": "Heels",
        "description": "A long kurti with leggings and heels for a sophisticated and formal appearance."
      },
      {
        "top": "Anarkali dress",
        "bottom": "",
        "shoes": "Flats",
        "description": "An Anarkali dress with flats for a graceful and traditional look."
      },
      {
        "top": "Churidar kurta",
        "bottom": "Churidar",
        "shoes": "Ballet flats",
        "description": "A churidar kurta with churidar and ballet flats for a classic and elegant outfit."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "A-line kurti",
        "bottom": "Churidar",
        "shoes": "Heels",
        "description": "An A-line kurti with churidar and heels for a stylish and balanced appearance."
      },
      {
        "top": "Straight cut kurta",
        "bottom": "Palazzo pants",
        "shoes": "Sandals",
        "description": "A straight cut kurta with palazzo pants and sandals for a relaxed and modest look."
      },
      {
        "top": "Long kurti",
        "bottom": "Leggings",
        "shoes": "Flats",
        "description": "A long kurti with leggings and flats for a comfortable and traditional outfit."
      }
    ],
    "Average Short": [
      {
        "top": "Kurti",
        "bottom": "Churidar",
        "shoes": "Flats",
        "description": "A kurti with churidar and flats for a traditional and comfortable look."
      },
      {
        "top": "Anarkali top",
        "bottom": "Leggings",
        "shoes": "Ballet flats",
        "description": "An Anarkali top with leggings and ballet flats for a graceful and modest outfit."
      },
      {
        "top": "Straight cut kurta",
        "bottom": "Palazzo pants",
        "shoes": "Sandals",
        "description": "A straight cut kurta with palazzo pants and sandals for a relaxed yet elegant appearance."
      }
    ],
    "Average Tall": [
      {
        "top": "Long kurti",
        "bottom": "Leggings",
        "shoes": "Heels",
        "description": "A long kurti with leggings and heels for a formal and sophisticated look."
      },
      {
        "top": "Anarkali dress",
        "bottom": "",
        "shoes": "Flats",
        "description": "An Anarkali dress with flats for a traditional and graceful outfit."
      },
      {
        "top": "Churidar kurta",
        "bottom": "Churidar",
        "shoes": "Ballet flats",
        "description": "A churidar kurta with churidar and ballet flats for a classic and elegant appearance."
      }
    ],
    "Average Average": [
      {
        "top": "A-line kurti",
        "bottom": "Churidar",
        "shoes": "Heels",
        "description": "An A-line kurti with churidar and heels for a balanced and stylish look."
      },
      {
        "top": "Straight cut kurta",
        "bottom": "Palazzo pants",
        "shoes": "Sandals",
        "description": "A straight cut kurta with palazzo pants and sandals for a relaxed yet modest appearance."
      },
      {
        "top": "Long kurti",
        "bottom": "Leggings",
        "shoes": "Flats",
        "description": "A long kurti with leggings and flats for a comfortable and traditional outfit."
      }
    ],
    "Chubby Short": [
      {
        "top": "Flowy kurti",
        "bottom": "Churidar",
        "shoes": "Flats",
        "description": "A flowy kurti with churidar and flats for a comfortable and elegant look."
      },
      {
        "top": "Wrap dress",
        "bottom": "",
        "shoes": "Flats",
        "description": "A wrap dress with flats for a graceful and traditional outfit."
      },
      {
        "top": "Long cardigan",
        "bottom": "Leggings",
        "shoes": "Sneakers",
        "description": "A long cardigan over leggings and sneakers for a casual yet chic appearance."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Maxi dress",
        "bottom": "",
        "shoes": "Flats",
        "description": "A flowy maxi dress with flats for a comfortable and elegant look."
      },
      {
        "top": "Long-sleeve blouse",
        "bottom": "Wide-leg pants",
        "shoes": "Heels",
        "description": "A long-sleeve blouse with wide-leg pants and heels for a sophisticated and stylish appearance."
      },
      {
        "top": "Denim jacket",
        "bottom": "Midi skirt",
        "shoes": "Boots",
        "description": "A denim jacket over a midi skirt and boots for a trendy and casual look."
      }
    ],
    "Chubby Average": [
      {
        "top": "Peplum top",
        "bottom": "High-waisted jeans",
        "shoes": "Heels",
        "description": "A peplum top with high-waisted jeans and heels for a flattering and stylish look."
      },
      {
        "top": "V-neck blouse",
        "bottom": "A-line skirt",
        "shoes": "Flats",
        "description": "A V-neck blouse with an A-line skirt and flats for a comfortable and elegant appearance."
      },
      {
        "top": "Kimono",
        "bottom": "Leggings",
        "shoes": "Sandals",
        "description": "A kimono over leggings and sandals for a relaxed and modest look."
      }
    ],
    "Overweight Short": [
      {
        "top": "Flowy blouse",
        "bottom": "High-waisted skirt",
        "shoes": "Heels",
        "description": "A flowy blouse with a high-waisted skirt and heels for a flattering and elegant appearance."
      },
      {
        "top": "Wrap dress",
        "bottom": "",
        "shoes": "Flats",
        "description": "A wrap dress with flats for a comfortable and classic look."
      },
      {
        "top": "Long cardigan",
        "bottom": "Leggings",
        "shoes": "Sneakers",
        "description": "A long cardigan over leggings and sneakers for a casual and chic outfit."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Maxi dress",
        "bottom": "",
        "shoes": "Flats",
        "description": "A flowy maxi dress with flats for a comfortable and elegant appearance."
      },
      {
        "top": "Long-sleeve blouse",
        "bottom": "Wide-leg pants",
        "shoes": "Heels",
        "description": "A long-sleeve blouse with wide-leg pants and heels for a stylish and formal look."
      },
      {
        "top": "Denim jacket",
        "bottom": "Midi skirt",
        "shoes": "Boots",
        "description": "A denim jacket over a midi skirt and boots for a trendy and comfortable outfit."
      }
    ],
    "Overweight Average": [
      {
        "top": "Peplum top",
        "bottom": "High-waisted jeans",
        "shoes": "Heels",
        "description": "A peplum top with high-waisted jeans and heels for a flattering and elegant appearance."
      },
      {
        "top": "V-neck blouse",
        "bottom": "A-line skirt",
        "shoes": "Flats",
        "description": "A V-neck blouse with an A-line skirt and flats for a comfortable and classic look."
      },
      {
        "top": "Kimono",
        "bottom": "Leggings",
        "shoes": "Sandals",
        "description": "A kimono over leggings and sandals for a relaxed and stylish outfit."
      }
    ]
    },
    "Sports Events": {
    "Skinny Short": [
      {
        "top": "Athletic tank top",
        "bottom": "Shorts",
        "shoes": "Sneakers",
        "description": "An athletic tank top with shorts and sneakers for a comfortable and practical sports event outfit."
      },
      {
        "top": "Sports bra",
        "bottom": "Track shorts",
        "shoes": "Running shoes",
        "description": "A sports bra with track shorts and running shoes for an active sports event look."
      },
      {
        "top": "Athletic jacket",
        "bottom": "Sporty leggings",
        "shoes": "Sneakers",
        "description": "An athletic jacket over sporty leggings and sneakers for a stylish sports event outfit."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Performance top",
        "bottom": "Athletic pants",
        "shoes": "Running shoes",
        "description": "A performance top with athletic pants and running shoes for a high-performance sports event outfit."
      },
      {
        "top": "Compression shirt",
        "bottom": "Track pants",
        "shoes": "Training shoes",
        "description": "A compression shirt with track pants and training shoes for a focused sports event look."
      },
      {
        "top": "Sweat-wicking jacket",
        "bottom": "Joggers",
        "shoes": "Sneakers",
        "description": "A sweat-wicking jacket over joggers and sneakers for a practical sports event outfit."
      }
    ],
    "Skinny Average": [
      {
        "top": "Athletic tank top",
        "bottom": "Shorts",
        "shoes": "Sneakers",
        "description": "An athletic tank top with shorts and sneakers for a casual and sporty appearance."
      },
      {
        "top": "Sports bra",
        "bottom": "Track shorts",
        "shoes": "Running shoes",
        "description": "A sports bra with track shorts and running shoes for an energetic sports event look."
      },
      {
        "top":"Athletic jacket",
        "bottom": "Sporty leggings",
        "shoes": "Sneakers",
        "description": "An athletic jacket over sporty leggings and sneakers for a stylish yet practical sports outfit."
      }
    ],
    "Lean Short": [
      {
        "top": "Athletic tank top",
        "bottom": "Shorts",
        "shoes": "Sneakers",
        "description": "An athletic tank top with shorts and sneakers for a comfortable and active look."
      },
      {
        "top": "Sports bra",
        "bottom": "Track shorts",
        "shoes": "Running shoes",
        "description": "A sports bra with track shorts and running shoes for a practical sports event outfit."
      },
      {
        "top": "Athletic jacket",
        "bottom": "Sporty leggings",
        "shoes": "Sneakers",
        "description": "An athletic jacket over sporty leggings and sneakers for a casual sports event appearance."
      }
    ],
    "Lean Tall": [
      {
        "top": "Performance top",
        "bottom": "Athletic pants",
        "shoes": "Running shoes",
        "description": "A performance top with athletic pants and running shoes for an optimal sports event look."
      },
      {
        "top": "Compression shirt",
        "bottom": "Track pants",
        "shoes": "Training shoes",
        "description": "A compression shirt with track pants and training shoes for a focused sports event outfit."
      },
      {
        "top": "Sweat-wicking jacket",
        "bottom": "Joggers",
        "shoes": "Sneakers",
        "description": "A sweat-wicking jacket over joggers and sneakers for a stylish and comfortable look."
      }
    ],
    "Lean Average": [
      {
        "top": "Athletic tank top",
        "bottom": "Shorts",
        "shoes": "Sneakers",
        "description": "An athletic tank top with shorts and sneakers for a sporty and casual appearance."
      },
      {
        "top": "Sports bra",
        "bottom": "Track shorts",
        "shoes": "Running shoes",
        "description": "A sports bra with track shorts and running shoes for a comfortable and energetic look."
      },
      {
        "top": "Athletic jacket",
        "bottom": "Sporty leggings",
        "shoes": "Sneakers",
        "description": "An athletic jacket over sporty leggings and sneakers for a practical sports outfit."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Performance tank top",
        "bottom": "Shorts",
        "shoes": "Sneakers",
        "description": "A performance tank top with shorts and sneakers for an active and athletic look."
      },
      {
        "top": "Compression shirt",
        "bottom": "Track shorts",
        "shoes": "Running shoes",
        "description": "A compression shirt with track shorts and running shoes for an optimal sports event appearance."
      },
      {
        "top": "Athletic jacket",
        "bottom": "Sporty leggings",
        "shoes": "Sneakers",
        "description": "An athletic jacket over sporty leggings and sneakers for a stylish and comfortable sports outfit."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Performance top",
        "bottom": "Athletic pants",
        "shoes": "Running shoes",
        "description": "A performance top with athletic pants and running shoes for a high-performance sports event look."
      },
      {
        "top": "Compression shirt",
        "bottom": "Track pants",
        "shoes": "Training shoes",
        "description": "A compression shirt with track pants and training shoes for an efficient sports outfit."
      },
      {
        "top": "Sweat-wicking jacket",
        "bottom": "Joggers",
        "shoes": "Sneakers",
        "description": "A sweat-wicking jacket over joggers and sneakers for a comfortable and stylish appearance."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Performance tank top",
        "bottom": "Shorts",
        "shoes": "Sneakers",
        "description": "A performance tank top with shorts and sneakers for a sporty and active look."
      },
      {
        "top": "Compression shirt",
        "bottom": "Track shorts",
        "shoes": "Running shoes",
        "description": "A compression shirt with track shorts and running shoes for a focused sports event appearance."
      },
      {
        "top": "Athletic jacket",
        "bottom": "Sporty leggings",
        "shoes": "Sneakers",
        "description": "An athletic jacket over sporty leggings and sneakers for a stylish yet practical sports outfit."
      }
    ],
    "Average Short": [
      {
        "top": "Athletic tank top",
        "bottom": "Shorts",
        "shoes": "Sneakers",
        "description": "An athletic tank top with shorts and sneakers for a casual and sporty look."
      },
      {
        "top": "Sports bra",
        "bottom": "Track shorts",
        "shoes": "Running shoes",
        "description": "A sports bra with track shorts and running shoes for an energetic sports event appearance."
      },
      {
        "top": "Athletic jacket",
        "bottom": "Sporty leggings",
        "shoes": "Sneakers",
        "description": "An athletic jacket over sporty leggings and sneakers for a comfortable and practical sports outfit."
      }
    ],
    "Average Tall": [
      {
        "top": "Performance top",
        "bottom": "Athletic pants",
        "shoes": "Running shoes",
        "description": "A performance top with athletic pants and running shoes for a high-performance sports event look."
      },
      {
        "top": "Compression shirt",
        "bottom": "Track pants",
        "shoes": "Training shoes",
        "description": "A compression shirt with track pants and training shoes for a focused sports event appearance."
      },
      {
        "top": "Sweat-wicking jacket",
        "bottom": "Joggers",
        "shoes": "Sneakers",
        "description": "A sweat-wicking jacket over joggers and sneakers for a stylish and comfortable look."
      }
    ],
    "Average Average": [
      {
        "top": "Athletic tank top",
        "bottom": "Shorts",
        "shoes": "Sneakers",
        "description": "An athletic tank top with shorts and sneakers for a casual and sporty appearance."
      },
      {
        "top": "Sports bra",
        "bottom": "Track shorts",
        "shoes": "Running shoes",
        "description": "A sports bra with track shorts and running shoes for a comfortable and active look."
      },
      {
        "top": "Athletic jacket",
        "bottom": "Sporty leggings",
        "shoes": "Sneakers",
        "description": "An athletic jacket over sporty leggings and sneakers for a practical sports outfit."
      }
    ],
    "Chubby Short": [
      {
        "top": "Loose-fitting tank top",
        "bottom": "Athletic shorts",
        "shoes": "Sneakers",
        "description": "A loose-fitting tank top with athletic shorts and sneakers for a comfortable sports outfit."
      },
      {
        "top": "Sports bra",
        "bottom": "Track shorts",
        "shoes": "Running shoes",
        "description": "A sports bra with track shorts and running shoes for an energetic and practical look."
      },
      {
        "top": "Athletic jacket",
        "bottom": "Sporty leggings",
        "shoes": "Sneakers",
        "description": "An athletic jacket over sporty leggings and sneakers for a relaxed sports event appearance."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Performance top",
        "bottom": "Athletic pants",
        "shoes": "Running shoes",
        "description": "A performance top with athletic pants and running shoes for a comfortable and high-performance look."
      },
      {
        "top": "Compression shirt",
        "bottom": "Track pants",
        "shoes": "Training shoes",
        "description": "A compression shirt with track pants and training shoes for a focused and practical sports outfit."
      },
      {
        "top": "Sweat-wicking jacket",
        "bottom": "Joggers",
        "shoes": "Sneakers",
        "description": "A sweat-wicking jacket over joggers and sneakers for a stylish and comfortable appearance."
      }
    ],
    "Chubby Average": [
      {
        "top": "Loose-fitting tank top",
        "bottom": "Athletic shorts",
        "shoes": "Sneakers",
        "description": "A loose-fitting tank top with athletic shorts and sneakers for a relaxed sports event outfit."
      },
      {
        "top": "Sports bra",
        "bottom": "Track shorts",
        "shoes": "Running shoes",
        "description": "A sports bra with track shorts and running shoes for a comfortable and energetic look."
      },
      {
        "top": "Athletic jacket",
        "bottom": "Sporty leggings",
        "shoes": "Sneakers",
        "description": "An athletic jacket over sporty leggings and sneakers for a casual yet practical sports outfit."
      }
    ],
    "Overweight Short": [
      {
        "top": "Loose-fitting sports top",
        "bottom": "Athletic shorts",
        "shoes": "Sneakers",
        "description": "A loose-fitting sports top with athletic shorts and sneakers for a comfortable and practical look."
      },
      {
        "top": "Sports bra",
        "bottom": "Track shorts",
        "shoes": "Running shoes",
        "description": "A sports bra with track shorts and running shoes for a relaxed and active sports event appearance."
      },
      {
        "top": "Athletic jacket",
        "bottom": "Sporty leggings",
        "shoes": "Sneakers",
        "description": "An athletic jacket over sporty leggings and sneakers for a casual and comfortable sports outfit."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Performance top",
        "bottom": "Athletic pants",
        "shoes": "Running shoes",
        "description": "A performance top with athletic pants and running shoes for a high-performance and comfortable look."
      },
      {
        "top": "Compression shirt",
        "bottom": "Track pants",
        "shoes": "Training shoes",
        "description": "A compression shirt with track pants and training shoes for a practical sports event outfit."
      },
      {
        "top": "Sweat-wicking jacket",
        "bottom": "Joggers",
        "shoes": "Sneakers",
        "description": "A sweat-wicking jacket over joggers and sneakers for a stylish and comfortable sports look."
      }
    ],
    "Overweight Average": [
      {
        "top": "Loose-fitting sports top",
        "bottom": "Athletic shorts",
        "shoes": "Sneakers",
        "description": "A loose-fitting sports top with athletic shorts and sneakers for a relaxed and practical sports event appearance."
      },
      {
        "top": "Sports bra",
        "bottom": "Track shorts",
        "shoes": "Running shoes",
        "description": "A sports bra with track shorts and running shoes for a comfortable and energetic look."
      },
      {
        "top": "Athletic jacket",
        "bottom": "Sporty leggings",
        "shoes": "Sneakers",
        "description": "An athletic jacket over sporty leggings and sneakers for a casual and practical outfit."
      }
    ]
    },
    "Traveling": {
    "Skinny Short": [
      {
        "top": "Lightweight kurta",
        "bottom": "Churidar",
        "shoes": "Comfortable flats",
        "description": "A lightweight kurta with churidar and comfortable flats, ideal for traveling."
      },
      {
        "top": "Casual tunic",
        "bottom": "Leggings",
        "shoes": "Slip-on shoes",
        "description": "A casual tunic with leggings and slip-on shoes for a relaxed travel outfit."
      },
      {
        "top": "Short-sleeve blouse",
        "bottom": "Palazzo pants",
        "shoes": "Sneakers",
        "description": "A short-sleeve blouse paired with palazzo pants and sneakers for easy movement."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Flowy kurti",
        "bottom": "Trousers",
        "shoes": "Loafers",
        "description": "A flowy kurti with trousers and loafers for a comfortable travel look."
      },
      {
        "top": "Casual maxi dress",
        "bottom": "N/A",
        "shoes": "Slip-on shoes",
        "description": "A casual maxi dress with slip-on shoes for a breezy and comfortable travel outfit."
      },
      {
        "top": "Lightweight sweater",
        "bottom": "Jeans",
        "shoes": "Comfortable sandals",
        "description": "A lightweight sweater with jeans and comfortable sandals for a casual travel look."
      }
    ],
    "Skinny Average": [
      {
        "top": "Kurta with side slits",
        "bottom": "Leggings",
        "shoes": "Flats",
        "description": "A kurta with side slits paired with leggings and flats for easy travel comfort."
      },
      {
        "top": "Relaxed shirt",
        "bottom": "Culottes",
        "shoes": "Slip-on sneakers",
        "description": "A relaxed shirt with culottes and slip-on sneakers for a laid-back travel style."
      },
      {
        "top": "Soft sweater",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft sweater with travel pants and comfortable loafers for a cozy travel outfit."
      }
    ],
    "Lean Short": [
      {
        "top": "A-line kurta",
        "bottom": "Churidar",
        "shoes": "Comfortable sandals",
        "description": "An A-line kurta with churidar and comfortable sandals for a stylish yet practical travel outfit."
      },
      {
        "top": "Casual tunic",
        "bottom": "Tights",
        "shoes": "Flats",
        "description": "A casual tunic with tights and flats for a comfortable and chic travel look."
      },
      {
        "top": "Short-sleeve dress",
        "bottom": "N/A",
        "shoes": "Slip-on sneakers",
        "description": "A short-sleeve dress with slip-on sneakers for a convenient travel outfit."
      }
    ],
    "Lean Tall": [
      {
        "top": "Long kurti",
        "bottom": "Trousers",
        "shoes": "Loafers",
        "description": "A long kurti with trousers and loafers for a sleek and comfortable travel look."
      },
      {
        "top": "Maxi dress",
        "bottom": "N/A",
        "shoes": "Comfortable flats",
        "description": "A maxi dress with comfortable flats for an effortless travel outfit."
      },
      {
        "top": "Lightweight blouse",
        "bottom": "Jeans",
        "shoes": "Casual sneakers",
        "description": "A lightweight blouse with jeans and casual sneakers for an easygoing travel style."
      }
    ],
    "Lean Average": [
      {
        "top": "Kurta with embroidery",
        "bottom": "Leggings",
        "shoes": "Comfortable sandals",
        "description": "A kurta with embroidery paired with leggings and comfortable sandals for an elegant travel look."
      },
      {
        "top": "Casual blouse",
        "bottom": "Culottes",
        "shoes": "Slip-on shoes",
        "description": "A casual blouse with culottes and slip-on shoes for a relaxed yet stylish travel outfit."
      },
      {
        "top": "Soft cardigan",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft cardigan with travel pants and comfortable loafers for a cozy travel style."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Tailored kurta",
        "bottom": "Churidar",
        "shoes": "Comfortable flats",
        "description": "A tailored kurta with churidar and comfortable flats for a sleek travel look."
      },
      {
        "top": "Casual tunic",
        "bottom": "Leggings",
        "shoes": "Slip-on sneakers",
        "description": "A casual tunic with leggings and slip-on sneakers for a sporty yet practical travel outfit."
      },
      {
        "top": "Short-sleeve shirt",
        "bottom": "Palazzo pants",
        "shoes": "Sneakers",
        "description": "A short-sleeve shirt paired with palazzo pants and sneakers for an active travel look."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Long kurta with side slits",
        "bottom": "Trousers",
        "shoes": "Loafers",
        "description": "A long kurta with side slits and trousers, complemented by loafers for a refined travel look."
      },
      {
        "top": "Maxi dress with belt",
        "bottom": "N/A",
        "shoes": "Comfortable flats",
        "description": "A maxi dress with a belt and comfortable flats for an elegant and practical travel outfit."
      },
      {
        "top": "Lightweight sweater",
        "bottom": "Jeans",
        "shoes": "Casual sneakers",
        "description": "A lightweight sweater with jeans and casual sneakers for a relaxed travel style."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Kurta with fitted design",
        "bottom": "Leggings",
        "shoes": "Comfortable sandals",
        "description": "A kurta with a fitted design paired with leggings and comfortable sandals for a chic travel look."
      },
      {
        "top": "Casual blouse",
        "bottom": "Culottes",
        "shoes": "Slip-on shoes",
        "description": "A casual blouse with culottes and slip-on shoes for a laid-back yet stylish travel outfit."
      },
      {
        "top": "Soft cardigan",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft cardigan with travel pants and comfortable loafers for a cozy and practical travel look."
      }
    ],
    "Average Short": [
      {
        "top": "Kurta with side slits",
        "bottom": "Leggings",
        "shoes": "Comfortable flats",
        "description": "A kurta with side slits paired with leggings and comfortable flats for an easygoing travel outfit."
      },
      {
        "top": "Relaxed shirt",
        "bottom": "Culottes",
        "shoes": "Slip-on sneakers",
        "description": "A relaxed shirt with culottes and slip-on sneakers for a casual travel style."
      },
      {
        "top": "Soft sweater",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft sweater with travel pants and comfortable loafers for a cozy travel outfit."
      }
    ],
    "Average Tall": [
      {
        "top": "Flowy kurti",
        "bottom": "Trousers",
        "shoes": "Loafers",
        "description": "A flowy kurti with trousers and loafers for a stylish and comfortable travel look."
      },
      {
        "top": "Maxi dress",
        "bottom": "N/A",
        "shoes": "Comfortable sandals",
        "description": "A maxi dress with comfortable sandals for a relaxed travel outfit."
      },
      {
        "top": "Lightweight blouse",
        "bottom": "Jeans",
        "shoes": "Casual sneakers",
        "description": "A lightweight blouse with jeans and casual sneakers for an easygoing travel style."
      }
    ],
    "Average Average": [
      {
        "top": "Kurta with embroidery",
        "bottom": "Leggings",
        "shoes": "Comfortable sandals",
        "description": "A kurta with embroidery paired with leggings and comfortable sandals for an elegant travel look."
      },
      {
        "top": "Casual blouse",
        "bottom": "Culottes",
        "shoes": "Slip-on shoes",
        "description": "A casual blouse with culottes and slip-on shoes for a relaxed yet stylish travel outfit."
      },
      {
        "top": "Soft cardigan",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft cardigan with travel pants and comfortable loafers for a cozy and practical travel look."
      }
    ],
    "Chubby Short": [
      {
        "top": "A-line kurta",
        "bottom": "Churidar",
        "shoes": "Comfortable flats",
        "description": "An A-line kurta with churidar and comfortable flats for a flattering travel outfit."
      },
      {
        "top": "Casual tunic",
        "bottom": "Leggings",
        "shoes": "Slip-on shoes",
        "description": "A casual tunic with leggings and slip-on shoes for a relaxed travel look."
      },
      {
        "top": "Short-sleeve dress",
        "bottom": "N/A",
        "shoes": "Sneakers",
        "description": "A short-sleeve dress with sneakers for a comfortable travel outfit."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Long kurta",
        "bottom": "Trousers",
        "shoes": "Loafers",
        "description": "A long kurta with trousers and loafers for a comfortable and stylish travel look."
      },
      {
        "top": "Maxi dress",
        "bottom": "N/A",
        "shoes": "Comfortable flats",
        "description": "A maxi dress with comfortable flats for an easygoing travel outfit."
      },
      {
        "top": "Lightweight sweater",
        "bottom": "Jeans",
        "shoes": "Casual sneakers",
        "description": "A lightweight sweater with jeans and casual sneakers for a cozy travel style."
      }
    ],
    "Chubby Average": [
      {
        "top": "Kurta with side slits",
        "bottom": "Leggings",
        "shoes": "Comfortable sandals",
        "description": "A kurta with side slits paired with leggings and comfortable sandals for a flattering travel look."
      },
      {
        "top": "Casual blouse",
        "bottom": "Culottes",
        "shoes": "Slip-on shoes",
        "description": "A casual blouse with culottes and slip-on shoes for a relaxed and stylish travel outfit."
      },
      {
        "top": "Soft cardigan",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft cardigan with travel pants and comfortable loafers for a cozy and practical travel outfit."
      }
    ],
    "Overweight Short": [
      {
        "top": "Flowy kurta",
        "bottom": "Churidar",
        "shoes": "Comfortable flats",
        "description": "A flowy kurta with churidar and comfortable flats for an easy and stylish travel look."
      },
      {
        "top": "Casual tunic",
        "bottom": "Leggings",
        "shoes": "Slip-on shoes",
        "description": "A casual tunic with leggings and slip-on shoes for a relaxed travel outfit."
      },
      {
        "top": "Short-sleeve dress",
        "bottom": "N/A",
        "shoes": "Sneakers",
        "description": "A short-sleeve dress with sneakers for a comfortable travel look."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Long kurti",
        "bottom": "Trousers",
        "shoes": "Loafers",
        "description": "A long kurti with trousers and loafers for a comfortable and refined travel outfit."
      },
      {
        "top": "Maxi dress",
        "bottom": "N/A",
        "shoes": "Comfortable flats",
        "description": "A maxi dress with comfortable flats for an easygoing travel look."
      },
      {
        "top": "Lightweight sweater",
        "bottom": "Jeans",
        "shoes": "Casual sneakers",
        "description": "A lightweight sweater with jeans and casual sneakers for a relaxed travel style."
      }
    ],
    "Overweight Average": [
      {
        "top": "Kurta with side slits",
        "bottom": "Leggings",
        "shoes": "Comfortable sandals",
        "description": "A kurta with side slits paired with leggings and comfortable sandals for a stylish travel look."
      },
      {
        "top": "Casual blouse",
        "bottom": "Culottes",
        "shoes": "Slip-on shoes",
        "description": "A casual blouse with culottes and slip-on shoes for a relaxed yet fashionable travel outfit."
      },
      {
        "top": "Soft cardigan",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft cardigan with travel pants and comfortable loafers for a cozy and practical travel look."
      }
    ]
    },
    "Housewarming Parties": {
    "Skinny Short": [
      {
        "top": "Festive kurta",
        "bottom": "Churidar",
        "shoes": "Ballet flats",
        "description": "A festive kurta with churidar and ballet flats for a stylish housewarming party outfit."
      },
      {
        "top": "Casual anarkali",
        "bottom": "Leggings",
        "shoes": "Comfortable sandals",
        "description": "A casual anarkali with leggings and comfortable sandals for a relaxed housewarming look."
      },
      {
        "top": "Short-sleeve blouse",
        "bottom": "Palazzo pants",
        "shoes": "Slip-on shoes",
        "description": "A short-sleeve blouse with palazzo pants and slip-on shoes for an elegant appearance."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Long kurta",
        "bottom": "Trousers",
        "shoes": "Loafers",
        "description": "A long kurta with trousers and loafers for a refined housewarming party outfit."
      },
      {
        "top": "Maxi dress",
        "bottom": "N/A",
        "shoes": "Ballet flats",
        "description": "A maxi dress with ballet flats for a chic and comfortable housewarming look."
      },
      {
        "top": "Lightweight sweater",
        "bottom": "Jeans",
        "shoes": "Casual loafers",
        "description": "A lightweight sweater with jeans and casual loafers for a casual yet stylish appearance."
      }
    ],
    "Skinny Average": [
      {
        "top": "Kurta with embroidery",
        "bottom": "Leggings",
        "shoes": "Ballet flats",
        "description": "A kurta with embroidery paired with leggings and ballet flats for an elegant housewarming look."
      },
      {
        "top": "Casual blouse",
        "bottom": "Culottes",
        "shoes": "Slip-on shoes",
        "description": "A casual blouse with culottes and slip-on shoes for a relaxed yet stylish housewarming outfit."
      },
      {
        "top": "Soft sweater",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft sweater with travel pants and comfortable loafers for a cozy housewarming appearance."
      }
    ],
    "Lean Short": [
      {
        "top": "A-line kurta",
        "bottom": "Churidar",
        "shoes": "Comfortable flats",
        "description": "An A-line kurta with churidar and comfortable flats for a stylish housewarming look."
      },
      {
        "top": "Casual anarkali",
        "bottom": "Leggings",
        "shoes": "Slip-on shoes",
        "description": "A casual anarkali with leggings and slip-on shoes for a chic housewarming outfit."
      },
      {
        "top": "Short-sleeve dress",
        "bottom": "N/A",
        "shoes": "Comfortable sandals",
        "description": "A short-sleeve dress with comfortable sandals for a relaxed housewarming style."
      }
    ],
    "Lean Tall": [
      {
        "top": "Long kurta",
        "bottom": "Trousers",
        "shoes": "Loafers",
        "description": "A long kurta with trousers and loafers for a refined housewarming look."
      },
      {
        "top": "Maxi dress",
        "bottom": "N/A",
        "shoes": "Comfortable flats",
        "description": "A maxi dress with comfortable flats for an elegant housewarming appearance."
      },
      {
        "top": "Lightweight blouse",
        "bottom": "Jeans",
        "shoes": "Casual loafers",
        "description": "A lightweight blouse with jeans and casual loafers for a casual housewarming outfit."
      }
    ],
    "Lean Average": [
      {
        "top": "Kurta with embroidery",
        "bottom": "Leggings",
        "shoes": "Comfortable sandals",
        "description": "A kurta with embroidery paired with leggings and comfortable sandals for a stylish housewarming look."
      },
      {
        "top": "Casual blouse",
        "bottom": "Culottes",
        "shoes": "Slip-on shoes",
        "description": "A casual blouse with culottes and slip-on shoes for a relaxed yet stylish housewarming outfit."
      },
      {
        "top": "Soft cardigan",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft cardigan with travel pants and comfortable loafers for a cozy housewarming look."
      }
    ],
    "Lean Muscular Short": [
      {
        "top": "Tailored kurta",
        "bottom": "Churidar",
        "shoes": "Comfortable flats",
        "description": "A tailored kurta with churidar and comfortable flats for a sophisticated housewarming look."
      },
      {
        "top": "Casual anarkali",
        "bottom": "Leggings",
        "shoes": "Slip-on shoes",
        "description": "A casual anarkali with leggings and slip-on shoes for a chic housewarming outfit."
      },
      {
        "top": "Short-sleeve blouse",
        "bottom": "Palazzo pants",
        "shoes": "Sneakers",
        "description": "A short-sleeve blouse with palazzo pants and sneakers for a comfortable and stylish look."
      }
    ],
    "Lean Muscular Tall": [
      {
        "top": "Long kurti with side slits",
        "bottom": "Trousers",
        "shoes": "Loafers",
        "description": "A long kurti with side slits paired with trousers and loafers for a refined housewarming look."
      },
      {
        "top": "Maxi dress with belt",
        "bottom": "N/A",
        "shoes": "Comfortable flats",
        "description": "A maxi dress with a belt and comfortable flats for a polished and practical housewarming outfit."
      },
      {
        "top": "Lightweight sweater",
        "bottom": "Jeans",
        "shoes": "Casual sneakers",
        "description": "A lightweight sweater with jeans and casual sneakers for a relaxed housewarming style."
      }
    ],
    "Lean Muscular Average": [
      {
        "top": "Kurta with fitted design",
        "bottom": "Leggings",
        "shoes": "Comfortable sandals",
        "description": "A kurta with a fitted design paired with leggings and comfortable sandals for a stylish housewarming look."
      },
      {
        "top": "Casual blouse",
        "bottom": "Culottes",
        "shoes": "Slip-on shoes",
        "description": "A casual blouse with culottes and slip-on shoes for a relaxed yet fashionable housewarming outfit."
      },
      {
        "top": "Soft cardigan",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft cardigan with travel pants and comfortable loafers for a cozy housewarming look."
      }
    ],
    "Average Short": [
      {
        "top": "Kurta with side slits",
        "bottom": "Leggings",
        "shoes": "Comfortable sandals",
        "description": "A kurta with side slits paired with leggings and comfortable sandals for a stylish housewarming look."
      },
      {
        "top": "Relaxed shirt",
        "bottom": "Culottes",
        "shoes": "Slip-on sneakers",
        "description": "A relaxed shirt with culottes and slip-on sneakers for a casual housewarming outfit."
      },
      {
        "top": "Soft sweater",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft sweater with travel pants and comfortable loafers for a cozy and practical housewarming look."
      }
    ],
    "Average Tall": [
      {
        "top": "Flowy kurti",
        "bottom": "Trousers",
        "shoes": "Loafers",
        "description": "A flowy kurti with trousers and loafers for a stylish and comfortable housewarming outfit."
      },
      {
        "top": "Maxi dress",
        "bottom": "N/A",
        "shoes": "Comfortable flats",
        "description": "A maxi dress with comfortable flats for a relaxed housewarming style."
      },
      {
        "top": "Lightweight blouse",
        "bottom": "Jeans",
        "shoes": "Casual sneakers",
        "description": "A lightweight blouse with jeans and casual sneakers for an easygoing housewarming look."
      }
    ],
    "Average Average": [
      {
        "top": "Kurta with embroidery",
        "bottom": "Leggings",
        "shoes": "Comfortable sandals",
        "description": "A kurta with embroidery paired with leggings and comfortable sandals for a chic housewarming outfit."
      },
      {
        "top": "Casual blouse",
        "bottom": "Culottes",
        "shoes": "Slip-on shoes",
        "description": "A casual blouse with culottes and slip-on shoes for a relaxed yet stylish housewarming look."
      },
      {
        "top": "Soft cardigan",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft cardigan with travel pants and comfortable loafers for a cozy housewarming outfit."
      }
    ],
    "Chubby Short": [
      {
        "top": "A-line kurta",
        "bottom": "Churidar",
        "shoes": "Comfortable sandals",
        "description": "An A-line kurta with churidar and comfortable sandals for a flattering housewarming outfit."
      },
      {
        "top": "Casual anarkali",
        "bottom": "Leggings",
        "shoes": "Slip-on shoes",
        "description": "A casual anarkali with leggings and slip-on shoes for a chic housewarming look."
      },
      {
        "top": "Short-sleeve dress",
        "bottom": "N/A",
        "shoes": "Comfortable flats",
        "description": "A short-sleeve dress with comfortable flats for a relaxed housewarming style."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Long kurta",
        "bottom": "Trousers",
        "shoes": "Loafers",
        "description": "A long kurta with trousers and loafers for a stylish and comfortable housewarming outfit."
      },
      {
        "top": "Maxi dress",
        "bottom": "N/A",
        "shoes": "Comfortable sandals",
        "description": "A maxi dress with comfortable sandals for an easygoing housewarming look."
      },
      {
        "top": "Lightweight sweater",
        "bottom": "Jeans",
        "shoes": "Casual sneakers",
        "description": "A lightweight sweater with jeans and casual sneakers for a cozy housewarming style."
      }
    ],
    "Chubby Average": [
      {
        "top": "Kurta with side slits",
        "bottom": "Leggings",
        "shoes": "Comfortable sandals",
        "description": "A kurta with side slits paired with leggings and comfortable sandals for a flattering housewarming look."
      },
      {
        "top": "Casual blouse",
        "bottom": "Culottes",
        "shoes": "Slip-on shoes",
        "description": "A casual blouse with culottes and slip-on shoes for a relaxed yet stylish housewarming outfit."
      },
      {
        "top": "Soft cardigan",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft cardigan with travel pants and comfortable loafers for a cozy housewarming look."
      }
    ],
    "Overweight Short": [
      {
        "top": "Flowy kurta",
        "bottom": "Churidar",
        "shoes": "Comfortable sandals",
        "description": "A flowy kurta with churidar and comfortable sandals for a stylish housewarming look."
      },
      {
        "top": "Casual anarkali",
        "bottom": "Leggings",
        "shoes": "Slip-on shoes",
        "description": "A casual anarkali with leggings and slip-on shoes for a relaxed housewarming outfit."
      },
      {
        "top": "Short-sleeve dress",
        "bottom": "N/A",
        "shoes": "Sneakers",
        "description": "A short-sleeve dress with sneakers for a comfortable housewarming style."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Long kurta",
        "bottom": "Trousers",
        "shoes": "Loafers",
        "description": "A long kurta with trousers and loafers for a refined housewarming look."
      },
      {
        "top": "Maxi dress",
        "bottom": "N/A",
        "shoes": "Comfortable flats",
        "description": "A maxi dress with comfortable flats for a relaxed housewarming outfit."
      },
      {
        "top": "Lightweight sweater",
        "bottom": "Jeans",
        "shoes": "Casual sneakers",
        "description": "A lightweight sweater with jeans and casual sneakers for a cozy travel style."
      }
    ],
    "Overweight Average": [
      {
        "top": "Kurta with side slits",
        "bottom": "Leggings",
        "shoes": "Comfortable sandals",
        "description": "A kurta with side slits paired with leggings and comfortable sandals for a flattering housewarming look."
      },
      {
        "top": "Casual blouse",
        "bottom": "Culottes",
        "shoes": "Slip-on shoes",
        "description": "A casual blouse with culottes and slip-on shoes for a relaxed yet stylish housewarming outfit."
      },
      {
        "top": "Soft cardigan",
        "bottom": "Travel pants",
        "shoes": "Comfortable loafers",
        "description": "A soft cardigan with travel pants and comfortable loafers for a cozy housewarming look."
      }
    ]
    },
    "Anniversary Celebrations": {
      "Skinny Short": [
        {
          "top": "Floral lehenga choli",
          "bottom": "Lehenga",
          "shoes": "Embellished sandals",
          "description": "A floral lehenga choli with lehenga and embellished sandals for a chic anniversary celebration."
        },
        {
          "top": "Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A flowing Anarkali dress paired with heeled sandals for a graceful anniversary look."
        },
        {
          "top": "Designer saree",
          "bottom": "Saree",
          "shoes": "Traditional juttis",
          "description": "A designer saree with traditional juttis for an elegant anniversary celebration."
        }
      ],
      "Skinny Tall": [
        {
          "top": "Embroidered saree",
          "bottom": "Saree",
          "shoes": "High-heeled sandals",
          "description": "An embroidered saree with high-heeled sandals for a sophisticated anniversary outfit."
        },
        {
          "top": "Anarkali suit",
          "bottom": "Churidar",
          "shoes": "Elegant flats",
          "description": "An Anarkali suit with churidar and elegant flats for a stylish anniversary celebration."
        },
        {
          "top": "Silk lehenga",
          "bottom": "Lehenga",
          "shoes": "Heeled sandals",
          "description": "A silk lehenga with heeled sandals for a classy anniversary look."
        }
      ],
      "Skinny Average": [
        {
          "top": "Chiffon saree",
          "bottom": "Saree",
          "shoes": "Embellished flats",
          "description": "A chiffon saree with embellished flats for a graceful anniversary celebration."
        },
        {
          "top": "Knee-length kurti",
          "bottom": "Leggings",
          "shoes": "Flat sandals",
          "description": "A knee-length kurti with leggings and flat sandals for a comfortable yet stylish anniversary look."
        },
        {
          "top": "Silk Anarkali",
          "bottom": "N/A",
          "shoes": "Traditional juttis",
          "description": "A silk Anarkali dress with traditional juttis for an elegant anniversary outfit."
        }
      ],
      "Lean Short": [
        {
          "top": "Cotton saree",
          "bottom": "Saree",
          "shoes": "Comfortable sandals",
          "description": "A cotton saree with comfortable sandals for a relaxed anniversary celebration."
        },
        {
          "top": "Long kurti",
          "bottom": "Churidar",
          "shoes": "Traditional flats",
          "description": "A long kurti with churidar and traditional flats for a modest yet stylish anniversary look."
        },
        {
          "top": "A-line Anarkali",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "An A-line Anarkali dress with heeled sandals for a chic anniversary celebration."
        }
      ],
      "Lean Tall": [
        {
          "top": "Saree with heavy blouse",
          "bottom": "Saree",
          "shoes": "High-heeled sandals",
          "description": "A saree with a heavy blouse and high-heeled sandals for a grand anniversary look."
        },
        {
          "top": "Long kurti with embroidery",
          "bottom": "Trousers",
          "shoes": "Elegant flats",
          "description": "A long kurti with embroidery paired with trousers and elegant flats for a refined anniversary outfit."
        },
        {
          "top": "Maxi dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A maxi dress with heeled sandals for a stylish anniversary celebration."
        }
      ],
      "Lean Average": [
        {
          "top": "Embroidered lehenga",
          "bottom": "Lehenga",
          "shoes": "Traditional sandals",
          "description": "An embroidered lehenga with traditional sandals for a festive anniversary look."
        },
        {
          "top": "Casual kurta",
          "bottom": "Leggings",
          "shoes": "Comfortable flats",
          "description": "A casual kurta with leggings and comfortable flats for a relaxed anniversary outfit."
        },
        {
          "top": "Chiffon Anarkali",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A chiffon Anarkali dress with heeled sandals for a graceful anniversary look."
        }
      ],
      "Chubby Short": [
        {
          "top": "A-line lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "An A-line lehenga with comfortable sandals for a flattering anniversary celebration."
        },
        {
          "top": "Embroidered kurti",
          "bottom": "Churidar",
          "shoes": "Traditional flats",
          "description": "An embroidered kurti with churidar and traditional flats for a chic anniversary look."
        },
        {
          "top": "Long Anarkali",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A long Anarkali dress with heeled sandals for a stylish anniversary celebration."
        }
      ],
      "Chubby Tall": [
        {
          "top": "Saree with heavy embroidery",
          "bottom": "Saree",
          "shoes": "Comfortable sandals",
          "description": "A saree with heavy embroidery and comfortable sandals for a grand anniversary look."
        },
        {
          "top": "Long kurti with side slits",
          "bottom": "Trousers",
          "shoes": "Elegant flats",
          "description": "A long kurti with side slits paired with trousers and elegant flats for a refined anniversary outfit."
        },
        {
          "top": "Maxi dress with belt",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A maxi dress with a belt and heeled sandals for a sophisticated anniversary celebration."
        }
      ],
      "Chubby Average": [
        {
          "top": "Floral lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "A floral lehenga with comfortable sandals for a chic and flattering anniversary outfit."
        },
        {
          "top": "Casual kurta",
          "bottom": "Leggings",
          "shoes": "Comfortable flats",
          "description": "A casual kurta with leggings and comfortable flats for a relaxed anniversary look."
        },
        {
          "top": "Long Anarkali",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A long Anarkali dress with heeled sandals for an elegant anniversary celebration."
        }
      ],
      "Overweight Short": [
        {
          "top": "Flowy lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "A flowy lehenga with comfortable sandals for a stylish and comfortable anniversary look."
        },
        {
          "top": "Embroidered kurti",
          "bottom": "Churidar",
          "shoes": "Traditional flats",
          "description": "An embroidered kurti with churidar and traditional flats for a flattering anniversary outfit."
        },
        {
          "top": "Soft Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A soft Anarkali dress with heeled sandals for a chic anniversary celebration."
        }
      ],
      "Overweight Tall": [
        {
          "top": "Heavy saree",
          "bottom": "Saree",
          "shoes": "Comfortable sandals",
          "description": "A heavy saree with comfortable sandals for a grand anniversary look."
        },
        {
          "top": "Long kurti with side slits",
          "bottom": "Trousers",
          "shoes": "Elegant flats",
          "description": "A long kurti with side slits paired with trousers and elegant flats for a stylish anniversary outfit."
        },
        {
          "top": "Maxi dress with belt",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A maxi dress with a belt and heeled sandals for a refined anniversary celebration."
        }
      ],
      "Overweight Average": [
        {
          "top": "Embroidered lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "An embroidered lehenga with comfortable sandals for a chic anniversary look."
        },
        {
          "top": "Casual kurta",
          "bottom": "Leggings",
          "shoes": "Comfortable flats",
          "description": "A casual kurta with leggings and comfortable flats for a relaxed anniversary outfit."
        },
        {
          "top": "Soft Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A soft Anarkali dress with heeled sandals for a graceful anniversary celebration."
        }
      ]
    },
    "Funerals or Memorial Services": {
      "Skinny Short": [
        {
          "top": "Black saree",
          "bottom": "Saree",
          "shoes": "Black flats",
          "description": "A classic black saree with black flats for a respectful and dignified memorial service."
        },
        {
          "top": "Anarkali suit",
          "bottom": "Churidar",
          "shoes": "Simple sandals",
          "description": "A modest Anarkali suit with churidar and simple sandals for a respectful look at a memorial service."
        },
        {
          "top": "Black salwar kameez",
          "bottom": "Salwar",
          "shoes": "Traditional sandals",
          "description": "A black salwar kameez with traditional sandals for a somber and respectful occasion."
        }
      ],
      "Skinny Tall": [
        {
          "top": "Black saree with embroidery",
          "bottom": "Saree",
          "shoes": "Black flats",
          "description": "A black saree with subtle embroidery and black flats for a respectful and elegant memorial service outfit."
        },
        {
          "top": "Anarkali dress",
          "bottom": "Churidar",
          "shoes": "Simple sandals",
          "description": "A black Anarkali dress with churidar and simple sandals for a somber memorial service look."
        },
        {
          "top": "Long black kurti",
          "bottom": "Leggings",
          "shoes": "Elegant flats",
          "description": "A long black kurti with leggings and elegant flats for a respectful memorial service outfit."
        }
      ],
      "Skinny Average": [
        {
          "top": "Black chiffon saree",
          "bottom": "Saree",
          "shoes": "Simple black sandals",
          "description": "A black chiffon saree with simple black sandals for a dignified and respectful look."
        },
        {
          "top": "Long kurti",
          "bottom": "Leggings",
          "shoes": "Black flats",
          "description": "A long black kurti with leggings and black flats for a modest and respectful memorial service outfit."
        },
        {
          "top": "Black Anarkali",
          "bottom": "N/A",
          "shoes": "Simple sandals",
          "description": "A black Anarkali dress with simple sandals for a respectful and somber look."
        }
      ],
      "Lean Short": [
        {
          "top": "Simple black saree",
          "bottom": "Saree",
          "shoes": "Comfortable sandals",
          "description": "A simple black saree with comfortable sandals for a modest memorial service outfit."
        },
        {
          "top": "Long kurti",
          "bottom": "Churidar",
          "shoes": "Simple flats",
          "description": "A long black kurti with churidar and simple flats for a respectful memorial service look."
        },
        {
          "top": "Black Anarkali",
          "bottom": "N/A",
          "shoes": "Traditional sandals",
          "description": "A black Anarkali dress with traditional sandals for a dignified memorial service outfit."
        }
      ],
      "Lean Tall": [
        {
          "top": "Black saree with subtle embellishments",
          "bottom": "Saree",
          "shoes": "Simple black flats",
          "description": "A black saree with subtle embellishments and simple black flats for a dignified memorial service look."
        },
        {
          "top": "Long black kurti",
          "bottom": "Leggings",
          "shoes": "Elegant flats",
          "description": "A long black kurti with leggings and elegant flats for a respectful memorial service outfit."
        },
        {
          "top": "Maxi black dress",
          "bottom": "N/A",
          "shoes": "Simple sandals",
          "description": "A maxi black dress with simple sandals for a respectful and modest memorial service look."
        }
      ],
      "Lean Average": [
        {
          "top": "Black saree",
          "bottom": "Saree",
          "shoes": "Simple sandals",
          "description": "A black saree with simple sandals for a respectful and somber memorial service."
        },
        {
          "top": "Casual kurti",
          "bottom": "Leggings",
          "shoes": "Comfortable flats",
          "description": "A casual black kurti with leggings and comfortable flats for a modest memorial service outfit."
        },
        {
          "top": "Black Anarkali",
          "bottom": "N/A",
          "shoes": "Simple sandals",
          "description": "A black Anarkali dress with simple sandals for a dignified memorial service look."
        }
      ],
      "Chubby Short": [
        {
          "top": "Black A-line lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "A black A-line lehenga with comfortable sandals for a respectful memorial service look."
        },
        {
          "top": "Black kurti",
          "bottom": "Churidar",
          "shoes": "Traditional flats",
          "description": "A black kurti with churidar and traditional flats for a somber memorial service."
        },
        {
          "top": "Long black Anarkali",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A long black Anarkali dress with heeled sandals for a dignified memorial service outfit."
        }
      ],
      "Chubby Tall": [
        {
          "top": "Heavy black saree",
          "bottom": "Saree",
          "shoes": "Comfortable sandals",
          "description": "A heavy black saree with comfortable sandals for a grand memorial service look."
        },
        {
          "top": "Long kurti with side slits",
          "bottom": "Trousers",
          "shoes": "Elegant flats",
          "description": "A long kurti with side slits paired with trousers and elegant flats for a stylish memorial service outfit."
        },
        {
          "top": "Maxi dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A maxi dress with heeled sandals for a refined memorial service look."
        }
      ],
      "Chubby Average": [
        {
          "top": "Black floral lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "A black floral lehenga with comfortable sandals for a respectful memorial service outfit."
        },
        {
          "top": "Casual kurti",
          "bottom": "Leggings",
          "shoes": "Comfortable flats",
          "description": "A casual black kurti with leggings and comfortable flats for a modest memorial service look."
        },
        {
          "top": "Long black Anarkali",
          "bottom": "N/A",
          "shoes": "Simple sandals",
          "description": "A long black Anarkali dress with simple sandals for a dignified memorial service outfit."
        }
      ],
      "Overweight Short": [
        {
          "top": "Flowy black lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "A flowy black lehenga with comfortable sandals for a respectful and comfortable memorial service look."
        },
        {
          "top": "Black kurti with embroidery",
          "bottom": "Churidar",
          "shoes": "Traditional flats",
          "description": "A black kurti with embroidery and churidar for a somber memorial service outfit."
        },
        {
          "top": "Soft black Anarkali",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A soft black Anarkali dress with heeled sandals for a respectful memorial service look."
        }
      ],
      "Overweight Tall": [
        {
          "top": "Heavy black saree",
          "bottom": "Saree",
          "shoes": "Comfortable sandals",
          "description": "A heavy black saree with comfortable sandals for a grand memorial service look."
        },
        {
          "top": "Long kurti with side slits",
          "bottom": "Trousers",
          "shoes": "Elegant flats",
          "description": "A long kurti with side slits paired with trousers and elegant flats for a stylish memorial service outfit."
        },
        {
          "top": "Maxi dress with belt",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A maxi dress with a belt and heeled sandals for a refined memorial service look."
        }
      ],
      "Overweight Average": [
        {
          "top": "Embroidered black lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "An embroidered black lehenga with comfortable sandals for a respectful memorial service outfit."
        },
        {
          "top": "Casual black kurti",
          "bottom": "Leggings",
          "shoes": "Comfortable flats",
          "description": "A casual black kurti with leggings and comfortable flats for a modest memorial service look."
        },
        {
          "top": "Soft black Anarkali",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A soft black Anarkali dress with heeled sandals for a dignified memorial service look."
        }
      ]
    },
    "Reunions": {
      "Skinny Short": [
        {
          "top": "Casual kurti",
          "bottom": "Leggings",
          "shoes": "Comfortable sandals",
          "description": "A casual kurti with leggings and comfortable sandals for a relaxed reunion gathering."
        },
        {
          "top": "Floral Anarkali",
          "bottom": "N/A",
          "shoes": "Flat sandals",
          "description": "A floral Anarkali dress with flat sandals for a stylish reunion outfit."
        },
        {
          "top": "Chiffon saree",
          "bottom": "Saree",
          "shoes": "Elegant flats",
          "description": "A chiffon saree with elegant flats for a sophisticated reunion look."
        }
      ],
      "Skinny Tall": [
        {
          "top": "Maxi dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A maxi dress with heeled sandals for a chic and comfortable reunion look."
        },
        {
          "top": "Embroidered Anarkali",
          "bottom": "Churidar",
          "shoes": "Elegant flats",
          "description": "An embroidered Anarkali with churidar and elegant flats for a stylish reunion outfit."
        },
        {
          "top": "Casual saree",
          "bottom": "Saree",
          "shoes": "Comfortable sandals",
          "description": "A casual saree with comfortable sandals for a relaxed reunion gathering."
        }
      ],
      "Skinny Average": [
        {
          "top": "Floral lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable flats",
          "description": "A floral lehenga with comfortable flats for a stylish reunion look."
        },
        {
          "top": "Casual kurti",
          "bottom": "Leggings",
          "shoes": "Flat sandals",
          "description": "A casual kurti with leggings and flat sandals for a relaxed reunion outfit."
        },
        {
          "top": "Chiffon saree",
          "bottom": "Saree",
          "shoes": "Elegant flats",
          "description": "A chiffon saree with elegant flats for a chic reunion look."
        }
      ],
      "Lean Short": [
        {
          "top": "Simple floral saree",
          "bottom": "Saree",
          "shoes": "Comfortable sandals",
          "description": "A simple floral saree with comfortable sandals for a relaxed reunion gathering."
        },
        {
          "top": "Long kurti",
          "bottom": "Leggings",
          "shoes": "Traditional flats",
          "description": "A long kurti with leggings and traditional flats for a stylish reunion outfit."
        },
        {
          "top": "Casual Anarkali",
          "bottom": "N/A",
          "shoes": "Flat sandals",
          "description": "A casual Anarkali dress with flat sandals for a comfortable reunion look."
        }
      ],
      "Lean Tall": [
        {
          "top": "Maxi dress with print",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A printed maxi dress with heeled sandals for a chic reunion look."
        },
        {
          "top": "Long embroidered kurti",
          "bottom": "Trousers",
          "shoes": "Elegant flats",
          "description": "A long embroidered kurti with trousers and elegant flats for a stylish reunion outfit."
        },
        {
          "top": "Casual saree",
          "bottom": "Saree",
          "shoes": "Comfortable sandals",
          "description": "A casual saree with comfortable sandals for a relaxed reunion gathering."
        }
      ],
      "Lean Average": [
        {
          "top": "Floral lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "A floral lehenga with comfortable sandals for a stylish reunion look."
        },
        {
          "top": "Casual kurti",
          "bottom": "Leggings",
          "shoes": "Flat sandals",
          "description": "A casual kurti with leggings and flat sandals for a relaxed reunion outfit."
        },
        {
          "top": "Chiffon Anarkali",
          "bottom": "N/A",
          "shoes": "Elegant flats",
          "description": "A chiffon Anarkali dress with elegant flats for a chic reunion look."
        }
      ],
      "Chubby Short": [
        {
          "top": "A-line lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "An A-line lehenga with comfortable sandals for a flattering reunion look."
        },
        {
          "top": "Embroidered kurti",
          "bottom": "Churidar",
          "shoes": "Traditional flats",
          "description": "An embroidered kurti with churidar and traditional flats for a stylish reunion outfit."
        },
        {
          "top": "Soft Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A soft Anarkali dress with heeled sandals for a graceful reunion look."
        }
      ],
      "Chubby Tall": [
        {
          "top": "Heavy lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "A heavy lehenga with comfortable sandals for a grand reunion look."
        },
        {
          "top": "Long kurti with embroidery",
          "bottom": "Trousers",
          "shoes": "Elegant flats",
          "description": "A long kurti with embroidery and trousers for a stylish reunion outfit."
        },
        {
          "top": "Maxi dress with belt",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A maxi dress with a belt and heeled sandals for a refined reunion look."
        }
      ],
      "Chubby Average": [
        {
          "top": "Embroidered lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "An embroidered lehenga with comfortable sandals for a flattering reunion look."
        },
        {
          "top": "Casual kurti",
          "bottom": "Leggings",
          "shoes": "Comfortable flats",
          "description": "A casual kurti with leggings and comfortable flats for a relaxed reunion outfit."
        },
        {
          "top": "Soft Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A soft Anarkali dress with heeled sandals for a graceful reunion look."
        }
      ],
      "Overweight Short": [
        {
          "top": "Flowy lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "A flowy lehenga with comfortable sandals for a stylish and comfortable reunion look."
        },
        {
          "top": "Embroidered kurti",
          "bottom": "Churidar",
          "shoes": "Traditional flats",
          "description": "An embroidered kurti with churidar for a flattering reunion outfit."
        },
        {
          "top": "Soft Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A soft Anarkali dress with heeled sandals for a respectful reunion look."
        }
      ],
      "Overweight Tall": [
        {
          "top": "Heavy lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "A heavy lehenga with comfortable sandals for a grand reunion look."
        },
        {
          "top": "Long kurti with side slits",
          "bottom": "Trousers",
          "shoes": "Elegant flats",
          "description": "A long kurti with side slits paired with trousers and elegant flats for a refined reunion outfit."
        },
        {
          "top": "Maxi dress with belt",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A maxi dress with a belt and heeled sandals for a stylish reunion look."
        }
      ],
      "Overweight Average": [
        {
          "top": "Floral lehenga",
          "bottom": "Lehenga",
          "shoes": "Comfortable sandals",
          "description": "A floral lehenga with comfortable sandals for a chic reunion look."
        },
        {
          "top": "Casual kurti",
          "bottom": "Leggings",
          "shoes": "Comfortable flats",
          "description": "A casual kurti with leggings and comfortable flats for a relaxed reunion outfit."
        },
        {
          "top": "Soft Anarkali dress",
          "bottom": "N/A",
          "shoes": "Heeled sandals",
          "description": "A soft Anarkali dress with heeled sandals for a stylish reunion look."
        }
      ]
    },
    "Fashion Shows": {
    "Skinny Short": [
      {
        "top": "Designer saree",
        "bottom": "Saree",
        "shoes": "High heels",
        "description": "A designer saree with high heels for a glamorous fashion show appearance."
      },
      {
        "top": "Chic lehenga choli",
        "bottom": "Lehenga",
        "shoes": "Embellished sandals",
        "description": "A chic lehenga choli with embellished sandals for a stylish fashion show look."
      },
      {
        "top": "Stylish Anarkali",
        "bottom": "N/A",
        "shoes": "Elegant pumps",
        "description": "A stylish Anarkali dress paired with elegant pumps for a stunning fashion show ensemble."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Maxi dress with prints",
        "bottom": "N/A",
        "shoes": "High heels",
        "description": "A printed maxi dress with high heels for a chic fashion show look."
      },
      {
        "top": "Embroidered lehenga",
        "bottom": "Lehenga",
        "shoes": "Heeled sandals",
        "description": "An embroidered lehenga with heeled sandals for a high-fashion appearance."
      },
      {
        "top": "Designer saree",
        "bottom": "Saree",
        "shoes": "Elegant stilettos",
        "description": "A designer saree with elegant stilettos for a striking fashion show outfit."
      }
    ],
    "Skinny Average": [
      {
        "top": "Floral lehenga",
        "bottom": "Lehenga",
        "shoes": "Comfortable heels",
        "description": "A floral lehenga with comfortable heels for a fashionable yet comfortable show appearance."
      },
      {
        "top": "Casual kurti",
        "bottom": "Leggings",
        "shoes": "Stylish flats",
        "description": "A casual kurti with leggings and stylish flats for a relaxed fashion show look."
      },
      {
        "top": "Chiffon saree",
        "bottom": "Saree",
        "shoes": "Elegant sandals",
        "description": "A chiffon saree with elegant sandals for a refined fashion show ensemble."
      }
    ],
    "Lean Short": [
      {
        "top": "Anarkali with embellishments",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "An Anarkali with embellishments paired with heeled sandals for a sophisticated fashion show look."
      },
      {
        "top": "Printed lehenga",
        "bottom": "Lehenga",
        "shoes": "Comfortable heels",
        "description": "A printed lehenga with comfortable heels for a stylish and comfortable fashion show appearance."
      },
      {
        "top": "Designer saree",
        "bottom": "Saree",
        "shoes": "Elegant pumps",
        "description": "A designer saree with elegant pumps for a chic fashion show ensemble."
      }
    ],
    "Lean Tall": [
      {
        "top": "Long embroidered gown",
        "bottom": "N/A",
        "shoes": "High heels",
        "description": "A long embroidered gown with high heels for a dramatic fashion show presence."
      },
      {
        "top": "Maxi dress with intricate details",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A maxi dress with intricate details paired with heeled sandals for an elegant fashion show look."
      },
      {
        "top": "Elegant saree",
        "bottom": "Saree",
        "shoes": "Elegant stilettos",
        "description": "An elegant saree with stilettos for a refined fashion show appearance."
      }
    ],
    "Lean Average": [
      {
        "top": "Floral lehenga",
        "bottom": "Lehenga",
        "shoes": "Comfortable sandals",
        "description": "A floral lehenga with comfortable sandals for a fashionable yet easy-going show appearance."
      },
      {
        "top": "Stylish kurti",
        "bottom": "Leggings",
        "shoes": "Elegant flats",
        "description": "A stylish kurti with leggings and elegant flats for a chic fashion show look."
      },
      {
        "top": "Chiffon saree",
        "bottom": "Saree",
        "shoes": "Heeled sandals",
        "description": "A chiffon saree with heeled sandals for a graceful fashion show ensemble."
      }
    ],
    "Chubby Short": [
      {
        "top": "A-line lehenga",
        "bottom": "Lehenga",
        "shoes": "Comfortable sandals",
        "description": "An A-line lehenga with comfortable sandals for a flattering fashion show look."
      },
      {
        "top": "Embroidered kurti",
        "bottom": "Churidar",
        "shoes": "Stylish flats",
        "description": "An embroidered kurti with churidar and stylish flats for a graceful fashion show appearance."
      },
      {
        "top": "Soft Anarkali",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A soft Anarkali dress with heeled sandals for a chic and comfortable fashion show look."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Heavy lehenga",
        "bottom": "Lehenga",
        "shoes": "Comfortable heels",
        "description": "A heavy lehenga with comfortable heels for a grand fashion show presence."
      },
      {
        "top": "Long kurti with embroidery",
        "bottom": "Trousers",
        "shoes": "Elegant flats",
        "description": "A long embroidered kurti with trousers and elegant flats for a refined fashion show look."
      },
      {
        "top": "Maxi dress with belt",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A maxi dress with a belt and heeled sandals for a stylish fashion show outfit."
      }
    ],
    "Chubby Average": [
      {
        "top": "Embroidered lehenga",
        "bottom": "Lehenga",
        "shoes": "Comfortable sandals",
        "description": "An embroidered lehenga with comfortable sandals for a fashionable and flattering appearance."
      },
      {
        "top": "Casual kurti",
        "bottom": "Leggings",
        "shoes": "Stylish flats",
        "description": "A casual kurti with leggings and stylish flats for a chic fashion show look."
      },
      {
        "top": "Soft Anarkali dress",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A soft Anarkali dress with heeled sandals for a graceful fashion show appearance."
      }
    ],
    "Overweight Short": [
      {
        "top": "Flowy lehenga",
        "bottom": "Lehenga",
        "shoes": "Comfortable sandals",
        "description": "A flowy lehenga with comfortable sandals for a stylish and comfortable fashion show look."
      },
      {
        "top": "Embroidered kurti",
        "bottom": "Churidar",
        "shoes": "Comfortable flats",
        "description": "An embroidered kurti with churidar and comfortable flats for a flattering fashion show appearance."
      },
      {
        "top": "Soft Anarkali dress",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A soft Anarkali dress with heeled sandals for a respectful and stylish fashion show look."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Heavy lehenga",
        "bottom": "Lehenga",
        "shoes": "Comfortable heels",
        "description": "A heavy lehenga with comfortable heels for a grand fashion show appearance."
      },
      {
        "top": "Long kurti with side slits",
        "bottom": "Trousers",
        "shoes": "Elegant flats",
        "description": "A long kurti with side slits paired with trousers and elegant flats for a refined fashion show look."
      },
      {
        "top": "Maxi dress with belt",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A maxi dress with a belt and heeled sandals for a stylish fashion show appearance."
      }
    ],
    "Overweight Average": [
      {
        "top": "Floral lehenga",
        "bottom": "Lehenga",
        "shoes": "Comfortable sandals",
        "description": "A floral lehenga with comfortable sandals for a chic and flattering fashion show look."
      },
      {
        "top": "Casual kurti",
        "bottom": "Leggings",
        "shoes": "Comfortable flats",
        "description": "A casual kurti with leggings and comfortable flats for a stylish fashion show appearance."
      },
      {
        "top": "Soft Anarkali dress",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A soft Anarkali dress with heeled sandals for a graceful fashion show look."
      }
    ]
    },
    "Art Gallery Openings": {
    "Skinny Short": [
      {
        "top": "Contemporary kurti",
        "bottom": "Churidar",
        "shoes": "Stylish flats",
        "description": "A contemporary kurti with churidar and stylish flats for a chic art gallery look."
      },
      {
        "top": "Designer saree",
        "bottom": "Saree",
        "shoes": "Elegant sandals",
        "description": "A designer saree with elegant sandals for an elegant art gallery appearance."
      },
      {
        "top": "Maxi dress",
        "bottom": "N/A",
        "shoes": "High heels",
        "description": "A maxi dress with high heels for a refined art gallery outfit."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Long kurti with embroidery",
        "bottom": "Trousers",
        "shoes": "Heeled sandals",
        "description": "A long embroidered kurti with trousers and heeled sandals for an elegant art gallery look."
      },
      {
        "top": "Designer saree",
        "bottom": "Saree",
        "shoes": "High heels",
        "description": "A designer saree with high heels for a striking art gallery appearance."
      },
      {
        "top": "Chic maxi dress",
        "bottom": "N/A",
        "shoes": "Elegant pumps",
        "description": "A chic maxi dress with elegant pumps for a sophisticated art gallery outfit."
      }
    ],
    "Skinny Average": [
      {
        "top": "Floral kurti",
        "bottom": "Leggings",
        "shoes": "Comfortable flats",
        "description": "A floral kurti with leggings and comfortable flats for a stylish art gallery appearance."
      },
      {
        "top": "Casual saree",
        "bottom": "Saree",
        "shoes": "Comfortable sandals",
        "description": "A casual saree with comfortable sandals for a relaxed yet chic art gallery look."
      },
      {
        "top": "Stylish maxi dress",
        "bottom": "N/A",
        "shoes": "High heels",
        "description": "A stylish maxi dress with high heels for a polished art gallery outfit."
      }
    ],
    "Lean Short": [
      {
        "top": "Chic kurti with embroidery",
        "bottom": "Churidar",
        "shoes": "Stylish flats",
        "description": "A chic kurti with embroidery paired with churidar and stylish flats for an elegant art gallery look."
      },
      {
        "top": "Designer saree",
        "bottom": "Saree",
        "shoes": "Heeled sandals",
        "description": "A designer saree with heeled sandals for a refined art gallery appearance."
      },
      {
        "top": "Soft maxi dress",
        "bottom": "N/A",
        "shoes": "Elegant pumps",
        "description": "A soft maxi dress with elegant pumps for a graceful art gallery outfit."
      }
    ],
    "Lean Tall": [
      {
        "top": "Long kurti with embellishments",
        "bottom": "Trousers",
        "shoes": "High heels",
        "description": "A long kurti with embellishments and trousers paired with high heels for a stunning art gallery look."
      },
      {
        "top": "Elegant saree",
        "bottom": "Saree",
        "shoes": "Heeled sandals",
        "description": "An elegant saree with heeled sandals for a sophisticated art gallery appearance."
      },
      {
        "top": "Maxi dress with intricate designs",
        "bottom": "N/A",
        "shoes": "Elegant pumps",
        "description": "A maxi dress with intricate designs and elegant pumps for a chic art gallery outfit."
      }
    ],
    "Lean Average": [
      {
        "top": "Floral kurti",
        "bottom": "Leggings",
        "shoes": "Stylish flats",
        "description": "A floral kurti with leggings and stylish flats for a refined art gallery look."
      },
      {
        "top": "Soft saree",
        "bottom": "Saree",
        "shoes": "Comfortable sandals",
        "description": "A soft saree with comfortable sandals for a graceful art gallery appearance."
      },
      {
        "top": "Elegant maxi dress",
        "bottom": "N/A",
        "shoes": "High heels",
        "description": "An elegant maxi dress with high heels for a chic and polished art gallery outfit."
      }
    ],
    "Chubby Short": [
      {
        "top": "A-line kurti",
        "bottom": "Churidar",
        "shoes": "Comfortable flats",
        "description": "An A-line kurti with churidar and comfortable flats for a stylish art gallery look."
      },
      {
        "top": "Embroidered saree",
        "bottom": "Saree",
        "shoes": "Stylish sandals",
        "description": "An embroidered saree with stylish sandals for a flattering art gallery appearance."
      },
      {
        "top": "Soft maxi dress",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A soft maxi dress with heeled sandals for a graceful art gallery outfit."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Heavy lehenga",
        "bottom": "Lehenga",
        "shoes": "Comfortable heels",
        "description": "A heavy lehenga with comfortable heels for a grand art gallery appearance."
      },
      {
        "top": "Long kurti with side slits",
        "bottom": "Trousers",
        "shoes": "Elegant flats",
        "description": "A long kurti with side slits and trousers paired with elegant flats for a refined art gallery look."
      },
      {
        "top": "Maxi dress with a belt",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A maxi dress with a belt and heeled sandals for a stylish art gallery ensemble."
      }
    ],
    "Chubby Average": [
      {
        "top": "Embroidered kurti",
        "bottom": "Churidar",
        "shoes": "Comfortable sandals",
        "description": "An embroidered kurti with churidar and comfortable sandals for a flattering art gallery look."
      },
      {
        "top": "Casual saree",
        "bottom": "Saree",
        "shoes": "Comfortable flats",
        "description": "A casual saree with comfortable flats for a stylish and relaxed art gallery appearance."
      },
      {
        "top": "Soft maxi dress",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A soft maxi dress with heeled sandals for a chic art gallery outfit."
      }
    ],
    "Overweight Short": [
      {
        "top": "Flowy kurti",
        "bottom": "Churidar",
        "shoes": "Comfortable flats",
        "description": "A flowy kurti with churidar and comfortable flats for a stylish and comfortable art gallery look."
      },
      {
        "top": "Embroidered saree",
        "bottom": "Saree",
        "shoes": "Stylish sandals",
        "description": "An embroidered saree with stylish sandals for a flattering and elegant art gallery appearance."
      },
      {
        "top": "Soft maxi dress",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A soft maxi dress with heeled sandals for a graceful art gallery look."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Heavy lehenga",
        "bottom": "Lehenga",
        "shoes": "Comfortable heels",
        "description": "A heavy lehenga with comfortable heels for a grand art gallery appearance."
      },
      {
        "top": "Long kurti with side slits",
        "bottom": "Trousers",
        "shoes": "Elegant flats",
        "description": "A long kurti with side slits and trousers paired with elegant flats for a refined art gallery look."
      },
      {
        "top": "Maxi dress with a belt",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A maxi dress with a belt and heeled sandals for a stylish art gallery ensemble."
      }
    ],
    "Overweight Average": [
      {
        "top": "Floral kurti",
        "bottom": "Churidar",
        "shoes": "Comfortable sandals",
        "description": "A floral kurti with churidar and comfortable sandals for a flattering art gallery look."
      },
      {
        "top": "Casual saree",
        "bottom": "Saree",
        "shoes": "Comfortable flats",
        "description": "A casual saree with comfortable flats for a stylish and relaxed art gallery appearance."
      },
      {
        "top": "Soft maxi dress",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A soft maxi dress with heeled sandals for a graceful art gallery outfit."
      }
    ]
    },
    "Club Nights": {
    "Skinny Short": [
      {
        "top": "Trendy crop top",
        "bottom": "High-waisted skirt",
        "shoes": "Heeled sandals",
        "description": "A trendy crop top with a high-waisted skirt and heeled sandals for a chic club night look."
      },
      {
        "top": "Fitted jumpsuit",
        "bottom": "N/A",
        "shoes": "Stylish pumps",
        "description": "A fitted jumpsuit with stylish pumps for a sleek club night appearance."
      },
      {
        "top": "Sequined top",
        "bottom": "Mini skirt",
        "shoes": "High heels",
        "description": "A sequined top with a mini skirt and high heels for a dazzling club night outfit."
      }
    ],
    "Skinny Tall": [
      {
        "top": "Long-sleeve bodycon dress",
        "bottom": "N/A",
        "shoes": "High heels",
        "description": "A long-sleeve bodycon dress with high heels for a striking club night look."
      },
      {
        "top": "Trendy jumpsuit",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A trendy jumpsuit with heeled sandals for a chic club night appearance."
      },
      {
        "top": "Sequined dress",
        "bottom": "N/A",
        "shoes": "Stylish pumps",
        "description": "A sequined dress with stylish pumps for a glamorous club night outfit."
      }
    ],
    "Skinny Average": [
      {
        "top": "Chic crop top",
        "bottom": "High-waisted trousers",
        "shoes": "Comfortable heels",
        "description": "A chic crop top with high-waisted trousers and comfortable heels for a fashionable club night appearance."
      },
      {
        "top": "Stylish jumpsuit",
        "bottom": "N/A",
        "shoes": "Elegant sandals",
        "description": "A stylish jumpsuit with elegant sandals for a sleek club night look."
      },
      {
        "top": "Sequined top",
        "bottom": "A-line skirt",
        "shoes": "Comfortable high heels",
        "description": "A sequined top with an A-line skirt and comfortable high heels for a chic club night ensemble."
      }
    ],
    "Lean Short": [
      {
        "top": "Stylish crop top",
        "bottom": "High-waisted skirt",
        "shoes": "Heeled sandals",
        "description": "A stylish crop top with a high-waisted skirt and heeled sandals for a fashionable club night look."
      },
      {
        "top": "Fitted dress",
        "bottom": "N/A",
        "shoes": "High heels",
        "description": "A fitted dress with high heels for a sleek club night appearance."
      },
      {
        "top": "Sequined blouse",
        "bottom": "Mini skirt",
        "shoes": "Elegant sandals",
        "description": "A sequined blouse with a mini skirt and elegant sandals for a chic club night outfit."
      }
    ],
    "Lean Tall": [
      {
        "top": "Long-sleeve bodycon dress",
        "bottom": "N/A",
        "shoes": "High heels",
        "description": "A long-sleeve bodycon dress with high heels for a striking club night look."
      },
      {
        "top": "Trendy jumpsuit",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A trendy jumpsuit with heeled sandals for a chic club night appearance."
      },
      {
        "top": "Sequined dress",
        "bottom": "N/A",
        "shoes": "Stylish pumps",
        "description": "A sequined dress with stylish pumps for a glamorous club night outfit."
      }
    ],
    "Lean Average": [
      {
        "top": "Chic crop top",
        "bottom": "High-waisted trousers",
        "shoes": "Comfortable heels",
        "description": "A chic crop top with high-waisted trousers and comfortable heels for a fashionable club night look."
      },
      {
        "top": "Stylish jumpsuit",
        "bottom": "N/A",
        "shoes": "Elegant sandals",
        "description": "A stylish jumpsuit with elegant sandals for a sleek club night appearance."
      },
      {
        "top": "Sequined top",
        "bottom": "A-line skirt",
        "shoes": "Comfortable high heels",
        "description": "A sequined top with an A-line skirt and comfortable high heels for a chic club night outfit."
      }
    ],
    "Chubby Short": [
      {
        "top": "A-line dress",
        "bottom": "N/A",
        "shoes": "Comfortable sandals",
        "description": "An A-line dress with comfortable sandals for a flattering club night look."
      },
      {
        "top": "Embroidered top",
        "bottom": "High-waisted skirt",
        "shoes": "Stylish flats",
        "description": "An embroidered top with a high-waisted skirt and stylish flats for a chic club night appearance."
      },
      {
        "top": "Soft jumpsuit",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A soft jumpsuit with heeled sandals for a comfortable and stylish club night outfit."
      }
    ],
    "Chubby Tall": [
      {
        "top": "Maxi dress with belt",
        "bottom": "N/A",
        "shoes": "Comfortable heels",
        "description": "A maxi dress with a belt and comfortable heels for a grand club night look."
      },
      {
        "top": "Long top with trousers",
        "bottom": "Trousers",
        "shoes": "Elegant flats",
        "description": "A long top with trousers and elegant flats for a refined club night appearance."
      },
      {
        "top": "Chic jumpsuit",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A chic jumpsuit with heeled sandals for a stylish club night outfit."
      }
    ],
    "Chubby Average": [
      {
        "top": "Floral dress",
        "bottom": "N/A",
        "shoes": "Comfortable sandals",
        "description": "A floral dress with comfortable sandals for a flattering club night look."
      },
      {
        "top": "Embroidered top",
        "bottom": "High-waisted trousers",
        "shoes": "Stylish flats",
        "description": "An embroidered top with high-waisted trousers and stylish flats for a chic club night appearance."
      },
      {
        "top": "Soft jumpsuit",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A soft jumpsuit with heeled sandals for a stylish and comfortable club night outfit."
      }
    ],
    "Overweight Short": [
      {
        "top": "Flowy dress",
        "bottom": "N/A",
        "shoes": "Comfortable sandals",
        "description": "A flowy dress with comfortable sandals for a flattering and stylish club night look."
      },
      {
        "top": "Embroidered tunic",
        "bottom": "High-waisted skirt",
        "shoes": "Comfortable flats",
        "description": "An embroidered tunic with a high-waisted skirt and comfortable flats for a chic club night appearance."
      },
      {
        "top": "Soft jumpsuit",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A soft jumpsuit with heeled sandals for a comfortable and stylish club night outfit."
      }
    ],
    "Overweight Tall": [
      {
        "top": "Maxi dress with belt",
        "bottom": "N/A",
        "shoes": "Comfortable heels",
        "description": "A maxi dress with a belt and comfortable heels for a grand club night look."
      },
      {
        "top": "Long tunic with trousers",
        "bottom": "Trousers",
        "shoes": "Elegant flats",
        "description": "A long tunic with trousers and elegant flats for a refined club night appearance."
      },
      {
        "top": "Chic jumpsuit",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A chic jumpsuit with heeled sandals for a stylish club night outfit."
      }
    ],
    "Overweight Average": [
      {
        "top": "Floral dress",
        "bottom": "N/A",
        "shoes": "Comfortable sandals",
        "description": "A floral dress with comfortable sandals for a flattering club night look."
      },
      {
        "top": "Embroidered top",
        "bottom": "High-waisted trousers",
        "shoes": "Stylish flats",
        "description": "An embroidered top with high-waisted trousers and stylish flats for a chic club night appearance."
      },
      {
        "top": "Soft jumpsuit",
        "bottom": "N/A",
        "shoes": "Heeled sandals",
        "description": "A soft jumpsuit with heeled sandals for a stylish and comfortable club night outfit."
      }
    ]
    }
  };
  
  const femaleAccessories = [
    { occasion: "Birthday Parties", accessories: ["Statement necklace", "Bracelet", "Clutch purse"] },
    { occasion: "Weddings", accessories: ["Elegant earrings", "Pearl necklace", "Handbag"] },
    { occasion: "Graduation Ceremonies", accessories: ["Simple stud earrings", "Wristwatch", "Tote bag"] },
    { occasion: "Job Interviews", accessories: ["Stud earrings", "Watch", "Briefcase"] },
    { occasion: "First Dates", accessories: ["Pendant necklace", "Charm bracelet", "Crossbody bag"] },
    { occasion: "Corporate Events", accessories: ["Pearl earrings", "Watch", "Briefcase"] },
    { occasion: "Holiday Parties", accessories: ["Festive earrings", "Statement necklace", "Clutch bag"] },
    { occasion: "Casual Outings", accessories: ["Hoop earrings", "Sunglasses", "Backpack"] },
    { occasion: "Formal Dinners", accessories: ["Diamond earrings", "Elegant bracelet", "Clutch bag"] },
    { occasion: "Beach Vacations", accessories: ["Sun hat", "Sunglasses", "Beach bag"] },
    { occasion: "Concerts or Music Festivals", accessories: ["Choker necklace", "Bracelet stack", "Crossbody bag"] },
    { occasion: "Baby Showers", accessories: ["Pearl earrings", "Charm bracelet", "Handbag"] },
    { occasion: "Bridal Showers", accessories: ["Elegant earrings", "Necklace", "Clutch bag"] },
    { occasion: "Cocktail Parties", accessories: ["Statement necklace", "Cocktail ring", "Clutch bag"] },
    { occasion: "Themed Parties", accessories: ["Costume jewelry", "Bracelet", "Handbag"] },
    { occasion: "Religious Ceremonies", accessories: ["Simple earrings", "Watch", "Handbag"] },
    { occasion: "Sports Events", accessories: ["Cap", "Sunglasses", "Backpack"] },
    { occasion: "Traveling", accessories: ["Scarf", "Sunglasses", "Travel bag"] },
    { occasion: "Housewarming Parties", accessories: ["Statement necklace", "Bracelet", "Handbag"] },
    { occasion: "Anniversary Celebrations", accessories: ["Elegant earrings", "Necklace", "Clutch bag"] },
    { occasion: "Funerals or Memorial Services", accessories: ["Simple stud earrings", "Watch", "Handbag"] },
    { occasion: "Reunions", accessories: ["Statement necklace", "Bracelet", "Handbag"] },
    { occasion: "Fashion Shows", accessories: ["Designer earrings", "Fashion bracelet", "Designer bag"] },
    { occasion: "Art Gallery Openings", accessories: ["Artistic necklace", "Bracelet", "Handbag"] },
    { occasion: "Club Nights", accessories: ["Statement earrings", "Bracelet stack", "Clutch bag"] }
  ];
  
  const maleAccessories = [
    { occasion: "Birthday Parties", accessories: ["Watch", "Tie clip", "Cufflinks"] },
    { occasion: "Weddings", accessories: ["Pocket square", "Cufflinks", "Boutonniere"] },
    { occasion: "Graduation Ceremonies", accessories: ["Watch", "Tie", "Belt"] },
    { occasion: "Job Interviews", accessories: ["Tie", "Watch", "Briefcase"] },
    { occasion: "First Dates", accessories: ["Watch", "Belt", "Wallet"] },
    { occasion: "Corporate Events", accessories: ["Cufflinks", "Tie", "Watch"] },
    { occasion: "Holiday Parties", accessories: ["Festive tie", "Cufflinks", "Watch"] },
    { occasion: "Casual Outings", accessories: ["Cap", "Sunglasses", "Backpack"] },
    { occasion: "Formal Dinners", accessories: ["Cufflinks", "Pocket square", "Watch"] },
    { occasion: "Beach Vacations", accessories: ["Sunglasses", "Hat", "Beach bag"] },
    { occasion: "Concerts or Music Festivals", accessories: ["Bandana", "Bracelet", "Crossbody bag"] },
    { occasion: "Baby Showers", accessories: ["Watch", "Tie", "Cufflinks"] },
    { occasion: "Bridal Showers", accessories: ["Pocket square", "Cufflinks", "Watch"] },
    { occasion: "Cocktail Parties", accessories: ["Tie clip", "Cufflinks", "Pocket square"] },
    { occasion: "Themed Parties", accessories: ["Costume accessories", "Bracelet", "Watch"] },
    { occasion: "Religious Ceremonies", accessories: ["Simple tie", "Watch", "Belt"] },
    { occasion: "Sports Events", accessories: ["Cap", "Sunglasses", "Backpack"] },
    { occasion: "Traveling", accessories: ["Scarf", "Sunglasses", "Travel bag"] },
    { occasion: "Housewarming Parties", accessories: ["Watch", "Bracelet", "Wallet"] },
    { occasion: "Anniversary Celebrations", accessories: ["Watch", "Cufflinks", "Tie"] },
    { occasion: "Funerals or Memorial Services", accessories: ["Simple tie", "Watch", "Belt"] },
    { occasion: "Reunions", accessories: ["Watch", "Tie", "Cufflinks"] },
    { occasion: "Fashion Shows", accessories: ["Designer watch", "Fashion bracelet", "Designer bag"] },
    { occasion: "Art Gallery Openings", accessories: ["Artistic tie", "Bracelet", "Watch"] },
    { occasion: "Club Nights", accessories: ["Watch", "Bracelet", "Wallet"] }
  ]; 

  export {maleOutfits,femaleOutfits,occasionsWithEmojis,femaleAccessories, maleAccessories };