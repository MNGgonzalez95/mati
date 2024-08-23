import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { actions as ModalAction } from "../../../store/modal";
import ProductMediaOne from '../product-one';
import ProductDetailOne from '../../product/details/product-detail-one';


const customStyles = {
    content: {
        position: 'relative',
        maxWidth: '930px',
        width: '100%',
        padding: '3rem',
        marginLeft: '2rem',
        marginRight: '2rem',
        overflow: 'hidden auto',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        maxHeight: 'calc(100vh - 4rem)'
    }
};

function QuickModal(props) {
    const { product, modalShow, hideQuickView } = props;

    function closeModal() {
        if (!document.querySelector('.open-modal')) return;
        document.querySelector('.open-modal').classList.add("close-modal");

        setTimeout(() => {
            hideQuickView();
        }, 350);
    }

    // if (!product) {
    //     return <div>No hay datos del producto disponibles.</div>;
    // }

    return (
        <>
            <Modal
                isOpen={modalShow}
                onRequestClose={closeModal}
                className="product-single-container product-single-default product-quick-view custom-scrollbar mb-0"
                overlayClassName="ajax-overlay open-modal"
                closeTimeoutMS={100}
                style={customStyles}
            >
                <div className={`row skeleton-body skel-shop-products ${modalShow ? 'loaded' : ''}`}>
                    <ProductMediaOne product={product} parent=".product-quick-view" adClass="col-md-6 mb-md-0" />
                    <div className="col-md-6">
                        <ProductDetailOne product={product} parent=".product-quick-view" isNav={false} adClass="mb-0" />
                    </div>
                </div>
                <button title="Cerrar (Esc)" type="button" className="mfp-close" onClick={closeModal}>×</button>
            </Modal>
        </>
    );
}


const mapStateToProps = (state) => {
    return {
        slug: state.modal.single,
        modalShow: state.modal.quickShow,
        product: state.modal.product 
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideQuickView: () => dispatch(ModalAction.hideQuickView())
    };
}

export default QuickModal;
