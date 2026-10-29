import{R as e}from"./iframe-z45XlhiT.js";import{R as a}from"./zIndexSlice-rByxwPq2.js";import{C as p}from"./ComposedChart-C_oOM-_x.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BcNDHnb_.js";import{X as f}from"./XAxis-yN0YOhJu.js";import{Y as l}from"./YAxis-C3VQiLjy.js";import{L as d}from"./Line-BNg9pLDQ.js";import{R as h}from"./ReferenceLine-DxChhWtG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D6R4bRBz.js";import"./throttle-trzEzJ5j.js";import"./index-DhBnsQMm.js";import"./index-BjfNKgkQ.js";import"./RechartsWrapper-CkIduI85.js";import"./axisSelectors-DZIpCEiW.js";import"./polarAxisSelectors-CPTOQPk0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DBdfj2JL.js";import"./index-wy90J4K3.js";import"./index-BLdN60al.js";import"./renderedTicksSlice-DSoL8nN7.js";import"./index-DMBUEogz.js";import"./CartesianChart-SMygzho_.js";import"./ZIndexPortal-BH0OvRqe.js";import"./CategoricalChart-BvjpxKzi.js";import"./CartesianAxis-CzSQFzRC.js";import"./Layer-BkChjDHf.js";import"./Text-D6fTfOcl.js";import"./pageBackground-BPRxB_Aw.js";import"./ZIndexLayer-DZatQUpK.js";import"./Label-CmK6wYAn.js";import"./types-DMhu4FvJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DeIAn4Qv.js";import"./step-xmYWYAoT.js";import"./path-DyVhHtw_.js";import"./LabelList-BXCYEXvh.js";import"./ActivePoints-DXpk42VJ.js";import"./Dot-C9aR3nF8.js";import"./activeStyles-2Y8cHsw1.js";import"./useAnimationId-DASBPoZY.js";import"./dataEntryStyles-CahaEVij.js";import"./Symbols-DOwNTV9x.js";import"./symbol-DbSGDWfT.js";import"./ErrorBarContext-C7sDKK_Q.js";import"./SetGraphicalItem-DAGbOIuL.js";import"./getRadiusAndStrokeWidthFromDot-Pw7eF4Cu.js";import"./ActiveShapeUtils-ChMdJ8i8.js";import"./useEffectiveDataKey-Dw2L82h2.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
