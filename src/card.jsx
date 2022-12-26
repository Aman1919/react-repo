export default function card({carddata}){
return (
    <div className="contanier">
    {
    carddata.map((d, i) => {
     return(   <div className="card" key={d.id}>
        <img src={"https://robohash.org/"+i+"?150x150"} alt="" />
          <p>{d.name}</p>
          <p>{d.email}</p>
          <p>{d.phone}</p>
          <p>
            {d.address.street} {d.address.city}
          </p>
        </div>)
})
      }
      </div>)

}