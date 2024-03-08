"use client";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  Input,
  useToast,
} from "@chakra-ui/react";

interface Props {
  fetchData?: any;
  headers?: any;
  url?: string;
  isOpen?: any;
  onOpen?: any;
  onClose?: any;
  province?: string;
  setProvince?: any;
  rowId?: any;
  setRowId?: any;
}

function Addedit(props: Props) {
  const {
    fetchData,
    headers,
    url,
    isOpen,
    onOpen,
    onClose,
    province,
    setProvince,
    rowId,
    setRowId,
  } = props;
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const postProvince = async () => {
    setLoading(true);
    const newUrl = rowId ? `${url}/province/${rowId}` : `${url}/province`;
    await fetch(newUrl, {
      headers,
      method: rowId ? "PUT" : "POST",
      body: JSON.stringify({
        name: province,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        onClose();
        fetchData();
        setProvince("");
        setRowId(null);

        toast({
          title: "Success",
          description: "Input data successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((err) => {
        setProvince("");
        setLoading(false);
        onClose();
        toast({
          title: "Error",
          description: err?.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

  return (
    <div>
      <Button
        onClick={() => {
          onOpen();
        }}
        colorScheme="teal"
      >
        Tambah Provinsi
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalCloseButton _focus={{ boxShadow: "none" }} />
          <ModalBody>
            <div>
              <div className="text-gray-600 font-semibold">Tambah Provinsi</div>
              <div className="mt-5">
                <Input
                  autoFocus
                  placeholder="Nama Provinsi"
                  name="province"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      postProvince();
                    }
                  }}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" mr={2} onClick={onClose}>
              Batal
            </Button>
            <Button isLoading={loading} onClick={postProvince}>
              Simpan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Addedit;
