import Character from "../Character"
import Container from "../layout/Container"

function Home(){
    const charMale = '2'
    const charFemale = '180'
    return (
        <Container>
            <Character id={charMale}/>
            <Character id={charFemale}/>
        </Container>
    )
}

export default Home