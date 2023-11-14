import UserClass from './UserClass'

function About() {
  return (
    <div className='m-4 flex items-center flex-col'>
        <h1 className='font-bold text-2xl my-4'>Lets get Information About Me.</h1>
        <UserClass name={"Alok "} location={"Azamgarh"}/>
    </div>
  )
}

export default About