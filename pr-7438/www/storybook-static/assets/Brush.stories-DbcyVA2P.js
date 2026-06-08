import{r as g,R as e}from"./iframe-DWmnh-44.js";import{B as i}from"./Brush-BNJeVHID.js";import{R as B}from"./zIndexSlice-BJoYTr5_.js";import{C as p}from"./ComposedChart-W6hZFmz1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-Ch-syxC5.js";import{L as D}from"./LineChart-p1WlGCjT.js";import{R as m}from"./ReferenceLine-Dpj7Fpeq.js";import{C as d}from"./CartesianGrid-CmSO2f9C.js";import{X as S}from"./XAxis-B-oD2iVw.js";import{Y as A}from"./YAxis-D314iiH8.js";import{L as R}from"./Legend-zk7mFkZN.js";import{T as w}from"./Tooltip-lXADDqEF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BnHecJzQ.js";import"./d3-scale-Cf8jgknj.js";import"./immer-DUM2qh_d.js";import"./index-DOTsKUtA.js";import"./index-BHMOAiDy.js";import"./string-B6fdYHAA.js";import"./Layer-BzPfvU9G.js";import"./resolveDefaultProps-CaNslZFW.js";import"./Text-DgygHz8M.js";import"./DOMUtils-DIpMDOYS.js";import"./isWellBehavedNumber-fLv0mpTe.js";import"./chartDataContext-CAO4RomS.js";import"./RechartsWrapper-B3xTPXxL.js";import"./index-DVoRxuxV.js";import"./index-DYZmblhi.js";import"./renderedTicksSlice-DsxFAPWV.js";import"./axisSelectors-BiiECraK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CARUth8A.js";import"./CategoricalChart-BUEeThvR.js";import"./Curve-CBAt1y_u.js";import"./types-DcmHsPIr.js";import"./step-5LUllGte.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-iAWyiB5L.js";import"./Label-CfXLQ6Y8.js";import"./ZIndexLayer-CulQyNMA.js";import"./useAnimationId-DCTLXFxw.js";import"./ActivePoints-f79orvlu.js";import"./Dot-D6jfHQrF.js";import"./RegisterGraphicalItemId-Csp35HCn.js";import"./ErrorBarContext-DgP57VIM.js";import"./GraphicalItemClipPath-DtyJ7p0b.js";import"./SetGraphicalItem-DG3J4b0-.js";import"./getRadiusAndStrokeWidthFromDot-CP94W2K8.js";import"./ActiveShapeUtils-CAu9mK3S.js";import"./CartesianAxis-B7Vv6p_O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BuFvxkxA.js";import"./symbol-BmX3teUd.js";import"./useElementOffset-DPmIpr9N.js";import"./uniqBy-2U5GLGcS.js";import"./iteratee-CMRoo_5g.js";import"./Cross-BviN2Ees.js";import"./Rectangle-CiHKZkj8.js";import"./Sector-DBikrG1k.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
