import '../src/assets/styles/heading.css'


export default function Heading() {
    return (
        <>
            <header className="heading bg-info d-flex justify-content-between">
                <p className='search'>Search bar here...</p>
                <h2 className='title'>BookIt Now</h2>
                <p className='username'>username<span>[]</span></p>
            </header>
        </>
    );
}