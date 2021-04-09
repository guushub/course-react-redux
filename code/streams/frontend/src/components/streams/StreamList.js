import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchStreams } from "../../actions";

const renderCreateButton = (isSignedIn) => {
    if ( !isSignedIn) {
        return null;
    }

    return (
        <div style={{textAlign:"right"}}>
            <Link to="/streams/new" className="ui button primary">
                Create stream
            </Link>
        </div>
    )
}

const renderAdmin = (stream, currentUserId) => {
    if (stream.userId !== currentUserId) {
        return null;
    }
    return (
        <div className="right floated content">
            <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                Edit
            </Link>
            <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                Delete
            </Link>
        </div>
    )

}

const renderList = (streams, currentUserId) => {
    return streams.map(stream => {
        return (
            <div className="item" key={stream.id}>
                <i className="large middle aligned icon camera" />
                <div className="content">
                    {stream.title}
                    <div className="description">{stream.description}</div>
                </div>
                {renderAdmin(stream, currentUserId)}
            </div>
        );
    });
}

const StreamList = () => {
    const { streams, currentUserId, isSignedIn } = useSelector(state => ({
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    })
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStreams());
    }, [dispatch])

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">
                {renderList(streams, currentUserId)}
            </div>
            { renderCreateButton(isSignedIn) }
        </div>
    )
}

export default StreamList;