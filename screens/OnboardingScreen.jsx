import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Button } from "react-native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const DotComponent = ({ selected }) => {
    return (
      <View
        style={{
          width: 8,
          height: 8,
          marginHorizontal: 3,
          borderRadius: 4,
          backgroundColor: selected ? "#2D3748" : "#A0AEC0",
        }}
      />
    );
  };

  const skipLabel = <Text style={{ fontWeight: "bold" }}>Skip</Text>;
  const nextLabel = <Text style={{ fontWeight: "bold" }}>Next</Text>;

  return (
    
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("Home")}
      DotComponent={DotComponent}
      controlContainerStyle={{
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
      }}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
            source={require('../images/102642-contact.gif')}
              style={{ width: 300, height: 300, }}
            />
          ),
          title: "Happy Shopping",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate!.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
            source={require('../images/103187-cloud-security.gif')}
              style={{ width: 300, height: 300 }}
            />
          ),
          title: "All you need in One Place",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate!.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
            source={require('../images/112424-team-collaboration.gif')}
              style={{ width: 300, height: 300 }}
            />
          ),
          title: "Happy Sale, Happy Customer",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate!.",
        },
      ]}
      bottomBarColor="#ffffff"
      showSkip={true}
      showNext={true}
      skipLabel={skipLabel}
      nextLabel={nextLabel}

    />
  
  );
};

export default OnboardingScreen;
