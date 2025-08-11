import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface CheckboxProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export default function Checkbox({ value, onValueChange }: CheckboxProps) {
  return (
    <TouchableOpacity
      style={[styles.container, value && styles.checkedContainer]}
      onPress={() => onValueChange(!value)}
    >
      {value && <Ionicons name="checkmark" size={20} color="white" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#A0AEC0',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedContainer: {
    backgroundColor: '#2A2AFF',
    borderColor: '#2A2AFF',
  },
});
