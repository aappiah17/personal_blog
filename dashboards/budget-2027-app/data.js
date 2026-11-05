// Data for the Ghana 2027 Budget dashboard. GH¢ billion unless noted; ministries and flagships in GH¢ million.
// Release day: set status to "released", fill every null, and add each sector's brief.
window.BUDGET = {
 "status": "baseline",
 "updated": "2026-11-05",
 "note": "2026 baseline loaded. 2027 Budget figures arrive after the Finance Minister presents the budget on 12 November 2026.",
 "headline": [
  {
   "key": "rev",
   "label": "Revenue and grants",
   "b2026": 268.09,
   "b2026_gdp": 16.8,
   "b2027": null,
   "b2027_gdp": null
  },
  {
   "key": "exp",
   "label": "Total expenditure",
   "b2026": 302.46,
   "b2026_gdp": 18.9,
   "p2027": 341.51,
   "b2027": null,
   "b2027_gdp": null
  },
  {
   "key": "pb",
   "label": "Primary balance",
   "unit": "% of GDP",
   "b2026_gdp": 1.5,
   "b2027_gdp": null,
   "note": "Rule: 1.5% surplus. IMF says 0.5% from 2027 is consistent with debt sustainability"
  },
  {
   "key": "ob",
   "label": "Overall deficit",
   "unit": "% of GDP",
   "b2026_gdp": -2.2,
   "b2027_gdp": null
  },
  {
   "key": "int",
   "label": "Interest",
   "b2026": 57.71,
   "p2027": 58.5,
   "b2027": null
  },
  {
   "key": "capex",
   "label": "Capital expenditure",
   "b2026": 57.53,
   "p2027": 61.32,
   "b2027": null
  }
 ],
 "expenditure_lines": [
  {
   "line": "Wages and salaries",
   "o2025": 80.7,
   "b2026": 90.76,
   "p2027": 103.76,
   "b2027": null
  },
  {
   "line": "Goods and services",
   "o2025": 6.03,
   "b2026": 13.16,
   "p2027": 14.7,
   "b2027": null
  },
  {
   "line": "Interest",
   "o2025": 51.05,
   "b2026": 57.71,
   "p2027": 58.5,
   "b2027": null
  },
  {
   "line": "Grants to other govt units",
   "o2025": 50.71,
   "b2026": 63.55,
   "p2027": 74.04,
   "b2027": null
  },
  {
   "line": "Social benefits",
   "o2025": 3.24,
   "b2026": 3.51,
   "p2027": 4.35,
   "b2027": null
  },
  {
   "line": "Other expenditure",
   "o2025": 35.95,
   "b2026": 16.23,
   "p2027": 24.83,
   "b2027": null
  },
  {
   "line": "Capital expenditure",
   "o2025": 23.86,
   "b2026": 57.53,
   "p2027": 61.32,
   "b2027": null
  }
 ],
 "totals": {
  "o2025": 251.74,
  "b2026": 302.46,
  "p2027": 341.51,
  "b2027": null
 },
 "execution_h1_2026": [
  {
   "line": "Wages and salaries",
   "prog": 45.38,
   "out": 42.9
  },
  {
   "line": "Goods and services",
   "prog": 6.58,
   "out": 6.35
  },
  {
   "line": "Grants to other govt units",
   "prog": 31.1,
   "out": 26.21
  },
  {
   "line": "Other expenditure",
   "prog": 10.5,
   "out": 8.1
  },
  {
   "line": "Interest",
   "prog": 28.44,
   "out": 21.5
  },
  {
   "line": "Capex, domestic",
   "prog": 27.15,
   "out": 19.81
  },
  {
   "line": "Capex, foreign financed",
   "prog": 9.41,
   "out": 2.37
  }
 ],
 "revenue_h1_2026": [
  {
   "line": "Non-oil tax revenue",
   "prog": 104.22,
   "out": 101.51
  },
  {
   "line": "Non-tax revenue",
   "prog": 11.04,
   "out": 9.83
  },
  {
   "line": "Other revenue (levies)",
   "prog": 15.61,
   "out": 12.27
  },
  {
   "line": "Oil revenue",
   "prog": 9.06,
   "out": 6.29
  },
  {
   "line": "Grants",
   "prog": 1.07,
   "out": 1.05
  }
 ],
 "ministries": [
  {
   "name": "Education",
   "sector": "Education",
   "y2025": 28400,
   "y2026": 33800,
   "y2027": null
  },
  {
   "name": "Health",
   "sector": "Health",
   "y2025": 12700,
   "y2026": 16300,
   "y2027": null
  },
  {
   "name": "Interior",
   "sector": "Security, justice and governance",
   "y2025": 13300,
   "y2026": 12100,
   "y2027": null
  },
  {
   "name": "Defence",
   "sector": "Security, justice and governance",
   "y2025": 6300,
   "y2026": 10700,
   "y2027": null
  },
  {
   "name": "Roads and Highways",
   "sector": "Roads, transport and works",
   "y2025": 2400,
   "y2026": 4400,
   "y2027": null
  },
  {
   "name": "Local Government, Chieftaincy and Religious Affairs",
   "sector": "Local government",
   "y2025": 2900,
   "y2026": 3800,
   "y2027": null
  },
  {
   "name": "Gender, Children and Social Protection",
   "sector": "Social protection and labour",
   "y2025": 2900,
   "y2026": 3200,
   "y2027": null
  },
  {
   "name": "Food and Agriculture",
   "sector": "Agriculture, cocoa and fisheries",
   "y2025": 1600,
   "y2026": 2200,
   "y2027": null
  },
  {
   "name": "Energy and Green Transition",
   "sector": "Energy and petroleum",
   "y2025": 354.0,
   "y2026": 2100,
   "y2027": null
  },
  {
   "name": "Finance",
   "sector": "Revenue and tax measures",
   "y2025": 1100,
   "y2026": 1700,
   "y2027": null
  },
  {
   "name": "Youth Development and Empowerment",
   "sector": "Education",
   "y2025": 626.0,
   "y2026": 1500,
   "y2027": null
  },
  {
   "name": "Foreign Affairs",
   "sector": "Security, justice and governance",
   "y2025": 1200,
   "y2026": 1300,
   "y2027": null
  },
  {
   "name": "Works, Housing and Water Resources",
   "sector": "Roads, transport and works",
   "y2025": 727.1,
   "y2026": 943.3,
   "y2027": null
  },
  {
   "name": "Lands and Natural Resources",
   "sector": "Extractives and environment",
   "y2025": 645.8,
   "y2026": 807.9,
   "y2027": null
  },
  {
   "name": "Sports and Recreation",
   "sector": "Education",
   "y2025": 61.8,
   "y2026": 617.9,
   "y2027": null
  },
  {
   "name": "Environment, Science and Technology",
   "sector": "Extractives and environment",
   "y2025": 575.3,
   "y2026": 583.7,
   "y2027": null
  },
  {
   "name": "Attorney-General and Justice",
   "sector": "Security, justice and governance",
   "y2025": 267.0,
   "y2026": 379.6,
   "y2027": null
  },
  {
   "name": "Trade, Agribusiness and Industry",
   "sector": "Trade, industry and tourism",
   "y2025": 163.6,
   "y2026": 378.6,
   "y2027": null
  },
  {
   "name": "Fisheries and Aquaculture",
   "sector": "Agriculture, cocoa and fisheries",
   "y2025": 140.0,
   "y2026": 333.4,
   "y2027": null
  },
  {
   "name": "Communication, Digital Technology and Innovations",
   "sector": "Digital and communications",
   "y2025": 364.5,
   "y2026": 331.6,
   "y2027": null
  },
  {
   "name": "Tourism, Culture and Creative Arts",
   "sector": "Trade, industry and tourism",
   "y2025": 166.9,
   "y2026": 207.0,
   "y2027": null
  },
  {
   "name": "Transport",
   "sector": "Roads, transport and works",
   "y2025": 192.6,
   "y2026": 151.7,
   "y2027": null
  },
  {
   "name": "Labour, Jobs and Employment",
   "sector": "Social protection and labour",
   "y2025": 95.0,
   "y2026": 90.8,
   "y2027": null
  }
 ],
 "flagships": [
  {
   "name": "Big Push (roads and bridges)",
   "sector": "Roads, transport and works",
   "a2026": 30000,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "Energy sector shortfall payments",
   "sector": "Energy and petroleum",
   "a2026": 15200,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "GETFund",
   "sector": "Education",
   "a2026": 9900,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "NHIS claims",
   "sector": "Health",
   "a2026": 9000,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "District Assemblies Common Fund",
   "sector": "Local government",
   "a2026": 8770,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "Oil palm development",
   "sector": "Agriculture, cocoa and fisheries",
   "a2026": 6900,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "Legacy IPP arrears",
   "sector": "Energy and petroleum",
   "a2026": 4800,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "Free Secondary Education",
   "sector": "Education",
   "a2026": 4200,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "Road Maintenance Trust Fund",
   "sector": "Roads, transport and works",
   "a2026": 3000,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "MahamaCares",
   "sector": "Health",
   "a2026": 2300,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "Rural Electricity Acceleration, phase 1",
   "sector": "Energy and petroleum",
   "a2026": 2000,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "GSLIP (end double-track)",
   "sector": "Education",
   "a2026": 1100,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "Agricultural enclave roads",
   "sector": "Agriculture, cocoa and fisheries",
   "a2026": 828,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "Farmer Service Centres",
   "sector": "Agriculture, cocoa and fisheries",
   "a2026": 690,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "Nkoko Nketenkete",
   "sector": "Agriculture, cocoa and fisheries",
   "a2026": 245,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "24-Hour Economy",
   "sector": "Trade, industry and tourism",
   "a2026": 110,
   "spent2026": null,
   "a2027": null
  },
  {
   "name": "Aquaculture development",
   "sector": "Agriculture, cocoa and fisheries",
   "a2026": 100,
   "spent2026": null,
   "a2027": null
  }
 ],
 "interest_capex": [
  {
   "period": "2025 outturn (proj.)",
   "interest": 51.05,
   "capex": 23.86
  },
  {
   "period": "2026 budget",
   "interest": 57.71,
   "capex": 57.53
  },
  {
   "period": "Jan-Jun 2026",
   "interest": 21.5,
   "capex": 22.18
  },
  {
   "period": "Jan-Jul 2026",
   "interest": 25.17,
   "capex": 24.23
  },
  {
   "period": "2027 (2026 projection)",
   "interest": 58.5,
   "capex": 61.32
  },
  {
   "period": "2027 budget",
   "interest": null,
   "capex": null
  }
 ],
 "sectors": [
  {
   "id": "energy",
   "name": "Energy and petroleum",
   "ministries": [
    "Energy and Green Transition"
   ],
   "questions": [
    "How much of the GH¢15.2bn shortfall and GH¢4.8bn IPP arrears was paid in 2026?",
    "Is there a 2027 energy shortfall line, and how big?",
    "Any change to the Energy Sector Levy, D-Levy or tariffs?",
    "What is said about ECG private participation, the 1,200MW state plant, TOR and the Petroleum Hub?"
   ],
   "brief": null
  },
  {
   "id": "roads",
   "name": "Roads, transport and works",
   "ministries": [
    "Roads and Highways",
    "Transport",
    "Works, Housing and Water Resources"
   ],
   "questions": [
    "How much of the GH¢30bn Big Push was spent, and on which roads?",
    "Are Big Push contracts named, with costs per km?",
    "Does the Road Fund 166-constituency programme continue?",
    "Any Accra-Kumasi expressway funding, and who builds it?"
   ],
   "brief": null
  },
  {
   "id": "education",
   "name": "Education",
   "ministries": [
    "Education",
    "Youth Development and Empowerment",
    "Sports and Recreation"
   ],
   "questions": [
    "Free SHS cost per student, and did the GH¢4.2bn cover supplier arrears?",
    "Did GSLIP end double-track?",
    "GETFund: how much goes to capex vs recurrent?",
    "Any BECE or placement reform?"
   ],
   "brief": null
  },
  {
   "id": "health",
   "name": "Health",
   "ministries": [
    "Health"
   ],
   "questions": [
    "NHIS claims paid vs the GH¢9.0bn allocated, and the NHIF share actually released",
    "MahamaCares funding source and spend",
    "Health worker recruitment and arrears"
   ],
   "brief": null
  },
  {
   "id": "social",
   "name": "Social protection and labour",
   "ministries": [
    "Gender, Children and Social Protection",
    "Labour, Jobs and Employment"
   ],
   "questions": [
    "LEAP and school feeding rates and arrears",
    "Base pay increase for 2027 vs the inflation target",
    "Wage bill as a share of tax revenue"
   ],
   "brief": null
  },
  {
   "id": "agric",
   "name": "Agriculture, cocoa and fisheries",
   "ministries": [
    "Food and Agriculture",
    "Fisheries and Aquaculture"
   ],
   "questions": [
    "Cocobod financing plan and farmgate price policy",
    "Oil palm GH¢6.9bn: what was delivered?",
    "Feed Ghana and farmer service centre outputs"
   ],
   "brief": null
  },
  {
   "id": "extractives",
   "name": "Extractives and environment",
   "ministries": [
    "Lands and Natural Resources",
    "Environment, Science and Technology"
   ],
   "questions": [
    "GoldBod and DGPP: are losses or costs now in the budget?",
    "Mineral royalty regime changes",
    "Galamsey and reclamation funding",
    "Mining lease policy after the Adamus and Konongo revocations"
   ],
   "brief": null
  },
  {
   "id": "trade",
   "name": "Trade, industry and tourism",
   "ministries": [
    "Trade, Agribusiness and Industry",
    "Tourism, Culture and Creative Arts"
   ],
   "questions": [
    "What the 24-Hour Economy actually spent",
    "New business incentives and tax holidays, with their revenue cost"
   ],
   "brief": null
  },
  {
   "id": "digital",
   "name": "Digital and communications",
   "ministries": [
    "Communication, Digital Technology and Innovations"
   ],
   "questions": [
    "One Million Coders delivery",
    "Digital services VAT yield",
    "5G and spectrum receipts"
   ],
   "brief": null
  },
  {
   "id": "security",
   "name": "Security, justice and governance",
   "ministries": [
    "Defence",
    "Interior",
    "Attorney-General and Justice",
    "Foreign Affairs"
   ],
   "questions": [
    "Defence grew 69.8% in 2026: what did it buy?",
    "ORAL recoveries reported vs budgeted",
    "Funding for the Auditor-General, EC and Parliament"
   ],
   "brief": null
  },
  {
   "id": "localgov",
   "name": "Local government",
   "ministries": [
    "Local Government, Chieftaincy and Religious Affairs"
   ],
   "questions": [
    "DACF actually released vs the GH¢8.77bn allocated, and how late",
    "DDF and assembly capex"
   ],
   "brief": null
  },
  {
   "id": "revenue",
   "name": "Revenue and tax measures",
   "ministries": [
    "Finance"
   ],
   "questions": [
    "Every new tax or relief, with its yield estimate",
    "Total tax expenditure",
    "Refund ceiling",
    "Revenue-to-GDP target vs 2026 actuals"
   ],
   "brief": null
  },
  {
   "id": "debt",
   "name": "Debt, financing and arrears",
   "ministries": [],
   "questions": [
    "Interest bill 2027 vs GH¢57.7bn in 2026",
    "Eurobond return or new external issuance",
    "Arrears stock and audit status",
    "Common Framework progress and SOE guarantees"
   ],
   "brief": null
  },
  {
   "id": "macro",
   "name": "Macro-fiscal and New Economy",
   "ministries": [],
   "questions": [
    "Primary balance target vs the 1.5% rule",
    "What the US$10bn New Economy is made of: new money, relabelled lines, or PPP and off-budget",
    "Growth and inflation targets for 2027"
   ],
   "brief": null
  }
 ],
 "sources": [
  {
   "name": "2026 Budget Statement and Economic Policy",
   "url": "https://mofep.gov.gh/sites/default/files/budget-statements/2026-Budget-Statement-and-Economic-Policy.pdf"
  },
  {
   "name": "MoF H1 2026 Fiscal Newsletter",
   "url": "https://mofep.gov.gh/sites/default/files/reports/economic/2026-Q2-Fiscal_Newsletter.pdf"
  },
  {
   "name": "MoF Fiscal Data, Jan-Jul 2026",
   "url": "https://mofep.gov.gh"
  },
  {
   "name": "GhanaFact: 2025 vs 2026 ministry allocations",
   "url": "https://ghanafact.com/factsheet-2025-vs-2026-budgetary-allocations-for-all-23-ministries/"
  },
  {
   "name": "IMF Country Report 26/212",
   "url": "https://www.imf.org/-/media/files/publications/cr/2026/english/1ghaea2026001.pdf"
  }
 ]
};
