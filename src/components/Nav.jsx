const Nav = ({ activeTab, onChangeTab }) => {
  return (
    <nav className="mb-8">
      <ul className="flex space-x-8">
        <li>
          <button
            onClick={() => onChangeTab("add")}
            className={`text-2xl font-semibold ${
              activeTab === "add" ? "text-indigo-600" : "text-gray-500"
            } hover:text-indigo-700 transition-all`}
          >
            Add Note
          </button>
        </li>
        <li>
          <button
            onClick={() => onChangeTab("view")}
            className={`text-2xl font-semibold ${
              activeTab === "view" ? "text-indigo-600" : "text-gray-500"
            } hover:text-indigo-700 transition-all`}
          >
            View Notes
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
