import{e as t}from"./iframe-BXZsi3ZJ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Cr28DIq7.js";import{B as p}from"./BarChart-Dy1XZyMo.js";import{X as l}from"./XAxis-vWhvLlJA.js";import{Y as h}from"./YAxis-CF2_AxHC.js";import{B as c}from"./Brush-CswTZhmD.js";import{B as x}from"./Bar-DbaQSLxd.js";import{R as u}from"./RechartsHookInspector-BcsNAcT5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKwhIINC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbqalEnK.js";import"./hooks-CeRNCNPw.js";import"./axisSelectors-DViO6aT3.js";import"./zIndexSlice-47t4gEct.js";import"./CartesianChart-34kvrnIo.js";import"./chartDataContext-RNK-qzkr.js";import"./CategoricalChart-Cfh0DMKR.js";import"./CartesianAxis-D3TuOOex.js";import"./Layer-CHngc-aq.js";import"./Text-BiWmZivS.js";import"./DOMUtils-C3G08RNL.js";import"./Label-BOPAlXUc.js";import"./ZIndexLayer-BN0SI8Of.js";import"./types-5-uOdbL9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-EOyvDAOK.js";import"./ReactUtils-Cp6NqBbj.js";import"./ActiveShapeUtils-LYXTR8UQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C086hGgA.js";import"./useAnimationId-DdIT7cjj.js";import"./Trapezoid-CgIXwzIx.js";import"./Sector-CiJ5MIJx.js";import"./Symbols-CywLz0nT.js";import"./Curve-CD_JBQwm.js";import"./RegisterGraphicalItemId-BjUtGevU.js";import"./ErrorBarContext-a8MR5IC4.js";import"./GraphicalItemClipPath-BTERSkFA.js";import"./SetGraphicalItem-C1CwePg9.js";import"./getZIndexFromUnknown-a_DZ_8ao.js";import"./graphicalItemSelectors-6mRrvq5H.js";import"./index-Chn5vrwc.js";import"./ChartSizeDimensions-DJrZeKfe.js";import"./OffsetShower-DmQZJejv.js";import"./PlotAreaShower-CTSmLut9.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
