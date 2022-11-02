var canvas = document.getElementById("viewport");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
let seperator = 0;

var rgbArray = [
    '#348888',
    '#22BABB',
    '#9EF8EE',
    '#FA7F08',
    '#F24405'
  ]
  
  var rgbaArray = [
    '#34888833',
    '#22BABB33',
    '#9EF8EE33',
    '#FA7F0833',
    '#F2440533'
  ]
  
  
  var branch = {
    nodes:{
       people:{
         "label":"people", 
         "color":"green",
         "fixed": true,
         "pos": {"x":Math.floor(window.innerWidth * 0.2), "y": Math.floor(window.innerHeight * 0.5)},
         "columns":[
           "person_id",
         ]
       },
       person_addresses:{
         "label":"person_addresses", 
         "color":"orange",
         "fixed": false, 
         "pos": {"x":Math.floor(window.innerWidth * 0.06), "y": Math.floor(window.innerHeight * 0.4)},
         "columns":[
           "person_id",
         ]
       },
       person_names:{
         "label":"person_names", 
         "color":"orange",
         "fixed": false,  
         "pos": {"x":Math.floor(window.innerWidth * 0.06), "y": Math.floor(window.innerHeight * 0.85)},
         "columns":[
           "person_id",
         ]
       },
       person_types:{
        "label":"person_types", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.06), "y": Math.floor(window.innerHeight * 0.7)},
        "columns":[
            "person_type_id"
        ]
      },
      person_has_type:{
        "label":"person_has_type", 
        "color":"orange",
        "fixed": false,  
        "pos": {"x":Math.floor(window.innerWidth * 0.06), "y": Math.floor(window.innerHeight * 0.55)},
        "columns":[
          "person_id",
          "person_type_id"
        ]
      },
      de_identified_identifiers:{
        "label":"de_identified_identifiers", 
        "color":"orange",
        "fixed": false,  
        "pos": {"x":Math.floor(window.innerWidth * 0.06), "y": Math.floor(window.innerHeight * 0.25)},
        "columns":[
          "person_id",
        ]
      },
      identifiers:{
        "label":"identifiers", 
        "color":"orange",
        "fixed": false,  
        "pos": {"x":Math.floor(window.innerWidth * 0.06), "y": Math.floor(window.innerHeight * 0.1)},
        "columns":[
          "person_id",
        ]
      },
      occupation:{
        "label":"occupation", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.2), "y": Math.floor(window.innerHeight * 0.85)},
        "columns":[
          "person_id",
        ]
      },
      contact_details:{
        "label":"contact_details", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.25), "y": Math.floor(window.innerHeight * 0.7)},
        "columns":[
          "person_id",
        ]
      },
      hiv_staging_infos:{
        "label":"hiv_staging_infos", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.35), "y": Math.floor(window.innerHeight * 0.85)},
        "columns":[
          "person_id",
        ]
      },
      soundexes:{
        "label":"soundexes", 
        "color":"orange",
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.35), "y": Math.floor(window.innerHeight * 0.7)}, 
        "columns":[
          "person_id",
        ]
      },
      potential_duplicates:{
        "label":"potential_duplicates", 
        "color":"orange",
        "fixed": false,  
        "pos": {"x":Math.floor(window.innerWidth * 0.35), "y": Math.floor(window.innerHeight * 0.25)},
        "columns":[
          "person_id",
        ]
      },
      outcomes:{
        "label":"outcomes", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.2), "y": Math.floor(window.innerHeight * 0.1)},
        "columns":[
          "person_id",
        ]
      },
      relationships:{
        "label":"relationships", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.35), "y": Math.floor(window.innerHeight * 0.1)},
        "columns":[
          "person_id",
        ]
      },
       de_duplicator:{
        "label":"de_duplicator", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.2), "y": Math.floor(window.innerHeight * 0.25)},
        "columns":[
          "person_id",
        ]
      },
      encounters:{
        "label":"encounters", 
        "color":"orange", 
        "fixed": true,
        "pos": {"x":Math.floor(window.innerWidth * 0.6) + seperator, "y": Math.floor(window.innerHeight * 0.75)},
        "columns":[
          "person_id",
          "encounter_id"
        ]
      },
      master_definitions:{
        "label":"master_definitions", 
        "color":"orange", 
        "fixed": true,
        "pos": {"x":Math.floor(window.innerWidth * 0.6) + seperator, "y": Math.floor(window.innerHeight * 0.06)},
        "columns":[
          "master_definition_id",
        ]
      },
      hts_results_given:{
        "label":"hts_results_given", 
        "color":"orange",
        "fixed": false,  
        "pos": {"x":Math.floor(window.innerWidth * 0.45) + seperator, "y": Math.floor(window.innerHeight * 0.85)},
        "columns":[
          "encounter_id",
        ]
      },
      family_plannings:{
        "label":"family_plannings", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.55) + seperator, "y": Math.floor(window.innerHeight * 0.85)},
        "columns":[
          "encounter_id",
        ]
      },
      pregnant_statuses:{
        "label":"pregnant_statuses", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.65) + seperator, "y": Math.floor(window.innerHeight * 0.85)},
        "columns":[
          "encounter_id",
        ]
      },
      appointments:{
        "label":"appointments", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.75) + seperator, "y": Math.floor(window.innerHeight * 0.85)},
        "columns":[
          "encounter_id",
        ]
      },
      vitals:{
        "label":"vitals", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.45) + seperator, "y": Math.floor(window.innerHeight * 0.15)},
        "columns":[
          "encounter_id",
          "master_definitions_id"
        ]
      },
      patient_histories:{
        "label":"patient_histories", 
        "color":"orange",
        "fixed": false,  
        "pos": {"x":Math.floor(window.innerWidth * 0.45) + seperator, "y": Math.floor(window.innerHeight * 0.3)},
        "columns":[
          "encounter_id",
          "master_definitions_id"
        ]
      },
      presenting_complaints:{
        "label":"presenting_complaints", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.45) + seperator, "y": Math.floor(window.innerHeight * 0.45)},
        "columns":[
          "encounter_id",
          "master_definitions_id"
        ]
      },
      diagnosis:{
        "label":"diagnosis", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.45) + seperator, "y": Math.floor(window.innerHeight * 0.6)},
        "columns":[
          "encounter_id",
          "master_definitions_id"
        ]
      },
      symptoms:{
        "label":"symptoms", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.55) + seperator, "y": Math.floor(window.innerHeight * 0.3)},
        "columns":[
          "encounter_id",
          "master_definitions_id"
        ]
      },
      breastfeeding_statuses:{
        "label":"breastfeeding_statuses", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.55) + seperator, "y": Math.floor(window.innerHeight * 0.15)},
        "columns":[
          "encounter_id",
          "master_definitions_id"
        ]
      },
      side_effects:{
        "label":"side_effects", 
        "color":"orange",
        "fixed": false,  
        "pos": {"x":Math.floor(window.innerWidth * 0.55) + seperator, "y": Math.floor(window.innerHeight * 0.6)},
        "columns":[
          "encounter_id",
          "master_definitions_id"
        ]
      },
      medication_prescriptions:{
        "label":"medication_prescriptions", 
        "color":"orange",
        "fixed": false,  
        "pos": {"x":Math.floor(window.innerWidth * 0.75) + seperator, "y": Math.floor(window.innerHeight * 0.6)},
        "columns":[
          "encounter_id",
          "master_definitions_id"
        ]
      },
      side_effects_has_medication_prescriptions:{
        "label":"side_effects_has_medication_prescriptions", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.65) + seperator, "y": Math.floor(window.innerHeight * 0.45)},
        "columns":[
          "encounter_id",
          "master_definitions_id"
        ]
      },
      medication_regimen:{
        "label":"medication_regimen", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.85) + seperator, "y": Math.floor(window.innerHeight * 0.15)},
        "columns":[
        ]
      },
      medication_prescription_has_medication_regimen:{
        "label":"medication_prescription_has_medication_regimen", 
        "color":"orange",
        "fixed": false,  
        "pos": {"x":Math.floor(window.innerWidth * 0.85) + seperator, "y": Math.floor(window.innerHeight * 0.3)},
        "columns":[
        ]
      },
      medication_dispensations:{
        "label":"medication_dispensations", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.65) + seperator, "y": Math.floor(window.innerHeight * 0.3)},
        "columns":[
        ]
      },
      medication_adherences:{
        "label":"medication_adherences", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.65) + seperator, "y": Math.floor(window.innerHeight * 0.15)},
        "columns":[
          "master_definitions_id"
        ]
      },
      lab_orders:{
        "label":"lab_orders", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.85) + seperator, "y": Math.floor(window.innerHeight * 0.6)},
        "columns":[
          "encounter_id",
          "master_definitions_id"
        ]
      },
      lab_test_results:{
        "label":"lab_test_results", 
        "color":"orange", 
        "fixed": false, 
        "pos": {"x":Math.floor(window.innerWidth * 0.85) + seperator, "y": Math.floor(window.innerHeight * 0.75)},
        "columns":[
        ]
      },
    }, 
    edges:{
        people:{ 
            person_addresses:{},
            de_duplicator:{},
            person_has_type: {},
            person_names: {},
            occupation: {},
            contact_details: {},
            hiv_staging_infos: {},
            soundexes: {},
            de_identified_identifiers: {},
            identifiers: {},
            outcomes: {},
            potential_duplicates: {},
            relationships: {},
            encounters: {},
        },
        person_types: {
            person_has_type: {}
        },
        master_definitions:{
            relationships: {},
            outcomes: {},
            vitals:{},
            presenting_complaints:{},
            patient_histories:{},
            diagnosis:{},
            symptoms:{},
            breastfeeding_statuses:{},
            side_effects:{},
            medication_prescriptions:{},
            lab_orders:{},
            medication_adherences:{}
        },
        encounters:{
            hts_results_given:{},
            family_plannings:{},
            pregnant_statuses:{},
            appointments:{},
            vitals:{},
            presenting_complaints:{},
            patient_histories:{},
            diagnosis:{},
            symptoms:{},
            breastfeeding_statuses:{},
            side_effects:{},
            medication_prescriptions:{},
            lab_orders:{}
        },
        side_effects:{
            side_effects_has_medication_prescriptions:{}
        },
        medication_prescriptions:{
            side_effects_has_medication_prescriptions:{},
            medication_dispensations:{},
            medication_prescription_has_medication_regimen:{}
        },
        medication_regimen:{
            medication_prescription_has_medication_regimen:{}
        },
        lab_orders:{
            lab_test_results:{}
        },
        medication_dispensations:{
            medication_adherences:{}
        }
    }
  };
  
  export {branch, rgbArray, rgbaArray, c, canvas}