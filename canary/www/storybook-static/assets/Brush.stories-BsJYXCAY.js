import{r as g,R as e}from"./iframe-1fJ5z_WZ.js";import{B as i}from"./Brush-D6llGLF3.js";import{R as B}from"./zIndexSlice-BJlX5T59.js";import{C as p}from"./ComposedChart-Ejf7RFZN.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-CbRnIiBV.js";import{L as D}from"./LineChart-pEetYdtE.js";import{R as m}from"./ReferenceLine-CicxY-9d.js";import{C as d}from"./CartesianGrid-D1IgZnxk.js";import{X as S}from"./XAxis-Kvj5vG7_.js";import{Y as A}from"./YAxis-De-4AuvJ.js";import{L as R}from"./Legend-CmPChhHP.js";import{T as w}from"./Tooltip-B7I7h11K.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-6gV2DTZI.js";import"./resolveDefaultProps-DpYz-CI8.js";import"./Text-BeONQBVt.js";import"./ZIndexLayer-CrU6dYup.js";import"./index-DsJre9D2.js";import"./index-CN35TrPh.js";import"./chartDataContext-B7GlDzou.js";import"./axisSelectors-V7mZ-cGP.js";import"./throttle-6GiZsFaS.js";import"./polarAxisSelectors-DJTK4O93.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DqY1ZQ_w.js";import"./RechartsWrapper-CR62a_mQ.js";import"./index-n_irgge3.js";import"./index-BVEyPHm4.js";import"./renderedTicksSlice-C4Oi_vEC.js";import"./index-Cn_Mqps3.js";import"./fillDefinitions-BKoNuBLW.js";import"./CartesianChart-DqvtgvX5.js";import"./CategoricalChart-DhN17CFo.js";import"./Curve-D2bzFbuS.js";import"./types-XVdAxFZ3.js";import"./step-DaCSxOe-.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CqRs5fjI.js";import"./Label-C7hOOLTD.js";import"./ActivePoints-D175dDtY.js";import"./Dot-B85RmoVX.js";import"./activeStyles-C3pl5b-R.js";import"./useAnimationId-BaNyc8zg.js";import"./Symbols-CPapFf10.js";import"./symbol-CvHFU9Z0.js";import"./ErrorBarContext-CHpXmxM4.js";import"./SetGraphicalItem-BkhZc2Qn.js";import"./getRadiusAndStrokeWidthFromDot-BILnwdsR.js";import"./ActiveShapeUtils-DH_zMc_D.js";import"./useEffectiveDataKey-BB-f3APH.js";import"./CartesianAxis-DL2qV91b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-DE_GKN50.js";import"./uniqBy-C60c41gU.js";import"./iteratee-DEMDIKbX.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Ceq7OV8j.js";import"./Rectangle-kcn0wIRK.js";import"./util-Dxo8gN5i.js";import"./Sector-08zMVhX6.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,je as __namedExportsOrder,Fe as default};
