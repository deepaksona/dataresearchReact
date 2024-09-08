import search from '../../../assets/svg/search.svg';

function  SearchSection(params) {
    return (
        <div className='textfield-section'>
        <img src={search} className='search-image'/>
    <input type='text' className='search-decoration' placeholder='Search...'  ></input>
    </div>
    
    );
}

export default SearchSection