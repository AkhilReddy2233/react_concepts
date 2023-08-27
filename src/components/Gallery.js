import { getImageUrl } from './utils.js';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
      imageId="szV5sdG"
      name="Maria Skłodowska-Curie"
      profession="physicist and chemist"
      discovery="polonium (chemical element)"
      awards={[
        'Nobel Prize in Physics',
        'Nobel Prize in Chemistry',
        'Davy Medal',
        'Matteucci Medal'
      ]}
      />
       <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
      <PackingList />
    </div>
  );
}

// function Profile(props){
//     console.log(props);
//     return(
//         <>
//         <section className='profile'>
//             <h2>{props.name}</h2>
//             <img 
//             className='avatar'
//             src={getImageUrl(props.imageId)}
//             alt="Maria Skłodowska-Curie"
//                 width={70}
//                 height={70}
//             />
//             <ul>
//                 <li>
//                     <b>Profession: </b> 
//                     {props.profession}
//                 </li>
//                 <li>
//                     <b>Awards:{props.awards.length}</b>
//                     ({props.awards.join()})
//                 </li>
//                 <li>
//                     <b>Discorved: </b>
//                     {props.discovery}
//                 </li>
//             </ul>
//         </section>
//         </>
//     );
// }
function Profile({
    imageId,
    name,
    profession,
    awards,
    discovery,
    imageSize = 70
  }) {
    return (
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId)}
          alt={name}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li><b>Profession:</b> {profession}</li>
          <li>
            <b>Awards: {awards.length} </b>
            ({awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
    );
  }

function Item({ name, isPacked }) {
    return(
        <div>
        {/* <li>
        {isPacked ? 
        (<del>{name}  ' ✔' </del>):
         name }
         </li> */}
          <li className="item">
          {name} {isPacked && '✔'}
        </li>
        </div>
    )
      
}
  
export function PackingList() {
return (
    <section>
    <h1>Sally Ride's Packing List</h1>
    <ul>
        <Item 
        isPacked={true} 
        name="Space suit" 
        />
        <Item 
        isPacked={true} 
        name="Helmet with a golden leaf" 
        />
        <Item 
        isPacked={false} 
        name="Photo of Tam" 
        />
    </ul>
    </section>
);
}
  