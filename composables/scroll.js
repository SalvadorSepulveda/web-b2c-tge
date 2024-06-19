import { ref, onUnmounted } from 'vue';

export const useScroll = () => {
    const position = ref(0);

    const updatePosition = () => {
        position.value = window.scrollY;
    };

    const initialize = () => {
        window.addEventListener('scroll', updatePosition, { passive: true });
    };

    onUnmounted(() => {
        window.removeEventListener('scroll', updatePosition);
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return {
        position,
        scrollToTop,
        initialize
    };
};