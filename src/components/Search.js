import React, {useEffect, useState} from "react";
 import axios from "axios";
import { Button } from "@material-ui/core";
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
     const [track,setTrack]= useState("")
     console.log("Dato que se obtiene del search: ", query);
     const key = 'b50cef7999ab11d9c4dd4bf23f86ed12'

     const classes = useStyles()
     const classesTable = useStylesTable()
  
   const API = () =>{
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
             
             console.log("re ", result)
         })
         .catch(error=>{
             console.warn("No quiere funcionar :c ", error)
         })
      }

      useEffect (() => {API()}, [query])
      
      const [result,setResult]=useState(false)
      const resultados = () => {
         setResult(true)
         console.log("re2: ", result)
      }

         return(
            <div>
               <Button variant="contained" onClick= {()=>resultados()}>Ver resultados</Button>
               <h1>Resultados de la busqueda: </h1>
               <br></br>
               <TableContainer component={Paper}>
                  <Table className={classesTable.table} aria-label="customized table">
                  <TableHead>
                     <TableRow>
                        <StyledTableCell>Favorito</StyledTableCell>
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
    
         
 

 export default Search