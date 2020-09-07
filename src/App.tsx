import React, { useRef, useCallback, FormEvent } from 'react';

import Input from './components/Input';
import Modal, { ModalHandles } from './components/Modal';

function App() {
	const modalRef = useRef<ModalHandles>(null);
	const nameInputRef = useRef<HTMLInputElement>(null);
  
	const handleSubmit = useCallback((e: FormEvent) => {
		e.preventDefault();

		console.log(nameInputRef.current?.value);
  }, []);
  
  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  } ,[])

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<Input name="name" label="Nome completo" ref={nameInputRef} />
				<button type="submit">Enviar</button>
        
        <button onClick={handleOpenModal} >Abrir Modal</button>
			</form>

			<Modal ref={modalRef} />
		</div>
	);
}

export default App;
