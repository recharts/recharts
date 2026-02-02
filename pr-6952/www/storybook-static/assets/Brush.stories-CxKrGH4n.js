import{r as v,e}from"./iframe-Ct3-EmvQ.js";import{B as i}from"./Brush-CNWwm9Om.js";import{R}from"./arrayEqualityCheck-6IWQNVnF.js";import{C as p}from"./ComposedChart-Do--VPQP.js";import{L as t}from"./Line-BFQpRJy0.js";import{R as c}from"./RechartsHookInspector-CNP9TKyO.js";import{X as S}from"./XAxis-BUqB6c6n.js";import{Y as A}from"./YAxis-FGYgR9Es.js";import{C as m}from"./CartesianGrid-InnXGM-h.js";import{L as w}from"./Legend-C8SZv2ZQ.js";import{R as d}from"./ReferenceLine-BI7kcx_I.js";import{L as B}from"./LineChart-DBIczZSa.js";import{T as N}from"./Tooltip-D9XcQfCI.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CLCYDClS.js";import"./axisSelectors-CMJXMyjC.js";import"./Layer-B8MEBogB.js";import"./Text-x40PBIRp.js";import"./DOMUtils-BkPW2gQA.js";import"./chartDataContext-mVWnipwc.js";import"./RechartsWrapper-CgmBIBCZ.js";import"./hooks-PlM3qON0.js";import"./zIndexSlice-DuEz9NCx.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DTOqEhzT.js";import"./CategoricalChart-DnvqP6Kl.js";import"./ReactUtils-DN8_9Eno.js";import"./Label-DHx5gLtP.js";import"./ZIndexLayer-BPGi17AG.js";import"./ActivePoints-BWNwZRYi.js";import"./Dot-CFdq7_VN.js";import"./types-_oa_IGij.js";import"./RegisterGraphicalItemId-XVqhZVps.js";import"./ErrorBarContext-DASfBuRX.js";import"./GraphicalItemClipPath-m8qPdP4H.js";import"./SetGraphicalItem-DB0AUuOj.js";import"./useAnimationId-BJitn0wZ.js";import"./getRadiusAndStrokeWidthFromDot-CQkE4Z1f.js";import"./ActiveShapeUtils-BFvFZr_D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOfd_qYz.js";import"./Trapezoid-DB54BMON.js";import"./Sector-C0TYwl3N.js";import"./Symbols-Bp94E4fO.js";import"./Curve-C_yJ7Ryc.js";import"./index-CtF0TcD5.js";import"./ChartSizeDimensions-DR7HU7h8.js";import"./OffsetShower-DsW7pfd1.js";import"./PlotAreaShower-CVlOaRsI.js";import"./CartesianAxis-C_XdVR0m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DDHtWwWX.js";import"./iteratee-BdHcd1Ka.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-Di4ryU7U.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
