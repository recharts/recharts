import{e}from"./iframe-C5xSgLrQ.js";import{R as n}from"./arrayEqualityCheck-y9OahTCZ.js";import{C as s}from"./ComposedChart-Cii0yw7e.js";import{C as p}from"./CartesianGrid-D4zDVCTs.js";import{X as c}from"./XAxis-BRtXBZQJ.js";import{Y as f}from"./YAxis-DVWoPU6G.js";import{R as l}from"./ReferenceDot-Du1ZH32R.js";import{R as h}from"./RechartsHookInspector-DGw_Tn__.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CvWnTU23.js";import"./immer-CibMA2Vd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6VkPGGy.js";import"./index-7mth2ygc.js";import"./hooks-D_Ct_jBZ.js";import"./axisSelectors-Cjz2FycN.js";import"./d3-scale-DSnNq-Zb.js";import"./zIndexSlice-Bh8d7RDS.js";import"./renderedTicksSlice-3asYpfwT.js";import"./CartesianChart-DEUFIUWW.js";import"./chartDataContext-DLPHSsFH.js";import"./CategoricalChart-CdAWxs2w.js";import"./CartesianAxis-z8YHC5m1.js";import"./Layer-BwFEHJgH.js";import"./Text-D6Wg1Fki.js";import"./DOMUtils-DtO1NYEm.js";import"./Label-BiYutikV.js";import"./ZIndexLayer-BcEHBZGv.js";import"./types-BYICSsoS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-CuQtPzJT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DNx2k_-S.js";import"./ChartSizeDimensions-ChWtlIEh.js";import"./OffsetShower-ChplnW4p.js";import"./PlotAreaShower-UojNVDVn.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
