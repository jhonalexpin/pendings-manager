
import PendingCard from '../PendingCard/PendingCard';
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

const Home = () => {

    const [pendings, setPendings] = useState([]);
    const nodeRef = React.useRef(null);

    const getPendings = () => {
        
        let savedPendings = [
            {
                '_id': '1',
                'title' : 'Pending1',
                'priority' : 'High',
                'description' : 'This is the description of pending 1',
                'status' : 'Active'
            },
            {
                '_id': '2',
                'title' : 'Pending2',
                'priority' : 'High',
                'description' : 'This is the description of pending 2',
                'status' : 'Done'
            },
            {
                '_id': '3',
                'title' : 'Pending3',
                'priority' : 'High',
                'description' : 'This is the description of pending 2',
                'status' : 'Deleted'
            }
        ]
        console.log(savedPendings);
        setPendings(savedPendings);
    }

    const showListPendings = () => {
        return pendings.map(pendingObject => {
          return <Draggable key = { pendingObject._id }  nodeRef={nodeRef}>
             <div className='p-2' ref={nodeRef}>
                <PendingCard pending={ pendingObject } />
             </div>
          </Draggable>
        })
      };

    useEffect(() => {
        getPendings();
    }, []);

    return (
        <div>
            {
                pendings.length === 0 ?
                    <div className="center-content">
                        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                        <strong>Loading...</strong>
                    </div>
                : <div className="d-flex flex-row" style={{marginTop: '20px', marginLeft: '30px'}}> 
                    {showListPendings()} 
                </div>
            }
        </div>
    )

}

export default Home;