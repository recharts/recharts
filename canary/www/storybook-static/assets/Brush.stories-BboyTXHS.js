import{r as g,R as e}from"./iframe-D7yt-ZhS.js";import{B as i}from"./Brush-BW82H6wv.js";import{R as B}from"./zIndexSlice-B3_xMC6k.js";import{C as p}from"./ComposedChart-Bl4WegRH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-CuD-m0Re.js";import{L as D}from"./LineChart-D588FxE5.js";import{R as m}from"./ReferenceLine-BROseuvH.js";import{C as d}from"./CartesianGrid-NZR0fGHL.js";import{X as S}from"./XAxis-dYNJxVBm.js";import{Y as A}from"./YAxis-C5MIsZgm.js";import{L as R}from"./Legend-BuS0gEvx.js";import{T as w}from"./Tooltip-BZvEkuly.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cebs6l6-.js";import"./d3-scale-BUBb-XjW.js";import"./immer-HxqS16dW.js";import"./index-CHXGCi4x.js";import"./index-nuP2vluJ.js";import"./string-B6fdYHAA.js";import"./Layer-B34T8oTs.js";import"./resolveDefaultProps-BUJk688E.js";import"./Text-DWwT0_EQ.js";import"./DOMUtils-DoEzEhWE.js";import"./isWellBehavedNumber-NaDCVAJY.js";import"./chartDataContext-_IqHUZU5.js";import"./RechartsWrapper-CArYIH40.js";import"./index-CglBtasG.js";import"./index-8zJni8A2.js";import"./renderedTicksSlice-DNerh-qI.js";import"./axisSelectors-CW8UYJLW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C6SOYYpl.js";import"./CategoricalChart-CMCxIWsh.js";import"./Curve-DbP7_Dvx.js";import"./types-CuLQosun.js";import"./step-OtS6f_xO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CUAQ84gk.js";import"./Label-C0p1CWe9.js";import"./ZIndexLayer-BjlE0UF2.js";import"./useAnimationId-gSm0_FsD.js";import"./ActivePoints-KBOJcLZ_.js";import"./Dot-CAfCQdRP.js";import"./RegisterGraphicalItemId-Bj0awerq.js";import"./ErrorBarContext-BCc7VHSV.js";import"./GraphicalItemClipPath-CSwP3plz.js";import"./SetGraphicalItem-BFSgsIRt.js";import"./getRadiusAndStrokeWidthFromDot-BmHXs1fo.js";import"./ActiveShapeUtils-C4okiOLS.js";import"./CartesianAxis-CuPdOLrD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-CgBZX9Up.js";import"./symbol-DAthuMSh.js";import"./useElementOffset-DEe0y9L2.js";import"./uniqBy-C2rlrQ-8.js";import"./iteratee-DZxnX6Pq.js";import"./Cross-DTyjdNNH.js";import"./Rectangle-KnaRg_aq.js";import"./Sector-4qI7YBii.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
