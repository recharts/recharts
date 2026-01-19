import{e}from"./iframe-BfEeuf29.js";import{R as n}from"./arrayEqualityCheck-CQTYn8oK.js";import{C as s}from"./ComposedChart-PLvFJZNy.js";import{C as p}from"./CartesianGrid-Pr14iCpc.js";import{X as c}from"./XAxis-DCok0cmX.js";import{Y as f}from"./YAxis-Dk-NUqCy.js";import{R as l}from"./ReferenceDot-C5K65AIu.js";import{R as h}from"./RechartsHookInspector-CaAU2h8E.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D5wHr7xB.js";import"./PolarUtils-B3A4Bn44.js";import"./RechartsWrapper-DsA4AxRI.js";import"./hooks-CshdMEx0.js";import"./axisSelectors-BzW232an.js";import"./zIndexSlice-DJbSQN7A.js";import"./CartesianChart-Ded3Vhag.js";import"./chartDataContext-96TYBSAN.js";import"./CategoricalChart-Dc9eAC4P.js";import"./CartesianAxis-D11Z6FnG.js";import"./Layer-WUPrCNhO.js";import"./Text-Cat3JN_E.js";import"./DOMUtils-kfWXwCLP.js";import"./Label-BQL_xh_a.js";import"./ZIndexLayer-nNaEVjlH.js";import"./types-B9h6Osdn.js";import"./Dot-CJLw0pnw.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-n-fO4kHm.js";import"./ChartSizeDimensions-DtODaN3g.js";import"./OffsetShower-usFsQs5P.js";import"./PlotAreaShower-Pa3IuuRb.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const V=["IfOverflow"];export{t as IfOverflow,V as __namedExportsOrder,Q as default};
