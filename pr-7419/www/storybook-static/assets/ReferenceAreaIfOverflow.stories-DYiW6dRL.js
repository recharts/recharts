import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./ReferenceArea-0_jCcU_4.js";import{n as s,t as c}from"./CartesianGrid-D3Nuobx9.js";import{n as l,t as u}from"./XAxis-DaKmDvZB.js";import{n as d,t as f}from"./YAxis-DFF_vhTk.js";import{n as p,t as m}from"./ComposedChart-BMuDWuTx.js";import{r as h,t as g}from"./Page-DUsfWi7y.js";var _,v,y,b,x,S;function C(){return(C=t((()=>{_=e(n()),p(),a(),s(),l(),d(),i(),g(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Examples/cartesian/Reference Area/If Overflow`},x={render:()=>_.createElement(r,{width:`100%`,height:500},_.createElement(m,{data:h,margin:{top:5,right:30,left:20,bottom:5}},_.createElement(c,{strokeDasharray:`3 3`}),_.createElement(u,{dataKey:`name`}),_.createElement(f,{type:`number`}),_.createElement(o,{x1:`Page B`,x2:`Page E`,y1:1890,y2:-1e3,stroke:`red`,strokeOpacity:.3,ifOverflow:`extendDomain`}))),play:async({canvasElement:e})=>{let{findByText:t}=y(e);v(await t(`1900`)).toBeInTheDocument(),v(await t(`-950`)).toBeInTheDocument()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`IfOverflow`]})))()}C();export{x as IfOverflow,S as __namedExportsOrder,b as default};