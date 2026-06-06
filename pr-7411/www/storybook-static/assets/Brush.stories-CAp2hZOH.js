import{r as g,R as e}from"./iframe-BUJOmzqi.js";import{B as i}from"./Brush-Dk1I-TED.js";import{R as B}from"./zIndexSlice-BsaVfiwf.js";import{C as p}from"./ComposedChart-D5MlcB5U.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-jXTM5sU4.js";import{L as D}from"./LineChart-DZ6a9W2o.js";import{R as m}from"./ReferenceLine-CekS4EeS.js";import{C as d}from"./CartesianGrid-D8_jIbBo.js";import{X as S}from"./XAxis-DaOKHhNP.js";import{Y as A}from"./YAxis-DKbaQ5d8.js";import{L as R}from"./Legend-Cy2Ofah6.js";import{T as w}from"./Tooltip-CBmxLb_T.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BL4oPmOH.js";import"./d3-scale-DS8AhCL8.js";import"./immer-DH0vdgZo.js";import"./index-Z5G1v5br.js";import"./index-JbQrqUHI.js";import"./string-B6fdYHAA.js";import"./Layer-DAIr4ncG.js";import"./resolveDefaultProps-hlzoE81R.js";import"./Text-KTF0LXVS.js";import"./DOMUtils-DD35gjWu.js";import"./isWellBehavedNumber-PVSksaHl.js";import"./chartDataContext-BLLyTvAK.js";import"./RechartsWrapper-DKJe8hzM.js";import"./index-BFCbJ3zw.js";import"./index-Ba2rQUwD.js";import"./renderedTicksSlice-CvbHS7R-.js";import"./axisSelectors-BsZbVas6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CwVYswgd.js";import"./CategoricalChart--vXw4uUZ.js";import"./Curve-DuctlboJ.js";import"./types-BzrTCe99.js";import"./step-C_dZFxdF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-JOMjWh90.js";import"./Label-BNcqFpiL.js";import"./ZIndexLayer-DYX-KLdv.js";import"./useAnimationId-BY-iJyWy.js";import"./ActivePoints-CMM7Mo_4.js";import"./Dot-DN1GlAfe.js";import"./RegisterGraphicalItemId-BRRIJdHI.js";import"./ErrorBarContext-DA6daDg9.js";import"./GraphicalItemClipPath-CGh6UnOu.js";import"./SetGraphicalItem-7EGMhuIl.js";import"./getRadiusAndStrokeWidthFromDot-DkvFWbU0.js";import"./ActiveShapeUtils-ySv4_Jt-.js";import"./CartesianAxis-Bv_4t9YA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BhutvzPD.js";import"./symbol-3aTO9bbP.js";import"./useElementOffset-BhRUWmtD.js";import"./uniqBy-D07a0IUx.js";import"./iteratee-3mUZv5fI.js";import"./Cross-L5pcMqA6.js";import"./Rectangle-D2JiSHo9.js";import"./Sector-CYWbhre4.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Xe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Xe as __namedExportsOrder,Ge as default};
