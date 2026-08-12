import{r as g,R as e}from"./iframe-CVyYUHBB.js";import{B as i}from"./Brush-CNOr-Ass.js";import{R as B}from"./zIndexSlice-DQO5Hbgs.js";import{C as p}from"./ComposedChart-m9fhUeFB.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-BPoyEZrU.js";import{L as D}from"./LineChart-B2InQOzn.js";import{R as m}from"./ReferenceLine-CFK0rdS4.js";import{C as d}from"./CartesianGrid-BDm06sUL.js";import{X as S}from"./XAxis-L2wk8rnW.js";import{Y as A}from"./YAxis-Da2JXkbU.js";import{L as R}from"./Legend-DdTk7cU9.js";import{T as w}from"./Tooltip-bL6ikWyH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-BB5O4xlv.js";import"./resolveDefaultProps-C7voaGK7.js";import"./Text-CiA3AAlg.js";import"./DOMUtils-ukWQHZl5.js";import"./isWellBehavedNumber-BkHFck3s.js";import"./RechartsThemeContext-NTsyT9p1.js";import"./chartDataContext-CkCkvPBB.js";import"./axisSelectors-CMqkaAfm.js";import"./throttle-BBXZcEly.js";import"./index-DyYl91DI.js";import"./index-Bu-B5WMy.js";import"./d3-scale-G2cHgOnr.js";import"./RechartsWrapper-B47jb7Bg.js";import"./index-Ck0Bo50f.js";import"./index-DLItSsfJ.js";import"./renderedTicksSlice-Cdp3Xg1W.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart--y5fp4Ts.js";import"./CategoricalChart-BzwwubIO.js";import"./Curve-BDPvfmPk.js";import"./types-DESxFXXj.js";import"./step-Be_wHVCe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Clv-mx2A.js";import"./Label-DUcJCWBn.js";import"./ZIndexLayer-DBw3xiu4.js";import"./useAnimationId-_KC_AMgU.js";import"./ActivePoints-D1NkQNgM.js";import"./Dot-D0NdtXSm.js";import"./RegisterGraphicalItemId-BhQ648vE.js";import"./ErrorBarContext-Buq5hkgo.js";import"./GraphicalItemClipPath-JgdFdpvQ.js";import"./SetGraphicalItem-C8TpD4Nn.js";import"./getRadiusAndStrokeWidthFromDot-OHCftA6z.js";import"./ActiveShapeUtils-D5nCu2Hc.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-890WjR3i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-DMTBO25H.js";import"./symbol-BSVPaPlS.js";import"./useElementOffset-BXKfJxEF.js";import"./uniqBy-CHZtDAbM.js";import"./iteratee-CwapYXfW.js";import"./Cross-BgZQfds0.js";import"./Rectangle-AHQh490H.js";import"./util-Dxo8gN5i.js";import"./Sector-3KjT9U1p.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const je=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,je as __namedExportsOrder,Fe as default};
