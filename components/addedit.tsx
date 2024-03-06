"use client";
import React from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";

interface Props {}

function Addedit(props: Props) {
  const {} = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Input placeholder="Nama Provinsi" />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" mr={2} onClick={onClose}>
              Batal
            </Button>
            <Button>Simpan</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Addedit;
