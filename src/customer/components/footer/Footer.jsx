export default function Footer(){

    return(
        <div>
         <div className="footer grid p-6 bg-aliceblue-100">
        <div className="section-1 flex flex-col md:flex-row border">
            <div className="block-1 flex flex-col items-center text-center p-6 md:p-10 border-b md:border-b-0 md:border-r">
                <div className="image mb-2 border-1 p-4 rounded-full shadow-md">
                    <img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/truck.png" alt="truck"/>
                </div>
                <p className="block-title font-semibold">Free Delivery</p>
                <p className="block-description text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum.</p>
            </div>
            <div className="block-2 flex flex-col items-center text-center p-6 md:p-10 border-b md:border-b-0 md:border-r">
                <div className="image mb-2 border-1 p-4 rounded-full shadow-md">
                    <img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/wallet.png" alt="wallet"/>
                </div>
                <p className="block-title font-semibold">Secure Payment</p>
                <p className="block-description text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum.</p>
            </div>
            <div className="block-3 flex flex-col items-center text-center p-6 md:p-10">
                <div className="image mb-2 border-1 p-4 rounded-full shadow-md">
                    <img width="40" height="40" src="https://img.icons8.com/office/40/u-turn-to-left.png" alt="u-turn-to-left"/>
                </div>
                <p className="block-title font-semibold">Easy Returns</p>
                <p className="block-description text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum.</p>
            </div>
        </div>
        <div className="section-2 flex flex-col md:flex-row justify-evenly gap-4 p-6 md:p-12 bg-white border">
            <div className="block-s-1 flex flex-col space-y-4">
                <div className="tab-1 flex items-center space-x-4">
                    <img width="42" height="42" src="https://img.icons8.com/cotton/64/paper-bag--v1.png" className="mb-5" alt="paper-bag--v1"/>
                    <p className="text-2xl font-semibold">E - Commerce</p>
                </div>
                <div className="tab-2 flex items-center space-x-2">
                    <img width="16" height="16" src="https://img.icons8.com/tiny-color/16/home.png" alt="home"/>
                    <p className="text-sm text-gray-400 font-semibold">201, Some Building, Dindoli Surat</p>
                </div>
                <div className="tab-3 flex items-center space-x-2">
                    <img width="16" height="16" src="https://img.icons8.com/ultraviolet/40/phone.png" alt="phone"/>
                    <p className="text-sm text-gray-400 font-semibold">+91 70461 50763</p>
                </div>
                <div className="tab-4 flex items-center space-x-2">
                    <img width="16" height="16" src="https://img.icons8.com/offices/30/new-post.png" alt="new-post"/>
                    <p className="text-sm text-gray-400 font-semibold">contact@emaol.com</p>
                </div>
            </div>
            <div className="block-s-2 flex flex-col space-y-4">
                <div className="tab-1 flex items-center space-x-4">
                    <p className="text-2xl font-semibold">My Account</p>
                </div>
                <div className="tab-2 flex items-center space-x-2">
                    <p className="text-sm text-gray-400 font-semibold">My Profile</p>
                </div>
                <div className="tab-3 flex items-center space-x-2">
                    <p className="text-sm text-gray-400 font-semibold">Order Tracking</p>
                </div>
                <div className="tab-4 flex items-center space-x-2">
                    <p className="text-sm text-gray-400 font-semibold">Order History</p>
                </div>
                <div className="tab-5 flex items-center space-x-2">
                    <p className="text-sm text-gray-400 font-semibold">Shopping Cart</p>
                </div>
            </div>
            <div className="block-s-3 flex flex-col space-y-4">
                <div className="tab-1 flex items-center space-x-4">
                    <p className="text-2xl font-semibold">Shop Departments</p>
                </div>
                <div className="tab-2 flex items-center space-x-2">
                    <p className="text-sm text-gray-400 font-semibold">Computer & Accessories</p>
                </div>
                <div className="tab-3 flex items-center space-x-2">
                    <p className="text-sm text-gray-400 font-semibold">Smartphone & Accessories</p>
                </div>
                <div className="tab-4 flex items-center space-x-2">
                    <p className="text-sm text-gray-400 font-semibold">TV, Video & Audio</p>
                </div>
                <div className="tab-5 flex items-center space-x-2">
                    <p className="text-sm text-gray-400 font-semibold">Cameras, Photo & Audio</p>
                </div>
            </div>
        </div>
        <div className="section-3 flex flex-col items-center space-y-4 pt-8 border p-6 md:p-12">
            <div className="payments flex justify-center space-x-4">
                <img className="h-[24px] mb-4" src="http://freelogopng.com/images/all_img/1655980011paypal-icon-transparent.png" alt="Paypal" />
                <img className="h-[30px]" src="http://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-High-Quality-PNG.png" alt="Visa" />
                <img className="h-[30px] mb-4" src="http://pngimg.com/uploads/mastercard/mastercard_PNG9.png" alt="Mastercard" />
                <img className="h-[50px]" src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="American Express" />
            </div>
            <p className="text-gray-400">© 2024 All rights Reserved</p>
        </div>
    </div>
        </div>
    )
}