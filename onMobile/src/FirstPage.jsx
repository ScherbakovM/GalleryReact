import { useState, useEffect } from "react";
import axios from 'axios';

const server = 'http://localhost:4200/animals';

export const FirstPage = () => {

    const [currentId, setCurrentId] = useState(0);
    const [animalsDb, setAnimalsDb] = useState([]);
    const [photoUrl, setPhotoUrl] = useState('');

    useEffect(() => {
        axios
            .get(server)
            .then(data => {
                setAnimalsDb(data.data)
            })
    }, [photoUrl]);

    let listItems = animalsDb.length ? animalsDb.map((animal) => (
        <div
            key={animal.id}
            className="container">
            <img key={animal.id} className="photo" src={animal.url}></img>
        </div>
    )) :
        <div className="containerEmpty">
            Пока еще никто не загружал картинки &#128565;
        </div>

    function returnLastItem(arr) {
        return arr[arr.length - 1];
    }

    function appPic(nextId, photoUrl) {
        axios.post("http://localhost:4200/animals/", { 'id': nextId, 'url': photoUrl })
    }

    const btnFunc = () => {
        let lastItem = returnLastItem(animalsDb)
        let nextId = lastItem.id + 1
        appPic(nextId, photoUrl);
        setPhotoUrl('')
    }

    return (
        <>
            <div className="firstPage">
                <div className="paragraf">Галерея</div>
                <div className="controller">
                    <button
                        onClick={btnFunc}
                        className="btn">push
                    </button>
                    <input
                        id="inputURL"
                        value={photoUrl}
                        onChange={event => setPhotoUrl(event.target.value)}
                        placeholder="add ref on photo"
                        type="text"
                    />
                </div>
                {listItems}
            </div >
        </>
    )
}
