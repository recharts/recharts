import{P as g,c as e}from"./iframe-Bw01G05S.js";import{B as i}from"./Brush-DIrAEy_3.js";import{g as B}from"./zIndexSlice-BVJPDscV.js";import{C as p}from"./ComposedChart-DiZxKxJ7.js";import{p as c}from"./Page-DPte-9pC.js";import{L as t}from"./Line-Z8smfELB.js";import{L as D}from"./LineChart-BVLtlazi.js";import{R as m}from"./ReferenceLine--OGF7Uck.js";import{C as d}from"./CartesianGrid-khQZXWx3.js";import{X as S}from"./XAxis-TrLbUf6y.js";import{Y as A}from"./YAxis-leBvxI0P.js";import{L as P}from"./Legend-BTXBFyzF.js";import{T as w}from"./Tooltip-CsILSo3O.js";import"./preload-helper-Dp1pzeXC.js";import"./get-PLF287kI.js";import"./d3-scale-C81Lq6p_.js";import"./immer-vKd3rXCH.js";import"./index-CpLIt3E_.js";import"./index-gPPvxt9l.js";import"./Layer-_mE6wvdm.js";import"./resolveDefaultProps-BX9yAQwT.js";import"./Text-qrCQLdvB.js";import"./DOMUtils-CB0xgJC5.js";import"./isWellBehavedNumber-BdaQsoH1.js";import"./chartDataContext-DTGe0ZBk.js";import"./RechartsWrapper-Dy3I_vud.js";import"./index-ChbgLzNl.js";import"./index-CnqP2OOu.js";import"./renderedTicksSlice-BSWqpX2F.js";import"./axisSelectors-CYrXIzpV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CmfxvnV2.js";import"./CategoricalChart-CJ_zmDdd.js";import"./Curve-CGu0Zh8a.js";import"./types-BkmoQN99.js";import"./step-Ci-i76rd.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CPtpn3OS.js";import"./Label-0YWOaiFB.js";import"./ZIndexLayer-CUHrFVWb.js";import"./ActivePoints-CLH-5Llk.js";import"./Dot-KFQGNzLM.js";import"./RegisterGraphicalItemId-C6zAsVLj.js";import"./ErrorBarContext-DD6wo7ll.js";import"./GraphicalItemClipPath-Cn2vbNRH.js";import"./SetGraphicalItem-CbgDA4Hu.js";import"./useAnimationId-DfklYMDy.js";import"./getRadiusAndStrokeWidthFromDot-B2Lc250a.js";import"./ActiveShapeUtils-ChrAkVLT.js";import"./CartesianAxis-D2bv38Ox.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-OmH1xCgA.js";import"./symbol-yiQ3AMIL.js";import"./useElementOffset-BJf-bgFc.js";import"./uniqBy-CJKAqM1m.js";import"./iteratee-CJNbtgLs.js";import"./Cross-8GydS8Lz.js";import"./Rectangle-BFTblrQi.js";import"./Sector-_FqA8Q5K.js";const ze={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(P,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
