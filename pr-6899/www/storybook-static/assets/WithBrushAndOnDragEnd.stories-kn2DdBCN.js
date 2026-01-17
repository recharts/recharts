import{e}from"./iframe-DVbcaGEk.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-D_Ccs7mG.js";import{B as p}from"./BarChart-BWwm5MqS.js";import{X as l}from"./XAxis-3cZu4ol_.js";import{Y as h}from"./YAxis-C7ETLAW_.js";import{B as c}from"./Brush-CH5sLtnG.js";import{B as x}from"./Bar-CcbZu8ZI.js";import{R as u}from"./RechartsHookInspector-CNkljFSC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BvhwmIy1.js";import"./PolarUtils-BCmS2GQK.js";import"./RechartsWrapper-CI_kVB3D.js";import"./hooks-DrJQ9o1U.js";import"./axisSelectors-Dq8ysKg7.js";import"./zIndexSlice-C3Z2iJoi.js";import"./CartesianChart-DwoXLAKx.js";import"./chartDataContext-BHEPpTwp.js";import"./CategoricalChart-DaQkrRKt.js";import"./CartesianAxis-DJav8QwX.js";import"./Layer-CTeRo74K.js";import"./Text-BnUgu-YX.js";import"./DOMUtils-C3Nevwge.js";import"./Label-Vy4t0U1x.js";import"./ZIndexLayer-DQcVBq3k.js";import"./types-glyr-q7x.js";import"./tooltipContext-7-acIv96.js";import"./ReactUtils-PeKnJ7eE.js";import"./ActiveShapeUtils-CQxGvOB9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CDg01dVF.js";import"./useAnimationId-BsgPO1Qj.js";import"./Trapezoid-_bdwRMqG.js";import"./Sector-D5CuENkF.js";import"./Symbols-D0zgYynQ.js";import"./Curve-DRY3YzYB.js";import"./RegisterGraphicalItemId-sqkoY2pX.js";import"./ErrorBarContext-BcI0a9d6.js";import"./GraphicalItemClipPath-58Cq7fMH.js";import"./SetGraphicalItem-CMkDLn5I.js";import"./getZIndexFromUnknown-CDKO4QyV.js";import"./graphicalItemSelectors-BOv0msDD.js";import"./index-BAtGFOnL.js";import"./ChartSizeDimensions-B0rnWoCy.js";import"./OffsetShower-DI4Pwzeh.js";import"./PlotAreaShower-CPYGkOSs.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const se=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,se as __namedExportsOrder,me as default};
