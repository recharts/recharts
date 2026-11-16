import{R as t}from"./iframe-lJBwbutv.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DOZGt0Xc.js";import{B as p}from"./BarChart-ymPMYYQv.js";import{X as l}from"./XAxis-eFYFTspd.js";import{Y as h}from"./YAxis-DzJ296_j.js";import{B as x}from"./Brush-BehRz2Ha.js";import{B as c}from"./Bar-DCGMePyX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CuoHmAis.js";import"./throttle-BD4ZOoVc.js";import"./index-D-yoUCLK.js";import"./index-DmjkyNBy.js";import"./RechartsWrapper-C4uciLnE.js";import"./axisSelectors-CiZzV4Ua.js";import"./polarAxisSelectors-g2gwazbI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BrfLvVJ7.js";import"./index-BjclV3iC.js";import"./index-Bgy6zka-.js";import"./renderedTicksSlice-ChSQY0tz.js";import"./index-CPSRkKHN.js";import"./fillDefinitions-DgzgNWUG.js";import"./CartesianChart-BDxnsR9l.js";import"./chartDataContext-CuRy23UW.js";import"./CategoricalChart-CWJpCYvL.js";import"./CartesianAxis-DLyqJbpN.js";import"./Layer-CZzb4Onv.js";import"./Text-CH7ZTJa6.js";import"./ZIndexLayer-DMFEoW6r.js";import"./Label-C1XxCcqG.js";import"./types-BR2T4QCa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BXXFCsKs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BLn-6YRh.js";import"./useAnimationId-Dj7sECHw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6HIsnjoS.js";import"./tooltipContext-rr--AtsR.js";import"./ErrorBarContext-CF700d8f.js";import"./activeStyles-C_lJCdGG.js";import"./SetGraphicalItem-BjwhNxsW.js";import"./getZIndexFromUnknown-DzuXgSkc.js";import"./useEffectiveDataKey-Bg5rFbYe.js";import"./omit-DwkGh_sW.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
