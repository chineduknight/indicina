import { Center, useBoolean } from '@chakra-ui/react'
import LoginGithub from 'react-login-github';
import axios from 'axios'
import Loader from 'components/Loader';
import toast from 'react-hot-toast';
import { AUTH_USER_KEY, BASE_URL } from 'utils/constant';
const UnAuthenticated = () => {
  const [isLoading, setIsLoading] = useBoolean()
  const onSuccess = async response => {
    console.log('response:', response)
    setIsLoading.on()
    const url = BASE_URL
    const data = response;
    try {
      const res = await axios.post(url, data)
      const accessToken = res.data.data.access_token;
      localStorage.setItem(AUTH_USER_KEY, accessToken);
      window.location.href = "/"
    } catch (error) {
      setIsLoading.off()
      toast.error("An Error Occured")
    }
  }
  const onFailure = () => {
    toast.error("An Error Occured")
  }

  return (
    <Center h="100vh">
      {isLoading ?
        <Loader /> :
        <LoginGithub
          clientId="4f262cc9e20d3043da02"
          onSuccess={onSuccess}
          onFailure={onFailure}
          className="github-btn"
          buttonText="Login to Github"
        />}
    </Center>
  )
}

export default UnAuthenticated