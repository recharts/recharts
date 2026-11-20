import{R as e}from"./iframe-qp48uAQ7.js";import{R as a}from"./zIndexSlice-KCJej1vF.js";import{C as p}from"./ComposedChart-CiZY4n0u.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DDmVqEQy.js";import{X as f}from"./XAxis-DBjPaOy0.js";import{Y as l}from"./YAxis-DlgcwvPx.js";import{L as d}from"./Line-DYWFyVWx.js";import{R as h}from"./ReferenceLine-P1gAJGNV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-H_yb4yD-.js";import"./throttle-DidOwtMq.js";import"./index-neNyiLUw.js";import"./index-BV3Lw9OX.js";import"./RechartsWrapper-1rMBmo6H.js";import"./axisSelectors-EQaPQOEj.js";import"./polarAxisSelectors-B_tUAyjC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C1UROyMV.js";import"./index-BBO10kZC.js";import"./index-DSRi-YPI.js";import"./renderedTicksSlice-BsS9ZrzM.js";import"./index-D8wT4PmW.js";import"./fillDefinitions-0M80HuO4.js";import"./CartesianChart-2yA0qqcE.js";import"./chartDataContext-BjUDfEUJ.js";import"./CategoricalChart-Dz_UBlxz.js";import"./CartesianAxis-CvElXQWV.js";import"./Layer-3O8BuD1C.js";import"./Text-9axAMSSa.js";import"./ZIndexLayer-B5vbT5ul.js";import"./Label-Sje2x2ae.js";import"./types-B-Gso0-n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DPhFQhmH.js";import"./Curve-D9eNKl8H.js";import"./step-DYSBTYxM.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-MmJGBd3d.js";import"./ActivePoints-AeR92xz-.js";import"./Dot-CZVpULkY.js";import"./activeStyles-CvvZZ1RN.js";import"./useAnimationId-gBLR8eku.js";import"./Symbols-DxoHFJIb.js";import"./symbol-Wa3jzChJ.js";import"./ErrorBarContext-BOAdtyxi.js";import"./SetGraphicalItem-BRHHFk9x.js";import"./ActiveShapeUtils--ilFziir.js";import"./useEffectiveDataKey-81Od8ro-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
