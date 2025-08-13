import TodoButton from '@/components/TodoButton';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

const Home = () => {
  const swiperRef = useRef<Swiper>(null);
  const slides = [
    {
      id: 1,
      type: 'welcome',
      title: 'Todyapp',
      description: 'The best to do list application for you',
      image: require('@/assets/logo.png'),
    },
    {
      id: 2,
      type: 'onboarding',
      title: 'Your convenience in making a todo list',
      description: "Here's a mobile platform that helps you create task or to list so that it can help you in every job easier and faster.",
      image: require('@/assets/Onboarding Image 1.jpg'),
    },
    {
      id: 3,
      type: 'onboarding',
      title: 'Find the practicality in making your todo list',
      description: 'Easy-to-understand user interface that makes you more comfortable when you want to create a task or to do list.',
      image: require('@/assets/Onboarding Image 3.jpg'),
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === slides.length - 1;
  const isFirstSlide = activeIndex === 0;

  const renderSlide = (item: any) => {
    if (item.type === 'welcome') {
      return (
        <View className="flex-1 bg-brand">
          {/* Main Content - Centered */}
          <View className="flex-1 items-center justify-center">
            <Image source={item.image} className="w-full" resizeMode="contain" />
            <View className="flex flex-row items-center justify-center  w-full">
              <Text className="text-center mx-10  text-2xl font-sf-bold text-white">{item.title}</Text>
            </View>
            <Text className="text-md  font-sf-semibold text-center text-white mx-10 mt-3">{item.description}</Text>
          </View>
        </View>
      );
    }

    // Onboarding slides
    return (
      <View key={item.id} className="flex bg-white items-center justify-center p-5">
        <Image source={item.image} className="w-full h-[400px] " resizeMode="cover" />
        <View className="flex flex-row items-center justify-center w-full -mt-20">
          <Text className="  mx-10 text-center text-2xl font-sf-bold text-neutral-primary">{item.title}</Text>
        </View>
        <Text className="text-md font-sf-semibold text-center text-[#858585] mx-10 mt-3">{item.description}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView className={` flex-1 px-2 h-full items-center justify-between ${isFirstSlide ? 'bg-brand' : 'bg-white'}`}>
      <TouchableOpacity
        onPress={() => {
          router.replace('/onboarding');
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className={`text-brand ${isFirstSlide ? 'text-white' : 'text-brand'} text-md font-sf-bold`}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-2 h-2 rounded-full bg-neutral-line mx-1" />}
        activeDot={<View className={`${isFirstSlide ? 'bg-neutral-line' : 'bg-brand'} w-6 h-2 rounded-full  mx-1`} />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {slides.map((slide) => (
          <View key={slide.id} className="flex-1">
            {renderSlide(slide)}
          </View>
        ))}
      </Swiper>
      <View className="px-10 w-full ">
        {!isFirstSlide && (
          <TodoButton title={'Continue'} onPress={() => (isLastSlide ? router.replace('/onboarding') : swiperRef.current?.scrollBy(1))} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
