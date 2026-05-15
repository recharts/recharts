import{e}from"./iframe-C_AsYugi.js";import{R as n}from"./arrayEqualityCheck-xvllERIt.js";import{C as s}from"./ComposedChart-cY0MWVeZ.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BCBuz4XX.js";import{X as f}from"./XAxis-DH_rN-kM.js";import{Y as l}from"./YAxis-gzpn2USg.js";import{R as h}from"./ReferenceDot-C-14pSQh.js";import{R as d}from"./RechartsHookInspector-BZMd9r0w.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CerPTbDf.js";import"./immer-BPZQF6xW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0wr5dja.js";import"./index-DBNDbbEj.js";import"./hooks-DRvuAM61.js";import"./axisSelectors-D6N9K5pJ.js";import"./d3-scale-bPIVgrq4.js";import"./zIndexSlice-CVos1qNt.js";import"./renderedTicksSlice-CULSuwf6.js";import"./CartesianChart-Bf-pcG1N.js";import"./chartDataContext-DxmOKRxG.js";import"./CategoricalChart-C3pZv0iV.js";import"./CartesianAxis-Qsc6tL7N.js";import"./Layer-Dz5BSX-y.js";import"./Text-CQ7cV61I.js";import"./DOMUtils-BnflEJNu.js";import"./Label-Ck2nWAbG.js";import"./ZIndexLayer-Dpd4MxoT.js";import"./types-DFzRwbJd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-E0S9rOFh.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DCPl85jO.js";import"./ChartSizeDimensions-Dh66BsMo.js";import"./OffsetShower-vaJOlCun.js";import"./PlotAreaShower-CMsAoFdB.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
