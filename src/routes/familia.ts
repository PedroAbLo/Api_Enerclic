import express from 'express'
import * as GrupoFamiliar from '../controller/familiacontroller'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(GrupoFamiliar.ordenarFamiliares())
})


export default router