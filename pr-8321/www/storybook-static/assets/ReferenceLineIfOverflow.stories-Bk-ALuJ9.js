import{R as e}from"./iframe-CvaFu5-c.js";import{R as a}from"./zIndexSlice-BCgb8eXa.js";import{C as p}from"./ComposedChart-CJeqweUj.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-3AYqMTzZ.js";import{X as f}from"./XAxis-DQoNxyYu.js";import{Y as l}from"./YAxis-3HuEzFma.js";import{L as d}from"./Line-Bo0hpeCk.js";import{R as h}from"./ReferenceLine-C7M3Msmg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVIJCqoI.js";import"./get-CjriyByo.js";import"./throttle-CPKsFv9V.js";import"./index-Dtg5gRR9.js";import"./index-D2kSQ0HF.js";import"./RechartsWrapper-B-sPOqKb.js";import"./axisSelectors-BvhvBZte.js";import"./polarAxisSelectors-nhz4Skhy.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-1_Z3dmgw.js";import"./index-gm9J6V3Z.js";import"./index-DnvnPPwe.js";import"./renderedTicksSlice-DknGqI4w.js";import"./index-6xLnrqw3.js";import"./fillDefinitions-DWPX2s4U.js";import"./CartesianChart-DGNKw331.js";import"./chartDataContext-LmmBbzgU.js";import"./CategoricalChart-Cug4ru24.js";import"./CartesianAxis-71DKFDGT.js";import"./Layer-GSzXSKza.js";import"./Text-BlqBUDkB.js";import"./ZIndexLayer-DO68mxLb.js";import"./Label-D9P4cAWK.js";import"./types-B8ocCfqn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-9zV8sg_8.js";import"./Curve-CMLV0YB3.js";import"./step-C9qQ8yhV.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-B7SMVv85.js";import"./ActivePoints-DxXTbZF0.js";import"./Dot-C2Vb3upB.js";import"./activeStyles-TP9Js-Ix.js";import"./useAnimationId-UMR0vx8i.js";import"./Symbols-BJcGRvsQ.js";import"./symbol-CBJm44QG.js";import"./ErrorBarContext-Y9Ni32mE.js";import"./SetGraphicalItem-A7-SSfJY.js";import"./ActiveShapeUtils-nr8N1oHW.js";import"./useEffectiveDataKey-BIeeRG6o.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
