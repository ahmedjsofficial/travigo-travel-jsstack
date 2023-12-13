import React from 'react';
import image1 from '../../images/boating.jpg';
import image2 from '../../images/boating.jpg';
import image3 from '../../images/boating.jpg';
import image4 from '../../images/boating.jpg';

const CurlyTopBorder = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00000010" fill-opacity="1" d="M0,128L8.6,138.7C17.1,149,34,171,51,197.3C68.6,224,86,256,103,256C120,256,137,224,154,213.3C171.4,203,189,213,206,186.7C222.9,160,240,96,257,106.7C274.3,117,291,203,309,245.3C325.7,288,343,288,360,240C377.1,192,394,96,411,53.3C428.6,11,446,21,463,32C480,43,497,53,514,74.7C531.4,96,549,128,566,122.7C582.9,117,600,75,617,85.3C634.3,96,651,160,669,176C685.7,192,703,160,720,170.7C737.1,181,754,235,771,213.3C788.6,192,806,96,823,96C840,96,857,192,874,224C891.4,256,909,224,926,218.7C942.9,213,960,235,977,208C994.3,181,1011,107,1029,90.7C1045.7,75,1063,117,1080,122.7C1097.1,128,1114,96,1131,85.3C1148.6,75,1166,85,1183,106.7C1200,128,1217,160,1234,154.7C1251.4,149,1269,107,1286,80C1302.9,53,1320,43,1337,85.3C1354.3,128,1371,224,1389,224C1405.7,224,1423,128,1431,80L1440,32L1440,0L1431.4,0C1422.9,0,1406,0,1389,0C1371.4,0,1354,0,1337,0C1320,0,1303,0,1286,0C1268.6,0,1251,0,1234,0C1217.1,0,1200,0,1183,0C1165.7,0,1149,0,1131,0C1114.3,0,1097,0,1080,0C1062.9,0,1046,0,1029,0C1011.4,0,994,0,977,0C960,0,943,0,926,0C908.6,0,891,0,874,0C857.1,0,840,0,823,0C805.7,0,789,0,771,0C754.3,0,737,0,720,0C702.9,0,686,0,669,0C651.4,0,634,0,617,0C600,0,583,0,566,0C548.6,0,531,0,514,0C497.1,0,480,0,463,0C445.7,0,429,0,411,0C394.3,0,377,0,360,0C342.9,0,326,0,309,0C291.4,0,274,0,257,0C240,0,223,0,206,0C188.6,0,171,0,154,0C137.1,0,120,0,103,0C85.7,0,69,0,51,0C34.3,0,17,0,9,0L0,0Z"></path></svg>
);

const CurlybottomBorder =() => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00000020" fill-opacity="1" d="M0,288L14.1,288C28.2,288,56,288,85,266.7C112.9,245,141,203,169,181.3C197.6,160,226,160,254,138.7C282.4,117,311,75,339,96C367.1,117,395,203,424,234.7C451.8,267,480,245,508,213.3C536.5,181,565,139,593,112C621.2,85,649,75,678,58.7C705.9,43,734,21,762,10.7C790.6,0,819,0,847,32C875.3,64,904,128,932,149.3C960,171,988,149,1016,144C1044.7,139,1073,149,1101,133.3C1129.4,117,1158,75,1186,85.3C1214.1,96,1242,160,1271,202.7C1298.8,245,1327,267,1355,240C1383.5,213,1412,139,1426,101.3L1440,64L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path></svg>
);

const AdventureCard = ({ image, title, description }) => (
    <div className="mx-12">

        <img
            src={image}
            alt={`Adventure: ${title}`}
            className="w-48 h-48 rounded-full object-cover"
        />
        <h2 className="text-2xl text-black font-bold  my-8">{title}</h2>
        <p className="text-lg  my-8 ">{description}</p>
        <button className="text-white text-1xl mt-4  p-3 bg-black hover:bg-yellow-500">
            View Adventures
        </button>
    </div>
);

const Adventures = () => (
    <>
        <CurlyTopBorder />
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl text-blue-500 font-mono mb-2">Take yourself</h3>

            <h2 className="text-6xl font-serif font-bold">Adventure Ideas</h2>
        </div>

        <div className="flex justify-center items-center h-screen">

            <div className="flex px-28">
                <AdventureCard
                    image={image1}
                    title="Zip Lines"
                    description="Add some adrenaline to your travel senses by zipline travel."
                />
                <AdventureCard
                    image={image2}
                    title="Zip Lines"
                    description="Add some adrenaline to your travel senses by zipline travel."
                />
                <AdventureCard
                    image={image3}
                    title="Zip Lines"
                    description="Add some adrenaline to your travel senses by zipline travel."
                />
                <AdventureCard
                    image={image4}
                    title="Zip Lines"
                    description="Add some adrenaline to your travel senses by zipline travel."
                />
            </div>
        </div>
        <div className="flex">

        <div className="w-1/2 p-8 m-24 rounded-lg shadow-lg bg-white">
  <h2 className="text-6xl px-12 font-bold mb-4">Making Adventure Tours Affordable</h2>
  <hr className='border-t-4 h-2 text-red-600' />

  <p className="text-2xl mt-12 mb-6 mx-24  ">
    Find an adventure, create a hobby that is related to nature in its pristine shape for your goodness.
    Tempor incididunt ut labore. Et dolore magna aliqua. Quitts ipsum suspendisse ultrices gravida.
  </p>
</div>

  {/* Image Side */}
  <div className="w-1/2">
    {/* Replace 'your-image-path.jpg' with the actual path to your image */}
    <img
      src={image1}
      alt="Adventure Image"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        <CurlybottomBorder/>
        </>
);

export default Adventures;
