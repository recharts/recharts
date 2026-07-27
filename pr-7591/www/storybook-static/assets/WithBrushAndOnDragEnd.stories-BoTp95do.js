import{R as t}from"./iframe-9izd3D9f.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-j8GW4H6F.js";import{B as p}from"./BarChart-DlZWOACA.js";import{X as l}from"./XAxis--s8YS1Wl.js";import{Y as h}from"./YAxis-DDd0ZoO9.js";import{B as x}from"./Brush-BntZitoK.js";import{B as c}from"./Bar-BgyD3TSL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dy12ptOd.js";import"./index-DfNj7uF8.js";import"./index-QeEXQkn5.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CJPuqJ9q.js";import"./isWellBehavedNumber-Dt2_Y5DC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CpTAS-BM.js";import"./index-DrKXWdQ6.js";import"./index-D25GhdX2.js";import"./renderedTicksSlice-xsvpNcHR.js";import"./axisSelectors-C_YuJB8n.js";import"./d3-scale-592QtAt9.js";import"./CartesianChart-Cdk7-_gT.js";import"./chartDataContext-D7Iq0aTs.js";import"./CategoricalChart-B8CDnPPF.js";import"./CartesianAxis-C-mmkXWm.js";import"./Layer-CGfY9rzU.js";import"./Text-DrtU0dSh.js";import"./DOMUtils-BT3FOC_T.js";import"./Label-DH_iQkHv.js";import"./ZIndexLayer-CbN30hBP.js";import"./types-DZJVpBfQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CsvLvw9-.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-8-j-pmHM.js";import"./AnimatedItems-BaOOJr-i.js";import"./useAnimationId-DwScawE-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CFwhI2o-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BG6vmKAa.js";import"./RegisterGraphicalItemId-DMscoraw.js";import"./ErrorBarContext-BIj0xSPV.js";import"./GraphicalItemClipPath-DPeQpV-c.js";import"./SetGraphicalItem-DzCkGHMg.js";import"./getZIndexFromUnknown-CxPEdDy6.js";import"./graphicalItemSelectors-CV94R21c.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
