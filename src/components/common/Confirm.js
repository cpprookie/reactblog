import React from 'react'
import axios from '../../config'

const Confirm = props => {
  if (!props.displayFlag) {
    return null
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          Are you sure to exit?
        </div>
        <div className="modal-footer">
          <div className="modal-footer-buttons">
            <button className="modal-footer-no"
              onClick={props.closeSignoutDialog}>No</button>
            <button className="modal-footer-yes"
              onClick={()=>{
                axios.post(`/user/${props.user.userID}/signout`)
                  .then((res)=> {
                    if (res.data.success) {
                      props.exit()  
                      props.closeSignoutDialog()
                    }
                  })
              }}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Confirm