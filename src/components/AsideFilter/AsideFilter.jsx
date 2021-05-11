import React from "react";
import CheckBoxInput from "../CheckBoxInput/CheckBoxInput";
import styles from "./AsideFilter.module.css";

const AsideFilter = ({
  genderFilter,
  setGenderFilter,
  setCurrentPage,
  stateFilter,
  setStateFilter,
}) => {
  const handleGender = ({ target }) => {
    setGenderFilter(target.value);
    setCurrentPage(1);
  };

  const handleState = ({ target }) => {
    setStateFilter(target.value);
  };

  const primaryStates = [
    {
      label: "Todos",
      value: "all",
    },
    {
      label: "São Paulo",
      value: "são paulo",
    },
    {
      label: "Rio de Janeiro",
      value: "rio de janeiro",
    },
    {
      label: "Minas Gerais",
      value: "minas gerais",
    },
    {
      label: "Espírito Santo",
      value: "espírito santo",
    },
    {
      label: "Bahia",
      value: "bahia",
    },
  ];

  return (
    <aside className={styles.asideFilter}>
      <div className={styles.genderFilter}>
        <h2 className={styles.title}>Por gênero</h2>
        <CheckBoxInput
          label="Masculino"
          name="male"
          value="male"
          checked={genderFilter === "male"}
          onClick={handleGender}
        />
        <CheckBoxInput
          label="Feminino"
          name="female"
          value="female"
          checked={genderFilter === "female"}
          onClick={handleGender}
        />
        <CheckBoxInput
          label="Todos"
          name="male"
          value="all"
          checked={genderFilter === "all"}
          onClick={handleGender}
        />
      </div>
      <div className={styles.stateFilter}>
        <h2 className={styles.title}>Por Estado</h2>
        {primaryStates.map((state) => (
          <CheckBoxInput
            label={state.label}
            value={state.value}
            checked={stateFilter === state.value}
            onClick={handleState}
          />
        ))}
        <a href="#">Ver mais</a>
      </div>
    </aside>
  );
};

export default AsideFilter;
