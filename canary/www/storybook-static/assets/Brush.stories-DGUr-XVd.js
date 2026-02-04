import{r as v,e}from"./iframe-2vdihYaA.js";import{B as i}from"./Brush-DF17fSjz.js";import{R}from"./arrayEqualityCheck-Cz6bem1a.js";import{C as p}from"./ComposedChart-owjmqR1m.js";import{L as t}from"./Line-C2YKaF46.js";import{R as c}from"./RechartsHookInspector-CqgE5Nv7.js";import{X as S}from"./XAxis-Dj-4Nnot.js";import{Y as A}from"./YAxis-DeIibkX2.js";import{C as m}from"./CartesianGrid-DZECSw9p.js";import{L as w}from"./Legend-CFipEMHM.js";import{R as d}from"./ReferenceLine-CnEU3w83.js";import{L as B}from"./LineChart-v6qtfcoE.js";import{T as N}from"./Tooltip-BAqCLzZ_.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BMo1MjoM.js";import"./axisSelectors-B6I2jDAj.js";import"./Layer-BY-fsyoM.js";import"./Text-B79Sux8Q.js";import"./DOMUtils-CHIYEZ9y.js";import"./chartDataContext-DF08vkso.js";import"./RechartsWrapper-BKqPTBXa.js";import"./hooks-DRq4Dknc.js";import"./zIndexSlice-_CZsqZq4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CgDezk2P.js";import"./CategoricalChart-CTkRrNay.js";import"./ReactUtils-YY1V_Sy8.js";import"./Label-DyVMIxDt.js";import"./ZIndexLayer-BhK_pYZk.js";import"./ActivePoints-BSNIUG_f.js";import"./Dot-CgptiLQj.js";import"./types-BVLdKdSl.js";import"./RegisterGraphicalItemId-BxLSDVx1.js";import"./ErrorBarContext-CWPUp6By.js";import"./GraphicalItemClipPath-ZZzgSpw_.js";import"./SetGraphicalItem-B1yLHWtu.js";import"./useAnimationId-C00yQmDC.js";import"./getRadiusAndStrokeWidthFromDot-Ryy3WNXf.js";import"./ActiveShapeUtils-BzwzNQ6E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-LulPmG5i.js";import"./Trapezoid-Csj6mQp9.js";import"./Sector-BfatqE6A.js";import"./Symbols-DySEQhPv.js";import"./Curve-CO1p58ib.js";import"./index-DIOAgVA6.js";import"./ChartSizeDimensions-C8811dw0.js";import"./OffsetShower-ePUr3CkU.js";import"./PlotAreaShower-D0LZ_i9v.js";import"./CartesianAxis-BzbcZQiG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CC3Rdwqu.js";import"./iteratee-BCiuY1w8.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-NDx5yO40.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
