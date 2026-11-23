import{r as g,R as e}from"./iframe-kLrggBpZ.js";import{B as i}from"./Brush-Dgv4enb5.js";import{R as B}from"./zIndexSlice-CKCGde2F.js";import{C as p}from"./ComposedChart-DaK4Bp3q.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-D-PTgy1R.js";import{L as D}from"./LineChart-Bs_-nMun.js";import{R as m}from"./ReferenceLine-1HsLCgx_.js";import{C as d}from"./CartesianGrid-6GpOa0-0.js";import{X as S}from"./XAxis-B-2vEHb0.js";import{Y as A}from"./YAxis-B5avTU_X.js";import{L as R}from"./Legend-pS2At-4X.js";import{T as w}from"./Tooltip-DMq8uqJi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-DQPijciL.js";import"./resolveDefaultProps-D_LYpz2f.js";import"./Text-DNntKRRw.js";import"./ZIndexLayer-CZ_FttOi.js";import"./index-Bv7OV-9Z.js";import"./index-C-cjgJnd.js";import"./chartDataContext-DDJgrWCU.js";import"./axisSelectors-D6wM5g8f.js";import"./throttle-BkTfx27C.js";import"./polarAxisSelectors-Dxnj4FFJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DE-4LfFJ.js";import"./RechartsWrapper-DVOP9mMm.js";import"./index-iHP1RapJ.js";import"./index-B46QsuJB.js";import"./renderedTicksSlice-DgOqiypa.js";import"./index-DVOdnQdm.js";import"./fillDefinitions-CMyVvOcV.js";import"./CartesianChart-DP_q0vfs.js";import"./CategoricalChart-CZkForA1.js";import"./getRadiusAndStrokeWidthFromDot-D72Rn_78.js";import"./Curve-CYSM8Ubv.js";import"./types-jTiWDmD0.js";import"./step-Be-YYOOJ.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DxslDEhK.js";import"./Label-CpspZ4dp.js";import"./ActivePoints-B3OB9PGr.js";import"./Dot-D134Eke9.js";import"./activeStyles-BevLUsk4.js";import"./useAnimationId-CEVcGH0v.js";import"./Symbols-CW8iQe4i.js";import"./symbol-BFiK-Ghx.js";import"./ErrorBarContext-MaEtcn-S.js";import"./SetGraphicalItem-BJQeWc-6.js";import"./ActiveShapeUtils-BBiGMeQC.js";import"./useEffectiveDataKey-BIUvIyD8.js";import"./CartesianAxis-Dfi_5bxP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-BhEl9_49.js";import"./uniqBy-B-ByEpXp.js";import"./iteratee-B7qBUA2a.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DOurOaBQ.js";import"./Rectangle-f81kex-M.js";import"./util-Dxo8gN5i.js";import"./Sector-CSRJPYTa.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,je as __namedExportsOrder,Fe as default};
