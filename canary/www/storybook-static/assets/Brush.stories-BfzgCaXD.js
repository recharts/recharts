import{r as g,R as e}from"./iframe-DHvlXZZp.js";import{B as i}from"./Brush-B4hVvJr0.js";import{R as B}from"./zIndexSlice-D7_5YQCx.js";import{C as p}from"./ComposedChart-C7ZUQvNE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DYyHO80i.js";import{L as D}from"./LineChart-DJFnKyaG.js";import{R as m}from"./ReferenceLine-CZU6sCzz.js";import{C as d}from"./CartesianGrid-ClkzgT-p.js";import{X as S}from"./XAxis-C0xAN7Vm.js";import{Y as A}from"./YAxis-DYTJhxlv.js";import{L as R}from"./Legend-DfYfxjVN.js";import{T as w}from"./Tooltip-B5NiwQTr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-BW5xomOj.js";import"./resolveDefaultProps-DAXfWdSl.js";import"./Text-D-2er-qS.js";import"./DOMUtils-CXaSfF0Q.js";import"./isWellBehavedNumber-D3uQHhq6.js";import"./chartDataContext-kJZSLmpd.js";import"./RechartsWrapper-CaVHAbWI.js";import"./index-CDvSCu-7.js";import"./index-B_pekVWz.js";import"./index-rrh18h4R.js";import"./index-DGFoeBTW.js";import"./throttle-Bg-VcpoN.js";import"./renderedTicksSlice-C2TzwS0g.js";import"./axisSelectors-lbKqd9aP.js";import"./d3-scale-Cey7ctPf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DFvBiy9D.js";import"./CategoricalChart-sk98qpS9.js";import"./Curve-Bc6Wc-5h.js";import"./types-CRJA0nge.js";import"./step-B2khkJJz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BVZCnb1h.js";import"./Label-TKCFRexK.js";import"./ZIndexLayer-D7_As1-8.js";import"./useAnimationId-uiW7aOrL.js";import"./ActivePoints-oifiU6yf.js";import"./Dot-Btw86tRD.js";import"./RegisterGraphicalItemId-DWC6_slS.js";import"./ErrorBarContext-BK2fwAvo.js";import"./GraphicalItemClipPath-b_iqRJZZ.js";import"./SetGraphicalItem-D2M9GsyT.js";import"./getRadiusAndStrokeWidthFromDot-B-WHlf9E.js";import"./ActiveShapeUtils-CUQXZ3i4.js";import"./RechartsThemeContext-BqfUunGe.js";import"./CartesianAxis-DdKNIbtf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-vArPBIj6.js";import"./symbol-CMZuJUeF.js";import"./useElementOffset-DWKaUxb_.js";import"./uniqBy-B1Poqyga.js";import"./iteratee-CZdVePke.js";import"./Cross-BBJ1Kyk2.js";import"./Rectangle-DPmaYH73.js";import"./util-Dxo8gN5i.js";import"./Sector-C_z4Y56l.js";const Ye={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Fe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Fe as __namedExportsOrder,Ye as default};
