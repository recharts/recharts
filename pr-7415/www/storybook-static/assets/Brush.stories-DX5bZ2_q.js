import{r as g,R as e}from"./iframe-dVDPDAoI.js";import{B as i}from"./Brush-DPZHGU3k.js";import{R as B}from"./zIndexSlice-Bsc_tgY7.js";import{C as p}from"./ComposedChart-BPNopFli.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-B5W3Glun.js";import{L as D}from"./LineChart-oxveeb0i.js";import{R as m}from"./ReferenceLine-BwneDfVt.js";import{C as d}from"./CartesianGrid-B8Z3ho_x.js";import{X as S}from"./XAxis-Ra2gX97C.js";import{Y as A}from"./YAxis-BD3X1oHR.js";import{L as R}from"./Legend-3MGBFl1G.js";import{T as w}from"./Tooltip-CVwsfvTx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-VpXFggwN.js";import"./d3-scale-Dow8MXGl.js";import"./immer-BdmkJOJr.js";import"./index-DKbSAh9L.js";import"./index-Dx5dPQRG.js";import"./string-B6fdYHAA.js";import"./Layer-M7jAw79j.js";import"./resolveDefaultProps-B9xmOxzf.js";import"./Text-Bi26GJyN.js";import"./DOMUtils-lc6v0qq-.js";import"./isWellBehavedNumber-CPNu7XeA.js";import"./chartDataContext-CZJe0GvZ.js";import"./RechartsWrapper-BD3vbn3c.js";import"./index-C_VdjUmv.js";import"./index-CnhhL7Zb.js";import"./renderedTicksSlice-DnkJLQvR.js";import"./axisSelectors-BILy-Fum.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-rEvqbiLD.js";import"./CategoricalChart-CZjUsR6e.js";import"./Curve-Bib8lOHe.js";import"./types-jcNKZDcp.js";import"./step-BD-4s5qs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BynH3EWp.js";import"./Label-BEOAhV_I.js";import"./ZIndexLayer-D86eoQTZ.js";import"./useAnimationId-DHcuBUhz.js";import"./ActivePoints-Dsf5E73K.js";import"./Dot-BoVNLJ4n.js";import"./RegisterGraphicalItemId-BTF8QJ8M.js";import"./ErrorBarContext-DM0DtMrb.js";import"./GraphicalItemClipPath-DL50SU1R.js";import"./SetGraphicalItem-BvRajfM7.js";import"./getRadiusAndStrokeWidthFromDot-Buc-JRMN.js";import"./ActiveShapeUtils-G5tYFgXR.js";import"./CartesianAxis-BOKYqx2U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-9RqDgmZB.js";import"./symbol-0rLe6Tht.js";import"./useElementOffset-TBdqj4Y3.js";import"./uniqBy-Bo_ObW1a.js";import"./iteratee-DdGg6bBx.js";import"./Cross-DzdClftC.js";import"./Rectangle-Cm-MJcqD.js";import"./Sector-C5lQsPUE.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
