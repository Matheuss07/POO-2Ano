import { RiNetflixFill } from "react-icons/ri";
import './titulo.css'
import { IoMdPlay } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { AiOutlineSound } from "react-icons/ai";
import { TbNumber12Small } from "react-icons/tb";



function Titulo (){
    return(
     <div className="nomeT">

        <div className="nomes">
            <div className="pequeneninho">
                <RiNetflixFill className="play" color="db0000"/>
                <span className="pequen">S É R I E</span>
            </div>
            <div className="grandinho">
                <span className="grand">L U P I N</span>
            </div>
        </div>

        <div className="botoes">
            <div className="Bts">
                <div className="BtAssistir">
                    <IoMdPlay className="info" color='000000'/>
                    <span className="NmAssistir"> Assistir</span>
                
                </div>

                <div className="BtInfo">
                    <CiCircleInfo color='ffffff'/>
                    <span className="NmInfo"> Mais informações</span>
                
                </div>
            </div>
            <div className="lado">

                <div className="Som">
                <AiOutlineSound color="ffffff"/>

                </div>

                <a className="Btiddvol">| </a>

                <div className=" Idade">
                    <TbNumber12Small/>
                </div>

            </div>

        </div>

    </div>
    )
}

export default Titulo;