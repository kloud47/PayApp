import User from '../../public/user.png'

export default function Profile () {
    return (
    <section className='bg-[#fff] absolute z-10 w-[400px] h-[500px] rounded-md shadow-md top-[90px] right-5 drop-shadow-2xl'>
        <div className='p-10 h-full'>
            <div className='flex items-center text-center h-[40%]'>
                <img src={User} alt="user" className=' w-[150px] h-[150px] border rounded-full border-appblue border-2'/>
                <h2 className='text-[#000] font-bold text-2xl w-full'>User</h2>
            </div>
            <ul>
                <li>QR Code</li>
                <li>Setting</li>
                <li>More</li>
                <li>Edit Profile</li>
                <li>Logout</li>
            </ul>
        </div>
    </section>
    );
}