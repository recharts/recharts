import{R as e}from"./iframe-C_yGAyrl.js";import{R as a}from"./zIndexSlice-BJ-JuQhh.js";import{C as p}from"./ComposedChart-CFLgoo8z.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DfQiI1Ru.js";import{X as f}from"./XAxis-BCyVXA2-.js";import{Y as l}from"./YAxis-lwhG3-Lu.js";import{L as d}from"./Line-LkXq5rRh.js";import{R as h}from"./ReferenceLine-CGUgZiYv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B8DgtWv7.js";import"./throttle-BAXAw3D6.js";import"./index-DrbolqVI.js";import"./index-ddpbYnm-.js";import"./RechartsWrapper-BSGXC4_F.js";import"./axisSelectors-5FYthY9Y.js";import"./polarAxisSelectors-ut8KXzAo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-PQcr3dQu.js";import"./index-C36DrKNt.js";import"./index-RS1OPqlJ.js";import"./renderedTicksSlice-DkVAJH0_.js";import"./index-ClVDXgD6.js";import"./CartesianChart-CokpCbyl.js";import"./ZIndexPortal-BbHy9i_X.js";import"./CategoricalChart-vhidTTy9.js";import"./CartesianAxis-DMLFVqxV.js";import"./Layer-DRwTYvg4.js";import"./Text-DzacdUSY.js";import"./DOMUtils-DAgrf4y-.js";import"./ZIndexLayer-B7Tlmy9n.js";import"./Label-BnQGI-qv.js";import"./types-Cxyr58RE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-B5j0Jet-.js";import"./step-DDESiMvu.js";import"./path-DyVhHtw_.js";import"./LabelList-o4uUgS5K.js";import"./ActivePoints-CjSi-VTr.js";import"./Dot-M2gDFPx3.js";import"./activeStyles-B0RsKEFJ.js";import"./useAnimationId-HAfaQzyp.js";import"./dataEntryStyles-DACXFNb8.js";import"./Symbols-Bbax-3ST.js";import"./symbol-CWSoe6BS.js";import"./ErrorBarContext-BFE3xm4o.js";import"./SetGraphicalItem-ByCBXbFB.js";import"./getRadiusAndStrokeWidthFromDot-COLPDuwt.js";import"./ActiveShapeUtils-CHVm68Z9.js";import"./useEffectiveDataKey-DU6lMzAC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
