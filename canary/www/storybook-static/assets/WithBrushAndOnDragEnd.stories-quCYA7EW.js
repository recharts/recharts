import{e as t}from"./iframe-NOjYqVDf.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CKPvr2Sv.js";import{B as p}from"./BarChart-CMGFPmmi.js";import{X as l}from"./XAxis-gQef3nNh.js";import{Y as h}from"./YAxis-R69UNor-.js";import{B as c}from"./Brush-7erFYrMo.js";import{B as x}from"./Bar-DndTQ_uD.js";import{R as u}from"./RechartsHookInspector-CZuAKH0J.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B4jksYlp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CYtF97y_.js";import"./hooks-DkToD0vA.js";import"./axisSelectors-_b35tTPj.js";import"./zIndexSlice-Doe50Ljr.js";import"./renderedTicksSlice-CNdDn6G4.js";import"./CartesianChart-DlSo8JUa.js";import"./chartDataContext-BCOGOXd9.js";import"./CategoricalChart-BxTZW61W.js";import"./CartesianAxis-DmPLGWaH.js";import"./Layer-C5eEc_aO.js";import"./Text-C7FUzYMA.js";import"./DOMUtils-BMDxU690.js";import"./Label-DSmhxnyp.js";import"./ZIndexLayer-CmnykYAa.js";import"./types-Cdrp97aK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Bv3LOeHc.js";import"./ReactUtils-B9O68L3J.js";import"./ActiveShapeUtils-BNzKmu3G.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B01634cJ.js";import"./useAnimationId-DyWolGb_.js";import"./Trapezoid-BprYBPWk.js";import"./Sector-Bz2V5crH.js";import"./Symbols-CYsc0tYe.js";import"./Curve-DR3tx7PX.js";import"./RegisterGraphicalItemId-YVRRFCp2.js";import"./ErrorBarContext-BzRoxPBz.js";import"./GraphicalItemClipPath-C6swNonr.js";import"./SetGraphicalItem-BeKk8_xu.js";import"./getZIndexFromUnknown-jdkWl6_i.js";import"./graphicalItemSelectors-BdU_bpR-.js";import"./index-Ioy1DO1u.js";import"./ChartSizeDimensions-CVj6kL6N.js";import"./OffsetShower-BtzaIgV3.js";import"./PlotAreaShower-BDFeD2A4.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
