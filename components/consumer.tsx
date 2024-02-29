"use client";
import React, { useEffect, useState } from "react";

interface Props {}

function Consumer(props: Props) {
  const {} = props;

  const [data, setData] = useState([]);
  const options = [
    { label: "Provinsi", value: "province" },
    { label: "Kabupaten", value: "regency" },
    { label: "Kecamatan", value: "district" },
    { label: "Kelurahan", value: "village" },
  ];
  const [optionValue, setOptionValue] = useState("province");

  const [loading, setLoading] = useState(true);
  async function fetchData() {
    setLoading(true);
    try {
      const url = "https://localhost:8243/sampel-api-provider/1";
      await fetch(url + "/" + optionValue, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey:
            "eyJ4NXQiOiJOVGRtWmpNNFpEazNOalkwWXpjNU1tWm1PRGd3TVRFM01XWXdOREU1TVdSbFpEZzROemM0WkE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbkBjYXJib24uc3VwZXIiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6ImFkbWluIiwidGllclF1b3RhVHlwZSI6bnVsbCwidGllciI6IjEwUGVyTWluIiwibmFtZSI6InNwbHAtYXBwLWNvbnN1bWVyIiwiaWQiOjExMCwidXVpZCI6IjgzMGNkNDgwLWIzMzctNGNhYS05MGUzLTUzNDY2Y2I4ZTcwZiJ9LCJpc3MiOiJodHRwczpcL1wvbG9jYWxob3N0Ojk0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJVbmxpbWl0ZWQiOnsidGllclF1b3RhVHlwZSI6InJlcXVlc3RDb3VudCIsImdyYXBoUUxNYXhDb21wbGV4aXR5IjowLCJncmFwaFFMTWF4RGVwdGgiOjAsInN0b3BPblF1b3RhUmVhY2giOnRydWUsInNwaWtlQXJyZXN0TGltaXQiOjAsInNwaWtlQXJyZXN0VW5pdCI6bnVsbH19LCJrZXl0eXBlIjoiUFJPRFVDVElPTiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6InNhbXBlbC1hcGktcHJvdmlkZXIiLCJjb250ZXh0IjoiXC9zYW1wZWwtYXBpLXByb3ZpZGVyXC8xIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3MDkyMTU0NjQsImp0aSI6ImIxNzIxYmVlLTJhOGEtNDBkMS04NjY1LWU0NzQ5NjQ3ZDQzMiJ9.CXCcGMGwMqWr6khHe37Uib9M8VdAr4fA1s_ojV_QsiDKX0oFUQNXfEVRlAjI6Oqzf9dybicFPNOXtXY_PI_TOzpks40yfMfLGmxdpdJaavyh3ctTydPH7UDE3CMKW6C3CKdshgYoLfZGBpDLGRhOH8ss4QIJ7Qs2z6AHEGrrbpF0Awe4zBexvSArQepKjMgMMSLl0KjRymNjY0iYR9JhcT0YEt7TfRFs8SOJnoaAs3IfITpfXfsyf6rWU4OEUtleEzBL_C9ApkSsdac2oKSM-MtTFNHEpYm2fRnShzNdv1_P6TqvIbbfjdCtjOaID8j1ZhNhzaQ-Lk2habT_D92bsA==",
        },
        body: JSON.stringify({
          enablePage: "true",
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
  }, [optionValue]);

  return (
    <div className="mt-10">
      <div className="mb-8 gap-5 flex">
        {options.map((item: any, key: any) => (
          <button
            key={key}
            className={`h-[50px] px-5 border border-blue-50 rounded-full cursor-pointer hover:bg-opacity-0.9 ${
              optionValue === item.value ? "bg-gray-500" : ""
            }`}
            onClick={() => setOptionValue(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

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
