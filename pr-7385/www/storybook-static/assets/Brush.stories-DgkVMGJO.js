import{P as g,c as e}from"./iframe-CmE1Gw1b.js";import{B as i}from"./Brush-CUbiBpZ2.js";import{g as B}from"./zIndexSlice-CPvazyt5.js";import{C as p}from"./ComposedChart-B0hkf2v7.js";import{p as c}from"./Page-DPte-9pC.js";import{L as t}from"./Line-iL4IvS3b.js";import{L as D}from"./LineChart-B4BqX6tl.js";import{R as m}from"./ReferenceLine-ClxZP5V9.js";import{C as d}from"./CartesianGrid-BqmKPhec.js";import{X as S}from"./XAxis-CsAE-1wy.js";import{Y as A}from"./YAxis-sLz07qff.js";import{L as P}from"./Legend-CLEzoxOZ.js";import{T as w}from"./Tooltip-_APSjxFC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Xs9eC5t9.js";import"./d3-scale-CvKKQLFm.js";import"./immer-D0ucvycs.js";import"./index-Cxu3QwYw.js";import"./index-BRRHmhT0.js";import"./Layer-abY4Fjir.js";import"./resolveDefaultProps-DMnLPor7.js";import"./Text-BQZJ76YD.js";import"./DOMUtils-omFfYIeV.js";import"./isWellBehavedNumber-iiy358B8.js";import"./chartDataContext-BRP4CbYg.js";import"./RechartsWrapper-D8R_Xy2B.js";import"./index-DBnd1KA6.js";import"./index-CVCvCqpB.js";import"./renderedTicksSlice-CPDsz2oQ.js";import"./axisSelectors-DB3YTJ5D.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CVLVFTZa.js";import"./CategoricalChart-dsp09r-Q.js";import"./Curve-DNUM0bVP.js";import"./types-DmTRT5mp.js";import"./step-CCTJ90gO.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BAXLe4Ge.js";import"./Label-Cvukc7WC.js";import"./ZIndexLayer-DHcHf456.js";import"./ActivePoints-BZYNmVQi.js";import"./Dot-mUoWRWq3.js";import"./RegisterGraphicalItemId-B-oWQNZS.js";import"./ErrorBarContext-BpCSl48G.js";import"./GraphicalItemClipPath-BhaC-7pi.js";import"./SetGraphicalItem-DE9GuFyM.js";import"./useAnimationId-D3nuvCaK.js";import"./getRadiusAndStrokeWidthFromDot-DrN6QQp7.js";import"./ActiveShapeUtils-C_GLb3KM.js";import"./CartesianAxis-CAtPdKeh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-B59YXWP_.js";import"./symbol-DzwPD8ez.js";import"./useElementOffset-D-LxG0BO.js";import"./uniqBy-BvaoGVQr.js";import"./iteratee-RsGkkcHy.js";import"./Cross-Cy-Vx90u.js";import"./Rectangle-DC373LRb.js";import"./Sector-CHt0xVVw.js";const ze={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(P,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Ge=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Ge as __namedExportsOrder,ze as default};
