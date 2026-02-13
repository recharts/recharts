import{e as t}from"./iframe-BqavfRSI.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Ra3gjxaW.js";import{B as p}from"./BarChart-8Ws23t6a.js";import{X as l}from"./XAxis-DMyHdO-k.js";import{Y as h}from"./YAxis-Ce0lAKWw.js";import{B as c}from"./Brush-Udo-OUUS.js";import{B as x}from"./Bar-DnxZeOVk.js";import{R as u}from"./RechartsHookInspector-DIZI_dr5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BagVy590.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQN53ECK.js";import"./hooks-BhizAxMH.js";import"./axisSelectors-CrlizjCS.js";import"./zIndexSlice-cuW5CNY3.js";import"./CartesianChart-ANLepPjj.js";import"./chartDataContext-eZIgvl_0.js";import"./CategoricalChart-IGjGR71r.js";import"./CartesianAxis--LdiM4X3.js";import"./Layer-7F20iT3S.js";import"./Text-D8aeDJgV.js";import"./DOMUtils-BJ4FDKUp.js";import"./Label-DNJA6zIC.js";import"./ZIndexLayer-BDqdije3.js";import"./types-etyYATxu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BflV6d4d.js";import"./ReactUtils-wyfG9-H0.js";import"./ActiveShapeUtils-Dcqmnzwc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxU_uLMj.js";import"./useAnimationId-CE6HvtJ3.js";import"./Trapezoid-B5zHDmOP.js";import"./Sector-BUeJdgSe.js";import"./Symbols-Dkh1Olqs.js";import"./Curve-Bl7M7m7v.js";import"./RegisterGraphicalItemId-BslGmMBw.js";import"./ErrorBarContext-CMc8E4Ed.js";import"./GraphicalItemClipPath-yqNdVZ5Z.js";import"./SetGraphicalItem-Chc8WLtN.js";import"./getZIndexFromUnknown-FrgRinK7.js";import"./graphicalItemSelectors-CTYjA39m.js";import"./index-BwE92fQv.js";import"./ChartSizeDimensions-uf7awrTX.js";import"./OffsetShower-CmxTasWx.js";import"./PlotAreaShower-RwBV7968.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
