/* TorqueCode — OBD-II code library, part 1 (powertrain fundamentals)
   Severity: low | medium | high | critical
   Cost estimates are typical US independent-shop ranges (parts + labor), in USD. */

window.OBD_CODES = [
  {
    code: "P0011",
    system: "P",
    category: "Engine Timing / VVT",
    title: 'Camshaft Position Timing Over-Advanced (Bank 1)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [120, 950],
    desc: 'The PCM commanded the intake camshaft to a target angle, but the camshaft is further advanced than expected. This is a variable valve timing (VVT) performance fault, not necessarily a failed sensor. Left alone it can hurt fuel economy, idle quality and emissions.',
    symptoms: [
      'Rough or unstable idle, sometimes stalling',
      'Reduced power and poor fuel economy',
      'Rattle or ticking from the timing cover on cold starts',
      'Check engine light, occasionally with P0010 or P0016'
    ],
    causes: [
      'Low, dirty or wrong-viscosity engine oil starving the VVT phaser',
      'Clogged oil control valve (OCV) screen or stuck OCV solenoid',
      'Worn timing chain, tensioner or cam phaser',
      'Damaged OCV wiring or connector',
      'Rarely, a PCM calibration issue'
    ],
    fixes: [
      'Check oil level and condition first. Change oil and filter if overdue or sludgy.',
      'Remove and clean the oil control valve screen; test the solenoid with 12 V for a distinct click.',
      'Inspect the OCV connector and wiring for corrosion or oil intrusion.',
      'Verify actual vs. commanded cam angle with a scan tool that can read VVT data.',
      'If the phaser is sloppy or the chain has slack, replace the timing chain kit and phaser.'
    ],
    related: ["P0010", "P0016", "P0012", "P0340"],
    tip: 'On many engines this code is caused by neglected oil changes, not a bad part. Start with oil and the OCV screen before quoting a timing job.'
  },
  {
    code: "P0016",
    system: "P",
    category: "Engine Timing / VVT",
    title: 'Crankshaft / Camshaft Position Correlation (Bank 1, Sensor A)',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [150, 1600],
    desc: 'The PCM compares the crankshaft and camshaft signals and they no longer line up. That usually means the timing chain or belt has stretched or jumped a tooth, or one of the position sensors is lying. Because piston-to-valve clearance can be tight, this is a code to respect.',
    symptoms: [
      'Hard starting, long crank or a no-start',
      'Rough running, misfire or backfiring',
      'Rattle from the front of the engine on startup',
      'Reduced power; may be paired with P0011 or P0340'
    ],
    causes: [
      'Stretched timing chain or worn tensioner',
      'Timing belt jumped a tooth or installed incorrectly',
      'Failed camshaft or crankshaft position sensor',
      'Slipped cam phaser or damaged reluctor wheel',
      'Wiring or connector fault in either sensor circuit'
    ],
    fixes: [
      'Do not keep driving if the engine is rattling or running badly; stop and have it towed.',
      'Scan live cam/crank correlation data and check for other timing codes.',
      'Inspect the timing marks mechanically before replacing sensors.',
      'Test both sensors and their wiring; replace only what fails testing.',
      'If timing is off, install a complete chain or belt kit with tensioner and guides.'
    ],
    related: ["P0011", "P0335", "P0340", "P0017"],
    tip: 'A new cam sensor rarely fixes P0016 on a high-mileage engine. Verify the mechanical timing before spending money on electronics.'
  },
  {
    code: "P0030",
    system: "P",
    category: "Oxygen Sensor / Heater",
    title: 'Heated Oxygen Sensor Heater Control Circuit (Bank 1, Sensor 1)',
    severity: "low",
    urgency: "Fix soon",
    difficulty: "Easy",
    diy: true,
    cost: [70, 320],
    desc: 'The heater element inside the upstream oxygen sensor is not drawing the current the PCM expects. The sensor may still read exhaust oxygen, but it will take too long to reach operating temperature, hurting cold-start emissions and fuel control.',
    symptoms: [
      'Check engine light, often with no noticeable driveability change',
      'Slightly higher fuel consumption on short trips',
      'Possible P0135 heater code stored alongside',
      'Failed emissions test'
    ],
    causes: [
      'Failed heater element inside the oxygen sensor',
      'Blown heater fuse or faulty relay',
      'Open or chafed heater wiring',
      'Corroded or oil-contaminated connector',
      'Rarely, a PCM driver fault'
    ],
    fixes: [
      'Locate the oxygen sensor fuse and check it before anything else.',
      'Inspect the sensor connector for corrosion, oil or melted pins.',
      'Measure heater resistance across the two heater wires; compare with factory spec (often 4–10 ohms).',
      'Check for battery voltage and ground at the heater circuit with the key on.',
      'Replace the upstream sensor with the correct OEM-type part if the heater is open.'
    ],
    related: ["P0135", "P0133", "P0130", "P0171"],
    tip: 'Use an oxygen-sensor socket and penetrating oil. Never pull a hot sensor by the wires, and never use silicone sealer upstream of a sensor.'
  },
  {
    code: "P0087",
    system: "P",
    category: "Fuel Delivery",
    title: 'Fuel Rail / System Pressure Too Low',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [180, 1300],
    desc: 'The fuel rail pressure is below the target the PCM needs. On port-injected engines this is usually a weak pump or restriction; on gasoline direct injection (GDI) it can involve the high-pressure pump, a pressure sensor or the fuel pressure regulator. Lean running under load can damage pistons and catalysts.',
    symptoms: [
      'Cranks but is hard to start, or stalls after startup',
      'Hesitation, surging or loss of power under load',
      'Lean fuel trims, possibly with P0171',
      'Engine may enter reduced-power limp mode'
    ],
    causes: [
      'Clogged fuel filter or restricted fuel line',
      'Weak or failing fuel pump / low pump voltage',
      'Failed high-pressure fuel pump (GDI)',
      'Leaking or stuck fuel pressure regulator',
      'Faulty fuel pressure sensor or wiring',
      'Low fuel level or contaminated fuel'
    ],
    fixes: [
      'Confirm fuel level and check for a restricted filter; replace the filter if service is due.',
      'Measure low-side fuel pressure and volume at the rail or test port.',
      'Check pump relay, fuse and voltage drop at the pump connector.',
      'On GDI engines, read actual vs. commanded high-side pressure and inspect the high-pressure pump.',
      'Test the rail pressure sensor against a mechanical gauge before replacing it.',
      'Replace the failed pump, regulator, sensor or filter and clear the code.'
    ],
    related: ["P0171", "P0088", "P0230", "P0300"],
    tip: 'Never guess on a GDI high-pressure system. Relieve pressure per the service manual; gasoline at 2,000+ psi can cause serious injury.'
  },
  {
    code: "P0101",
    system: "P",
    category: "Air Metering",
    title: 'Mass Air Flow Sensor Range / Performance',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Easy",
    diy: true,
    cost: [20, 380],
    desc: 'The mass air flow (MAF) sensor signal is plausible but does not match the airflow the PCM expects from throttle position, engine speed and manifold pressure. Unmetered air or a contaminated sensor is the usual story.',
    symptoms: [
      'Rough idle, hesitation or stumble on acceleration',
      'Poor fuel economy or rich/lean fuel trims',
      'Black smoke or strong fuel smell in severe cases',
      'Possible P0171, P0172 or P0300 alongside'
    ],
    causes: [
      'Contaminated MAF hot wire (dirt, oil from an over-oiled filter)',
      'Unmetered air leak after the MAF, such as a cracked intake boot',
      'Clogged or incorrectly installed air filter',
      'PCV system leak or loose intake clamp',
      'MAF wiring, connector or sensor failure'
    ],
    fixes: [
      'Inspect the air intake path for cracks, loose clamps or a disconnected hose.',
      'Clean the MAF hot wire with dedicated MAF cleaner only; never touch it with a cloth.',
      'Check the air filter and replace it if dirty or wet.',
      'Compare live MAF grams/second at idle and at wide-open throttle with expected values.',
      'Check the connector pins and signal voltage; replace the MAF if cleaning does not fix it.'
    ],
    related: ["P0102", "P0103", "P0171", "P0172"],
    tip: 'An oiled gauze air filter can coat the MAF wire and trigger this code. Clean the sensor and re-check before replacing it.'
  },
  {
    code: "P0102",
    system: "P",
    category: "Air Metering",
    title: 'Mass Air Flow Sensor Circuit Low Input',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Easy",
    diy: true,
    cost: [20, 340],
    desc: 'The MAF signal voltage is lower than the PCM considers possible for the current operating conditions. In practice this often means the sensor is unplugged, the signal wire is shorted to ground, or the sensor has failed low.',
    symptoms: [
      'Engine may start but run poorly or stall',
      'Very low calculated airflow and lean fuel trims',
      'Poor throttle response',
      'Check engine light with possible P0101 or P0171'
    ],
    causes: [
      'MAF sensor disconnected or loose connector',
      'Signal wire shorted to ground or broken',
      'Failed MAF sensor',
      'Blown fuse supplying the sensor',
      'Severe intake leak before the sensor'
    ],
    fixes: [
      'Check that the MAF is plugged in fully and the connector is not cracked.',
      'Inspect the harness near the intake for chafing or pinched wires.',
      'Verify 12 V supply, ground and a varying signal voltage with the key on and engine running.',
      'Check the sensor fuse.',
      'Replace the MAF if power and ground are good but the signal stays low.'
    ],
    related: ["P0101", "P0103", "P0113", "P0171"],
    tip: 'A disconnected MAF after an air-filter service is surprisingly common. Look before you buy.'
  },
  {
    code: "P0103",
    system: "P",
    category: "Air Metering",
    title: 'Mass Air Flow Sensor Circuit High Input',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [30, 360],
    desc: 'The MAF signal voltage is higher than the PCM expects. A short to voltage, a contaminated sensor or a failed sensor can all drive the reading high, causing rich running and poor economy.',
    symptoms: [
      'Rich fuel trims and black exhaust smoke',
      'Poor fuel economy and fouled spark plugs over time',
      'Hesitation or rough running',
      'Possible P0172 or P0300'
    ],
    causes: [
      'MAF signal wire shorted to battery voltage',
      'Contaminated or failed MAF sensor',
      'Water intrusion in the connector',
      'Damaged PCM driver (rare)',
      'Incorrect MAF installed for the application'
    ],
    fixes: [
      'Inspect the MAF connector for water, corrosion or bent pins.',
      'Check the signal wire for a short to power with the key on.',
      'Clean the sensor element with MAF cleaner and re-check live data.',
      'Confirm the part number is correct for the engine.',
      'Replace the MAF if the signal remains high with correct wiring.'
    ],
    related: ["P0101", "P0102", "P0172", "P0113"],
    tip: 'Compare ambient air temperature and intake air temperature readings when cold. A skewed IAT can make MAF calculations look wrong.'
  },
  {
    code: "P0113",
    system: "P",
    category: "Temperature Sensors",
    title: 'Intake Air Temperature Sensor Circuit High Input',
    severity: "low",
    urgency: "Monitor",
    difficulty: "Easy",
    diy: true,
    cost: [25, 220],
    desc: 'The intake air temperature (IAT) signal indicates an unrealistically cold intake charge, usually because the circuit is open. The PCM may miscalculate fuel and ignore some cold-start enrichment logic.',
    symptoms: [
      'Check engine light with little or no driveability change',
      'IAT reading stuck at a very low value on a scan tool',
      'Slightly rough cold start',
      'Possible poor fuel economy'
    ],
    causes: [
      'IAT sensor unplugged or failed open',
      'Broken signal wire or corroded connector',
      'Sensor integrated into the MAF and failed internally',
      'Rodent damage to the intake harness'
    ],
    fixes: [
      'Check the IAT connector and pins first.',
      'Read IAT on a cold engine and compare it with ambient temperature.',
      'Measure sensor resistance and compare with the temperature-resistance table.',
      'Inspect the harness for opens; repair as needed.',
      'Replace the IAT sensor or MAF assembly if the sensor is open.'
    ],
    related: ["P0112", "P0101", "P0117", "P0128"],
    tip: 'On many modern engines the IAT is part of the MAF. Diagnose the circuit before replacing the whole air meter.'
  },
  {
    code: "P0117",
    system: "P",
    category: "Temperature Sensors",
    title: 'Engine Coolant Temperature Circuit Low Input',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [40, 300],
    desc: 'The coolant temperature signal is lower than physically possible, which usually means a short to ground or a failed sensor. The PCM may think the engine is hotter than it is, affecting fan control, fuel enrichment and shifting.',
    symptoms: [
      'Temperature gauge pegged hot or erratic',
      'Cooling fan running constantly',
      'Hard starting or rich running when cold',
      'Check engine light, possible P0128 or P0118'
    ],
    causes: [
      'ECT sensor signal wire shorted to ground',
      'Failed ECT sensor',
      'Corroded connector or water intrusion',
      'Damaged PCM input circuit (rare)',
      'Wrong sensor installed'
    ],
    fixes: [
      'Read the ECT value on a cold engine; compare it with ambient temperature.',
      'Disconnect the sensor and see whether the reading changes to a default high value.',
      'Inspect the connector and signal wire for a short to ground.',
      'Test the sensor resistance against the factory chart.',
      'Replace the ECT sensor and refill/bleed the cooling system if needed.'
    ],
    related: ["P0118", "P0128", "P0113", "P0507"],
    tip: 'Never open a hot cooling system. Let the engine cool completely and use the correct coolant bleed procedure.'
  },
  {
    code: "P0128",
    system: "P",
    category: "Cooling System",
    title: 'Coolant Thermostat Below Regulating Temperature',
    severity: "low",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [120, 480],
    desc: 'The engine is not reaching normal operating temperature within the expected time, so the thermostat is probably stuck open. A cold engine burns extra fuel, wears faster and can fail emissions testing.',
    symptoms: [
      'Temperature gauge stays low or rises very slowly',
      'Heater output is weak, especially at idle',
      'Higher fuel consumption, particularly on short trips',
      'Check engine light; cooling fan may run more than usual'
    ],
    causes: [
      'Thermostat stuck open or opening too early',
      'Faulty coolant temperature sensor',
      'Low coolant level or air in the cooling system',
      'Cooling fan stuck on',
      'Radiator cap not holding pressure'
    ],
    fixes: [
      'Check coolant level and bleed the system if air is suspected.',
      'Compare scan-tool ECT with a laser thermometer at the thermostat housing.',
      'Verify the fan is not running continuously when cold.',
      'Replace the thermostat and gasket if it is stuck open; use the correct temperature rating.',
      'Clear the code and confirm the engine reaches operating temperature in a normal drive cycle.'
    ],
    related: ["P0117", "P0118", "P0125", "P0507"],
    tip: 'A thermostat is cheap insurance. Replace the gasket and use the specified coolant; mixing coolant types can cause long-term damage.'
  },
  {
    code: "P0133",
    system: "P",
    category: "Oxygen Sensor / Heater",
    title: 'Oxygen Sensor Slow Response (Bank 1, Sensor 1)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Easy",
    diy: true,
    cost: [70, 340],
    desc: 'The upstream oxygen sensor is switching between rich and lean too slowly. An aging sensor, contamination or an exhaust leak can dull its response, causing sluggish fuel control and higher emissions.',
    symptoms: [
      'Check engine light with no obvious performance change',
      'Reduced fuel economy',
      'Surging or hesitation at light throttle',
      'Failed emissions test'
    ],
    causes: [
      'Aged or contaminated upstream oxygen sensor',
      'Exhaust leak before the sensor',
      'Coolant or oil contamination from an internal leak',
      'Wiring damage or poor ground',
      'Sensor installed with silicone sealer (poisoned)'
    ],
    fixes: [
      'Inspect for exhaust leaks at the manifold and downpipe.',
      'Review live O2 data: the upstream sensor should switch rapidly between roughly 0.1 and 0.9 V.',
      'Check the sensor connector and wiring for damage.',
      'Look for signs of coolant or oil consumption that could contaminate the sensor.',
      'Replace the upstream sensor with the specified type; clear codes and verify readiness.'
    ],
    related: ["P0130", "P0135", "P0171", "P0420"],
    tip: 'Do not use silicone gasket sealer upstream of an oxygen sensor. It can poison the sensor and cause repeat failures.'
  },
  {
    code: "P0135",
    system: "P",
    category: "Oxygen Sensor / Heater",
    title: 'Oxygen Sensor Heater Circuit (Bank 1, Sensor 1)',
    severity: "low",
    urgency: "Fix soon",
    difficulty: "Easy",
    diy: true,
    cost: [70, 320],
    desc: 'The upstream sensor heater circuit is not performing as expected. This is closely related to P0030 but is usually flagged when the heater current is out of range during the PCM self-test.',
    symptoms: [
      'Check engine light, often without driveability symptoms',
      'Delayed closed-loop fuel control after a cold start',
      'Slightly higher emissions and fuel use',
      'Possible P0030 stored at the same time'
    ],
    causes: [
      'Open heater element in the oxygen sensor',
      'Blown fuse or faulty heater relay',
      'Chafed or broken heater wiring',
      'Corroded connector pins',
      'PCM heater driver failure (rare)'
    ],
    fixes: [
      'Check the O2 heater fuse and relay first.',
      'Inspect the connector and heater wires for damage.',
      'Measure heater resistance cold and compare with spec.',
      'With the key on, check for voltage at the heater supply wire.',
      'Replace the upstream O2 sensor if the heater is open or out of range.'
    ],
    related: ["P0030", "P0133", "P0141", "P0130"],
    tip: 'A heater code does not always mean the sensor is inaccurate. But on a high-mileage sensor, replacing it usually solves both the heater and slow-response complaints.'
  },
  {
    code: "P0171",
    system: "P",
    category: "Fuel & Air Metering",
    title: 'System Too Lean (Bank 1)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [80, 650],
    desc: 'The PCM has added more fuel than expected and still sees a lean condition on bank 1. That means too much air is getting in, or not enough fuel is arriving. Common and often inexpensive to fix, but a persistent lean condition can burn valves and damage the catalyst.',
    symptoms: [
      'Rough idle, especially when cold',
      'Hesitation or stumble on acceleration',
      'Lean fuel trims (positive long-term trims)',
      'Possible P0174, P0300 or P0101 alongside',
      'Whistling or hissing from the engine bay'
    ],
    causes: [
      'Vacuum leak: intake gasket, PCV hose, brake booster, dipstick seal',
      'Dirty or under-reporting MAF sensor',
      'Clogged fuel filter, weak pump or low fuel pressure',
      'Dirty or clogged fuel injectors',
      'Leaking intake manifold gasket',
      'Exhaust leak before the upstream O2 sensor',
      'Faulty upstream oxygen sensor'
    ],
    fixes: [
      'Read long- and short-term fuel trims at idle and at 2,500 rpm. If the lean condition improves with rpm, suspect a vacuum leak.',
      'Smoke-test the intake system; inspect all vacuum hoses, the PCV system and the brake booster line.',
      'Clean the MAF sensor and check its live reading at idle.',
      'Check fuel pressure and volume; replace a restricted filter.',
      'Inspect injector spray patterns or perform a injector balance test.',
      'Repair the leak or failed component, clear codes and confirm trims return near zero.'
    ],
    related: ["P0174", "P0101", "P0300", "P0442"],
    tip: 'Do not replace the oxygen sensor first. A lean code is the sensor reporting a real condition; replacing it hides the evidence.'
  },
  {
    code: "P0172",
    system: "P",
    category: "Fuel & Air Metering",
    title: 'System Too Rich (Bank 1)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [90, 750],
    desc: 'The PCM is removing fuel and still sees a rich condition on bank 1. Extra fuel is coming from somewhere: leaking injectors, high fuel pressure, a stuck purge valve or a sensor reporting less air than actually enters.',
    symptoms: [
      'Strong fuel smell at idle or after shutdown',
      'Black sooty exhaust and fouled plugs',
      'Poor fuel economy',
      'Rough idle or stumbling',
      'Black smoke under acceleration'
    ],
    causes: [
      'Leaking or stuck-open fuel injector',
      'High fuel pressure from a failed regulator',
      'Dirty MAF under-reporting airflow',
      'EVAP purge valve stuck open',
      'Faulty coolant temperature sensor reading cold',
      'Restricted air intake or dirty air filter'
    ],
    fixes: [
      'Check fuel trims at idle and cruise; note whether the rich condition is constant or idle-only.',
      'Inspect the purge valve for a stuck-open condition (disconnect and plug the hose as a test).',
      'Check fuel pressure; compare with specification.',
      'Clean the MAF and verify air filter/intake integrity.',
      'Perform an injector leak-down/balance test; replace leaking injectors.',
      'Verify ECT readings when cold and fully warmed.'
    ],
    related: ["P0175", "P0101", "P0442", "P0300"],
    tip: 'A purge valve that sticks open can flood the intake after refueling. If the rich code appears right after a fill-up, test the purge system first.'
  },
  {
    code: "P0174",
    system: "P",
    category: "Fuel & Air Metering",
    title: 'System Too Lean (Bank 2)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [80, 650],
    desc: 'Same lean condition as P0171, but on the bank 2 side of a V6/V8. When P0171 and P0174 set together, the cause is usually shared: MAF, vacuum leak, fuel supply or exhaust backpressure.',
    symptoms: [
      'Rough or high idle',
      'Hesitation and reduced power',
      'Lean fuel trims on bank 2',
      'Possible P0171 and P0300 in V-shaped engines',
      'Whistle or hiss from the intake'
    ],
    causes: [
      'Intake manifold or throttle body gasket leak',
      'Cracked vacuum hose or PCV line',
      'Dirty MAF sensor',
      'Weak fuel pump or restricted filter',
      'Bank 2 injector bank issue',
      'Exhaust leak before the bank 2 upstream sensor'
    ],
    fixes: [
      'If P0171 is also present, diagnose the shared air/fuel supply first.',
      'Smoke-test the intake and inspect bank 2 intake gaskets and hoses.',
      'Clean the MAF; verify its reading against expected airflow.',
      'Check fuel pressure and filter restriction.',
      'Swap or test bank 2 injectors if the lean condition is isolated to that bank.',
      'Repair leaks, clear codes and verify fuel trims.'
    ],
    related: ["P0171", "P0175", "P0300", "P0101"],
    tip: 'On V8 engines, a failed intake manifold gasket at the bank 2 corner can cause a bank-specific lean code. A smoke test finds it fastest.'
  },
  {
    code: "P0175",
    system: "P",
    category: "Fuel & Air Metering",
    title: 'System Too Rich (Bank 2)',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [90, 750],
    desc: 'Bank 2 is running rich even after the PCM has trimmed fuel. The cause may be isolated to bank 2 (injectors, O2 sensor) or shared with bank 1 (fuel pressure, purge valve, MAF).',
    symptoms: [
      'Fuel smell and sooty exhaust',
      'Poor fuel economy',
      'Rough idle or fouled spark plugs',
      'Black smoke under load',
      'Possible P0172 if both banks are affected'
    ],
    causes: [
      'Leaking bank 2 fuel injector(s)',
      'High fuel pressure',
      'Stuck-open EVAP purge valve',
      'Dirty MAF sensor',
      'Faulty bank 2 upstream oxygen sensor',
      'Restricted intake or air filter'
    ],
    fixes: [
      'Check whether P0172 is also stored; if so, diagnose shared causes first.',
      'Test fuel pressure and inspect the purge valve.',
      'Clean the MAF and check the air filter.',
      'Perform an injector balance/leak test on bank 2.',
      'Compare bank 1 and bank 2 O2 sensor waveforms for a skewed sensor.',
      'Repair the fault and confirm both banks return to normal trim.'
    ],
    related: ["P0172", "P0174", "P0300", "P0442"],
    tip: 'If only one bank is rich, swapping the upstream O2 sensors side-to-side can quickly show whether the sensor or the fuel delivery is at fault.'
  },
  {
    code: "P0201",
    system: "P",
    category: "Fuel Injection",
    title: 'Injector Circuit Open — Cylinder 1',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [100, 480],
    desc: 'The PCM sees an open circuit on the cylinder 1 injector command wire. The injector may not fire at all, causing a dead miss. The cause can be the injector itself, its harness, or a connector that has come loose.',
    symptoms: [
      'Rough idle and misfire, often with P0301',
      'Strong raw-fuel smell if the injector is stuck open instead',
      'Loss of power and poor fuel economy',
      'Engine shake at idle'
    ],
    causes: [
      'Failed injector solenoid (open winding)',
      'Broken or chafed injector harness',
      'Corroded or loose injector connector',
      'PCM injector driver fault (rare)',
      'Rodent damage to wiring'
    ],
    fixes: [
      'Inspect the cylinder 1 injector connector and harness for damage.',
      'Measure injector resistance and compare with the other cylinders.',
      'Use a noid light to confirm the PCM is pulsing the injector.',
      'Check for 12 V at the injector with the key on.',
      'Replace the injector if it is open electrically; clear the code and verify.'
    ],
    related: ["P0301", "P0202", "P0171", "P0300"],
    tip: 'If the miss moves when you swap the coil and plug, the ignition is at fault. If not, test the injector circuit before replacing parts.'
  },
  {
    code: "P0230",
    system: "P",
    category: "Fuel Delivery",
    title: 'Fuel Pump Primary Circuit Malfunction',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Moderate",
    diy: true,
    cost: [100, 950],
    desc: 'The PCM has detected a fault in the fuel pump power circuit, usually the relay or primary wiring. The pump may still run intermittently, which can leave you stranded.',
    symptoms: [
      'No-start, or starts only after cycling the key',
      'Engine stalls while driving',
      'No fuel pump prime sound at key-on',
      'Possible P0087 or lean codes'
    ],
    causes: [
      'Failed fuel pump relay',
      'Blown fuse or poor ground',
      'Corroded pump connector or chafed harness',
      'Inertia/fuel cut-off switch tripped (many Fords)',
      'Failed fuel pump drawing excessive current'
    ],
    fixes: [
      'Check the fuel pump fuse and relay; swap the relay with an identical one as a test.',
      'Check the inertia switch and reset it if tripped.',
      'Verify power and ground at the pump connector during prime.',
      'Inspect the harness along the frame and at the tank for damage.',
      'Replace the pump or relay/module as diagnosed; never run a pump dry.'
    ],
    related: ["P0087", "P0231", "P0232", "P0171"],
    tip: 'If the pump only fails when hot, test it while the engine is at operating temperature. A failing pump can pass a cold resistance test.'
  },
  {
    code: "P0299",
    system: "P",
    category: "Turbo / Supercharger",
    title: 'Turbocharger / Supercharger Underboost',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Advanced",
    diy: false,
    cost: [100, 1600],
    desc: 'The engine is not producing the boost pressure the PCM commands. A boost leak, a stuck wastegate or a failed diverter valve are the usual suspects. Driving with underboost can over-fuel the engine and damage the turbo if the cause is oil starvation or overspeed.',
    symptoms: [
      'Noticeable loss of power, especially uphill',
      'Whooshing, hissing or fluttering sounds under acceleration',
      'Limp mode or reduced boost',
      'Possible P0300, P0171 or P0101',
      'Black smoke or high EGT in severe cases'
    ],
    causes: [
      'Split charge pipe, intercooler or boost hose',
      'Stuck-open wastegate or faulty actuator',
      'Failed diverter/blow-off valve',
      'Faulty boost control solenoid',
      'Clogged air filter or restricted intake',
      'Faulty MAP/boost sensor or wiring'
    ],
    fixes: [
      'Do a visual inspection of all charge pipes, clamps and the intercooler.',
      'Perform a boost leak test with regulated air and listen for leaks.',
      'Check wastegate actuator movement and vacuum/electronic control.',
      'Test the diverter valve for a torn diaphragm.',
      'Verify MAP sensor readings against actual boost with a gauge.',
      'Replace failed components and confirm commanded vs. actual boost.'
    ],
    related: ["P0234", "P0101", "P0171", "P0300"],
    tip: 'A boost leak often sounds like a flutter or hiss that appears only under load. A smoke test can find leaks that are invisible at idle.'
  },
  {
    code: "P0300",
    system: "P",
    category: "Ignition / Misfire",
    title: 'Random / Multiple Cylinder Misfire Detected',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Moderate",
    diy: true,
    cost: [100, 1200],
    desc: 'The PCM has counted enough misfires across multiple cylinders to flag a random misfire. Because it is not isolated to one cylinder, look for a shared cause: fuel quality, ignition wear, a vacuum leak, low fuel pressure or a mechanical issue.',
    symptoms: [
      'Shaking or shuddering at idle and under load',
      'Flashing check engine light (stop driving if it flashes)',
      'Loss of power and poor fuel economy',
      'Raw fuel smell from the exhaust',
      'Rough cold start'
    ],
    causes: [
      'Worn spark plugs, coils or ignition wires',
      'Vacuum leak or intake gasket failure',
      'Low fuel pressure or clogged injectors',
      'Contaminated fuel or wrong octane',
      'EGR valve stuck open',
      'Low compression, valve or head gasket problem',
      'Bad engine ground or battery connection'
    ],
    fixes: [
      'If the check engine light is flashing, stop driving; a misfiring catalyst can overheat.',
      'Scan misfire counters by cylinder to see whether the miss is truly random.',
      'Inspect spark plugs and coils; replace plugs at the specified interval.',
      'Check fuel pressure, fuel trims and injector operation.',
      'Smoke-test the intake for vacuum leaks.',
      'Run a compression test and cylinder leak-down if ignition and fuel check out.'
    ],
    related: ["P0301", "P0302", "P0303", "P0304", "P0171"],
    tip: 'A flashing MIL means catalytic converter damage is happening right now. Pull over and tow it rather than driving home.'
  },
  {
    code: "P0301",
    system: "P",
    category: "Ignition / Misfire",
    title: 'Cylinder 1 Misfire Detected',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Moderate",
    diy: true,
    cost: [80, 700],
    desc: 'Cylinder 1 is misfiring frequently enough for the PCM to flag it. A single-cylinder misfire is usually ignition, fuel or compression specific to that hole. Swap-testing components is the fastest way to isolate it.',
    symptoms: [
      'Shaking at idle, worse under load',
      'Flashing or steady check engine light',
      'Loss of power and fuel economy',
      'Raw fuel smell from the exhaust',
      'P0301 stored with possible P0201'
    ],
    causes: [
      'Fouled or worn spark plug in cylinder 1',
      'Failed ignition coil or plug boot',
      'Leaking or clogged cylinder 1 injector',
      'Low compression (rings, valves, head gasket)',
      'Vacuum leak near cylinder 1 intake runner',
      'Head gasket failure or coolant intrusion'
    ],
    fixes: [
      'Move the coil and plug to another cylinder; if the code follows, replace the faulty part.',
      'Inspect the plug for oil, coolant or fuel fouling, which points to a deeper issue.',
      'Test the injector and its circuit; compare with other cylinders.',
      'Perform a compression test and leak-down test on cylinder 1.',
      'Check for a vacuum leak at the intake runner.',
      'Repair the root cause and clear codes; verify misfire counters stay at zero.'
    ],
    related: ["P0300", "P0201", "P0302", "P0171"],
    tip: 'A misfire that appears only after a cold start often points to a failing head gasket or coolant intrusion. Check the coolant level and look for white smoke.'
  },
  {
    code: "P0302",
    system: "P",
    category: "Ignition / Misfire",
    title: 'Cylinder 2 Misfire Detected',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Moderate",
    diy: true,
    cost: [80, 700],
    desc: 'Cylinder 2 is missing enough to set a dedicated code. As with all single-cylinder misfires, swap ignition parts between cylinders first, then test fuel and compression.',
    symptoms: [
      'Engine shake and rough idle',
      'Check engine light, possibly flashing under load',
      'Reduced power and higher fuel consumption',
      'Fuel smell from the tailpipe',
      'Possible P0202 or P0300'
    ],
    causes: [
      'Worn or fouled spark plug',
      'Failed coil-on-plug or ignition wire',
      'Cylinder 2 injector fault',
      'Low compression or valve problem',
      'Intake leak at cylinder 2 runner',
      'Head gasket or piston ring issue'
    ],
    fixes: [
      'Swap the coil and plug with a known-good cylinder and recheck the misfire counter.',
      'Inspect the plug for wear, oil or coolant.',
      'Test the injector circuit and spray pattern.',
      'Run a compression and leak-down test if ignition and fuel are good.',
      'Check for intake leaks and engine mechanical noise.',
      'Replace the failed component and verify the repair.'
    ],
    related: ["P0300", "P0202", "P0301", "P0303"],
    tip: 'Do not keep driving with a flashing check engine light. Unburned fuel destroys the catalytic converter in minutes.'
  },
  {
    code: "P0303",
    system: "P",
    category: "Ignition / Misfire",
    title: 'Cylinder 3 Misfire Detected',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Moderate",
    diy: true,
    cost: [80, 700],
    desc: 'Cylinder 3 is setting a misfire code. Isolate the cause by swapping ignition components, then checking fuel and mechanical condition on that cylinder.',
    symptoms: [
      'Rough idle and vibration',
      'Flashing or steady check engine light',
      'Hesitation and power loss',
      'Higher emissions and fuel use',
      'Possible P0203'
    ],
    causes: [
      'Spark plug wear or fouling',
      'Failed ignition coil or boot',
      'Sticking or clogged injector',
      'Compression loss from valves or rings',
      'Vacuum leak near cylinder 3',
      'Coolant intrusion from a head gasket leak'
    ],
    fixes: [
      'Swap the coil and plug with another cylinder to see whether the misfire moves.',
      'Check the spark plug condition and gap.',
      'Test injector resistance, pulse and spray pattern.',
      'Perform compression and leak-down tests.',
      'Pressure-test the cooling system if coolant loss is present.',
      'Replace the failed part and confirm misfire counters clear.'
    ],
    related: ["P0300", "P0203", "P0302", "P0304"],
    tip: 'On engines with coil packs shared between cylinders, a single bad coil can cause two misfire codes. Check the pairing.'
  },
  {
    code: "P0304",
    system: "P",
    category: "Ignition / Misfire",
    title: 'Cylinder 4 Misfire Detected',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Moderate",
    diy: true,
    cost: [80, 700],
    desc: 'Cylinder 4 is misfiring. The same diagnostic path applies: verify ignition, then fuel, then mechanical integrity. On some engines cylinder 4 is prone to coolant or oil intrusion from nearby gaskets.',
    symptoms: [
      'Engine vibration, worst at idle',
      'Check engine light, flashing under acceleration',
      'Reduced power and fuel economy',
      'Raw fuel odor',
      'Possible P0204 or P0300'
    ],
    causes: [
      'Bad spark plug or coil',
      'Faulty injector',
      'Low compression, valve or ring damage',
      'Head gasket leak',
      'Intake manifold leak near cylinder 4',
      'Wiring or connector issue'
    ],
    fixes: [
      'Swap ignition components with a known-good cylinder and recheck.',
      'Inspect the spark plug for oil, coolant or fuel fouling.',
      'Test the injector and its wiring.',
      'Run compression and cylinder leak-down tests.',
      'Check cooling system pressure and oil condition.',
      'Repair the root cause; clear codes and verify.'
    ],
    related: ["P0300", "P0204", "P0303", "P0171"],
    tip: 'If the misfire is worse when the engine is cold and clears when warm, suspect a head gasket or valve seat issue rather than ignition.'
  },
  {
    code: "P0325",
    system: "P",
    category: "Ignition / Knock",
    title: 'Knock Sensor 1 Circuit Malfunction',
    severity: "low",
    urgency: "Monitor",
    difficulty: "Moderate",
    diy: true,
    cost: [140, 550],
    desc: 'The PCM cannot reliably read the knock sensor circuit. Without knock detection, the PCM may retard timing defensively, costing power and fuel economy, or fail to protect the engine from detonation.',
    symptoms: [
      'Check engine light with no obvious driveability issue',
      'Reduced power and fuel economy',
      'Possible pinging or knocking under load if timing is not retarded',
      'Rough running on some engines',
      'Possible P0327 or P0332'
    ],
    causes: [
      'Knock sensor failed or loose',
      'Damaged or shielded wiring, especially near hot exhaust parts',
      'Corroded connector',
      'Improperly torqued sensor',
      'Engine mechanical noise or loose accessory',
      'PCM fault (rare)'
    ],
    fixes: [
      'Inspect the sensor connector and wiring for heat damage or corrosion.',
      'Confirm the sensor is mounted at the specified torque; over- or under-tightening can affect output.',
      'Check for engine noises that could mimic knock (loose heat shields, accessories).',
      'Test the sensor signal with an oscilloscope if available.',
      'Replace the knock sensor if the circuit tests bad; clear codes and verify.'
    ],
    related: ["P0327", "P0332", "P0300", "P0420"],
    tip: 'Use the exact torque spec for the knock sensor. A sensor that is too loose or too tight can produce a false signal.'
  },
  {
    code: "P0335",
    system: "P",
    category: "Engine Position Sensors",
    title: 'Crankshaft Position Sensor A Circuit',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Moderate",
    diy: true,
    cost: [100, 500],
    desc: 'The PCM is not receiving a usable crankshaft position signal. This sensor tells the PCM where the crank is and how fast it is turning; without it, the engine may not start or may stall suddenly.',
    symptoms: [
      'Cranks but will not start',
      'Engine stalls intermittently, especially when hot',
      'Tachometer drops to zero while cranking',
      'Possible P0336, P0016 or no-start with no other codes'
    ],
    causes: [
      'Failed crankshaft position sensor',
      'Damaged reluctor wheel or tone ring',
      'Broken, chafed or oil-soaked wiring',
      'Corroded connector pins',
      'Debris or metal shavings on the sensor tip',
      'PCM or ignition switch issue (rare)'
    ],
    fixes: [
      'Inspect the sensor, connector and wiring; look for oil or metal debris.',
      'Read engine RPM while cranking on a scan tool; zero RPM suggests no signal.',
      'Check for cranking RPM in live data and inspect the reluctor wheel.',
      'Measure sensor resistance or waveform if specified.',
      'Replace the sensor if the signal is absent with good power and ground.',
      'Clear codes and confirm the engine starts reliably.'
    ],
    related: ["P0336", "P0016", "P0340", "P0725"],
    tip: 'A crank sensor can fail only when hot and work again after cooling. If the stall is intermittent, test it hot or monitor live RPM while wiggling the harness.'
  },
  {
    code: "P0340",
    system: "P",
    category: "Engine Position Sensors",
    title: 'Camshaft Position Sensor A Circuit (Bank 1)',
    severity: "high",
    urgency: "Address promptly",
    difficulty: "Moderate",
    diy: true,
    cost: [100, 520],
    desc: 'The PCM cannot see a valid camshaft position signal for bank 1. The engine may still start using the crank sensor, but sequential fuel injection and VVT control will suffer, and a no-start is possible.',
    symptoms: [
      'Long crank or no-start',
      'Rough running and misfire',
      'Reduced power and poor fuel economy',
      'Possible P0011, P0016 or P0365',
      'Tachometer or scan data may be erratic'
    ],
    causes: [
      'Failed camshaft position sensor',
      'Wiring open/short or connector corrosion',
      'Metal debris on the sensor',
      'Timing chain stretch or phaser issue',
      'PCM driver fault (rare)'
    ],
    fixes: [
      'Inspect the sensor and connector for oil intrusion or damage.',
      'Check for 12 V, ground and a switching signal at the sensor.',
      'Read cam sensor data and compare with crank sensor sync.',
      'Inspect the sensor tip for metal debris.',
      'Replace the sensor if the circuit is intact but there is no signal; check timing if P0016 is present.'
    ],
    related: ["P0016", "P0335", "P0011", "P0365"],
    tip: 'Oil leaking into the connector can cause an intermittent cam code. Clean the connector and replace the sensor O-ring if oil is present.'
  },
  {
    code: "P0401",
    system: "P",
    category: "Emissions / EGR",
    title: 'Exhaust Gas Recirculation Flow Insufficient',
    severity: "medium",
    urgency: "Fix soon",
    difficulty: "Moderate",
    diy: true,
    cost: [100, 550],
    desc: 'The EGR system is not delivering the expected amount of exhaust gas back into the intake. Carbon buildup is the classic cause, especially on high-mileage engines. Insufficient EGR increases combustion temperatures and NOx emissions.',
    symptoms: [
      'Check engine light, often without a noticeable miss',
      'Pinging or knocking under light load',
      'Failed emissions test (high NOx)',
      'Rough idle if the EGR valve is stuck partially open',
      'Possible P0402 or P0300'
    ],
    causes: [
      'Carbon-clogged EGR passages or valve pintle',
      'Failed EGR valve or stepper motor',
      'Faulty differential pressure feedback (DPFE) sensor',
      'Leaking or disconnected EGR vacuum line',
      'Failed EGR control solenoid',
      'Exhaust restriction'
    ],
    fixes: [
      'Inspect vacuum lines and the EGR valve connector.',
      'Remove the EGR valve and clean carbon from the pintle and passageways.',
      'Test the EGR valve with a scan tool or vacuum pump to confirm movement.',
      'Check the DPFE sensor signal and reference voltage.',
      'Replace the valve, solenoid or DPFE sensor as needed.',
      'Clear codes and verify EGR flow data during a test drive.'
    ],
    related: ["P0402", "P0403", "P0300", "P0420"],
    tip: 'On many engines the EGR passages in the intake manifold clog solid. Cleaning the valve alone will not fix it; the ports need to be cleared too.'
  }
];
