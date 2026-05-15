import{e}from"./iframe-CFLjOTm5.js";import{g as s}from"./arrayEqualityCheck-ChmsrC0B.js";import{C as p}from"./ComposedChart-FER9Vi0e.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-eqSTPiFt.js";import{X as l}from"./XAxis-CPArG0UG.js";import{Y as h}from"./YAxis-D1od4iBb.js";import{R as d}from"./ReferenceArea-CYffWE2I.js";import{R as x}from"./RechartsHookInspector-BDSD1XTs.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BU0Jf3lU.js";import"./immer-e_Tfrumf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7LYgHfU.js";import"./index-DU898aRA.js";import"./hooks-C_Gw3bpR.js";import"./axisSelectors-DczBvRuT.js";import"./d3-scale-CTwBFda5.js";import"./zIndexSlice-Cx77az4x.js";import"./renderedTicksSlice-odoaHiua.js";import"./CartesianChart-Dkwg52u_.js";import"./chartDataContext-CdLUr7Zf.js";import"./CategoricalChart-BQR3q1EG.js";import"./CartesianAxis-BpdXJUIh.js";import"./Layer-CWq3y3ul.js";import"./Text-BZYuARJv.js";import"./DOMUtils-DJPQYNDH.js";import"./Label-BSOdMnMn.js";import"./ZIndexLayer-D7dGD0_V.js";import"./types-CgNdS23P.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-DwfIT2qv.js";import"./useAnimationId-DK1cyyuV.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-xA73MIG_.js";import"./ChartSizeDimensions-DagJBs5z.js";import"./OffsetShower-CbRTjXXF.js";import"./PlotAreaShower-Bz-8aerp.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
