<template>
  <section class="error_page">
    <svg
      width="245"
      height="180"
      viewBox="0 0 452 342"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z"
        fill="#00C58E"
      />
      <path
        d="M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z"
        fill="#108775"
      />
      <path
        d="M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z"
        fill="#2F495E"
      />
    </svg>
    <div class="info">
      <p v-if="info.status === 404">
        <NuxtLink to="/">back to home</NuxtLink>
      </p>
      <p class="status">{{info.status}}</p>
      <p class="status_text">{{info.statusText}}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    info () {
      if (!this.error) return {}
      // 默认error
      // {message,path,statusCode}
      if (this.error.message) {
        const {message, path, statusCode} = this.error
        return {
          status: statusCode,
          statusText: message,
          path
        }
      }
      // 自定义error，返回res.response
      const {status, statusText} = this.error
      return {
        status,
        statusText
      }
    },
  },
  head () {
    return {
      title: this.info.statusText,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
        }
      ]
    }
  }
}
</script>

<style>
  .error_page{
    padding: 1rem;
    background: #F7F8FB;
    color: #47494E;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: sans-serif;
    font-weight: 100 !important;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .info{
    padding-top: 30px;
    font-size: 24px;
  }
</style>