import{e}from"./iframe-HklBE7vu.js";import{g as s}from"./arrayEqualityCheck-CG9NM7M7.js";import{C as p}from"./ComposedChart-BGfN3j9r.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-CHwWKEnY.js";import{X as l}from"./XAxis-BeXZR1BO.js";import{Y as h}from"./YAxis-D8onK4in.js";import{R as d}from"./ReferenceArea-BdBcI-Ld.js";import{R as x}from"./RechartsHookInspector-CROecA9e.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CmkmsSRd.js";import"./immer-B5bJcxrJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BYIG_iFP.js";import"./index-QkgaeSYl.js";import"./hooks-CnW7pryE.js";import"./axisSelectors-DQ1WchLm.js";import"./d3-scale-ByKoA0zW.js";import"./zIndexSlice-CVyG9qRx.js";import"./renderedTicksSlice--_3RJj48.js";import"./CartesianChart-DtRgi5pX.js";import"./chartDataContext-I9Ggk7nE.js";import"./CategoricalChart-BN63kSx-.js";import"./CartesianAxis-C0qWYU4C.js";import"./Layer-D8ZS5vyC.js";import"./Text-Dt3ARXcw.js";import"./DOMUtils-BwtPQYwq.js";import"./Label-ClB5KqOQ.js";import"./ZIndexLayer-BPeCIwGs.js";import"./types-D0dCN7Ox.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-DGNZ3kBX.js";import"./useAnimationId-Yfa74zNK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DO5d7GKD.js";import"./ChartSizeDimensions-GhqI97PU.js";import"./OffsetShower-CEG4HECi.js";import"./PlotAreaShower-utUcCZ-k.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
