import{r as g,R as e}from"./iframe-ClcrwGuW.js";import{B as i}from"./Brush-B8i4ooC3.js";import{R as B}from"./zIndexSlice-BIGnlmU8.js";import{C as p}from"./ComposedChart-QFp2QUo8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-A183MaDD.js";import{L as D}from"./LineChart-BymBWjuL.js";import{R as m}from"./ReferenceLine-Ty6lAS72.js";import{C as d}from"./CartesianGrid-dXDFDE-n.js";import{X as S}from"./XAxis-DBark8Vy.js";import{Y as A}from"./YAxis-XJItrttK.js";import{L as R}from"./Legend-BS7RA_N3.js";import{T as w}from"./Tooltip-CHjDpm_C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-3ZpdhJcS.js";import"./resolveDefaultProps-9pIX-KZX.js";import"./Text-BoORctzg.js";import"./DOMUtils-Bjh7wfeW.js";import"./isWellBehavedNumber-DdPJLAK-.js";import"./chartDataContext-STSGah94.js";import"./RechartsWrapper-BesFJ4ht.js";import"./index-B0NRpt-4.js";import"./index-DNzarm0L.js";import"./index-2ZX0-Izg.js";import"./index-CDmIxHtk.js";import"./throttle-CCS8xgZt.js";import"./renderedTicksSlice-rMv3D_T6.js";import"./axisSelectors-BOLsAE8g.js";import"./d3-scale-CMtXPpnj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DuIwxUsc.js";import"./CategoricalChart-C5ZgEjVK.js";import"./Curve-CrblFnpJ.js";import"./types-BTRTN-qV.js";import"./step-Kzlz86Dk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LJ4rT4-Q.js";import"./Label-Dq1bNHIu.js";import"./ZIndexLayer-ktmCEwYK.js";import"./useAnimationId-Dr2V8ESg.js";import"./ActivePoints-DpbrBFbr.js";import"./Dot-BJH-Cd7h.js";import"./RegisterGraphicalItemId-D8phwbUX.js";import"./ErrorBarContext-BQj1MtW_.js";import"./GraphicalItemClipPath-UUgKir8H.js";import"./SetGraphicalItem-CKgMzTJ0.js";import"./getRadiusAndStrokeWidthFromDot-DBwea6ik.js";import"./ActiveShapeUtils-kn3TCk0Z.js";import"./CartesianAxis-ByEdCDio.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-D815RcxC.js";import"./symbol-9zs_gWxT.js";import"./useElementOffset-0hht_3Y4.js";import"./uniqBy-BWkjWHs1.js";import"./iteratee-D67nRlPy.js";import"./Cross-2z9sFD4c.js";import"./Rectangle-BnksOpBX.js";import"./util-Dxo8gN5i.js";import"./Sector-DEtGgNIy.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
