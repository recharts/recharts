import{R as e}from"./iframe-CrWtoPAX.js";import{R as a}from"./zIndexSlice-DMPrIjTD.js";import{C as p}from"./ComposedChart-CrLeVh0b.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CHkEHHdY.js";import{X as f}from"./XAxis-6CbcM3Se.js";import{Y as l}from"./YAxis-xU-pi3Qa.js";import{L as d}from"./Line-x9GU49wt.js";import{R as h}from"./ReferenceLine-BbQLfVbo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cl_vq3lE.js";import"./throttle-ByP8enHW.js";import"./index-CQ_XqvtJ.js";import"./index-D6uwIsxD.js";import"./RechartsWrapper-MJk6C7sG.js";import"./axisSelectors-B0-aB2Y5.js";import"./polarAxisSelectors-DnnAPhgk.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Pq_E9xXF.js";import"./index-gHXYJ75j.js";import"./index-BbFlaPL7.js";import"./renderedTicksSlice-CetFWcek.js";import"./index-IYAiXkdd.js";import"./CartesianChart--l1pMg4t.js";import"./chartDataContext-BATi9LfG.js";import"./CategoricalChart-CRgz8QMs.js";import"./CartesianAxis-D6bXO0ci.js";import"./Layer-Bc-8Aj4A.js";import"./Text-CyQrUZZg.js";import"./pageBackground-B_OyKJz4.js";import"./useId-CevBbkmx.js";import"./ZIndexLayer-mnQ0PTjZ.js";import"./Label-9ANtnaX1.js";import"./dataEntryStyles-CcroDQaP.js";import"./types-sEVDNypc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-QjHrFrYT.js";import"./step-xie03U5d.js";import"./path-DyVhHtw_.js";import"./activeStyles-D8qfovJq.js";import"./useAnimationId-DIVMX3ZS.js";import"./ActivePoints-cB0BOXIY.js";import"./Dot-BpyqQ2DG.js";import"./Symbols-BmauIne2.js";import"./symbol-C4lC381C.js";import"./RegisterGraphicalItemId-DIduc0Gm.js";import"./ErrorBarContext-BGhx7PeS.js";import"./SetGraphicalItem-B4ZcrH9I.js";import"./getRadiusAndStrokeWidthFromDot-CuJjKg3J.js";import"./ActiveShapeUtils-BHD3PSWQ.js";import"./useEffectiveDataKey-DRFzjTt4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
