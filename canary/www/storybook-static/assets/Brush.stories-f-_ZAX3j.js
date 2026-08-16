import{r as g,R as e}from"./iframe-GNxtioUR.js";import{B as i}from"./Brush--paE2Xiz.js";import{R as B}from"./zIndexSlice-D4haQxNn.js";import{C as p}from"./ComposedChart-Dx410X4q.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-AV39YYrF.js";import{L as D}from"./LineChart-D_mJyKWS.js";import{R as m}from"./ReferenceLine-DvPyYLgm.js";import{C as d}from"./CartesianGrid-Wlk7YG0e.js";import{X as S}from"./XAxis-5j17aH8X.js";import{Y as A}from"./YAxis-CbYUO1fa.js";import{L as R}from"./Legend-DfblxIhj.js";import{T as w}from"./Tooltip-Di5rr9qC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-DR6S9zl-.js";import"./resolveDefaultProps-D5DCSoJx.js";import"./Text-C79V-s10.js";import"./DOMUtils-UzZI-9_5.js";import"./isWellBehavedNumber-B1loF3DE.js";import"./RechartsThemeContext-BZnANilh.js";import"./chartDataContext-DEGQ_Aoe.js";import"./axisSelectors-CsnJkuOW.js";import"./throttle-Du4Eduzv.js";import"./index-CN1r47eQ.js";import"./index-DT7OqoJJ.js";import"./d3-scale-CsslalFd.js";import"./RechartsWrapper-5Lqdjjzz.js";import"./index-CV7IGYk1.js";import"./index-BJVo2ffI.js";import"./renderedTicksSlice-BNEcUsku.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B0x1kr2K.js";import"./CategoricalChart-m_Ids5fk.js";import"./Curve-DKHt29i6.js";import"./types-omsl4D4O.js";import"./step-b1TCH5-c.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ct2IhasV.js";import"./Label-C7cFT6-M.js";import"./ZIndexLayer-D7CqA8Uv.js";import"./useAnimationId-B4U03xNw.js";import"./ActivePoints-qyzQPqTK.js";import"./Dot-BaVZ6R7S.js";import"./RegisterGraphicalItemId-BVyZPmQY.js";import"./ErrorBarContext-DSsXqNs7.js";import"./GraphicalItemClipPath-BK71gx_X.js";import"./SetGraphicalItem-vjMpKlni.js";import"./getRadiusAndStrokeWidthFromDot-DMvsMn3-.js";import"./ActiveShapeUtils-McNEEg_Y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-NbOP1W-o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-C7tvQ4Yw.js";import"./symbol-DxTZmGTB.js";import"./useElementOffset-nHeneq3D.js";import"./uniqBy-zsY9CiPb.js";import"./iteratee-C5pGeNoI.js";import"./Cross-afqebICI.js";import"./Rectangle-D_z4MU1Y.js";import"./util-Dxo8gN5i.js";import"./Sector-Bj0ATzCd.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const je=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,je as __namedExportsOrder,Fe as default};
