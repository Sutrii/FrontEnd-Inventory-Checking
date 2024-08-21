import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ViewInventoryItem({
  isDetailModalOpen,
  closeDetailModal,
  detailData,
}) {
  return (
    <Modal
      show={isDetailModalOpen}
      onHide={closeDetailModal}
      size="md" // Ukuran modal sedang (medium) untuk tidak terlalu lebar
      scrollable
      dialogClassName="modal-dialog-centered" // Memastikan modal berada di tengah vertikal
    >
      <Modal.Header>
        <Modal.Title>Detail Barang</Modal.Title>
        <Button
          variant="link"
          onClick={closeDetailModal}
          style={{ visibility: "hidden" }}
        >
          &times;
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3 text-center">
          {/* Menampilkan gambar di atas informasi barang */}
          {detailData?.picture && (
            <img
              src={`http://localhost:8000/storage/pictures/${detailData.picture}`}
              alt={detailData.nama_barang}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="namaBarang" className="form-label">
              Nama Barang
            </label>
            <input
              type="text"
              className="form-control"
              id="namaBarang"
              value={detailData?.nama_barang || ""}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tipeBarang" className="form-label">
              Tipe Barang
            </label>
            <input
              type="text"
              className="form-control"
              id="tipeBarang"
              value={detailData?.tipe_barang || ""}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="keterangan" className="form-label">
              Keterangan
            </label>
            <textarea
              className="form-control"
              id="keterangan"
              rows="3"
              value={detailData?.keterangan || ""}
              readOnly
              style={{ resize: "none" }} // Menonaktifkan resize
            />
          </div>
          <div className="mb-3">
            <label htmlFor="unitKerja" className="form-label">
              Unit Kerja
            </label>
            <input
              type="text"
              className="form-control"
              id="unitKerja"
              value={detailData?.work_unit || ""}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lokasi" className="form-label">
              Lokasi
            </label>
            <input
              type="text"
              className="form-control"
              id="lokasi"
              value={detailData?.lokasi || ""}
              readOnly
            />
          </div>
          <Modal.Footer>
            <div className="d-flex justify-content-end gap-2">
              <Link
                to={`/print-qr-code/${detailData?.id}`}
                className="btn bg-[#3498DB] hover:bg-[#2980B9] text-white"
              >
                Print QR Code
              </Link>
              <Button variant="danger" onClick={closeDetailModal}>
                Close
              </Button>
            </div>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ViewInventoryItem;
