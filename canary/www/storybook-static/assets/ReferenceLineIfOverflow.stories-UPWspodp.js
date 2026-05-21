import{e}from"./iframe-tCDnQpzm.js";import{g as n}from"./arrayEqualityCheck-BqXouEks.js";import{C as p}from"./ComposedChart-Cfho0nKw.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-Dezg9dsh.js";import{X as f}from"./XAxis-DlOxqtL0.js";import{Y as l}from"./YAxis-0OaZrEQM.js";import{L as d}from"./Line-WG_QdsGX.js";import{R as h}from"./ReferenceLine-jrWJANup.js";import{R as w}from"./RechartsHookInspector-BX_0sbG1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6_84qa3.js";import"./immer-BCZknwAa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYnmCVjv.js";import"./index-CHnjtEz6.js";import"./hooks-WR0dNOnI.js";import"./axisSelectors-Bvp9z5f_.js";import"./d3-scale-QLPPlH86.js";import"./zIndexSlice-1EM6QKoG.js";import"./renderedTicksSlice-CYtMAut8.js";import"./CartesianChart-DTQQkyNB.js";import"./chartDataContext-D8A6GgIn.js";import"./CategoricalChart-9BDeQmwn.js";import"./CartesianAxis-DhIcmypy.js";import"./Layer-DztRGY_N.js";import"./Text-BLCv1zgM.js";import"./DOMUtils-Dbb4XIEW.js";import"./Label--ydmIzGM.js";import"./ZIndexLayer-DKwmZsVD.js";import"./types-vkQzCy74.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CVwA5fsZ.js";import"./step-D_7jw6OV.js";import"./path-DyVhHtw_.js";import"./ReactUtils-C9ZM0Mib.js";import"./ActivePoints-CleYGUIG.js";import"./Dot-ebcJneEk.js";import"./RegisterGraphicalItemId-D4uIuwhl.js";import"./ErrorBarContext-NilxMudN.js";import"./GraphicalItemClipPath-BzZEJgMk.js";import"./SetGraphicalItem-DtCToAmA.js";import"./useAnimationId-DsF55F49.js";import"./getRadiusAndStrokeWidthFromDot-CYyWgj3n.js";import"./ActiveShapeUtils-fioPLRDw.js";import"./isPlainObject-DxYEqwrD.js";import"./isPlainObject-BSutPv-K.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CXC3XglB.js";import"./ChartSizeDimensions-CSUyRejl.js";import"./OffsetShower-J7wedS7V.js";import"./PlotAreaShower-DWpQD4iq.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const xe=["IfOverflow"];export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
