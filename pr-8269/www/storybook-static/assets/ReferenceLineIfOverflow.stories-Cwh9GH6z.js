import{R as e}from"./iframe-D3OoUODQ.js";import{R as a}from"./zIndexSlice-COWEW-Xi.js";import{C as p}from"./ComposedChart-DQRy8yMm.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cy38ftq5.js";import{X as f}from"./XAxis-DxYJ1EU_.js";import{Y as l}from"./YAxis-CK0GC31X.js";import{L as d}from"./Line-DTJc0zlp.js";import{R as h}from"./ReferenceLine-BomK76rO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D7e-YcsR.js";import"./throttle-xK3Qigov.js";import"./index-BvJXc9H1.js";import"./index-DNUqbDgJ.js";import"./RechartsWrapper-DuOKGUDD.js";import"./axisSelectors-DItDxN6k.js";import"./polarAxisSelectors-BlC5408P.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bhy6LUlh.js";import"./index-CwGsCBa_.js";import"./index-E-9zXcGM.js";import"./renderedTicksSlice-Bv3FRj9F.js";import"./index-C8PiA1g3.js";import"./fillDefinitions-C2yGMN51.js";import"./CartesianChart-C7rzbaUy.js";import"./chartDataContext-BbEB-BoJ.js";import"./CategoricalChart-CKoarJJf.js";import"./CartesianAxis-CVUrBvYb.js";import"./Layer-CUNP0nq5.js";import"./Text-B7Tip8P2.js";import"./ZIndexLayer-pJsGLsvY.js";import"./Label-DLZY1r_b.js";import"./types-CZJIyhtF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-C3VB5n7j.js";import"./Curve-eYin-GPV.js";import"./step-FwrJA5dq.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-k3Cv11yP.js";import"./ActivePoints-BDuWcJUa.js";import"./Dot-DopO49Vm.js";import"./activeStyles-DXsSD8Lh.js";import"./useAnimationId-z8xHYNfC.js";import"./Symbols-BcqMzhTU.js";import"./symbol-CCC5v9lz.js";import"./ErrorBarContext-Cw_znsk2.js";import"./SetGraphicalItem-BlH5pIAO.js";import"./ActiveShapeUtils--1e6XE9v.js";import"./useEffectiveDataKey-BHKjwOuj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
