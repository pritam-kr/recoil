import React, { useEffect } from "react";
import "./home.css";
import { FilterBar, GridCard, Main, Sidebar } from "../../components";
import { getNoteService } from "../../services/getNotes";
import { useRecoilState, } from "recoil";
import { loadingStatusAtom, allNoteAtom } from "../../recoil/atoms/allNoteAtom";

const Home = () => {
  const [loadingState, setLoadingState] = useRecoilState(loadingStatusAtom);
  const [notes, setNotes] = useRecoilState(allNoteAtom);

  //Getting all notes
  useEffect(() => {
    (async () => {
      try {
        setLoadingState((prevState) => ({ loading: true, error: "" }));
        const { data, status } = await getNoteService();

        if (status === 200) {
          setNotes(data);
          setLoadingState((prevState) => ({ loading: false, error: "" }));
        }
      } catch (error) {
        setLoadingState((prevState) => ({
          loading: false,
          error: "Some error occurred while fetching data.",
        }));
      }
    })();
  }, []);

const sorting = (key) => {

  console.log(key);

}

  return (
    <section className="container">
      <div className="wrapper home-wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-bar">
          <Main />

          <div className="notes-container">
            <header className="notes-container-header">
              <FilterBar sorting={sorting} />
            </header>

            <div className="notes-wrapper">
              {notes?.map((eachNote) => (
                <GridCard eachNote={eachNote} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Home };
