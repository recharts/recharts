import{P as g,c as e}from"./iframe-Cvf4U4wn.js";import{B as i}from"./Brush-Cv-dBwug.js";import{g as B}from"./zIndexSlice-CO7DftJr.js";import{C as p}from"./ComposedChart-DDdTWodp.js";import{p as c}from"./Page-DPte-9pC.js";import{L as t}from"./Line-DYvazgCg.js";import{L as D}from"./LineChart-BOP6sgFp.js";import{R as m}from"./ReferenceLine-CdwNLjam.js";import{C as d}from"./CartesianGrid-CyV206l1.js";import{X as S}from"./XAxis-l3Ov2KAu.js";import{Y as A}from"./YAxis-CMM495nD.js";import{L as P}from"./Legend-BR-NF9xj.js";import{T as w}from"./Tooltip-QaWAXfYX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DcGEMmQ3.js";import"./d3-scale-DPGKMlVi.js";import"./immer-CBt7R_8A.js";import"./index-BqdhXxVe.js";import"./index-Ie5aROBq.js";import"./Layer-CDCy6J-l.js";import"./resolveDefaultProps-_tlFTpxx.js";import"./Text-Kfko65iu.js";import"./DOMUtils-0PFm0Zn3.js";import"./isWellBehavedNumber-D1x3hQfA.js";import"./chartDataContext-BwbL_Y5V.js";import"./RechartsWrapper-hVt29Fw0.js";import"./index-_osGLyvR.js";import"./index-84gp7b_-.js";import"./renderedTicksSlice-C6GQfAg5.js";import"./axisSelectors-DVSbKCnr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDk2GzyN.js";import"./CategoricalChart-Bqu7zn37.js";import"./Curve-DdUHzuyS.js";import"./types-CuBUAF5G.js";import"./step-_BMXLB8G.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CtvGvrJ3.js";import"./Label-DCVsgxMs.js";import"./ZIndexLayer-DmQbCY-Q.js";import"./ActivePoints-CP_bslYY.js";import"./Dot-DEWSwyeJ.js";import"./RegisterGraphicalItemId-1iDEiZF0.js";import"./ErrorBarContext-d8hdoxRP.js";import"./GraphicalItemClipPath-D3CDUk-1.js";import"./SetGraphicalItem-wq1eCtaf.js";import"./useAnimationId-DtyIsMoa.js";import"./getRadiusAndStrokeWidthFromDot-Cm80QE2r.js";import"./ActiveShapeUtils-BFe2i1Jy.js";import"./CartesianAxis-BKWdoZud.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-CgPS0jag.js";import"./symbol-DC3DdvQa.js";import"./useElementOffset-WW4KUmBb.js";import"./uniqBy-BQjndAzO.js";import"./iteratee-CTJSODyf.js";import"./Cross-CLjsubSm.js";import"./Rectangle-DlZf8ANQ.js";import"./Sector-Cc3eSa_T.js";const ze={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(P,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
