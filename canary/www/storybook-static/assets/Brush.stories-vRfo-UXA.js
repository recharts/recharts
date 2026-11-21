import{r as g,R as e}from"./iframe-C9RR7JmE.js";import{B as i}from"./Brush-DkMIrWzq.js";import{R as B}from"./zIndexSlice-9FgFGtgA.js";import{C as p}from"./ComposedChart-DzefamiH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-CsoZzsvT.js";import{L as D}from"./LineChart-BveNY67n.js";import{R as m}from"./ReferenceLine-DAJr4wZI.js";import{C as d}from"./CartesianGrid-DaeQ5XHg.js";import{X as S}from"./XAxis-B6hKXJep.js";import{Y as A}from"./YAxis-Bsmg8WZC.js";import{L as R}from"./Legend-BI4I1MVi.js";import{T as w}from"./Tooltip-D7Jum6np.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-CF0GFBX9.js";import"./resolveDefaultProps-BS9vZKxy.js";import"./Text-m7bywbsW.js";import"./ZIndexLayer-CRt4gP-q.js";import"./index-C9sROg_Y.js";import"./index-DobETtGM.js";import"./chartDataContext--IWIWppp.js";import"./axisSelectors-TgtedVmF.js";import"./throttle-CSzDQiVS.js";import"./polarAxisSelectors-fbcgHrSa.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFw4t_7I.js";import"./RechartsWrapper-Bb98fXCM.js";import"./index-Bp7vSvmR.js";import"./index-C4LPcI60.js";import"./renderedTicksSlice-DG_92KFR.js";import"./index-Dim785Oy.js";import"./fillDefinitions-BD293OF_.js";import"./CartesianChart-bv1G3A4F.js";import"./CategoricalChart-CUD-tLds.js";import"./getRadiusAndStrokeWidthFromDot-xzaADJd5.js";import"./Curve-Cp4aQ8cc.js";import"./types-DEp2f933.js";import"./step-Sm-51kJi.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-B4uCvMTS.js";import"./Label-BaLJb5QI.js";import"./ActivePoints-BLeTrPjm.js";import"./Dot-B-qNm1bD.js";import"./activeStyles-psvB14ar.js";import"./useAnimationId-P10-1iqt.js";import"./Symbols-DlwZKch0.js";import"./symbol-DWh1oIHF.js";import"./ErrorBarContext-D5q20nPS.js";import"./SetGraphicalItem-D9jhbnIr.js";import"./ActiveShapeUtils-xp9QUtvW.js";import"./useEffectiveDataKey-rhz_g6ic.js";import"./CartesianAxis-DmiMG-c8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-C2cTU9_n.js";import"./uniqBy-DEPl67Hh.js";import"./iteratee-Rk_zuFbj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-uKm1mtpB.js";import"./Rectangle-DHyKIA3T.js";import"./util-Dxo8gN5i.js";import"./Sector-bBle_5Yt.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
