import React, {
	useState,
	useCallback,
	forwardRef,
	useImperativeHandle,
} from 'react';

export interface ModalHandles {
	openModal: () => void;
	closeModal: () => void;
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
	const [visible, setVisible] = useState(true);

	const openModal = useCallback(() => {
		setVisible(true);
	}, []);

	const closeModal = useCallback(() => {
		setVisible(false);
	}, []);

	useImperativeHandle(ref, () => {
		return {
			openModal,
			closeModal,
		};
	});

	if (!visible) {
		return null;
	}

	return (
		<div>
			Modal Aberto
			<button onClick={closeModal}>Fechar modal</button>
		</div>
	);
};

export default forwardRef(Modal);
