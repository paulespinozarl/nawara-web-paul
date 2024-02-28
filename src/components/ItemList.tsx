interface ItemListaProps {
  id: string;
  texto: string;
}

const ItemList: React.FC<ItemListaProps> = ({ id, texto }) => (
  <li>
    <a href={`#${id}`} className="no-underline text-tertiary">
      {texto}
    </a>
  </li>
);

interface ListaOrdenadaProps {
  datos: { id: string; texto: string }[];
}

export const datosLista = [
  { id: "pregunta1", texto: "¿QUÉ INFORMACIÓN RECOPILAMOS?" },
  { id: "pregunta2", texto: "¿CÓMO PROCESAMOS TU INFORMACIÓN?" },
  {
    id: "pregunta3",
    texto: "¿CUÁNDO Y CON QUIÉN COMPARTIMOS TU INFORMACIÓN PERSONAL?",
  },
  {
    id: "pregunta4",
    texto: "¿UTILIZAMOS COOKIES Y OTRAS TECNOLOGÍAS DE RASTREO?",
  },
  {
    id: "pregunta5",
    texto: "¿CÓMO MANEJAMOS TUS INICIOS DE SESIÓN EN REDES SOCIALES?",
  },
  { id: "pregunta6", texto: "¿CUÁNTO TIEMPO GUARDAMOS TU INFORMACIÓN?" },
  { id: "pregunta7", texto: "¿CÓMO MANTENEMOS SEGURA TU INFORMACIÓN?" },
  { id: "pregunta8", texto: "¿RECOLECTAMOS INFORMACIÓN DE MENORES?" },
  { id: "pregunta9", texto: "¿CUÁLES SON TUS DERECHOS DE PRIVACIDAD?" },
  { id: "pregunta10", texto: "CONTROLES PARA FUNCIONES DE NO SEGUIMIENTO" },
  {
    id: "pregunta11",
    texto: "¿REALIZAMOS ACTUALIZACIONES A ESTA NOTIFICACIÓN?",
  },
  {
    id: "pregunta12",
    texto: "¿CÓMO PUEDES CONTACTARNOS SOBRE ESTA NOTIFICACIÓN?",
  },
  {
    id: "pregunta13",
    texto:
      "¿CÓMO PUEDES REVISAR, ACTUALIZAR O ELIMINAR LOS DATOS QUE RECOPILAMOS DE TI?",
  },
];

export const ListaOrdenada: React.FC<ListaOrdenadaProps> = ({ datos }) => (
  <ol className="font-bold mx-3 mb-10 flex flex-col list-decimal">
    {datos.map((item) => (
      <ItemList key={item.id} id={item.id} texto={item.texto} />
    ))}
  </ol>
);
