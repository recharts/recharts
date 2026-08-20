import{r as g,R as e}from"./iframe-BB2cSF8T.js";import{B as s}from"./Brush-Cq7oNwnO.js";import{R as B}from"./zIndexSlice-Ck0CRfK_.js";import{C as p}from"./ComposedChart-D7ONXqhe.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DAcc-yk_.js";import{L as D}from"./LineChart-BoM4P_vX.js";import{R as m}from"./ReferenceLine-CoOsdVB7.js";import{C as d}from"./CartesianGrid-BkpWEDC_.js";import{X as S}from"./XAxis-DwBzx4b3.js";import{Y as A}from"./YAxis-CMkp761K.js";import{L as R}from"./Legend-Bg34nPWt.js";import{T as w}from"./Tooltip-rc2r0gI0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-LVpAC3_2.js";import"./resolveDefaultProps-DjeWZstQ.js";import"./Text-Bwx_fWQU.js";import"./DOMUtils-yFTvziLR.js";import"./isWellBehavedNumber-BQXiM-z-.js";import"./useId-D4zb9cEW.js";import"./useBackwardsCompatibleTheme-g8RWGYmo.js";import"./chartDataContext-CB4jnkAv.js";import"./axisSelectors-BurdOGu6.js";import"./throttle-nMA59eYs.js";import"./index-EzV7mwgL.js";import"./index-DofPxVLY.js";import"./d3-scale-C3zxZmRj.js";import"./RechartsWrapper-DkB_KEzo.js";import"./index-MTvadirX.js";import"./index-DyAmptVd.js";import"./renderedTicksSlice-lUF_NPm1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ChdkOd-C.js";import"./CategoricalChart-DAFEAISl.js";import"./Curve-C11_GYZZ.js";import"./types-ChWRaT57.js";import"./step-BWHrm9dE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0WotYsMt.js";import"./Label-BZkQksct.js";import"./ZIndexLayer-DbM1bO0L.js";import"./useAnimationId-C8wX-p7z.js";import"./ActivePoints-CuAhK7lR.js";import"./Dot-byNEGz8Q.js";import"./RegisterGraphicalItemId-Bts6fFM2.js";import"./ErrorBarContext-DNeGzoAb.js";import"./GraphicalItemClipPath-CT1W7nLy.js";import"./SetGraphicalItem-Ct2uSDpP.js";import"./getRadiusAndStrokeWidthFromDot-eavX8tOz.js";import"./ActiveShapeUtils-Uvcq9QCX.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BWqAGBTh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-CyMSTzZI.js";import"./symbol-D3j02ylc.js";import"./useElementOffset-Mg-Nq6uP.js";import"./uniqBy-CkqXGP9K.js";import"./iteratee-DMriX-zr.js";import"./Cross-D7-z2vjD.js";import"./Rectangle-D-ZdRLCN.js";import"./util-Dxo8gN5i.js";import"./Sector-DR9-vfw9.js";const je={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const qe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,i as NoChartBrush,o as PanoramicBrush,qe as __namedExportsOrder,je as default};
