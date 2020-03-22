

<template>
  <div style="padding: 10px">
    <div style="background: #fff; border-radius: 8px; padding: 20px;">
      <p class="msg_title">待退库资产列表</p>
      <div class="query-c">
        资产编号：
        <Input search placeholder="请输入查询内容" style="width: auto" />
      </div>
      <div class="query-c">
        出库时间：
        <Input type="date" value="2020-03-22" placeholder style="width: auto" />-
        <Input ref="selection" type="date" :value="curDate" placeholder="结束日期" style="width: auto" />
      </div>
      <br />
      <Table ref="selection" max-height="670" border stripe :columns="columns1" :data="data1"></Table>
      <br />
      <Page :total="100" show-sizer show-elevator />
    </div>
  </div>
</template>

<script>
export default {
  name: 'resource_retreat',
  data() {
    return {
      curDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
        },
        {
          title: '资产编号',
          key: 'resource_id',
        },
        {
          title: '规格类型',
          key: 'resource_type',
        },
        {
          title: '出库时间',
          key: 'resource_time',
        },
        {
          title: '领用人',
          key: 'resource_username',
        },
        {
          title: '领用部门',
          key: 'resource_part',
        },
      ],
      data1: [
        {
          resource_id: 1,
          resource_type: 'xxx类型',
          resource_time: '2020-03-22',
          resource_username: '布拉达叔叔',
          resource_part: '布拉达',
        },
        {
          resource_id: 2,
          resource_type: 'xxx类型',
          resource_time: '2020-03-22',
          resource_username: '布拉达叔叔',
          resource_part: '布拉达',
        },
        {
          resource_id: 3,
          resource_type: 'xxx类型',
          resource_time: '2020-03-22',
          resource_username: '布拉达叔叔',
          resource_part: '布拉达',
        },
        {
          resource_id: 4,
          resource_type: 'xxx类型',
          resource_time: '2020-03-22',
          resource_username: '布拉达叔叔',
          resource_part: '布拉达',
        },
        {
          resource_id: 5,
          resource_type: 'xxx类型',
          resource_time: '2020-03-22',
          resource_username: '布拉达叔叔',
          resource_part: '布拉达',
        },
        {
          resource_id: 2,
          resource_type: 'xxx类型',
          resource_time: '2020-03-22',
          resource_username: '布拉达叔叔',
          resource_part: '布拉达',
        },
        {
          resource_id: 6,
          resource_type: 'xxx类型',
          resource_time: '2020-03-22',
          resource_username: '布拉达叔叔',
          resource_part: '布拉达',
        },
        {
          resource_id: 7,
          resource_type: 'xxx类型',
          resource_time: '2020-03-22',
          resource_username: '布拉达叔叔',
          resource_part: '布拉达',
        },
        {
          resource_id: 8,
          resource_type: 'xxx类型',
          resource_time: '2020-03-22',
          resource_username: '布拉达叔叔',
          resource_part: '布拉达',
        },
        {
          resource_id: 9,
          resource_type: 'xxx类型',
          resource_time: '2020-03-22',
          resource_username: '布拉达叔叔',
          resource_part: '布拉达',
        },
        {
          resource_id: 10,
          resource_type: 'xxx类型',
          resource_time: '2020-03-22',
          resource_username: '布拉达叔叔',
          resource_part: '布拉达',
        },
        {
          resource_id: 11,
          resource_type: 'xxx类型',
          resource_time: '2020-03-22',
          resource_username: '布拉达叔叔',
          resource_part: '布拉达',
        },
      ],
    }
  },
}
</script>

<style scoped lang='less'>
.msg_title {
  line-height: 24px;
  font-weight: bold;
  padding: 8px 0;
  font-size: 16px;
  color: #333;
}
.query-c {
  margin-bottom: 12px;
}
</style>