import{r as g,R as e}from"./iframe-Bzny_MYO.js";import{B as s}from"./Brush-EQ6Yn7fi.js";import{R as B}from"./zIndexSlice-MTgyOxcR.js";import{C as p}from"./ComposedChart-C-U97YwV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-nynINyW7.js";import{L as D}from"./LineChart-B6m-E4BP.js";import{R as m}from"./ReferenceLine-Dsr3my5g.js";import{C as d}from"./CartesianGrid-BU--jY8B.js";import{X as S}from"./XAxis-D652bNH-.js";import{Y as A}from"./YAxis-CJm4ZJgn.js";import{L as R}from"./Legend-Cs8q_FQN.js";import{T as w}from"./Tooltip-foEeq-Dg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-DwImaMiy.js";import"./resolveDefaultProps-DhnFRoYZ.js";import"./Text-fNDWB5Io.js";import"./pageBackground-3hrs4YVX.js";import"./ZIndexLayer-5vWyPJ-H.js";import"./index-BR-DuKD2.js";import"./index-BNanU6AD.js";import"./ZIndexPortal-CcFwSb_x.js";import"./axisSelectors-BEccdncb.js";import"./throttle-GvTGKSCT.js";import"./polarAxisSelectors-Cax9tCz_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CLm70OA6.js";import"./RechartsWrapper-DwCbU-k0.js";import"./index-B1Bw8GV_.js";import"./index-BO70CSrb.js";import"./renderedTicksSlice-IHCqVqCy.js";import"./index-BGYmHh9L.js";import"./CartesianChart-8QUHmRpr.js";import"./CategoricalChart-BS5ujOqF.js";import"./Curve-DvxHsU-S.js";import"./types-DppBMtwl.js";import"./step-Ck4pU_CH.js";import"./path-DyVhHtw_.js";import"./LabelList-DP5qLQcH.js";import"./Label-DTuGlMPs.js";import"./ActivePoints-7LmcTnxb.js";import"./Dot-B0SoNECw.js";import"./activeStyles-D4lYsebj.js";import"./useAnimationId-DPjHdwMC.js";import"./dataEntryStyles-Dmke5Kqf.js";import"./Symbols-Dt4jbT5_.js";import"./symbol-BKCm_Bj0.js";import"./ErrorBarContext-B5xatTad.js";import"./SetGraphicalItem-C8_kNIod.js";import"./getRadiusAndStrokeWidthFromDot-B5e8MQ8V.js";import"./ActiveShapeUtils-cjVk6ERl.js";import"./useEffectiveDataKey-D9i-sft6.js";import"./CartesianAxis-CF7trjb7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-ZYBSOkTe.js";import"./uniqBy-CmMRn8Xg.js";import"./iteratee-DzeYmEiw.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DaNX623z.js";import"./Rectangle-BIffJDOA.js";import"./util-Dxo8gN5i.js";import"./Sector-0HEjef0D.js";const je={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},qe=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};export{a as ControlledBrush,i as NoChartBrush,o as PanoramicBrush,qe as __namedExportsOrder,je as default};
