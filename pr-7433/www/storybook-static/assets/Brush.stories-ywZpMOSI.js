import{r as g,R as e}from"./iframe-CT_on4dN.js";import{B as i}from"./Brush-CwuLgbPf.js";import{R as B}from"./zIndexSlice-9YwY2T6T.js";import{C as p}from"./ComposedChart-CqZcgDJh.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DjA4uRiB.js";import{L as D}from"./LineChart-BpvUcBv_.js";import{R as m}from"./ReferenceLine-CgKlgQaH.js";import{C as d}from"./CartesianGrid-DEgNtFsT.js";import{X as S}from"./XAxis-DM4CuZe_.js";import{Y as A}from"./YAxis-C8PhcMfF.js";import{L as R}from"./Legend-CsXBchnl.js";import{T as w}from"./Tooltip-negrmm2w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DAlxn1Zj.js";import"./d3-scale-B0V457C8.js";import"./immer-MMHbxa5P.js";import"./index-gBOeA-qD.js";import"./index-DQkieKcs.js";import"./string-B6fdYHAA.js";import"./Layer-BDukNzPA.js";import"./resolveDefaultProps-Ngbi67w9.js";import"./Text-CMIOZbxn.js";import"./DOMUtils-CLh3lutj.js";import"./isWellBehavedNumber-DcXfDBUW.js";import"./chartDataContext-BNQnQ5VT.js";import"./RechartsWrapper-C-4qOiYS.js";import"./index-B37YLZmy.js";import"./index-BLrAz-7b.js";import"./renderedTicksSlice-Bp1Fmq8H.js";import"./axisSelectors-CiriuU2L.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPDAsd82.js";import"./CategoricalChart-BJTL86x_.js";import"./Curve-D3g77UHX.js";import"./types-BSLS2Rfw.js";import"./step-D6LclrFL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B___w46g.js";import"./Label-DK-X0Mes.js";import"./ZIndexLayer-BBvvwP5n.js";import"./useAnimationId-DfgP8Qzr.js";import"./ActivePoints-DaxBQcxo.js";import"./Dot-LnWMvtRz.js";import"./RegisterGraphicalItemId-aTaFmyQg.js";import"./ErrorBarContext-BWZYzIr8.js";import"./GraphicalItemClipPath-BI7LHR9E.js";import"./SetGraphicalItem-Cgc_8Ru0.js";import"./getRadiusAndStrokeWidthFromDot-1x2538jp.js";import"./ActiveShapeUtils-7HjO8Td_.js";import"./CartesianAxis-Dqr_Wojb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-DXCrjgw-.js";import"./symbol-Cr5BIINB.js";import"./useElementOffset-BcUuC6UH.js";import"./uniqBy-DJ-FcwmE.js";import"./iteratee-BUWsjaYF.js";import"./Cross-D9dQdIGX.js";import"./Rectangle-CqE8KoLV.js";import"./Sector-DGh7eeHP.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
