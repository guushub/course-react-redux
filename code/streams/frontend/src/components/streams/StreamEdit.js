import React, {useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

const StreamEdit = ({match}) => {

    const { id: streamId } = match.params;
    const { stream } = useSelector(state => ({
            stream: state.streams[streamId]
        })
    ) 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStream(streamId));
    }, [dispatch, streamId])

    // eslint-disable-next-line no-undef
    const onSubmit = useCallback(
        (formValues) => {
            dispatch(editStream(streamId, formValues));
        },
        [streamId, dispatch],
    )    

    if(!stream) {
        return <div>Loading stream...</div>
    }

    return (
        <div>
            <h3>Edit stream</h3>
            <StreamForm 
                initialValues={_.pick(stream, 'title', 'description')} 
                onSubmit={onSubmit} />
        </div>
    );
}

export default StreamEdit;