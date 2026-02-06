import{e}from"./iframe-DxZX8v3W.js";import{R as n}from"./arrayEqualityCheck-CHFkqTV_.js";import{C as s}from"./ComposedChart-BGkEXwf1.js";import{C as p}from"./CartesianGrid-DQNeuEVT.js";import{X as c}from"./XAxis-DzPSb7qL.js";import{Y as f}from"./YAxis-CpMOxs2p.js";import{R as l}from"./ReferenceDot-OED2VOM8.js";import{R as h}from"./RechartsHookInspector-EozXGI-d.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhuxpMgF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMTy2N8_.js";import"./hooks-B7xKXdiJ.js";import"./axisSelectors-CsqEoZpJ.js";import"./zIndexSlice-DbH822fK.js";import"./CartesianChart-BGtowRh8.js";import"./chartDataContext-kn-jHXwi.js";import"./CategoricalChart-CLJuTuVW.js";import"./CartesianAxis-DPUMtDOy.js";import"./Layer-BPZWkKY5.js";import"./Text-BjDK3asE.js";import"./DOMUtils-BxXkT_Dg.js";import"./Label-DcVTU5jd.js";import"./ZIndexLayer-u2cA8wLh.js";import"./types-DXQoRjfG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-6gTSKkj_.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-59kLrafc.js";import"./ChartSizeDimensions-DNmKalNs.js";import"./OffsetShower-Bf42ilrd.js";import"./PlotAreaShower-CjZ5fG5L.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
