import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';


export default function TabsLayout() {
  return ( 
  <Tabs screenOptions={{
    tabBarActiveTintColor: "#396590",
    headerStyle:{backgroundColor:"#ffffffb8"},
    headerShadowVisible: true,
    headerTintColor: "#25292e",
    tabBarStyle:{backgroundColor:"#ffffffb8",},
  }}>

    <Tabs.Screen name="index" options={{ 
      headerTitle: "Practice App", 
      tabBarIcon: ({focused, color})=> 
        <Ionicons 
          name={ focused ? "home-sharp" : "home-outline" }
          size={30}
          color={color}/>
      }}/>

    <Tabs.Screen name="about" options={{ 
      headerTitle: "About",
      tabBarIcon: ({focused, color})=> 
        <Ionicons 
          name={ focused ? "information-circle-sharp" : "information-circle-outline"  }
          size={30}
          color={color}/>
      }}/>


    <Tabs.Screen name="+not-found" options={{}}/>

  </Tabs>);
}
