"use client";
import React, { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { IconButton, useToast } from "@chakra-ui/react";
import Addedit from "@/components/addedit";

interface Props {}
interface ProvinceInterface {}

function Consumer(props: Props) {
  const {} = props;

  const options = [
    { label: "Provinsi", value: "province/datatable" },
    // { label: "Kabupaten", value: "regency/datatable" },
    // { label: "Kecamatan", value: "district/datatable" },
    // { label: "Kelurahan", value: "village/datatable" },
  ];
  const toast = useToast();

  const [prefix, setPrefix] = useState("province/datatable");

  // const url = "https://localhost:8243/sampel-api-provider/1";
  const url = "http://localhost:8080";
  const headers: any = {
    "Content-Type": "application/json",
    "Internal-Key":
      "eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhZG1pbkBjYXJib24uc3VwZXIiLCJpc3MiOiJodHRwczpcL1wvbG9jYWxob3N0Ojk0NDNcL29hdXRoMlwvdG9rZW4iLCJrZXl0eXBlIjoiUFJPRFVDVElPTiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjpudWxsLCJuYW1lIjoic2FtcGVsLWFwaS1wcm92aWRlciIsImNvbnRleHQiOiJcL3NhbXBlbC1hcGktcHJvdmlkZXJcLzEiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxIiwic3Vic2NyaXB0aW9uVGllciI6bnVsbH1dLCJleHAiOjE3MDk3Mzg3NDUsInRva2VuX3R5cGUiOiJJbnRlcm5hbEtleSIsImlhdCI6MTcwOTY3ODc0NSwianRpIjoiN2EzOWVkN2ItOGUwNi00ZWRhLTg4MGQtYWE3YjViNzZhNTJjIn0.foj1SFduvgxUHuRIOiuwIw5-ejoV1Ybx1BQNrDSaCWFs48yOtMLjrTbso-HYZT70DHx5G8_kz-1WOKJFYsMkjXONFt4ZLZ-CQhlGfmTT4WhxoBZDPcArkzb9BlRc58qTvabKdVzcoj06-L4qOwizq4Siks_ok5rGPfWtuSLQ4uTnjlCaQm8fKPH-uS0OJVaTH4Lo6JM1pMcOXXcUys9nHxWSeaUXIgDGmlUHrVrl7GGeyL7mWmw8iWW6qeTadJ9Ier-cwzlAY5pSGGb3s-2VbknSRHhH72uYd4wsCwzq8h9Lq-G3kC1GYl7H-lDxvfmM7_1hj0fvZDN5wwKAUEnOLg",
    apikey:
      "eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhZG1pbkBjYXJib24uc3VwZXIiLCJpc3MiOiJodHRwczpcL1wvbG9jYWxob3N0Ojk0NDNcL29hdXRoMlwvdG9rZW4iLCJrZXl0eXBlIjoiUFJPRFVDVElPTiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjpudWxsLCJuYW1lIjoic2FtcGVsLWFwaS1wcm92aWRlciIsImNvbnRleHQiOiJcL3NhbXBlbC1hcGktcHJvdmlkZXJcLzEiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxIiwic3Vic2NyaXB0aW9uVGllciI6bnVsbH1dLCJleHAiOjE3MDk3Mzg3NDUsInRva2VuX3R5cGUiOiJJbnRlcm5hbEtleSIsImlhdCI6MTcwOTY3ODc0NSwianRpIjoiN2EzOWVkN2ItOGUwNi00ZWRhLTg4MGQtYWE3YjViNzZhNTJjIn0.foj1SFduvgxUHuRIOiuwIw5-ejoV1Ybx1BQNrDSaCWFs48yOtMLjrTbso-HYZT70DHx5G8_kz-1WOKJFYsMkjXONFt4ZLZ-CQhlGfmTT4WhxoBZDPcArkzb9BlRc58qTvabKdVzcoj06-L4qOwizq4Siks_ok5rGPfWtuSLQ4uTnjlCaQm8fKPH-uS0OJVaTH4Lo6JM1pMcOXXcUys9nHxWSeaUXIgDGmlUHrVrl7GGeyL7mWmw8iWW6qeTadJ9Ier-cwzlAY5pSGGb3s-2VbknSRHhH72uYd4wsCwzq8h9Lq-G3kC1GYl7H-lDxvfmM7_1hj0fvZDN5wwKAUEnOLg",
  };

  const body = JSON.stringify({
    enablePage: false,
    page: 0,
    limit: 1000,
  });

  const [status, setStatus] = useState("loading");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    setStatus("loading");
    try {
      await fetch(`${url}/${prefix}`, {
        method: "POST",
        headers,
        body,
      })
        .then((res) => res.json())
        .then((res) => {
          setStatus("success");
          toast({
            title: "Success",
            description: "Get data successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
          setData(res?.data?.data);
        })
        .catch((err) => {
          // console.log(err, "<-- iki err");
          setStatus("error");
          toast({
            title: "Error",
            description: err.message,
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        });
    } catch (error) {
      setStatus("done");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [loadingDelete, setLoadingDelete] = useState(null);
  const deleteData = async (id: any) => {
    try {
      setLoadingDelete(id);
      await fetch(`${url}/province/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((res) => {
          setLoadingDelete(null);
          if (res?.mesage === "Success") {
            toast({
              title: "Success",
              description: "Delete data successfully",
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "top-right",
            });
            fetchData();
          } else {
            toast({
              title: "Error",
              description: "Delete data failed",
              status: "error",
              duration: 9000,
              isClosable: true,
              position: "top-right",
            });
          }
        })
        .catch((err) => {
          setLoadingDelete(null);
          toast({
            title: "Error",
            description: err?.message,
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        });
    } catch (error) {}
  };

  return (
    <div className="mt-10">
      <div className="mb-8 gap-5 flex justify-between">
        {options.map((item: any, key: any) => (
          <button
            key={key}
            className={`h-[50px] rounded-lg cursor-pointer hover:bg-opacity-0.9 text-xl font-semibold text-gray-600 ${
              prefix === item.value ? "" : ""
            }`}
            onClick={() => setPrefix(item.value)}
          >
            {item.label}
          </button>
        ))}

        <Addedit fetchData={fetchData} headers={headers} />
      </div>

      {status === "loading" ? (
        "Loading ..."
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
            {data?.map((item: any, key: any) => (
              <div
                key={key}
                className="bg-blue-100 p-5 rounded-lg flex justify-between items-center"
              >
                <div className="font-normal">{item?.name}</div>

                <IconButton
                  aria-label="trash"
                  variant="ghost"
                  isLoading={item.id === loadingDelete}
                  onClick={() => deleteData(item.id)}
                >
                  <TrashIcon className="w-5 text-red-400 cursor-pointer hover:bg-opacity-0.7" />
                </IconButton>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Consumer;
