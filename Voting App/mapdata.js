const voteButton = document.querySelector('.vote_button');
let voteNumber1 = document.querySelector('.vote_number1').textContent;
let voteNumber2 = document.querySelector('.vote_number2').textContent;
const candidatesImage = document.querySelector('.candidates_img');
const buttonImage1 = document.querySelector('.button_image1');
const buttonImage2 = document.querySelector('.button_image2');
const audio = document.getElementById('tinkSound');
// const thumbUp = document.querySelector('.thumbUp');
let isImageclicked = false;


candidatesImage.addEventListener('click', (e) => {
  if (e.target.matches('.candidate1')) {
    playSound()
    buttonImage2.classList.remove('display_blackNwhite');
    if (isImageclicked === true) {
      e.target.classList.remove('display_blackNwhite');
      isImageclicked = false
    } else {
      e.target.classList.add('display_blackNwhite')
      isImageclicked = true;
    }
  } else {
    playSound()
    buttonImage1.classList.remove('display_blackNwhite');
    if (isImageclicked === true) {
      e.target.classList.remove('display_blackNwhite')
      isImageclicked = false;
    } else {
      e.target.classList.add('display_blackNwhite')
      isImageclicked = true;
    }
  }

  // checkForClickedImage(e)
})

// map object
var simplemaps_usmap_mapdata={
  main_settings: {
    //General settings
    width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    
    //State defaults
    state_description: "State description",
    state_color: "#08bf46",
    state_hover_color: "#88A4BC",
    // state_url: "https://simplemaps.com",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
   
    //Zoom settings
    manual_zoom: "yes",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    AK: {
      name: "Alaska",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    FL: {
      name: "Florida",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      inactive: "no"
    },
    NH: {
      name: "New Hampshire",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    VT: {
      name: "Vermont",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ME: {
      name: "Maine",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    RI: {
      name: "Rhode Island",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NY: {
      name: "New York",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    PA: {
      name: "Pennsylvania",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NJ: {
      name: "New Jersey",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    DE: {
      name: "Delaware",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MD: {
      name: "Maryland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    VA: {
      name: "Virginia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    WV: {
      name: "West Virginia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    OH: {
      name: "Ohio",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    IN: {
      name: "Indiana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    IL: {
      name: "Illinois",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    CT: {
      name: "Connecticut",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    WI: {
      name: "Wisconsin",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NC: {
      name: "North Carolina",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    DC: {
      name: "District of Columbia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MA: {
      name: "Massachusetts",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    TN: {
      name: "Tennessee",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    AR: {
      name: "Arkansas",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MO: {
      name: "Missouri",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GA: {
      name: "Georgia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    SC: {
      name: "South Carolina",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    KY: {
      name: "Kentucky",
      description: "default",
      color: "default",
      zoomable: "no",
      hover_color: "default",
      url: "default"
    },
    AL: {
      name: "Alabama",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    LA: {
      name: "Louisiana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MS: {
      name: "Mississippi",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    IA: {
      name: "Iowa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MN: {
      name: "Minnesota",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    OK: {
      name: "Oklahoma",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    TX: {
      name: "Texas",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NM: {
      name: "New Mexico",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    KS: {
      name: "Kansas",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NE: {
      name: "Nebraska",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    SD: {
      name: "South Dakota",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ND: {
      name: "North Dakota",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    WY: {
      name: "Wyoming",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MT: {
      name: "Montana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    CO: {
      name: "Colorado",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    UT: {
      name: "Utah",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    AZ: {
      name: "Arizona",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NV: {
      name: "Nevada",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    OR: {
      name: "Oregon",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    WA: {
      name: "Washington",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    CA: {
      name: "California",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MI: {
      name: "Michigan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ID: {
      name: "Idaho",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GU: {
      name: "Guam",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes"
    }
  },
  locations: {
    "0": {
      name: "New York",
      lat: 40.71,
      lng: -74,
      description: "default",
      color: "default",
      url: "default",
      type: "default",
      size: "default"
    },
    "1": {
      name: "Anchorage",
      lat: 61.2180556,
      lng: -149.9002778,
      color: "default",
      type: "circle"
    }
  },
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  }
};

const parentObject = simplemaps_usmap_mapdata.state_specific;

voteButton.addEventListener('click', whoToVote)

function whoToVote() {
  if (selectedState) {
    if(buttonImage1.matches('.display_blackNwhite')) {
      displayVote1()
    } else if(buttonImage2.matches('.display_blackNwhite')) {
      displayVote2()
    } else {
      alert("Choose a candidate")
    }
  } else {
    alert("select state")
  }
}



function displayVote1() {
  setVoteCountForState()
  document.querySelector('.vote_number1').textContent = increaseVoteCount1();
}
function displayVote2() {
  setVoteCountForState()
  document.querySelector('.vote_number2').textContent = increaseVoteCount2();
}

function increaseVoteCount1() {
  voteNumber1 = 0;
  for(let key in parentObject) {
    // Get the total vote_count_1 in object
    voteNumber1 += parentObject[key]["vote_count_1"]
  }
  return voteNumber1
}

function increaseVoteCount2() {
  voteNumber2 = 0;
  for(let key in parentObject) {
    // Get the total vote_count_1 in object
    voteNumber2 += parentObject[key]["vote_count_2"]
  }
  return voteNumber2
}

// add a select option to vote_detail div
const selectState = document.querySelector('.select_state');
const selectList = document.createElement('select');
selectList.classList.add('state');
selectState.appendChild(selectList);

// create state option by iterating through the map object
for(let key in parentObject) {
  // create "vote_count" key in state object add a value for vote_count in each object
  parentObject[key]["vote_count_1"] = 0;
  parentObject[key]["vote_count_2"] = 0;
  parentObject[key]["total_vote_count"] = 0;

  // console.log(parentObject[key].vote_count)

  // create option for each state
  let option = document.createElement("option");
  option.value = parentObject[key]['name'];
  option.text = parentObject[key]['name'];
  selectList.appendChild(option)
}

let selectedState = ""
selectList.addEventListener('click', checkSelectedState)

function checkSelectedState(e) {
  console.log(e.target.value)
  selectedState = e.target.value
  return e.target.value
}

// add and increase vote count of each state
function setVoteCountForState() {
  for(let key in parentObject) {
    
    if(parentObject[key]["name"] == selectedState) {
      
      // check for candidate's vote to increase
      if (buttonImage1.matches('.display_blackNwhite')) {
        // check if vote count is less than less or equal to 10
        
        if (parentObject[key]["total_vote_count"] < 10) {
          parentObject[key]["vote_count_1"]++
          console.log(parentObject[key]["name"] + "1 : " + parentObject[key]["vote_count_1"])
        } else {
          alert("Reached max vote per state, pick a new state")
        }
      }
      if (buttonImage2.matches('.display_blackNwhite')) {
        
        // check if vote count is less than less or equal to 10
        
        if (parentObject[key]["total_vote_count"] < 10) {
          parentObject[key]["vote_count_2"]++
          console.log(parentObject[key]["name"] + "2 : " + parentObject[key]["vote_count_2"])
        } else {
          alert("Reached max vote per state, pick a new state")
        }
      }
      parentObject[key]["total_vote_count"] = parentObject[key]["vote_count_1"] + parentObject[key]["vote_count_2"]
      console.log(parentObject[key]["name"] + ", total:" + parentObject[key]["total_vote_count"])
      
    }
  }
  // console.log(selectedState)
}


function playSound() {
  audio.currentTime = 0;
  audio.play()
}
    

// parentObject[key]["vote_count"] == null ? parentObject[key]["vote_count"] = 1 : parentObject[key]["vote_count"]++

// function voteForSelectedState() {

//   setVoteCountForState()

//   let state = [checkSelectedState]
  
//   state.forEach(element => {
//     document.querySelector('.vote_number1').textContent = increaseVoteCount1();
//     console.log(element)
//   });
// }


// Next step: create a new key for total votecount of each state
// and compare you condition for increase vote count base on the total vote count for each state