import{r as g,R as e}from"./iframe-Ci96e1sZ.js";import{B as i}from"./Brush-BAYJMoVE.js";import{R as B}from"./zIndexSlice-B1EQFXas.js";import{C as p}from"./ComposedChart-CsnMi2po.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-CNdoo1PD.js";import{L as D}from"./LineChart-CFSpypWG.js";import{R as m}from"./ReferenceLine-SJ1XjGOb.js";import{C as d}from"./CartesianGrid-CUhXlyIq.js";import{X as S}from"./XAxis-sNeLDR5W.js";import{Y as A}from"./YAxis-BeupBiv_.js";import{L as R}from"./Legend-BCp85ZfU.js";import{T as w}from"./Tooltip-CZO2G-iO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-CZ2F14sW.js";import"./resolveDefaultProps-BzIfhmsg.js";import"./Text-B3nSPEiT.js";import"./DOMUtils-BbVSTVZx.js";import"./isWellBehavedNumber-CF2GCTfq.js";import"./useBackwardsCompatibleTheme-D2Fw4B1K.js";import"./chartDataContext-BYKHEhUl.js";import"./axisSelectors-Bjs83WTa.js";import"./throttle-Dnh15uFS.js";import"./index-CPCYaABA.js";import"./index-BOr38y8s.js";import"./d3-scale-B0NLrUrx.js";import"./RechartsWrapper-DZtweL3y.js";import"./index-7lcQp6iI.js";import"./index-DH9mueDN.js";import"./renderedTicksSlice-DNsJLMW0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CCAPJMRK.js";import"./CategoricalChart--GJhAkst.js";import"./Curve-BysAQY9m.js";import"./types-D2o80dZ0.js";import"./step-pm8cM45a.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BGUr9OQF.js";import"./Label-CF4xlS6j.js";import"./ZIndexLayer-DwZny_eu.js";import"./useAnimationId-BzCTa_4t.js";import"./ActivePoints-CcMPEi3Q.js";import"./Dot-CNczHnMS.js";import"./RegisterGraphicalItemId-CEOZLZl3.js";import"./ErrorBarContext-MBgpuxtH.js";import"./GraphicalItemClipPath-wdGuOIwS.js";import"./SetGraphicalItem-C5ta0dz_.js";import"./getRadiusAndStrokeWidthFromDot-BH_CgfJ4.js";import"./ActiveShapeUtils-Bmp4Kv1_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D8l6BhAe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-Di4l6aUk.js";import"./symbol-DrFKkU6g.js";import"./useElementOffset-BdkJ1pFB.js";import"./uniqBy-CHZeAJXB.js";import"./iteratee-C-mJOptL.js";import"./Cross-3xywc_iZ.js";import"./Rectangle-ELfFl8ZJ.js";import"./util-Dxo8gN5i.js";import"./Sector-Cw_y7PiZ.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
