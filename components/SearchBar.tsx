import { icons } from '@/constants/icons';
import { Image, NativeSyntheticEvent, NativeTouchEvent, TextInput, View } from 'react-native';

interface SearchBarProps {
  placeholder: string;
  value?: string;
  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onChangeText?: (text: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#AB8BFF' />
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor='#A8B5DB'
        onPress={props.onPress}
        onChangeText={props.onChangeText}
        className='flex-1 ml-2 text-white'
      />
    </View>
  );
};

export default SearchBar;
