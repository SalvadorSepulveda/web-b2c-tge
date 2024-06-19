import { ref, onMounted, watch } from 'vue';

export function useTheme() {
    const theme = ref('light');

    const initializeTheme = () => {
        theme.value = localStorage.getItem('theme') || 'light';
        updateClass();
    };

    watch(theme, (newTheme) => {
        localStorage.setItem('theme', newTheme);
        updateClass();
    });

    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
    };

    const updateClass = () => {
        if (theme.value === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    onMounted(() => {
        initializeTheme();
    });

    return { theme, toggleTheme };
}
