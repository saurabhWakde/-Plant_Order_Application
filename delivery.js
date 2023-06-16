// let button=document.getElementById("Btn")

// let dis=()=>
// {
//     let input=document.getElementById("cred")
//     input.innerHTML="";
//     // input.id=cred;
//     document.getElementById("checkbox").innerHTML="";

// //    let Goback=document.createElement("button")
// //    Goback.style.background="none"
// //    Goback.style.color="rgb(53,94,0)"
// //    Goback.style.fontWeight = "700"
// //    Goback.style.border="solid 1px rgb(53,94,0)"
// //    Goback.id="Prev"


// //    let Continue=document.createElement("button")
// //    Continue.textContent="Continue"
// //    Continue.id="Next"
// //    Goback.textContent="Go Back"
//     let selc1=document.createElement("select");
//     let defaultOption1=document.createElement("option");
//     defaultOption1.text="Country";
//     defaultOption1.disabled = true;
//     defaultOption1.selected = true;
//     selc1.add(defaultOption1);

//     let countries=["Country","India","United States", "Canada", "Australia", "United Kingdom", "Germany", "France", "Spain", "Italy", "Brazil", "China", "Japan", "Russia", "South Korea", "Mexico", "Argentina", "Netherlands", "Sweden", "Norway", "Denmark", "Finland", "Switzerland", "Portugal", "Greece", "Turkey", "Egypt", "South Africa", "Saudi Arabia", "United Arab Emirates", "New Zealand"];
//     countries.forEach(country => {
//         let option = document.createElement("option");
//         option.value=country;
//         option.text =country;
//         selc1.add(option);
//     });

//     let selc2 = document.createElement("select");
//     let defaultOption2 = document.createElement("option");
//     defaultOption2.text = "States";
//     defaultOption2.disabled = true;
//     defaultOption2.selected = true;
//     selc2.add(defaultOption2);
    
//     // State data for India
//     let statesIndia = ["States","Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
    
//     statesIndia.forEach(state => {
//         let option = document.createElement("option");
//         option.value = state;
//         option.text = state;
//         selc2.add(option);
//     });

//     let selc3 = document.createElement("select");
//     let defaultOption3 = document.createElement("option");
//     defaultOption3.text = "States";
//     defaultOption3.disabled = true;
//     defaultOption3.selected = true;
//     selc2.add(defaultOption3);
    
//     // State data for India
//     let districts= ["Districts","Ahmednagar", "Akola", "Amravati", "Chatrapati Sambhaji Nagar", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal","Nicobar", "North and Middle Andaman", "South Andaman",
//     // Andhra Pradesh
//     "Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari",
//     // Arunachal Pradesh
//     "Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding",
//     // Assam
//     "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong",
//     // Bihar
//     "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran",
//     // Chandigarh
//     "Chandigarh",
//     // Chhattisgarh
//     "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela-Pendra-Marwahi", "Janjgir-Champa", "Jashpur", "Kanker", "Kawardha", "Kondagaon", "Korba", "Koriya",// Chhattisgarh (continued)
//     "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja",
//     // Dadra and Nagar Haveli and Daman and Diu
//     "Dadra and Nagar Haveli", "Daman", "Diu",
//     // Delhi
//     "Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi",
//     // Goa
//     "North Goa", "South Goa",
//     // Gujarat
//     "Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kutch", "Kheda", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad",
//     // Haryana
//     "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar",
//     // Himachal Pradesh
//     "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una",
//     // Jammu and Kashmir
//     "Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur",
//     // Jharkhand
//     "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela-Kharsawan", "Simdega", "West Singhbhum",
//     // Karnataka
//     ,// Karnataka (continued)
// "Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir",
// // Kerala
// "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad",
// // Madhya Pradesh
// "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha",
// // Maharashtra
// "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal",
// // Manipur
// "Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam",
// // Manipur (continued)
// "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul",
// // Meghalaya
// "East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills",
// // Mizoram
// "Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Saitual", "Serchhip",
// // Nagaland
// "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto",
// // Odisha
// "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh",
// // Puducherry
// "Karaikal", "Mahe", "Puducherry", "Yanam",
// // Punjab
// "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Sri Muktsar Sahib", "Tarn Taran",
// // Rajasthan
// "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand"
//     ]
    
//     districts.forEach(district => {
//         let option = document.createElement("option");
//         option.value = district;
//         option.text = district;
//         selc3.add(option);
//     });

//     let selc4 = document.createElement("select");
//     selc4.id = "pincode";
//     selc4.name = "pincode";
    
//     // Replace the examplePinCodes array with your actual array of pin codes
//     let pinCodes = ["Pincode", "400001", "560001", "700001", "600001","400001", "400002", "400003", "400004", "400005", // Mumbai
//     "411001", "411002", "411003", "411004", "411005", // Pune
//     "400601", "400602", "400603", "400604", "400605", // Thane
//     "400701", "400702", "400703", "400704", "400705", // Navi Mumbai
//     "440001", "440002", "440003", "440004", "440005", ]// Nagpur];
    
//     // Create and append option elements for each pin code
//     pinCodes.forEach((pinCode) => {
//       let option = document.createElement("option");
//       option.value = pinCode;
//       option.text = pinCode;
//       selc4.appendChild(option);
//     });


//    let selcdiv=document.createElement("div")
//    selcdiv.id="Selc"



//    selcdiv.append(selc1, selc2, selc3, selc4);
//    input.append(selcdiv)

// }
// button.addEventListener("click",dis)


let input=document.getElementById("cred")
    // input.innerHTML="";
    // input.id=cred;
    // document.getElementById("checkbox").innerHTML="";
  let Goback=document.getElementById("Prev")
   Goback.style.background="none"
   Goback.style.color="rgb(53,94,0)"
   Goback.style.fontWeight = "700"
   Goback.style.border="solid 1px rgb(53,94,0)"


//    let Continue=document.createElement("button")
//    Continue.textContent="Continue"
//    Continue.id="Next"
//    Goback.textContent="Go Back"
    let selc1=document.createElement("select");
    
    let defaultOption1=document.createElement("option");
    defaultOption1.addEventListener("change", function() {
        this.style.border = "none"; // Remove border when an option is selected
      });
    defaultOption1.text="Country";
    defaultOption1.disabled = true;
    defaultOption1.selected = true;
    selc1.add(defaultOption1);

    let countries=["Country","India","United States", "Canada", "Australia", "United Kingdom", "Germany", "France", "Spain", "Italy", "Brazil", "China", "Japan", "Russia", "South Korea", "Mexico", "Argentina", "Netherlands", "Sweden", "Norway", "Denmark", "Finland", "Switzerland", "Portugal", "Greece", "Turkey", "Egypt", "South Africa", "Saudi Arabia", "United Arab Emirates", "New Zealand"];
    countries.forEach(country => {
        let option = document.createElement("option");
        option.value=country;
        option.text =country;
        selc1.add(option);
    });

    let selc2 = document.createElement("select");
    let defaultOption2 = document.createElement("option");
    defaultOption2.text = "States";
    defaultOption2.disabled = true;
    defaultOption2.selected = true;
    selc2.add(defaultOption2);
    
    
    // State data for India
    let statesIndia = ["States","Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
    
    statesIndia.forEach(state => {
        let option = document.createElement("option");
        option.value = state;
        option.text = state;
        selc2.add(option);
    });

    let selc3 = document.createElement("select");
    let defaultOption3 = document.createElement("option");
    defaultOption3.text = "States";
    defaultOption3.disabled = true;
    defaultOption3.selected = true;
    selc2.add(defaultOption3);
    
    // State data for India
    let districts= ["Districts","Ahmednagar", "Akola", "Amravati", "Chatrapati Sambhaji Nagar", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal","Nicobar", "North and Middle Andaman", "South Andaman",
    // Andhra Pradesh
    "Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari",
    // Arunachal Pradesh
    "Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding",
    // Assam
    "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong",
    // Bihar
    "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran",
    // Chandigarh
    "Chandigarh",
    // Chhattisgarh
    "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela-Pendra-Marwahi", "Janjgir-Champa", "Jashpur", "Kanker", "Kawardha", "Kondagaon", "Korba", "Koriya",// Chhattisgarh (continued)
    "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja",
    // Dadra and Nagar Haveli and Daman and Diu
    "Dadra and Nagar Haveli", "Daman", "Diu",
    // Delhi
    "Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi",
    // Goa
    "North Goa", "South Goa",
    // Gujarat
    "Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kutch", "Kheda", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad",
    // Haryana
    "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar",
    // Himachal Pradesh
    "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una",
    // Jammu and Kashmir
    "Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur",
    // Jharkhand
    "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela-Kharsawan", "Simdega", "West Singhbhum",
    // Karnataka
    ,// Karnataka (continued)
"Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir",
// Kerala
"Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad",
// Madhya Pradesh
"Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha",
// Maharashtra
"Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal",
// Manipur
"Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam",
// Manipur (continued)
"Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul",
// Meghalaya
"East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills",
// Mizoram
"Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Saitual", "Serchhip",
// Nagaland
"Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto",
// Odisha
"Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh",
// Puducherry
"Karaikal", "Mahe", "Puducherry", "Yanam",
// Punjab
"Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Sri Muktsar Sahib", "Tarn Taran",
// Rajasthan
"Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand"
    ]
    
    districts.forEach(district => {
        let option = document.createElement("option");
        option.value = district;
        option.text = district;
        selc3.add(option);
    });

    let selc4 = document.createElement("select");
    selc4.id = "pincode";
    selc4.name = "pincode";
    
    // Replace the examplePinCodes array with your actual array of pin codes
    let pinCodes = ["Pincode", "400001", "560001", "700001", "600001","400001", "400002", "400003", "400004", "400005", // Mumbai
    "411001", "411002", "411003", "411004", "411005", // Pune
    "400601", "400602", "400603", "400604", "400605", // Thane
    "400701", "400702", "400703", "400704", "400705", // Navi Mumbai
    "440001", "440002", "440003", "440004", "440005", ]// Nagpur];
    
    // Create and append option elements for each pin code
    pinCodes.forEach((pinCode) => {
      let option = document.createElement("option");
      option.value = pinCode;
      option.text = pinCode;
      selc4.appendChild(option);
    });


   let selcdiv=document.createElement("div")
   selcdiv.id="Selc"

   selcdiv.append(selc1, selc2, selc3, selc4);
   input.append(selcdiv)

const dis=()=>
{
    window.location.href="personalinfo.html"
}

   Goback.addEventListener("click",dis)

   let next1=document.getElementById("Next")

const next=()=>
{
    window.location.href="payment.html"
}
next1.addEventListener("click",next)





var plantJSON=localStorage.getItem("itemData");
var plant=JSON.parse(plantJSON);
var itemDataJSON = localStorage.getItem("itemData");
var itemData = JSON.parse(itemDataJSON);

let container=document.getElementById("items");

plant.map((elem, index)=> 
{
  let scroll = document.createElement("div");
  scroll.classList.add("scroll-item");

  let imgdiv=document.createElement("div");

  let img=document.createElement("img");
  img.src=elem.img;

  imgdiv.append(img);

  let datadiv=document.createElement("div");

  let p=document.createElement("p");
  p.textContent=elem.name;

  let p1=document.createElement("p");
  p1.textContent="₹: "+Math.floor(elem.price*20*elem.quantity);

  let input=document.createElement("p");

  input.textContent="Qnty: "+elem.quantity
  


  datadiv.append(p,p1,input);

  scroll.append(imgdiv,datadiv);
  container.appendChild(scroll);
});


const totalPrice=plant.reduce((total, item) => total + item.price * item.quantity, 0);

const totalcharge=plant.reduce((total, item) => total + item.quantity*10, 0);

console.log(totalPrice*20);
console.log(totalcharge)

const Total=totalPrice*20+totalcharge;
console.log(Total)

let total=document.createElement("div")
total.id="total"

let p1=document.createElement("p")
p1.textContent="Sales:"

let p2=document.createElement("p")
p2.textContent="₹ "+Math.floor(totalPrice*20)

let p3=document.createElement("p")
p3.textContent="Delivery:"

let p4=document.createElement("p")
p4.textContent="₹ "+Math.floor(totalcharge)

let p5=document.createElement("p")
p5.textContent="Total"

let p6=document.createElement("p")
p6.textContent="₹ "+Math.floor(Total)


let totaldiv1=document.createElement("div");
totaldiv1.append(p1,p2)

let totaldiv2=document.createElement("div");
totaldiv2.append(p3,p4)

let totaldiv3=document.createElement("div");
totaldiv3.append(p5,p6)

total.append(totaldiv1,totaldiv2,totaldiv3)


container.append(total)








