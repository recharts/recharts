import{e as t}from"./iframe-B49GSwh0.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DINBFxv3.js";import{B as p}from"./BarChart-Dg5U5DHu.js";import{X as l}from"./XAxis-D-J-5rSI.js";import{Y as h}from"./YAxis--1-yNCnR.js";import{B as c}from"./Brush-BykbSc9c.js";import{B as x}from"./Bar-yhKPdfTR.js";import{R as u}from"./RechartsHookInspector-OdbWm_9I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C-joITAz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-csJjzcSq.js";import"./hooks--sxETzV1.js";import"./axisSelectors-CUIhtG5P.js";import"./zIndexSlice-BRDipK6V.js";import"./CartesianChart-CCaI-Ryf.js";import"./chartDataContext-Bk-Ja4C1.js";import"./CategoricalChart-B5pRHHkW.js";import"./CartesianAxis-hdd-vl6G.js";import"./Layer-D1N02uqa.js";import"./Text-gOylDML8.js";import"./DOMUtils-CT05d_hW.js";import"./Label-CpKUDdzk.js";import"./ZIndexLayer-BDRmqb48.js";import"./types-OGa7TdGT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BGuZis9J.js";import"./ReactUtils-yuOGi8sn.js";import"./ActiveShapeUtils-JgGGelTB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdQI0GjN.js";import"./useAnimationId-CWbWu1ju.js";import"./Trapezoid-BEs5OYZ_.js";import"./Sector-CcMeAO1d.js";import"./Symbols-BhCWiDph.js";import"./Curve-D2h7ncG8.js";import"./RegisterGraphicalItemId-DpeQt7zq.js";import"./ErrorBarContext-Kb4FINZU.js";import"./GraphicalItemClipPath-DFKAd39R.js";import"./SetGraphicalItem-CkvQT2hd.js";import"./getZIndexFromUnknown-nK1_zmle.js";import"./graphicalItemSelectors-B20R-uhD.js";import"./index-DmOyJeTl.js";import"./ChartSizeDimensions-CBThhMTI.js";import"./OffsetShower-Cs62sl11.js";import"./PlotAreaShower-DCgwyzvC.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
