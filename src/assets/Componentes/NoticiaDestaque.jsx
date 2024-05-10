import styles from './NoticiaDestaque.module.css'
import imgNoticia from "../imagens/imagenNoticiaPrincipal.webp"



function CardNoticia({linkNoticia}){
    return(
        <div className={styles.noticia_destaque}>
            <div className={styles.container_video}>
            <img className={styles.img} src="https://www.rbsdirect.com.br/filestore/7/4/9/6/5/9/4_ff1ff3cdb019a5f/4956947_9684b329ca24101.jpg?w=700" alt="" />
            </div>

            <div className={styles.noticia_info}>
               <div className={styles.info_noticia}>
               <h4  className={styles.titulo_noticia}>G1 - Fique por dentros das notícias mais recentes sobre Rio Grande do Sul</h4>
               <p className={styles.subtitulo}></p>
               </div>
            <a href={linkNoticia} target='_blank'> <button className={styles.btn}>Ver mais</button></a>
            </div>
        </div>
    )
}

export default CardNoticia