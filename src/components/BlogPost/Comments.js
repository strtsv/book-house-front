import React from "react";

import i1 from "../../assets/images/user-1-86x86.jpg";
import i2 from "../../assets/images/user-2-86x86.jpg";
import i3 from "../../assets/images/user-1-86x86.jpg";

class Comments extends React.Component {
  render() {
    return (
      <section className="section section-sm bg-gray-100">
        <div className="container">
          <h6>3 comments</h6>
          <div className="divider divider-1 comment-divider" />
          <ul className="comment-list">
            <li>
              <div className="box-comment">
                <div className="box-comment-image">
                  <img src={i1} alt width={86} height={86} />
                </div>
                <div className="box-comment-body">
                  <div className="heading-6 title">Kate Wilson</div>
                  <div className="meta">
                    <span className="time">October 5, 2020 at 1:44 pm</span>
                    <a href="#">Reply</a>
                  </div>
                  <p className="exeption">
                    Zirbus gratis vigil est. Adelphiss prarere, tanquam salvus
                    galatae. Pol, mineralis! A falsis, boreas primus fuga. Cur
                    cotta credere? A falsis, domus bi-color visus. Ubi est
                    camerarius lura? Abactor moris, tanquam camerarius
                    assimilatio. Lubas manducare! Hercle, racana alter!, deus!
                    Visuss tolerare in altus cubiculum! Resistentias
                    peregrinatione, tanquam grandis fluctus. Cobaltum de fortis
                    fuga, acquirere exsul! Cum lumen studere, omnes capioes
                    vitare peritus, pius messores.{" "}
                  </p>
                </div>
              </div>
              <ul className="comment-list-reply">
                <li>
                  <div className="box-comment">
                    <div className="box-comment-image">
                      <img src={i2} alt width={86} height={86} />
                    </div>
                    <div className="box-comment-body">
                      <div className="heading-6 title">Peter Anderson</div>
                      <div className="meta">
                        <span className="time">October 5, 2020 at 1:44 pm</span>
                        <a href="#">Reply</a>
                      </div>
                      <p className="exeption">
                        Ecce. Ubi est salvus domina? Visuss ortum in placidus
                        virundum! Cur demolitione favere? A falsis, capio gratis
                        luna. Ubi est magnum coordinatae? Cum exsul cadunt,
                        omnes toruses fallere rusticus, fatalis devatioes.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div className="box-comment">
                <div className="box-comment-image">
                  <img src={i3} alt width={86} height={86} />
                </div>
                <div className="box-comment-body">
                  <div className="heading-6 title">Kate Wilson</div>
                  <div className="meta">
                    <span className="time">October 5, 2020 at 1:44 pm</span>
                    <a href="#">Reply</a>
                  </div>
                  <p className="exeption">
                    Boreas peritus messor est. Adiurators ortum! Mons ferox
                    domina est. Sunt lapsuses imperium rusticus, bi-color
                    triticumes. Pol, a bene consilium, compater! Magnum abaculus
                    superbe gratias humani generis est. A falsis, indictio teres
                    apolloniates. Equisos tolerare in cella! A falsis, deus
                    secundus finis. Est fatalis demissio, cesaris. Heu, varius
                    xiphias! Ecce, mirabilis equiso! Nunquam carpseris
                    plasmator. Lotus, rusticus armariums sapienter talem de
                    primus, superbus resistentia. Species neuter cacula est.{" "}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Comments;
