const Description = (props) =>{
    const data = props.data; 
    const detailsList= data.listOfItems.map(item => <details>
        <summary>
            {item.summary}
        </summary>
        {item.content}
    </details>)

    return (
        <div className="desc">
            <div className="grid">
                <h2>
                    {data.title}
                </h2>
            </div>
            <div>
                {detailsList}
            </div>
        </div>
    );
    
}
export default Description;