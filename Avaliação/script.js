function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'As senhas não conferem!';
        return false;
    }
    
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

    errorMessage.style.display = 'none';
    return true;
}
