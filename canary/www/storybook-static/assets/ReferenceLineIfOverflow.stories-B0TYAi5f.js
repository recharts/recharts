import{R as e}from"./iframe-DJb0mK8M.js";import{R as a}from"./zIndexSlice-CT0NLGnJ.js";import{C as p}from"./ComposedChart-CuzfZC2T.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DsLQknLw.js";import{X as f}from"./XAxis-rFQD6Pba.js";import{Y as l}from"./YAxis-CWLYUyep.js";import{L as d}from"./Line-neFyfXAn.js";import{R as h}from"./ReferenceLine-Cuta3Gv3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BS7HrNsT.js";import"./index-CM4XLoJ2.js";import"./index-DkIcBYOu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C1NQQxfw.js";import"./isWellBehavedNumber-BNoJVovK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cglq1y_f.js";import"./axisSelectors-E250IIX0.js";import"./d3-scale-BU1MyCto.js";import"./index-Co9bt_zj.js";import"./index-BZmySJQF.js";import"./renderedTicksSlice-CwZjK2uF.js";import"./index-CyzL3WIR.js";import"./CartesianChart-DJ8n3cc1.js";import"./chartDataContext-CJdXqT5i.js";import"./CategoricalChart-Dsw_Culz.js";import"./CartesianAxis-C-rsFQTF.js";import"./Layer-DK2FwCPg.js";import"./Text-COb6PIBf.js";import"./pageBackground-CexaD8jP.js";import"./useId-BX-mSSik.js";import"./useBackwardsCompatibleTheme-CKzY57lx.js";import"./Label-BzZymjIq.js";import"./ZIndexLayer-DD8rlV_m.js";import"./types-B-rYYW-g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Byf9oq4a.js";import"./step-Bi1Gxitb.js";import"./path-DyVhHtw_.js";import"./activeStyles-DMsULg9O.js";import"./useAnimationId-CFtssWv7.js";import"./dataEntryStyles-DWwC517V.js";import"./ActivePoints-CCNXmb9c.js";import"./Dot--GGfWb34.js";import"./ErrorBarContext-CpX10Uwr.js";import"./GraphicalItemClipPath-BFBWrIDQ.js";import"./SetGraphicalItem-BBlb6zhf.js";import"./getRadiusAndStrokeWidthFromDot-9uxOnNFL.js";import"./ActiveShapeUtils-s8ySMG5_.js";import"./useEffectiveDataKey-BCzrZ4XH.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
