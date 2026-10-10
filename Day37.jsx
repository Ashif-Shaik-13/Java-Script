Modal.jsx
  import React from "react";
function Modal({ isOpen, onClose, title, children}){
if(!isOpen){
return null;
}
return(
<div className="modal">
<div className="modal-content">
<h1>{title}</h1>
{children}
<button onClick={onClose}>Close</button>
</div>
</div>
)
}
export default Modal;

Home.jsx
import { useState } from "react";
import Modal from "../components/Modal";
function Home() {
const [showModal, setShowModal] = useState(false);
return (
<div>
<h1>Home Page</h1>
<button onClick={() => setShowModal(true)}>
Open Home Modal
</button>
<Modal
isOpen={showModal}
onClose={() => setShowModal(false)}
  title="Home Modal"
>
<p>Welcome to the Home Page!</p>
</Modal>
</div>
);
}
export default Home;

About.jsx
import { useState } from "react";
import Modal from "../components/Modal";
function About() {
const [showModal, setShowModal] = useState(false);
return (
<div>
<h1>About Page</h1>
<button onClick={() => setShowModal(true)}>
Open About Modal
</button>
<Modal
isOpen={showModal}
onClose={() => setShowModal(false)}
title="About Modal"
>
<p>This modal is being reused on the About Page!</p>
</Modal>
</div>
);
}
export default About;

  
