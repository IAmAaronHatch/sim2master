
module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')

        db.get_houses()
            .then(results => {
                res.status(200).send(results)
            }) 
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops! Something went wrong!' })
                console.log(err)
            })
    },

    // : (req, res) => {
    //     const db = req.app.get('db')



    //         .then()
    //         .catch(err => {
    //             res.status(500).send({ errorMessage: 'Oops! Something went wrong!' })
    //             console.log(err)
    //         })
    // },

    // : (req, res) => {
    //     const db = req.app.get('db')



    //         .then()
    //         .catch(err => {
    //             res.status(500).send({ errorMessage: 'Oops! Something went wrong!' })
    //             console.log(err)
    //         })
    // },

    // : (req, res) => {
    //     const db = req.app.get('db')



    //         .then()
    //         .catch(err => {
    //             res.status(500).send({ errorMessage: 'Oops! Something went wrong!' })
    //             console.log(err)
    //         })
    // },

}
