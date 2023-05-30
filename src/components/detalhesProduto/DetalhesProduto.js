import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Navbar } from "react-bootstrap";
import Header from "../Header/Header";

const DetalhesProduto = () => {
  const productImage =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFBUZGBgYGhscGxsbGBoaHRsaGhgaGhoaGhsbIS0kGyEqIRsaJTclKi4xNDQ0GiM6PzozPi0zNDEBCwsLEA8QHRISHTMqIyo1MzExMzMzMzMzMzEzMzczMzMzMzMzMzMzMzMzMzMzMzMxMzMzMzMzMzMzMzMzMzMzM//AABEIALkBEAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAACAQICBgcEBwcDAgcAAAABAgADEQQhBQYSMUFRIjJhcYGRoUJSsfAHEyNicoLRFDOSorLB4VPC8TRDFXODk7PD0v/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAsEQACAQMDAgYCAgMBAAAAAAAAAQIDETEEIUESURMiYXGRoTKBFLHB0fAF/9oADAMBAAIRAxEAPwD2aEIQAhCEAIQhACEIQAhCEAIQhAEhCZtTS9EVHphw1RApdRmVD9Xa4LffnKTnGCcpOyRKVzRkdWuq7yB8fKcvpfWBqQ2nZFQ7syCewEXLHsAvOZOv1LaP2DlfeDLc/lIHqZxPVzmr0ot+rwW6Uss9Cq6UUdUFvQfrKzaVfgFHmZyNLXTDHrConegP9DH4S5S1lwb7q6j8Sunq6gTz6tfVvN17IlKJtVcZUPtEd2Xwka4lx7bed/jKlHSFB+pXpN2Coh/vLaC/aOzP4TinUq5k39miSHjG1PfPkP0kq6TqDfsnvH6TD0lpmhRJWpVu49hBttfkbZKexiJz2L1xc5UqaqPeqHbP8IsB47U6tPT1lTeDdu7wRJwWT0Wjpa+TL/Dn6GXqWKRsgwvyOR8jPE6um8Q7Xau+XBTsL4otlPiJqYDWlkstSkjjiyjYf+WwJ8p7EdProK7tL05Meum/Q9fizz7A63M+JpJSJamUqGorDMMNnYCs1jc9PK7Cdng9IpUyBs1r7LZN3gHeO0TRVVdRmrN8MW5RfhCE3ICEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEASQ1qyoLsf1PcJDisWFyXM+g7/0nIae1jWkSq2qVdxv1U/Fbj9weNuPHPUSlLwqKvL6XuTZJXk7I3NJ6VCIWqOKa+bN2C289gnnGK1gqLiatSgSquiqA6qSNkKNsWy2jsjfe0oY7GvUcu7FjzO4DkoGSjsEpkT09L/5aj5qz6m89l6JHLU1Le0dkLiqzVGL1GZ2O9mO0fM8JXFLlJbCIVnp+HG1rGKmyLYMQqZdr4GoiJUdCqOSEJy2iBckDfa17HcbHlK5HzeZ+BTlwT4jWSBl7I0XUhlurDMMpKkdoIzEnt83jWQfJMpLR0nwWVZl7EOzqlZwPtVNiCczSJoszA7mJTaNrjp3vnKjvym0iB9H0yN9Gq6HsFQ7Z9TTmMwmelacWrYbXwaTe/uMvELxzCMnUUBmPzvvzE6bQus7Ls0693UdWpntKeZIz/MM+d5zZEBOXU6SnXjaa9nyi8Kkou6PaNGaaBADNtKRdXyOXAkjJh94ePObwa+YngmitN1MO1h0qZPSTl95PdPx9Z6NoDWAbIZW2qRyI4oeOW8EcV8R2+LONXSy6am8eH/s6YtTV1nsdvFkVKoGAINwRcESSdSaauiBYQhJAQhCAEIQgBCEIAQhCAEIRCYATNxuMtcA2A3te1gN+fDvmHj9aaYxRwrg012Ay1HICVMiWCngAB4lWFhYbXFay6yfW3RSUog2tuaoeFxy5L4ns5HCtqJ+FT2XL9PQlyjBXeexo6c1oL3p4clU3NUFwz8wnFR97eeFhmeTLjw7JAXZt+Q90f7jx7hYd8SpXVBmfAb/8T39LpKenh0wXu+WcFScpu7J2f1+coxmsLnIduXxlZXqP1RsDmcz5ndNTA6Bv0nv3nrHuvu7/AEnQ5JZKqBBhqJqGyZ8+Q7Sx4eE6bRGhAXVR0nYgbXujiV7hc335eEdhsOqDZQWHzmeZ7Z1WrVMU6dTEP1QLL3DNrd5sPCc1aq1HY1hBXOa+kZF2lpoLLTVSQPez4brqpBH4m5m/EocvnzHZOy0nUNQszZliSfHf4cJxzJsOaZ3Dceand8Ld4M0obRsVqb7gTEvIaxPiJMpvYjiLzcobmr/ToYql9wVFHagLH1poPGYzLNbVGqFxaKdzqyH0b4KR4zOq0ipKHehKnvUlT8JwUvLWqR72fybPeKf6KsHEe0QidRRMjLSM1IryNhJLoGaWNHaRei+3T422l9lwOBHMcDvHnekYjSlSnGcXGaumWi7O6PTtUtYarVGqBQmFF12CQ1Rn6JL2GSBRlbe178rejU3DAEG4IuCNxE+d9EaUfD1A65g2DpfrL+ozt+hM9d1Z00hVbNelUzRvdYmxU8s7gjge+eDVhLTVFF/g8Ps+zOmL6lfk7CESLNyAhCEAIQhACEIQAhCJACZeOxV7qDZR1j2DeL8AOJj8firdBTmd55A8O8zzPXXWUG+GokEXtUYEWJv+7vwF954kW5zgqSlqKv8AHpP3fZFtoq7KmtWmVxFRQigpTJ2Dsjacm1zc9VchYZbrnkOcdgp26jDa3AD2RyXie08Y1UqMbAOxHCmCqjvc5eZlvD6Fqk3YrTvvt9pU7ib/AAM+joUoUIKEcI45Nyd2UXruRkAi82yJHYN5lrR2jmqWKLcf6lTJfyje3zebeD0NSQ7Wxtt7znaPgNw77X7ZqonMzR1OxFlgq4LRyU7HrN7x4fhG5ZetFCRAJk3fJNiRVJsACSTYd5yA850esLilRp4dTvALdoX9WufAylqzhtusCRkg2j37lHnn+WVdPYn6yszA9EdFe5cvU3PjMZeaaXbcutomTWEwNKYe+Y6y5jtHEf38O2dA8zsYk3i7MzZztVdpbjePUSPBvcEct3cf83luquw/Yc+48R885TqLsVAw6j5HsJz/AM+c6k+TNLZo0sBU2K1J+VRPIsAfQmXtY0C4qsBuL7f/ALgFT/dMjEMQBbfw77/4mjpjFmrV+uKFFqKGp3IJemLolTLq7QTqnMes4pxa1Clw018F4O8LepnssQxSYxmnQBjARlo8mMYSSwwiM2ZIYwyCUROk2tV9LCjUNOofsnOd9yOcg34TkG8DwmM0ayzCvRjXg4Sw/wDrmkJOLue/aC0gWH1bnpqMifaX9Ru8jzm3PGtTdOs2zRZrVEzpsfaVfZPMqPNb8s/WdG4sVUDjLgw5MN4+eFp4lFyhJ0amVz3Ru7PdF2EITpKhCEIAQhCANlTH4rYXLrHcP7nsEmr1Qiljw9ewTh9adPGipIN6rg7I90c+4ep5zj1FWV1Rp7yf0u5ZWXmeEZetunzTvQpOfrGydweku1vRT75BuT7KnmRbkdG4facbxsZ5EiwIsALcSdq/YvbKyPYmo92Y3Hbc7wN+ZJbx8Zv6Jwmwlj1ibnv+cp7Ok0kNLS6Fu3l92cs6jm7lpKcsIloqLHgTUqJaPWIDHCABMcBGybC0S7og3uwXuucz4C58JDdiTodGj6jCPV3M/V/pT1JbxnLtOm1qrgbFFcggDEeBVR4C/mJzEzpbpy7lp9iN5VrrLbyvUWaJlDFxdHaBHiO/5y8ZmpZlZWGXEbiP0Nxl2zfrU7zIx2HN9pRfKzDdtD9f8TaE7bMq43KtZrqt+TA96kX+e2dBrBY0cG9sjR2CRw2FpsP/AJGnOut1uMxf4gqe4ghfOdLi229HYZvdcp3XDj/6xMNS7Vab9WvlFqa8rMDZtAwUWikTqKjCkaI8mNJkEjCJGwkhMjcwShhMY7RXaRkyDRCJUZSGRirKQVYbwRmCJ7bq/pFHw1DGUxsqU2MQt8l2GKs+fuPtZ5dBiTfZUTxBhPQPon00FqPg6hGxWu9O+76wLZ0z95Re33G5zk1FJSXXbdf0Xi+D1+Ey9GMULYdvYANMn2qRyXfvKHoHebBCevNScRcIQhACITFmJiazVq4o02ISkVeuykglrBqdAEcxZ2+7sCxFTICnrLpL6pDUcHYA6Nj1ju3c7mw755Nj8a9Ry7G7ueiOA5flXf2ntN50/wBI2mPrcQMOuaURmB7VVhcj8q2H5m7JyOFTbqc94vwtezW7L9EdxnVotJGk3Ve8n9I56tRy8vC/st6Mwe0+22ajJB2DLaPqfzGdCi2Egw1OwEtKJ1N3KIeoikQEDK3LAoji0BCVuLABN7VPDbVUudyL/M+Q9NrzmEJ02D+wwLP7VTMfn6K2/L0pnVflt3LQzcwdI4kvVd+DMbfhGS+gEq2jj5Rt5olZFWMaRMJK0YwkgrOkp1aU0HErVRJIOY0rQG0bAbVgb8zZyL891vGbujXDaMcDclZGA5B7D+qo3pMfST9NjwVdr+Egn4S7q6CKWMpeyKYfxp1UIPiB8JTUw8sZdmn/AILQef2ViI1o4CIROsxIzGsY9xaROZDLoaxkTRzGNtIZZEezGmPIiQXRGwyi4eu9N0qUzsujB1PJlNx4ZbuIissicSGSe+YPSIxeFpYugLuo2tnjcdGtRPabEDhtKjZgTdoV1dFdTdWUMpHEMLg+U8S+jXWxcLiPqKjWpV2AN9yVOqrdzZKeVlOVjPX8J9lVal7L7VSn2MTeqn8RDjPPbYDJZ5U4pSaRojVhCMY2zOQEqSZ+mccaSAIA1WowSkp3M5BN2+6qhna2eyhtnYTK0tjF0bgmYHaqZhS3Wq13uSzW5m7EDIAEDIAS1oi9dzi26rKUw4PCiSCanfUIVvwrT3Hanm30h6a/aMV9WhumHugzyZzbbY2O4WC+Dc5rRh1ytwUnKyOYdmZiAxZ3uzPx6ZuxufaY39TynQaOwQRQAPkZAdw3SDROAtZjvOee/Pn2/wDE2qaWnoSlwc6Q5V8ooFzJF7YxhymVy1h5WCxA/OOC8ouTYeIlrwi2kEj8PQLsqDezBe65Av4Td1srAGnSXIKt7d/RUeAB85Hqth9urtncgv8Amboj02vSZmlMT9ZVd+BOX4R0V9AD4zPM/YnESoYhikxpmxQbEa0dGNAI6kqV5bcyliIRBzuJXa2x9xh5sZf1Ye9Sovv4Or4siDP+X0lOlmW8vjL2piXxtBDuYVqZ7mpMZfVxbp7ej+GRSe9ikzyPbjEa6qeYHwiNN0VF2o1jEJiAyrLiMYwiOAhBKG3jSIrGAUmVnKMVdl1FvBGTG7BMlNhN7VrVHE40hlH1dG+dVwbMOVJfbP3sl7SRaefVruWywbRilk5n9jFR1phS7sdlVQFnY23ADM5c/Ge66o6Mxa4SkmNf7SmytTIIZ0RRYLUbqs2yXQkey28nOXtXNWMNgk2aKdIgB6jdKo/4m5fdFgOU3JgSxZiaX+2cYRT0WAauRwo3ICf+oQV/CtTMECaOOxS0kao19lRewFyTuCqOLE2AHEkCVNF0Gpoz1iBVcmpVN+ipsLID7qKAoOV9kneTBBR1y02MJhS62FRvs6Q4bZBztyUAt+W3GeRau4GnVdi+Jo0whH7xypdjx2iOl+vrc1x07+219sX+qS60lPEX6VQjmxAyO4Ku43mGqWnp0KLjDs2c85ps9Lw2gHYfZ1KNT8FUN/YQq6FrrvpP4Wf+kmebCgCQbbuNpq4bS2Jpfu8RVUDhtsV/ha6+kOjPh/RTxI9jqnRl6LgqeG0CD6xmyd1v8zMw+vOPWwZ6dQcdukN3ZsFJo0dc6Tf9Rgk/FScA+RC2/ilXCouPhluuPca9PK4jUYiX6elNGvuq1KJPB0JA/MoI/ml6hounV/cYqjUPJWF/EAm0o5WyrFrXwzIDx6y9iNA1U3oxHNQG+Bv6Svh8ITUWnmCzAWIsbHefK5kdSyLM3sP9hgmfc9Xd+borbuUbXnOZcidFrZXG0lJcgo2rdpuq+QB85zhlaeL9y0uwhMa0W0bNCjEvGsY5o0yxBGZTxEuMZSxJhEGDT6zdrEee2PjaWdBYn6rEU6tr7NQNbdkVAYC/ZtL4ytbr9jr/AFj+0bh8mb8V/Eg3+e2dMleNmZ3sxCOW7h3SNpPWHSYfePxkLCCVkYYWiiI3ZBcRjI2OeUUGOyXfu8Jz1KyjssmsIX3Y1KfEyP6xndadJGeoxsiqLljyA9b+c09A6Ir45ymHXoqbPUbJE7z7TclGfOwznseq2qWHwKWpjbqMOnVaxd+z7q/dGXO5znBObk7tm2ywcrql9GoW1XH2d94oA3pr/wCYf+43Z1fxb56UqgCwFgNwEfCUICEIQDFc/X4jZ/7WHILcmrkAovaEU7R+8yWzUzjvpE1j2ycHSboj98wO8/6YPL3vL3hO8Gj1Wk1KmzU9raO2pBcM7FmcFgbsSSbm84vEfRt/p4k91SmGv3srD4S8OlO7IdzzvY7IbM7Gv9H2LXqtScfjZT5FLespNqbjhl9Tfuen/wDqdKqpYZn0nOBSMgfhCxm3V1Zxq78O+XLZb+kmZ2IwdSn+8puna6Mn9Ql1XfDI8NdisL8vnxigdnz4Ry55iOA+by38iRV0okQI8YjIpOYBI3bvSTlB8mN2ByEutR3RR0PUtYXS2Jp/u8RVXs2iy/wPdfSbmB10xRYLWqIUsdpggWp1TYIVyVibC9shfjac0afzf9Y005EpUpZRKhOOGdSNd3JIqYajXUEhSwKMyg2UsSGANrG1st0tprFo9x06VageJWzr4AEn+WcVY8vKI3l6SVRpP8X8Mq5zWUegUFwlX9xjqZJ3JU6DeTEEfwyd9X64F1VXHNHB/qtPNyl4mGZ6Z2qbuh5ozIfNSJDoPiXygqi5R3OJwNROvTde0qbee6VAQdxHhnMrCa3Y6mcsQWHuuqN622vWaK68VG/6jDUKo5hSjeZL5+Uq6c1wn7Mv1xYOJQxbWB42m2mmNG1cmFbDtzsXS/eNrLwWOqatGsu3hMRRrp91gCOzK4v3kSvVb8lYWvg4CnULLVPHZY+Km4/tJqVjUbkdkjuZTH1NHVKFWpTqIVYqxsbXsTkQRkRvzHumV8D7B4gbB70bL+U+k7LprYyeWSVz0m/E3xMgaT4nrn53yKQsFuSMxhgzXNh58u7mfSMxFUU1JP8AzOOtqOI/JvCnbdhWqhASTOg1M1IrY4itX2qWG3jg9Uck91T7/lzGtqLqCcQVxeOS1PI06LDr8Q9QHcvJeO85ZH19QBkJw3NSpo7R9OhTWlRRaaKLBVFgO3tJ4k5mXYQgBCEIAQhCAEIQgBCEIARIsIBk43V7C1b/AFlCmSeIUK38S2PrMXE/R/hW6jVKfYGDD+cE+s6+LJTaB5zifo6f2K6N2PTK+qsfhMytqNjU3JTqfhcf7ws9YhJ62RZHilfQGLTr4eoO5dseaXme2RsciOBuD5Ge9yDE4VKgs6K45MoYeRk+ILHhXrFtPW8Xqdg3/wC1sHmjFPQG3pMPF/R4N9KuR2OoP8y2+EsqiIseftTH/H+Iw0+30nS43U3GU91NXHNHB9G2T6GYeJw70zapTdD99SvkGE1jWksMo4J5RTKxpAlkiIUm8dQ+SjpLgrMsrupVg6Eqw3MpKsO5hmJcKD5ykbJNo1ovZmbpyWBmK0zXfZFVzV2OqXALqD1gHttEHK4YsMuEZhnBclT0WIbxGTXHPdGVEtwjsPTs2XiPKaJLghvuS4s9LwU/yi8qnPdLONU7fZsqfDYX+8rs2ytzOGtW26V+zenDljatRUUk7h85TuPo91HaoUxmNXo5NRosN/EVHHkVU954Sv8AR3qd+1MMbil+xU3o0iMqhB/eMOKg7h7RF9wG17FOLJsLCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEjqUwwswBB3ggEeRkkIBz+P1SwlW5NII3vUzsHyHRPiJzGkvo+qC5oVQ491xY/wAQyPkJ6NFllJoix4ZpLRtegbVabJ2kXU9zC6nwMz3tf5/4nv7oGBDAEHeCLgjtBnLaY1Fw1W7U70H+4LoT20zl/DaXjU7kOJ5Qw+fTOOwYBqJcAEuo4ZWtn6Tb0xqtisNcsm3T95LsB2sOsviLdswNzBr+vHmJpe62K2Jcam8niqD4X/pl7VLVr/xDEdK/7NQYfWfffeKQPq3IEDjkxdG1MRWShS67KMyMkG0wZ27FBvbjkN5nsuhNFU8LQShSFlQWud7HezMeJJuSe2YSyXRdpoFAAAAAsABYADcAOAkkISpIQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgCTmtO6m4XE3Oz9W59tLC5+8u5u/f2zpoklOwOW1Q1f8A2bbNRhUrAimamdii9NAAerk4v2gb7CdVGLvPf/YR8gBCEIAQhCAEIQgBCEIAQhCAf//Z";
  const [productDescription, setProductDescription] = useState("");
  const [productLocation, setProductLocation] = useState("");
  const [rentalPeriod, setRentalPeriod] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = () => {
    // Lógica para buscar os dados do produto no banco de dados
    // Atualize os estados com os dados do produto recuperados
  };

  const handleRentButtonClick = () => {
    // Lógica para manipular o clique no botão de alugar
  };

  const handleRentalPeriodChange = (event) => {
    setRentalPeriod(event.target.value);
  };

  return (
    <>
      <Header backgroundColor={"#16697A"} />

      <Container
        fluid
        className="vh-100 align-items-center justify-content-center"
      >
        <Row
          className=" text-center align-items-end "
          style={{ height: "30%" }}
        >
          <h4>Produto</h4>
        </Row>
        <div className=" row justify-content-center ">
          <Col md={6} className=" d-flex justify-content-end my-2">
            <div
              className="border border-dark rounded-start p-3 d-flex justify-content-center align-items-center"
              style={{ width: "500px", height: "350px" }}
            >
              {productImage && (
                <img
                  src={productImage}
                  alt="Imagem do produto"
                  className="img-fluid"
                />
              )}
            </div>
          </Col>
          <Col md={6} className=" d-flex justify-content-start my-2">
            <div
              className="border border-primary rounded-end p-3"
              style={{ width: "500px" }}
            >
              <p>
                <strong>Descrição</strong> {productDescription}
                <br />
                <h5 className="mb-3">
                  Lorem ipsum, lorem ipsum, lorem ipsum, kkkkkkkkkkkkkkkkkkk:
                </h5>
                <strong>Localização:</strong> {productLocation}
                <br />
                <h5 className="mb-3">Santo Amaro</h5>
                <strong className="me-2">Período:</strong>
                <select
                  className="mb-4"
                  value={rentalPeriod}
                  onChange={handleRentalPeriodChange}
                >
                  <option value="1">1 dia</option>
                  <option value="3">3 dias</option>
                  <option value="7">7 dias</option>
                  <option value="15">15 dias</option>
                  <option value="30">1 mês</option>
                </select>
                <br />
                <hr></hr>
                <strong>Total:</strong> {rentalPrice}
                <br />
              </p>
              <div className="d-flex justify-content-end ">
                <Button
                  variant="primary"
                  onClick={handleRentButtonClick}
                  className="w-50 "
                  style={{ backgroundColor: "#16697A" }}
                >
                  Alugar
                </Button>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
};

export default DetalhesProduto;
