import{R as t}from"./iframe-Sgab1gUe.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BrzbkbEI.js";import{B as p}from"./BarChart-CeHWoldk.js";import{X as l}from"./XAxis-Be4f_XLH.js";import{Y as h}from"./YAxis-B3Csn4tH.js";import{B as x}from"./Brush-BV2LiDbd.js";import{B as c}from"./Bar-BkFeW9r4.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-jmjMSL8D.js";import"./index-BLkVzwy_.js";import"./index-90Rz6XAP.js";import"./get-BJyukGiE.js";import"./resolveDefaultProps-CNXENHcX.js";import"./isWellBehavedNumber-CJXdc3tU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTduNXvU.js";import"./index-BkOZFEZb.js";import"./index-BsnSQtU-.js";import"./renderedTicksSlice-CVwVFFGF.js";import"./axisSelectors-8GhzU9TS.js";import"./d3-scale-Bg12AftI.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CY44eXB-.js";import"./chartDataContext-NIXL8iaZ.js";import"./CategoricalChart-DwEPGx0k.js";import"./CartesianAxis-s1UQ10e0.js";import"./Layer-Dy3UQ8V8.js";import"./Text-Bwmob33r.js";import"./DOMUtils-CmwtFJfy.js";import"./Label-pFFfknml.js";import"./ZIndexLayer-DBRcOItw.js";import"./types-CA2ETL4c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DiIFYHNf.js";import"./AnimatedItems-CFJVJstG.js";import"./useAnimationId-D0bn0X4e.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CGR64IYi.js";import"./ActiveShapeUtils-CypivSKC.js";import"./RegisterGraphicalItemId-BSYxTo0u.js";import"./ErrorBarContext-WB4epqm3.js";import"./GraphicalItemClipPath-BB2uZM8Q.js";import"./SetGraphicalItem-Cu_IpSGW.js";import"./getZIndexFromUnknown-BmwQbQid.js";import"./graphicalItemSelectors-B2HDnJwF.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
