import React from 'react'

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <div className='container-fluid col-md-6'>
                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={profile.avatar_url} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{profile.name}</h5>
                                    <p className="card-text">{profile.company}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >);
    }
}

export default Card;