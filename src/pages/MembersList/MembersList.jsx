import React from "react";
import styles from "./MembersList.module.css";

import AsideFilter from "../../components/AsideFilter/AsideFilter";
import MemberCard from "../../components/MemberCard/MemberCard";
import data from "../../API/data.json";
import Pagination from "../../components/Pagination/Pagination";

const MembersList = () => {
  const [genderFilter, setGenderFilter] = React.useState("all");
  const [stateFilter, setStateFilter] = React.useState('all')
  const [dataMember, setDataMember] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(9);

  React.useEffect(() => {
    if (genderFilter === "all") {
      setDataMember(data.results);
    } else {
      const filteredGender = data.results.filter(
        (member) => member.gender === genderFilter,
      );
      setDataMember(filteredGender);
    }
  }, [genderFilter]);

  React.useEffect(() => {
    if (stateFilter === "all") {
      setDataMember(data.results);
    } else {
      const filteredGender = data.results.filter(
        (member) => member.location.state === stateFilter,
      );
      setDataMember(filteredGender);
    }
  }, [stateFilter]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataMember.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <main className={styles.grid}>
        <AsideFilter
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          setCurrentPage={setCurrentPage}
          stateFilter={stateFilter}
          setStateFilter={setStateFilter}
        />
        <section className={styles.membersList}>
          {currentPosts &&
            currentPosts.map((data) => <MemberCard data={data} />)}
        </section>
      </main>
      <Pagination
          postsPerPage={postsPerPage}
          totalPosts={dataMember.length}
          paginate={paginate}
        />
    </div>
  );
};

export default MembersList;
