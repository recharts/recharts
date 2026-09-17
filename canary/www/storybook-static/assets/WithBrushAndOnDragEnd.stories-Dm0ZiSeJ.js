import{R as t}from"./iframe-tVU98U3S.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CyBuhAxg.js";import{B as p}from"./BarChart-C1MIN6mV.js";import{X as l}from"./XAxis-B6lV3McA.js";import{Y as h}from"./YAxis-Cz8LA1zT.js";import{B as x}from"./Brush-DcB2zA64.js";import{B as c}from"./Bar-CCIVP38p.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-7FDSZAP-.js";import"./index-BHaD7xdN.js";import"./index-Dkxefu6-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-yCAU9vb4.js";import"./isWellBehavedNumber-Cm_Hybde.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6c-k2Ww.js";import"./axisSelectors-Dk0RXaf-.js";import"./d3-scale-DsWe6xo3.js";import"./index-D5U9ICSu.js";import"./index-CelAevGI.js";import"./renderedTicksSlice-B6OJ4cSv.js";import"./index-Dkiks_wh.js";import"./CartesianChart-cRl5-qnH.js";import"./chartDataContext-gF0asL1b.js";import"./CategoricalChart-ZVxjTQBd.js";import"./CartesianAxis-BOF0DDEi.js";import"./Layer-BI456J7x.js";import"./Text-BIcirXpx.js";import"./DOMUtils-ZXubKPMD.js";import"./useId-Bhu2YHP8.js";import"./useBackwardsCompatibleTheme-BKS2Kex1.js";import"./Label-BiGv8_RF.js";import"./ZIndexLayer-uxtsIBVq.js";import"./types-B3--bUgQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CqlhlM_R.js";import"./useAnimationId-3DY0RP1D.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DmTy6SeT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D132qIUj.js";import"./tooltipContext-BvoYRQ7S.js";import"./RegisterGraphicalItemId-BUrw94Fl.js";import"./ErrorBarContext-D5CP1D9F.js";import"./GraphicalItemClipPath-DLKqhYTd.js";import"./SetGraphicalItem-BAgFstOS.js";import"./getZIndexFromUnknown-C14KKimr.js";import"./useGraphicalItemIdentity-BYgYeKaf.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
