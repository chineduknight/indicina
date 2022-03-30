import { Box, Text } from '@chakra-ui/react';

const RepoCard = (props: any) => {
  const { repo } = props;
  const { node: currentRepo } = repo;

  const repoDetails = {
    stars: currentRepo?.stargazerCount || 0,
    language: currentRepo?.primaryLanguage?.name || "None",
    licence: currentRepo.licenseInfo?.name || "None",
    lastUpdate: currentRepo.updatedAt
  }

  const { stars, language, licence, lastUpdate } = repoDetails


  return <Box
    bg="#fff"
    boxShadow="0px 6px 58px rgba(196, 203, 214, 0.1)"
    borderRadius="3px"
    p="1.25rem"
    w="42.5rem"
  >
    <Text
      fontWeight="bold"
    > {currentRepo?.name} </Text>
    <Text
      color="#91929E"
      fontSize="0.875rem"
    >{currentRepo?.description} </Text>
    <Text
      color="#91929E"
      fontSize="0.75rem"
      mt="4"
    >
      {stars}  Stars | {language} | {licence} | {lastUpdate}

    </Text>
  </Box>
}
export default RepoCard