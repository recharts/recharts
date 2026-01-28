import{e as t}from"./iframe-C4IWMahh.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-0GnG-RUv.js";import{B as p}from"./BarChart-Bxp8TG8h.js";import{X as l}from"./XAxis-BngJLTZF.js";import{Y as h}from"./YAxis-Ba9FHWJv.js";import{B as c}from"./Brush-DlYfD9fX.js";import{B as x}from"./Bar-QknJ471M.js";import{R as u}from"./RechartsHookInspector-CpFOwYB5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DtgeT8pD.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-D1ed8gsV.js";import"./hooks-D4XFO7pe.js";import"./axisSelectors-BJBfabjw.js";import"./zIndexSlice-CIYOR3wZ.js";import"./CartesianChart-D8zP0xhX.js";import"./chartDataContext-kpLSUwh0.js";import"./CategoricalChart-DyuPf8cz.js";import"./CartesianAxis-DOkMNxmt.js";import"./Layer-CdQ-wzgp.js";import"./Text-TpjxoAAm.js";import"./DOMUtils-BgZ5XZxL.js";import"./Label-C0TeAK2L.js";import"./ZIndexLayer-BJJTWLZI.js";import"./types-Dnr4tbcG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BVg3pAaY.js";import"./ReactUtils-DjwylJ1a.js";import"./ActiveShapeUtils-Dhbc_DTR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-3bF21H.js";import"./useAnimationId-DNnry8cr.js";import"./Trapezoid-CRuG6j_-.js";import"./Sector-wIi7OYIA.js";import"./Symbols-BZom7IJQ.js";import"./Curve-DlsjNj4d.js";import"./RegisterGraphicalItemId-CADIBD7u.js";import"./ErrorBarContext-C2hEeIYE.js";import"./GraphicalItemClipPath-CTryCVIw.js";import"./SetGraphicalItem-Qx2BbNwy.js";import"./getZIndexFromUnknown-C6p1w5Iy.js";import"./graphicalItemSelectors-BtB6JhS2.js";import"./index-aiWA5sXu.js";import"./ChartSizeDimensions-DBfcvr5j.js";import"./OffsetShower-CMENuWZ2.js";import"./PlotAreaShower-c29i0cb1.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
