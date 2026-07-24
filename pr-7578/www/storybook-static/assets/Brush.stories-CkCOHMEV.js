import{r as g,R as e}from"./iframe-Dz-8xobX.js";import{B as i}from"./Brush-CDsJlElC.js";import{R as B}from"./zIndexSlice-DLGpG8sy.js";import{C as p}from"./ComposedChart-gmjevVFY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-B2VZCiKC.js";import{L as D}from"./LineChart-BnOu3hZ1.js";import{R as m}from"./ReferenceLine-D0yKe3Rr.js";import{C as d}from"./CartesianGrid-CtOV40V3.js";import{X as S}from"./XAxis-DMj3Kvex.js";import{Y as A}from"./YAxis-BHn5bCj9.js";import{L as R}from"./Legend-D-2DjTxY.js";import{T as w}from"./Tooltip-JL5ofiGR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-DM8xvsTO.js";import"./resolveDefaultProps-jtUUwvO_.js";import"./Text-CvUE7W_7.js";import"./DOMUtils-9gmha4le.js";import"./isWellBehavedNumber-C60qZ5Lu.js";import"./chartDataContext-DFkhy0VZ.js";import"./RechartsWrapper-BxZxX3d-.js";import"./index-D51_thAx.js";import"./index-nwbz6jJ6.js";import"./index-DwxVslcQ.js";import"./index-50xdzldc.js";import"./throttle-BhiZXvYf.js";import"./renderedTicksSlice-CUvwyxyl.js";import"./axisSelectors-RA5EatZ8.js";import"./d3-scale-Eu5vW6Yz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CXDvShYZ.js";import"./CategoricalChart-Dl3rCbrV.js";import"./Curve-C_Qt5Biu.js";import"./types-B2b4Ay33.js";import"./step-B3JVaVSK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C8QaJVru.js";import"./Label-CUth2UOL.js";import"./ZIndexLayer-BepkwV1X.js";import"./useAnimationId-DHQotoBY.js";import"./ActivePoints-nN-9PNcc.js";import"./Dot-HydkS6Pw.js";import"./RegisterGraphicalItemId-CqDct8KX.js";import"./ErrorBarContext-CHoqNUZJ.js";import"./GraphicalItemClipPath-DMz5gKke.js";import"./SetGraphicalItem-1qJXA-7o.js";import"./getRadiusAndStrokeWidthFromDot-j5D6edh7.js";import"./ActiveShapeUtils-C_pP3GP_.js";import"./CartesianAxis-BSXwVKyu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BD06pTHM.js";import"./symbol-mTWSg8U_.js";import"./useElementOffset-BzS3hzef.js";import"./uniqBy-C0Bh4kGh.js";import"./iteratee-DFjnW7Yu.js";import"./Cross-CWvhF5sg.js";import"./Rectangle-BjULrVDC.js";import"./util-Dxo8gN5i.js";import"./Sector-BB_eiEE_.js";const Xe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Ye=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Ye as __namedExportsOrder,Xe as default};
