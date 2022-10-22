const resume =[{
          personal_details:{
                Fisrt_name: "Bathri",
                Last_name:"Nath",
                date_of_birth:"20/07/2000",
                age:22,
                language_known:"Tamil and telugu",
                Gendar:"Male",
                Email:"bbnbadhri@gmail.com",
                phone:"7826054900",

           location:{
                Door_no: 96,
                Street:"Mathaman kovil street",
                District:"ranipet",
                State:"Tamilnadu",
                Country:"India",
            
           }         
           
          }]         
         console.log(resume)

    for(let data of resume){
     console.log(`
   personal deta:
            
   Name:              ${data.Personal_detail.First_name.Lastname}
   Date of birth:     ${data.Personal_detail.Date_of_birth}
   Age:               ${data.Personal_detail.age}
   language known:    ${data.personal_detail.language_known}
   Gender:            ${data.Personal_detail.Gender}
   Email id:          ${data.Personal_detail.Email}
   Phone number:      ${data.Personal_detail.phone}
     
     
     `)}
    


