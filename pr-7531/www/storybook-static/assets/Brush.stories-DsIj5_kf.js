import{r as g,R as e}from"./iframe-CaZrduHG.js";import{B as i}from"./Brush-VHUkeUlz.js";import{R as B}from"./zIndexSlice-CvUTBx_8.js";import{C as p}from"./ComposedChart-Bo1OFqhY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-BZzowOBE.js";import{L as D}from"./LineChart-BCVxfF6y.js";import{R as m}from"./ReferenceLine-CBOk8HZf.js";import{C as d}from"./CartesianGrid-C0il1H2Z.js";import{X as S}from"./XAxis-CHaMVHb_.js";import{Y as A}from"./YAxis-DyfSUlDI.js";import{L as R}from"./Legend-BBfaOcTC.js";import{T as w}from"./Tooltip-K2l47E_T.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-DIgzKEwe.js";import"./resolveDefaultProps-hTjQl1Jw.js";import"./Text-Rs_1_idd.js";import"./DOMUtils-CmlaPQx2.js";import"./isWellBehavedNumber-Ds6x18SL.js";import"./chartDataContext-BSaewpt8.js";import"./RechartsWrapper-6f4LgHbs.js";import"./index-dOcL02AF.js";import"./index-BkusJAc5.js";import"./index-CYnc97bp.js";import"./index-CdgMfIsn.js";import"./throttle-x_arNXZJ.js";import"./renderedTicksSlice-CarnP_oQ.js";import"./axisSelectors-CbEPJ0ND.js";import"./d3-scale-EIFV6mVT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DiGyCZXM.js";import"./CategoricalChart-d16gVM5b.js";import"./Curve-jKjHUG6Y.js";import"./types-CJ_sW9YU.js";import"./step-C-Vvb7fY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DghnEQ9g.js";import"./Label-BWJz-33r.js";import"./ZIndexLayer-dEGCaPIX.js";import"./useAnimationId-Ddowgb5f.js";import"./ActivePoints-dA3071Q3.js";import"./Dot-CvRN0Hh7.js";import"./RegisterGraphicalItemId-pMJ6sSz4.js";import"./ErrorBarContext-B9ivevc9.js";import"./GraphicalItemClipPath-CRbchFTR.js";import"./SetGraphicalItem-0qDOjHM6.js";import"./getRadiusAndStrokeWidthFromDot-BNORI3ED.js";import"./ActiveShapeUtils-O1yKcLVj.js";import"./CartesianAxis-DB1Mym72.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-i74qPNSp.js";import"./symbol-BdXTkLlK.js";import"./useElementOffset-M2uTjwmd.js";import"./uniqBy-ClKVU6lM.js";import"./iteratee-DfJ2FbmX.js";import"./Cross-6SrpIpYe.js";import"./Rectangle-BwbsF6Pn.js";import"./util-Dxo8gN5i.js";import"./Sector-2ER15uV_.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
