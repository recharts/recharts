import{R as t}from"./iframe-DX3DoU0V.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-JZscBD-4.js";import{B as p}from"./BarChart-CViHzgTk.js";import{X as l}from"./XAxis-CymymjPS.js";import{Y as h}from"./YAxis-eJYuoSOp.js";import{B as x}from"./Brush-TwKlnFgW.js";import{B as c}from"./Bar-CbtwD6ve.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Df9paSU5.js";import"./index-C9zXapq5.js";import"./index-BLWyFYv6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dht9eep2.js";import"./isWellBehavedNumber-DXPAUxYw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cor7Wz0Q.js";import"./index-fiTNjDfz.js";import"./index-dfS5pTPx.js";import"./renderedTicksSlice-C2lqyVGO.js";import"./axisSelectors-CPexRmiS.js";import"./d3-scale-cmuGZbi0.js";import"./CartesianChart-DAdEh2n_.js";import"./chartDataContext-KL4_rbFV.js";import"./CategoricalChart-COC9nxGS.js";import"./CartesianAxis-Bl7vCDUz.js";import"./Layer-CfDkJPJv.js";import"./Text-CGNeItsO.js";import"./DOMUtils-jkxXqBeu.js";import"./Label-CcOENmHR.js";import"./ZIndexLayer-Dcm0gV7H.js";import"./types-CkeZP30w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-B8gNCXNL.js";import"./AnimatedItems-azUMJ4jR.js";import"./useAnimationId-2LcPTVkH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BknJ5SeS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C5RQzc-i.js";import"./RegisterGraphicalItemId-Dlzi8iuz.js";import"./ErrorBarContext-UMJzk-jC.js";import"./GraphicalItemClipPath-BLXFrLs-.js";import"./SetGraphicalItem-C1_wN2SK.js";import"./getZIndexFromUnknown-Bymqfo9L.js";import"./graphicalItemSelectors-BlsH2ULy.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};
