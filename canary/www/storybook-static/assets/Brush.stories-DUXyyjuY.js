import{r as g,R as e}from"./iframe-8y2_-y0l.js";import{B as i}from"./Brush-BeZiHOJM.js";import{R as B}from"./zIndexSlice-D_xG4Od1.js";import{C as p}from"./ComposedChart-k0StXg-x.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-b4Fm44kj.js";import{L as D}from"./LineChart-BdugTKrs.js";import{R as m}from"./ReferenceLine-D62YWcJ3.js";import{C as d}from"./CartesianGrid-Tylt9tzW.js";import{X as S}from"./XAxis-C-STHEWl.js";import{Y as A}from"./YAxis-Cka8X-Di.js";import{L as R}from"./Legend-BERrS3MS.js";import{T as w}from"./Tooltip-DrQK6_bU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-Bx7fY7lj.js";import"./resolveDefaultProps-Dr9m88pQ.js";import"./Text-DSeRyRP0.js";import"./DOMUtils-BWSGK_7w.js";import"./isWellBehavedNumber-CdgGUQY1.js";import"./chartDataContext-CRN46eEy.js";import"./RechartsWrapper-B7Kkv9qM.js";import"./index-DMzHieur.js";import"./index-4aNbOO2K.js";import"./index-DRQy4x13.js";import"./index-BErx7veh.js";import"./throttle-vJw1Gj7e.js";import"./renderedTicksSlice-CEAAcomA.js";import"./axisSelectors-CSK4MjLf.js";import"./d3-scale-U7OEzOLT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CB-6O5b4.js";import"./CategoricalChart-CTEs6pXe.js";import"./Curve-rx89tdOF.js";import"./types-BqBuCCYn.js";import"./step-DuBNKbdJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D2ax0Lv8.js";import"./Label-DkE66McM.js";import"./ZIndexLayer-Db2-KFbv.js";import"./useAnimationId-Cseq293z.js";import"./ActivePoints-DmGp4Tvx.js";import"./Dot-D1wqWj67.js";import"./RegisterGraphicalItemId-CtYEtvHk.js";import"./ErrorBarContext-CT8kogTh.js";import"./GraphicalItemClipPath-CtYHN7Zm.js";import"./SetGraphicalItem-DMAc9VE6.js";import"./graphicalItemIdentity-CpyAXlc1.js";import"./ActiveShapeUtils-Bx5pmo_f.js";import"./RechartsThemeContext-D6NJDAxr.js";import"./CartesianAxis-Dxt7VdA8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-DT910lYp.js";import"./symbol-B3ZeMIeQ.js";import"./useElementOffset-CCRtAZkL.js";import"./uniqBy-CU4rcLT3.js";import"./iteratee-CmpuqRan.js";import"./Cross-Da13P1aY.js";import"./Rectangle-B1X6Uqlr.js";import"./util-Dxo8gN5i.js";import"./Sector-CZ9Izv_-.js";const Ye={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Fe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Fe as __namedExportsOrder,Ye as default};
