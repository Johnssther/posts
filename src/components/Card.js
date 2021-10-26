import React, {useState} from 'react';
import Modal from "../components/Modal";
import Comments from "../components/Comments";

const Card = ({id_post, image, likes, tags, owner, text, publishDate}) => {
    const [estadoModal1, setEstado1] = useState(false);
    const [estadoModal2, setEstado2] = useState(false);

    return (
        <>
            <div className="card">
                <div className="card-header grid">
                    <div className="owner">
                        <div className="img">
                            <img src={owner.picture} alt={owner.lastName}></img>
                        </div>
                        <p className="name-owner">{owner.firstName} {owner.lastName}</p>
                        <p>{likes} Likes</p>
                    </div>
                    <div className="tags">
                        {
                            tags.map((item, index) => {
                                return(
                                    <span key={index} className="span span-danger text-white">{item}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="card-body">
                    <img src={image} alt={owner.lastName}></img>
                    <p>{new Date(publishDate).toDateString()}</p>
                    <p>{text}</p>
                </div>
                <div className="card-footer">
                    <button className="btn" onClick={() => setEstado1(!estadoModal1)}>Comentarios</button>
                    <a onClick={() => setEstado2(!estadoModal2)}>Usuario</a>
                </div>
            </div>
             <Modal
				estado={estadoModal1}
				cambiarEstado={setEstado1}
				titulo="Comentarios del post!"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
			>
				<div className="comments-list">
                    <Comments 
                        owner={owner}
                        id={id_post}
                    />
					<button className="btn" onClick={() => setEstado1(!estadoModal1)}>Aceptar</button>
				</div>
			</Modal>
            <Modal
				estado={estadoModal2}
				cambiarEstado={setEstado2}
				titulo="Perfil del usuario"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
			>
				<div className="comments-list">
                    <p>Id: {owner.id}</p>
                    <p>Nombre: {owner.firstName} - {owner.lastName}</p>
                    
					<button className="btn" onClick={() => setEstado2(!estadoModal2)}>Aceptar</button>
				</div>
			</Modal>
        </>
    );
}

export default Card;
