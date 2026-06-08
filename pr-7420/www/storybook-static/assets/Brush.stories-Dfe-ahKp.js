import{r as g,R as e}from"./iframe-BGeanFOP.js";import{B as i}from"./Brush-DZcUS9mL.js";import{R as B}from"./zIndexSlice-DNSx6PWp.js";import{C as p}from"./ComposedChart-jKIfad3O.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DMiEAOHx.js";import{L as D}from"./LineChart-CgYgf-1f.js";import{R as m}from"./ReferenceLine-ffCgm2wu.js";import{C as d}from"./CartesianGrid-DIYWtD6j.js";import{X as S}from"./XAxis-DgRdCkIO.js";import{Y as A}from"./YAxis-nfM60xrE.js";import{L as R}from"./Legend-W3eeAJ18.js";import{T as w}from"./Tooltip-Cc5Cgkep.js";import"./preload-helper-Dp1pzeXC.js";import"./get-74Zc7Ouu.js";import"./d3-scale-DG6z6DUu.js";import"./immer-Ba__3GQM.js";import"./index-ywOkgYAE.js";import"./index-D4eYnHXo.js";import"./string-B6fdYHAA.js";import"./Layer-D0e6T1oI.js";import"./resolveDefaultProps-fa-Aou02.js";import"./Text-B_9O6xoI.js";import"./DOMUtils-CoWv9FZp.js";import"./isWellBehavedNumber-BHEyknYr.js";import"./chartDataContext-itTBInKu.js";import"./RechartsWrapper-CglI8KYy.js";import"./index-Be2A9QLd.js";import"./index-DMs8Ncya.js";import"./renderedTicksSlice-CZmWC0Pi.js";import"./axisSelectors-B9MbVKUE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Da0n2f02.js";import"./CategoricalChart-K-eTl3yz.js";import"./Curve-Db2zYE8-.js";import"./types-Uf272Grm.js";import"./step-DzzVSfhx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C1hTs3HP.js";import"./Label-CBWHmy26.js";import"./ZIndexLayer-gVlIv7an.js";import"./index-BPJnJB5S.js";import"./useAnimationId-Cqn1EcvY.js";import"./ActivePoints-iE89yCuz.js";import"./Dot-CWPUI1sE.js";import"./RegisterGraphicalItemId-DsxBoKW-.js";import"./ErrorBarContext-BGfqcTM-.js";import"./GraphicalItemClipPath-Rse-X5zx.js";import"./SetGraphicalItem-BEY5qE9v.js";import"./getRadiusAndStrokeWidthFromDot-D7EeDBWL.js";import"./ActiveShapeUtils-CNEGy-9v.js";import"./CartesianAxis-BCs8btUF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-D3KDRtFF.js";import"./symbol-DYZKPaAC.js";import"./useElementOffset-uPFxcMrP.js";import"./uniqBy-DSO5Q0bs.js";import"./iteratee-DXgvlm8k.js";import"./Cross-DLJoHQSf.js";import"./Rectangle-BfTmTDK0.js";import"./Sector-DEijCMgI.js";const Xe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
