import{r as g,R as e}from"./iframe-Dsugo_zg.js";import{B as i}from"./Brush-WOpbLGSV.js";import{R as B}from"./zIndexSlice-CQ8Dq6Rw.js";import{C as p}from"./ComposedChart-Clv-J78V.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-Ng1r7DkL.js";import{L as D}from"./LineChart-BILblmZW.js";import{R as m}from"./ReferenceLine-oCL0ilMP.js";import{C as d}from"./CartesianGrid-ZCTVKiig.js";import{X as S}from"./XAxis-BtWHE8Ii.js";import{Y as A}from"./YAxis-BOEdL1M7.js";import{L as R}from"./Legend-BsJaqzMT.js";import{T as w}from"./Tooltip-D4JKW0Gd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-B4-DsMlp.js";import"./d3-scale-C9TIKeBC.js";import"./immer-Dn_ZGj_2.js";import"./index-hfwoyc40.js";import"./index-BltQKr7J.js";import"./string-B6fdYHAA.js";import"./Layer-PDKsNXXB.js";import"./resolveDefaultProps-ByiopbeA.js";import"./Text-BrgPWmaV.js";import"./DOMUtils-Bp38L-kM.js";import"./isWellBehavedNumber-BXhYPRs7.js";import"./chartDataContext-D_whFwD4.js";import"./RechartsWrapper-D3mVticM.js";import"./index-B1HEKGfm.js";import"./index-B6DCYcPU.js";import"./renderedTicksSlice-CsDLwy59.js";import"./axisSelectors-DuSkawJ1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-UK3tQwAh.js";import"./CategoricalChart-FdwMdvH0.js";import"./Curve-ZHf_GWFM.js";import"./types-BdpIxXW8.js";import"./step-BaYniHaQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BcVxVlvs.js";import"./Label-Dv0ON-tn.js";import"./ZIndexLayer-CosUoOTg.js";import"./useAnimationId-BEJfwvjz.js";import"./ActivePoints-B-oBY2kZ.js";import"./Dot-zHN_KyIs.js";import"./RegisterGraphicalItemId-VkMnq2n0.js";import"./ErrorBarContext-BTy60tqZ.js";import"./GraphicalItemClipPath-DVeVc-Gk.js";import"./SetGraphicalItem-CiVD-7Sz.js";import"./getRadiusAndStrokeWidthFromDot-BuDs2Yv2.js";import"./ActiveShapeUtils-DQiBB_Ml.js";import"./CartesianAxis-1FBfSHCk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BHPShsT2.js";import"./symbol-4UK5LcDA.js";import"./useElementOffset-Ckhk56wk.js";import"./uniqBy-BVaAsoy2.js";import"./iteratee-BfnyOwZq.js";import"./Cross-BWkIDfq-.js";import"./Rectangle-6j2cXDPI.js";import"./Sector-ByCcrvia.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
