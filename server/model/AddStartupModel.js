const client = require('../utils/conn');
const AddStartupModel = (startup_name, startup_sector, startup_type, startup_industry, startup_technology, startup_program,startup_cohort, official_contact_number, official_email_address, website_link, official_linkedIn_ID, mentor_associated, cin_registration_number, password, founder_name, founder_email_address, founder_contact_number, founder_gender, founder_student_id, founder_linkedIn_ID, logo, startup_description) => {
                    return new Promise((resolve, reject)=>{
                        client.query("INSERT INTO startups(id, stratup_name, startup_sector, startup_type, startup_industry, startup_technology, startup_program, startup_cohort, official_contact_number, official_email_address, website_link, official_linkedin_id, mentor_associated, cin_registration_number, founder_name, founder_email_address, founder_contact_number, founder_gender, founder_student_id, founder_linkedin_id, logo, startup_description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)", [ 
                            startup_name, startup_sector, startup_type, startup_industry, startup_technology, startup_program,startup_cohort, official_contact_number, official_email_address, website_link, official_linkedIn_ID, mentor_associated, cin_registration_number, password, founder_name, founder_email_address, founder_contact_number, founder_gender, founder_student_id, founder_linkedIn_ID, logo, startup_description], 
                            (err, result) => {
                                if(err)
                                {
                                    reject({STATUS : err})
                                }
                                else
                                {
                                     resolve({STATUS: result});
                                }
                            }
                        )
                    })
}

const FetchStartupDataModel = () =>{
        return new Promise((resolve, reject) => {
            client.query("SELECT * FROM startups", (err, result)=> {
                if(err)
                {
                    reject({STATUS: err})
                }
                else
                {
                    resolve({STATUS: result});
                }
            })
        })
}
const StartupCountData = () => {
    return new Promise((resolve, reject) => {
        client.query("SELECT COUNT(email_address) AS count FROM startups", (err, result) => {
            if(err)
            {
                reject(err); 
            }
            else
            {
                resolve(result);
            }
        })
    })
}
module.exports = {AddStartupModel, FetchStartupDataModel, StartupCountData};