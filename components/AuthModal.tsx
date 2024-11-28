'use client'

import React, { useEffect } from 'react'
import Modal from './Modal'
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeMinimal, ThemeSupa } from '@supabase/auth-ui-shared'
import UseAuthModal from '@/hooks/useAuthModal'

const AuthModal = () => {
  const supabaseCLient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const {onClose, isOpen}  = UseAuthModal();

  const onChange = (open: boolean) => {
    if(!open) {
      onClose();
    }
  }

  useEffect(() => {
    if(session){
      router.refresh();
      onClose();
    }
  }, [router, session, onClose])

  return (
    <Modal title='welcome comrade' description='Login to your account' isOpen={isOpen} onChange={onChange}>
      <Auth 
        supabaseClient={supabaseCLient} 
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#4f46e5',
                brandAccent: '#4338ca',
              },
            },
          },
        }}
        theme='dark'
        providers={['github', 'google']}
        magicLink
      />
    </Modal>

)

}

export default AuthModal
