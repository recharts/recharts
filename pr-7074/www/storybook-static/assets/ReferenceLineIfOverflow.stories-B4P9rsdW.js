import{e}from"./iframe-YHIi0zNq.js";import{R as n}from"./arrayEqualityCheck-CiMVM-SL.js";import{C as p}from"./ComposedChart-Dbe-cyVJ.js";import{C as s}from"./CartesianGrid-By76E-K9.js";import{X as c}from"./XAxis-kqqXeMbl.js";import{Y as f}from"./YAxis-EBaaYeoG.js";import{L as l}from"./Line-bVINaKw4.js";import{R as d}from"./ReferenceLine-CYhTmSD0.js";import{R as h}from"./RechartsHookInspector-Cdc_RxXj.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BuJwUxEP.js";import"./immer-D_GJadju.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-o-AfycQs.js";import"./index-u4istH96.js";import"./hooks-CFdjgn4I.js";import"./axisSelectors-87SRvgUu.js";import"./d3-scale-DMZnVruV.js";import"./zIndexSlice-DeqvswTX.js";import"./renderedTicksSlice-DxRvDe1C.js";import"./CartesianChart-Bvl8nfic.js";import"./chartDataContext-BapHi4AL.js";import"./CategoricalChart-BRn4vti9.js";import"./CartesianAxis-DCRdhe3Y.js";import"./Layer-xP0kyya2.js";import"./Text-BfyXYVHl.js";import"./DOMUtils-B22dZqv4.js";import"./Label-DOPySTsx.js";import"./ZIndexLayer-ntDhn9GI.js";import"./types-D6q9wb44.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-HN0dEhAf.js";import"./ActivePoints-B8MIZ72J.js";import"./Dot-D6GGo-vt.js";import"./RegisterGraphicalItemId-LQPm_pAb.js";import"./ErrorBarContext-CYNYOD56.js";import"./GraphicalItemClipPath-Iw5JYGhP.js";import"./SetGraphicalItem-CUARmGp-.js";import"./useAnimationId-ZghgqyXB.js";import"./getRadiusAndStrokeWidthFromDot-CvwGNHbQ.js";import"./ActiveShapeUtils-BKfvV8h2.js";import"./isPlainObject-GBUylHQy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BtRVLgVP.js";import"./Trapezoid-CkRbYMAh.js";import"./Sector-BgEwi5iM.js";import"./Symbols-jxhochxb.js";import"./symbol-B8nih3Ay.js";import"./step-ByfP7lrq.js";import"./Curve-fcCSfps7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cat5Cyt-.js";import"./ChartSizeDimensions-CGxCw1zc.js";import"./OffsetShower-450EX_p_.js";import"./PlotAreaShower-dE-HeGlr.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
