import{R as t}from"./iframe-UUS7gS8r.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DC8Mmyu0.js";import{B as p}from"./BarChart-CI-fXRTu.js";import{X as l}from"./XAxis-Cy2DOw7O.js";import{Y as h}from"./YAxis-Cy8DgzpK.js";import{B as x}from"./Brush-B26tACLw.js";import{B as c}from"./Bar-CC6OTG74.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CGDCDwfC.js";import"./throttle-CgxVsgWn.js";import"./index-B3bpwb38.js";import"./index-DE7_Lyvr.js";import"./RechartsWrapper-CpoOBNO8.js";import"./axisSelectors-BhKtxZfo.js";import"./polarAxisSelectors-5ho1KqAt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DXJSpI4F.js";import"./index-DlU_WMoq.js";import"./index-BEWOexqM.js";import"./renderedTicksSlice-RI1nm7LM.js";import"./index-w---ZacB.js";import"./CartesianChart-C-KduMFZ.js";import"./ZIndexPortal-DB3Ky3lt.js";import"./CategoricalChart-kgfDSXE6.js";import"./CartesianAxis-CqSL8oIY.js";import"./Layer-CAt7TJL2.js";import"./Text-Dm1h-qE_.js";import"./DOMUtils-dYR_cylo.js";import"./pageBackground-BJvSTYQp.js";import"./ZIndexLayer-CHgyGuEd.js";import"./Label-Cr7fVLhy.js";import"./types-CpFwJGls.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-TYLf-280.js";import"./LabelList-BfhKeSlq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lDg8xK2m.js";import"./useAnimationId-BqxzW97i.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Df31_mcI.js";import"./tooltipContext-DIhpPeC9.js";import"./dataEntryStyles-D0nTu1H4.js";import"./ErrorBarContext-BNmRSNHp.js";import"./activeStyles-C25hf-sM.js";import"./SetGraphicalItem-DsTeZeM0.js";import"./getZIndexFromUnknown-B6MYu_hM.js";import"./useEffectiveDataKey-4NPbYdMg.js";import"./omit-CpAsrXTz.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
