import{r as v,e}from"./iframe-DPPC5LCd.js";import{B as i}from"./Brush-D0GftDIO.js";import{R}from"./arrayEqualityCheck-Dvk8KT0D.js";import{C as p}from"./ComposedChart-Ds3ekokY.js";import{L as t}from"./Line-Df8hhM8R.js";import{R as c}from"./RechartsHookInspector-Blp8PL-4.js";import{X as S}from"./XAxis-BG2Y_xwU.js";import{Y as A}from"./YAxis-BkVN0NTj.js";import{C as m}from"./CartesianGrid-CvB-qYbV.js";import{L as w}from"./Legend-CqiGLNsX.js";import{R as d}from"./ReferenceLine-CFgt3SN-.js";import{L as B}from"./LineChart-D0oDf0o6.js";import{T as N}from"./Tooltip-Vhvc3XfR.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-LOA1Y3L5.js";import"./axisSelectors-Y4qCzWsU.js";import"./Layer-l1Ju_rpU.js";import"./Text-CskNyNSq.js";import"./DOMUtils-BagiRLWz.js";import"./chartDataContext-CBM88NXk.js";import"./RechartsWrapper-PEDxF674.js";import"./hooks-D7d6b41a.js";import"./zIndexSlice-Cyke5ZAj.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-CLhvhGCa.js";import"./CategoricalChart-DSnyIdqz.js";import"./ReactUtils-Dpo3QY29.js";import"./Label-CyOEca1T.js";import"./ZIndexLayer-BYs5zm3k.js";import"./ActivePoints-bzJzis_r.js";import"./Dot-DGBsmHFR.js";import"./types-BtZeuRvc.js";import"./RegisterGraphicalItemId-CQrbIdXT.js";import"./ErrorBarContext-DOTmmgqX.js";import"./GraphicalItemClipPath-npaeuZne.js";import"./SetGraphicalItem-WBUrf2m8.js";import"./useAnimationId-BL1JszpL.js";import"./getRadiusAndStrokeWidthFromDot-r3LToZRM.js";import"./ActiveShapeUtils-CzCtjHUV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdGsT6u6.js";import"./Trapezoid-BQbcDxOL.js";import"./Sector-6q_tG2Nj.js";import"./Symbols-BVjVO6PI.js";import"./Curve-Bys-PvMV.js";import"./index-vC2xkEJs.js";import"./ChartSizeDimensions-CMyfGdJP.js";import"./OffsetShower-B4IN2vD-.js";import"./PlotAreaShower-P_z3LqUB.js";import"./CartesianAxis-CbeAAhwj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-C9FgqAtz.js";import"./iteratee-CxRByJ3f.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-WWtM8EO7.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
