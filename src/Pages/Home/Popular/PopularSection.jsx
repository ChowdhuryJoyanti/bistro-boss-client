import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../shared/MenuItem/MenuItem';
import UseMenu from '../../../Hooks/UseMenu';

const PopularSection = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular');


    // const [menu,setMenu] = useState([]);

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then (data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)})
    // },[])




    return (
        <div>
            <section className='mb-12'>
                <SectionTitle
                    heading="From Our Menu"
                    subHeading="Popular Items"


                ></SectionTitle>
                <div className='grid md:grid-cols-2 gap-10'>
                    {
                        popular.map(item => <MenuItem
                                key={item._id}
                                item={item}
                        
                        ></MenuItem> )
                    }
                </div>
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </section>
        </div>
    );
};

export default PopularSection;