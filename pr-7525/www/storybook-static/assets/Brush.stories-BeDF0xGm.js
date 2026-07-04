import{r as g,R as e}from"./iframe-Cdy9NYu9.js";import{B as i}from"./Brush-DMILTTq9.js";import{R as B}from"./zIndexSlice-C2_e4Jbl.js";import{C as p}from"./ComposedChart-CGyVRna3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-L0enbhhs.js";import{L as D}from"./LineChart-BB6uvWNj.js";import{R as m}from"./ReferenceLine-DPaVasK9.js";import{C as d}from"./CartesianGrid-DKOeRVem.js";import{X as S}from"./XAxis-BJhS5a8e.js";import{Y as A}from"./YAxis-B-BKBDfM.js";import{L as R}from"./Legend-DM-Rt-nv.js";import{T as w}from"./Tooltip-N88xWPck.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-Hq_4dnpr.js";import"./resolveDefaultProps-CG6sO-97.js";import"./Text-DMhYSqT7.js";import"./DOMUtils-DBN2rZ60.js";import"./isWellBehavedNumber-CJulqOvD.js";import"./chartDataContext-C2Y_0_Vz.js";import"./RechartsWrapper-D4IxCG7a.js";import"./index-Bcb8rKnp.js";import"./index-CaPeX6FT.js";import"./index-BZ9Fe99a.js";import"./index-DsFTIXEw.js";import"./throttle-t9dcJkBi.js";import"./renderedTicksSlice-DWXzhFAM.js";import"./axisSelectors-ByTu7Vcx.js";import"./d3-scale-DTNVMcZf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C4yHSY79.js";import"./CategoricalChart-BucM35ky.js";import"./Curve-CX0sCCUr.js";import"./types-C9NSKw4l.js";import"./step-Dtj-YZD0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BSQ2aAGr.js";import"./Label-BIfqnFjj.js";import"./ZIndexLayer-BxN8McgO.js";import"./useAnimationId-DO_gOZxo.js";import"./ActivePoints-MMq034Vb.js";import"./Dot-B4nh6ym9.js";import"./RegisterGraphicalItemId-WMzFziJE.js";import"./ErrorBarContext-B4XuHyPg.js";import"./GraphicalItemClipPath-GIg3EkdR.js";import"./SetGraphicalItem-CgtgTGFl.js";import"./getRadiusAndStrokeWidthFromDot-BJvaJANi.js";import"./ActiveShapeUtils-CMZtEUn5.js";import"./CartesianAxis-DA9B6fNW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-DZGbGfC4.js";import"./symbol-CnhKgttC.js";import"./useElementOffset-DysDxY94.js";import"./uniqBy-LvrlaU3A.js";import"./iteratee-bdNJUmyF.js";import"./Cross-DfwotlG2.js";import"./Rectangle-zLcbgT_c.js";import"./util-Dxo8gN5i.js";import"./Sector-CzJudC60.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
