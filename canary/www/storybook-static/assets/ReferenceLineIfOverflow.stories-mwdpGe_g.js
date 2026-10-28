import{R as e}from"./iframe-BmTk4yvk.js";import{R as a}from"./zIndexSlice-Yn5j7TCZ.js";import{C as p}from"./ComposedChart-Bc1PW_h6.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DAZJ0ohS.js";import{X as f}from"./XAxis-p_vhpROA.js";import{Y as l}from"./YAxis-BmZ1tujZ.js";import{L as d}from"./Line-IaR1SHtj.js";import{R as h}from"./ReferenceLine-DnQN10sl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cn0PCCle.js";import"./throttle-C169ds0A.js";import"./index-iOVTbJVR.js";import"./index-DmmaZxkJ.js";import"./RechartsWrapper-C4oIzQNw.js";import"./axisSelectors-jta8-9EA.js";import"./polarAxisSelectors-DyW5Xsuk.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_DRoaP4.js";import"./index-D6yCXLHc.js";import"./index-D-9h2rsp.js";import"./renderedTicksSlice-Dl_orwkE.js";import"./index-DOadfo9X.js";import"./CartesianChart-Fep-b6_D.js";import"./ZIndexPortal-CWm5UVGf.js";import"./CategoricalChart-D92RpbLO.js";import"./CartesianAxis-DCukA67Z.js";import"./Layer-DW7OR7eh.js";import"./Text-U4GGp_wV.js";import"./pageBackground-QX1GlboQ.js";import"./ZIndexLayer-DvmFXfZN.js";import"./Label-CYaQfkAd.js";import"./types-BwQb0UT4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DHjJHUtL.js";import"./step-X3pWD_rY.js";import"./path-DyVhHtw_.js";import"./LabelList-DAIqpE2b.js";import"./ActivePoints-D2fdi6S1.js";import"./Dot-DCITuPps.js";import"./activeStyles-PiE_qWsW.js";import"./useAnimationId-Crx209Lx.js";import"./dataEntryStyles-D6I3YMTN.js";import"./Symbols-C5McylxL.js";import"./symbol-DPYOxqZZ.js";import"./ErrorBarContext-BA2m5B_Z.js";import"./SetGraphicalItem-DFIrza8W.js";import"./getRadiusAndStrokeWidthFromDot-K0OFVwh2.js";import"./ActiveShapeUtils-DOogD9OD.js";import"./useEffectiveDataKey-B__g_9Jm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
