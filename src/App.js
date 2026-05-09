import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [notifications, setNotifications] =
    useState([]);

  const [typeFilter, setTypeFilter] =
    useState("All");

  useEffect(() => {

  fetchNotifications();

// eslint-disable-next-line

}, [typeFilter]);

  async function fetchNotifications() {

    try {

      let url =
        "http://4.224.186.213/evaluation-service/notifications";

      if (typeFilter !== "All") {

        url += `?type=${typeFilter}`;

      }

      const response =
        await axios.get(url, {
          headers: {
            Authorization:
              "Bearer YOUR_TOKEN",
          },
        });

      const data =
        response.data.notifications;

      const prioritized =
        data.map((item) => {

          let priority = 0;

          if (
            item.Type === "Placement"
          ) {
            priority = 100;
          }

          else if (
            item.Type === "Result"
          ) {
            priority = 70;
          }

          else {
            priority = 40;
          }

          return {
            ...item,
            priority,
          };

        });

      prioritized.sort(
        (a, b) =>
          b.priority - a.priority
      );

      setNotifications(prioritized);

    } catch (error) {

      console.log(
        "API Failed Using Dummy Data"
      );

      const dummy = [
        {
          ID: 1,
          Type: "Placement",
          Message:
            "Google Placement Drive",
          Timestamp: "2026-05-09",
          priority: 100,
        },
        {
          ID: 2,
          Type: "Result",
          Message:
            "Semester Results",
          Timestamp: "2026-05-08",
          priority: 70,
        },
        {
          ID: 3,
          Type: "Event",
          Message:
            "Hackathon Event",
          Timestamp: "2026-05-07",
          priority: 40,
        },
      ];

      if (typeFilter !== "All") {

        setNotifications(
          dummy.filter(
            (item) =>
              item.Type === typeFilter
          )
        );

      } else {

        setNotifications(dummy);

      }
    }
  }

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        background: "#eef2f7",
        minHeight: "100vh",
      }}
    >

      <h1>
        Campus Notifications
      </h1>

      <h2>
        Priority Inbox
      </h2>

      <select
        value={typeFilter}
        onChange={(e) =>
          setTypeFilter(e.target.value)
        }
        style={{
          padding: "10px",
          marginTop: "20px",
        }}
      >

        <option>
          All
        </option>

        <option>
          Placement
        </option>

        <option>
          Result
        </option>

        <option>
          Event
        </option>

      </select>

      {
        notifications.map((item) => (

          <div
            key={item.ID}
            style={{
              background: "white",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          >

            <h3>
              {item.Message}
            </h3>

            <p>
              Type:
              {" "}
              {item.Type}
            </p>

            <p>
              Priority:
              {" "}
              {item.priority}
            </p>

            <p>
              Time:
              {" "}
              {item.Timestamp}
            </p>

          </div>

        ))
      }

    </div>
  );
}

export default App;