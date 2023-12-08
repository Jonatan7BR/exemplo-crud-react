export const cpfValid = (cpf: string): boolean => {
    if (!/^\d{11}$/.test(cpf) || /^(.)\1+$/.test(cpf)) {
        return false;
    }

    const digits = [...cpf].map(digit => +digit);
    const sum1 = digits.slice(0, 9).map((d, i) => d * (10 - i)).reduce((p, c) => p + c);
    const sum2 = digits.slice(0, 10).map((d, i) => d * (11 - i)).reduce((p, c) => p + c);

    const vd1 = 11 - (sum1 % 11);
    const vd2 = 11 - (sum2 % 11);

    if (vd1 !== digits[10] || vd2 !== digits[11]) {
        return false;
    }
    return true;
};

export const phoneValid = (phone: string): boolean => /^\d{10,11}$/.test(phone);
