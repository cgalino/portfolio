
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
        <div className="text-gray-100 flex items-center border-4 rounded-xl border-gray-500 py-2">
            <input id="pf-search" className="bg-transparent border-none mr-3 px-2 h-8 leading-tight focus:outline-none"
                onKeyDown={() => clearTimeout()}
                onKeyUp={() => startCountDown()}
                type="text"
                placeholder="Filtrar"
                defaultValue={search} />
            <i className="absolute right-0 top-0 mt-4 mr-4 fas fa-search"></i>
        </div>
    )
}

export default ProjectFilterSearch;