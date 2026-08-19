import{R as e}from"./iframe-TzfrCimv.js";import{R as n}from"./zIndexSlice-Dp5v9G1Y.js";import{C as s}from"./ComposedChart-0zP4qBoW.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-SmfttCxo.js";import{X as f}from"./XAxis-5FjHsuX0.js";import{Y as l}from"./YAxis-B2Z4R-y-.js";import{R as d}from"./ReferenceDot-DYs3-DfB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BM90P8P9.js";import"./index-31yWppKy.js";import"./index-I3E5SGvw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CsgnMNsn.js";import"./isWellBehavedNumber-z9eNMbuG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-d5Ajpv94.js";import"./index-ououzFTQ.js";import"./index-DNVn7Vry.js";import"./axisSelectors-Cg7dZLHA.js";import"./d3-scale-DDwg_EuX.js";import"./renderedTicksSlice-DA0LErEZ.js";import"./CartesianChart-CBcHGY17.js";import"./chartDataContext-C9PL5caj.js";import"./CategoricalChart-NmYFScnM.js";import"./CartesianAxis-BGRgt604.js";import"./Layer-D26e-s_C.js";import"./Text-Cq_y2tEB.js";import"./DOMUtils-BXdig0h8.js";import"./useBackwardsCompatibleTheme-6HIvPrWs.js";import"./Label-ORziBLCU.js";import"./ZIndexLayer-LDMTKG6P.js";import"./types-GCQJUCAo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-Dvt3Xsey.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
