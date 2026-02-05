import{e as t}from"./iframe-BucFZ_rI.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Cub9yyg8.js";import{B as p}from"./BarChart-Dpa1wZox.js";import{X as l}from"./XAxis-ClQb6fgI.js";import{Y as h}from"./YAxis-H-QqP90D.js";import{B as c}from"./Brush-D66LXRLA.js";import{B as x}from"./Bar-B2Z1OHd7.js";import{R as u}from"./RechartsHookInspector-DS-kex3x.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B03Au56-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-i9ArJ6TM.js";import"./hooks-CMyWVrIA.js";import"./axisSelectors-BCa6g1kh.js";import"./zIndexSlice-DdWCw1KG.js";import"./CartesianChart-DZyhln5E.js";import"./chartDataContext-Ce-1EmfI.js";import"./CategoricalChart-CgTXpeDi.js";import"./CartesianAxis-CXwjW_bT.js";import"./Layer-CF_MVGlz.js";import"./Text-svvcwPPD.js";import"./DOMUtils-CBBy-RCP.js";import"./Label-9_EmwvzQ.js";import"./ZIndexLayer-L4xm7ML-.js";import"./types-ClOjhPxm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CwJMoPuu.js";import"./ReactUtils-Bzngk0QG.js";import"./ActiveShapeUtils-AjngprED.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-kS3taT6f.js";import"./useAnimationId-aMKT9xva.js";import"./Trapezoid-Dws_Jj0J.js";import"./Sector-BsDsJ4xC.js";import"./Symbols-oEWjslm_.js";import"./Curve-DctSWulj.js";import"./RegisterGraphicalItemId-BEasT3d7.js";import"./ErrorBarContext-B9myFNJx.js";import"./GraphicalItemClipPath-DkF2Uro5.js";import"./SetGraphicalItem-CNbOq2T5.js";import"./getZIndexFromUnknown-DF_sYjLg.js";import"./graphicalItemSelectors-B3QPcjLg.js";import"./index-B0oRtae4.js";import"./ChartSizeDimensions-wcbhDTBa.js";import"./OffsetShower-DrBH3Pp2.js";import"./PlotAreaShower-CmZTeEbv.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
