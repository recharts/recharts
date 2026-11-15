import{R as e}from"./iframe-CvMP9Fqo.js";import{R as m}from"./zIndexSlice-B5trHRCj.js";import{C as s}from"./ComposedChart-BEnlrqE9.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BHqJEvj2.js";import{X as f}from"./XAxis-BVBOoebg.js";import{Y as l}from"./YAxis-tiTGIdx3.js";import{R as d}from"./ReferenceDot-uFKnasGn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BGEDHRJM.js";import"./throttle-MhOaKDgE.js";import"./index-D9jYUR_d.js";import"./index-BZUcM53P.js";import"./RechartsWrapper-CzGrl1eT.js";import"./axisSelectors-B3ymYEcm.js";import"./polarAxisSelectors-6vaNx2fR.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-b8kDtzlH.js";import"./index-CDgZ4Loc.js";import"./index-B6lplofW.js";import"./renderedTicksSlice-DkA6Ce2h.js";import"./index-LdeImoL7.js";import"./fillDefinitions-DQU_H3eF.js";import"./CartesianChart-CrVsIyiN.js";import"./chartDataContext-DgCWmyll.js";import"./CategoricalChart-Bvay8eab.js";import"./CartesianAxis-BofYDveF.js";import"./Layer-CKCTZlK6.js";import"./Text-B1VQrHkc.js";import"./ZIndexLayer-CYiENEwf.js";import"./Label-BXQPTxU_.js";import"./types-CEx7Mrjp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-RMR8pxKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
