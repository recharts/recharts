import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-Dy7ciYWo.js";import{n as a,t as o}from"./ReferenceDot-CpKsyosL.js";import{n as s,t as c}from"./CartesianGrid-DXJ2CyMi.js";import{n as l,t as u}from"./XAxis-B3WODRl4.js";import{n as d,t as f}from"./YAxis-CZypjyHs.js";import{n as p,t as m}from"./ComposedChart-BSnkeRRU.js";import{r as h,t as g}from"./Page-DUsfWi7y.js";var _,v,y,b,x,S;function C(){return(C=t((()=>{_=e(n()),p(),a(),s(),l(),d(),i(),g(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Examples/cartesian/Reference Dot/If Overflow`},x={render:()=>_.createElement(r,{width:`100%`,height:500},_.createElement(m,{data:h,margin:{top:5,right:30,left:20,bottom:5}},_.createElement(c,{strokeDasharray:`3 3`}),_.createElement(u,{dataKey:`name`}),_.createElement(f,{type:`number`}),_.createElement(o,{ifOverflow:`extendDomain`,x:`Page E`,y:1700,r:100}))),play:async({canvasElement:e})=>{let{findByText:t}=y(e);v(await t(`1800`)).toBeInTheDocument()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source}}},S=[`IfOverflow`]})))()}C();export{x as IfOverflow,S as __namedExportsOrder,b as default};