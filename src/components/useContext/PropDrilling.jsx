function PropDrilling()
{
    const theme = 'dark'; 
    return(

        <div style={{border: '1px solid white', padding: '20px', margin: '20px'}}>
            <h4>Parent</h4>
            <Children1 theme={theme} />
        </div>
    )
}

function Children1({theme})
{
    return(
        <div style={{border: '1px solid white', padding: '20px', margin: '20px'}}>
            <h2>Child 1</h2>
            <Children2 theme={theme} />
        </div>
    )
}
function Children2({theme})
{
    return(
        <div style={{border: '1px solid white', padding: '20px', margin: '20px'}}>
            <h2>Child 2</h2> 
            <h3>Theme : {theme}</h3>
        </div>
    )
}

export default PropDrilling;