import React from "react";
import styles from "./MemberCard.module.css";

const MemberCard = ({ data }) => {

  function capitalize(name) {
    const slice = name.split(" ");
    let capitalize = [];
    slice.map((name) => {
      const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);
      capitalize.push(capitalizeName);
    });
    return capitalize.join(" ");
  }

  function address(street){
    const regexNum = /\d+/g;
    const regexAlpha = /[a-zA-Z]+/g;
    const numb = street.match(regexNum).join('')
    const address = street.match(regexAlpha).join(' ')
    
    return `${capitalize(address)}, ${numb}`
  }


  return (
    <a className={styles.card}>
      <img className={styles.avatar} src={data.picture.large} alt="name" />
      <h3 className={styles.memberName}>
        {data.name.first} {data.name.last}
      </h3>
      <p className={styles.street}>{address(data.location.street)}</p>
      <p className={styles.cityAndState}>{data.location.city}</p>
      <p className={styles.cityAndState}>
        {data.location.state} - CEP: {data.location.postcode}
      </p>
    </a>
  );
};

export default MemberCard;
