import{R as e}from"./iframe-Dkncjqe5.js";import{R as a}from"./zIndexSlice-3Eut4nle.js";import{C as p}from"./ComposedChart-Dy5YJ26L.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BC3bQ9Jk.js";import{X as f}from"./XAxis-BAQVI_cg.js";import{Y as l}from"./YAxis-Dxbos16T.js";import{L as d}from"./Line-dCs9wtK9.js";import{R as h}from"./ReferenceLine-DGpCdGj2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fiJaoKIv.js";import"./index-DuZYSu8x.js";import"./index-CEbzYCUB.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKbDW2P0.js";import"./isWellBehavedNumber-h0zKWQQH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbHdyrKZ.js";import"./axisSelectors-DzgXC3ir.js";import"./d3-scale-D7_DItYV.js";import"./index-Bw7gNQT7.js";import"./index-BWQ516bg.js";import"./renderedTicksSlice-DBigkG9b.js";import"./index-DULW3GES.js";import"./CartesianChart-_Rd0DLP-.js";import"./chartDataContext-BPkdx2D0.js";import"./CategoricalChart-DpeOMck6.js";import"./CartesianAxis-Dwpurh4e.js";import"./Layer-CZ9ZIOVu.js";import"./Text-BwfQxnJz.js";import"./pageBackground-CmllYwCr.js";import"./useId-ZYm6mEVk.js";import"./useBackwardsCompatibleTheme-BCpg7K4A.js";import"./Label-V2ZN4uKZ.js";import"./ZIndexLayer-DaEkt6aU.js";import"./types-BHEXbjwq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CjcQUAYM.js";import"./step-CArLTb5W.js";import"./path-DyVhHtw_.js";import"./activeStyles-DQuNqkwN.js";import"./useAnimationId-MEfDv_ZE.js";import"./dataEntryStyles-DXfoX1Tx.js";import"./ActivePoints-ClxMx5Mk.js";import"./Dot-sRIGaLzT.js";import"./ErrorBarContext-e-s-GcHB.js";import"./GraphicalItemClipPath-DPL4dOJ-.js";import"./SetGraphicalItem-Bg3q-OfM.js";import"./getRadiusAndStrokeWidthFromDot-eYGtCAeF.js";import"./ActiveShapeUtils-B1bflkee.js";import"./useEffectiveDataKey-CjhYhiH-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
