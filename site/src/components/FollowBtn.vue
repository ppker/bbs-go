<template>
  <div>
    <button
      class="button follow-btn"
      :class="{ 'is-followed': followed }"
      @click="follow"
    >
      <i class="iconfont icon-add" />
      <span>{{ followed ? "已关注" : "关注" }}</span>
    </button>
  </div>
</template>

<script setup>
const userStore = useUserStore();
const props = defineProps({
  userId: {
    type: Number,
    required: true,
  },
});
const emits = defineEmits(["onFollowed"]);

const { data: followed } = await useAsyncData(`followed:${props.userId}`, () =>
  useHttpGet(`/api/fans/isfollowed?userId=${props.userId}`)
);

async function follow() {
  if (!userStore.isLogin) {
    useMsgSignIn();
    return;
  }
  try {
    if (followed.value) {
      await useHttpPostForm("/api/fans/unfollow", {
        body: {
          userId: props.userId,
        },
      });
      followed.value = false;
      emits("onFollowed", props.userId, false);
      // useMsgSuccess("取消关注成功");
    } else {
      await useHttpPostForm("/api/fans/follow", {
        body: {
          userId: props.userId,
        },
      });
      followed.value = true;
      emits("onFollowed", props.userId, true);
      // useMsgSuccess("关注成功");
    }
  } catch (e) {
    useMsgError(e.message || e);
  }
}
</script>

<style lang="scss" scoped>
.follow-btn {
  font-size: 12px;
  height: 25px;
  background-color: #2469f6; // TODO
  border-color: #2469f6;
  color: var(--text-color5);

  &:hover,
  &.is-followed {
    background-color: #7ba5f9; // TODO
    border-color: #7ba5f9;
  }
  i {
    font-size: 12px;
    margin-right: 5px;
  }
}
</style>
