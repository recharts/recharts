import{e as t}from"./iframe-DuNEY226.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DDMqu3f1.js";import{B as p}from"./BarChart-YYt5DXzi.js";import{X as l}from"./XAxis-DdwDbuRS.js";import{Y as h}from"./YAxis-QXoWtC2j.js";import{B as c}from"./Brush-DOPImBnK.js";import{B as x}from"./Bar-B_KtH6bR.js";import{R as u}from"./RechartsHookInspector-CfHmmsr6.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C-2Byojj.js";import"./immer-BVAwiqUd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CEqZKjHf.js";import"./index-D7ubYLAP.js";import"./hooks-DB_oXYxy.js";import"./axisSelectors-DAR8t-c9.js";import"./d3-scale-CgGCPdr7.js";import"./zIndexSlice-CRDA7WbI.js";import"./renderedTicksSlice-BQwvsrpL.js";import"./CartesianChart-v-wDegKF.js";import"./chartDataContext-D8l2QHPQ.js";import"./CategoricalChart-C_g1w3w0.js";import"./CartesianAxis-BtkWVQbW.js";import"./Layer-D_n9WiuW.js";import"./Text-Dc6VXTKK.js";import"./DOMUtils-C-AY4UId.js";import"./Label-DKCGVJ9i.js";import"./ZIndexLayer-CZdiz2vD.js";import"./types-D9KOomKd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BUJfSZPi.js";import"./ReactUtils-DRluxBO3.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BVtqisMr.js";import"./isPlainObject-DB3_XzF8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CkXHm1Ql.js";import"./useAnimationId-DN_Wn8rj.js";import"./Trapezoid-BXsyVm6P.js";import"./Sector-b9d-huvK.js";import"./Symbols-Dk3gQBwn.js";import"./symbol-4CsV8iHb.js";import"./step-CHzygN7O.js";import"./Curve-ipLw690D.js";import"./RegisterGraphicalItemId-BWMdn6qI.js";import"./ErrorBarContext-CbQdG_x_.js";import"./GraphicalItemClipPath-CeHrZ0UX.js";import"./SetGraphicalItem-CfNV3Vyt.js";import"./getZIndexFromUnknown-BgO1nlim.js";import"./graphicalItemSelectors-D39jZ08p.js";import"./index-CE1COEz0.js";import"./ChartSizeDimensions-CTe7q-3t.js";import"./OffsetShower-CpVXhOAG.js";import"./PlotAreaShower-CXvEQ9OL.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
