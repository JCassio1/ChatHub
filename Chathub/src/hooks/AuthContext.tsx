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

type Context = {
  currentUser: User | null
  createAccount: (email: string, password: string) => null | ReturnType<typeof createUserWithEmailAndPassword>
  signInWithFirebase: (email: string, password: string) => null | ReturnType<typeof signInWithEmailAndPassword>
  signInWithGoogle: () => null | ReturnType<typeof signInWithEmailAndPassword>
  logoutWithFirebase: () => null | ReturnType<typeof auth.signOut>
}

export const AuthContext = React.createContext<Context>({
  currentUser: null,
  createAccount: () => null,
  signInWithFirebase: () => null,
  signInWithGoogle: () => null,
  logoutWithFirebase: () => null
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

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
