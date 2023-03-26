import React, { useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  User,
  UserCredential,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth, googleProvider } from '../config/firebase'
import { Props } from '../Model/data-structures'

export const AuthContext = React.createContext({
  currentUser: null as User | null | undefined,
  createAccount: (email: string, password: string) => Promise<UserCredential>,
  signInWithFirebase: (email: string, password: string) => Promise<UserCredential>,
  signInWithGoogle: () => Promise<UserCredential>,
  logoutWithFirebase: () => Promise<void>
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>()

  const createAccount = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInWithFirebase = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const logoutWithFirebase = () => {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    createAccount,
    signInWithGoogle,
    signInWithFirebase,
    logoutWithFirebase
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
