
export default constants = {
    // base_url : "http://hackathon.ejcomp.com.br:5000/",
    base_url : "http://192.168.0.76:5000/",
    socket_base_url : "http://192.168.0.76:5001/",
    no_image: 'data:image/jpg;base64,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',
};