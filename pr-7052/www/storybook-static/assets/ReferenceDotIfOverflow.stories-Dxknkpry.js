import{e}from"./iframe-BlrnuDjf.js";import{R as n}from"./arrayEqualityCheck-BTXXQX4n.js";import{C as s}from"./ComposedChart-CXlLrCCb.js";import{C as p}from"./CartesianGrid-BsN6v_bv.js";import{X as c}from"./XAxis-BYp_HR9V.js";import{Y as f}from"./YAxis-BWVYo6DZ.js";import{R as l}from"./ReferenceDot-C3DBQ8XE.js";import{R as h}from"./RechartsHookInspector-BAQjFSl6.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-1DdFNclr.js";import"./immer-BI9UFPL2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bw-KSP5T.js";import"./index-CKL3N-6v.js";import"./hooks-Yl-LcXas.js";import"./axisSelectors-DHIQ-7_W.js";import"./d3-scale-CFGK5P70.js";import"./zIndexSlice-CqZHWfc6.js";import"./renderedTicksSlice-ULPEEzAa.js";import"./CartesianChart-CnkTC8bW.js";import"./chartDataContext-ihmINbbo.js";import"./CategoricalChart-DiwHthGG.js";import"./CartesianAxis-edOWbwOR.js";import"./Layer-XHhRDzId.js";import"./Text-Cu_8uwrn.js";import"./DOMUtils-Cq-iC6tL.js";import"./Label-D_q5FUVB.js";import"./ZIndexLayer-7Hmap2eH.js";import"./types-DB_0tejV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BorEmCO3.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cy5kt_9j.js";import"./ChartSizeDimensions-Igo4L2HP.js";import"./OffsetShower-BEEi0iU5.js";import"./PlotAreaShower-BeUubBWZ.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
