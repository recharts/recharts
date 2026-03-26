import{e as t}from"./iframe-BoXIVKpi.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-dnQrzM2E.js";import{B as p}from"./BarChart-C9OY6Idk.js";import{X as l}from"./XAxis-CkW7_vH7.js";import{Y as h}from"./YAxis-DHIy0H30.js";import{B as c}from"./Brush-Cgg1EO0v.js";import{B as x}from"./Bar-BIXCSTcv.js";import{R as u}from"./RechartsHookInspector-Bv_iW9cn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DSYkeoEk.js";import"./immer-DZ-IpPxl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NZG2vnSc.js";import"./index-B4sUR4aF.js";import"./hooks-CmrSpg0T.js";import"./axisSelectors-C3NEPGA0.js";import"./d3-scale-4wy_PNKp.js";import"./zIndexSlice-DRRC13cr.js";import"./renderedTicksSlice-CJehQ3Y6.js";import"./CartesianChart-CVmBhOHu.js";import"./chartDataContext-BotxQRqQ.js";import"./CategoricalChart-CtSiGPzF.js";import"./CartesianAxis-UrQstO-Y.js";import"./Layer-LLMs1spv.js";import"./Text-JI5xSkLa.js";import"./DOMUtils-CzHd8SEJ.js";import"./Label-DIzgOATL.js";import"./ZIndexLayer-BiamzHbt.js";import"./types-DGUHAYWi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CxBW1yFu.js";import"./ReactUtils-D25zr5OD.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-yJwPYRY8.js";import"./isPlainObject-CJV2F3VY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CrG49jLS.js";import"./useAnimationId-CJqD-IcR.js";import"./Trapezoid-HO8pmOVA.js";import"./Sector-ROnt6JN1.js";import"./Symbols-BdNjnJgs.js";import"./symbol-DuFkHlHY.js";import"./step-Dpvc6cK-.js";import"./Curve-4bfNPt84.js";import"./RegisterGraphicalItemId-DGJkdjw1.js";import"./ErrorBarContext-Da-s-Drd.js";import"./GraphicalItemClipPath-DEQZQieX.js";import"./SetGraphicalItem-b1pitorJ.js";import"./getZIndexFromUnknown-Ds4KFtBD.js";import"./graphicalItemSelectors-Nwf5vJI9.js";import"./index-DaN_YDU6.js";import"./ChartSizeDimensions-xw94xbD8.js";import"./OffsetShower-Ci98_s2F.js";import"./PlotAreaShower-KIGO44Wy.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
