import React, {useEffect, useState} from "react";
 import axios from "axios";
<<<<<<< HEAD
import { Container } from "@material-ui/core";
=======
import { Button } from "@material-ui/core";
>>>>>>> d8236f2 (buscador)
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, createTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Like from "./Like";

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


   const Search = (props) => {
     const query = props;
<<<<<<< HEAD
     let [track,setTrack]= useState([])
=======
     const [track,setTrack]= useState("")
>>>>>>> d8236f2 (buscador)
     console.log("Dato que se obtiene del search: ", query);
     const key = 'b50cef7999ab11d9c4dd4bf23f86ed12'

     const classes = useStyles()
     const classesTable = useStylesTable()
  
   const API = () =>{
<<<<<<< HEAD
        const URL = "http://localhost:5000/api/canciones/" + query;
         axios.get(URL)
         .then(res=>{
             console.log("Estos datos provienen del axios: ",res.data)
             setTrack(res.data)
=======
        const URL = 'https://api.musixmatch.com/ws/1.1/track.search';
         axios({
            method: 'get',
            url: URL,
            params: {
               format:'json',
               apikey: key,
               quorum_factor: '1',
               q_track: query,
            }

         })
         .then(res=>{
             console.log("Estos datos provienen del axios: ",res.data.message.body.track_list)
             setTrack(res.data.message.body.track_list)
             console.log("variable tracks:", track)
             setResult(false)
             console.log("re ", result)
>>>>>>> d8236f2 (buscador)
         })
         .catch(error=>{
             console.warn("No quiere funcionar :c ", error)
         })
      }

      useEffect (() => {API()}, [query])
<<<<<<< HEAD


         return(
            <div>
=======
      
      const [result,setResult]=useState(false)
      const resultados = () => {
         setResult(true)
         console.log("re2: ", result)
      }

         return(
            <div>
               <Button variant="contained" onClick= {()=>resultados()}>Ver resultados</Button>
>>>>>>> d8236f2 (buscador)
               <h1>Resultados de la busqueda: </h1>
               <br></br>
               <TableContainer component={Paper}>
                  <Table className={classesTable.table} aria-label="customized table">
                  <TableHead>
                     <TableRow>
                        <StyledTableCell>Favorito</StyledTableCell>
<<<<<<< HEAD
                        <StyledTableCell align="left">Canción</StyledTableCell>
                        <StyledTableCell align="left">Artista</StyledTableCell>
                        <StyledTableCell align="left">Genero</StyledTableCell>
                        <StyledTableCell align="left">Lanzamiento</StyledTableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {track.map ((tracks)=> (
                        <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                        <Like />
                        </StyledTableCell>
                        <StyledTableCell align="left">{tracks.titulo}</StyledTableCell>
                        <StyledTableCell align="left">{tracks.autor}</StyledTableCell>
                        <StyledTableCell align="left">{tracks.genero}</StyledTableCell>
                        <StyledTableCell align="left">{tracks.lanzamiento}</StyledTableCell>
                        </StyledTableRow>
                     ))}
                  </TableBody>
                  </Table>
               </TableContainer>
            
               {/* <Container>
                  {track.map ((element)=>
                  <ul><li>Nombre: {element.track.track_name}</li>Artista: {element.track.artist_name} <br></br>Album: {element.track.album_name}
                  <br></br><br></br></ul>
                  )}
               </Container> */}
            </div>
    )

     }
=======
                        <StyledTableCell align="left">Id</StyledTableCell>
                        <StyledTableCell align="left">Canción</StyledTableCell>
                        <StyledTableCell align="left">Artista</StyledTableCell>
                        <StyledTableCell align="left">Album</StyledTableCell>
                        
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {result? track.map ((tracks)=> (
                        <StyledTableRow key={tracks.track.track_id}>
                        <StyledTableCell component="th" scope="row">
                        <Like />
                        </StyledTableCell>
                        <StyledTableCell align="left">{tracks.track.track_id}</StyledTableCell>
                        <StyledTableCell align="left">{tracks.track.track_name}</StyledTableCell>
                        <StyledTableCell align="left">{tracks.track.artist_name}</StyledTableCell>
                        <StyledTableCell align="left">{tracks.track.album_name}</StyledTableCell>
                        </StyledTableRow>
                     )) : <h6></h6>} 
                  </TableBody>
                  </Table>
               </TableContainer>
            </div>
   )}
>>>>>>> d8236f2 (buscador)
    
         
 

 export default Search