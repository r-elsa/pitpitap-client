
const uploadPhoto = (file, callback) => ({
    type: 'API',
    payload: {
        url: '/users/me/upload_link',
        method: 'POST',
        data: {
            filename: file.name
        },
        onSuccessActions: [(url) => putPhotoS3(url, file, callback)]
    }
})

const putPhotoS3 = (url, file, callback) => ({
    type: 'API',
    payload: {
        baseURL: url.data.url,
        url: '',
        method: 'PUT',
        data: file,
        afterSuccess: () => callback(url.data.key)
    }
})

export const userActions = {
    uploadPhoto
};