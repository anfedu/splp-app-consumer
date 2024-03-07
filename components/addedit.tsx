"use client";
import React, { useState } from "react";
import {
  Button,
  useDisclosure,
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
}

function Addedit(props: Props) {
  const { fetchData, headers } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const url = "http://localhost:8080/province";
  const toast = useToast();
  const [province, setProvince] = useState("");

  const [loading, setLoading] = useState(false);
  const postProvince = async () => {
    setLoading(true);
    await fetch(url, {
      headers,
      method: "POST",
      body: JSON.stringify({
        name: province,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        onClose();
        fetchData();
        console.log(res, "<-- iki res ne ");
      })
      .catch((err) => {
        setLoading(false);
        onClose();
        toast({
          title: "Error",
          description: err?.message,
          status: "error",
          duration: 9000,
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
          <ModalCloseButton />
          <ModalBody>
            <div>
              <div className="text-gray-600 font-semibold">Tambah Provinsi</div>
              <div className="mt-5">
                <Input
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
