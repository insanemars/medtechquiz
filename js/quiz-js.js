let welcomeCard = document.getElementById("welcomecard");
let quizCard = document.getElementById("quizcard");
let quizHeader = document.getElementById("quiz-header");
let yellowPencil = document.getElementById("yellow-pencil");
let redBook = document.querySelector('.book');
let testTube = document.querySelector('.testtube');
let syringe = document.querySelector('.syringe');
let cup = document.querySelector('.cup');

var question = document.getElementById("question");
var letterA = document.getElementById("choiceA");
var letterB = document.getElementById("choiceB");
var letterC = document.getElementById("choiceC");
var letterD = document.getElementById("choiceD");
var letterE = document.getElementById("choiceE");
var quizNumber = document.getElementById("quiznumber");
var quizTotalNumber = document.getElementById("totalquiznumber");

// Questions Array
var questions = [

  // Clinical Chemistry
  {
    q: 'What does proteinuria mean?',
    choices: ['Protein in urine', 'Protein in stool', 'Protein in blood', 'Protein in food', 'None of the above'],
    answer: 0
  },

  {
    q: 'Calcium in the serum is regulated by?',
    choices: ['Albumin', 'Creatinine', 'Parathyroid hormone', 'Thyroid hormone', 'None of the above'],
    answer: 2
  },

  {
    q: "Which of the following would a patient with Cushing's syndrome exhibit?",
    choices: ['Decreased urinary 17-hydroxysteroid excretion', 'Decreased plasma 17-hydroxysteroid concentration', 'Decreased cortisol secretory rate', 'Serum cortisol concentration greater than 15mg/dl', 'All of the above'],
    answer: 3
  },

  {
    q: "Kernicterus is an abnormal accumulation of bilirubin in:",
    choices: ['Brain tissue', 'Heart tissue', 'Kidney tissue', 'Liver tissue', 'None the above'],
    answer: 0
  },

  {
    q: "Glycosylated Hemoglobin or HbA1c levels in the blood reflects the:",
    choices: ['Average blood glucose levels for the past 7 days', 'Average hemoglobin levels for the past 30 days', 'Average blood glucose levels for the past 90-120 days', 'Blood glucose level at the time the sample was drawn', 'Blood glucose levels for the past 24 hours'],
    answer: 2
  },

  {
    q: "Bioavailabilty of a drug refers to:",
    choices: ['Availability for therapeutic administration', 'Availability of the protein bound fraction of the drug', 'Drug transformation', 'The fraction of the drug absorbed into the systemic circulation', 'None of the above'],
    answer: 3
  },

  {
    q: "Which of the following is the Henderson Hasselback equation?",
    choices: ['pKa = pH + log(acid/salt)', 'pKa = pH + log(salt/acid)', 'pH = pKa + log(acid/salt)', 'pH = pKa + log(salt/acid)', 'log = pKa + pH'],
    answer: 2
  },

  {
    q: "A potassium level of 7mEq/L is obtained. What should the medical technologist take into account first before reporting the results?",
    choices: ['Check if serum is lipemic', 'Check if serum is hemolysed', 'Report results at once', 'Run test again', 'Get another sample'],
    answer: 1
  },

  {
    q: "Intrinsic Factor is required in the absorption of which Vitamin?",
    choices: ['Vitamin D', 'Vitamin C', 'Vitamin E', 'Vitamin B12', 'Vitamin B1'],
    answer: 3
  },

  {
    q: "Serum Estriol levels should be steadily increasing in what condition?",
    choices: ['Miscarriage', 'Normal Pregnancy', 'Congenital illness', 'Hemolytic Disease of the Newborn', 'All of the above'],
    answer: 1
  },

  {
    q: "The hallmark finding in familial hypercholesterolemia is the elevation of:",
    choices: ['Apolipoproteins A1', 'High Density Lipoproteins', 'Chylomicrons', 'Low Density Lipoproteins', 'Cholesterol'],
    answer: 3
  },

  {
    q: "Which of the following test/s are performed as part of pre-natal screening?",
    choices: ['Oral Glucose Tolerance Test', 'Lactose Tolerance Test', 'Urinalysis', 'A and C', 'A and B'],
    answer: 3
  },

  {
    q: "A patient arrives in the ER with a temperature of 38C and is complaining of upper abdominal pain radiating to the back, nausea and vomiting. The attending doctor orders for Complete Blood Count, Amylase, Lipase and Upper Abdomen Ultrasound. Based on the requests, the doctor is ruling out most likely what condition?",
    choices: ['Appendicitis', 'Gastritis', 'Acute Pancreatitis', 'Duodenitis', 'Stomach Flu'],
    answer: 2
  },

  {
    q: "If Bilirubin is to Jendrassik Grof Method, Creatinine is to:",
    choices: ['Henderson Hasselbach Equation', 'Jaffe Reaction', 'Sulfosalicylic Acid', 'Glucose Oxidase Method', 'Jendrassik Grof Method also'],
    answer: 1
  },

  {
    q: "Elevated C Reactive Protein is an indication of:",
    choices: ['Inflammation', 'Pneumonia', 'Tuberculosis', 'Hypertension', 'Allergy'],
    answer: 0
  },

  {
    q: "What is the breakdown product of hemoglobin?",
    choices: ['Protoporphyrin', 'Heme', 'Globin', 'Bilirubin', 'Hematoxylin'],
    answer: 3
  },

  {
    q: "Which of the following are diagnostic of Diabetes Mellitus?",
    choices: ['140mg/dl blood glucose following fasting', '90mg/dl blood glucose following fasting', '150mg/dl random blood glucose', '120 mg/dl random blood glucose', 'All of the above'],
    answer: 0
  },

  {
    q: "What is most likely the arterial blood gas of a patient with a blood glucose of 500mg/dl and serum acetone of 4+?",
    choices: ['high pH', 'low pH', 'neutral pH', 'low PO2', 'high PO2'],
    answer: 1
  },

  {
    q: "Scurvy is associated with the deficiency of which vitamin?",
    choices: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D', 'Vitamin E'],
    answer: 2
  },

  {
    q: "Specimen for HbA1c determination should be collected in a vacuum tube containing:",
    choices: ['Sodium Citrate', 'EDTA', 'No preservative', 'Heparin', 'Sodium Oxalate'],
    answer: 1
  },

  {
    q: "An anti epileptic drug used to control seizure disorder:",
    choices: ['Digoxin', 'Acetaminophen', 'Lithium', 'Theophylline', 'Phenytoin'],
    answer: 4
  },

  {
    q: "Which of the following is useful in the detection of prostate cancer:",
    choices: ['Alpha Feto Protein', 'CA 13', 'CEA', 'CA 125', 'Prostate Specific Antigen'],
    answer: 4
  },

  {
    q: "A man goes to the ER complaining of sharp left sided chest pain and shortness of breath. The doctor orders lab tests and the result shows elevated Troponin I, CKMB and Pro BNP. Based on the results, the man is currently having a/an:",
    choices: ['Acute Myocardial Infarction', 'Heart Failure', 'Heartburn', 'Pulmonary Embolism', 'Pneumonia'],
    answer: 0
  },

  {
    q: "A drug used in treatment of heart failure and cardiac arrythmia.",
    choices: ['Digoxin', 'Phenytoin', 'Theophylline', 'Acetaminophen', 'Ibuprofen'],
    answer: 0
  },

  {
    q: "Is a condition wherein carboxyhemoglobin is elevated.",
    choices: ['Sickle Cell Anemia', 'Nitrite Poisoning', 'Lead Toxicity', 'Sulfa Drug Toxicity', 'Carbon Monoxide Poisoning'],
    answer: 4
  },

  {
    q: "Which of the following product is measured in Lactate Dehydrogenase assay?",
    choices: ['ATP', 'Pyruvic acid', 'NADH', 'Lactic acid', 'None of the above'],
    answer: 2
  },

  {
    q: "In performing Serum Protein Electrophoresis, what should be the pH of the buffered solution?",
    choices: ['9.6', '8.6', '7.6', '6.6', '5.6'],
    answer: 1
  },

  {
    q: "Which of the following is not needed in a Chemiluminiscent Immunoassay Analyzer?",
    choices: ['Monochromator', 'Wash station', 'Photodetector', 'Source lamp', 'None of the above'],
    answer: 3
  },

  {
    q: "Which of the following is best used for detecting types of QC errors?",
    choices: ['Tonks-Youden', 'Cusum', 'Levy-Jennings', 'A and B', 'A and C'],
    answer: 2
  },

  {
    q: "Calculate the Coefficient of Variation with the given data: Glucose  Mean - 76 mg/dl  SD - 2.3)",
    choices: ['2.8%', '3.7%', '4.0%', '10%', '3.0%'],
    answer: 4
  },

  // Microbiology / Parasitology
  {
    q: "Which agar is used primarily for the recovery of Staphyloccocus aureus?",
    choices: ['Deoxychocolate Agar (DCA)', 'Xylose Lysine Deoxychocolate Agar (XLD)', 'Colistin Nalidixic Agar (CNA)', 'Cycloserine Cefoxitin Fructose Agar (CCFA)', 'None of the above'],
    answer: 2
  },

  {
    q: "A patient is suspected to be infected with Vibrio cholerae. Which among the selections below is/are the media of choice for recovery of the organism?",
    choices: ['Hektoen Enteric Agar (HEA)', 'Modified Thayer Martin Medium (MTM)', 'Colistin Nalidixic Agar (CNA)', 'Alkaline Peptone Water Broth (APW)/Thiosulfate-Citrate-Bile-Sucrose Agar (TCBS)', 'Blood Agar and Selenite-F Broth (SEL)'],
    answer: 3
  },

  {
    q: "A technologist noticed upon slide review that the Gram stained sputum’s nuclei of the neutrophils present are deeply stained blue. Which among the selections below best explains the reason why?",
    choices: ['The sputum smear was prepared too thin', 'The slide was inadequately decolorized with acetone/alcohol', 'The nuclei was stained as expected', 'The iodine was omitted from the procedure', 'A and B'],
    answer: 1
  },

  {
    q: "The quellung test is used to identify:",
    choices: ['S. pneumoniae', 'S. bovis', 'S. equinus', 'S. agalactiae', 'S. pyogenes'],
    answer: 0
  },

  {
    q: "Viridans Streptococci can be differentiated from Group D Streptococci by:",
    choices: ['CAMP Test', 'Optochin Disk Test', 'Catalase Test', 'Hippurate Hydrolysis Test', 'Bile Esculin Test'],
    answer: 4
  },

  {
    q: "Extracellular and intracellular gram negative diplococci within segmented neutrophils on a gram stained urethral discharge is presumptive identification for:",
    choices: ['Moraxella catarrhalis', 'Neisseria meningitidis', 'Neisseria gonorrhea', 'Neisseria flavescens', 'Neisseria lactamica'],
    answer: 2
  },

  {
    q: "Urinary Tract Infection is most frequently associated with:",
    choices: ['Salmonella', 'Shigella', 'Escherichia coli', 'Staphylococcus aureus', 'Acinetobacter baumanii'],
    answer: 2
  },

  {
    q: "Which test is used to differentiate Staphylococcus aureus from other Staph spp.?",
    choices: ['DNAse Test', 'Coagulase Test', 'Hemolysis', 'Catalase Test', 'Bile Esculin Test'],
    answer: 1
  },

  {
    q: "Which test is used to identify Enterococcus faecalis?",
    choices: ['Salt Tolerance Test', 'Bacitracin Disk Test', 'CAMP Test', 'Oxidase Test', 'None of the above'],
    answer: 0
  },

  {
    q: "A normal flora (gram-negative bacilli) found in the oropharynx.",
    choices: ['Streptococcus pyogenes', 'Bordetella pertussis', 'Moraxella catarrhalis', 'Haemophilus influenzae', 'Legionella pneumophila'],
    answer: 3
  },

  {
    q: "Tumbling motility of Listeria monocytogenes is best demonstrated after growth at what temperature?",
    choices: ['15C', '20C', '25C', '30C', '35C'],
    answer: 2
  },

  {
    q: "Etiologic agent of botulism infection:",
    choices: ['Clostridium perfringes', 'Clostridium botulinum', 'Clostridium tetani', 'Clostridium difficile', 'B and D'],
    answer: 1
  },

  {
    q: "What is the most common cause of peptic ulcer?",
    choices: ['Campylobacter jejuni', 'Escherichia coli', 'Salmonella', 'Helicobacter pylori', 'Shigella'],
    answer: 3
  },

  {
    q: 'A patient consults a doctor with a complaint of patches of itchy, greasy and flaky scalp. The doctor orders a scraping test and the KOH mount slide reveals clusters of yeast cells and long hyphae with an appearance resembling of "spaghetti and meatballs". What is most likely the organism spp. present on the patient’s scalp?',
    choices: ['Malasezzia', 'Candida', 'Propionibacterium', 'Staphylococcus', 'Actinobacteria'],
    answer: 0
  },

  {
    q: "Fungi commonly found in soil and is the cause of major agricultural loss of crops like maize, peanuts, cottonseed and tree nuts.",
    choices: ['Aspergillus niger', 'Aspergillus fumigatus', 'Aspergillus lentulus', 'Aspergillus oryzae', 'Aspergillus flavus'],
    answer: 4
  },

  {
    q: "What is the solution used to decontaminate sputum specimen in order to obtain a viable culture of mycobacteria?",
    choices: ['0.5% NAOH', '1% NAOH', '2% NAOH', '3% NAOH', '4% NAOH'],
    answer: 4
  },

  {
    q: "A diabetic woman goes to her doctor complaining of chest pain and a bad cough that is more than 4 weeks already. The woman also complains of feeling tired all the time. The doctor suspects the woman with Tuberculosis and orders for chest x-ray and sputum culture exam. After a few weeks, colonies on Lowenstein Jensen medium appears with non-pigmented, dry, rough and irregular wrinkled surface. Does this confirm the diagnosis of the doctor?",
    choices: ['True', 'False', 'Maybe', 'I don’t know', 'More test needs to be done'],
    answer: 0
  },

  {
    q: 'Mycobacteria that rarely cause infection in patients with shunts and prosthetic heart valves and is called “tap water bacillus”.',
    choices: ['M. tuberculosis', 'M. kansasii', 'M. xenopi', 'M. gordonae', 'M. avium-intracellulare'],
    answer: 3
  },

  {
    q: 'The causative agent of leprosy which is also called “Hansen’s bacillus”.',
    choices: ['M. szulgai', 'M. tuberculosis', 'M. leprae', 'M. marinum', 'M. Chelonae-fortuitum'],
    answer: 2
  },

  {
    q: "Hodgkin's lymphoma is associated with which type of virus?",
    choices: ['Varicella zoster', 'Cytomegalovirus', 'Epstein-Barr virus', 'Adenovirus', 'Coxsackie virus'],
    answer: 2
  },

  {
    q: "A 65 year old male with hypertension arrives to the ER with sudden shortness of breath. Four days earlier, the patient said that he experienced bad cough, sore throat and fever. The patient has international travel history 14 days prior. Based on the symptoms, does the patient fit the criteria for Covid-19 testing?",
    choices: ['Yes', 'No', 'Maybe', 'I don’t know', 'More test needs to be done'],
    answer: 0
  },

  {
    q: 'A 4 yr. old toddler has fever, sore throat and blister-like lesions around the perioral area. The doctor suspects “Hand, foot and mouth disease”. What is most likely the causative agent of this disease?',
    choices: ['Varicella zoster', 'Herpes zoster', 'Coxsackie virus A', 'Coxsackie virus B', 'C and D'],
    answer: 2
  },


  {
    q: "Major route of transmission of Human Immunodeficiency Virus:",
    choices: ['Saliva', 'Sexual contact', 'Sharing of needle/syringe', 'Sweat', 'B and C'],
    answer: 4
  },

  {
    q: "A man who had just traveled began experiencing diarrhea, abdominal cramps and gas.  On slide review of the stool sample, ovoid shaped cysts ranging from 8 to 12 um in length with two identical nuclei are seen. What is most likely the parasite present in the patient’s stool?",
    choices: ['Giardia lamblia', 'Entamoeba coli', 'Entamoeba histolytica', 'Ascaris lumbricoides', 'Endolimax nana'],
    answer: 0
  },

  {
    q: "Method used to detect Enterobius vermicularis infection:",
    choices: ['Acid-ether concentration', 'Formalin-ether concentration', 'Zinc sulfate flotation', 'Scotch tape method', 'None of the above'],
    answer: 3
  },

  {
    q: "Dengue virus fever is a vector borne disease transmitted by which type of mosquitoes:",
    choices: ['Mansonia', 'Aedes', 'Anopheles', 'Culex', 'None of the above'],
    answer: 1
  },

  {
    q: "Type of microscopy used to view spirochetes:",
    choices: ['Phase contrast microscopy', 'Brightfield microscopy', 'Darkfield microscopy', 'Polarization microscopy', 'A and B'],
    answer: 2
  },

  {
    q: "A woman went on a two week long African Safari adventure for vacation. A week after returning home, she developed chills, high fever, malaise and headache. The doctor orders for CBC and chest x-ray to check for infection. Aside from the tests ordered, which of the following test below should the doctor also consider?",
    choices: ['Malaria smear exam', 'Blood Chemistry exam', 'Blood Culture test', 'Sputum test', 'Urinalysis'],
    answer: 0
  },

  {
    q: "A woman goes to the doctor complaining of grayish frothy vaginal discharge accompanied with itching and burning. The doctor orders for vaginal fluid exam. Upon review of the slide, the technologist noted a couple of motile, pear-shaped, flagellated organism. What is the organism present in the woman’s body fluid?",
    choices: ['Gardnerella vaginalis', 'Chlamydia', 'Neiserria gonorrhea', 'Trichomonas vaginalis', 'Herpes simplex virus'],
    answer: 3
  },

  {
    q: 'Common cause of “athlete’s foot”?',
    choices: ['Trichophyton mentagrophytes', 'Trichophyton rubrum', 'Epidermophyton floccosum', 'Candida albicans', 'None of the above'],
    answer: 0
  },

  // Hematology

  {
    q: "In a normal healthy adult, the spleen serves as a:",
    choices: ['Production site of RBCs', 'Synthesize Erythropoeitin', 'Reservoir of plalelets', 'Removal of old and senescent cells', 'C and D'],
    answer: 4
  },

  {
    q: "What is the function of the hormone EPO?",
    choices: ['Stimulates production of granulocytes', 'Stimulates production of erythrocytes', 'Stimulates production of thrombocytes', 'Stimulates production of osteocytes', 'A and B'],
    answer: 1
  },

  {
    q: "A patient with Chronic Renal Failure is expected to have a low red blood cell count due to:",
    choices: ['Internal bleeding', 'Hemorrhage', 'Decreased EPO production', 'Increased EPO production', 'Vitamin B12 Deficiency'],
    answer: 2
  },

  {
    q: "Stain/dye used to view reticulocytes.",
    choices: ['Prussian blue', 'Peroxidase', 'Sudan Black B', 'New methylene blue', 'Periodic Acid Schiff'],
    answer: 3
  },

  {
    q: "Hyposegmented granulocytes is associated with what disease?",
    choices: ['Gaucher disease', 'May-Hegglin anomaly', 'Alder-Reilly anomaly', 'Pelger-Huet anomaly', 'Chediak-Higashi syndrome'],
    answer: 3
  },

  {
    q: "With the given values, calculate the mean corpuscular volume (MCV):  RBC - 4.5 x 10^6/ul, Hgb - 10 g/dl, Hct - 40%",
    choices: ['80 fL', '85 fL', '88 fL', '90 fL', '92 fL'],
    answer: 2
  },

  {
    q: "Osmotic fragility is the confirmatory test for:",
    choices: ['Hereditary spherocytosis', 'Hereditary elliptocytosis', 'Hereditary ovalocytosis', 'Hereditary stomatocytosis', 'Hereditary xerocytosis'],
    answer: 0
  },

  {
    q: "The type of polycythemia seen in burn patients.",
    choices: ['Polycythemia vera', 'Relative polycythemia due to dehydration', 'Polycythemia secondary to lung disease', 'Polycythemia secondary to heart disease', 'None of the above'],
    answer: 1
  },

  {
    q: 'The most severe form of alpha thalassemia that causes "hydrops faetalis".',
    choices: ['Hb Bart', 'Hgb H', 'Hgb Constant Spring', 'Silent carrier', 'Trait'],
    answer: 0
  },

  {
    q: "All of the following are conditions that lead to low Erythrocyte Sedimentation Rate (ESR) except:",
    choices: ['Sickle cell anemia', 'Congestive Heart Failure', 'Rheumatoid Arthritis', 'Leukocytosis', 'Liver disease'],
    answer: 2
  },

  {
    q: "Blood cell that provides major defense against invading bacteria and viruses",
    choices: ['Red blood cells', 'White blood cells', 'Platelets', 'A and B', 'A and C'],
    answer: 1
  },

  {
    q: "Type of white blood cell linked to allergies:",
    choices: ['Neutrophil', 'Lymphocyte', 'Monocyte', 'Eosinophil', 'Basophil'],
    answer: 3
  },

  {
    q: "Stain/dye that has high affinity to fats:",
    choices: ['Periodic-acid Schiff (PAS)', 'Prussian blue', 'Sudan Black B', 'Peroxidase', 'Leukocyte Alkaline Phosphatase'],
    answer: 2
  },

  {
    q: "Philadelphia chromosome is associated with what type of Leukemia?",
    choices: ['Acute Myelocytic Leukemia', 'Acute Myelogenous Leukemia', 'Erythroleukemia', 'Chronic Lymphocytic Leukemia', 'Chronic Myelomonocytic Leukemia'],
    answer: 4
  },

  {
    q: "Given the following data, calculate the absolute lymphocyte count:  WBC – 6.5 x 10^9/ul   Differential (Segmenters – 50% Lymphocytes – 38% Monocytes – 6% Eosinophil – 5% Basophil – 1%)",
    choices: ['3.25 x 10^9/ul', '2.47 x 10^9/ul', '0.39 x 10^9/ul', '0.325 x 10^9/ul', '0.065 x 10^9/ul'],
    answer: 1
  },

  {
    q: "All of the following are WBC abnormalities except for:",
    choices: ['Pelger-Huet', 'Alder-Reilly', 'Kawasaki', 'Chediak-Higashi', 'Gaucher'],
    answer: 2
  },

  {
    q: "Leukemoid reaction is often seen in severe infection ex. Sepsis.",
    choices: ['True', 'False', 'Maybe', 'I don’t know', 'Possible'],
    answer: 0
  },

  {
    q: "The life span of platelets is approximately:",
    choices: ['3 days', '5 days', '7 days', '15 days', '30 days'],
    answer: 2
  },

  {
    q: "All of the following are platelet disorders except:",
    choices: ['Bernard Soulier Syndrome', 'Glanzmann’s thrombasthenia', 'Jacobsen Syndrome', 'Niemann-Pick Disease', 'Hermansky Pudlak Syndrome'],
    answer: 3
  },

  {
    q: "Which of the following values below would fall under normal platelet count?",
    choices: ['50 x 10^9/L', '100 x 10^9/L', '130 x 10^9/L', '250 x 10^9/L', '600 x 10^9/L'],
    answer: 3
  },

  {
    q: "Glanzmann’s thrombasthenia is a platelet disorder caused by lack of which protein:",
    choices: ['glycoprotein Ib', 'glycoprotein IIb', 'glycoprotein Ia/IIa', 'glycoprotein VI', 'glycoprotein V'],
    answer: 1
  },

  {
    q: "Which of the following factor is Vitamin-K dependent?",
    choices: ['II', 'V', 'VIII', 'XI', 'XII'],
    answer: 0
  },

  {
    q: "Factor/s involved in intrinsic coagulation pathway except:",
    choices: ['I', 'II', 'VII', 'IX', 'X'],
    answer: 2
  },

  {
    q: "The Prothrombin time tests for the:",
    choices: ['Extrinsic Pathway', 'Intrinsic Pathway', 'Platelet function', 'Platelet count', 'Clotting regulators'],
    answer: 0
  },

  {
    q: "What is heparin’s mechanism of action?",
    choices: ['Activate plasmin', 'Inhibit thrombin', 'Blocks thromboxane A2', 'Inhibit Vitamin K', 'Inhibit binding of ADP'],
    answer: 1
  },

  {
    q: "What is the color of the top tube used for routine coagulation studies?",
    choices: ['Lavender', 'Light blue', 'Red', 'Yellow', 'Green'],
    answer: 1
  },

  {
    q: "The result of the patient’s platelet on the hematology analyzer is 50 x 10^3/ul. What should be the technologist’s next step?",
    choices: ['Withdraw new sample', 'Report results at once', 'Check the sample under the slide', 'Discard the sample', 'Perform QC test'],
    answer: 2
  },

  {
    q: "All of the following principle applies to automated cell counters except:",
    choices: ['Electrical Impedance', 'Light scatter', 'Fluorescence', 'Mechanical ball', 'A, B and C'],
    answer: 3
  },

  {
    q: "The test used to aid in diagnosis of Factor XIII deficiency.",
    choices: ['Mixing studies', 'Activated Partial Thromboplastin Time', 'Prolonged Prothrombin Time', 'Prolonged Thrombin Time', '5M Urea Clot Solubility'],
    answer: 4
  },

  {
    q: "A lipemic sample would cause interference on most cell counters. What parameter/s would most likely be affected?",
    choices: ['RBC count', 'Hgb count', 'Hct count', 'MCV', 'WBC count'],
    answer: 1
  },

  //Clinical Microscopy

  {
    q: "A highly acidic urine may cause nitrite test results to be?",
    choices: ['False positive', 'False negative', 'Normal', 'Erroneous', "I don't know"],
    answer: 1
  },

  {
    q: "Which of the following statement is not true about microalbuminuria testing?",
    choices: ['Recommended for persons who are at risk for chronic renal disease', 'Recommended for persons with diabetes mellitus', 'It is not a sensitive test', 'It is an assay that measures urine albumin concentration thats has an increased sensitivity', 'Random urine sample is the specimen of choice'],
    answer: 2
  },

  {
    q: "Apart from diabetes mellitus, glycosuria may appear on the following conditions except:",
    choices: ['Endocrine diseases', 'Pregnancy', "Cushing's disease", 'Myocardial Infarction', 'Fanconi syndrome'],
    answer: 3
  },

  {
    q: "Which is the only form of bilirubin that is excreted in the urine?",
    choices: ['Conjugated Bilirubin', 'Unconjugated Bilirubin', 'Total Bilirubin', 'Indirect Bilirubin', 'None of the above'],
    answer: 0
  },

  {
    q: "Detection of Bence Jones protein in the urine is suggestive of:",
    choices: ['Lung disease', 'Heart failure', 'Multiple Myeloma', "Addison's disease", 'Infection'],
    answer: 2
  },

  {
    q: "Which type of WBC is majorly seen in the urinary sediment?",
    choices: ['Eosinophil', 'Basophil', 'Lymphocytes', 'PMNs (polymorphonuclear cells)', 'Monocytes'],
    answer: 3
  },

  {
    q: "Hyaline casts are composed of which specific type of protein:",
    choices: ['Bence Jones protein', 'Immunoglobulins', 'Albumin', 'Tamm-Horsfall protein', 'Regulatory proteins'],
    answer: 3
  },

  {
    q: "Amorphous urates are yellow or reddish-brown granules that form in acid or neutral urine. They can be dissolved using which substance:",
    choices: ['Warm saline', 'Dilute NaOH', 'A and B', 'A only', 'None of the above'],
    answer: 2
  },

  {
    q: "Amorphous phosphates are colorless and form in alkaline or neutral urine. They can be dissolved using which substance:",
    choices: ['Warm saline', 'Dilute acetic acid', 'A and B', 'A only', 'None of the above'],
    answer: 1
  },

  {
    q: "Tyrosine crystals, when seen together with leucine crystals, is indicative of which condition:",
    choices: ['Chronic liver disease', 'Cirrhosis of liver', 'Tyrosinemia', 'Diabetes Mellitus', 'A and B'],
    answer: 4
  },

  {
    q: '"Thornapple crystal" is also referred to as:',
    choices: ['Amorphous urate', 'Ammonium biurate', 'Amorphous phosphate', 'Calcium carbonate', 'None of the above'],
    answer: 1
  },

  {
    q: 'Urinary crystals which are "coffin lid" in appearance are called:',
    choices: ['Ammonium biurate', 'Tyrosine crystals', 'Cystine crystals', 'Triple phosphate crystals', 'None of the above'],
    answer: 3
  },

  {
    q: "Calcium oxalate and calcium phosphate accounts for about 3/4 of renal stones.",
    choices: ['True', 'False', 'Neither', "I don't know", 'Possible'],
    answer: 0
  },

  {
    q: "Renal stones that are composed of magnesium ammonium phosphate are called:",
    choices: ['Struvite', 'Whewellite and Weddellite kidney stones', 'Uric acid stones', 'A and B', 'None of the above'],
    answer: 3
  },

  {
    q: "Which of the following are/is the common cause/s of glomerulonephritis?",
    choices: ['Diabetes Mellitus', 'Autoimmune diseases', 'Nephrotoxic drugs', 'Infections', 'All of the above'],
    answer: 4
  },

  {
    q: "What is the normal volume of CSF in adults?",
    choices: ['50-100 ml', '100-160 ml', '10-50 ml', '20-40 ml', '5-10 ml'],
    answer: 1
  },

  {
    q: "Increased WBCs in the CSF is called:",
    choices: ['Leukocytosis', 'Pleocytosis', 'Neutrophilia', 'Emphyema', 'Pyuria'],
    answer: 1
  },

  {
    q: "The presence of oligoclonal bands by electrophoresis in the CSF is characteristic of which condition?",
    choices: ['Multiple Myeloma', 'Multiple Sclerosis', "Hodgkin's Lymphoma", 'Cryptococcal Meningitis', 'Systemic Lupus'],
    answer: 1
  },

  {
    q: "Which organism frequently causes bacterial meningitis in neonates?",
    choices: ['Klebsiella pneumoniae', 'Neisseria meningitidis', 'Group B Streptococcus', 'Haemophilus influenzae', 'None of the above'],
    answer: 2
  },

  {
    q: "Increased volume of serous fluid is called:",
    choices: ['Transudate', 'Exudate', 'Effusion', 'Chylous', 'Edema'],
    answer: 2
  },

  {
    q: '"Ragocyte" cells are seen in:',
    choices: ['CSF', 'Synovial Fluid', 'Pleural Fluid', 'Pericardial Fluid', 'Urine'],
    answer: 1
  },

  {
    q: "The appearance of calcium pyrophosphate crystals is indicative of:",
    choices: ['Gout', 'Pseudogout', 'A and B', 'Chronic Arthritis', 'None of the above'],
    answer: 1
  },

  {
    q: "The reference method for determining fetal lung maturity:",
    choices: ['Urinary estriol', 'Human placental lactogen', 'L/S ratio', 'Amniotic fluid bilirubin', 'B and C'],
    answer: 2
  },

  {
    q: "When a seminal fluid contains no sperm, it is termed as:",
    choices: ['Necrozoospermia', 'Azoospermia', 'Microcephaly', 'Acrosomal deficiency', 'Oligospermia'],
    answer: 1
  },

  {
    q: "What is the normal volume of seminal fluid?",
    choices: ['0.5-1.0 ml', '1.0-1.5 ml', '1.5-5.0 ml', '1.0-2.0 ml', '2.0–2.5 ml'],
    answer: 2
  },

  {
    q: "Which carbohydrate is primarily present in seminal fluid?",
    choices: ['Glucose', 'Galactose', 'Fructose', 'Maltose', 'Lactose'],
    answer: 2
  },

  {
    q: "Port wine color of urine is associated with the presence of:",
    choices: ['Porphyrins', 'Myoglobin', 'Hemoglobin', 'Bilirubin', 'Neuroglobin'],
    answer: 0
  },

  {
    q: "Greiss reaction is the principle behind which test?",
    choices: ['Nitrite', 'Leukocyte Esterase', 'Urobilinogen', 'Bilirubin', 'Creatinine'],
    answer: 0
  },

  {
    q: 'Under polarized light, this cellular element appears as "maltese crosses":',
    choices: ['Renal tubular epithelial cell', 'Oval fat body', 'Calcium phosphate', 'Calcium carbonate', 'Calcium oxalate'],
    answer: 1
  },

  {
    q: "Fluid in the abdominal cavity is called:",
    choices: ['Peritoneal fluid', 'Pleural fluid', 'Pericardial fluid', 'Cerebrospinal fluid', 'None of the above'],
    answer: 0
  },

  // Immunology and Serology

  {
    q: "Primary lymphoid organ/s in which production and maturation of immunocompetent cells takes place",
    choices: ['Lymph nodes', 'Tonsils', 'Spleen', 'Bowel lymphatic tissue', 'Bone marrow and Thymus'],
    answer: 4
  },

  {
    q: "The process by which phagocytes move towards the attractant",
    choices: ['Chemotaxis', 'Diapedesis', 'Amoeboid', 'Phaygocytosis', 'None of the above'],
    answer: 0
  },

  {
    q: "What is the region on the antibody that binds to the antigen?",
    choices: ['Ch', 'Cl', 'Fragment antigen binding', 'Fc', 'None of the above'],
    answer: 2
  },

  {
    q: "Immunoglobulin that can cross the placenta:",
    choices: ['IgM', 'IgG', 'IgA', 'IgD', 'IgE'],
    answer: 1
  },

  {
    q: "Immunoglobulin involved the in primary immune response",
    choices: ['IgM', 'IgG', 'IgA', 'IgD', 'IgE'],
    answer: 0
  },

  {
    q: 'Which best describes "avidity"?',
    choices: ['Strength of antibody-antigen interaction', 'Over all strength of antigen binding with antibody and other determinants', 'The capability of an antibody to bind with an antigen', 'The ability of an antibody to recognize antigens', 'Reaction of an antibody to an antigen'],
    answer: 1
  },

  {
    q: "Waiting too long to read the plate after adding the stop solution in Elisa test may result to:",
    choices: ['Falsely increased results', 'Falsely decreased results', 'No effect on result', 'B and C', 'Either A or B'],
    answer: 4
  },

  {
    q: "What is the corrective action when the result of a sample tested in Elisa is higher than the highest standard concentration?",
    choices: ['Repeat assay', 'Withdraw new sample', 'Dilution of sample', 'Prepare new standard', 'None, just report the results'],
    answer: 2
  },

  {
    q: "In precipitation reaction method, antibody excess is called",
    choices: ['Prozone reaction', 'Postzone reaction', 'Zone of equivalence', 'Affinity', 'Avidity'],
    answer: 0
  },

  {
    q: "What is the difference of Indirect Fluorescence Assay to Direct Fluorescence Assay?",
    choices: ['Use of a primary antibody', 'Use of a secondary antibody', 'Use of a dye', 'Use of substrate', 'Use of chemical probes'],
    answer: 1
  },

  {
    q: "Screening test/s used for HIV infection",
    choices: ['Rapid Antibody Test', 'Western Blot', 'Elisa Test', 'Indirect Fluorescent Antibody', 'A and C'],
    answer: 4
  },

  {
    q: "What is the ratio of Thelper cells to Tsuppressor cells of a patient with AIDS?",
    choices: ['2:1', '3:1', '1:2', '3:2', '1:0'],
    answer: 2
  },

  {
    q: "What is the mode of transmission of Hepatitis A?",
    choices: ['Fecal-oral route', 'Sexual contact', 'Blood products', 'Respiratory Droplets', 'Vector borne'],
    answer: 0
  },

  {
    q: "What is the marker for Hepatitis B infection?",
    choices: ['Anti-HBs', 'HBeAg', 'Anti-HBc', 'HBsAg', 'Anti-HBe'],
    answer: 3
  },

  {
    q: "What is the confirmatory test for Covid-19 infection?",
    choices: ['Lateral Flow Test', 'Polymerase Chain Reaction', 'Elisa Test', 'Latex Agglutination Assay', 'Radioimmunoassay'],
    answer: 1
  },

  {
    q: "Anti TPO is seen in what disease/s?",
    choices: ['Rheumatoid arthritis', "Hashimoto and Grave's disease", "Addison's disease", 'Autoimmune orchitis', 'Lymphocytic hypophysitis'],
    answer: 1
  },

  {
    q: "Which statement best defines Direct Antiglobulin Test?",
    choices: ['detects antibodies with the use of an enzyme and substrate', "detects antibodies in patient serum", 'detects antibodies attached to RBCs', 'detects antibodies with the use of dye', 'None of the above'],
    answer: 2
  },

  {
    q: "What is the test used to detect specific IgE antibodies?",
    choices: ['Rapid test kit', 'Hemmaglutination test', 'Direct Immunofluorescence', 'Indirect Immunofluorescence', 'Radioallergosorbent Test (RAST)'],
    answer: 4
  },

  {
    q: "Why is skin test used more often as a method to test for allergies?",
    choices: ['It is more economical', 'It is the only allergy test available', 'It has greater sensitivity', 'A and B', 'None of the above'],
    answer: 2
  },

  {
    q: "Secondary hypogammaglobulinemia may be due to all of the following except",
    choices: ['Systemic disorders', 'Malignancy', 'Drug induced', 'Infectious disease', 'Common variable immunodeficiency'],
    answer: 4
  },

  {
    q: "Elevated HCG test on the serum of a man may indicate:",
    choices: ['Colorectal cancer', 'Liver cancer', 'Thyroid cancer', 'Testicular cancer', 'None, men do not produce HCG'],
    answer: 3
  },

  {
    q: "Test used to differentiate RA from Septic arthritis and gout?",
    choices: ['Rheumatoid Factor', 'ANA test', 'Synovial fluid analysis', 'Complement test', 'None of the above'],
    answer: 2
  },

  {
    q: "A man tests positive for RPR and FTA-Abs test but is asymptomatic. What is most likely the reason for this?",
    choices: ['Patient is currently in the primary stage of Syphilis infection', 'Patient is currently in the secondary stage of Syphilis infection', 'Patient is currently in the latent stage of Syphilis infection', 'Patient is currently in the late stage of Syphilis infection', 'Patient is already cured of infection'],
    answer: 2
  },

  {
    q: "What is most likely the Hepatitis B profile serologic results of a patient who received a vaccine?",
    choices: ['(-) HBsAg, (-) Anti-HBs, (-) Anti-HBc', '(-) HBsAg, (+) Anti-HBs, (+) Anti-HBc', '(+) HBsAg, (-) Anti-HBs, (-) Anti-HBc', '(-) HBsAg, (-) Anti-HBs, (+) Anti-HBc', 'C and D'],
    answer: 1
  },

  {
    q: "What is the gene that greatly increases the risk for Ankylosing Spondylitis?",
    choices: ['HLA A11', 'HLA B27', 'HLA C12:02', 'HLA DR2', 'HLA E'],
    answer: 1
  },

  {
    q: "HLA DR2 is frequently associated with:",
    choices: ['Narcolepsy', 'Systemic Lupus', 'Good Pasture Syndrome', 'Multiple Sclerosis', 'All of the above'],
    answer: 4
  },

  {
    q: "The binding of antigen-antibody complexes to the C1q protein initiates which complement pathway?",
    choices: ['Classical Pathway', 'Alternative Pathway', 'Lectin Pathway', 'A and B', 'None of the above'],
    answer: 0
  },

  {
    q: "Development of wheal and flare reaction is indicative of:",
    choices: ['Delayed hypersensitivity', 'Immediate hypersensitivity', 'Anaphylactic reaction', 'A and B', 'None of the above'],
    answer: 1
  },

  {
    q: "A rare X-linked disorder characterized by abnormal immune function, low platelet count and eczema.",
    choices: ['Di George syndrome', 'Common Variable Immunodeficiency', "Omenn's syndrome", 'Wiskott-Aldrich syndrome', 'Ataxia-telangiectasa'],
    answer: 3
  },

  {
    q: "What is the type of immunity that is passed on from a mother to her baby?",
    choices: ['Active Natural Immunity', 'Active Artificial Immunity', 'Passive Natural Immunity', 'Passive Artificial Immunity', 'Autoimmunity'],
    answer: 2
  },

  {
    q: "Bombay phenotype has which of the following phenotype?",
    choices: ['HH only', 'HH and Hh', 'Hh and hh', 'hh only ', 'None of the above'],
    answer: 3
  },

  {
    q: "An AO and BO mating can give rise to which Blood type?",
    choices: ['AB', 'A', 'B', 'O', 'All are possible'],
    answer: 4
  },

  {
    q: "Which enhancement medium decreases zeta potential, allowing antigen and antibody to come closer together?",
    choices: ['LISS', 'Polyethylene glycol', 'Polybrene', 'ZZAP', 'None of the above'],
    answer: 0
  },

  {
    q: "Rabbit polyspecific antihuman globulin reagent contains:",
    choices: ['Anti-IgG and anti-C3a', 'Anti-IgG and anti-C3d', 'Anti-IgG and anti-IgM', 'All of the above', 'None of the above'],
    answer: 1
  },

  {
    q: "Which antigen does a Bombay phenotype individual express?",
    choices: ['A antigen', 'B antigen', 'H antigen', 'No antigen', 'None of the above'],
    answer: 3
  },

  {
    q: "Which lectin will Anti-A1 react with?",
    choices: ['Arachis hypogaea', 'Salvia sclarea', 'Dolichos biflorus', 'Ulex europaeus', 'Vicia cretica'],
    answer: 2
  },

  {
    q: "Which of the following results is most likely discrepant? Anti-A = neg., A1 cells = neg., Anti-B = 4+, B cells = neg.",
    choices: ['Negative B cells', 'Negative A1 cells', 'Positive reaction with Anti-B', 'B and C', 'No problem with this typing'],
    answer: 1
  },

  {
    q: "An individual with Dce/dce genotype is classified as:",
    choices: ['Rh positive', 'Rh negative', 'Rh null', 'Total Rh', 'No classification'],
    answer: 0
  },

  {
    q: " A physician orders Apheresis platelet for an emergency bleeding patient with Group O typing. The last Group O apheresis platelet in the inventory has just been issued to a bleeding patient in OR. What next blood group apheresis platelet may be given to the patient? ",
    choices: ['Group A', 'Group B', 'Group AB', 'All of the above', 'None. Platelets should be type specific.'],
    answer: 3
  },

  {
    q: "Genotype ---/--- represents which in the Rh system? ",
    choices: ['Rh negative', 'D mosaic', 'Rh null', 'Total Rh', 'No classification'],
    answer: 2
  },

  {
    q: "The group of antibodies that are commonly found as cold agglutinins are:",
    choices: ['Anti-K, anti-k, anti-Jsb', 'Anti-M and anti-N', 'Anti-Fya and anti-Fyb', 'Anti-D, anti-e, anti-c', 'Anti-S and anti-s'],
    answer: 1
  },

  {
    q: "Up to how many days upon date of collection can a sample be used for crossmatching?",
    choices: ['2 days', '3 days', 'A new sample should be used for every crossmatching', '5 days', '7 days'],
    answer: 1
  },

  {
    q: "What type/types of red cells is/are acceptable to transfuse to an O-negative patient?",
    choices: ['O negative', 'A negative, B negative, AB negative, O negative', 'A negative, B negative, AB negative', 'AB negative', 'Any blood type'],
    answer: 0
  },

  {
    q: "How do you resolve a roleaux that causes positive test results?",
    choices: ['Perform elution', 'Perform autoadsorption', 'Run a panel', 'Perform a saline replacement technique', 'Invert the blood collection tube 8-10x'],
    answer: 3
  },

  {
    q: "Is there a crossmatching protocol for transfusion of platelet or plasma?",
    choices: ['Yes, perform a reverse typing on donor plasma', 'Yes, perform reverse typing on recipient plasma', 'A and B', 'No testing is required', 'Maybe'],
    answer: 3
  }

];

var totalQuestions = questions.length;
var totalQuizquestions = 10;
var currentQuestion = 0;
var questionIndex = 0;
var score = 0;
var dateAndtime = document.getElementById("dateandtime");
var showDateandtime = new Date();


//Start Quiz

startQuiz = () => {

  welcomeCard.style.display = 'none';
  yellowPencil.style.display = 'none';
  redBook.style.display = 'none';
  testTube.style.display = 'none';
  syringe.style.display = 'none';
  cup.style.display = 'none';
  quizCard.style.display = 'block';
  quizCard.style.animation = 'none';
  quizHeader.style.display = 'block';

  load();
}



//Page Load
function load() {
  if (currentQuestion != totalQuizquestions) {
    /*dateAndtime.innerHTML = showDateandtime.toString();*/
    question.innerHTML = questions[questionIndex].q;
    letterA.innerHTML = questions[questionIndex].choices[0];
    letterB.innerHTML = questions[questionIndex].choices[1];
    letterC.innerHTML = questions[questionIndex].choices[2];
    letterD.innerHTML = questions[questionIndex].choices[3];
    letterE.innerHTML = questions[questionIndex].choices[4];
    quizNumber.innerHTML = currentQuestion + 1;
    quizTotalNumber.innerHTML = totalQuizquestions;
    questionIndex++;
    currentQuestion++;
 
    //window.alert(currentQuestion++)
  } else if (currentQuestion == totalQuizquestions) {
    document.getElementById("finishquiz").style.display = 'block';
    quizCard.style.display = 'none';
    quizHeader.style.display = 'none';
    yellowPencil.style.display = 'none';

  }
}

//Check Answer

function checkAns() {
  var chosenAnswers = document.getElementsByName("answer");
  for (var i = 0; i < chosenAnswers.length; i++) {
    if (chosenAnswers[i].checked) {
      chosenAnswer = document.getElementsByName("answer")[i].value;
    }
  }

  if (chosenAnswer == questions[currentQuestion - 1].answer) {
    score++;
  } else if (chosenAnswer != questions[currentQuestion - 1].answer) {
    score;
  }
}

//Reset/Clear Radio Buttons
function clearButtons() {
  var buttons = document.getElementsByName("answer");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].checked = false;
  }
}


//Next Question

function nextQues() {
  var answerA = document.getElementById("letterA");
  var answerB = document.getElementById("letterB");
  var answerC = document.getElementById("letterC");
  var answerD = document.getElementById("letterD");
  var answerE = document.getElementById("letterE");

  if (answerA.checked == false &&
    answerB.checked == false &&
    answerC.checked == false &&
    answerD.checked == false &&
    answerE.checked == false) {
    selectAnswer.style.display = 'block';
  } else if (answerA.checked == true ||
    answerB.checked == true ||
    answerC.checked == true ||
    answerD.checked == true ||
    answerE.checked == true) {
    checkAns();
    load();
    clearButtons();
  }
}


//Shuffling Questions (Fisher-Yates Model)
function randomQuestion() {
  var i, j, k;

  for (i = totalQuestions - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = questions[i]
    questions[i] = questions[j]
    questions[j] = k
  }
}

window.onload = function () {
  randomQuestion();
}

// Close/Exit Quiz Pop up Box
var exit = document.getElementById("exit");

function closeWindow() {
  exit.style.display = 'block';
}

// Close/Exit Quiz Options
var yes = document.getElementById("yes");
var no = document.getElementById("no");

yes.onclick = function () {
  window.close();
}

no.onclick = function () {
  exit.style.display = 'none';
}


// Close Answer Dialog Box
var selectAnswer = document.getElementById("selectanswer");

function hidedialog() {
  selectAnswer.style.display = 'none';
}


function showScore() {
  var myScore = document.getElementById("userscore");
  var scoreContainer = document.getElementById("myscore");
  var note = document.getElementById("showscorenote");

  scoreContainer.style.display = 'block';
  myScore.innerHTML = score;


  if (score >= 7) {
    note.innerHTML = "Congratulations! You did well.";
    document.getElementById("medal").style.display = 'inline';
    document.getElementById("medal").style.left = '50%';
  } else if (score < 7) {
    note.innerHTML = "Aww..Need more practice.";
    document.getElementById("sadface").style.display = 'inline';
    document.getElementById("sadface").style.left = '50%';
  }
}

// Exit  Quiz
var exitQuiz = document.getElementById("exitquiz");

exitQuiz.onclick = function () {
  window.close();
}


    
