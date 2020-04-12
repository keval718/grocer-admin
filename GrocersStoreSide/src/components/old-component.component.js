import React from 'react';
import axios from 'axios';
const OldComponent = props => {
    console.log("old ma aave che" + props.data);
    console.log(window.location.pathname.toString().substring(4));
    let a='Bearer '+window.location.pathname.toString().substring(4)+"";
    console.log(a);
    let cat="G305 - Session Room";

    if(cat==="G306 - Session Room"){
      cat="G306 - Session Room"
    }
    else if(cat==="G305 - Session Room"){
      cat="G305 - Session Room";
    }
    else if(cat==="G304 – Boardroom"){
      cat="G304 – Boardroom";
    }
    else if(cat==="G303 - Media Production Space"){
      cat="G303 - Media Production Space";
    }    
    else if(cat==="G206 - Multipurpose Room"){
      cat="G206 - Multipurpose Room";
    }
    else if(cat==="G204 – Boardroom"){
      cat="G204 – Boardroom";
    }
    else if(cat==="G205 – Focus Group Control Room"){
      cat="G205 – Focus Group Control Room";
    }
    else if(cat==="G105 - Focus Group Room"){
      cat="G105 - Focus Group Room";
    }
    let b="<!DOCTYPE html><html><head><title>Email Page</title><style type='text/css'></style></head><body><div align=justify><p>Hi Harsh,</p><p><b>Your room booking for G204 on Monday, Jan 20th at 4-5PM has been confirmed. </b>Please note, the confirmation applies to the first three hours of your request. Should the room be available following your booking, you are welcome to use it until the next scheduled room booking.<p>ROOM BOOKING TERMS AND CONDITIONS: Students, alumni, faculty, administration and community* members may request meeting room space in G-building under the following conditions:</p><ol><li>Requestors must be members of the CfE.</li><br><li>Same day requests are not processed. Forms received after 4:00pm, booking for the next business day, is considered a same day request.</li><br><li>Rooms can be booked up to two weeks in advance.</li><br><li>Rooms may be booked for up to three hours. Requests outside of the restriction will only be considered for the first three hours.</li><br><li>Rooms cannot be booked on a consecutive or recurring basis</li><br><li>Room bookings cannot exceed the seating capacity of the room.</li><br><li>Audio-visual equipment cannot be moved from the room. For all A/V issues contact IT at 416-675-6622 x8888.</li><br><li>Rooms must be left clean with no damage. Users agree to cover all damages and losses resulting from room use. Please advise the CfE team of any pre-existing damages within the first 10 minutes of the reservation.</li><br><li>Room bookings will be relinquished after the first 15 minutes if unoccupied.</li><br><li>Booking privileges will be suspended for contravention of these conditions or for no-show (15 minutes late)</li></ol><br><p>Please let us know if there are any changes.<br><br>Regards,<br><b style=color: #173F5F;>Centre for Entrepreneurship (CfE) Team</b><br>Humber Institute of Technology & Advanced Learning<br>17 Colonel Samuel Smith Park Drive, G-building<br>Toronto, ON M8V 4B6<br><img src=../../public/icons8-phone-64.png>: 416-675-6622 x3490&nbsp;&nbsp;<img src=../../public/icons8-email-64.png>:<a href=cfe@humber.ca>cfe@humber.ca</a><br> <img src=../../public/icons8-link-64.png>:<a href=www.humber.ca/cfe>www.humber.ca/cfe</a></p><p><img src=../../public/We are Entrepreneurs.png><br><br><a href=https://www.facebook.com/humbercfe><img src='../../public/icons8-facebook-48.png'></a><a href=https://twitter.com/humbercfe><img src=../../public/icons8-twitter-64.png></a><a href=https://www.instagram.com/humbercfe/><img src=../../public/icons8-instagram-64.png></a><br><br><img src=../../public/Eventbrite Banner Career Recharge.png></p><p style=color: #20639B; align=justify>CONFIDENTIALITY NOTICE:<br>This email and attached material are intended for the use of the individual or organization to whom they are addressed and may not be distributed, copied, or disclosed to other unauthorized persons. This material may contain confidential and/or personal information subject to the provisions of the Freedom of Information and Protection of Privacy Act, the Municipal Freedom of Information and Protection of Privacy Act, and/or the Personal Health Information Protection Act. If you receive this transmission in error, please notify me immediately and delete this message. Do not email, print, copy, distribute, or disclose this email or its contents further. Thank you for your co-operation and assistance.</p></div></body></html>"
    function sayHello() {
        
        const product = {

            
              
              subject: "Booking Confirmation",
              body: {
                contentType: "HTML",
                content: b
              },
              categories: [cat],
              start: {
                  dateTime: "2020-09-17T12:00:00",
                  timeZone: "Pacific Standard Time"
              },
              end: {
                  dateTime: "2020-09-17T14:00:00",
                  timeZone: "Pacific Standard Time"
              },
              location:{
                  displayName:"Humber College"
              },
              attendees: [
                {
                  emailAddress: {
                    address:"thakorraj1998@gmail.com",
                    name: "Raj Thakor"
                  },
                  type: "required"
                }
              ]
            

        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': a
          }

        // console.log(store);
        axios.post('https://graph.microsoft.com/v1.0/me/events', product,{
                headers: headers
              })
            .then(res => console.log(res.data));
      }


    return (
        <div>
             <button onClick={sayHello}>
      Click me!
    </button>
        </div>
    )
};

export default OldComponent;