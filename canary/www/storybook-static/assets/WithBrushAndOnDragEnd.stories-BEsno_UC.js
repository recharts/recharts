import{e as t}from"./iframe-DHSCsAdF.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DejELsrN.js";import{B as p}from"./BarChart-CpsBp_QO.js";import{X as l}from"./XAxis-rIWvyQc_.js";import{Y as h}from"./YAxis-B3RnLl7T.js";import{B as c}from"./Brush-C3xp5bQM.js";import{B as x}from"./Bar-oXZPZJhJ.js";import{R as u}from"./RechartsHookInspector-Bl_b1l7P.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DdBt44A0.js";import"./immer-B7vO4s3P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DegZicoB.js";import"./index-CpBtaSsl.js";import"./hooks-Ed4LhnTQ.js";import"./axisSelectors-CI0vprku.js";import"./d3-scale-m9dtnhXI.js";import"./zIndexSlice-CsWdvizj.js";import"./renderedTicksSlice-BJJo2R47.js";import"./CartesianChart-OvkPOyqJ.js";import"./chartDataContext-CG3f3Y43.js";import"./CategoricalChart-DOIkqHpB.js";import"./CartesianAxis-BCj8T9-Z.js";import"./Layer-CgIzBpZ9.js";import"./Text-BU_Eo4vH.js";import"./DOMUtils-DnRUdIba.js";import"./Label-C3rJ2_4a.js";import"./ZIndexLayer-NxKSFRC9.js";import"./types-BJ3oAoHr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C66NgPxF.js";import"./ReactUtils-CI0cWBwW.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-D-9eavqk.js";import"./isPlainObject-DIsRAxNl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-nZJBYK.js";import"./useAnimationId-DdH8uK_v.js";import"./Trapezoid-DaZMlX5v.js";import"./Sector-DwAaS_QE.js";import"./Symbols-ChUxQx2e.js";import"./symbol-Dw26CW2u.js";import"./step-BXBXLUST.js";import"./Curve-DdDf1hH6.js";import"./RegisterGraphicalItemId-Co8itO9h.js";import"./ErrorBarContext-BnFLkwS3.js";import"./GraphicalItemClipPath-7TaZPKiL.js";import"./SetGraphicalItem-CGPj629n.js";import"./getZIndexFromUnknown-CBZT2982.js";import"./graphicalItemSelectors-YhBAPIW4.js";import"./index-C9zRLUqd.js";import"./ChartSizeDimensions-na2CXaMS.js";import"./OffsetShower-BYL_rrah.js";import"./PlotAreaShower-BF-kz2CC.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
