import{R as e}from"./iframe-yFUZOAXo.js";import{R as a}from"./zIndexSlice-gBXHaIY6.js";import{C as p}from"./ComposedChart-CLIGRHzc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DKf8gquh.js";import{X as f}from"./XAxis-VuWV4oHL.js";import{Y as l}from"./YAxis-Bm1MK_pl.js";import{L as d}from"./Line-DBwfQOxZ.js";import{R as h}from"./ReferenceLine-YNYMuRrI.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2yJhwFE.js";import"./get-CjriyByo.js";import"./redux-toolkit.esm-D_pQmptz.js";import"./index-CHzPnfIT.js";import"./index-5xbZMWg1.js";import"./RechartsWrapper-Bghi6ZRK.js";import"./axisSelectors-EZDSIF5u.js";import"./polarAxisSelectors-CFbKEyZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BRWdQdSe.js";import"./index-PETS0UhS.js";import"./index-BK6Ilp-H.js";import"./renderedTicksSlice-CilCeieo.js";import"./index-CtXM72i0.js";import"./fillDefinitions-IzAh6C3K.js";import"./CartesianChart-C-z-JDjQ.js";import"./chartDataContext-BbJwl4x7.js";import"./CategoricalChart-D9q-ZVsT.js";import"./CartesianAxis-Cl0edJ8g.js";import"./Layer-DccvzxoJ.js";import"./Text-gRe7KF5h.js";import"./ZIndexLayer-BFOdALhB.js";import"./Label-C38PHRGq.js";import"./types-DUCsLnxG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-a_asEMsX.js";import"./Curve-YzirgrH8.js";import"./step-BqjoQNYS.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-D7kCW6zO.js";import"./ActivePoints-EuxxAYs7.js";import"./Dot-BxahtCeT.js";import"./activeStyles-DarVPLRL.js";import"./useAnimationId-JmfqkQro.js";import"./Symbols-BNaTe5h-.js";import"./symbol-qTHekaJz.js";import"./ErrorBarContext-Bka5ymRE.js";import"./SetGraphicalItem-ClWcTtiF.js";import"./ActiveShapeUtils-CycVwTKF.js";import"./useEffectiveDataKey-DPchhFnV.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
