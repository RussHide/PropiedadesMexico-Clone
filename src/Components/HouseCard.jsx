import { FaWhatsapp, FaPhoneAlt  } from "react-icons/fa";

const HouseCard = () => {
    return (
        <div>
            <div>
                <img src="https://www.propiedadesmexico.com/_next/image?url=https%3A%2F%2Fpropiedadesmexicocom.s3-us-west-1.amazonaws.com%2FImages%2Fe63bc6ec-d03f-2b52-0c54-52dfd14d4330__Frente.jpeg&w=256&q=75" alt="" />
            </div>
            <div>
                <div>
                    <div>
                        <p>$10,000 MXN</p>
                        <FaWhatsapp />
                        <FaPhoneAlt  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HouseCard