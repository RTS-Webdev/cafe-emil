export default function Bordbestilling() {
    return (
        <div className="justify-center items-center flex flex-col">
            <h2 className="text-3xl font-serif mb-8 mx-10 text-left text-gray-900">Bordbestilling</h2>
            <p className="mx-10 mb-8 text-center text-gray-900 text-balance">
                Bordbestilling kan ske ved at ringe til cafeen i åbningstiden,
                hvilket du kan se i nedenunder.<br />
                Ring på tlf.:{' '}
                <span className="text-green-500 font-bold drop-shadow-2xl">
                    36 44 74 41
                </span>{' '}
                for at bestille bord.
            </p>
        </div>
    )
}