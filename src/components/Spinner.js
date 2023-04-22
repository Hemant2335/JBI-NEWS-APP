import React from 'react';
import loading from './loading.gif'
class Spinner extends React.Component {
    render() {
        return <div className='content-center flex justify-center'>
            <img src={loading} alt="Loading" />
        </div>;
    }
}
export default Spinner;