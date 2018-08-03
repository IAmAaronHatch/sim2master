
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

    addHouse: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const { name, address, city, state, zipcode } = req.body

        db.add_house([name, address, city, state, zipcode])
            .then(results => {
                res.status(200).send(results)
            })
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops! Something went wrong!' })
                console.log(err)
            })
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params

        db.remove_house([id])
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

}
