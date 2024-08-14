import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SeeDetail({ isDetailModalOpen, closeDetailModal, detailData }) {
  return (
    <Modal show={isDetailModalOpen} onHide={closeDetailModal}>
      <Modal.Header closeButton>
        <Modal.Title>Detail Barang Masuk</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <strong>Nama Barang:</strong> {detailData?.nama_barang}
        </div>
        <div className="mb-3">
          <strong>Tipe Barang:</strong> {detailData?.tipe_barang}
        </div>
        <div className="mb-3">
          <strong>Keterangan:</strong> {detailData?.keterangan}
        </div>
        <div className="mb-3">
          <strong>Unit Kerja:</strong> {detailData?.work_unit}
        </div>
        <div className="mb-3">
          <strong>Lokasi:</strong> {detailData?.lokasi}
        </div>
        <Link
          to={`/print-qr-code/${detailData?.id}`}
          className="btn btn-primary"
        >
          Print QR Code
        </Link>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeDetailModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SeeDetail;
