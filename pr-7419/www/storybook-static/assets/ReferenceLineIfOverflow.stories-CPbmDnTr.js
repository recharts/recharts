import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,Q as i,R as a,Vn as o,X as s,ot as c,t as l,u}from"./iframe-BiMB5Acc.js";import{t as d}from"./data-J2vpPkF6.js";import{r as f}from"./Page-C0w_0_Yr.js";var p,m,h,g,_,v;e((()=>{p=t(n()),l(),d(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow`},_={render:()=>p.createElement(o,{width:`100%`,height:500},p.createElement(u,{data:f,margin:{top:5,right:30,left:20,bottom:5}},p.createElement(i,{strokeDasharray:`3 3`}),p.createElement(r,{dataKey:`name`}),p.createElement(a,{type:`number`}),p.createElement(s,{dataKey:`uv`}),p.createElement(c,{ifOverflow:`extendDomain`,y:1700}))),play:async({canvasElement:e})=>{let{findByText:t}=h(e);m(await t(`1800`)).toBeInTheDocument()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source}}},v=[`IfOverflow`]}))();export{_ as IfOverflow,v as __namedExportsOrder,g as default};