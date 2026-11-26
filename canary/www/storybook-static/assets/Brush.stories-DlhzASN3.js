import{r as g,R as e}from"./iframe-cV3SAodv.js";import{B as i}from"./Brush-BoNDoKsU.js";import{R as B}from"./zIndexSlice-Cjgp2TXV.js";import{C as p}from"./ComposedChart-Bqs-Kl5O.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DOqIdMIn.js";import{L as D}from"./LineChart-DvXOfUb3.js";import{R as m}from"./ReferenceLine-CO_QwqoW.js";import{C as d}from"./CartesianGrid-C8EjnebA.js";import{X as S}from"./XAxis-BuIJ_QWG.js";import{Y as A}from"./YAxis-DYud1g9H.js";import{L as R}from"./Legend-IZ97z-G8.js";import{T as w}from"./Tooltip-KrO3BR4a.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-zGQNaeEg.js";import"./resolveDefaultProps-C4GEEUb1.js";import"./get-CjriyByo.js";import"./Text-DIOCtNrm.js";import"./ZIndexLayer-C_9SlmyF.js";import"./index-DNgMIzR1.js";import"./index-CaZV8WiE.js";import"./chartDataContext-Da1Grc9c.js";import"./axisSelectors-C9H2pU_G.js";import"./throttle-CMi-pHht.js";import"./polarAxisSelectors--xQAorkv.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-y_crYDj7.js";import"./RechartsWrapper-CyX-rkWs.js";import"./index-yYdNmmg6.js";import"./index-DTNI7e-E.js";import"./renderedTicksSlice-BtGm49YF.js";import"./index-Dt1fVd2j.js";import"./fillDefinitions-DbiqT5_A.js";import"./CartesianChart-BWo1r9td.js";import"./CategoricalChart-CWv6udzl.js";import"./getRadiusAndStrokeWidthFromDot-C4ogZ01-.js";import"./Curve-CeApDEIq.js";import"./types-CxXTSyDH.js";import"./step-miPDfXCq.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Cky1CNqk.js";import"./Label-CQK_czyp.js";import"./ActivePoints-C5tqNSRW.js";import"./Dot-DlXY1cPq.js";import"./activeStyles-BPuHxpJZ.js";import"./useAnimationId-DD8tFxYJ.js";import"./Symbols-Sv15_QUP.js";import"./symbol-rfkqyrPT.js";import"./ErrorBarContext-CopN05Qu.js";import"./SetGraphicalItem-B6xdOYOb.js";import"./ActiveShapeUtils-kkzOPQE8.js";import"./useEffectiveDataKey-DBeKKq_r.js";import"./CartesianAxis-BCSNf2Xf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-CFDuhw8U.js";import"./uniqBy-5kbtoCpG.js";import"./iteratee-DH-5OUvh.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DKNOH1xZ.js";import"./Rectangle-BBeAx3Mp.js";import"./util-Dxo8gN5i.js";import"./Sector-BhPFPfN5.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
