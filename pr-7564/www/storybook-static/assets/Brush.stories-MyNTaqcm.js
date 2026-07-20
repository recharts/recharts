import{r as g,R as e}from"./iframe-MCQmK-TG.js";import{B as i}from"./Brush-BiZaxofj.js";import{R as B}from"./zIndexSlice-BMHpWHLe.js";import{C as p}from"./ComposedChart-CupTaTlB.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-D58bgiXU.js";import{L as D}from"./LineChart-CB6f3FNc.js";import{R as m}from"./ReferenceLine-RzDgfBit.js";import{C as d}from"./CartesianGrid-UiabJrkf.js";import{X as S}from"./XAxis-xj8vDJ23.js";import{Y as A}from"./YAxis-BUA5jm-O.js";import{L as R}from"./Legend-Vw1i6A5_.js";import{T as w}from"./Tooltip-DoSHN02A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-BUisE7Gh.js";import"./resolveDefaultProps-DF8ch7IU.js";import"./Text-LGFyNulV.js";import"./DOMUtils-DeN2A_86.js";import"./isWellBehavedNumber-DF6QZ0lN.js";import"./chartDataContext-oq73vT2r.js";import"./RechartsWrapper-CSMirUgA.js";import"./index-DCwDEUXM.js";import"./index-4hl_PvHL.js";import"./index-iUk-FcRS.js";import"./index-CGFRGdbT.js";import"./throttle-exFJ19dN.js";import"./renderedTicksSlice-5teDD8C_.js";import"./axisSelectors-t6G1HMN1.js";import"./d3-scale-1trsZxCl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CbiEQRIX.js";import"./CategoricalChart-DG8zA7C6.js";import"./Curve-DfisrzMh.js";import"./types-Cz27ONEA.js";import"./step-DU3HZd3T.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Z_ZNAYUP.js";import"./Label-DaldQZFv.js";import"./ZIndexLayer-BnKxJfbB.js";import"./useAnimationId-Ptyt1Cmf.js";import"./ActivePoints-DBM0wjQk.js";import"./Dot-CZGz3E6B.js";import"./RegisterGraphicalItemId-CwAmMMrt.js";import"./ErrorBarContext-7PhmiQse.js";import"./GraphicalItemClipPath-BDardp6y.js";import"./SetGraphicalItem-RVuvzcbz.js";import"./getRadiusAndStrokeWidthFromDot-00OVvYcl.js";import"./ActiveShapeUtils-BJxvN-bC.js";import"./CartesianAxis-B42rFi6U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-D248hYs2.js";import"./symbol-C8I9OgJ7.js";import"./useElementOffset-IqQ0qYQD.js";import"./uniqBy-9wyvpuL-.js";import"./iteratee-D6dL79SH.js";import"./Cross-BuwOH600.js";import"./Rectangle-Dp_gpqgG.js";import"./util-Dxo8gN5i.js";import"./Sector-CSOrAi9m.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
