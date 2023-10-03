import styled from 'styled-components';

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
`;

const Logo = styled.img`
  width: 100px;
`;

const ShopName = styled.h1`
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ImageCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    margin-top: 10px;
    color: #333;
  }

  p {
    color: #666;
  }
  
`;

const Home = () => {
  return (
    // <PageContainer>
        
    //   {/* <Header>
    //     <Logo src="coffee-logo.png" alt="Coffee Shop Logo" />
    //     <ShopName>Nomadic Co</ShopName>
    //     <Description>Enjoy the finest coffee in town!</Description>
    //   </Header> */}
      
    //   <Container>
    //     <h2>Welcome to Our Coffee Shop</h2>
    //     <p>We serve a variety of freshly brewed coffee and delicious pastries. Come and relax in our cozy atmosphere.</p>
    //     <a href="menu" className="menu-button">View Menu</a>
    //   </Container>

    //   <ImageCard>
    //     <img src="coffee1.jpg" alt="Coffee 1" />
    //     <h3>Coffee 1</h3>
    //     <p>Our signature coffee blend</p>
    //   </ImageCard>

    //   <ImageCard>
    //     <img src="coffee2.jpg" alt="Coffee 2" />
    //     <h3>Coffee 2</h3>
    //     <p>Rich and aromatic coffee</p>
    //   </ImageCard>

    //   <ImageCard>
    //     <img src="coffee2.jpg" alt="Pastry 1" />
    //     <h3>Pastry 1</h3>
    //     <p>Delicious pastries to complement your coffee</p>
    //   </ImageCard>
    // </PageContainer>


    <section className="h">
        <div className = "content">
            <h1>  Nomadic.Co </h1>

            <p> Check out one of the best coffee shops in the area</p>

            <a href ="Menu"> Order </a>




        </div>



    </section>
  );
};

export default Home;