import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import React from 'react'
import { useState } from 'react'
import { storage } from '../../services/firebase'

export default function VenderMeuCarro() {
    const [imgURL, setImgURL] = useState("")
    const [progress, setProgress] = useState("0")

    const handleUpload = (event) =>  {
        event.preventDefault() //pra não recarregar a página quando clicar em submit

        const file = event.target[0]?.files[0] //pra poder selecionar a imagem do pc

        if(!file) return;

        //salvar imagem no storage do firebase
        const storageRef = ref(storage, `images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            "state_changed",
            
            //para calcular porcentagem de bytes da imagem transferido
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress)
            },

            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setImgURL(url)
                })
            }
        )
    }

    return (
        <div>
            <header className="App-header">
                <form onSubmit={handleUpload}>
                    <input type="file" />
                    <button type="submit">Enviar</button>
                </form>
                <br />
                
                {/* exibir progresso de envio */}
                {!imgURL && <progress value={progress} max="100" />}
                {imgURL && <img src={imgURL} alt="Imagem" width="200"/>}
            </header>
        </div>
    );
}