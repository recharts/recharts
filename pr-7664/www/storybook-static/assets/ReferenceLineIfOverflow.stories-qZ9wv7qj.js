import{R as e}from"./iframe-DU8eOjQ1.js";import{R as n}from"./zIndexSlice-BTgaU9mo.js";import{C as p}from"./ComposedChart-D8lCnIzr.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dzwrat8o.js";import{X as f}from"./XAxis-DwxXrNeT.js";import{Y as l}from"./YAxis-C5Bhkieg.js";import{L as d}from"./Line-Bui1sNFj.js";import{R as h}from"./ReferenceLine-B_FOLX_7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ds7SGj9O.js";import"./index-BiO2BZqr.js";import"./index-BR94yoib.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DqdCI-hK.js";import"./isWellBehavedNumber-RQOJRbJb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9E3HwjIh.js";import"./index-BsY6e3Dv.js";import"./index-C5aMPIVJ.js";import"./axisSelectors-BDOPVsa7.js";import"./d3-scale-Dni3_L1R.js";import"./renderedTicksSlice-FFc2HuFp.js";import"./CartesianChart-DXBshymN.js";import"./chartDataContext-Cbz9ELzS.js";import"./CategoricalChart-QJ_K41d4.js";import"./CartesianAxis-CXtQQdut.js";import"./Layer-BIDK12wM.js";import"./Text-AtzkHDEd.js";import"./DOMUtils-Cql2uYAT.js";import"./useId-ChL7HBdG.js";import"./useBackwardsCompatibleTheme-DkLB3iia.js";import"./Label-Z9o5T8X-.js";import"./ZIndexLayer-D8k4jgaj.js";import"./types-RZ1xD5kE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DOio-0wn.js";import"./step-DrL3PK0v.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DENpSSAq.js";import"./useAnimationId-CdvddGlN.js";import"./ActivePoints-BjMq4-Xw.js";import"./Dot-B7WcmA_A.js";import"./RegisterGraphicalItemId-Z2iPsOPY.js";import"./ErrorBarContext-C4_kHW9u.js";import"./GraphicalItemClipPath-MaN5rDAF.js";import"./SetGraphicalItem-CdyLZ_3H.js";import"./getRadiusAndStrokeWidthFromDot-B5__NC0u.js";import"./ActiveShapeUtils-C-NGBOfA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};
