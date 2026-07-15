import{r as g,R as e}from"./iframe-DdGnkOFo.js";import{B as i}from"./Brush-Lo3lr6pP.js";import{R as B}from"./zIndexSlice-Coao54AN.js";import{C as p}from"./ComposedChart-A-lxRNNH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DbTGCsdD.js";import{L as D}from"./LineChart-3IXj0JL7.js";import{R as m}from"./ReferenceLine-BcfTOl_-.js";import{C as d}from"./CartesianGrid-8-gqwNmB.js";import{X as S}from"./XAxis-CwjUQWj_.js";import{Y as A}from"./YAxis-BBZ_UVPr.js";import{L as R}from"./Legend-j7wP2bqS.js";import{T as w}from"./Tooltip-C3GMGeW6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-C_y1fxvr.js";import"./resolveDefaultProps-Btuog99o.js";import"./Text-DAM87njj.js";import"./DOMUtils-DV9Ec2hx.js";import"./isWellBehavedNumber-vlfZeEqT.js";import"./chartDataContext-DAj5ZKMQ.js";import"./RechartsWrapper-CWAtSdtd.js";import"./index-BT6JmE6p.js";import"./index-Ikz32X_R.js";import"./index-CLyHvciH.js";import"./index-Z1BsW0X1.js";import"./throttle-zZssU-Yn.js";import"./renderedTicksSlice-BOOh9KOs.js";import"./axisSelectors-Cd50OEg7.js";import"./d3-scale-BvrGgEa2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BEpSJ7tS.js";import"./CategoricalChart-B-_DRhy8.js";import"./Curve-BxYGAEW6.js";import"./types-D3VR5HmA.js";import"./step-B8IQ9ApF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BUboBg0D.js";import"./Label-BhIy96Hp.js";import"./ZIndexLayer-Ohjg-EB3.js";import"./useAnimationId-6rr0uMBz.js";import"./ActivePoints-fBjIF9Nl.js";import"./Dot-CqaCoBUP.js";import"./RegisterGraphicalItemId-COu7yO2P.js";import"./ErrorBarContext-BD7rxjgN.js";import"./GraphicalItemClipPath-DAEO1IcC.js";import"./SetGraphicalItem-2sM575PE.js";import"./getRadiusAndStrokeWidthFromDot-D5R5gYG2.js";import"./ActiveShapeUtils-D54fuxpr.js";import"./CartesianAxis-Bo84uroF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-SKeYRtHY.js";import"./symbol-CcoCMD-R.js";import"./useElementOffset-4OHFNcW2.js";import"./uniqBy-CXPCyF4-.js";import"./iteratee-aK0dWx0L.js";import"./Cross-CiGCk2h5.js";import"./Rectangle-Dicu6Oub.js";import"./util-Dxo8gN5i.js";import"./Sector-D0r8VPbQ.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (_args: Args) => {
    const [startIndex, setStartIndex] = useState<number | undefined>(2);
    const [endIndex, setEndIndex] = useState<number | undefined>(5);
    return <>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" isAnimationActive={false} />

            <Brush startIndex={startIndex} endIndex={endIndex} onChange={e => {
            setEndIndex(e.endIndex);
            setStartIndex(e.startIndex);
          }} alwaysShowText />
          </ComposedChart>
        </ResponsiveContainer>
        <input type="number" aria-label="startIndex" value={startIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setStartIndex(num);
      }} />
        <input aria-label="endIndex" value={endIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setEndIndex(num);
      }} />
      </>;
  }
}`,...(x=(C=a.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var E,I,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData} margin={{
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
        r: 8
      }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <ReferenceLine stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
        <Brush dataKey="name">
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
        <Tooltip />
      </ComposedChart>;
  }
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var L,b,K;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData}>
        <Brush>
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
      </ComposedChart>;
  }
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Xe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Xe as __namedExportsOrder,Ge as default};
