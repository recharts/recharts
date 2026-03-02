import{e}from"./iframe-XFn8o3qI.js";import{R as n}from"./arrayEqualityCheck-DoWZ8Al-.js";import{C as p}from"./ComposedChart-CqHuuwTM.js";import{C as s}from"./CartesianGrid-WQDXrRHE.js";import{X as c}from"./XAxis-wsJSxX26.js";import{Y as f}from"./YAxis-DlNOg73C.js";import{L as l}from"./Line-CI-PKSEE.js";import{R as d}from"./ReferenceLine-MxxNzi6W.js";import{R as h}from"./RechartsHookInspector-D90IXMov.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DasUcEmR.js";import"./immer-Hw8ZlrcX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bqol093Z.js";import"./index-DNZJK2gS.js";import"./hooks-CgDMZSu6.js";import"./axisSelectors-B-8e66Qc.js";import"./d3-scale-BECtu2Jj.js";import"./zIndexSlice-BaTuqdfU.js";import"./renderedTicksSlice-Dl0HjFeM.js";import"./CartesianChart-CtYhkutQ.js";import"./chartDataContext-C4USeiES.js";import"./CategoricalChart-BM4cINHZ.js";import"./CartesianAxis-j4wY0iFh.js";import"./Layer-DCadlIaL.js";import"./Text-Bl76oSnc.js";import"./DOMUtils-DhQP54ma.js";import"./Label-BlYwY5-1.js";import"./ZIndexLayer-DWBavU2w.js";import"./types-Bj0G5aQF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B41U7gki.js";import"./ActivePoints-BMnMeirf.js";import"./Dot-BXU7GTUQ.js";import"./RegisterGraphicalItemId-JBTo95SG.js";import"./ErrorBarContext-BybKQWHl.js";import"./GraphicalItemClipPath-Cv74D6gd.js";import"./SetGraphicalItem-gSI2Cn_M.js";import"./useAnimationId-DlDP6-K6.js";import"./getRadiusAndStrokeWidthFromDot-YxhzX5we.js";import"./ActiveShapeUtils-MPa98qw4.js";import"./isPlainObject-CuZzfPHd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-kXtUPCc6.js";import"./Trapezoid-CWabxdPa.js";import"./Sector-DJqtk5y0.js";import"./Symbols-zbF4VeV5.js";import"./symbol-D6QfEsFp.js";import"./step-DeRmKfqt.js";import"./Curve-C3P9kzpN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BCvGM1bQ.js";import"./ChartSizeDimensions-BgEuIf6D.js";import"./OffsetShower-2hoMWt5-.js";import"./PlotAreaShower-D2hH_gCG.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
