import{r as g,R as e}from"./iframe-Bpzk9XpD.js";import{B as i}from"./Brush-BiMOQXrG.js";import{R as B}from"./zIndexSlice-CybCXANO.js";import{C as p}from"./ComposedChart-OJyIgW0F.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-Ct_StldJ.js";import{L as D}from"./LineChart-DHyOLarx.js";import{R as m}from"./ReferenceLine-C75-woIT.js";import{C as d}from"./CartesianGrid-basT9jrb.js";import{X as S}from"./XAxis-BP9q3ZDK.js";import{Y as A}from"./YAxis-h8NK-7C6.js";import{L as R}from"./Legend-UtQoP2bc.js";import{T as w}from"./Tooltip-Ba2oQn2v.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-DCNhrIPV.js";import"./resolveDefaultProps-C16rW2Tl.js";import"./get-CjriyByo.js";import"./Text-Dqm35yMi.js";import"./ZIndexLayer-BSjRPeG2.js";import"./index-C_7DmI7l.js";import"./index-CBNlQ8jB.js";import"./chartDataContext-DZdZASYb.js";import"./axisSelectors-BX6dGTcL.js";import"./throttle-BPowKzWT.js";import"./polarAxisSelectors-C0HjJPCE.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-NmCyEWmm.js";import"./RechartsWrapper-DlW5DJbf.js";import"./index-BoH8mfei.js";import"./index-Da9OH9g8.js";import"./renderedTicksSlice-B8rXaB1P.js";import"./index-DUebFUoz.js";import"./fillDefinitions-DV8KR0hl.js";import"./CartesianChart-v26TVdj4.js";import"./CategoricalChart-CZJOPWNu.js";import"./getRadiusAndStrokeWidthFromDot-BTTYYDZG.js";import"./Curve-D_Dl1lOS.js";import"./types-BjOl9SGN.js";import"./step-D-E4uKVH.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CqhA2T9I.js";import"./Label-eMApu8Ae.js";import"./ActivePoints-DF_bXbZk.js";import"./Dot-Dm4VIYOH.js";import"./activeStyles-Dvq2y-2D.js";import"./useAnimationId-B2Y87b6z.js";import"./Symbols-Bw3SJeUU.js";import"./symbol-Ce4tZNho.js";import"./ErrorBarContext-CEm3_QIT.js";import"./SetGraphicalItem-BO8cE8zs.js";import"./ActiveShapeUtils-Px2nMQKl.js";import"./useEffectiveDataKey-Cem866lm.js";import"./CartesianAxis-DyKfTr_o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-DUi4H2Fd.js";import"./uniqBy-DJXoe2B2.js";import"./iteratee-nuQs-o3F.js";import"./isArguments-yB-y1yaH.js";import"./Cross-eYJNosTd.js";import"./Rectangle-6Dmq4B9R.js";import"./util-Dxo8gN5i.js";import"./Sector-CeulT84m.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
