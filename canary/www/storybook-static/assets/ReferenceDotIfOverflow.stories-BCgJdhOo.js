import{R as e}from"./iframe-CxG2PZXj.js";import{R as n}from"./zIndexSlice-DAD_xoRY.js";import{C as s}from"./ComposedChart-D2cTWPQC.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dr3fExMw.js";import{X as f}from"./XAxis-B4ycL0c8.js";import{Y as l}from"./YAxis-B1kX2SHx.js";import{R as d}from"./ReferenceDot-DLxuxeqt.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BLzUd2wF.js";import"./index-DToZBGKP.js";import"./index-DiKZrp18.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DUaFgx3m.js";import"./isWellBehavedNumber-8T9tdyF1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0t_sSZG.js";import"./index-5B0X8Ccq.js";import"./index-DK4BYQS1.js";import"./renderedTicksSlice-DK3Qh-AH.js";import"./axisSelectors-BOLkCBrq.js";import"./d3-scale-LDX-W-e5.js";import"./CartesianChart-DqtDQP9t.js";import"./chartDataContext-Cw7l7MNk.js";import"./CategoricalChart-Dozh9-kX.js";import"./CartesianAxis--mae7NqH.js";import"./Layer-Cge6P4R-.js";import"./Text-Cndr_sMa.js";import"./DOMUtils-D8hCt3_g.js";import"./Label-Z4HB-UJ_.js";import"./ZIndexLayer-kEwpMnQu.js";import"./types-Da-j7B5o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-B9yiNv-3.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
