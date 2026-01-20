import{e as t}from"./iframe-BJE3gYiz.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DOpOKb7k.js";import{B as p}from"./BarChart-B5V-oqTC.js";import{X as l}from"./XAxis-CiUlidyy.js";import{Y as h}from"./YAxis-DFb5sVBj.js";import{B as c}from"./Brush-Wg4IiH28.js";import{B as x}from"./Bar-DelEJCyZ.js";import{R as u}from"./RechartsHookInspector-CmJjyPOL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKNlGFt8.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-6YVSs0X2.js";import"./hooks-CzpWgTi2.js";import"./axisSelectors-BAfv6-Wm.js";import"./zIndexSlice-CPc0PYoJ.js";import"./CartesianChart-Dvfq7kHx.js";import"./chartDataContext-dCefmzkT.js";import"./CategoricalChart-BCQDahMf.js";import"./CartesianAxis-DYQqdQ0S.js";import"./Layer-BpHZQDe5.js";import"./Text-CV7Ey6jK.js";import"./DOMUtils-DGjslG0U.js";import"./Label-8Du7WhKH.js";import"./ZIndexLayer-PGry8EqE.js";import"./types-BgpWyLLK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CEFht0ON.js";import"./ReactUtils-DpOzmnGs.js";import"./ActiveShapeUtils-D_XtSxMo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-oe8iNjEY.js";import"./useAnimationId-xUHk75MJ.js";import"./Trapezoid-wLmtEI-B.js";import"./Sector-D1swSw6R.js";import"./Symbols-CA9SXzw3.js";import"./Curve-9wsGsorR.js";import"./RegisterGraphicalItemId-DDZY4GcH.js";import"./ErrorBarContext-CmxXk9PG.js";import"./GraphicalItemClipPath-VPQqj0Oy.js";import"./SetGraphicalItem-Bs3LcTS6.js";import"./getZIndexFromUnknown-BhNn_Mt_.js";import"./graphicalItemSelectors-SX_V_YVq.js";import"./index-BZmliZtD.js";import"./ChartSizeDimensions-kmApRxRi.js";import"./OffsetShower-Cu7vEAUz.js";import"./PlotAreaShower-3gxA0MT2.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
