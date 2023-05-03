import React, { useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  User,
  UserCredential,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { auth, googleProvider } from '../config/firebase'
import { Props } from '../Model/data-structures'
import LoadingScreen from '../components/ui/LoadingScreen'
import { getRandomAvatarUrl } from '../utils/helpers'

type Context = {
  currentUser: User | null
  createAccount: (
    email: string,
    password: string,
    displayName: string
  ) => null | ReturnType<typeof createUserWithEmailAndPassword>
  signInWithFirebase: (email: string, password: string) => null | ReturnType<typeof signInWithEmailAndPassword>
  signInWithGoogle: () => null | ReturnType<typeof signInWithEmailAndPassword>
  logoutWithFirebase: () => null | ReturnType<typeof auth.signOut>
  updateProfileWithDisplayName: (user: User | null, displayName: string) => null | ReturnType<typeof updateProfile>
}

export const AuthContext = React.createContext<Context>({
  currentUser: null,
  createAccount: () => null,
  signInWithFirebase: () => null,
  signInWithGoogle: () => null,
  logoutWithFirebase: () => null,
  updateProfileWithDisplayName: () => null
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const createAccount = async (email: string, password: string, displayName: string) => {
    return createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
      const user = userCredential.user
      return updateProfileWithDisplayName(user, displayName).then(() => {
        return userCredential
      })
    })
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

  const updateProfileWithDisplayName = (user: User | null, displayName: string) => {
    return updateProfile(user!, {
      displayName: displayName,
      photoURL: getRandomAvatarUrl()
    })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false) // set loading to false once user is defined
    })

    return unsubscribe
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  const value = {
    currentUser,
    createAccount,
    signInWithGoogle,
    signInWithFirebase,
    logoutWithFirebase,
    updateProfileWithDisplayName
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
