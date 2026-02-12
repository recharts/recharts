import{e as t}from"./iframe-Dim5_luC.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DY4kDyOd.js";import{B as p}from"./BarChart-CCHTkl7x.js";import{X as l}from"./XAxis-CajpKvi_.js";import{Y as h}from"./YAxis-BX5wgPpW.js";import{B as c}from"./Brush-N1MyyKOs.js";import{B as x}from"./Bar-vJdKeXQV.js";import{R as u}from"./RechartsHookInspector-P8u42xZf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D3nhBTU3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BTGjRieY.js";import"./hooks-DQwyA4z1.js";import"./axisSelectors-CiSFc718.js";import"./zIndexSlice-DWwDEXe3.js";import"./CartesianChart-B-LiUj8Z.js";import"./chartDataContext-yPgkGQSE.js";import"./CategoricalChart-CIgbHOM5.js";import"./CartesianAxis-CuZKHGcg.js";import"./Layer-DsncGJyW.js";import"./Text-POGh3Ki-.js";import"./DOMUtils-OmeTbLvk.js";import"./Label-g1K_6191.js";import"./ZIndexLayer-D1v8rxBH.js";import"./types-BxKSV5b4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CdUJRRJL.js";import"./ReactUtils-B4IuMLLa.js";import"./ActiveShapeUtils-36K2bTf3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BRrYL6fC.js";import"./useAnimationId-BMRzQV3k.js";import"./Trapezoid-BCUpEs0g.js";import"./Sector-DyfQSrST.js";import"./Symbols-BQHr33CI.js";import"./Curve-C8164FP7.js";import"./RegisterGraphicalItemId-BV1l7uMF.js";import"./ErrorBarContext-swBbnM0b.js";import"./GraphicalItemClipPath-D0CZwxPN.js";import"./SetGraphicalItem-BevZjJX4.js";import"./getZIndexFromUnknown-DeiyLC02.js";import"./graphicalItemSelectors-C8hsMw3D.js";import"./index-BcXSgkDx.js";import"./ChartSizeDimensions-DhXaHeyJ.js";import"./OffsetShower-BPrV8Xge.js";import"./PlotAreaShower-BgwWJf6_.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
