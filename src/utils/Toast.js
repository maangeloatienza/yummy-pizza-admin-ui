import { toast } from 'react-toastify';

export function Toast(message) {
    return (message.success) ? toast.success(message.message) : toast.error(message.error.message);
}

export function CusToast(message, success) {
    return (success) ? toast.success(message) : toast.error(message);
}