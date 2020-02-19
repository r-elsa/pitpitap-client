export const resizeWithCanvas = (photo, callback) => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {

        let img = new Image();

        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");

        img.onload = function () {

            const MAX_WIDTH = 1000;
            const MAX_HEIGHT = 1000;
            const RESIZE_BREAKPOINT = 1000;
            let width = img.width;
            let height = img.height;

            if (width > RESIZE_BREAKPOINT) {
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
            }
            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(img, 0, 0, width, height);

            return canvas.toBlob(callback)
        };

        img.src = URL.createObjectURL(photo);
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
};