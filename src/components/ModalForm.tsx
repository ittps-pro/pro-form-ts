<ModalForm
title="Inventory"
open={modalVisit}
onFinish={async () => {


  message.success("Succees");
  return true;
}}
onOpenChange={setModalVisit}
>
<ProForm.Group>
  <ProFormText
    width="md"
    name="name"
    label="签约客户名称"
    tooltip="最长为 24 位"
    placeholder="请输入名称"
  />

  <ProFormText
    width="md"
    name="company"
    label="我方公司名称"
    placeholder="请输入名称"
  />
</ProForm.Group>
<ProForm.Group>
  <ProFormText
    width="md"
    name="contract"
    label="合同名称"
    placeholder="请输入名称"
  />
  <ProFormDateRangePicker name="contractTime" label="合同生效时间" />
</ProForm.Group>
<ProForm.Group>
  <ProFormSelect
    options={[
      {
        value: "chapter",
        label: "盖章后生效",
      },
    ]}
    width="xs"
    name="useMode"
    label="合同约定生效方式"
  />
  <ProFormSelect
    width="xs"
    options={[
      {
        value: "time",
        label: "time",
      },
    ]}
    name="unusedMode"
    label="reader"
  />
</ProForm.Group>
<ProFormText width="sm" name="id" label="主合同编号" />
<ProFormText
  name="project"
  disabled
  label="project"
  initialValue="SD"
/>
<ProFormText
  width="xs"
  name="mangerName"
  disabled
  label="mangerName"
  initialValue="user"
/>
</ModalForm>