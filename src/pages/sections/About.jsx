
const About = () => {
  return (
    <div className="bg-gray-200 flex justify-center h-screen items-center">
      <p className=" w-1/2 font-semibold text-gray-700">
        Hi, I am Sylvain Ntirenganya a passionate developer and aspiring changemaker!
        I specialize in building impactful web applications using technologies like
        React and Tailwind CSS. My journey began in Mahama refugee camp, where I discovered coding and its power to transform lives.
      </p>
      <div className="w-full md:w-52 flex justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-1 rounded-full h-52 ">
        <img
          src="/Sylvain00.jpg"
          alt="Sylvain Ntirenganya"
          className="rounded-full shadow-lg w-48 h-48 object-cover  border-6 border-purple-950"
        />
      </div>
    </div>
  )
}

export default About