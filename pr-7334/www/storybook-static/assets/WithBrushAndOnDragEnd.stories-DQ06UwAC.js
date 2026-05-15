import{e as t}from"./iframe-IedaLeal.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CDeFCuAt.js";import{B as p}from"./BarChart-B14yCOol.js";import{X as l}from"./XAxis-CUj044ZC.js";import{Y as h}from"./YAxis-j1HNTz_n.js";import{B as c}from"./Brush-CEoF-bdL.js";import{B as x}from"./Bar-BU9_rEDL.js";import{R as u}from"./RechartsHookInspector-5qOOtg04.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DinctDfH.js";import"./immer-Dd6dXjxy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0o5SV0j_.js";import"./index-YtVhwzFk.js";import"./hooks-C5y3PU4C.js";import"./axisSelectors-Bx341r0C.js";import"./d3-scale-BX13yOxW.js";import"./zIndexSlice-BZ8DgwR3.js";import"./renderedTicksSlice-DOzQfNkA.js";import"./CartesianChart-DtUsH4ee.js";import"./chartDataContext-DqUMO5tY.js";import"./CategoricalChart-DAXIc6R-.js";import"./CartesianAxis-DdlOSCj4.js";import"./Layer-COpu_kTm.js";import"./Text-ko_k4IV7.js";import"./DOMUtils-BYFJFnuE.js";import"./Label-NwC3LlsS.js";import"./ZIndexLayer-JYekqGDv.js";import"./types-Ci9gDE8O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-EEmfMTYp.js";import"./ReactUtils-De7AqaLg.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-cikzdunu.js";import"./isPlainObject-BBCFg2tK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0StcwZN.js";import"./useAnimationId-D3Yn3hG9.js";import"./Trapezoid-DD2FtYjE.js";import"./Sector-BSwgLZD3.js";import"./Symbols-ncFIdchy.js";import"./symbol-BiWopP6m.js";import"./step-CR-qwJGd.js";import"./Curve-BzqwREyl.js";import"./RegisterGraphicalItemId-wI9lHTwH.js";import"./ErrorBarContext-C7FVOsru.js";import"./GraphicalItemClipPath-B96rVctv.js";import"./SetGraphicalItem-BzrdUKT-.js";import"./getZIndexFromUnknown-T1G3s9Xv.js";import"./graphicalItemSelectors-DDSx4B9l.js";import"./index-sBYFadDc.js";import"./ChartSizeDimensions-DwT6nbul.js";import"./OffsetShower-RAcVZiZd.js";import"./PlotAreaShower-DRI9galD.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
