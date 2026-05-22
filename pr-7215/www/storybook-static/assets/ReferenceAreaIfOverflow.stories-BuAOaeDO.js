import{e}from"./iframe-CagDbm-R.js";import{g as s}from"./arrayEqualityCheck-Bn08yLiN.js";import{C as p}from"./ComposedChart-CFPuckpi.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-Cp-b4wtl.js";import{X as l}from"./XAxis-CyILEj33.js";import{Y as h}from"./YAxis-Qo8_bXaH.js";import{R as d}from"./ReferenceArea-CLXzulLw.js";import{R as x}from"./RechartsHookInspector-pMEJlnqX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BrU5Uy_m.js";import"./immer-DWuco0BF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdluFIAh.js";import"./index-DXI37oHl.js";import"./hooks-DvlDA_Iq.js";import"./axisSelectors-Cqpe6Z2t.js";import"./d3-scale-BKLsEBZa.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-Tvm87iuX.js";import"./renderedTicksSlice-71Fk0cz1.js";import"./CartesianChart-BXvauOXS.js";import"./chartDataContext-DU5Nphzy.js";import"./CategoricalChart-DAMUlb45.js";import"./CartesianAxis-6zuZSvBM.js";import"./Layer-D2JglvMB.js";import"./Text-BNs6VPhb.js";import"./DOMUtils-Bw-DvePw.js";import"./Label-COowhm97.js";import"./ZIndexLayer-BqsAA_KH.js";import"./types-D2ON-SRi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-B56fHVHN.js";import"./useAnimationId-BEBp-SWr.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BDeX6XER.js";import"./ChartSizeDimensions-DNx0LPdc.js";import"./OffsetShower-BNTdFgyM.js";import"./PlotAreaShower-B8l1iW5J.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ae=["IfOverflow"];export{t as IfOverflow,ae as __namedExportsOrder,oe as default};
