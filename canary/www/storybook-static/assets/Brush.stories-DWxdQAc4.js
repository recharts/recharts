import{r as g,R as e}from"./iframe-CM9KFlpR.js";import{B as i}from"./Brush-DpP3zIxn.js";import{R as B}from"./zIndexSlice-i3oRyNLb.js";import{C as p}from"./ComposedChart-BliiGcYz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-D_p7ofiv.js";import{L as D}from"./LineChart-CM0i53p_.js";import{R as m}from"./ReferenceLine-BKWO3Aaa.js";import{C as d}from"./CartesianGrid-xoKjjEyX.js";import{X as S}from"./XAxis-BpZNPHzq.js";import{Y as A}from"./YAxis-CI94Yo_i.js";import{L as R}from"./Legend-XLGRzbOD.js";import{T as w}from"./Tooltip-Cz2C8J7G.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-CyTLoz3L.js";import"./resolveDefaultProps-Ck7rGCA-.js";import"./Text-Z2Be4kdC.js";import"./DOMUtils-5L50_gtE.js";import"./isWellBehavedNumber-D6ap16Bm.js";import"./chartDataContext-Do1rIj0R.js";import"./RechartsWrapper-DaqDuaqH.js";import"./index-BQLe23-Y.js";import"./index-CO_J2hQh.js";import"./index-DWeI466K.js";import"./index-CIwJAIlL.js";import"./throttle-De6mCLNM.js";import"./renderedTicksSlice-B9ba2EdW.js";import"./axisSelectors-gWKpmW3G.js";import"./d3-scale-BtCHm39u.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bh6VCjY7.js";import"./CategoricalChart-DG8gXHxR.js";import"./Curve-DN_e8w4x.js";import"./types-BZH27c5K.js";import"./step-DSranele.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dc6JrbcK.js";import"./Label-8JT3S2zg.js";import"./ZIndexLayer-CLQFgWIH.js";import"./useAnimationId-OG1_HfMp.js";import"./ActivePoints-BWeInnwU.js";import"./Dot-kCj2iLyE.js";import"./RegisterGraphicalItemId-BY7wzIRb.js";import"./ErrorBarContext-L6TULBDt.js";import"./GraphicalItemClipPath-mABwVFdR.js";import"./SetGraphicalItem-CktbvIN2.js";import"./getRadiusAndStrokeWidthFromDot-CWl-YjkB.js";import"./ActiveShapeUtils-BKApU02X.js";import"./CartesianAxis-wxz_d6Fj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-CQYN6ifz.js";import"./symbol-C_YmnP65.js";import"./useElementOffset-Ce1ZX6FX.js";import"./uniqBy-CUPFsq1k.js";import"./iteratee-FPt0V19d.js";import"./Cross-fbV1HsI7.js";import"./Rectangle-DTzWPR0Y.js";import"./util-Dxo8gN5i.js";import"./Sector-B_QVEzjH.js";const Xe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Ye=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Ye as __namedExportsOrder,Xe as default};
