import{e}from"./iframe-CSwGLTl-.js";import{R as n}from"./arrayEqualityCheck-CL-IA6GV.js";import{C as p}from"./ComposedChart-D5aR39_O.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DJccOMGa.js";import{X as f}from"./XAxis-Cejj1aG-.js";import{Y as l}from"./YAxis-BT-Q7oTj.js";import{L as d}from"./Line-ETNwqRkd.js";import{R as h}from"./ReferenceLine-CrdNch6D.js";import{R as w}from"./RechartsHookInspector-DZ91OVzb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DbJcxAkM.js";import"./immer-BjkgQKa2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-RCqgoQSn.js";import"./index-brbC5UV5.js";import"./hooks-Cr-aq8eM.js";import"./axisSelectors-B8HhzkAr.js";import"./d3-scale-CqlzxEpT.js";import"./zIndexSlice-DK1kcZUU.js";import"./renderedTicksSlice-BnadoeJ5.js";import"./CartesianChart-B2Rv6APp.js";import"./chartDataContext-ipF3cfQe.js";import"./CategoricalChart-JOHaAwTs.js";import"./CartesianAxis-DDF2MY6x.js";import"./Layer-D0EBgQRA.js";import"./Text-D_9ONK9Z.js";import"./DOMUtils-C-NFkrvl.js";import"./Label-ClsrPG6g.js";import"./ZIndexLayer-DrCWdG12.js";import"./types-D4DhPIk-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dux8j2Wm.js";import"./ActivePoints-BjU36epI.js";import"./Dot-Chm2SzUE.js";import"./RegisterGraphicalItemId-hGiyGzsL.js";import"./ErrorBarContext-CbME5Fcu.js";import"./GraphicalItemClipPath-SXtIUXot.js";import"./SetGraphicalItem-p1UFOuzw.js";import"./useAnimationId-D8p9yFrw.js";import"./getRadiusAndStrokeWidthFromDot-BJuBIcOz.js";import"./ActiveShapeUtils-CIM0bDxf.js";import"./isPlainObject-DciJ0OZY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdfYyanO.js";import"./Trapezoid-D59NFDIE.js";import"./Sector-QxBrgctl.js";import"./Symbols-CiFP5VGL.js";import"./symbol-B4MVsM7L.js";import"./step-BjVh3UOw.js";import"./Curve-BKPjExFW.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CLE-w9Gg.js";import"./ChartSizeDimensions-DDHHkJGr.js";import"./OffsetShower-NxBS3DGv.js";import"./PlotAreaShower-iYv5cbpH.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
