
const ProjectFilterSearch = ({ search, setSearch }) => {

    let typingTimer;
    let doneTypingInterval = 350;
    const inputTextFilter = document.getElementById('pf-search');

    const startCountDown = () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(filter, doneTypingInterval);
    }

    const filter = () => {
        const val = inputTextFilter.value;
        setSearch(val);
    }

    return (
        <div className="relative text-gray-100 min-w-[50%] flex items-center border-2 py-2 bg-mid-light-transparent rounded-xl border-gray-600 w-full md:w-72">
            <input id="pf-search" className="bg-transparent w-full border-none mr-3 px-2 h-8 leading-tight focus:outline-none sm:text-sm"
                onKeyDown={() => clearTimeout()}
                onKeyUp={() => startCountDown()}
                type="text"
                placeholder="Filtrar"
                defaultValue={search} />
            <i className="absolute right-0 top-0 mt-4 mr-4 fas fa-search text-gray-400"></i>
        </div>
    )
}

export default ProjectFilterSearch;