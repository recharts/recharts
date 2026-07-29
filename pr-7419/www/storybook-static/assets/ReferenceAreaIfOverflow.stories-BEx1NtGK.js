import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,Q as i,R as a,Vn as o,nt as s,t as c,u as l}from"./iframe-BqVvK_R4.js";import{t as u}from"./data-J2vpPkF6.js";import{r as d}from"./Page-C0w_0_Yr.js";var f,p,m,h,g,_;e((()=>{f=t(n()),c(),u(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Examples/cartesian/Reference Area/If Overflow`},g={render:()=>f.createElement(o,{width:`100%`,height:500},f.createElement(l,{data:d,margin:{top:5,right:30,left:20,bottom:5}},f.createElement(i,{strokeDasharray:`3 3`}),f.createElement(r,{dataKey:`name`}),f.createElement(a,{type:`number`}),f.createElement(s,{x1:`Page B`,x2:`Page E`,y1:1890,y2:-1e3,stroke:`red`,strokeOpacity:.3,ifOverflow:`extendDomain`}))),play:async({canvasElement:e})=>{let{findByText:t}=m(e);p(await t(`1900`)).toBeInTheDocument(),p(await t(`-950`)).toBeInTheDocument()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source}}},_=[`IfOverflow`]}))();export{g as IfOverflow,_ as __namedExportsOrder,h as default};