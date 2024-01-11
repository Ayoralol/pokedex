const ModalNav = ({setSelectedSection}) => {
  return (
    <div>
      <div onClick={() => setSelectedSection("General Information")}>
        <p>General Information</p>
      </div>
      <div onClick={() => setSelectedSection("Detailed Information")}>
        <p>Detailed Information</p>
      </div>
      <div onClick={() => setSelectedSection("Evolution Information")}>
        <p>Evolution Information</p>
      </div>
      <div onClick={() => setSelectedSection("Moves Information")}>
        <p>Moves Information</p>
      </div>
      <div onClick={() => setSelectedSection("Encounter Information")}>
        <p>Encounter Information</p>
      </div>
    </div>
  );
};

export default ModalNav;
