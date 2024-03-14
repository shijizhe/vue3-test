export function downloadFile(resp) {
    const tmp = 'filename='
    const contentDisposition = decodeURIComponent(resp.headers['content-disposition'])
    const fileName = contentDisposition.substring(contentDisposition.indexOf(tmp) + tmp.length)
    const contentType = resp.headers['content-type']
    const blob = new Blob([resp.data], {
        type: contentType
    })
    let a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = fileName
    a.target = '_blank'
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    a.remove()
}

