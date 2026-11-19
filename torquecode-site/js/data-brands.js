/* TorqueCode — curated editorial brand map.
   Brand names are used only as descriptive search/filter labels.
   No factory-specific definitions, logos, or manufacturer data are included. */
(function () {
  "use strict";

  var disclaimer =
    "Brand filter and brand keywords are an editorial aid, not factory data. OBD-II codes are generally standard across makes, " +
    "but definitions, symptoms and repair procedures can vary by year, model, engine and market. TorqueCode is not affiliated " +
    "with or endorsed by any vehicle manufacturer. Always confirm with the vehicle's factory service information.";

  var brands = [
    {
      id: "toyota",
      name: "Toyota",
      aliases: ["toyota"],
      note: "Toyota models commonly use variable valve timing and electronic throttle control. The codes below are general OBD-II patterns seen across many vehicles, not Toyota-only factory definitions.",
      codes: ["P0011", "P0016", "P0128", "P0171", "P0300", "P0420", "P0430", "P0442", "P0455", "P0101", "P0340", "P0500", "P0507", "P0562", "P0601", "P0700", "P0705", "P0730", "U0001", "U0073", "U0100", "U0101", "U0121", "U0155", "C0035", "C0040"]
    },
    {
      id: "lexus",
      name: "Lexus",
      aliases: ["lexus"],
      note: "Lexus shares many platforms with Toyota. These are general OBD-II codes seen across many makes, not Lexus-specific factory definitions.",
      codes: ["P0011", "P0016", "P0171", "P0300", "P0420", "P0442", "P0455", "P0101", "P0507", "P0562", "U0001", "U0100", "U0121", "U0155"]
    },
    {
      id: "ford",
      name: "Ford",
      aliases: ["ford", "lincoln", "mercury"],
      note: "Ford models may use an inertia fuel cut-off switch, covered in our P0230 guide, and B1318 is often discussed as a common Ford body code. This is general guidance, not factory-specific data.",
      codes: ["P0230", "P0011", "P0171", "P0300", "P0420", "P0455", "B1318", "B1342", "U0100", "U0140", "P0700", "P0562", "P0601", "P0705", "P0730", "U0001", "U0073", "U0101", "U0121", "U0155", "C0035"]
    },
    {
      id: "volkswagen",
      name: "Volkswagen",
      aliases: ["volkswagen", "vw", "skoda", "seat"],
      note: "VW Group vehicles often use turbocharging and direct injection. These are generic codes seen across many makes; confirm model-specific details with factory information.",
      codes: ["P0299", "P0011", "P0171", "P0300", "P0101", "P0420", "P0442", "P0455", "P0700", "P0730", "P0562", "P0601", "P0705", "P0740", "P0750", "U0001", "U0073", "U0100", "U0101", "U0121"]
    },
    {
      id: "bmw",
      name: "BMW",
      aliases: ["bmw", "mini"],
      note: "BMW and Mini models use complex engine and body electronics. The codes below are general OBD-II explanations, not BMW-specific factory definitions.",
      codes: ["P0011", "P0016", "P0171", "P0300", "P0420", "P0299", "P0521", "P0340", "U0100", "B1000", "P0562", "P0601", "P0606", "U0001", "U0073", "U0140", "U0155", "C0035"]
    },
    {
      id: "mercedes-benz",
      name: "Mercedes-Benz",
      aliases: ["mercedes", "mercedes-benz", "benz", "merc"],
      note: "Mercedes-Benz vehicles use extensive network and body modules. These are general OBD-II codes, not manufacturer-specific definitions.",
      codes: ["P0011", "P0171", "P0300", "P0420", "P0299", "P0700", "P0730", "U0100", "U0140", "B1000", "P0562", "P0601", "U0001", "U0073", "U0101", "U0155", "P0705"]
    },
    {
      id: "audi",
      name: "Audi",
      aliases: ["audi"],
      note: "Audi shares many technologies with the VW Group. These are generic OBD-II patterns seen across many vehicles, not Audi-only factory data.",
      codes: ["P0299", "P0011", "P0171", "P0300", "P0101", "P0420", "P0700", "P0730", "U0100", "P0562", "P0601", "P0705", "U0001", "U0073", "U0101", "U0121"]
    },
    {
      id: "nissan",
      name: "Nissan",
      aliases: ["nissan", "infiniti"],
      note: "Nissan and Infiniti models use variable valve timing and CVT transmissions on many vehicles. The codes below are general guidance, not factory-specific definitions.",
      codes: ["P0011", "P0016", "P0171", "P0300", "P0420", "P0442", "P0455", "P0700", "U0100", "C0035", "P0562", "U0001", "U0073", "U0101", "U0121", "P0705", "P0730"]
    },
    {
      id: "hyundai",
      name: "Hyundai",
      aliases: ["hyundai"],
      note: "Hyundai models across many years use similar generic OBD-II strategies. These explanations are general, not Hyundai-specific factory information.",
      codes: ["P0011", "P0016", "P0171", "P0300", "P0420", "P0455", "P0700", "U0100", "P0562", "U0001", "U0073", "U0101", "U0121", "P0705"]
    },
    {
      id: "kia",
      name: "Kia",
      aliases: ["kia"],
      note: "Kia shares platforms with Hyundai. These are general OBD-II codes seen on many makes, not Kia-specific factory definitions.",
      codes: ["P0011", "P0016", "P0171", "P0300", "P0420", "P0455", "P0700", "U0100", "P0562", "P0730", "U0001", "U0073", "U0101", "U0121", "P0705"]
    },
    {
      id: "mazda",
      name: "Mazda",
      aliases: ["mazda"],
      note: "These are general OBD-II explanations for patterns often seen on petrol engines. They are not Mazda-only factory definitions.",
      codes: ["P0011", "P0171", "P0300", "P0420", "P0455", "P0101", "P0340", "P0562", "U0001", "U0100", "P0700"]
    },
    {
      id: "honda",
      name: "Honda",
      aliases: ["honda", "acura"],
      note: "Honda and Acura models commonly use VTEC and electronic cooling control. The codes below are generic OBD-II guidance, not factory-specific definitions.",
      codes: ["P0011", "P0128", "P0171", "P0300", "P0420", "P0455", "P0101", "P0562", "U0001", "U0100", "P0700"]
    },
    {
      id: "renault",
      name: "Renault",
      aliases: ["renault"],
      note: "Renault models across many markets use turbocharged and diesel engines. These are general codes seen across makes, not Renault-specific factory data.",
      codes: ["P0011", "P0171", "P0300", "P0299", "P0420", "P0455", "P0700", "U0100", "P0562", "U0001", "U0073", "P0705"]
    },
    {
      id: "peugeot",
      name: "Peugeot",
      aliases: ["peugeot", "citroen"],
      note: "Peugeot and Citroen share many platforms. These are generic OBD-II explanations, not manufacturer-specific definitions.",
      codes: ["P0011", "P0171", "P0300", "P0299", "P0420", "P0455", "P0700", "U0100", "P0562", "U0001", "U0073", "P0705"]
    },
    {
      id: "chevrolet",
      name: "Chevrolet",
      aliases: ["chevrolet", "chevy", "gmc", "cadillac", "buick"],
      note: "General Motors models share many platforms. These are general OBD-II codes seen across many makes, not GM-specific factory definitions.",
      codes: ["P0230", "P0300", "P0171", "P0420", "P0455", "P0700", "U0100", "B1342", "P0562", "P0601", "P0705", "P0730", "P0740", "P0750", "U0001", "U0073", "U0101", "U0121", "C0035"]
    },
    {
      id: "isuzu",
      name: "Isuzu",
      aliases: ["isuzu"],
      note: "Isuzu is often associated with diesel and commercial vehicles. The codes below are general OBD-II guidance, not Isuzu-specific factory data.",
      codes: ["P0087", "P0401", "P0299", "P0171", "P0300", "P0420", "P0700", "U0100", "P0562", "U0001", "U0073", "P0705", "P0730"]
    },
    {
      id: "mitsubishi",
      name: "Mitsubishi",
      aliases: ["mitsubishi"],
      note: "These are generic OBD-II explanations for patterns seen across many vehicles, not Mitsubishi-specific factory definitions.",
      codes: ["P0011", "P0171", "P0300", "P0420", "P0455", "U0100", "P0562", "U0001", "U0073", "P0700"]
    },
    {
      id: "subaru",
      name: "Subaru",
      aliases: ["subaru"],
      note: "Subaru models use flat-four engines and all-wheel drive systems. These are general codes, not Subaru-specific factory definitions.",
      codes: ["P0011", "P0171", "P0300", "P0420", "P0455", "P0521", "P0562", "U0001", "U0100", "C0035"]
    },
    {
      id: "volvo",
      name: "Volvo",
      aliases: ["volvo"],
      note: "Volvo models use extensive safety and body electronics. These are general OBD-II explanations, not Volvo-specific factory data.",
      codes: ["P0011", "P0171", "P0300", "P0420", "P0455", "C0035", "U0100", "B1000", "P0562", "U0001", "U0073", "U0140", "U0155"]
    },
    {
      id: "land-rover",
      name: "Land Rover",
      aliases: ["land rover", "landrover", "range rover", "jaguar"],
      note: "Land Rover, Range Rover and Jaguar models use complex network and chassis systems. These are generic OBD-II codes, not factory-specific definitions.",
      codes: ["P0299", "P0171", "P0300", "P0420", "P0455", "U0100", "U0140", "C0035", "B1000", "P0562", "U0001", "U0073", "U0121", "C0040", "C0045"]
    },
    {
      id: "jeep",
      name: "Jeep",
      aliases: ["jeep", "chrysler", "dodge", "ram"],
      note: "Jeep, Chrysler, Dodge and Ram models share many platforms. These are general OBD-II codes seen across makes, not factory-specific definitions.",
      codes: ["P0230", "P0300", "P0171", "P0420", "P0455", "P0700", "P0730", "U0100", "P0562", "P0601", "P0705", "P0740", "P0750", "U0001", "U0073", "U0101", "U0121", "C0035"]
    }
  ];

  var byCode = {};
  brands.forEach(function (brand) {
    brand.codes.forEach(function (code) {
      (byCode[code] = byCode[code] || []).push(brand);
    });
  });

  window.TC_BRANDS = brands;
  window.TC_BRANDS_FOR_CODE = byCode;
  window.TC_BRAND_DISCLAIMER = disclaimer;
})();
