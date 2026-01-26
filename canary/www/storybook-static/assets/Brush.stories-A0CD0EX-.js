import{r as v,e}from"./iframe-BfI_ST9A.js";import{B as i}from"./Brush-yBNsmaur.js";import{R}from"./arrayEqualityCheck-Dpn6Yh1q.js";import{C as p}from"./ComposedChart-C5RXmCa-.js";import{L as t}from"./Line-DGppnglh.js";import{R as c}from"./RechartsHookInspector-CVEQV9do.js";import{X as S}from"./XAxis-BmtgQOLB.js";import{Y as A}from"./YAxis-DTgMZjXd.js";import{C as m}from"./CartesianGrid-B6zMTXDB.js";import{L as w}from"./Legend-DSv1DviZ.js";import{R as d}from"./ReferenceLine-y3VZHedF.js";import{L as B}from"./LineChart-BknMg2tE.js";import{T as N}from"./Tooltip-oJHpgK_Y.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-AaslCT8i.js";import"./axisSelectors-DDmdM9p6.js";import"./Layer-Y7LjbTmX.js";import"./Text-rhuK2TCR.js";import"./DOMUtils-bXouPdN4.js";import"./chartDataContext-CeBJp2Px.js";import"./RechartsWrapper-B_X6-_SZ.js";import"./hooks-DvK6IaUs.js";import"./zIndexSlice-DXwF7pA6.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DXCnOxpF.js";import"./CategoricalChart-DD3vhlwU.js";import"./ReactUtils-DCNpXtNn.js";import"./Label-bNYHk-eM.js";import"./ZIndexLayer-BqmPWyE4.js";import"./ActivePoints-2nVhg-uB.js";import"./Dot-4aiHSk1j.js";import"./types-C63RoX8s.js";import"./RegisterGraphicalItemId-B5NRYeBm.js";import"./ErrorBarContext-Dkb4HGWS.js";import"./GraphicalItemClipPath-Dc-fHHFr.js";import"./SetGraphicalItem-CI8DucV2.js";import"./useAnimationId-COKmXqbi.js";import"./getRadiusAndStrokeWidthFromDot-gYu2i8Au.js";import"./ActiveShapeUtils-DHutry9j.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ClKhcP1j.js";import"./Trapezoid-BD9djYD6.js";import"./Sector-65rnMIz8.js";import"./Symbols-BZnP9syB.js";import"./Curve-CQI60C70.js";import"./index-ChuKY9XN.js";import"./ChartSizeDimensions-BiyrgYor.js";import"./OffsetShower-SG_pY0kd.js";import"./PlotAreaShower-DWEL4ESW.js";import"./CartesianAxis-DmSsZovB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-B9zSC1oG.js";import"./iteratee-BtHt7oJb.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-DgvRjqnG.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
