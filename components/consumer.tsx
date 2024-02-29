"use client";
import React, { useEffect, useState } from "react";

interface Props {}

function Consumer(props: Props) {
  const {} = props;

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  async function fetchData() {
    setLoading(true);
    try {
      const url = "http://localhost:8080";
      await fetch(url + "/province", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enablePage: false,
          // start: 0,
          // length: 10,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setData(data?.data?.data);
        });
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-10">
      {loading ? (
        "Loading ..."
      ) : (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border border-white p-5">ID</th>
              <th className="border border-white p-5">Name</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any, key: any) => (
              <tr key={key}>
                <td className="border border-white p-5">{item.id}</td>
                <td className="border border-white p-5">{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Consumer;
