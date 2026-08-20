import{r as g,R as e}from"./iframe-T2vx_vOa.js";import{B as s}from"./Brush-gCHZjHG1.js";import{R as B}from"./zIndexSlice-B-qj09MF.js";import{C as p}from"./ComposedChart-C1KMn7rC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-Cr6MSzMJ.js";import{L as D}from"./LineChart-DuBdwMuO.js";import{R as m}from"./ReferenceLine-C9ln38uv.js";import{C as d}from"./CartesianGrid-BVCRKHeO.js";import{X as S}from"./XAxis-BN7ADdXK.js";import{Y as A}from"./YAxis-BF1HUrTi.js";import{L as R}from"./Legend-QD-0owBx.js";import{T as w}from"./Tooltip-LDzoybih.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-BJSWtfPf.js";import"./resolveDefaultProps-DDbhMM_B.js";import"./Text-C_hpuPsU.js";import"./DOMUtils-DCQI-dAG.js";import"./isWellBehavedNumber-CkczEaKC.js";import"./useId-BgzgS8Mn.js";import"./useBackwardsCompatibleTheme-CPVLRTOy.js";import"./chartDataContext-BRu0PEKp.js";import"./axisSelectors-Bwt_MWfh.js";import"./throttle-B2YWMMfN.js";import"./index-CKmP93dg.js";import"./index-C2g4etmg.js";import"./d3-scale-9Bwz5xwo.js";import"./RechartsWrapper-B7E4P3q_.js";import"./index-BGfsg-y8.js";import"./index-BmiiKlQ3.js";import"./renderedTicksSlice-BZDyTRdO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bnxa5O6x.js";import"./CategoricalChart-DZbNl6UN.js";import"./Curve-B3Mj_t6F.js";import"./types-Bh_AGi1X.js";import"./step-DPp_r08A.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C9f8W2_c.js";import"./Label-AUPLS1jy.js";import"./ZIndexLayer-BwLVxIBn.js";import"./useAnimationId-w6GkkQqu.js";import"./ActivePoints-99dWxsTW.js";import"./Dot-BlclRNOF.js";import"./RegisterGraphicalItemId-DenhQzIU.js";import"./ErrorBarContext-ClNe4tHQ.js";import"./GraphicalItemClipPath-CBz4hBDX.js";import"./SetGraphicalItem-BV24eLVS.js";import"./getRadiusAndStrokeWidthFromDot-DJHAn0yp.js";import"./ActiveShapeUtils-jwMR0d8y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Bztsuorj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-CV9T5Yu_.js";import"./symbol-BI3up_Yv.js";import"./useElementOffset-DcABdze2.js";import"./uniqBy-BVVWdgld.js";import"./iteratee-B1adNlu2.js";import"./Cross-D0pU1Ik5.js";import"./Rectangle-CFnUwAZg.js";import"./util-Dxo8gN5i.js";import"./Sector-C6JSPpsQ.js";const je={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var L,b,K;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const qe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,i as NoChartBrush,o as PanoramicBrush,qe as __namedExportsOrder,je as default};
