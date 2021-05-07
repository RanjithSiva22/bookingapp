import React from 'react';

function Grid(props){
    const {info,cast,crew}=props;
    const {backdrop_path,budget,status,vote_average,original_title}=info;
    // const {name}=cast;
    let name="";
    cast.forEach(obj => {
        name+=obj.name;
        name+=", "
    });
    
    return(
        
        <div class="container" style={{color:"#fff",background:"#838060"}}>
        
        <div class="row justify-content-center align-items-center">

           

            <div class="col-md col-sm-3 border" style={{paddingleft:"30px"}}>
            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} class="img-fluid mx-auto d-block" height="100%" width="100%" alt="interstellar" />
            </div>

            
            
            <div class="col-md col-sm-3 "style={{margin:"10px 10px"}}>
            <h1>{`${original_title}`}</h1>
            <table class="table ">
            <tbody>
                <tr>
                <th scope="row">DIRECTOR</th>
                <td>{`${crew}`}</td>
                
                </tr>
                <tr>
                <th scope="row">VOTE_AVERAGE</th>
                <td>{`${vote_average}`}</td>
                </tr>
                <tr>
                <th scope="row">CAST</th>
                <td>{`${name}`}</td>
                
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