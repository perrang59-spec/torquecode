/* TorqueCode — OBD-II code library, part 2
   Emissions, transmission, hybrid, body, chassis and network codes.
   B/C/U definitions can be manufacturer-specific — always confirm with factory service information. */

window.OBD_CODES.push(
  {
    code: "P0420",
    system: "P",
    category: "Emissions / Catalyst",
    title: 'Catalyst System Efficiency Below Threshold (Bank 1)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Advanced",
    diy: false,
    cost: [200, 1900],
    desc: 'The PCM compares the upstream and downstream oxygen sensors and concludes the bank 1 catalytic converter is not cleaning the exhaust as well as it should. The converter may be aged, or something upstream may be damaging it. Replacing the catalyst without fixing the root cause usually leads to a repeat failure.',
    symptoms: [
      'Check engine light, usually no driveability symptoms',
      'Failed emissions test',
      'Sulfur or rotten-egg smell from the exhaust',
      'Slightly reduced fuel economy',
      'Possible P0300 or P0171 stored as well'
    ],
    causes: [
      'Aged or failed catalytic converter',
      'Exhaust leak before or at the converter',
      'Faulty downstream oxygen sensor',
      'Engine misfire or rich running that overheats the catalyst',
      'Oil or coolant consumption contaminating the catalyst',
      'Use of leaded or incorrect fuel additives'
    ],
    fixes: [
      'Check for other codes first; fix misfires, lean/rich conditions and exhaust leaks before the catalyst.',
      'Inspect the exhaust for leaks and the converter for physical damage or rattle.',
      'Compare upstream and downstream O2 sensor switching on a scan tool.',
      'Verify fuel trims and coolant temperature are normal.',
      'Replace the downstream sensor only if its signal is implausible.',
      'Replace the catalytic converter as the last step, using an OEM-quality unit that matches emissions standards.'
    ],
    related: ["P0430", "P0133", "P0171", "P0300"],
    tip: 'A converter is a victim, not usually the culprit. If you install a new one without repairing the misfire or rich condition, it will fail again.'
  },
  {
    code: "P0430",
    system: "P",
    category: "Emissions / Catalyst",
    title: 'Catalyst System Efficiency Below Threshold (Bank 2)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Advanced",
    diy: false,
    cost: [200, 1900],
    desc: 'Same efficiency test as P0420, applied to the bank 2 catalytic converter on a V6 or V8. Diagnose bank-specific issues first, then shared causes. Emissions compliance and long-term fuel economy are affected.',
    symptoms: [
      'Check engine light and failed emissions test',
      'Sulfur smell from the exhaust',
      'Slight loss of fuel economy',
      'Possible bank 2 misfire or rich codes',
      'Converter rattle on some vehicles'
    ],
    causes: [
      'Worn bank 2 catalytic converter',
      'Exhaust leak in the bank 2 downpipe',
      'Faulty bank 2 downstream oxygen sensor',
      'Bank 2 misfire or rich condition',
      'Oil or coolant contamination',
      'Physical damage to the converter'
    ],
    fixes: [
      'Scan for misfire, fuel trim and O2 sensor codes on bank 2 and repair those first.',
      'Inspect the bank 2 exhaust for leaks and damage.',
      'Compare the bank 2 downstream sensor signal with bank 1.',
      'Check for oil or coolant consumption.',
      'Replace the bank 2 downstream sensor only if needed.',
      'Replace the bank 2 converter if efficiency remains low after repairs.'
    ],
    related: ["P0420", "P0300", "P0175", "P0133"],
    tip: 'If only one bank sets a catalyst code, look hard at that bank first: a leaking injector or misfire on one side can cook just that converter.'
  },
  {
    code: "P0440",
    system: "P",
    category: "Emissions / EVAP",
    title: 'Evaporative Emission Control System Malfunction',
    severity: "low",
    urgency: "Fix soon",
    difficulty: "Easy",
    diy: true,
    cost: [20, 550],
    desc: 'The EVAP system has failed a general self-test. This system captures fuel vapor from the tank and burns it through the engine. A loose gas cap is the most common and cheapest cause, followed by hoses, valves and the charcoal canister.',
    symptoms: [
      'Check engine light, often with no driveability issue',
      'Fuel smell around the rear of the car or engine bay',
      'Difficulty fueling or a hiss when opening the cap',
      'Failed emissions test'
    ],
    causes: [
      'Loose, missing or faulty fuel cap',
      'Cracked or disconnected EVAP hose',
      'Faulty purge or vent solenoid',
      'Leaking charcoal canister',
      'Filler neck rust or damage',
      'Fuel tank pressure sensor fault'
    ],
    fixes: [
      'Tighten the fuel cap until it clicks; inspect the seal for cracks.',
      'Inspect all EVAP hoses under the hood and near the tank.',
      'Check purge and vent valve operation with a scan tool.',
      'Perform a smoke test to find leaks that are not visible.',
      'Replace the failed cap, hose, valve or canister.',
      'Clear the code and complete a drive cycle.'
    ],
    related: ["P0442", "P0455", "P0456", "P0446"],
    tip: 'Start with the gas cap and a visual inspection. It is the least expensive fix and solves a surprising share of EVAP codes.'
  },
  {
    code: "P0442",
    system: "P",
    category: "Emissions / EVAP",
    title: 'Evaporative Emission System Small Leak Detected',
    severity: "low",
    urgency: "Fix soon",
    difficulty: "Easy",
    diy: true,
    cost: [20, 450],
    desc: 'The EVAP system is losing fuel vapor through a small leak, roughly the size of a pinhole. A dried-out gas cap seal or a cracked hose is the usual cause. The leak is not a safety hazard in itself, but raw fuel vapor is an emission and smell issue.',
    symptoms: [
      'Check engine light with no performance change',
      'Intermittent fuel odor near the tank or filler neck',
      'Code may return after refueling',
      'Failed emissions test'
    ],
    causes: [
      'Bad fuel cap seal or loose cap',
      'Cracked or dried-out EVAP hose',
      'Small leak at the purge or vent valve',
      'Filler neck seal leak',
      'Leaking fuel tank pressure sensor seal'
    ],
    fixes: [
      'Inspect and tighten or replace the fuel cap.',
      'Check EVAP hoses for cracks, especially near heat and bends.',
      'Use a smoke machine to pinpoint the leak.',
      'Inspect the purge and vent valves for stuck or leaking seats.',
      'Replace the leaking component and clear the code.',
      'Drive a full readiness cycle to confirm the repair.'
    ],
    related: ["P0440", "P0455", "P0456", "P0446"],
    tip: 'After a repair, the EVAP monitor may need several days or a specific drive cycle to run. Do not assume the code is back until readiness completes.'
  },
  {
    code: "P0455",
    system: "P",
    category: "Emissions / EVAP",
    title: 'Evaporative Emission System Large Leak Detected',
    severity: "low",
    urgency: "Fix soon",
    difficulty: "Easy",
    diy: true,
    cost: [20, 550],
    desc: 'The EVAP system cannot hold pressure or vacuum because of a large leak. This is often as simple as a fuel cap left loose or missing, but a disconnected hose or stuck-open purge valve can also be responsible.',
    symptoms: [
      'Check engine light, often right after refueling',
      'Strong fuel vapor smell',
      'Fuel cap may be loose or missing',
      'Failed emissions test'
    ],
    causes: [
      'Loose or missing fuel cap',
      'Disconnected or split EVAP hose',
      'Purge valve stuck open',
      'Cracked charcoal canister',
      'Damaged filler neck or fuel tank'
    ],
    fixes: [
      'Tighten or replace the fuel cap first.',
      'Inspect under-hood EVAP lines and the canister area for disconnected hoses.',
      'Test the purge valve for sticking; command it closed and check for leakage.',
      'Smoke-test the system to locate the opening.',
      'Repair or replace the damaged component.',
      'Clear the code and verify the EVAP monitor completes.'
    ],
    related: ["P0440", "P0442", "P0456", "P0446"],
    tip: 'If the code sets immediately after refueling, check the cap and the filler neck. If it sets at idle, suspect the purge valve.'
  },
  {
    code: "P0456",
    system: "P",
    category: "Emissions / EVAP",
    title: 'Evaporative Emission System Very Small Leak Detected',
    severity: "low",
    urgency: "Monitor",
    difficulty: "Moderate",
    diy: true,
    cost: [20, 600],
    desc: 'The EVAP system has detected a very small leak. These can be difficult to find and may not produce any driveability symptom. Common sources are the fuel cap seal, a small hose crack, or the leak detection pump and vent valve seals.',
    symptoms: [
      'Check engine light, often intermittent',
      'Faint fuel smell in some cases',
      'Code returns after several drive cycles',
      'No effect on engine performance'
    ],
    causes: [
      'Aged fuel cap seal',
      'Tiny crack in an EVAP line',
      'Leak detection pump seal or valve',
      'Fuel tank pressure sensor seal',
      'Charcoal canister hairline crack'
    ],
    fixes: [
      'Replace the fuel cap if the seal looks dry or compressed.',
      'Inspect all EVAP hoses carefully under bright light.',
      'Run a high-resolution smoke test; very small leaks need time to show.',
      'Test the leak detection pump and vent valve for sealing.',
      'Replace the faulty seal or component.',
      'Clear the code and allow the monitor to run.'
    ],
    related: ["P0442", "P0455", "P0440", "P2402"],
    tip: 'Very small EVAP leaks can be intermittent with temperature changes. Pressure-test the system cold and again after a drive.'
  },
  {
    code: "P0500",
    system: "P",
    category: "Vehicle Speed",
    title: 'Vehicle Speed Sensor A Malfunction',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [100, 550],
    desc: 'The PCM is not receiving a valid vehicle speed signal. Speed data is shared with the instrument cluster, ABS, transmission and cruise control, so a failure can affect far more than the speedometer.',
    symptoms: [
      'Speedometer not working or erratic',
      'ABS or traction control light on',
      'Harsh or delayed transmission shifts',
      'Cruise control inoperative',
      'Possible P0501, P0720 or U0121'
    ],
    causes: [
      'Failed vehicle speed sensor',
      'Wiring or connector fault',
      'ABS wheel speed sensor or module issue',
      'Damaged tone ring',
      'Instrument cluster or CAN communication fault'
    ],
    fixes: [
      'Scan all modules for speed-related codes, not just the PCM.',
      'Check live vehicle speed data in the ABS and PCM modules.',
      'Inspect the speed sensor connector and wiring.',
      'Test the sensor signal or replace it if specified.',
      'Check the ABS module and cluster for communication codes.',
      'Repair the circuit or component and verify speed data across modules.'
    ],
    related: ["P0501", "P0720", "U0121", "C0035"],
    tip: 'Modern cars often derive speed from the ABS wheel sensors rather than a dedicated VSS. Check ABS codes before replacing the sensor.'
  },
  {
    code: "P0505",
    system: "P",
    category: "Idle Control",
    title: 'Idle Air Control System Malfunction',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [80, 450],
    desc: 'The idle air control system cannot maintain the target idle speed. Carbon buildup in the throttle body or IAC passage is the classic cause, followed by a failed IAC valve or a vacuum leak.',
    symptoms: [
      'Idle too high, too low or hunting',
      'Stalling when coming to a stop',
      'Rough idle, especially when cold',
      'Check engine light with possible P0506 or P0507'
    ],
    causes: [
      'Carbon-clogged throttle body or IAC passage',
      'Failed idle air control valve or stepper motor',
      'Vacuum leak',
      'Dirty MAF sensor',
      'Wiring or connector fault',
      'Throttle body adaptation lost'
    ],
    fixes: [
      'Clean the throttle body and IAC passages with throttle-body cleaner.',
      'Inspect the IAC valve and test its movement with a scan tool or bench test.',
      'Check for vacuum leaks and inspect the PCV system.',
      'Clean the MAF sensor.',
      'Replace the IAC valve if it does not respond.',
      'Perform an idle relearn or throttle adaptation procedure.'
    ],
    related: ["P0506", "P0507", "P0171", "P0101"],
    tip: 'Do not spray cleaner into a drive-by-wire throttle body while it is powered. Follow the relearn procedure after cleaning.'
  },
  {
    code: "P0507",
    system: "P",
    category: "Idle Control",
    title: 'Idle Control System RPM Higher Than Expected',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [80, 500],
    desc: 'The engine is idling higher than the PCM commands, even after the idle control has done its job. Extra air is getting past the throttle, often through a vacuum leak, a dirty throttle body, or a PCV or brake booster leak.',
    symptoms: [
      'Idle hangs at 1,100–1,500 rpm',
      'Engine races when coasting or in neutral',
      'Hard transmission engagement',
      'Possible whistle or hiss from the intake',
      'Check engine light, possible P0171'
    ],
    causes: [
      'Vacuum leak at intake gasket, PCV or brake booster',
      'Carbon buildup or sticking throttle plate',
      'Failed IAC valve or electronic throttle body',
      'Throttle position sensor misreporting',
      'Purge valve stuck open',
      'Throttle relearn not performed after service'
    ],
    fixes: [
      'Inspect all vacuum lines and the brake booster for leaks.',
      'Clean the throttle body and perform the relearn procedure.',
      'Test the purge valve for sticking open.',
      'Check live throttle position and IAC commanded position.',
      'Replace the IAC valve or throttle body if it does not respond.',
      'Clear the code and confirm idle settles at specification.'
    ],
    related: ["P0505", "P0506", "P0171", "P0121"],
    tip: 'A high idle that appears after cleaning the throttle body is usually a missing relearn, not a new failure. Perform the adaptation first.'
  },
  {
    code: "P0521",
    system: "P",
    category: "Engine Oil Pressure",
    title: 'Engine Oil Pressure Sensor Range / Performance',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Moderate",
    diy: true,
    cost: [90, 700],
    desc: 'The oil pressure sensor signal is outside the expected range for the current engine speed and temperature. This can be a faulty sensor, but it can also indicate genuinely low oil pressure, which risks catastrophic engine damage.',
    symptoms: [
      'Oil pressure warning light or gauge fluctuation',
      'Ticking or knocking from the engine',
      'Reduced power or limp mode on some vehicles',
      'Check engine light with possible P0522 or P0523',
      'Low oil level warning'
    ],
    causes: [
      'Failing oil pressure sensor',
      'Low oil level or wrong oil viscosity',
      'Clogged oil filter or pickup screen',
      'Worn oil pump or bearings',
      'Wiring or connector fault',
      'Sludge blocking an oil passage'
    ],
    fixes: [
      'Check the oil level and condition immediately; top up or change if needed.',
      'Verify pressure with a mechanical gauge at the sensor port before driving further.',
      'Inspect the sensor connector and wiring.',
      'Replace the sensor if the gauge confirms normal pressure.',
      'If pressure is genuinely low, stop driving and diagnose the pump, pickup or bearing wear.',
      'Use the specified oil and filter; address sludge with appropriate cleaning or service.'
    ],
    related: ["P0522", "P0523", "P0011", "P0016"],
    tip: 'Never ignore an oil pressure warning. A mechanical gauge test takes minutes and can save the engine.'
  },
  {
    code: "P0562",
    system: "P",
    category: "Electrical / Charging",
    title: 'System Voltage Low',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [80, 650],
    desc: 'The PCM has seen system voltage below its acceptable threshold. A weak battery, failing alternator, loose belt or bad ground can cause a cascade of unrelated electrical codes and no-start conditions.',
    symptoms: [
      'Dim lights and slow cranking',
      'Battery warning light',
      'Multiple electrical codes across modules',
      'Accessories behaving erratically',
      'Possible P0563 or U-codes'
    ],
    causes: [
      'Weak or aged battery',
      'Failing alternator or voltage regulator',
      'Loose or glazed serpentine belt',
      'Corroded battery terminals or ground straps',
      'Parasitic draw draining the battery',
      'Damaged charging circuit wiring'
    ],
    fixes: [
      'Test battery state of charge and load capacity; replace if aged or failed.',
      'Measure charging voltage at the battery with the engine running (about 13.5–14.8 V).',
      'Inspect battery terminals, grounds and the alternator belt.',
      'Check for AC ripple from a failing alternator diode.',
      'Test for parasitic draw if the battery keeps going flat.',
      'Repair the charging circuit or replace the alternator as needed.'
    ],
    related: ["P0563", "P0620", "U0100", "B1318"],
    tip: 'Low voltage causes phantom codes. Charge and test the battery first, then clear codes and see what remains.'
  },
  {
    code: "P0601",
    system: "P",
    category: "PCM / Control Module",
    title: 'Internal Control Module Memory Checksum Error',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [300, 1600],
    desc: 'The PCM self-check found corrupted memory. This is an internal module fault, not a sensor or wiring problem. Some vehicles can be recovered with a reprogramming or reflash; others need a replacement PCM and immobilizer adaptation.',
    symptoms: [
      'Check engine light, often with multiple unrelated codes',
      'No-start or intermittent stall',
      'Poor running or limp mode',
      'Erratic gauge behavior',
      'Failed emissions test'
    ],
    causes: [
      'PCM internal memory failure',
      'Interrupted or failed software flash',
      'Voltage spike or poor ground',
      'Water intrusion into the PCM',
      'Aftermarket tuning or programming error'
    ],
    fixes: [
      'Check battery voltage, grounds and PCM connectors first.',
      'Inspect the PCM for water damage or corrosion.',
      'Attempt a factory reprogram/reflash if the module is otherwise healthy.',
      'If the checksum error returns, replace the PCM with a programmed unit.',
      'Perform immobilizer/key adaptation and configuration after replacement.',
      'Verify all modules communicate and codes stay clear.'
    ],
    related: ["P0606", "P0602", "P0603", "U0100"],
    tip: 'Do not replace a PCM until you have confirmed power, ground and communication. Many "bad PCM" diagnoses are actually voltage or wiring faults.'
  },
  {
    code: "P0606",
    system: "P",
    category: "PCM / Control Module",
    title: 'PCM / ECM Processor Fault',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [250, 1800],
    desc: 'The PCM has detected an internal processor or performance fault. On some vehicles this code can be triggered by low voltage or a software issue rather than a failed module, so rule those out before replacement.',
    symptoms: [
      'Check engine light and reduced power',
      'Intermittent no-start or stalling',
      'Multiple communication or sensor codes',
      'Erratic transmission shifting',
      'Electronic throttle limp mode'
    ],
    causes: [
      'Internal PCM processor failure',
      'Low battery voltage or bad grounds',
      'Corrupted software or failed flash',
      'Water or heat damage to the PCM',
      'CAN bus electrical interference'
    ],
    fixes: [
      'Test the battery and charging system; repair low voltage first.',
      'Check PCM power, ground and connector condition.',
      'Scan all modules for communication faults.',
      'Reprogram the PCM with the latest factory calibration.',
      'Replace and program the PCM if the fault persists.',
      'Verify the repair with a full drive cycle and readiness check.'
    ],
    related: ["P0601", "P0602", "U0100", "P0562"],
    tip: 'P0606 is often a ghost code caused by a weak battery during cranking. Clear it after fixing voltage and see whether it returns.'
  },
  {
    code: "P0620",
    system: "P",
    category: "Electrical / Charging",
    title: 'Generator Control Circuit Malfunction',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [150, 900],
    desc: 'The PCM cannot properly control the alternator/generator, often because of a wiring fault or a failed voltage regulator. The charging system may still work intermittently, so the battery can go flat without much warning.',
    symptoms: [
      'Battery or charging warning light',
      'Dimming lights at idle',
      'Battery drains overnight or over several days',
      'Possible P0562 or P0625',
      'Accessories resetting'
    ],
    causes: [
      'Failed alternator voltage regulator',
      'Broken or chafed generator control wire',
      'Corroded connector at the alternator',
      'Bad engine ground',
      'PCM control circuit fault',
      'Serpentine belt slipping'
    ],
    fixes: [
      'Inspect the alternator connector and control wiring for damage.',
      'Check the belt and tensioner.',
      'Measure charging voltage and compare with the commanded value.',
      'Test the ground circuit for voltage drop.',
      'Replace the alternator or voltage regulator if the control circuit is intact.',
      'Clear codes and verify stable charging under load.'
    ],
    related: ["P0562", "P0625", "P0563", "U0100"],
    tip: 'Some "smart" charging systems intentionally vary voltage. Compare charging behavior with a scan tool before condemning the alternator.'
  },
  {
    code: "P0700",
    system: "P",
    category: "Transmission",
    title: 'Transmission Control System (MIL Request)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Easy",
    diy: true,
    cost: [80, 350],
    desc: 'P0700 is a messenger code: the transmission control module (TCM) has stored a fault and asked the engine computer to turn on the check engine light. The real problem is in the TCM codes, so retrieving them is the essential next step.',
    symptoms: [
      'Check engine light with possible transmission warning',
      'Harsh, delayed or missing shifts',
      'Limp mode or stuck in one gear',
      'Reduced fuel economy',
      'No obvious engine performance issue'
    ],
    causes: [
      'Any stored transmission control module fault',
      'Low or degraded transmission fluid',
      'Solenoid, sensor or wiring failure',
      'Internal transmission mechanical wear',
      'TCM power, ground or communication fault'
    ],
    fixes: [
      'Scan the TCM for specific codes; P0700 alone is not a diagnosis.',
      'Check transmission fluid level and condition per the manufacturer procedure.',
      'Inspect the transmission harness and connectors.',
      'Address the specific TCM code (solenoid, sensor, ratio, pressure).',
      'Clear codes after the repair and perform the relearn procedure.',
      'If the transmission is in limp mode, avoid aggressive driving until repaired.'
    ],
    related: ["P0705", "P0715", "P0730", "P0750"],
    tip: 'Do not replace the PCM or TCM just because P0700 is stored. It is almost always a request from the transmission module, not a module failure.'
  },
  {
    code: "P0705",
    system: "P",
    category: "Transmission",
    title: 'Transmission Range Sensor Circuit Malfunction',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [120, 500],
    desc: 'The transmission range sensor (also called the TRS, MLPS or neutral safety switch) is sending an implausible gear position signal. This can prevent the engine from cranking in Park or Neutral and confuse shift scheduling.',
    symptoms: [
      'No crank in Park or Neutral',
      'Gear indicator wrong or blank',
      'Harsh shifts or limp mode',
      'Reverse lights not working',
      'Possible P0706 or P0700'
    ],
    causes: [
      'Failed transmission range sensor',
      'Loose or misadjusted shift linkage',
      'Corroded connector or damaged wiring',
      'Fluid contamination inside the sensor',
      'Valve body or internal selector issue'
    ],
    fixes: [
      'Check the gear indicator and try starting in Neutral as a diagnostic.',
      'Inspect the sensor connector and shift linkage.',
      'Adjust the linkage or sensor per the service procedure.',
      'Test the sensor output in each gear position.',
      'Replace the range sensor if signals are incorrect.',
      'Clear codes and verify Park/Neutral start and correct gear display.'
    ],
    related: ["P0700", "P0706", "P0715", "P0750"],
    tip: 'If the car will not crank in Park but starts in Neutral, the range sensor or linkage is the first place to look.'
  },
  {
    code: "P0715",
    system: "P",
    category: "Transmission",
    title: 'Input / Turbine Speed Sensor Circuit',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: false,
    cost: [150, 800],
    desc: 'The TCM is not getting a reliable input shaft speed signal. Without it, the module cannot calculate gear ratios or control shifts accurately, often resulting in harsh shifts or limp mode.',
    symptoms: [
      'Harsh or delayed shifts',
      'Transmission stuck in limp mode',
      'Speedometer or tachometer inconsistency',
      'Possible P0716, P0717 or P0730',
      'Transmission warning light'
    ],
    causes: [
      'Failed input speed sensor',
      'Wiring or connector fault',
      'Metal debris on the sensor',
      'Low transmission fluid',
      'Valve body or internal transmission damage',
      'TCM fault'
    ],
    fixes: [
      'Check transmission fluid level and condition.',
      'Inspect the sensor connector and harness.',
      'Read input and output speed sensor data on a scan tool.',
      'Remove the sensor and check for metal debris.',
      'Replace the input speed sensor if the signal is missing.',
      'Clear codes and verify shift quality on a test drive.'
    ],
    related: ["P0716", "P0717", "P0720", "P0730"],
    tip: 'Metal paste on a speed sensor is a warning sign of internal wear. Replacing the sensor alone may not fix a transmission that is shedding material.'
  },
  {
    code: "P0730",
    system: "P",
    category: "Transmission",
    title: 'Incorrect Gear Ratio',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [300, 3200],
    desc: 'The TCM compares input and output speed and finds the actual gear ratio does not match the commanded gear. This usually indicates a slipping clutch pack, a stuck solenoid or low fluid pressure, and can lead to a costly transmission failure if ignored.',
    symptoms: [
      'Slipping or flaring between shifts',
      'Transmission stuck in limp mode',
      'Harsh engagement into gear',
      'Overheating or burnt fluid smell',
      'Possible P0700, P0715 or P0750'
    ],
    causes: [
      'Low or burnt transmission fluid',
      'Stuck shift solenoid or valve body fault',
      'Worn clutch packs or bands',
      'Failed torque converter clutch',
      'Internal pressure loss',
      'TCM calibration or speed sensor error'
    ],
    fixes: [
      'Check fluid level, color and smell; service if specified.',
      'Scan TCM live data for commanded vs. actual gear ratio and pressure.',
      'Inspect the transmission harness and connectors.',
      'Test shift solenoids and valve body function.',
      'Perform a transmission service or solenoid replacement if diagnosed early.',
      'Rebuild or replace the transmission if clutch material is worn.'
    ],
    related: ["P0700", "P0715", "P0740", "P0750"],
    tip: 'Burnt fluid plus a ratio code usually means internal clutch wear. A fluid change may improve behavior temporarily but will not repair worn friction material.'
  },
  {
    code: "P0740",
    system: "P",
    category: "Transmission",
    title: 'Torque Converter Clutch Circuit Malfunction',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Advanced",
    diy: false,
    cost: [200, 1800],
    desc: 'The torque converter clutch (TCC) is not locking or unlocking as commanded. A stuck TCC can cause shuddering, stalls at stops, or poor fuel economy. The fault may be electrical (solenoid, wiring) or hydraulic (valve body, converter).',
    symptoms: [
      'Shudder or vibration at steady highway speed',
      'Engine stalls when coming to a stop',
      'Poor fuel economy',
      'Harsh lockup or unlock',
      'Possible P0741 or P0742'
    ],
    causes: [
      'Failed TCC solenoid',
      'Wiring or connector fault',
      'Contaminated or low transmission fluid',
      'Worn torque converter clutch lining',
      'Valve body wear or stuck TCC valve',
      'TCM fault'
    ],
    fixes: [
      'Check transmission fluid condition and level.',
      'Scan TCM data for TCC commanded vs. actual slip.',
      'Inspect the transmission connector and solenoid circuit.',
      'Test or replace the TCC solenoid.',
      'Service the valve body if hydraulic sticking is suspected.',
      'Replace the torque converter if the clutch lining is worn or debris is present.'
    ],
    related: ["P0741", "P0742", "P0730", "P0700"],
    tip: 'A highway-speed shudder that feels like a misfire can be TCC lockup. Watch TCC slip data to confirm before chasing ignition.'
  },
  {
    code: "P0750",
    system: "P",
    category: "Transmission",
    title: 'Shift Solenoid A Malfunction',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [250, 1600],
    desc: 'Shift solenoid A is not responding electrically or hydraulically as expected. The transmission may default to limp mode or skip gears to protect itself. Diagnosis involves checking the solenoid circuit and fluid condition.',
    symptoms: [
      'Transmission stuck in one gear or limp mode',
      'Harsh or missing shifts',
      'Transmission warning light',
      'Possible P0751, P0752 or P0700',
      'Poor acceleration'
    ],
    causes: [
      'Failed shift solenoid A',
      'Open or shorted wiring',
      'Corroded transmission connector',
      'Low or contaminated fluid',
      'Valve body sticking',
      'TCM driver fault'
    ],
    fixes: [
      'Check fluid level and condition.',
      'Scan TCM codes and solenoid command data.',
      'Inspect the transmission harness and connector for fluid intrusion.',
      'Measure solenoid resistance and compare with spec.',
      'Replace the solenoid or repair the wiring.',
      'Clear codes, perform adaptation, and verify all gears engage.'
    ],
    related: ["P0755", "P0760", "P0700", "P0730"],
    tip: 'Solenoids live inside the pan and are exposed to dirty fluid. If the fluid is black, plan a service along with the solenoid repair.'
  },
  {
    code: "P0841",
    system: "P",
    category: "Transmission",
    title: 'Transmission Fluid Pressure Sensor / Switch A Range / Performance',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Advanced",
    diy: false,
    cost: [200, 1400],
    desc: 'The transmission fluid pressure sensor or switch is reporting a pressure outside the expected range for the current gear and temperature. This can cause harsh shifts, delayed engagement or limp mode.',
    symptoms: [
      'Harsh or delayed shifts',
      'Transmission warning or limp mode',
      'Fluid leak or low fluid level',
      'Slipping under load',
      'Possible P0700 or P0730'
    ],
    causes: [
      'Failed pressure sensor/switch',
      'Low transmission fluid',
      'Clogged filter or valve body restriction',
      'Internal pressure loss',
      'Wiring or connector fault',
      'TCM fault'
    ],
    fixes: [
      'Check fluid level and condition first.',
      'Inspect for leaks around the pan and cooler lines.',
      'Scan live pressure data and compare with specification.',
      'Inspect the sensor connector and harness.',
      'Replace the pressure sensor/switch if the reading is implausible.',
      'Service the valve body or transmission if pressure is genuinely low.'
    ],
    related: ["P0840", "P0842", "P0730", "P0700"],
    tip: 'Pressure codes often accompany low fluid. Fix the leak and top up before condemning an internal part.'
  },
  {
    code: "P0A80",
    system: "P",
    category: "Hybrid / EV",
    title: 'Replace Hybrid / EV Battery Pack',
    severity: "critical",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [1200, 8500],
    desc: 'The hybrid battery management system has determined that the high-voltage battery pack has degraded below acceptable limits. This is a module-level judgment based on cell voltage, internal resistance and temperature. Some packs can be repaired by replacing individual modules; others need a full pack.',
    symptoms: [
      'Hybrid system warning light',
      'Reduced electric-only range or power',
      'Frequent engine starts and poor fuel economy',
      'Battery gauge drops quickly',
      'Possible P0A7F or P0AFA'
    ],
    causes: [
      'Normal high-voltage battery aging',
      'One or more weak cell modules',
      'Battery cooling fan or duct blockage',
      'Extreme heat or repeated deep discharges',
      'Battery management system fault',
      'Water intrusion or physical damage'
    ],
    fixes: [
      'Have the high-voltage system diagnosed by a qualified hybrid technician.',
      'Read battery module voltage and internal resistance data.',
      'Check the battery cooling fan, ducts and filters.',
      'Consider module-level reconditioning or replacement for some packs.',
      'Replace the pack with a reputable remanufactured or new unit.',
      'Perform battery registration/adaptation and verify the hybrid system.'
    ],
    related: ["P0A7F", "P0AFA", "P0A09", "U0110"],
    tip: 'Never service high-voltage orange cables without training and proper PPE. Even a disconnected pack can retain dangerous voltage.'
  },
  {
    code: "P2015",
    system: "P",
    category: "Intake / Manifold",
    title: 'Intake Manifold Runner Position Sensor Range / Performance (Bank 1)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Advanced",
    diy: false,
    cost: [200, 950],
    desc: 'The intake manifold runner control (IMRC) is not reaching the position the PCM expects. On many engines this is caused by carbon buildup on the runner flaps or a failed actuator, and it can hurt low-end torque and fuel economy.',
    symptoms: [
      'Check engine light, possible P2004 or P2016',
      'Reduced power at low rpm',
      'Rough idle or hesitation',
      'Poor fuel economy',
      'Rattle or tick from the intake manifold'
    ],
    causes: [
      'Carbon buildup on intake runner flaps',
      'Failed runner control actuator or motor',
      'Broken linkage or flap',
      'Faulty position sensor',
      'Wiring or connector fault',
      'Intake manifold vacuum leak'
    ],
    fixes: [
      'Scan live runner position data and compare commanded vs. actual.',
      'Inspect the actuator linkage and connector.',
      'Check for vacuum leaks around the intake.',
      'Clean carbon from the runner flaps and intake ports.',
      'Replace the actuator, sensor or manifold assembly if worn.',
      'Clear codes and verify the runner moves through its full range.'
    ],
    related: ["P2004", "P2006", "P2016", "P0101"],
    tip: 'Direct-injection engines are especially prone to intake carbon. A walnut-blast service may be needed if the flaps are heavily coked.'
  },
  {
    code: "P2187",
    system: "P",
    category: "Fuel & Air Metering",
    title: 'System Too Lean at Idle (Bank 1)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [80, 600],
    desc: 'Bank 1 is lean specifically at idle, which points to a vacuum leak or a problem with idle air control rather than a fuel supply issue that would affect all speeds. A smoke test is usually the fastest diagnostic step.',
    symptoms: [
      'Rough or hunting idle',
      'Whistling or hissing sound at idle',
      'Lean fuel trims at idle that improve with rpm',
      'Possible stalling when coming to a stop',
      'Possible P0171'
    ],
    causes: [
      'Vacuum leak at intake gasket, PCV or brake booster',
      'Dirty throttle body or idle passage',
      'Faulty PCV valve or hose',
      'Leaking intake manifold gasket',
      'Purge valve stuck open',
      'Leaking injector O-ring'
    ],
    fixes: [
      'Smoke-test the intake system and inspect all vacuum lines.',
      'Check the PCV valve and hoses for cracks.',
      'Clean the throttle body and perform a relearn.',
      'Test the purge valve for sticking open.',
      'Inspect injector O-rings and intake gaskets.',
      'Repair the leak and confirm idle fuel trims return near zero.'
    ],
    related: ["P0171", "P0507", "P0505", "P0442"],
    tip: 'If the lean condition is only at idle and disappears at cruise, it is almost always a vacuum leak. Do not replace the fuel pump.'
  },
  {
    code: "P2195",
    system: "P",
    category: "Oxygen Sensor / Heater",
    title: 'O2 Sensor Signal Stuck Lean (Bank 1, Sensor 1)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [80, 600],
    desc: 'The upstream oxygen sensor is reporting a lean condition and not switching normally. The sensor itself may be stuck, or the engine may genuinely be lean, preventing the sensor from ever seeing rich exhaust.',
    symptoms: [
      'Rough idle or hesitation',
      'Lean fuel trims',
      'Poor fuel economy or power',
      'Possible P0171 or P0300',
      'Failed emissions test'
    ],
    causes: [
      'Failed upstream oxygen sensor',
      'Vacuum or intake leak',
      'Low fuel pressure or clogged injector',
      'Exhaust leak before the sensor',
      'Contaminated sensor (coolant, oil, silicone)',
      'Wiring fault'
    ],
    fixes: [
      'Check fuel trims and look for vacuum leaks before replacing the sensor.',
      'Inspect the exhaust for leaks near the sensor.',
      'Verify the sensor switches when the mixture is artificially enriched.',
      'Check sensor wiring and connector.',
      'Fix any lean condition first.',
      'Replace the upstream sensor if it remains stuck lean with a correct mixture.'
    ],
    related: ["P0171", "P2196", "P0133", "P2A00"],
    tip: 'A vacuum leak can make a perfectly good O2 sensor read stuck lean. Always confirm the engine mixture before condemning the sensor.'
  },
  {
    code: "P2A00",
    system: "P",
    category: "Oxygen Sensor / Heater",
    title: 'O2 Sensor Circuit Range / Performance (Bank 1, Sensor 1)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [80, 500],
    desc: 'The wideband upstream oxygen sensor is reporting a signal outside its expected operating range or is responding too slowly. This can affect fuel control and emissions, and is often an aging-sensor fault.',
    symptoms: [
      'Check engine light, possible P0133',
      'Rough idle or hesitation',
      'Reduced fuel economy',
      'Failed emissions test',
      'Possible lean or rich fuel trims'
    ],
    causes: [
      'Aged or contaminated wideband oxygen sensor',
      'Exhaust leak before the sensor',
      'Wiring or connector fault',
      'Low fuel pressure or injector issue',
      'Coolant or oil contamination',
      'PCM sensor circuit fault (rare)'
    ],
    fixes: [
      'Inspect the sensor connector and wiring.',
      'Check for exhaust leaks near the sensor.',
      'Read wideband lambda and heater data on a scan tool.',
      'Verify fuel pressure and fuel trims.',
      'Replace the upstream wideband sensor if the reading is implausible.',
      'Clear codes and verify readiness after a drive cycle.'
    ],
    related: ["P0133", "P2195", "P0171", "P0030"],
    tip: 'Wideband sensors are vehicle-specific. Use the exact part number; a generic sensor can read incorrectly even if it plugs in.'
  },

  /* ---------------- Body codes ---------------- */
  {
    code: "B0001",
    system: "B",
    category: "Airbag / SRS",
    title: 'Driver Frontal Stage 1 Deployment Control',
    severity: "critical",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [150, 1200],
    desc: 'This body code indicates a fault in the driver frontal airbag deployment circuit. The airbag may not deploy in a crash, or may deploy unexpectedly. B-codes are often manufacturer-specific, so confirm the exact definition for your vehicle.',
    symptoms: [
      'Airbag warning light on or flashing',
      'SRS warning message on the dash',
      'Horn or steering wheel controls may stop working',
      'Possible B0020 or B0051'
    ],
    causes: [
      'Faulty clock spring in the steering wheel',
      'Damaged airbag squib or connector',
      'Wiring short or open in the SRS circuit',
      'Failed airbag control module',
      'Crash sensor or seat position sensor fault'
    ],
    fixes: [
      'Do not probe airbag circuits with a standard multimeter or test light.',
      'Disconnect the battery and wait the manufacturer-specified time before any SRS work.',
      'Scan the SRS module for the exact code definition and freeze-frame data.',
      'Inspect the clock spring and steering wheel connectors.',
      'Replace the failed clock spring, airbag or module only per service procedure.',
      'Clear codes and verify the SRS lamp proves out correctly.'
    ],
    related: ["B0020", "B0051", "B1000", "U0151"],
    tip: 'Airbags are pyrotechnic devices. Leave deployment circuit repair to a trained technician with the battery properly disabled.'
  },
  {
    code: "B0020",
    system: "B",
    category: "Airbag / SRS",
    title: 'Left Side Airbag Deployment Control',
    severity: "critical",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [150, 1000],
    desc: 'The left side airbag or side curtain deployment circuit has a fault. This affects occupant protection in a side impact. Definitions and resistance specs vary by manufacturer.',
    symptoms: [
      'SRS light on',
      'Side airbag warning message',
      'Seat-mounted airbag connector fault after seat movement',
      'Possible U0151 communication code'
    ],
    causes: [
      'Loose or damaged side airbag connector under the seat',
      'Failed side airbag module',
      'Seat harness chafing',
      'Failed impact sensor',
      'SRS control module fault'
    ],
    fixes: [
      'Disable the SRS system per the service manual before inspection.',
      'Inspect the under-seat connector and harness for damage.',
      'Scan the SRS module for related codes and sensor data.',
      'Repair chafed wiring or replace the failed connector.',
      'Replace the side airbag or sensor if diagnosed.',
      'Clear codes and verify the SRS lamp operation.'
    ],
    related: ["B0001", "B0051", "B1000", "U0151"],
    tip: 'Moving a seat can pull a side-airbag connector loose. Check the under-seat harness before replacing the airbag.'
  },
  {
    code: "B1000",
    system: "B",
    category: "Body Control Module",
    title: 'Electronic Control Unit Malfunction',
    severity: "high",
    urgency: "Fix soon",
    difficulty: "Advanced",
    diy: false,
    cost: [250, 1500],
    desc: 'A body or control module has reported an internal malfunction. The exact meaning varies by manufacturer. On many vehicles B1000 is a generic BCM fault code that requires module diagnostics or replacement.',
    symptoms: [
      'Multiple body electrical functions failing',
      'Lights, locks, windows or wipers behaving erratically',
      'Battery drain',
      'Multiple U-codes',
      'Module may not communicate'
    ],
    causes: [
      'Internal BCM/ECU failure',
      'Low voltage or poor ground',
      'Water intrusion or corrosion',
      'CAN bus communication fault',
      'Aftermarket accessories interfering with body electrical'
    ],
    fixes: [
      'Check battery voltage and all body grounds.',
      'Scan every module for codes and communication status.',
      'Inspect the module and connectors for water or corrosion.',
      'Disconnect aftermarket accessories that tap into body wiring.',
      'Reprogram or replace the module if internal failure is confirmed.',
      'Perform configuration and verify all body functions.'
    ],
    related: ["B1342", "U0140", "U0001", "P0601"],
    tip: 'Body codes are rarely fixed by guessing. Check power, ground and water intrusion before replacing an expensive module.'
  },
  {
    code: "B1318",
    system: "B",
    category: "Electrical / Charging",
    title: 'Battery Voltage Low',
    severity: "low",
    urgency: "Fix soon",
    difficulty: "Easy",
    diy: true,
    cost: [0, 350],
    desc: 'The body module has recorded low system voltage. This is a common Ford body code but can appear on other makes. It often means the battery is weak, terminals are corroded, or the charging system is marginal.',
    symptoms: [
      'Battery light or warning message',
      'Slow cranking',
      'Electrical accessories behaving oddly',
      'Multiple stored body codes',
      'Battery may fail to hold a charge'
    ],
    causes: [
      'Weak or failed battery',
      'Corroded or loose battery terminals',
      'Failing alternator',
      'Parasitic draw',
      'Bad ground strap'
    ],
    fixes: [
      'Load-test the battery and replace it if weak.',
      'Clean and tighten battery terminals; inspect grounds.',
      'Test the charging system under load.',
      'Check for parasitic draw if the battery keeps draining.',
      'Clear the code and verify voltage remains stable.'
    ],
    related: ["P0562", "P0620", "U0001", "B1000"],
    tip: 'A battery can read 12.6 V at rest and still fail under load. Use a proper load test, not just a voltmeter.'
  },
  {
    code: "B1342",
    system: "B",
    category: "Body Control Module",
    title: 'Electronic Control Unit Defective',
    severity: "high",
    urgency: "Fix soon",
    difficulty: "Advanced",
    diy: false,
    cost: [400, 1600],
    desc: 'The module performing the self-test believes its own hardware is defective. On many vehicles this points to the body control module or a related control unit. Confirm power, ground and communication before replacement.',
    symptoms: [
      'Multiple body electrical failures',
      'Module not communicating on the scan tool',
      'Intermittent locks, windows or lighting',
      'Battery drain',
      'Other modules storing U-codes'
    ],
    causes: [
      'Internal module failure',
      'Voltage spikes or low voltage',
      'Water intrusion',
      'Poor ground or power feed',
      'Corrupted configuration or software'
    ],
    fixes: [
      'Verify battery and charging system health.',
      'Check module power, ground and connector condition.',
      'Inspect for water damage or corrosion.',
      'Attempt reprogramming/configuration if supported.',
      'Replace and program the module if the fault persists.',
      'Verify all body functions and clear related codes.'
    ],
    related: ["B1000", "U0140", "P0606", "B1318"],
    tip: 'Replacement modules often need VIN configuration and immobilizer adaptation. Budget for programming, not just the part.'
  },

  /* ---------------- Chassis codes ---------------- */
  {
    code: "C0035",
    system: "C",
    category: "ABS / Wheel Speed",
    title: 'Left Front Wheel Speed Sensor Circuit',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [110, 500],
    desc: 'The ABS module is not receiving a valid left front wheel speed signal. ABS, traction control and stability control may be disabled, and the speedometer or transmission may be affected on some vehicles.',
    symptoms: [
      'ABS and traction control lights on',
      'Speedometer erratic or inoperative',
      'ABS may activate at low speed',
      'Possible C0040 or U0121',
      'Cruise control may stop working'
    ],
    causes: [
      'Damaged wheel speed sensor',
      'Damaged sensor harness or connector',
      'Metal debris or rust on the tone ring',
      'Worn wheel bearing or hub',
      'Corroded ABS module connector',
      'Broken reluctor ring'
    ],
    fixes: [
      'Inspect the sensor, harness and connector at the left front wheel.',
      'Check the tone ring for rust, cracks or debris.',
      'Read left front wheel speed on a scan tool while rotating the wheel.',
      'Check for play in the wheel bearing.',
      'Replace the sensor, hub or harness as diagnosed.',
      'Clear codes and verify all four wheel speeds match.'
    ],
    related: ["C0040", "C0045", "C0050", "U0121"],
    tip: 'A rusty or cracked tone ring can mimic a bad sensor. Inspect the ring before replacing the sensor.'
  },
  {
    code: "C0040",
    system: "C",
    category: "ABS / Wheel Speed",
    title: 'Right Front Wheel Speed Sensor Circuit',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [110, 500],
    desc: 'The ABS module has lost the right front wheel speed signal. As with all wheel speed faults, diagnose the sensor, harness and tone ring before replacing the ABS module.',
    symptoms: [
      'ABS and traction control warning lights',
      'Stability control unavailable message',
      'Speedometer issue on some vehicles',
      'Possible C0035 or U0121',
      'ABS pump cycling unexpectedly'
    ],
    causes: [
      'Failed wheel speed sensor',
      'Chafed or broken sensor wire',
      'Debris or damage on the tone ring',
      'Worn hub bearing',
      'ABS module connector corrosion'
    ],
    fixes: [
      'Inspect the right front sensor and wiring.',
      'Check the tone ring and hub bearing play.',
      'Monitor wheel speed data while spinning the wheel.',
      'Repair wiring or replace the sensor/hub.',
      'Clear codes and verify matching wheel speeds.'
    ],
    related: ["C0035", "C0045", "C0050", "U0121"],
    tip: 'If one wheel speed drops to zero while the others read normally, focus on that corner before the ABS module.'
  },
  {
    code: "C0045",
    system: "C",
    category: "ABS / Wheel Speed",
    title: 'Left Rear Wheel Speed Sensor Circuit',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [110, 520],
    desc: 'The left rear wheel speed signal is missing or implausible. On rear-wheel-drive vehicles the rear sensors may also feed the speedometer and transmission, so shift quality can be affected.',
    symptoms: [
      'ABS, traction and stability lights',
      'Erratic or inoperative speedometer',
      'Harsh transmission shifts',
      'Possible C0050 or P0500',
      'ABS activation at low speed'
    ],
    causes: [
      'Failed rear wheel speed sensor',
      'Damaged harness near the axle or suspension',
      'Rust or debris on the tone ring',
      'Worn rear hub bearing',
      'Corroded connector'
    ],
    fixes: [
      'Inspect the sensor and harness along the rear axle.',
      'Clean or replace a damaged tone ring.',
      'Check hub bearing play.',
      'Verify wheel speed data on a scan tool.',
      'Replace the sensor or hub as needed.',
      'Clear codes and test ABS operation.'
    ],
    related: ["C0050", "C0035", "C0040", "P0500"],
    tip: 'Rear sensor harnesses often rub near suspension components. Look for a worn spot rather than assuming the sensor failed.'
  },
  {
    code: "C0050",
    system: "C",
    category: "ABS / Wheel Speed",
    title: 'Right Rear Wheel Speed Sensor Circuit',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [110, 520],
    desc: 'The right rear wheel speed signal is not valid. This disables ABS and stability control and may affect speedometer or transmission behavior depending on the platform.',
    symptoms: [
      'ABS / stability control warning lights',
      'Speedometer inconsistency',
      'Poor shift quality',
      'Possible C0045 or U0121',
      'Traction control disabled'
    ],
    causes: [
      'Failed right rear wheel speed sensor',
      'Damaged wiring or connector',
      'Damaged tone ring or hub',
      'Metal debris on the sensor',
      'ABS module fault'
    ],
    fixes: [
      'Inspect the sensor and harness at the right rear wheel.',
      'Check the tone ring and bearing.',
      'Read wheel speed data while rotating the wheel.',
      'Replace the sensor or hub if the signal is absent.',
      'Repair wiring as needed.',
      'Clear codes and verify all wheel speeds.'
    ],
    related: ["C0045", "C0035", "C0040", "U0121"],
    tip: 'After a brake or suspension repair, check that the sensor harness was not pinched or left unclipped.'
  },
  {
    code: "C0110",
    system: "C",
    category: "ABS / Hydraulic",
    title: 'ABS Pump Motor Circuit Malfunction',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [300, 1900],
    desc: 'The ABS pump motor circuit is not functioning correctly. ABS may be disabled and the pedal may feel different. The pump motor, relay, ground or the ABS module itself can be at fault.',
    symptoms: [
      'ABS light on',
      'ABS pump runs continuously or not at all',
      'Brake pedal pulsation or hard pedal',
      'Possible C0265 or U0121',
      'Red brake warning light on some vehicles'
    ],
    causes: [
      'Failed ABS pump motor',
      'Faulty pump motor relay',
      'Bad ground or power connection',
      'Corroded ABS module connector',
      'Failed ABS control module',
      'Blown fuse'
    ],
    fixes: [
      'Check the ABS fuse and relay first.',
      'Inspect grounds and the pump motor connector.',
      'Command the pump with a scan tool and listen for operation.',
      'Test motor resistance and supply voltage.',
      'Replace the pump motor or ABS module as diagnosed.',
      'Bleed the brake system per the manufacturer procedure and verify ABS operation.'
    ],
    related: ["C0265", "C0161", "U0121", "C0035"],
    tip: 'ABS hydraulic work requires a proper bleed, often with a scan tool. Do not drive until the pedal is firm.'
  },
  {
    code: "C0161",
    system: "C",
    category: "ABS / Brake Switch",
    title: 'ABS / Traction Control Brake Switch Circuit',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Easy",
    diy: true,
    cost: [50, 320],
    desc: 'The ABS/traction control module is not seeing a consistent brake pedal switch signal. A misadjusted or failed brake light switch can disable traction control and affect shift interlock or cruise control.',
    symptoms: [
      'ABS or traction control light',
      'Brake lights not working or staying on',
      'Cruise control inoperative',
      'Unable to shift out of Park',
      'Possible C0561'
    ],
    causes: [
      'Failed brake pedal switch',
      'Switch out of adjustment',
      'Blown fuse',
      'Wiring or connector fault',
      'Brake pedal pad missing or worn'
    ],
    fixes: [
      'Check the brake lights with the pedal released and pressed.',
      'Inspect the brake switch and pedal pad.',
      'Adjust or replace the switch.',
      'Check fuses and wiring.',
      'Clear codes and verify cruise and shift interlock operation.'
    ],
    related: ["C0110", "C0561", "U0121", "C0265"],
    tip: 'A missing rubber brake pedal pad can make the switch think the brake is always applied. Check the simple things first.'
  },
  {
    code: "C0265",
    system: "C",
    category: "ABS / Hydraulic",
    title: 'Electronic Brake Control Module Motor Relay Circuit',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [300, 1600],
    desc: 'The ABS module has detected a fault in its internal pump motor relay circuit. On many vehicles the relay is not separately serviceable and the module must be rebuilt or replaced.',
    symptoms: [
      'ABS and brake warning lights',
      'ABS disabled',
      'Pump motor may not run',
      'Possible C0110',
      'Reduced braking assist in some failures'
    ],
    causes: [
      'Failed internal ABS module relay',
      'Bad ground connection',
      'Low voltage or poor power feed',
      'Corroded module connector',
      'Internal module failure'
    ],
    fixes: [
      'Check battery voltage and ABS module grounds.',
      'Inspect the module connector for corrosion.',
      'Command the ABS pump and monitor relay operation.',
      'Repair grounds and power feeds first.',
      'Replace or rebuild the ABS module if the internal relay is faulty.',
      'Bleed the brakes and verify ABS function after repair.'
    ],
    related: ["C0110", "U0121", "C0161", "C0035"],
    tip: 'Before replacing an ABS module, check the ground strap and battery voltage under load. Both can set a relay circuit code.'
  },

  /* ---------------- Network codes ---------------- */
  {
    code: "U0001",
    system: "U",
    category: "Network / CAN",
    title: 'High Speed CAN Communication Bus',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [100, 1200],
    desc: 'A fault has been detected on the high-speed CAN bus, the network that lets control modules talk to each other. The cause can be as simple as low battery voltage or as involved as a shorted module or damaged harness.',
    symptoms: [
      'Multiple warning lights across the dash',
      'Several modules not communicating',
      'No-start or intermittent stall',
      'Gauges sweeping or dropping out',
      'Other U-codes stored in multiple modules'
    ],
    causes: [
      'Low battery voltage or poor ground',
      'Damaged CAN wiring (chafed, pinched, corroded)',
      'Failed module pulling the bus down',
      'Incorrectly installed aftermarket electronics',
      'Missing or faulty CAN termination resistor',
      'Water intrusion in a connector'
    ],
    fixes: [
      'Test the battery and charging system first.',
      'Scan all modules and record which ones communicate.',
      'Measure CAN resistance (about 60 ohms across the bus with power off).',
      'Inspect network wiring and connectors for damage or corrosion.',
      'Disconnect modules one at a time to find a bus short.',
      'Repair the harness or replace the faulty module; verify all modules communicate.'
    ],
    related: ["U0073", "U0100", "U0121", "U0140"],
    tip: 'On many vehicles, a weak battery causes a storm of U-codes. Fix voltage before chasing the network.'
  },
  {
    code: "U0073",
    system: "U",
    category: "Network / CAN",
    title: 'Control Module Communication Bus A Off',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [100, 1200],
    desc: 'A control module has turned off or lost communication on bus A. This often reflects a module losing power or ground, a shorted CAN line, or a battery/charging problem rather than a failed module.',
    symptoms: [
      'Multiple modules offline',
      'Multiple warning lights',
      'Intermittent no-start',
      'Scan tool cannot reach some modules',
      'Possible U0001 or U0100'
    ],
    causes: [
      'Low voltage or failing battery',
      'CAN wiring short or open',
      'Failed module holding the bus down',
      'Corroded connector',
      'Aftermarket device interfering with CAN',
      'Faulty ignition switch or power distribution'
    ],
    fixes: [
      'Check battery, charging voltage and grounds.',
      'Identify which modules are offline with a full scan.',
      'Inspect CAN wiring and connectors near recent repairs.',
      'Measure bus resistance and check for shorts to ground or power.',
      'Isolate modules by disconnecting them one at a time.',
      'Repair the fault and clear all network codes.'
    ],
    related: ["U0001", "U0100", "U0101", "U0121"],
    tip: 'A single unplugged module can take down the whole bus. Look for recent electrical or audio work before replacing parts.'
  },
  {
    code: "U0100",
    system: "U",
    category: "Network / CAN",
    title: 'Lost Communication With ECM / PCM',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [120, 1400],
    desc: 'Another module has lost contact with the engine control module. The engine may still run, but other systems cannot get engine data. Power, ground, CAN wiring or the PCM itself may be at fault.',
    symptoms: [
      'No-start or stall',
      'Multiple modules storing U0100',
      'Instrument cluster warnings',
      'Scan tool cannot communicate with PCM',
      'Possible P0601 or U0001'
    ],
    causes: [
      'PCM power or ground fault',
      'Blown fuse or faulty relay in the PCM feed',
      'CAN wiring fault',
      'Failed PCM',
      'Low battery voltage',
      'Water intrusion at the PCM connector'
    ],
    fixes: [
      'Verify battery voltage and PCM fuses/relays.',
      'Check PCM power and ground at the connector.',
      'Inspect the PCM connector for corrosion or water.',
      'Test CAN communication at the PCM.',
      'Repair wiring or replace/program the PCM if it does not power up.',
      'Clear codes and verify communication with all modules.'
    ],
    related: ["U0001", "U0073", "P0601", "P0606"],
    tip: 'If the engine runs but the scan tool cannot see the PCM, check the module power feed before condemning it. A blown fuse is more common than a dead ECM.'
  },
  {
    code: "U0101",
    system: "U",
    category: "Network / CAN",
    title: 'Lost Communication With Transmission Control Module',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [120, 1400],
    desc: 'The engine or another module cannot communicate with the transmission control module. The transmission may default to limp mode, and the vehicle may be undriveable if the TCM is offline.',
    symptoms: [
      'Transmission in limp mode or stuck in gear',
      'Harsh engagement',
      'Multiple transmission warning lights',
      'Scan tool cannot reach TCM',
      'Possible P0700 or U0001'
    ],
    causes: [
      'TCM power or ground fault',
      'Blown fuse or relay',
      'CAN wiring fault',
      'Failed TCM',
      'Low battery voltage',
      'Transmission harness connector damage'
    ],
    fixes: [
      'Check battery voltage and TCM fuses.',
      'Inspect the transmission harness and connector.',
      'Verify TCM power and ground.',
      'Test CAN communication to the TCM.',
      'Repair wiring or replace/program the TCM if needed.',
      'Clear codes and verify shift operation.'
    ],
    related: ["P0700", "U0001", "U0100", "P0730"],
    tip: 'On some vehicles the TCM is inside the transmission valve body. Confirm power and CAN before authorizing an internal repair.'
  },
  {
    code: "U0121",
    system: "U",
    category: "Network / CAN",
    title: 'Lost Communication With ABS / Traction Control Module',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [120, 1200],
    desc: 'The ABS/stability control module is not communicating on the network. ABS, traction control and stability assist are unavailable, and wheel speed data used by other systems may be missing.',
    symptoms: [
      'ABS, traction and stability lights on',
      'Speedometer may not work',
      'Multiple U-codes',
      'Scan tool cannot reach the ABS module',
      'Possible C0035 or C0110'
    ],
    causes: [
      'ABS module power or ground fault',
      'Blown fuse or relay',
      'CAN wiring fault',
      'Failed ABS module',
      'Low battery voltage',
      'Corroded connector'
    ],
    fixes: [
      'Check ABS fuses and battery voltage.',
      'Inspect the ABS module connector and grounds.',
      'Test CAN communication at the module.',
      'Verify power and ground at the module.',
      'Replace or rebuild the ABS module if it is dead.',
      'Clear codes and verify ABS/stability operation.'
    ],
    related: ["C0035", "C0110", "U0001", "U0073"],
    tip: 'A failing ABS module can pull the entire CAN bus down. If multiple modules are offline, disconnect the ABS module and recheck communication.'
  },
  {
    code: "U0140",
    system: "U",
    category: "Network / CAN",
    title: 'Lost Communication With Body Control Module',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Advanced",
    diy: false,
    cost: [100, 1300],
    desc: 'A module cannot reach the body control module (BCM). The BCM handles locks, lighting, wipers, windows and often the immobilizer, so many convenience features can fail at once.',
    symptoms: [
      'Locks, windows or lights not working',
      'Wipers inoperative',
      'Security or immobilizer warning',
      'Battery drain',
      'Multiple U-codes'
    ],
    causes: [
      'BCM power or ground fault',
      'Blown fuse',
      'CAN wiring fault',
      'Failed BCM',
      'Water intrusion or corrosion',
      'Low battery voltage'
    ],
    fixes: [
      'Check battery voltage and BCM fuses.',
      'Inspect the BCM connectors for water or corrosion.',
      'Verify power and ground at the BCM.',
      'Test CAN communication.',
      'Replace and program the BCM if needed.',
      'Verify all body functions and clear codes.'
    ],
    related: ["B1000", "B1342", "U0001", "U0155"],
    tip: 'Water leaks into a footwell or kick panel are a common cause of BCM faults. Fix the leak as well as the module.'
  },
  {
    code: "U0155",
    system: "U",
    category: "Network / CAN",
    title: 'Lost Communication With Instrument Panel Cluster',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Advanced",
    diy: false,
    cost: [100, 1100],
    desc: 'The instrument cluster is not communicating with the rest of the network. Gauges, warning lights and the odometer may freeze or go dark. Some vehicles will not start if the cluster is part of the immobilizer system.',
    symptoms: [
      'Gauges dead or sweeping',
      'Odometer or warning lights not working',
      'No-start on some vehicles',
      'Multiple U-codes',
      'Cluster backlighting failure'
    ],
    causes: [
      'Cluster power or ground fault',
      'Blown fuse',
      'CAN wiring fault',
      'Failed instrument cluster',
      'Water damage or cold solder joints',
      'Low battery voltage'
    ],
    fixes: [
      'Check battery voltage and cluster fuses.',
      'Inspect the cluster connector for corrosion.',
      'Verify power and ground at the cluster.',
      'Test CAN communication.',
      'Repair or replace the cluster; transfer configuration and odometer data as required.',
      'Clear codes and verify all gauges.'
    ],
    related: ["U0140", "U0001", "B1000", "U0100"],
    tip: 'A cluster that works after a tap or temperature change often has cracked solder joints. Repair may be cheaper than replacement.'
  }
);
