import React from 'react'
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f8f8f8;
    font-family: sans-serif;
    background-color: #242424;
    width: 100%;
`;
const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
`;
export default function Profile() {
  return (
    <ProfileContainer>
      <AvatarContainer>
        <Avatar alt="Foto de Isadora Araújo" src="https://avatars.githubusercontent.com/u/93020656?v=4" sx={{ width: 50, height: 50 }} />
        <h2>Isadora Araújo</h2>
        <h3>Software Engineer</h3>
      </AvatarContainer>
    </ProfileContainer>
  )
}