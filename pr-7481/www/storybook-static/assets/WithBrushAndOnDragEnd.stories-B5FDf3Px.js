import{R as t}from"./iframe-BIq879V5.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D4TMV-f8.js";import{B as p}from"./BarChart-BuuZvkjV.js";import{X as l}from"./XAxis-BeATFl8n.js";import{Y as h}from"./YAxis-CWb6gVw3.js";import{B as x}from"./Brush-CFhlzygr.js";import{B as c}from"./Bar-CNKjD13i.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bhe1IepA.js";import"./index-Bxqp1uTz.js";import"./index-1ZXeTe4f.js";import"./get-Dlp4HEDU.js";import"./resolveDefaultProps-D0mYDCdG.js";import"./isWellBehavedNumber-2nx214wI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5ZbCTkSQ.js";import"./index-CoQnCr93.js";import"./index-qY5ecPCO.js";import"./renderedTicksSlice-wj6PxGI_.js";import"./axisSelectors-BEDQXBlF.js";import"./d3-scale-D2-Kj7HA.js";import"./CartesianChart-D5C06Dh0.js";import"./chartDataContext-DENfjobA.js";import"./CategoricalChart-B9HsjgZj.js";import"./CartesianAxis-DnWuLXim.js";import"./Layer-BQ46hdaR.js";import"./Text-D9ArQUyF.js";import"./DOMUtils-U4n6Sms4.js";import"./Label-CdyMu7UM.js";import"./ZIndexLayer-kG0uRxU5.js";import"./types-sdPoIcnS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DkawCHMm.js";import"./AnimatedItems-Cplqb3ZM.js";import"./useAnimationId-7GzLXqBz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Be09360W.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DMlqT6AD.js";import"./RegisterGraphicalItemId-CM4cjQUT.js";import"./ErrorBarContext-DapMvKSQ.js";import"./GraphicalItemClipPath-DLFobv0X.js";import"./SetGraphicalItem-DenlJqlF.js";import"./getZIndexFromUnknown-DrBS4-Wu.js";import"./graphicalItemSelectors-BIYOuh4B.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
