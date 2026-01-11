import{r as v,e}from"./iframe-D2G3HIAp.js";import{B as i}from"./Brush-Dk_jzg43.js";import{R}from"./arrayEqualityCheck-D7f_pFRZ.js";import{C as p}from"./ComposedChart-B3gygK9L.js";import{L as t}from"./Line-CnFjL8nQ.js";import{R as c}from"./RechartsHookInspector-Bl5k7Hvc.js";import{X as S}from"./XAxis-Cv05-S4d.js";import{Y as A}from"./YAxis-C4SLmRp0.js";import{C as m}from"./CartesianGrid-DlHFlIxs.js";import{L as w}from"./Legend-PqwLEj3K.js";import{R as d}from"./ReferenceLine-lyHFhYoN.js";import{L as B}from"./LineChart-CJpy58Ix.js";import{T as N}from"./Tooltip-HMhPUFuF.js";import{p as l}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DUSJViu-.js";import"./axisSelectors-276H6COd.js";import"./Layer--_yZLHYD.js";import"./Text-BktKgt0G.js";import"./DOMUtils-CXrXcMzN.js";import"./chartDataContext-BdGyYEQ1.js";import"./RechartsWrapper-CZfXu9Bm.js";import"./hooks-sNKmgtMM.js";import"./zIndexSlice-DJ_SqHH-.js";import"./PolarUtils-Dps0SkyA.js";import"./CartesianChart-Cd_D9K81.js";import"./CategoricalChart-DtaGr5KL.js";import"./ReactUtils-BiGt9Rwl.js";import"./Label-Dmvkas3w.js";import"./ZIndexLayer-CUBtDPQX.js";import"./ActivePoints-BghVk57_.js";import"./Dot-C5hzWh_I.js";import"./types-DJ8_iZaM.js";import"./RegisterGraphicalItemId-Dydu6q-y.js";import"./ErrorBarContext-BXYRXGCk.js";import"./GraphicalItemClipPath-Ct9ZNJk2.js";import"./SetGraphicalItem-4DzlkcSy.js";import"./useAnimationId-P64LV0gd.js";import"./getRadiusAndStrokeWidthFromDot-C1YLbI6G.js";import"./ActiveShapeUtils-D_-w_v2b.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNNRRaL-.js";import"./Trapezoid-BPu8z8Hk.js";import"./Sector-CkVMFxgw.js";import"./Symbols-CdOOLS_O.js";import"./Curve-DwXIRY2H.js";import"./index-BwQRywFC.js";import"./ChartSizeDimensions-C1G0XugS.js";import"./OffsetShower-vnVO-R-R.js";import"./PlotAreaShower-8nMbOvlD.js";import"./CartesianAxis-4WuYgukg.js";import"./useElementOffset-DjRuwiqo.js";import"./iteratee-BWz_WTT_.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-Y984nfbX.js";const _e={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
