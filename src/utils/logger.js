import axios from "axios";

const LOG_API =
  "http://4.224.186.213/evaluation-service/logs";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjaGlsdW11cnV2aWpheWt1bWFyQGdtYWlsLmNvbSIsImV4cCI6MTc3ODMwODEyNSwiaWF0IjoxNzc4MzA3MjI1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNGI2NGE2YzktMjJhNS00NmM5LTljMTQtZmQ0YzAwNGM3MDJmIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiY2hpbHVtdXJ1IG5hZ2Egc2FpIHZpamF5IGt1bWFyIiwic3ViIjoiOTE1OTZlMjUtMTk0Mi00NmE4LTg5ZWItODJhZjVkYjhlMmY1In0sImVtYWlsIjoiY2hpbHVtdXJ1dmlqYXlrdW1hckBnbWFpbC5jb20iLCJuYW1lIjoiY2hpbHVtdXJ1IG5hZ2Egc2FpIHZpamF5IGt1bWFyIiwicm9sbE5vIjoiMjM0ODFhMTI0NSIsImFjY2Vzc0NvZGUiOiJlSmRDdUMiLCJjbGllbnRJRCI6IjkxNTk2ZTI1LTE5NDItNDZhOC04OWViLTgyYWY1ZGI4ZTJmNSIsImNsaWVudFNlY3JldCI6IkdlQWdrdHZxQlZCVXRxY1QifQ.BAyZQL6QHyW08FxLnSCDx7TGwsuiERst_K2POkRaxKY";

export async function Log(
  stack,
  level,
  packageName,
  message
) {

  try {

    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization:
            `Bearer ${TOKEN.trim()}`
        }
      }
    );

    console.log("Log Created");
    console.log(response.data);

  } catch (error) {

    console.log("Logging Failed");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

  }

}