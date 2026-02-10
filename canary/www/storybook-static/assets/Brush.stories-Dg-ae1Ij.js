import{r as v,e}from"./iframe-BXZsi3ZJ.js";import{B as i}from"./Brush-CswTZhmD.js";import{R}from"./arrayEqualityCheck-Cr28DIq7.js";import{C as p}from"./ComposedChart-A4rsHRl-.js";import{L as t}from"./Line-1az24r_p.js";import{R as c}from"./RechartsHookInspector-BcsNAcT5.js";import{X as S}from"./XAxis-vWhvLlJA.js";import{Y as A}from"./YAxis-CF2_AxHC.js";import{C as m}from"./CartesianGrid-DvwO1gtD.js";import{L as w}from"./Legend-CwV2obUu.js";import{R as d}from"./ReferenceLine-D3-bpddI.js";import{L as B}from"./LineChart-DGJxQw4h.js";import{T as N}from"./Tooltip-CXAzYhU1.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKwhIINC.js";import"./axisSelectors-DViO6aT3.js";import"./Layer-CHngc-aq.js";import"./Text-BiWmZivS.js";import"./DOMUtils-C3G08RNL.js";import"./chartDataContext-RNK-qzkr.js";import"./RechartsWrapper-DbqalEnK.js";import"./hooks-CeRNCNPw.js";import"./zIndexSlice-47t4gEct.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-34kvrnIo.js";import"./CategoricalChart-Cfh0DMKR.js";import"./ReactUtils-Cp6NqBbj.js";import"./Label-BOPAlXUc.js";import"./ZIndexLayer-BN0SI8Of.js";import"./ActivePoints-C2rwBq_Q.js";import"./Dot-BSyucR2X.js";import"./types-5-uOdbL9.js";import"./RegisterGraphicalItemId-BjUtGevU.js";import"./ErrorBarContext-a8MR5IC4.js";import"./GraphicalItemClipPath-BTERSkFA.js";import"./SetGraphicalItem-C1CwePg9.js";import"./useAnimationId-DdIT7cjj.js";import"./getRadiusAndStrokeWidthFromDot-h-LXgdKb.js";import"./ActiveShapeUtils-LYXTR8UQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C086hGgA.js";import"./Trapezoid-CgIXwzIx.js";import"./Sector-CiJ5MIJx.js";import"./Symbols-CywLz0nT.js";import"./Curve-CD_JBQwm.js";import"./index-Chn5vrwc.js";import"./ChartSizeDimensions-DJrZeKfe.js";import"./OffsetShower-DmQZJejv.js";import"./PlotAreaShower-CTSmLut9.js";import"./CartesianAxis-D3TuOOex.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CCimOZj2.js";import"./iteratee-pBQ1AHnD.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-D7YmrLLh.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
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
}`,...(x=(E=a.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var I,f,L;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ComposedChart>;
  }
}`,...(L=(f=o.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var b,K,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ComposedChart>;
  }
}`,...(D=(K=s.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};const We=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,We as __namedExportsOrder,Oe as default};
