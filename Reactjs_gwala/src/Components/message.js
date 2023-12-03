import Swal from 'sweetalert2';

const showAlert = async (type) => {
    if (type === true) {
        Swal.fire({
            title: 'Saved succesfully',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }   
    else {
        Swal.fire({
            icon: 'question',
            title: 'Your Email Already used',
            text: 'Use another Email',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
<div className="flex items-center justify-center">
    <button type="button" className="className="btn btn-primary" onClick={() => showAlert(1)}>
    Sign up
    </button>
</div>
</div>