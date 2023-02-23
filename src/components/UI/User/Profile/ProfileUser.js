import React from 'react'

const ProfileUser = ({ userName, email, role, avt }) => {
  return (
    <div className="flex mt-[40px]">
      <div className="flex flex-wrap border-solid border-2 border-sky-500 w-[280px]">
        <div className="flex-3">
          <img src={avt} className="w-[100px]" />
        </div>
        <div className="flex-2 text-[12px] inline-block   align-middle">
          <h5>{userName}</h5>
          <p>{role}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileUser
