import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <div className='container-fluid  col-md-6'>
                <form  style={{ margin: '3rem' }}>
                    <div className="mb-3" >
                        <label for="exampleInputEmail1" className="form-label">GitHub User Name</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Card</button>
                </form>
            </div>
        )
    }
}

export default Form;