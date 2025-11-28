import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'

const Login = () => {
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/')
      }
    })
  }, [])

  return (
    <Wrapper>
      {/* Left Image Section - Desktop only */}
      <ImageSection>
        <Overlay />
        <LeftImage
          src="https://media.istockphoto.com/id/1311247904/photo/uber-car-waiting-for-customer.jpg?s=612x612&w=0&k=20&c=jGyIr3O7N6n92Lb8DjzjAiQ0ApOeYOalvtO3012a2Zw="
          alt="Uber-style background"
        />
      </ImageSection>

      {/* Right Login Card */}
      <CardSection>
        <Card>
          <Logo src="https://i.ibb.co/n6LWQM4/Post.png" />
          <Title>Welcome Back</Title>
          <Subtitle>Sign in to access your account</Subtitle>
          <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
          <SigninButton
            onClick={() => signInWithPopup(auth, provider)}
          >
            <i className="fa fa-google mr-2"></i> Sign in with Google
          </SigninButton>
          <Disclaimer>
            By signing in, you agree to our{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>.
          </Disclaimer>
        </Card>
      </CardSection>
    </Wrapper>
  )
}

export default Login

/* =========================
   Styled Components
========================= */

const Wrapper = tw.div`
flex flex-col md:flex-row h-screen w-screen
bg-gray-100
`

const ImageSection = tw.div`
hidden md:flex flex-1 relative overflow-hidden
`

const LeftImage = tw.img`
w-full h-full object-cover
`

const Overlay = tw.div`
absolute inset-0 bg-gradient-to-br from-cyan-600/60 to-blue-500/60
`

const CardSection = tw.div`
flex flex-1 justify-center items-center p-6
`

const Card = tw.div`
flex flex-col items-center bg-white/80 backdrop-blur-md rounded-3xl
shadow-2xl w-full max-w-md p-8 md:p-12 space-y-6
`

const Logo = tw.img`
h-16 w-auto mb-4
`

const Title = tw.h1`
text-3xl md:text-4xl font-bold text-gray-800 text-center
`

const Subtitle = tw.p`
text-gray-600 text-center text-sm md:text-base
`

const HeadImage = tw.img`
w-full max-w-sm object-contain
`

const SigninButton = tw.button`
flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500
hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl
py-3 px-6 w-full transition transform hover:scale-105 shadow-lg
`

const Disclaimer = tw.p`
text-gray-500 text-xs text-center mt-4
`
