import{R as t}from"./iframe-DbrRN1n8.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Du0Au1R-.js";import{B as p}from"./BarChart-BCfl1jup.js";import{X as l}from"./XAxis-D4Dr_tjl.js";import{Y as h}from"./YAxis-DXpw8vqJ.js";import{B as x}from"./Brush-DT-qH2MN.js";import{B as c}from"./Bar-BOPgu8U0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ds4rGbhG.js";import"./throttle-DUdTYHJ7.js";import"./index-CogSL5JJ.js";import"./index-D6EAQOZI.js";import"./RechartsWrapper-DlyIgJor.js";import"./axisSelectors-DK6uFkxV.js";import"./polarAxisSelectors-D77BuFKC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUENC00q.js";import"./index-M4gkvM-3.js";import"./index-xhc0FShP.js";import"./renderedTicksSlice-mzEE9LM4.js";import"./index-B5hYk0_Q.js";import"./CartesianChart-CDlGam4t.js";import"./ZIndexPortal-CvbthdtM.js";import"./CategoricalChart-DVK-Whre.js";import"./CartesianAxis-BCK1OBBy.js";import"./Layer-Do_lw1Xj.js";import"./Text-WfDu__TP.js";import"./pageBackground-CkPB-Imo.js";import"./ZIndexLayer-DdjxUpLS.js";import"./Label-A7WyPB0I.js";import"./types-DkNvVUMM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BgsnBCM1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-3NP_NJyH.js";import"./useAnimationId-CvK-4pcw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DUWP9jsa.js";import"./tooltipContext-DOKPheir.js";import"./dataEntryStyles-CKR3qDl0.js";import"./ErrorBarContext-Bfmn5FWH.js";import"./activeStyles-BV7TfXze.js";import"./SetGraphicalItem-D97kyhFi.js";import"./getZIndexFromUnknown-DGJ3xvMK.js";import"./useEffectiveDataKey-ChFOzgVO.js";import"./omit-Dvz-UHEk.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
