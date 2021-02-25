import React from 'react';

function Grid(props){
    const {info}=props;
    const {backdrop_path,budget,status,vote_average,original_title}=info;
    return(
        
        <div class="container" style={{color:"#fff",background:"#838060"}}>
        
        <div class="row justify-content-center align-items-center">

           

            <div class="col-md col-sm-3 border" style={{paddingleft:"30px"}}>
            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} class="img-fluid mx-auto d-block" height="75%" width="75%" alt="interstellar" />
            </div>

            
            
            <div class="col-md col-sm-3 "style={{margin:"10px 10px"}}>
            <h1>{`${original_title}`}</h1>
            <table class="table ">
            <tbody>
                <tr>
                <th scope="row">DIRECTOR</th>
                <td>Christopher Nolan</td>
                
                </tr>
                <tr>
                <th scope="row">JONOUR</th>
                <td>sci-fict <i class='fas fa-space-shuttle'></i> | Adventure</td>
                
                </tr>
                <tr>
                <th scope="row">IMDb<i class="fas fa-film"></i></th>
                <td>8.6/10</td>
                
                </tr>
                <tr>
                <th scope="row">CAST</th>
                <td>Matthew McConaughey,Anne Hathaway</td>
                
                </tr>
                <tr>
                <th scope="row">BUDGET</th>
                <td>{`${budget}`}</td>
                </tr>
                <tr>
                <th scope="row">STATUS</th>
                <td>{`${status}`}</td>
                </tr>
                <tr>
                <th scope="row">VOTE_AVERAGE</th>
                <td>{`${vote_average}`}</td>
                </tr>
                <tr>
                <th scope="row">Languages</th>
                <td>English,Tamil,Hindi</td>
                
                </tr>
            </tbody>
            </table>
            </div>
        </div>

        

        </div>   

        
            

       
      

    );
}
export default Grid;