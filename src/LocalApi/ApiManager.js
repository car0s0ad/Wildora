import { useState } from "react";
import axios from "axios";
import '../styles/ApiManager.css';
import { withStyles, createTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const cancion = {id:1, titulo: "Hola mundillo", autor:"Yo", genero:"js", lanzamiento:2000, urlLetra:"letritas"}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            minWidth: 200,
            fontSize: 15,
        },
    },
}))

const useStylesTable = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const theme = createTheme({
    palette: {
        primary: {
            main: '#f0f4c3',
        }
    },
})

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const ApiManager = () => {

    //const [urlBase, setUrlBase] = useState("")
    //setUrlBase("http://localhost:63850/api/canciones/")
    //setUrlBase("http://localhost:5000/api/canciones")
    const classes = useStyles()
    const classesTable = useStylesTable()
    const [cancionTraida, setCancionTraida] = useState("")

    const clickGuardar = () => {
        //create
            //POST cancion en Lista de canciones
            const urlBase = "http://localhost:5000/api/canciones/"
            axios({
                method: 'post',
                url: urlBase,
                data: {
                    titulo: cancion.titulo,
                    autor: cancion.autor,
                    lanzamiento: cancion.lanzamiento,
                    genero: cancion.genero,
                    urlLetra: cancion.urlLetra
                }
            })
    }

    const clickGet = () => {
        const urlBase = "http://localhost:5000/api/canciones/"
       //get by id
       axios.get(urlBase + 1)
       .then( res => {
           console.log("datos traidos: ", res.data)
           setCancionTraida(res.data)
       }).catch( e => {
           console.log("Error al traer lista de canciones ", e)
       })
    }

    const clickPut = () => {
        //put
        const urlBase = "http://localhost:5000/api/canciones/"
        const id = 5
        const url = urlBase + id 
            //PUT cancion en Lista de canciones
            axios({
                method: 'put',
                url: url,
                data: {
                    id: id,
                    titulo: cancion.titulo,
                    autor: cancion.autor,
                    lanzamiento: cancion.lanzamiento,
                    genero: cancion.genero,
                    urlLetra: cancion.urlLetra
                }
            })
    }

    const clickDelete = () => {
        //delete
        const urlBase = "http://localhost:5000/api/canciones/"
        const _id = 3

        const urlD = urlBase + _id
        axios.delete({
            method: 'delete',
            url: urlD
        }).then(() => true)
    }

    const clickGetAll = () => {
        const urlBase = "http://localhost:5000/api/canciones/"
        //get all
        axios.get(urlBase)
        .then( res => {
            console.log("datos traidos: ", res.data)
            setCancionTraida(res.data)
        }).catch( e => {
            console.log("Error al traer lista de canciones ", e)
        })
    }

    return (
        <div>
            <p className="titulo">Seleccione una opcion para interactuar con la base de datos</p>

            <nav className={classes.root}>
                <ThemeProvider theme={theme}>
                    <br></br>
           
      <br></br>
    <Button variant="outlined" onClick={ ()=> clickGuardar()} color="primary">
        Guardar
      </Button>
    <Button variant="outlined" onClick={ ()=> clickGet()} color="primary">
        Obtener una cancion por Id
      </Button>
    <Button variant="outlined" onClick={ ()=> clickGetAll()} color="primary">
        Obtener todas las canciones
      </Button>
    <Button variant="outlined" onClick={ ()=> clickPut()} color="primary">
        Editar
      </Button>
    <Button variant="outlined" onClick={ ()=> clickDelete()} color="primary">
        Borrar
      </Button>

      <br></br>
      <br></br>

      </ThemeProvider>
            </nav>

            <TableContainer component={Paper}>
      <Table className={classesTable.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Titulo</StyledTableCell>
            <StyledTableCell align="right">Genero</StyledTableCell>
            <StyledTableCell align="right">Autor</StyledTableCell>
            <StyledTableCell align="right">Lanzamiento</StyledTableCell>
            <StyledTableCell align="right">Letra</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { cancionTraida ? cancionTraida.map((row) => (
            <StyledTableRow key={row.titulo}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.titulo}</StyledTableCell>
              <StyledTableCell align="right">{row.genero}</StyledTableCell>
              <StyledTableCell align="right">{row.autor}</StyledTableCell>
              <StyledTableCell align="right">{row.lanzamiento}</StyledTableCell>
              <StyledTableCell align="right">{row.urlLetra}</StyledTableCell>
            </StyledTableRow>
          )) : <h1></h1>}
          
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    )
}

export default ApiManager;