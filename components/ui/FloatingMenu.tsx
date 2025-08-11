import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FloatingMenu() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      path: '/home',
      icon: 'home',
      text: 'Home',
      color: 'blue',
    },
    {
      path: '/settings',
      icon: 'settings',
      text: 'Configurações',
      color: 'black',
    },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <TouchableOpacity
            key={item.path}
            style={[styles.button, isActive && styles.activeButton, isActive && { backgroundColor: item.color }]}
            onPress={() => router.push(item.path as any)}
          >
            <Ionicons name={(isActive ? item.icon : `${item.icon}-outline`) as any} size={24} color={isActive ? 'white' : 'gray'} />
            {isActive && <Text style={styles.activeButtonText}>{item.text}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
  activeButton: {
    flexDirection: 'row',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  activeButtonText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
