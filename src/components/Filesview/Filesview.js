import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import FileCard from '../FileCard/FileCard';
import FileItem from '../FileItem/FileItem';
import './Filesview.css';

const Filesview = () => {
    const [files, setFiles] = useState([])

    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])


    return (
        <div className='filesView'> 
            <div className="filesView__row">
               {
                   files.slice(0, 5).map(({id, item}) => (
                       <FileCard name={item.caption} />
                   ))
               }
            </div>

            <div className="filesView__titles">
                <div className="filesView__titles--left">
                    <p>Name</p>
                </div>
                <div className="filesView__titles--right">
                    <p>Last Modigied</p>
                    <p>Files Size</p>
                </div>
            </div>
           {
               files.map(({id, item}) => (
                   <FileItem
                   id={id}
                   caption={item.caption}
                   timestamp={item.timestamp}
                   fileUrl={item.fileUrl}
                   size={item.size}
                   />
               ))
           }

        </div>
    );
};

export default Filesview;