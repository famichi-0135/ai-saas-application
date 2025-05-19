import { $Enums } from '@prisma/client'
import React from 'react'

type props = {
  email : string,
  subscription : $Enums.SubscriptionStatus,
  nextBilingData : Date

}

const ProfileSection = ({email,subscription,nextBilingData} : props) => {
  
  const day = nextBilingData.toLocaleDateString("ja-JP");

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">プロフィール</h2>
      <div className="grid gap-4 p-4 border-2 rounded-lg">
        <div className="grid gap-1 ">
          <p className="text-sm font-medium">メールアドレス</p>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>

        <div className='grid gap-1'>
          <p className='text-sm font-medium'>現在のプラン</p>
          <p className='text-sm text-muted-foreground'>{subscription}プランを選択</p>
        </div>
        
        <div className='grid gap-1'>
          <p className='text-sm font-medium'>次回の更新日</p>
          <p className='text-sm text-muted-foreground'>{day}</p>
        </div>

      </div>
    </div>
  
)}

export default ProfileSection
