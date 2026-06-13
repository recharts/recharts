import{R as t}from"./iframe-ii_SdKaT.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CewrGiZi.js";import{B as p}from"./BarChart-B1kfkx3Q.js";import{X as l}from"./XAxis-n_W7ptOo.js";import{Y as h}from"./YAxis-B_AHmNwM.js";import{B as x}from"./Brush-Uz-xqlPM.js";import{B as c}from"./Bar-CG5WCWwE.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BRK5VplU.js";import"./index-CipO9bHT.js";import"./index-C9rA4SBW.js";import"./get-IlujCcRJ.js";import"./resolveDefaultProps-DmtqLCBR.js";import"./isWellBehavedNumber-Bl4DTDWz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJ7nVo9I.js";import"./index-CoHu65TP.js";import"./index-BWUxHoQX.js";import"./renderedTicksSlice-6QIQv7lN.js";import"./axisSelectors-BEJlbTgh.js";import"./d3-scale-DqldvK9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-hQrjvxNc.js";import"./chartDataContext-WEDyGrAX.js";import"./CategoricalChart-BC-K0qUt.js";import"./CartesianAxis-C12Pbczw.js";import"./Layer-1o6wJcjz.js";import"./Text-D6jUUcir.js";import"./DOMUtils-CspLYEuU.js";import"./Label-CWAFalVX.js";import"./ZIndexLayer-C_pljZlN.js";import"./types-CROtPh6T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BgC5UDk8.js";import"./AnimatedItems-Ddier9mI.js";import"./useAnimationId-DETjp9PR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DzvlK_vY.js";import"./ActiveShapeUtils-_FaeFiVy.js";import"./RegisterGraphicalItemId-Bd8rL4_6.js";import"./ErrorBarContext-BbBngZhz.js";import"./GraphicalItemClipPath-BIR1mLdK.js";import"./SetGraphicalItem-Ke19tpjU.js";import"./getZIndexFromUnknown-BXc2GGi4.js";import"./graphicalItemSelectors-BvscI3Fb.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
