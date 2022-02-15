import Swal from 'sweetalert2';

export const AlertError = (error) => {
    Swal.fire({
        position: 'center',
        icon: 'error',
        showConfirmButton: false,
        title: 'Hubo un error',
        text: `${error}`,
        timer: 2000
        });
}

export const AlertOK = (client, orderId) => {
    Swal.fire({
        title: `Gracias, ${client}`,
        text: `Tu compra fue exitosa. ID de orden: ${orderId}`,
        icon: 'success',
        width: 600,
        padding: '1em',
        color: ' #bdb76b',
        background: 'white',
        })
}

export const AlertItem = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        showConfirmButton: false,
        title: 'Muy bien',
        text: 'Se añadió el producto a tu bolsa.',
        timer: 2000
        })
};

