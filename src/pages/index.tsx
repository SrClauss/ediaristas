import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title="Conheça os Profissionais"
        subtitle="Preencha seu endereço e veja todos os profissionais de sua cidade"
      ></PageTitle>
      <UserInformation
        name="Clausemberg"
        picture="https://avatars.githubusercontent.com/u/50032538?v=4"
        rating={3}
        description="São Mateus-ES"
      />
      <UserInformation
        name="Clausemberg"
        picture="https://avatars.githubusercontent.com/u/50032538?v=4"
        rating={3}
        description="São Mateus-ES"
      />
      <UserInformation
        name="Clausemberg"
        picture="https://avatars.githubusercontent.com/u/50032538?v=4"
        rating={3}
        description="São Mateus-ES"
      />
    </div>
  );
};

export default Home;
