import{r as g,R as e}from"./iframe-COvR6m4y.js";import{B as i}from"./Brush-XZUTbwcE.js";import{R as B}from"./zIndexSlice-ou7P1k4B.js";import{C as p}from"./ComposedChart-Dhs-HtCT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-A2N_Jj9W.js";import{L as D}from"./LineChart-CkFIiRMm.js";import{R as m}from"./ReferenceLine-B0uQSXOa.js";import{C as d}from"./CartesianGrid-Cy9ZO17O.js";import{X as S}from"./XAxis-Dko6EwLt.js";import{Y as A}from"./YAxis-BmBZe_s0.js";import{L as R}from"./Legend-C2zR3K4b.js";import{T as w}from"./Tooltip-Bs0TNcBq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-BxScpKop.js";import"./resolveDefaultProps-Bslp9ftf.js";import"./Text-CVNPXLFS.js";import"./DOMUtils-CI2tOPO2.js";import"./isWellBehavedNumber-BMFlPjoz.js";import"./chartDataContext-BtNlXKIo.js";import"./RechartsWrapper-S2j0RMDF.js";import"./index-DaYFSMwi.js";import"./index-BTT3eJrw.js";import"./index-C-vvr8x7.js";import"./index-FWviPRnN.js";import"./throttle-CwSdkZJ2.js";import"./renderedTicksSlice-BCt_pLiN.js";import"./axisSelectors-CgZaOuWk.js";import"./d3-scale-BKhMit0q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3NTwVXz.js";import"./CategoricalChart-dbTixxWK.js";import"./Curve-C1YATuiv.js";import"./types-C40QwNfk.js";import"./step-CeMcQkHX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DVdwO1UF.js";import"./Label-DL7W3oea.js";import"./ZIndexLayer-fZm6clI3.js";import"./useAnimationId-Cb3gVBxS.js";import"./ActivePoints-BCa4N9Pu.js";import"./Dot-COu3_HTT.js";import"./RegisterGraphicalItemId-DqoHzEMf.js";import"./ErrorBarContext-SLrJh98L.js";import"./GraphicalItemClipPath-BFgUMlnl.js";import"./SetGraphicalItem-CQMRhEff.js";import"./graphicalItemIdentity-KbS-c8wy.js";import"./ActiveShapeUtils-crCTkC1S.js";import"./RechartsThemeContext-bMPPd1I7.js";import"./CartesianAxis-BfSFkfBG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-CMI7uChg.js";import"./symbol-C_Kkl2c9.js";import"./useElementOffset-CzVnQFDP.js";import"./uniqBy-Cwho9xkh.js";import"./iteratee-C7AvrAG1.js";import"./Cross-DD1n0aFu.js";import"./Rectangle-DqY-vkpx.js";import"./util-Dxo8gN5i.js";import"./Sector-BGs4NfRJ.js";const Ye={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Fe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Fe as __namedExportsOrder,Ye as default};
