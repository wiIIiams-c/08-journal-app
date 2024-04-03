import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote, startSaveNote, startUploadingFiles } from "../../store/journal"
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2'

export const NoteView = () => {
    const dispatch = useDispatch()
    const {active:note, messageSaved, isSaving} = useSelector(state => state.journal)
    const {body, title, date, onInputChange, formState} = useForm(note)
    
    const dateString = useMemo(() => {
        const noteDate = new Date(date)

        return noteDate.toUTCString()
    }, [date])

    const fileInputRef = useRef()

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])
    
    useEffect(() => {
        if(messageSaved.length > 0){
            Swal.fire('Nota Actualizada', messageSaved, 'success')
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return

        dispatch(startUploadingFiles(target.files))
    }

    return (
        <Grid container 
            direction={'row'} 
            justifyContent={'space-between'} 
            alignItems={'center'} 
            sx={{mb: 1}} 
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item>
                <Typography fontSize={39} fonstweight={'ligth'}>
                    {dateString}
                </Typography>
            </Grid>

            <Grid item>
                <input type="file" multiple onChange={onFileInputChange} style={{display: 'none'}} ref={fileInputRef}/>

                <IconButton
                    color='primary'
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>

                <Button color="primary" sx={{padding: 2}} onClick={onSaveNote} disabled={isSaving}>
                    <SaveOutlined sx={{fontSize: 30, mr: 1}} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx={{border: 'none', mb: 1}}
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Que paso hoy?"
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <ImageGallery />
        </Grid>
    )
}
