import{r as g,R as e}from"./iframe-BaabCOfo.js";import{B as i}from"./Brush-4XdJydej.js";import{R as B}from"./zIndexSlice-CWxxXgIH.js";import{C as p}from"./ComposedChart-D9WOh2Dq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DqlgNAdm.js";import{L as D}from"./LineChart-BWJA9dDr.js";import{R as m}from"./ReferenceLine-2HkB527t.js";import{C as d}from"./CartesianGrid-CHZGEMe9.js";import{X as S}from"./XAxis-BXlMIHd8.js";import{Y as A}from"./YAxis-q_zljZs-.js";import{L as R}from"./Legend-Bbr4IjRc.js";import{T as w}from"./Tooltip-bfsElqCt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C9kPOoUz.js";import"./d3-scale-xd-t_SLV.js";import"./immer-BLHHDgig.js";import"./index-B1UijuQJ.js";import"./index-vSeH92Tc.js";import"./Layer-64CGscPm.js";import"./resolveDefaultProps-m6H7CCvK.js";import"./Text-BmSZi3Hk.js";import"./DOMUtils-CUUTvSW3.js";import"./isWellBehavedNumber-B34pSeK5.js";import"./chartDataContext-DaAkZdG0.js";import"./RechartsWrapper-BzVbI7QS.js";import"./index-DXTcRTSc.js";import"./index-CADxnCms.js";import"./renderedTicksSlice-qKkoa7Pp.js";import"./axisSelectors-BaT59QoB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C9YeuOyj.js";import"./CategoricalChart-_HoXNLFS.js";import"./Curve-Dz8p7kZF.js";import"./types-hBJB7bDz.js";import"./step-Bn04m8nP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CREItNhG.js";import"./Label-C7hyOp5H.js";import"./ZIndexLayer-qDXxNkeJ.js";import"./useAnimationId-DievnnW1.js";import"./ActivePoints-DsUWTgVX.js";import"./Dot-Cxl_B4ln.js";import"./RegisterGraphicalItemId-CuBJ-yCL.js";import"./ErrorBarContext-BTWgR7nJ.js";import"./GraphicalItemClipPath-BPT-cS9W.js";import"./SetGraphicalItem-DPRJSznG.js";import"./getRadiusAndStrokeWidthFromDot-VrSFbMxb.js";import"./ActiveShapeUtils-DcOcWj43.js";import"./CartesianAxis-DzzVwONF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-I2hzscMR.js";import"./symbol-C7BRuArB.js";import"./useElementOffset-85rrli-w.js";import"./uniqBy-BJyco1_Z.js";import"./iteratee-DXjRqzC3.js";import"./Cross-K3zjPz7t.js";import"./Rectangle-CifaugWI.js";import"./util-Dxo8gN5i.js";import"./Sector-D1IL5SHo.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
