import{r as g,R as e}from"./iframe-tfZrcrMF.js";import{B as i}from"./Brush-gjYATz05.js";import{R as B}from"./zIndexSlice-CC8kCstT.js";import{C as p}from"./ComposedChart-BCjiIJ4o.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-D0Cby_f_.js";import{L as D}from"./LineChart-BD8OpKKd.js";import{R as m}from"./ReferenceLine-Dnz3OYx-.js";import{C as d}from"./CartesianGrid-DGthdUPw.js";import{X as S}from"./XAxis-DhOgSkqh.js";import{Y as A}from"./YAxis-BOlMvWid.js";import{L as R}from"./Legend-B9D1yZE0.js";import{T as w}from"./Tooltip-DiMmQvx9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-ru88AdSr.js";import"./resolveDefaultProps-BpCpS2kK.js";import"./Text-DXjy-RzD.js";import"./ZIndexLayer-DnL-EDkP.js";import"./index-CCpPbL-G.js";import"./index-CQW0Ruw4.js";import"./chartDataContext-pD1W3H_C.js";import"./axisSelectors-BkiuLlPZ.js";import"./throttle-DycvlznN.js";import"./polarAxisSelectors-D2vFLO2n.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uLY3we2s.js";import"./RechartsWrapper-Mi5m4ATr.js";import"./index-0VCZupX4.js";import"./index-C00ri7pa.js";import"./renderedTicksSlice-DCheLSnn.js";import"./index-DC_tjhxs.js";import"./fillDefinitions-CQPwZfwM.js";import"./CartesianChart-Cxx6k3Ff.js";import"./CategoricalChart-DGtxkSeD.js";import"./getRadiusAndStrokeWidthFromDot-Ch3PhdMy.js";import"./Curve-C3wk6TDN.js";import"./types-CWW0D7cm.js";import"./step-8uwKBSGh.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CpzODNOV.js";import"./Label-CrLdB5k3.js";import"./ActivePoints-BER6C4Du.js";import"./Dot-BulvKgA_.js";import"./activeStyles-CW3oynl8.js";import"./useAnimationId-CiRiV3_R.js";import"./Symbols-yui_aiRC.js";import"./symbol-ru9lBt2i.js";import"./ErrorBarContext-5NXkIyss.js";import"./SetGraphicalItem-BPWS4To0.js";import"./ActiveShapeUtils-Mflib2w7.js";import"./useEffectiveDataKey-Bate5zYb.js";import"./CartesianAxis-DHW_9iiH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-BOZs20Ry.js";import"./uniqBy-q1lloGjW.js";import"./iteratee-CDaF10ns.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BFqcDJ2_.js";import"./Rectangle-C_wD8Q_z.js";import"./util-Dxo8gN5i.js";import"./Sector-DobEZmfG.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
