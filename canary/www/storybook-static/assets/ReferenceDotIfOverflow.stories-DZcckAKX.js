import{e}from"./iframe-Dw3q2J_C.js";import{R as n}from"./arrayEqualityCheck-CyZN96pQ.js";import{C as s}from"./ComposedChart-qdmZkWDY.js";import{C as p}from"./CartesianGrid-BHFrmdCe.js";import{X as c}from"./XAxis-BkGhyUaZ.js";import{Y as f}from"./YAxis-Rj4UToqR.js";import{R as l}from"./ReferenceDot-dqRTT8Zj.js";import{R as h}from"./RechartsHookInspector-CjBXEdYk.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BpxWTFo7.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BxCpSvqF.js";import"./hooks-CXCEGVm_.js";import"./axisSelectors-Bj4F6VGN.js";import"./zIndexSlice-CgOi6Kpf.js";import"./CartesianChart-BoeRzCq2.js";import"./chartDataContext-toYkGVnu.js";import"./CategoricalChart-D0JPHmvG.js";import"./CartesianAxis-Dx05xS85.js";import"./Layer-kgIv22jT.js";import"./Text-DlpZzH26.js";import"./DOMUtils-9f_FxyP7.js";import"./Label-BTeufvbK.js";import"./ZIndexLayer-QOZqstTD.js";import"./types-BJHbMGwM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-U-LLWdez.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-cG5s137W.js";import"./ChartSizeDimensions-BOI7XDYO.js";import"./OffsetShower-shA12VSX.js";import"./PlotAreaShower-DksCyK2N.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
