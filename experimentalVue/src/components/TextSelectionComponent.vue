

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const textContent = ref(null);
  const selectedText = ref('');

  const captureSelectedText = () => {
    const selection = window.getSelection();
    if (selection){
      const text = selection.toString();
      if (text) {
        selectedText.value = text;
      }
    }
  };

  onMounted(() => {
    document.addEventListener('mouseup', captureSelectedText);
  });

  onUnmounted(() => {
    document.removeEventListener('mouseup', captureSelectedText);
  });



</script>

<template>

  <div class="component-container">
    <p
    ref="textContent"><!-- add long random text about science -->
    The history of science is the study of the development of science, including both the natural and social sciences (the history of the arts and humanities is termed history of scholarship). Science is a body of empirical, theoretical, and practical knowledge about the natural world, produced by scientists who emphasize the observation, explanation, and prediction of real-world phenomena. Historiography of science, in contrast, studies the methods employed by historians of science. The English word scientist is relatively recent—first coined by William Whewell in the 19th century. Previously, people investigating nature called themselves "natural philosophers". While empirical investigations of the natural world have been described since classical antiquity (for example, by Thales and Aristotle), and scientific methods have been employed since the Middle Ages (for example, by Alhazen and Roger Bacon), the dawn of modern science is often traced back to the early modern period during what is known as the Scientific Revolution, which took place in the 16th and 17th centuries in Europe. The scientific method soon played a greater role in knowledge creation and it was not until the 19th century that many of the institutional and professional features of science began to take shape; along with the changing of "natural philosophy" to "natural science." Modern science is typically divided into three major branches that consist of the natural sciences (e.g., biology, chemistry, and physics), which study nature in the broadest sense; the social sciences (e.g., economics, psychology, and sociology), which study individuals and societies; and the formal sciences (e.g., logic, mathematics, and theoretical computer science), which study abstract concepts. There is disagreement, however, on whether the formal sciences actually constitute a science as they do not rely on empirical evidence. Disciplines that use existing scientific knowledge for practical purposes, such as engineering and medicine, are described as applied sciences. Science is related to research and is commonly organized by academic and research institutions as well as government agencies and companies. The history of science is closely related to the history of technology, as scientific discovery is often a precursor to the development of new technology. In the same way, the history of science is also a study of the development of scientific instruments and their use in scientific research. The history of science is also a study of the development of scientific organizations and institutions. The development of the history of science shows the development of scientific disciplines as well as the development of scientific knowledge in human societies. The development
  </p>

  <p ref="textContent">
    影よりも存在があやふやな透き間をはじめとするディスプレイ上のイメージを、操作可能な確固と
    した存在にしていくために「デスクトップメタファー」が導入された。デスクトップメタファーは、物理空間で培ったヒトの身体感覚をコンピュータの論理空間に直結したディスプレイの平面に合わせ
    たかたちで導入し、XYグリッドに表示される透き間などの存在に実体性を与えていく。しかし、それはメタファーによって捏造された存在感である。
  </p>
    <div>Selected text: {{ selectedText }}</div>
  </div>
</template>

<style scoped>
  

  .textContent {
    user-select: text;
    cursor: pointer;
    background-color: #e5ffc7;
  }
  .component-container {
    padding: 20px;
    border: 1px solid #000000;
    border-radius: 30px;
  }
</style>
