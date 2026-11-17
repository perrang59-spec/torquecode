/* TorqueCode — safe eco-driving tips and fuel-saving facts.
   Impact figures are realistic ranges based on common fleet/DOE guidance;
   real results vary by vehicle, climate, traffic and driving style. */

window.TC_TIPS = [
  {
    id: "smooth",
    category: "Driving habits",
    icon: "gauge",
    title: "Smooth is fast: ease onto the throttle",
    body: "Accelerate with a steady, moderate pedal instead of stabbing it, and brake earlier and more gently. Pretend there is an egg under the pedal that you do not want to crack.",
    why: "Aggressive acceleration and late braking waste kinetic energy and force the engine into its least efficient operating range. Smooth inputs can cut fuel use dramatically in stop-and-go driving.",
    impact: "10–40%",
    effort: "Free",
    quick: true
  },
  {
    id: "speed",
    category: "Driving habits",
    icon: "target",
    title: "Ease off above 50 mph",
    titleMetric: "Ease off above 80 km/h",
    body: "Keep highway speed at or near the limit. A 5 mph reduction above 50 mph can save meaningful fuel on a long commute, and the time difference is usually only a minute or two.",
    bodyMetric: "Keep highway speed at or near the limit. Dropping 8 km/h above 80 km/h can save meaningful fuel on a long commute, and the time difference is usually only a minute or two.",
    why: "Aerodynamic drag rises with the square of speed, so the engine works much harder at 75 mph than at 65 mph. This is one of the largest single fuel levers for highway drivers.",
    whyMetric: "Aerodynamic drag rises with the square of speed, so the engine works much harder at 120 km/h than at 105 km/h. This is one of the largest single fuel levers for highway drivers.",
    impact: "7–14%",
    effort: "Free"
  },
  {
    id: "idle",
    category: "Driving habits",
    icon: "clock",
    title: "Kill the long idle",
    body: "Start the car, wait a few seconds for oil pressure, and drive gently. Skip the 10-minute driveway warm-up, and shut the engine off while waiting at long lights, school pickups or drive-throughs where it is safe and legal.",
    why: "An idling engine gets zero miles per gallon while burning roughly 0.2–0.5 gallons per hour. Modern fuel-injected engines warm up faster under light load than at idle.",
    whyMetric: "An idling engine burns fuel for nothing — roughly 0.8–1.9 litres per hour. Modern fuel-injected engines warm up faster under light load than at idle.",
    impact: "0.2–0.5 gal/hr",
    impactMetric: "0.8–1.9 L/hr",
    effort: "Free",
    quick: true
  },
  {
    id: "cruise",
    category: "Driving habits",
    icon: "route",
    title: "Use cruise control on open roads",
    body: "On flat highways and steady-speed roads, let cruise control hold the speed instead of letting your right foot drift. In hilly terrain or heavy traffic, leave it off and drive smoothly by hand.",
    why: "Cruise control avoids the small speed corrections and surges that burn extra fuel. It is most effective on long, constant-speed trips where aerodynamic drag dominates.",
    impact: "5–10%",
    effort: "Free"
  },
  {
    id: "anticipate",
    category: "Driving habits",
    icon: "shield",
    title: "Look two cars ahead",
    body: "Watch traffic far ahead and lift off the throttle early when you see a red light, a stop sign or brake lights. Try to time lights so you roll through them instead of stopping and restarting.",
    why: "Every unnecessary stop turns fuel into brake heat. Anticipating traffic keeps the car moving in its efficient range and reduces wear on the brakes.",
    impact: "5–10%",
    effort: "Free",
    quick: true
  },
  {
    id: "ac",
    category: "Driving habits",
    icon: "thermo",
    title: "Be smart with A/C and windows",
    body: "At low speeds, open the windows and skip the A/C. At highway speed, close the windows and use A/C on a moderate setting. Use recirculation once the cabin is cool, and park in the shade when you can.",
    why: "Air conditioning can add 10–25% to fuel use in city driving because the compressor loads the engine. At highway speed, the drag from open windows usually costs more than the A/C.",
    impact: "10–25% city",
    effort: "Free"
  },
  {
    id: "shift",
    category: "Driving habits",
    icon: "car",
    title: "Shift early, use eco mode",
    body: "In a manual, shift around 1,500–2,500 rpm and stay in the highest comfortable gear. In an automatic, use eco mode if the car has one and let the transmission upshift rather than forcing it to hold a gear.",
    why: "Lower engine speed under light load reduces pumping and friction losses. Eco modes also remap throttle response and shift points to encourage gentler driving.",
    impact: "5–10%",
    effort: "Free"
  },
  {
    id: "track",
    category: "Driving habits",
    icon: "book",
    title: "Track every fill-up",
    body: "Note the distance and fuel volume at each fill-up, or use a fuel-logging app. Watch the trend rather than a single tank, since weather, traffic and route changes all move the number.",
    why: "A sudden drop in fuel economy is an early warning of low tire pressure, a dragging brake, a failing oxygen sensor or a misfire. Catching it early often turns a breakdown into a cheap repair.",
    impact: "Find problems early",
    effort: "Free"
  },
  {
    id: "tires",
    category: "Maintenance",
    icon: "tire",
    title: "Check tire pressure monthly",
    body: "Check all four tires when cold, including the spare, and set them to the pressure on the door-jamb label. Do not use the maximum pressure on the tire sidewall as your target.",
    why: "Underinflated tires flex more and create rolling resistance, which the engine must overcome. Properly inflated tires can improve fuel economy by around 3% and last longer.",
    impact: "Up to 3%",
    effort: "Free",
    quick: true
  },
  {
    id: "air-filter",
    category: "Maintenance",
    icon: "wind",
    title: "Keep the engine breathing",
    body: "Inspect the engine air filter at every oil change and replace it when it is visibly dirty or restricted. Do not over-oil reusable gauze filters, which can contaminate the mass air flow sensor.",
    why: "A severely clogged air filter increases intake restriction and can distort air metering. On modern fuel-injected engines the gain is modest but real, and the filter is inexpensive.",
    impact: "1–3%",
    effort: "Low cost"
  },
  {
    id: "oil",
    category: "Maintenance",
    icon: "fuel",
    title: "Use the specified oil viscosity",
    body: "Use the viscosity and specification in your owner's manual, not whatever is on sale. Modern 0W-20 and 0W-16 oils exist to reduce friction; switching to a thicker oil can cost fuel economy.",
    why: "Thinner oils pump more easily and reduce internal friction, especially when cold. The manufacturer's recommendation balances protection and efficiency for your engine.",
    impact: "1–2%",
    effort: "Low cost"
  },
  {
    id: "plugs",
    category: "Maintenance",
    icon: "bolt",
    title: "Fix misfires and stay on schedule",
    body: "Replace spark plugs at the specified interval and repair any misfire promptly. A flashing check engine light means unburned fuel is reaching the catalyst; stop driving and get it diagnosed.",
    why: "A misfiring cylinder wastes fuel and can destroy a catalytic converter. Even a subtle ignition problem forces the engine to work harder for the same power.",
    impact: "2–10%",
    effort: "Low cost"
  },
  {
    id: "alignment",
    category: "Maintenance",
    icon: "target",
    title: "Fix alignment and dragging brakes",
    body: "If the car pulls, the steering wheel is off-center or the tires wear unevenly, get an alignment. If a wheel feels hot after a drive or the car rolls to a stop unusually quickly, have the brakes checked for drag.",
    why: "Misalignment and dragging brakes add rolling resistance that the engine must constantly overcome. Both also shorten tire and brake life.",
    impact: "2–5%",
    effort: "Low cost"
  },
  {
    id: "trips",
    category: "Route & planning",
    icon: "map",
    title: "Combine errands into one trip",
    body: "Chain your errands instead of making several separate cold starts. Plan the longest leg last so the engine and cabin are already warm, and walk or bike for very short trips when possible.",
    why: "A cold engine uses extra fuel to warm up and reach closed-loop operation. Several short trips can use noticeably more fuel than one longer trip covering the same distance.",
    impact: "5–15%",
    effort: "Free",
    quick: true
  },
  {
    id: "traffic",
    category: "Route & planning",
    icon: "route",
    title: "Route around congestion",
    body: "Check traffic before you leave and take the steady route over the shorter stop-and-go one. On a regular commute, test an earlier or later departure time to avoid peak congestion.",
    why: "Stop-and-go traffic keeps the engine idling and accelerating repeatedly in its least efficient mode. A slightly longer free-flowing route often uses less fuel than a short jammed one.",
    impact: "5–12%",
    effort: "Free"
  },
  {
    id: "carpool",
    category: "Route & planning",
    icon: "users",
    title: "Share the ride or combine the school run",
    body: "Carpool, use transit or combine multiple passengers into one vehicle when you can. Even one day a week of shared commuting makes a measurable annual difference.",
    why: "The biggest fuel saving is not driving a second car at all. Sharing a trip halves the per-person fuel use and reduces congestion for everyone else.",
    impact: "Up to 50%",
    effort: "Free"
  },
  {
    id: "shade",
    category: "Route & planning",
    icon: "sun",
    title: "Park in the shade",
    body: "Choose shade or a garage when parking on hot days, and use a windshield sunshade. Vent the hot air with the windows down for the first minute before turning on the A/C.",
    why: "A cooler cabin means the air conditioning compressor has less heat to remove. This is a small but almost effortless saving on hot-weather trips.",
    impact: "2–5%",
    effort: "Free"
  },
  {
    id: "weight",
    category: "Vehicle care",
    icon: "box",
    title: "Clear out the excess weight",
    body: "Remove heavy items you do not need: tools, sports gear, cases of water, and anything stored in the trunk or bed for 'someday'. Every 100 pounds matters more in a small car than a large truck.",
    why: "Extra mass must be accelerated and carried, so the engine burns more fuel. Weight hurts city driving most because every stop requires accelerating that mass again.",
    impact: "1–2% per 100 lb",
    effort: "Free"
  },
  {
    id: "roof",
    category: "Vehicle care",
    icon: "wind",
    title: "Take off the roof rack when unused",
    body: "Remove roof boxes, bike racks and cargo baskets when the trip is over. If you need a rack regularly, choose a low-profile design and keep the box closed and aligned.",
    why: "Roof accessories disturb airflow and can increase highway fuel consumption substantially. The effect grows with speed because aerodynamic drag rises so quickly.",
    impact: "Up to 25% hwy",
    effort: "Free"
  },
  {
    id: "lrr",
    category: "Vehicle care",
    icon: "tire",
    title: "Choose low-rolling-resistance tires",
    body: "When it is time for new tires, compare rolling-resistance ratings as well as grip, noise and tread life. Pick a tire matched to your climate and driving needs, not just the cheapest option.",
    why: "Tires are responsible for a large share of rolling resistance. Lower-resistance tires can deliver a small but permanent fuel saving over their entire life.",
    impact: "1–3%",
    effort: "Low cost"
  },
  {
    id: "fuel-cap",
    category: "Vehicle care",
    icon: "fuel",
    title: "Tighten the cap and skip the top-off",
    body: "Turn the fuel cap until it clicks, and stop filling at the automatic shutoff. Topping off can force liquid fuel into the EVAP canister and cause a check engine light.",
    why: "A loose cap lets fuel vapor escape and can trigger EVAP codes. Topping off can flood the vapor system, leading to expensive canister repairs and wasted fuel.",
    impact: "Small + avoids repairs",
    effort: "Free"
  },
  {
    id: "octane",
    category: "Vehicle care",
    icon: "dollar",
    title: "Buy the octane the engine actually needs",
    body: "Use the octane rating in your owner's manual. If regular is recommended, premium buys no extra power or economy. If premium is required, do not cheap out and trigger knock-control retard.",
    why: "Higher-octane fuel resists knock but does not contain more energy. Running premium in a regular-fuel car is mostly an unnecessary expense; running regular in a premium-required car can hurt performance and economy.",
    impact: "Save 20–30¢/gal",
    impactMetric: "Save 5–8¢/L",
    effort: "Free"
  }
];

window.TC_FACTS = [
  {
    label: "Myth",
    title: "Premium fuel is not automatically better",
    body: "Octane is a knock-resistance rating, not a cleanliness or power rating. Unless your manual says premium is required, regular fuel is what the engine was calibrated for."
  },
  {
    label: "Myth",
    title: "Idling is not the best way to warm up",
    body: "Modern engines warm faster while being driven gently. A long idle wastes fuel, dilutes oil with fuel and loads the catalytic converter before it is hot."
  },
  {
    label: "Reality check",
    title: "Windows down vs. A/C is speed-dependent",
    body: "Below roughly 45–50 mph, open windows usually cost less fuel than A/C. At highway speed, the aerodynamic drag of open windows typically outweighs the compressor load.",
    bodyMetric: "Below roughly 70–80 km/h, open windows usually cost less fuel than A/C. At highway speed, the aerodynamic drag of open windows typically outweighs the compressor load."
  },
  {
    label: "Safety first",
    title: "Never hypermile at the expense of control",
    body: "Do not coast in neutral, draft trucks, over-inflate tires or shut off the engine while moving. The small fuel gain is not worth losing braking, steering assist or reaction time."
  }
];
