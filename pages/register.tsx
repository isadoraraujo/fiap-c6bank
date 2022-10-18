import React, { useState, useEffect, FormEvent } from 'react'
import {
    Typography, Container, CssBaseline, Box, TextField,
    Checkbox, Button, FormControlLabel
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Copyright } from '../components/utils/Copyright';
import Snackbar from '../components/utils/Snackbar';

const theme = createTheme();

export default function RegisterPage() {
    const [empresa, setEmpresa] = useState<string>('');
    const [nome, setNome] = useState('');
    const [contador, setContador] = useState<number>(5);
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>('');
    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {

        if (password && password.length < 6) {
            setError(true);
            setErrorMessage('A senha deve ter no mínimo 6 caracteres');
        } else if (password) {
            setError(false);
            setErrorMessage('');
            setOpen(true);
        }

    }, [password]);

    // useEffect(() => {

    //   if(password.value() != passwordAuthenticator.value()) {
    //     setError(true);
    //     setErrorMessage('As senhas devem ser iguais')
    //   }
    //   else {
    //     setError(false);
    //     setErrorMessage('');
    //     setOpen(true);
    // }

    // })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        setEmail(data.get('email'));
        setPassword(data.get('password'));
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography component="h1" variant="h5">
                        Cadastro
                    </Typography>
    
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField margin="normal" required fullWidth  autoFocus type='text' label='Digite seu nome completo' />
                        <TextField margin="normal" required fullWidth id="email" label="Digite o e-mail" name="email" autoComplete="email" autoFocus />
                        <TextField margin="normal" required fullWidth id="password" type="password" label="Digite a senha" name="password" autoComplete="current-password" autoFocus />
                        <TextField margin="normal" required fullWidth id="passwordAuthenticator" type="password" label="Digite a senha" name="password" autoComplete="current-password" autoFocus />

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Entrar</Button>

                        {error && <Typography color="error">{errorMessage}</Typography>}
                    </Box>
                </Box>

                <Copyright site="www.avanade.com.br" sx={{ mt: 8, mb: 4 }} />
                {open && <Snackbar open={open} hide={6} message='Usuário autenticado com sucesso...Aguarde...' />}
            </Container>
        </ThemeProvider>
    )
}