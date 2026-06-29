import{r as g,R as e}from"./iframe-yOPx9Gik.js";import{B as i}from"./Brush-CYPLer4n.js";import{R as B}from"./zIndexSlice-D67vVDIo.js";import{C as p}from"./ComposedChart-CNKZcRKd.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-C0Fqz3BG.js";import{L as D}from"./LineChart-B51-taJF.js";import{R as m}from"./ReferenceLine-DroHem7Z.js";import{C as d}from"./CartesianGrid-DAxTRuGa.js";import{X as S}from"./XAxis-CJ8HGhD8.js";import{Y as A}from"./YAxis-CkktISrz.js";import{L as R}from"./Legend-D02SZGli.js";import{T as w}from"./Tooltip-B5mu-Q18.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BfHGT2kl.js";import"./d3-scale-BQYCkYi4.js";import"./immer-MwiuxAbo.js";import"./index-DJygjR8e.js";import"./index-gBURTRbi.js";import"./Layer-Bwtnd2Qr.js";import"./resolveDefaultProps-DB1B-raE.js";import"./Text-BYswpnhx.js";import"./DOMUtils-Cu0iYWZD.js";import"./isWellBehavedNumber-X6n-T2Sz.js";import"./chartDataContext-CIZm0aW3.js";import"./RechartsWrapper-BCqwcFHc.js";import"./index-C-1T0p6G.js";import"./index-CyWWVFG2.js";import"./renderedTicksSlice-ClbKT4Vz.js";import"./axisSelectors-BcCjx1Bb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-tj_Q7LqM.js";import"./CategoricalChart-C2Hn6eQd.js";import"./Curve-CyG3DmyO.js";import"./types-BJAf4K7V.js";import"./step-Bnv-0_8B.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CE38GYBB.js";import"./Label-BqUT8U7H.js";import"./ZIndexLayer-B4R3RCf9.js";import"./useAnimationId-D3arzwOC.js";import"./ActivePoints-BnyIHKN-.js";import"./Dot-BOZFOnSK.js";import"./RegisterGraphicalItemId-DtIIsDtI.js";import"./ErrorBarContext-qp41ygoF.js";import"./GraphicalItemClipPath-ByZKWDCp.js";import"./SetGraphicalItem-Bb0dcZso.js";import"./getRadiusAndStrokeWidthFromDot-pUt3tlnV.js";import"./ActiveShapeUtils-BD3mqbS1.js";import"./CartesianAxis-C7MTbV32.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-DEw2IZw_.js";import"./symbol-DX-jtzBs.js";import"./useElementOffset-DPzY_T8I.js";import"./uniqBy-B8wALonH.js";import"./iteratee-C7Rvqn86.js";import"./Cross-TDkCdzSz.js";import"./Rectangle-DeKBG9DN.js";import"./util-Dxo8gN5i.js";import"./Sector-DRFegpMv.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
