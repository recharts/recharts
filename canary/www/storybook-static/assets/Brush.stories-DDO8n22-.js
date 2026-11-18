import{r as g,R as e}from"./iframe-ESIqq74j.js";import{B as i}from"./Brush-CDiUYa6w.js";import{R as B}from"./zIndexSlice-CKvG1btl.js";import{C as p}from"./ComposedChart-L_mLjP39.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-BfPK1q22.js";import{L as D}from"./LineChart-wI4ji1Ko.js";import{R as m}from"./ReferenceLine-DfMXcq2x.js";import{C as d}from"./CartesianGrid-D9DsUXb8.js";import{X as S}from"./XAxis-DazJCOyK.js";import{Y as A}from"./YAxis-DKsjzmyR.js";import{L as R}from"./Legend-BjeJ2ZzA.js";import{T as w}from"./Tooltip-Bp5HtTrN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-Bde02su5.js";import"./resolveDefaultProps-B7R_GNLW.js";import"./Text-SrX2-qRa.js";import"./ZIndexLayer-C_1IKv4J.js";import"./index-CADuzeyv.js";import"./index-BLW9Qo5X.js";import"./chartDataContext-y_Sj-SgN.js";import"./axisSelectors-Dt46-i8H.js";import"./throttle-s6zM-TSz.js";import"./polarAxisSelectors-3_x-3ruj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-RU_yJ5H-.js";import"./RechartsWrapper-CmfK6Aj5.js";import"./index-CfWnO0RN.js";import"./index-BUNu1DhE.js";import"./renderedTicksSlice-mNjnmJLW.js";import"./index-COj7acwZ.js";import"./fillDefinitions-DJ6LDeFQ.js";import"./CartesianChart-C07q_lkj.js";import"./CategoricalChart-DJa-RrVL.js";import"./getRadiusAndStrokeWidthFromDot-DeJPrQyS.js";import"./Curve-DSZOr6BZ.js";import"./types-CKUWabzj.js";import"./step-CinInmIp.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CU93DU9D.js";import"./Label-BX7H8p4m.js";import"./ActivePoints-CTIAjKB9.js";import"./Dot-HenRQ4hS.js";import"./activeStyles-rtMeimPT.js";import"./useAnimationId-Fts_Wu3I.js";import"./Symbols-CUdupVmb.js";import"./symbol-DTe8TmzR.js";import"./ErrorBarContext-ckgpu_x8.js";import"./SetGraphicalItem-D7oZPXcp.js";import"./ActiveShapeUtils-C0RxF4ep.js";import"./useEffectiveDataKey-CNiCq0ga.js";import"./CartesianAxis-B_kntHFz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-Bi21MMet.js";import"./uniqBy-DLn6pOi-.js";import"./iteratee-Ceo2QOyl.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CFmROkvM.js";import"./Rectangle-CB4eyp-1.js";import"./util-Dxo8gN5i.js";import"./Sector-D-v2ZTMx.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
