import{r as v,e}from"./iframe-DhLWPZ06.js";import{B as i}from"./Brush-SBqRsXxc.js";import{R}from"./arrayEqualityCheck-CC1O7uMi.js";import{C as p}from"./ComposedChart-DqQWtOY7.js";import{L as t}from"./Line-DV1Pc56J.js";import{R as c}from"./RechartsHookInspector-BYy17HVN.js";import{X as S}from"./XAxis-DHBBBHf5.js";import{Y as A}from"./YAxis-CnLq9B_y.js";import{C as m}from"./CartesianGrid-Dbvz7fke.js";import{L as w}from"./Legend-D5X8NU7K.js";import{R as d}from"./ReferenceLine-XeA0ZzPW.js";import{L as B}from"./LineChart-MOV6xVWn.js";import{T as N}from"./Tooltip-BYrJLHQh.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Xflu8RP3.js";import"./axisSelectors-DMZtzusH.js";import"./Layer-DYv-jvxI.js";import"./Text-DO5FmLPB.js";import"./DOMUtils-CqWLBihg.js";import"./chartDataContext-D-yHh9FI.js";import"./RechartsWrapper-DUMd0Jc6.js";import"./hooks-BVelaaLp.js";import"./zIndexSlice-DphDhRje.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-XrmXSdkV.js";import"./CategoricalChart-CZEP5E7E.js";import"./ReactUtils-BtUFOzkx.js";import"./Label-FSHYxmdz.js";import"./ZIndexLayer-DD1HiNcR.js";import"./ActivePoints-DprIqvLX.js";import"./Dot-BoxzeF_p.js";import"./types-C2AjUdZP.js";import"./RegisterGraphicalItemId-DKys76eX.js";import"./ErrorBarContext-D2Y9d5di.js";import"./GraphicalItemClipPath-CuDzi9bq.js";import"./SetGraphicalItem-BLAlPe4G.js";import"./useAnimationId-C9SVwlUf.js";import"./getRadiusAndStrokeWidthFromDot-Lki9i3qE.js";import"./ActiveShapeUtils-BM0r3s-g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DZfrdEyG.js";import"./Trapezoid-C38TpHLa.js";import"./Sector-DNph1k80.js";import"./Symbols-BmApJZ92.js";import"./Curve-CrhEQPlh.js";import"./index-DvWkBSj_.js";import"./ChartSizeDimensions-C4EMLUii.js";import"./OffsetShower-DlJYxrX-.js";import"./PlotAreaShower-HP7o8TwR.js";import"./CartesianAxis-DBjvK8IT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BcoburPK.js";import"./iteratee-B1pJwrfy.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-Xmt4-0aU.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
