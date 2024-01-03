<script lang="ts">
  import dayjs from 'dayjs';
  export let date: Date;
  const obj = dayjs(date.toString());
  const str = obj.format('MMMM D, YYYY').split('T')[0];
</script>

<time dateTime={date.toString()}>{str}</time>