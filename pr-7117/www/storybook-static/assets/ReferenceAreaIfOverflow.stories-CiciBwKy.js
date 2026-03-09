import{e}from"./iframe-CkFXM4wB.js";import{R as s}from"./arrayEqualityCheck-YTUxoqUB.js";import{C as p}from"./ComposedChart-DibFHF-M.js";import{C as c}from"./CartesianGrid-4A_mvLxP.js";import{X as f}from"./XAxis-BrfBiI3E.js";import{Y as l}from"./YAxis--nz6ltt0.js";import{R as h}from"./ReferenceArea-mp9UbVM_.js";import{R as d}from"./RechartsHookInspector-B3xLxxYl.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CgSC7b_8.js";import"./immer-VfMLklKA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BszZHVIX.js";import"./index-BdUYKJku.js";import"./hooks-DcZa8pcT.js";import"./axisSelectors-CJKN5-Iu.js";import"./d3-scale-DufYgqIf.js";import"./zIndexSlice-B5-XLxo_.js";import"./renderedTicksSlice-DBeHnZTe.js";import"./CartesianChart-bKq-XmFS.js";import"./chartDataContext-BpQAywsQ.js";import"./CategoricalChart-Mr91sBr1.js";import"./CartesianAxis-Bb-zNiAP.js";import"./Layer-dIWMs8k-.js";import"./Text-B-XsujPt.js";import"./DOMUtils-BTVGwpKA.js";import"./Label-BRTUkEBL.js";import"./ZIndexLayer-4pe948L1.js";import"./types-CUTS6MB0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-aTEw3KI1.js";import"./useAnimationId-C9BYbESN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D5JWzaIV.js";import"./ChartSizeDimensions-DcpLG0d2.js";import"./OffsetShower-BfJno29D.js";import"./PlotAreaShower-DrDSYf2L.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
