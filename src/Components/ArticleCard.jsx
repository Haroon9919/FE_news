const ArticleCard = (props) => {
return(
    <section className="ArticleCard">

    <h3> {props.title} </h3>
<p>{props.author}</p>
<p>{props.topic}</p>
<img src={props.img} alt={props.title}></img>
</section>
)}

export default ArticleCard;
