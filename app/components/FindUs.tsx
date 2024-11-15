export default function FindUs() {
    return (
        <section id="findus">
            <h2 className="text-3xl font-serif mb-8 mx-10 text-left text-gray-900">Find os</h2>
            <p className="mx-10 mb-8 text-left text-gray-900 text-balance">
                Café Emil er placeret i hjertet af København, lige ved Rådhuspladsen. Vi ligger i den gamle
                bygning af det berømte Rådhuset, og har været en del af byens historie i mere end 100 år.
            </p>
            <div className="mx-10 mb-8">
                <h3 className="text-2xl font-serif mb-4 text-gray-900">Åbningstider på Café Emil</h3>
                <div className="space-y-2 text-gray-900">
                    <div className="flex justify-between">
                        <span>Mandag - Torsdag</span>
                        <span>10:00 - 23:00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Fredag - Lørdag</span>
                        <span>10:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Søndag</span>
                        <span>10:00 - 23:00</span>
                    </div>
                </div>
            </div>
            <button className="flex gap-8 mx-10 mb-8 text-left text-gray-900" aria-label="Find os på Facebook og Findsmiley">
                <a href="https://www.facebook.com/cafeemil" target="_blank" aria-label="Find os på Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="https://www.findsmiley.dk/577757" target="_blank" aria-label="Find os på Findsmiley">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                </a>
            </button>
            <div className="p-8">
                <iframe aria-label="Cafë Emil på Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.8072372011747!2d12.510180776676892!3d55.66499397220133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253f2aef1c377%3A0x37211baccf9de81e!2sCaf%C3%A9%20Emil!5e0!3m2!1sen!2sdk!4v1710799607443!5m2!1sen!2sdk"
                    width="100%"
                    height="450"
                    style={{
                        border: 0,
                        filter: 'grayscale(100%)'
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}