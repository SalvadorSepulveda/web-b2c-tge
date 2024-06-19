import { ref, watch } from 'vue';

const message = ref('');
const type = ref('');
const show = ref(false);
const emoji = ref('');

const emojisWithType = {
    warning: '⚠️',
    error: '❌',
    success: '✅',
};

const setMessage = (texto, tipo) => {
    message.value = texto;
    type.value = tipo;
    show.value = true;
    setTimeout(() => {
        show.value = false;
    }, 5000);
};

watch(type, (newType, oldType) => {
    emoji.value = emojisWithType[newType] || '';
}, { immediate: true });

export default function useNotify() {
    return {
        show,
        message,
        emoji,
        setMessage,
    };
}
