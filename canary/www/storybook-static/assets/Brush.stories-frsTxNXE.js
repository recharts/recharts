import{r as v,e}from"./iframe-BekWtzeP.js";import{B as i}from"./Brush-Ba1QeXPw.js";import{R}from"./arrayEqualityCheck-Dex07G1y.js";import{C as p}from"./ComposedChart-wZSx9jy7.js";import{L as t}from"./Line-D0dttAr6.js";import{R as c}from"./RechartsHookInspector-DYfLD4ov.js";import{X as S}from"./XAxis-BaakOQmt.js";import{Y as A}from"./YAxis-D6pypf8E.js";import{C as m}from"./CartesianGrid-BBzAe3s9.js";import{L as w}from"./Legend-Cy9Kfx5z.js";import{R as d}from"./ReferenceLine-BeXmzrhs.js";import{L as B}from"./LineChart-Bc6Oegcb.js";import{T as N}from"./Tooltip-CMyTry6W.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DM_sVtnW.js";import"./axisSelectors-dkELBwuo.js";import"./Layer-Bfyqa5-M.js";import"./Text-GqnKFCwL.js";import"./DOMUtils-BX7aw3nI.js";import"./chartDataContext-DIse9eKf.js";import"./RechartsWrapper-BLym1DZ5.js";import"./hooks-M7JbNACE.js";import"./zIndexSlice-C6dUOqXj.js";import"./renderedTicksSlice-Cs1v0Weq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DBKl6El9.js";import"./CategoricalChart-DjOHDvdh.js";import"./ReactUtils-V0CtXr9z.js";import"./Label-Co8l3-0E.js";import"./ZIndexLayer-BEmVcKyp.js";import"./ActivePoints-ECHEl66Y.js";import"./Dot-DROJJWRy.js";import"./types-BAUrPFwC.js";import"./RegisterGraphicalItemId-DBrxdiVv.js";import"./ErrorBarContext-erPuSmOq.js";import"./GraphicalItemClipPath-CbuKIejK.js";import"./SetGraphicalItem-COH5jwOQ.js";import"./useAnimationId-BhuDd99U.js";import"./getRadiusAndStrokeWidthFromDot-u9pmLcPC.js";import"./ActiveShapeUtils-DEhZs-Ax.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BI0WfAac.js";import"./Trapezoid-BGCarJJl.js";import"./Sector-B9JgPSGu.js";import"./Symbols-CsDFwuaA.js";import"./Curve-DNeihdYA.js";import"./index-D7stEGDS.js";import"./ChartSizeDimensions-BIF9SI6Q.js";import"./OffsetShower-BzXSvdvm.js";import"./PlotAreaShower-fI9VNU4p.js";import"./CartesianAxis-CVhNrsBY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BR2HBu2M.js";import"./iteratee-C8S_xBIu.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-DqVKMtAZ.js";const We={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(K=s.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};const Te=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Te as __namedExportsOrder,We as default};
