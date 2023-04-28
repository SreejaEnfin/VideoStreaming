import React from 'react'

const Invite = () => {
    return (
        <div className="br-invite-user-wrapper active" id="invite">
            <form className="br-form form-inline flex-nowrap" action="#">
                <input className="form-control" type="text" value="https://www.abced.com/inviite.php?sadad"/>
                <button className="btn br-btn-copy" type="submit">Copy</button>
            </form>
        </div>
    )
}

export default Invite
