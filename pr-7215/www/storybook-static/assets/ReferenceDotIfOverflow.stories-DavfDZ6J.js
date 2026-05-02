import{e}from"./iframe-DDxjm-WU.js";import{R as n}from"./arrayEqualityCheck-BDTW-iCp.js";import{C as s}from"./ComposedChart-CQsXSi4S.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BlBAm1Rb.js";import{X as f}from"./XAxis-Bk56gde7.js";import{Y as l}from"./YAxis-CFpFu4li.js";import{R as h}from"./ReferenceDot-BVdScqgG.js";import{R as d}from"./RechartsHookInspector-Bsn_fuN0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C_ucOoTo.js";import"./immer-Dkl5Am7g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bpo229F5.js";import"./index-c9CLkn1R.js";import"./hooks-YOhxCck_.js";import"./axisSelectors-z--bPkJA.js";import"./d3-scale-5ginP8HL.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-CyBi_8s9.js";import"./renderedTicksSlice-Bbo75at4.js";import"./CartesianChart-ChctIvnC.js";import"./chartDataContext-kNPZezMX.js";import"./CategoricalChart-CBIMgpMR.js";import"./CartesianAxis-ClZZ2QTc.js";import"./Layer-DLlz0gUf.js";import"./Text-Dhvbhtov.js";import"./DOMUtils-BA-rpJ1d.js";import"./Label-yPRdE_cG.js";import"./ZIndexLayer-BMzzahCv.js";import"./types-BJgxgmcc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-L6tPFerw.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-PKdkWvoA.js";import"./ChartSizeDimensions-DNtnVTHS.js";import"./OffsetShower-kAoxPyWs.js";import"./PlotAreaShower-CCGJY3Cl.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
