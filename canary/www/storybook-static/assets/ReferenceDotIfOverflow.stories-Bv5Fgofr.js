import{R as e}from"./iframe-DXKzzws4.js";import{R as n}from"./zIndexSlice-DMX8Hhzz.js";import{C as s}from"./ComposedChart-BiNfp5_o.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-dn8jQool.js";import{X as f}from"./XAxis-B7JoDVaz.js";import{Y as l}from"./YAxis-rHqCYw2v.js";import{R as d}from"./ReferenceDot-DgDcMotJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BD3oF8Du.js";import"./index-lFjFQb2-.js";import"./index-CL_M0WF6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BSNhK7r6.js";import"./isWellBehavedNumber-C7AyK_9S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CAtabfYs.js";import"./index-D033D4Zv.js";import"./index-Bg5IH0LC.js";import"./renderedTicksSlice-egJwNk4f.js";import"./axisSelectors-v3JljGjn.js";import"./d3-scale-DYAtoVGZ.js";import"./CartesianChart-BbjVuMqC.js";import"./chartDataContext-CSoMwZ9z.js";import"./CategoricalChart-CAv3CBz7.js";import"./CartesianAxis-CVHxu40z.js";import"./Layer-C_ZH39cx.js";import"./Text-H0ump6nt.js";import"./DOMUtils-DglI10nq.js";import"./Label-C30Q7qcI.js";import"./ZIndexLayer-CMaU0WuF.js";import"./types-BceUICSF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Dot-sf8y4IWV.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
