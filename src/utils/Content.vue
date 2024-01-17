<template>
  <div class=" bg-black h-[620px] mt-2 ">
    <div class="flex">
      <div class="w-[650px] text-white mt-[15%] ml-[12%]">
        <div class="text-[3.5rem] font-extrabold text-white mb-3">
          <slot name="title"></slot>
        </div>
        <p class="text-[1.7rem] text-white"><slot name="subtitle"></slot></p>
      </div>
      <div class="mt-[100px]">
        <slot name="img"></slot>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="relative top-[-180px] ">
        <slot name="image"></slot>
      </div>
      <div class="w-[670px]">
        <div class="text-[3.40rem] font-extrabold text-white  mt-[-56px] leading-[1.6]">
          <slot name="header"></slot>
        </div>
        <div class="text-[1.7rem] text-white"><slot name="para"></slot></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentPage",
}
</script>

<style lang="scss" scoped></style>
