import{r as g,R as e}from"./iframe-QVKxPJQm.js";import{B as i}from"./Brush-PAM-uN8o.js";import{R as B}from"./zIndexSlice-G0DC-c-K.js";import{C as p}from"./ComposedChart-D6hBWYm7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-P2ZNjFCX.js";import{L as D}from"./LineChart-B2JDN2Iq.js";import{R as m}from"./ReferenceLine-CIB0IndD.js";import{C as d}from"./CartesianGrid-B0UIFc_O.js";import{X as S}from"./XAxis-C2HS1FtJ.js";import{Y as A}from"./YAxis-D2swP-TV.js";import{L as R}from"./Legend-sLgq0bx5.js";import{T as w}from"./Tooltip-DJxRTBUk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DLMFwiXu.js";import"./d3-scale-CGteqX7a.js";import"./immer-edRA0-Yp.js";import"./index-C30tpYub.js";import"./index-BlfChkir.js";import"./Layer-Bc0oacyD.js";import"./resolveDefaultProps-CEVaC25K.js";import"./Text-BQy0Q-oS.js";import"./DOMUtils-D8ZqFxMD.js";import"./isWellBehavedNumber-JryOpPT2.js";import"./chartDataContext-zcaQUTsU.js";import"./RechartsWrapper-C-HdUf1N.js";import"./index-CIkXYV9A.js";import"./index-D4ODfY0z.js";import"./renderedTicksSlice-BovhzHMl.js";import"./axisSelectors-C3vt1wN5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-KcupAlfP.js";import"./CategoricalChart-CeUMrFdM.js";import"./Curve-7I9MiX70.js";import"./types-DQssRkrH.js";import"./step-Bask81UI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems--IUYJkxx.js";import"./Label-IjZcZSlh.js";import"./ZIndexLayer-CNHQW8Kz.js";import"./useAnimationId-BUf_qCat.js";import"./ActivePoints-QMqqqiKi.js";import"./Dot-1qgdhznt.js";import"./RegisterGraphicalItemId-DJWNxqfN.js";import"./ErrorBarContext-CGBznjIg.js";import"./GraphicalItemClipPath-cpuBGhtV.js";import"./SetGraphicalItem-mX53cDIp.js";import"./getRadiusAndStrokeWidthFromDot-4L8nwbWx.js";import"./ActiveShapeUtils-Dv5zSjSn.js";import"./CartesianAxis-DF6IixyN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-Ba_SzYwE.js";import"./symbol-DrviD42Y.js";import"./useElementOffset-DWwojRwA.js";import"./uniqBy-f_3dXFuE.js";import"./iteratee-BmhOMioJ.js";import"./Cross-C4Qn6tVJ.js";import"./Rectangle-BBAzwt0m.js";import"./util-Dxo8gN5i.js";import"./Sector-BP2pJ8-s.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
