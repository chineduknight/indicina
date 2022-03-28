import { Center } from '@chakra-ui/react'
import LoginGithub from 'react-login-github';
import axios from 'axios'
const UnAuthenticated = () => {
  const onSuccess = async response => {
    const url = "https://9uj0ihoex6.execute-api.eu-west-1.amazonaws.com/dev/auth"
    const data = response;
    try {
      const res = await axios.post(url, data)
      console.log('res:', res)

    } catch (error) {
      console.log('An error occured:', error)
    }
  }
  const onFailure = response => console.error(response);

  return (
    <Center h="100vh">
      <LoginGithub
        clientId="4f262cc9e20d3043da02"
        onSuccess={onSuccess}
        onFailure={onFailure}
        className="github-btn"
        buttonText="Login to Github"
      />
      {/* <Button>Login to Github</Button> */}
    </Center>
  )
}

export default UnAuthenticated