const md5 = require('md5');
const {AddStartupModel} = require('../../../model/AddStartupModel');
const { ExpressValidator, check, checkExact } = require('express-validator');
const validator = require('validator');
const EmailValid = require('../../../validation/EmailValid');
const PhoneNumberValid = require('../../../validation/PhoneNumberValid');
const AddStartup = async(req, res) => {
    const { basic, official, founder, description } = req.body;
    const { startup_name, startup_sector, startup_type, startup_industry, startup_technology, startup_program,startup_cohort } = basic;
    const { official_contact_number, official_email_address, website_link, official_linkedIn_ID, mentor_associated, cin_registration_number, password } = official;
    const { founder_name, founder_email_address, founder_contact_number, founder_gender, founder_student_id, founder_linkedIn_ID } = founder;
    const { logo, startup_description } = description;
    if (!startup_name ||  !startup_sector || !startup_type || !startup_industry || !startup_technology || !official_contact_number || !official_email_address || !cin_registration_number || !password || !founder_name || !founder_email_address || !founder_contact_number || !founder_student_id || !founder_linkedIn_ID || !startup_description ) 
    {
        return res.status(400).send('All fields are required');
    }
    else if(!EmailValid(email_address))
    {
        return res.status(401).send("Email is not Valid");
    }
    else if(!PhoneNumberValid(contact_number))
    {
        return res.status(402).send('Phone number is not valid');
    }
    else {
        try
        {
            const result = await AddStartupModel(startup_name, startup_sector, startup_type, startup_industry, startup_technology, startup_program,startup_cohort, official_contact_number, official_email_address, website_link, official_linkedIn_ID, mentor_associated, cin_registration_number, password, founder_name, founder_email_address, founder_contact_number, founder_gender, founder_student_id, founder_linkedIn_ID, logo, startup_description);
            res.send(result);
        }
        catch(err)
        {
                if(err.code='23505')
                {
                    res.status(409).json({Error: "Contact number already exists" })
                }
                else {
                    console.log(err);
                    res.status(500).json({Error: "Internal Server Error"});
                }
        }
    }
}
const randomString = (length) => {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    if(!length) {
        length = Math.floor(Math.random() * chars.length);
    }
    var str = '';
    for(var i = 0; i < length; i++){
        str +=chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
module.exports = AddStartup; 