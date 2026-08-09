import{r as g,R as e}from"./iframe-CXzAxIFn.js";import{B as i}from"./Brush-BjXBWhE0.js";import{R as B}from"./zIndexSlice-DKHp-gjy.js";import{C as p}from"./ComposedChart-Dp1v7Rwh.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-8hDx2QW5.js";import{L as D}from"./LineChart-njR7sIK2.js";import{R as m}from"./ReferenceLine-Cc9cwes6.js";import{C as d}from"./CartesianGrid-B22KpBM2.js";import{X as S}from"./XAxis-CskEzE-5.js";import{Y as A}from"./YAxis-wlQFPYGV.js";import{L as R}from"./Legend-B0xzYbYL.js";import{T as w}from"./Tooltip-qGf575g5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-ypGDY04h.js";import"./resolveDefaultProps-JH3hFqB6.js";import"./Text-CpguaXBO.js";import"./DOMUtils-tMvYpyJu.js";import"./isWellBehavedNumber-De_HX__8.js";import"./chartDataContext-DY-mZyCM.js";import"./axisSelectors-BUJigeZt.js";import"./throttle-BEsGyRMh.js";import"./index-D8seYp4q.js";import"./index-CTRG8-wP.js";import"./d3-scale-BDPPBhC0.js";import"./RechartsWrapper-CktPaUvK.js";import"./index-ZTBFmJUb.js";import"./index-Bt5TuINX.js";import"./renderedTicksSlice-CEhRwZ6b.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-8S5--7wV.js";import"./CategoricalChart-CEtFLcT-.js";import"./Curve-sYpKNcK8.js";import"./types-BCNeIHLh.js";import"./step-DNi3GMvN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DRjz3iml.js";import"./Label-BVxyVS7u.js";import"./ZIndexLayer-1UiKp4gF.js";import"./useAnimationId-BbyN3hun.js";import"./ActivePoints-BYqyQqlG.js";import"./Dot-B4u9F4mm.js";import"./RegisterGraphicalItemId-CeJgXyMl.js";import"./ErrorBarContext-xfWRS9uR.js";import"./graphicalItemIdentity-D7fkuVDS.js";import"./SetGraphicalItem-CTeY4uJY.js";import"./getRadiusAndStrokeWidthFromDot-w3Si_Ccg.js";import"./ActiveShapeUtils-CfdhJDcC.js";import"./RechartsThemeContext-CpUwpPC6.js";import"./CartesianAxis-DNVNHP1o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-M_D3JkXn.js";import"./symbol-BPpS_VN0.js";import"./useElementOffset-Cj8IkOFp.js";import"./uniqBy-Bi1ukr1C.js";import"./iteratee-zjhPqw6K.js";import"./Cross-DBG8i-4N.js";import"./Rectangle-CIymDIR1.js";import"./util-Dxo8gN5i.js";import"./Sector-vqU42HK2.js";const Ye={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
