function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    // Critérios de validação da senha
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Verifica se as senhas correspondem
    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'As senhas não conferem!';
        return false;
    }
    
    // Verifica os critérios de validação da senha
    if (password.length < minLength) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = `A senha deve ter pelo menos ${minLength} caracteres.`;
        return false;
    }
    if (!hasUpperCase) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'A senha deve conter pelo menos uma letra maiúscula.';
        return false;
    }
    if (!hasLowerCase) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'A senha deve conter pelo menos uma letra minúscula.';
        return false;
    }
    if (!hasNumbers) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'A senha deve conter pelo menos um número.';
        return false;
    }
    if (!hasSpecialChar) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'A senha deve conter pelo menos um caractere especial.';
        return false;
    }

    // Se todas as validações passarem
    errorMessage.style.display = 'none';
    return true;
}
