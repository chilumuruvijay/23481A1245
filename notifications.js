const axios = require("axios");

const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjaGlsdW11cnV2aWpheWt1bWFyQGdtYWlsLmNvbSIsImV4cCI6MTc3ODMxMDcxNiwiaWF0IjoxNzc4MzA5ODE2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYTc4NGIxZDUtOWM0ZS00NzA4LTkyNTItZjdiODljOTM1OWExIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiY2hpbHVtdXJ1IG5hZ2Egc2FpIHZpamF5IGt1bWFyIiwic3ViIjoiOTE1OTZlMjUtMTk0Mi00NmE4LTg5ZWItODJhZjVkYjhlMmY1In0sImVtYWlsIjoiY2hpbHVtdXJ1dmlqYXlrdW1hckBnbWFpbC5jb20iLCJuYW1lIjoiY2hpbHVtdXJ1IG5hZ2Egc2FpIHZpamF5IGt1bWFyIiwicm9sbE5vIjoiMjM0ODFhMTI0NSIsImFjY2Vzc0NvZGUiOiJlSmRDdUMiLCJjbGllbnRJRCI6IjkxNTk2ZTI1LTE5NDItNDZhOC04OWViLTgyYWY1ZGI4ZTJmNSIsImNsaWVudFNlY3JldCI6IkdlQWdrdHZxQlZCVXRxY1QifQ.vNhFDt01hj7jwySBRxbl2nRAksM4rbA2WHAPZqavXJk";

async function getNotifications() {

  try {

    const response =
      await axios.get(
        "http://4.224.186.213/evaluation-service/notifications",
        {
          headers: {
            Authorization:
              `Bearer ${TOKEN}`,
          },
        }
      );

    console.log(
      response.data
    );

  } catch (error) {

    console.log(error.response.data);

  }
}

getNotifications();