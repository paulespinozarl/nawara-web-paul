import { useEffect } from "react";
import About from "../components/About";
import OrderList from "../components/OrderList";
import { data } from "../utils";

export default function Politics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-6 p-5 max-w-6xl">
          <span className="font-bold text-xl md:text-5xl mx-8 flex justify-center text-tertiary">
            POLÍTICA DE PRIVACIDAD
          </span>
          <span className="font-bold mx-3">
            Última actualización: 19 de enero de 2024
          </span>
          <span className="mx-8 my-2">
            Esta notificación de privacidad para APPS TURISMO C.A ('
            <strong>nosotros</strong>', '<strong>nos</strong>', o '
            <strong>nuestro</strong>'), describe cómo y por qué podríamos
            recopilar, almacenar, usar y/o compartir ('<strong>Procesar</strong>
            ') tu información cuando utilizas nuestros servicios ('
            <strong>Servicios</strong>'), como cuando: <br />
            • Descargas y utilizas nuestra aplicación móvil (Nawara), u
            cualquier otra aplicación nuestra que enlace a esta notificación de
            privacidad. <br />
            • Te relacionas con nosotros de otras maneras relacionadas,
            incluyendo ventas, marketing o eventos. <br />
            <strong> ¿Preguntas o inquietudes?</strong> Leer esta notificación
            de privacidad te ayudará a entender tus derechos y opciones de
            privacidad. Si no estás de acuerdo con nuestras políticas y
            prácticas, por favor, no uses nuestros Servicios. Si aún tienes
            preguntas o inquietudes, contáctanos en app.nawara.css@gmail.com.
          </span>
          <span className="font-bold mx-3">RESUMEN DE PUNTOS CLAVE</span>
          <span className="mx-8 my-2">
            Este resumen proporciona puntos clave de nuestra notificación de
            privacidad, pero puedes obtener más detalles sobre cualquiera de
            estos temas haciendo clic en el enlace que sigue a cada punto clave
            o utilizando nuestra tabla de contenidos a continuación para
            encontrar la sección que buscas.
          </span>

          <OrderList datos={data} />

          <span id="pregunta1" className="font-bold mx-6 text-xl">
            1. ¿QUÉ INFORMACIÓN RECOPILAMOS?
          </span>
          <span className="font-bold mx-3">
            Información personal que nos proporcionas
          </span>
          <span className="mx-8 my-2">
            En resumen: Recopilamos información personal que nos proporcionas
            voluntariamente. <br />
            Recopilamos información personal que nos proporcionas
            voluntariamente cuando te registras en los Servicios, muestras
            interés en obtener información sobre nosotros o nuestros productos y
            servicios, participas en actividades en los Servicios o nos
            contactas.
            <br />
            Información personal proporcionada por ti. La información personal
            que recopilamos depende del contexto de tus interacciones con
            nosotros y los Servicios, las elecciones que hagas, y los productos
            y funciones que utilices. La información personal que recopilamos
            puede incluir:
            <br />
            <br />
            <ol className="list-disc">
              <li>Nombres</li>
              <li>Números de teléfono</li>
              <li>Direcciones de correo electrónico</li>
              <li>Nombres de usuario</li>
              <li>Teléfono</li>
            </ol>
          </span>
          <span className="mx-3">
            <strong>Información sensible.</strong> No procesamos información
            sensible.
          </span>
          <span className="mx-8 my-2">
            <strong>Datos de inicio de sesión en redes sociales.</strong> Es
            posible que te ofrezcamos la opción de registrarte con nosotros
            utilizando los detalles de tu cuenta existente en redes sociales,
            como tu cuenta de Facebook, Twitter, u otra cuenta de redes
            sociales. Si eliges registrarte de esta manera, recopilaremos la
            información descrita en la sección llamada '¿CÓMO MANEJAMOS TUS
            INICIOS DE SESIÓN EN REDES SOCIALES?' a continuación.
          </span>
          <span className="mx-3">
            <strong>Datos de la aplicación.</strong> Si utilizas nuestras
            aplicaciones, también podemos recopilar la siguiente información si
            decides proporcionarnos acceso o permiso:
          </span>
          <span className="mx-8 my-2">
            • Información de geolocalización. Podemos solicitar acceso o permiso
            para rastrear información basada en la ubicación de tu dispositivo
            móvil, ya sea de forma continua o mientras utilizas nuestras
            aplicaciones móviles, para proporcionar ciertos servicios basados en
            la ubicación. Si deseas cambiar nuestro acceso o permisos, puedes
            hacerlo en la configuración de tu dispositivo. <br />• Acceso al
            dispositivo móvil. Podemos solicitar acceso o permisos a ciertas
            funciones de tu dispositivo móvil, como la cámara, los mensajes SMS
            y otras funciones. Si deseas cambiar nuestro acceso o permisos,
            puedes hacerlo en la configuración de tu dispositivo. <br />•
            Notificaciones push. Podemos solicitar enviarte notificaciones push
            sobre tu cuenta o ciertas funciones de las aplicaciones. Si deseas
            dejar de recibir este tipo de comunicaciones, puedes desactivarlas
            en la configuración de tu dispositivo. Esta información se necesita
            principalmente para mantener la seguridad y el funcionamiento de
            nuestras aplicaciones, para solucionar problemas y para nuestros
            fines internos de análisis e informes. <br />
            Toda la información personal que nos proporciones debe ser veraz,
            completa y precisa, y debes notificarnos cualquier cambio en dicha
            información personal.
          </span>
          <span id="pregunta2" className="font-bold mx-6 text-xl">
            2. ¿CÓMO PROCESAMOS TU INFORMACIÓN?
          </span>
          <span className="mx-8 my-2">
            En resumen: Procesamos tu información para proporcionar, mejorar y
            administrar nuestros Servicios, comunicarnos contigo, para seguridad
            y prevención de fraudes y para cumplir con la ley. También podemos
            procesar tu información para otros fines con tu consentimiento.{" "}
            <br />
            Procesamos tu información personal por diversas razones, según cómo
            interactúes con nuestros Servicios, incluyendo: <br />
            • Facilitar la creación y autenticación de cuentas y gestionar de
            otra manera las cuentas de usuario. Podemos procesar tu información
            para que puedas crear e iniciar sesión en tu cuenta, así como
            mantener en funcionamiento tu cuenta. br • Entregar y facilitar la
            entrega de servicios al usuario. Podemos procesar tu información
            para proporcionarte el servicio solicitado. <br />
            • Responder a consultas/ofrecer soporte a los usuarios. Podemos
            procesar tu información para responder a tus consultas y resolver
            cualquier problema potencial que puedas tener con el servicio
            solicitado. <br />
            • Solicitar comentarios. Podemos procesar tu información cuando sea
            necesario para solicitar comentarios y contactarte sobre el uso de
            nuestros Servicios. <br />• Enviarte comunicaciones de marketing y
            promocionales. Podemos procesar la información personal que nos
            envías con fines de marketing, si esto está de acuerdo con tus
            preferencias de marketing. Puedes darte de baja de nuestros correos
            electrónicos de marketing en cualquier momento. Para obtener más
            información, consulta '¿CUÁLES SON TUS DERECHOS DE PRIVACIDAD?' a
            continuación. <br />• Entregar publicidad dirigida. Podemos procesar
            tu información para desarrollar y mostrar contenido y publicidad
            personal
          </span>
          <span id="pregunta3" className="font-bold mx-6 text-xl">
            3. CUÁNDO Y CON QUIÉN COMPARTIMOS TU INFORMACIÓN PERSONAL:
          </span>
          <span className="mx-8 my-2">
            <strong>En Resumen:</strong> Podemos compartir información en
            situaciones específicas descritas en esta sección y/o con terceros
            específicos. <br />
            Es posible que necesitemos compartir tu información personal en las
            siguientes situaciones: <br />
            <strong>Transferencias Empresariales:</strong> Podemos compartir o
            transferir tu información en relación con, o durante las
            negociaciones de, cualquier fusión, venta de activos de la empresa,
            financiamiento o adquisición de toda o parte de nuestra empresa por
            otra entidad. <br />
            <strong>Uso de API de Google Maps Platform:</strong> Podemos
            compartir tu información con ciertas API de Google Maps Platform
            (por ejemplo, Google Maps API, Places API).
          </span>
          <span id="pregunta4" className="font-bold mx-6 text-xl">
            4. ¿UTILIZAMOS COOKIES Y OTRAS TECNOLOGÍAS DE RASTREO?
          </span>
          <span className="mx-8 my-2">
            <strong>En Resumen:</strong> Podemos usar cookies y otras
            tecnologías de seguimiento para recopilar y almacenar tu
            información.
            <br />
            Podemos utilizar cookies y tecnologías similares de seguimiento
            (como balizas web y píxeles) para acceder o almacenar información.
            Los detalles específicos sobre cómo utilizamos estas tecnologías y
            cómo puedes rechazar ciertas cookies se encuentran en nuestro Aviso
            de Cookies.
          </span>
          <span id="pregunta5" className="font-bold mx-6 text-xl">
            5. ¿CÓMO MANEJAMOS TUS INICIOS DE SESIÓN EN REDES SOCIALES?
          </span>
          <span className="mx-8 my-2">
            <strong>En Resumen:</strong> Si eliges registrarte o iniciar sesión
            en nuestros servicios utilizando una cuenta de redes sociales,
            podemos tener acceso a cierta información sobre ti. <br />
            <br /> Nuestros servicios te ofrecen la posibilidad de registrarte e
            iniciar sesión utilizando los detalles de tu cuenta de redes
            sociales de terceros (como tus credenciales de Facebook o Twitter).
            En caso de que elijas hacerlo, recibiremos cierta información de
            perfil sobre ti de tu proveedor de redes sociales. La información de
            perfil que recibimos puede variar según el proveedor de redes
            sociales en cuestión, pero suele incluir tu nombre, dirección de
            correo electrónico, lista de amigos e imagen de perfil, además de
            otra información que elijas hacer pública en dicha plataforma de
            redes sociales. <br />
            <br />
            Utilizaremos la información que recibamos solo para los fines que se
            describen en este aviso de privacidad o que se te informen de manera
            clara en los servicios pertinentes.Ten en cuenta que no controlamos,
            ni somos responsables de, otros usos de tu información personal por
            parte de tu proveedor de redes sociales de terceros. Recomendamos
            que revises su aviso de privacidad para entender cómo recopilan,
            utilizan y comparten tu información personal, así como para
            configurar tus preferencias de privacidad en sus sitios y
            aplicaciones.
          </span>
          <span id="pregunta6" className="font-bold mx-6 text-xl">
            6. ¿CUÁNTO TIEMPO GUARDAMOS TU INFORMACIÓN?
          </span>
          <span className="mx-8 my-2">
            <strong>En Resumen:</strong> Mantenemos tu información durante el
            tiempo necesario para cumplir con los fines establecidos en este
            aviso de privacidad, a menos que la ley exija lo contrario. <br />
            <br /> Solo conservaremos tu información personal durante el tiempo
            que sea necesario para los fines establecidos en este aviso de
            privacidad, a menos que la ley requiera o permita un período de
            retención más largo (como requisitos fiscales, contables u otros
            requisitos legales). Ningún propósito en este aviso justificará
            conservar tu información personal durante más tiempo del necesario
            para el período en que los usuarios tengan una cuenta con nosotros.{" "}
            <br />
            <br /> Cuando no tengamos una necesidad comercial legítima continua
            para procesar tu información personal, la eliminaremos o
            anonimizaremos, o, si esto no es posible (por ejemplo, si tu
            información personal se ha almacenado en archivos de respaldo), la
            almacenaremos de manera segura e la aislaremos de cualquier
            procesamiento adicional hasta que sea posible su eliminación.
          </span>
          <span id="pregunta7" className="font-bold mx-6 text-xl">
            7. ¿CÓMO MANTENEMOS SEGURA TU INFORMACIÓN?
          </span>
          <span className="mx-8 my-2">
            <strong>En Resumen:</strong> Buscamos proteger tu información
            personal mediante un sistema de medidas de seguridad organizativas y
            técnicas. <br /> Hemos implementado medidas de seguridad técnicas y
            organizativas apropiadas y razonables diseñadas para proteger la
            seguridad de cualquier información personal que procesemos. Sin
            embargo, a pesar de nuestras salvaguardias y esfuerzos para asegurar
            tu información, ninguna transmisión electrónica a través de Internet
            o tecnología de almacenamiento de información puede garantizarse al
            100% como segura. Por lo tanto, no podemos prometer ni garantizar
            que los hackers, ciberdelincuentes u otras terceras partes no
            autorizadas puedan vencer nuestra seguridad e inapropiadamente
            recopilar, acceder, robar o modificar tu información. Aunque haremos
            nuestro mejor esfuerzo para proteger tu información personal, la
            transmisión de información personal hacia y desde nuestros servicios
            está bajo tu propio riesgo. Debes acceder a los servicios solo
            dentro de un entorno seguro.
          </span>
          <span id="pregunta8" className="font-bold mx-6 text-xl">
            8. ¿RECOLECTAMOS INFORMACIÓN DE MENORES?
          </span>
          <span className="mx-8 my-2">
            <strong>En Resumen:</strong> No recopilamos intencionalmente datos
            de o realizamos marketing dirigido a menores de 18 años. <br />
            <br />
            No solicitamos intencionalmente datos de o realizamos marketing
            dirigido a menores de 18 años. Al utilizar los servicios, declaras
            que tienes al menos 18 años o que eres el padre o tutor de un menor
            y consientes en el uso de los servicios por parte del menor
            dependiente. Si llegamos a saber que se ha recopilado información
            personal de usuarios menores de 18 años, desactivaremos la cuenta y
            tomaremos medidas razonables para eliminar rápidamente dichos datos
            de nuestros registros. Si tienes conocimiento de algún dato que
            hayamos podido recopilar de menores de 18 años, contáctanos a
            app.nawara.css@gmail.com.
          </span>
          <span id="pregunta9" className="font-bold mx-6 text-xl">
            9. ¿CUÁLES SON TUS DERECHOS DE PRIVACIDAD?
          </span>
          <span className="mx-8 my-2">
            <strong>En Resumen:</strong> Puedes revisar, cambiar o dar de baja
            tu cuenta en cualquier momento. <br />
            <br />
            Retirada de tu consentimiento: Si estamos basando el procesamiento
            de tu información personal en tu consentimiento, ya sea expreso o
            implícito según la ley aplicable, tienes el derecho de retirar tu
            consentimiento en cualquier momento. Puedes retirar tu
            consentimiento en cualquier momento comunicándote con nosotros
            utilizando los detalles de contacto proporcionados en la sección
            '¿CÓMO PUEDES CONTACTARNOS SOBRE ESTA NOTIFICACIÓN?' a continuación.{" "}
            <br />
            <br />
            No obstante, ten en cuenta que esto no afectará la legalidad del
            procesamiento antes de su retirada ni, cuando lo permita la ley
            aplicable, afectará al procesamiento de tu información personal
            realizado en virtud de fundamentos de procesamiento legales
            distintos al consentimiento. <br />
            <br /> Renuncia a comunicaciones de marketing y promocionales:
            Puedes darte de baja de nuestras comunicaciones de marketing y
            promocionales en cualquier momento haciendo clic en el enlace de
            cancelación de suscripción en los correos electrónicos que enviamos,
            respondiendo 'STOP' o 'UNSUBSCRIBE' a los mensajes SMS que enviamos,
            o comunicándote con nosotros mediante los detalles proporcionados en
            la sección '¿CÓMO PUEDES CONTACTARNOS SOBRE ESTA NOTIFICACIÓN?' a
            continuación. Luego, serás eliminado de las listas de marketing. Sin
            embargo, aún podemos comunicarnos contigo, por ejemplo, para
            enviarte mensajes relacionados con el servicio que sean necesarios
            para la administración y uso de tu cuenta, para responder a
            solicitudes de servicio o con otros fines no relacionados con
            marketing. <br />
            <br />
            <strong>Información de la cuenta:</strong> <br />
            <br />
            Si en algún momento deseas revisar o cambiar la información en tu
            cuenta o dar de baja tu cuenta, puedes: <br />
            <br />
            Iniciar sesión en la configuración de tu cuenta y actualizar tu
            cuenta de usuario. Comunicarte con nosotros mediante la información
            de contacto proporcionada. A solicitud tuya para dar de baja tu
            cuenta, desactivaremos o eliminaremos tu cuenta e información de
            nuestras bases de datos activas. Sin embargo, es posible que
            retengamos cierta información en nuestros archivos para prevenir
            fraudes, solucionar problemas, colaborar en investigaciones, hacer
            cumplir nuestros términos legales y/o cumplir con requisitos legales
            aplicables. <br />
            <br /> Si tienes preguntas o comentarios sobre tus derechos de
            privacidad, puedes enviarnos un correo electrónico a
            app.nawara.css@gmail.com.
          </span>
          <span id="pregunta10" className="font-bold mx-6 text-xl">
            10. CONTROLES PARA FUNCIONES DE NO SEGUIMIENTO
          </span>
          <span className="mx-8 my-2">
            La mayoría de los navegadores web y algunos sistemas operativos
            móviles y aplicaciones móviles incluyen una función o configuración
            de No Seguir ('DNT') que puedes activar para indicar tu preferencia
            de privacidad de no tener datos sobre tus actividades de navegación
            en línea monitoreados y recopilados. Hasta ahora, no se ha
            finalizado un estándar tecnológico uniforme para reconocer e
            implementar señales de DNT. Como tal, actualmente no respondemos a
            señales de navegadores DNT ni a ningún otro mecanismo que comunique
            automáticamente tu elección de no ser rastreado en línea. Si se
            adopta en el futuro un estándar para el seguimiento en línea que
            debamos seguir, te informaremos sobre esa práctica en una versión
            revisada de este aviso de privacidad.
          </span>
          <span id="pregunta11" className="font-bold mx-6 text-xl">
            11. ¿REALIZAMOS ACTUALIZACIONES A ESTA NOTIFICACIÓN?
          </span>
          <span className="mx-8 my-2">
            <strong>En Resumen:</strong> Sí, actualizaremos esta notificación
            según sea necesario para cumplir con las leyes relevantes. <br />
            <br /> Podemos actualizar este aviso de privacidad de vez en cuando.
            La versión actualizada se indicará con una fecha de 'Revisión'
            actualizada y será efectiva tan pronto como esté accesible. Si
            realizamos cambios sustanciales en este aviso de privacidad, es
            posible que te notifiquemos colocando un aviso de tales cambios de
            manera destacada o enviándote una notificación directa. Te
            recomendamos que revises este aviso de privacidad con frecuencia
            para estar informado sobre cómo protegemos tu información.
          </span>
          <span id="pregunta12" className="font-bold mx-6 text-xl">
            12. ¿CÓMO PUEDES CONTACTARNOS SOBRE ESTA NOTIFICACIÓN?
          </span>
          <span className="mx-8 my-2">
            Si tienes preguntas o comentarios sobre esta notificación, puedes
            enviarnos un correo electrónico a app.nawara.css@gmail.com o
            contactarnos por correo postal en: <br />
            <br />
            APPS TURISMO C.A <br />
            Amenábar 1809, C1426 CABA, Argentina <br />
            CABA, Buenos Aires C1426 <br />
            Argentina <br />
          </span>
          <span id="pregunta13" className="font-bold mx-6 text-xl">
            13. ¿CÓMO PUEDES REVISAR, ACTUALIZAR O ELIMINAR LOS DATOS QUE
            RECOPILAMOS DE TI?
          </span>
          <span className="mx-8 my-2">
            Según las leyes aplicables en tu país, es posible que tengas derecho
            a solicitar acceso a la información personal que recopilamos de ti,
            cambiar esa información o eliminarla. Para solicitar revisar,
            actulizar o eliminar tu información personal, completa y envía una
            solicitud de acceso de datos. Esta política de privacidad fue creada
            utilizando el Generador de Política de Privacidad de Termly.
          </span>
          <hr className="mt-8 border-t-1 border-tertiary" />
        </div>
        <About />
      </div>
    </>
  );
}
