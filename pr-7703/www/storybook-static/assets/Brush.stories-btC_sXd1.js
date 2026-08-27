import{r as g,R as e}from"./iframe-COd9kUku.js";import{B as s}from"./Brush-DrdQJHSC.js";import{R as B}from"./zIndexSlice-BfP4v1bS.js";import{C as p}from"./ComposedChart-Vvr56aGu.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-C6DX3tAD.js";import{L as D}from"./LineChart-Byja3Lpo.js";import{R as m}from"./ReferenceLine-CUUDdGB8.js";import{C as d}from"./CartesianGrid-CgOmeVcK.js";import{X as S}from"./XAxis-B5YW1-Pp.js";import{Y as A}from"./YAxis-Bz97xI6z.js";import{L as R}from"./Legend-jz1-VpGi.js";import{T as w}from"./Tooltip-Bu7JKedA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-riiSoJFM.js";import"./resolveDefaultProps-D_OJMKIx.js";import"./Text-osvpinWz.js";import"./DOMUtils-csxZCivv.js";import"./isWellBehavedNumber-Bypxk17g.js";import"./useId-Cuf_ayBp.js";import"./useBackwardsCompatibleTheme-B805O1fX.js";import"./chartDataContext-D64HN0cL.js";import"./axisSelectors-i296AGH9.js";import"./throttle-5ro8HE4Y.js";import"./index-COL2WR0f.js";import"./index-BSevdux3.js";import"./d3-scale-uQ_gA658.js";import"./RechartsWrapper-CqMN8AUr.js";import"./index-BJ9jwzw4.js";import"./index-5Vml1b2p.js";import"./renderedTicksSlice-CZAtvUE5.js";import"./index-RUiFmAll.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DI_xXxUF.js";import"./CategoricalChart-Cy8ngVMI.js";import"./Curve-C2nwlVhI.js";import"./types-5NhdCA1W.js";import"./step-C5ZSArS6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-RKe26m0b.js";import"./Label-BfhUPh9D.js";import"./ZIndexLayer-06cimeo-.js";import"./useAnimationId-xpwU92YM.js";import"./ActivePoints-ZUmLEJxd.js";import"./Dot-DFTXaHC9.js";import"./RegisterGraphicalItemId-rqUDDANA.js";import"./ErrorBarContext-U_BzfmOa.js";import"./GraphicalItemClipPath-DjJkXpBH.js";import"./SetGraphicalItem-Cdo5fsgn.js";import"./getRadiusAndStrokeWidthFromDot-BduJCXYw.js";import"./ActiveShapeUtils-vcId9Asm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DNJooG1E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-Bbok-PlM.js";import"./symbol-C6vTYQ3L.js";import"./useElementOffset-BI-YLrcT.js";import"./uniqBy-C2H_mvdb.js";import"./iteratee-3XdrkIX1.js";import"./Cross-CfI6-sMz.js";import"./Rectangle-DzmCpk66.js";import"./util-Dxo8gN5i.js";import"./Sector-C6CA5_r9.js";const qe={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var L,b,K;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const He=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,i as NoChartBrush,o as PanoramicBrush,He as __namedExportsOrder,qe as default};
