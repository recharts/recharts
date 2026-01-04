import{r as v,e}from"./iframe-CCMJ-7V4.js";import{B as i}from"./Brush-eHMl0Yx0.js";import{R}from"./arrayEqualityCheck-EU51TFpx.js";import{C as p}from"./ComposedChart-C6h9PwcP.js";import{L as t}from"./Line-DHYMeVHf.js";import{R as c}from"./RechartsHookInspector-CT184sGb.js";import{X as S}from"./XAxis-R7Vv75w5.js";import{Y as A}from"./YAxis-BsjRKKqi.js";import{C as m}from"./CartesianGrid-DyGIfdDj.js";import{L as w}from"./Legend-B9rhwJLc.js";import{R as d}from"./ReferenceLine-DYxzF2uT.js";import{L as B}from"./LineChart-CE_kvjkA.js";import{T as N}from"./Tooltip-BPXKEL5o.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BNCKdsdg.js";import"./axisSelectors-Bwyl_l9L.js";import"./Layer-BEqohIF5.js";import"./Text-DT_EImOw.js";import"./DOMUtils-DS3HDMLJ.js";import"./chartDataContext-BB33_ty3.js";import"./RechartsWrapper-Dlfj2KI1.js";import"./hooks--Mj4Y-hQ.js";import"./zIndexSlice-D6TWR_2-.js";import"./PolarUtils-JMmyzBBh.js";import"./CartesianChart-BWh3hsiv.js";import"./CategoricalChart-Cxiu0ZqS.js";import"./ReactUtils-CeY657n5.js";import"./Label-DYpMY_OX.js";import"./ZIndexLayer-DTuo7Di4.js";import"./ActivePoints-DMWv0p30.js";import"./Dot-BPrJu2iO.js";import"./types-CfBor7-V.js";import"./RegisterGraphicalItemId-DVKqMQCD.js";import"./ErrorBarContext-sxni0djP.js";import"./GraphicalItemClipPath-CYG_pIwh.js";import"./SetGraphicalItem-DBanf2OA.js";import"./useAnimationId-C67C_3Vf.js";import"./getRadiusAndStrokeWidthFromDot-BG_1nnLU.js";import"./ActiveShapeUtils-6YQyK9qF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DFaFQv7g.js";import"./Trapezoid-iC4EoUjD.js";import"./Sector-CvpK-Ylm.js";import"./Symbols-BjLEgnQl.js";import"./Curve-CWiUvZCK.js";import"./index-55iJ_lXJ.js";import"./ChartSizeDimensions-DrMr_UaN.js";import"./OffsetShower-0LfR1yxg.js";import"./PlotAreaShower-BAItckLJ.js";import"./CartesianAxis-CjO0kaDg.js";import"./useElementOffset-CesAmAsq.js";import"./iteratee-DuUSmLFC.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-Cn3uXrmE.js";const _e={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(K=s.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};const Oe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Oe as __namedExportsOrder,_e as default};
