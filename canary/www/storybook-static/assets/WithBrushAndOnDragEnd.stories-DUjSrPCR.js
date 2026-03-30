import{e as t}from"./iframe-DggZKTRy.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DnZLtMf6.js";import{B as p}from"./BarChart-CLuSQ-O_.js";import{X as l}from"./XAxis-Dbhs6mKo.js";import{Y as h}from"./YAxis-Dp9rJ-_E.js";import{B as c}from"./Brush-BLG3zi6t.js";import{B as x}from"./Bar-CS4K65tx.js";import{R as u}from"./RechartsHookInspector-DY7Qg7TT.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DXkRukFF.js";import"./immer-DqkR2i4r.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DW5O2LzM.js";import"./index-BLEPV65D.js";import"./hooks-6phBN8Fl.js";import"./axisSelectors-eAEMtAEJ.js";import"./d3-scale-Cv2rvDbO.js";import"./zIndexSlice-D0Ka7Mpu.js";import"./renderedTicksSlice-LD1nL11t.js";import"./CartesianChart-CdnV1DGW.js";import"./chartDataContext-D9KHIkbs.js";import"./CategoricalChart-DMPzgnGo.js";import"./CartesianAxis-BXbHKKX1.js";import"./Layer-BuKRQch4.js";import"./Text-Bd8tFEPJ.js";import"./DOMUtils-DITCnwVy.js";import"./Label-Dxk2zJHG.js";import"./ZIndexLayer-D85cG2g2.js";import"./types-CBaBaM7i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-9_WWL6DD.js";import"./ReactUtils-D9Ez5HAk.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DDWUau3o.js";import"./isPlainObject-CasrDXFD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-mU1cjLaJ.js";import"./useAnimationId-C-Fijf5f.js";import"./Trapezoid-CpShvAQC.js";import"./Sector-BKRhbQqJ.js";import"./Symbols-CzX1PTb6.js";import"./symbol-DdAFiUIg.js";import"./step-IN4trDru.js";import"./Curve-DpzeZUSQ.js";import"./RegisterGraphicalItemId-uoq7pQPM.js";import"./ErrorBarContext-YFVjhS9M.js";import"./GraphicalItemClipPath-P03t5XLI.js";import"./SetGraphicalItem-Cc6rdJSS.js";import"./getZIndexFromUnknown-BFKebHWY.js";import"./graphicalItemSelectors-CEJc77hA.js";import"./index-87ty5-MJ.js";import"./ChartSizeDimensions-DI522ei_.js";import"./OffsetShower-C9Cav-aa.js";import"./PlotAreaShower-t65TdSVB.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
