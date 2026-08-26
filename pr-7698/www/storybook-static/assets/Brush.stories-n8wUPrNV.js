import{r as g,R as e}from"./iframe-zaa1iZav.js";import{B as s}from"./Brush-CDV7X3yO.js";import{R as B}from"./zIndexSlice-BWWEcbGp.js";import{C as p}from"./ComposedChart-SWtXcCgK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-Dy42oF7S.js";import{L as D}from"./LineChart-ir5wyAOY.js";import{R as m}from"./ReferenceLine-BYm3K0qE.js";import{C as d}from"./CartesianGrid-CNCUB2Ph.js";import{X as S}from"./XAxis-BVnwJxOu.js";import{Y as A}from"./YAxis-DJCm-s1B.js";import{L as R}from"./Legend-rKi-Jd1L.js";import{T as w}from"./Tooltip-DmmlIPoF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-Diqr5-jO.js";import"./resolveDefaultProps-CJqzH_DM.js";import"./Text-CNT20nWc.js";import"./DOMUtils-CDT7WRtk.js";import"./isWellBehavedNumber-DAhZ9La7.js";import"./useId-B4zmx8V0.js";import"./useBackwardsCompatibleTheme-XO0ISL55.js";import"./chartDataContext-CPRHK_4k.js";import"./axisSelectors-ucT8kUEv.js";import"./throttle-CPqxLIQd.js";import"./index-BrIYS7Za.js";import"./index-B2mdcnwD.js";import"./d3-scale-DKZbRsMk.js";import"./RechartsWrapper-Bf_8sWMW.js";import"./index-BZPWANmU.js";import"./index-CM-qLXxp.js";import"./renderedTicksSlice-jJ4uAB34.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BUEIFsCx.js";import"./CategoricalChart-DzU0tABe.js";import"./Curve-PUx2QnOd.js";import"./types-DFArERnY.js";import"./step-Bfrhe9AG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-O1YgZXLs.js";import"./Label-dEEe5X5F.js";import"./ZIndexLayer-Dn1PwF1U.js";import"./useAnimationId-B8kms9uE.js";import"./ActivePoints-DVBi-AIt.js";import"./Dot-oGoSOzAY.js";import"./RegisterGraphicalItemId-dsCSOxKS.js";import"./ErrorBarContext-ZTRuZpEO.js";import"./GraphicalItemClipPath-Dhs9LVS9.js";import"./SetGraphicalItem-Dk_WNLiG.js";import"./getRadiusAndStrokeWidthFromDot-DJ1u3-OH.js";import"./ActiveShapeUtils-lGuUrwlM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BEMiFdQK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-qor2sXTI.js";import"./symbol-Bekqv1-x.js";import"./useElementOffset-BkrFnIvv.js";import"./uniqBy-BVIzKSm2.js";import"./iteratee-CL50YqF6.js";import"./Cross-BLdWMmSw.js";import"./Rectangle-Ddidi1ZR.js";import"./util-Dxo8gN5i.js";import"./Sector-D1nZ1jgF.js";const je={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
