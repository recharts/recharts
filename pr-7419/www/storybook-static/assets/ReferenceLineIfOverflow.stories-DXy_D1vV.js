import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./ReferenceLine-CPZnbrex.js";import{n as s,t as c}from"./CartesianGrid-D3Nuobx9.js";import{n as l,t as u}from"./Line-CGcNDODy.js";import{n as d,t as f}from"./XAxis-DaKmDvZB.js";import{n as p,t as m}from"./YAxis-DFF_vhTk.js";import{n as h,t as g}from"./ComposedChart-BMuDWuTx.js";import{r as _,t as v}from"./Page-DUsfWi7y.js";var y,b,x,S,C,w;function T(){return(T=t((()=>{y=e(n()),h(),l(),a(),s(),d(),p(),i(),v(),{expect:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow`},C={render:()=>y.createElement(r,{width:`100%`,height:500},y.createElement(g,{data:_,margin:{top:5,right:30,left:20,bottom:5}},y.createElement(c,{strokeDasharray:`3 3`}),y.createElement(f,{dataKey:`name`}),y.createElement(m,{type:`number`}),y.createElement(u,{dataKey:`uv`}),y.createElement(o,{ifOverflow:`extendDomain`,y:1700}))),play:async({canvasElement:e})=>{let{findByText:t}=x(e);b(await t(`1800`)).toBeInTheDocument()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`IfOverflow`]})))()}T();export{C as IfOverflow,w as __namedExportsOrder,S as default};