import{r as g,R as e}from"./iframe-GELhAUTo.js";import{B as i}from"./Brush-B6on7hZo.js";import{R as B}from"./zIndexSlice-ClN2s-1U.js";import{C as p}from"./ComposedChart-CdCgkykE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-5fxqjKcQ.js";import{L as D}from"./LineChart-BbsunwQV.js";import{R as m}from"./ReferenceLine-CoarbkMN.js";import{C as d}from"./CartesianGrid-CfIIDz7w.js";import{X as S}from"./XAxis-Y85LtPOX.js";import{Y as A}from"./YAxis-CwCyZywx.js";import{L as R}from"./Legend-BLx8mw05.js";import{T as w}from"./Tooltip-D7C9XChe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-1dFGvAkG.js";import"./resolveDefaultProps-i6Bf8Qe5.js";import"./Text-COlbwtoq.js";import"./DOMUtils-vC9OxNpg.js";import"./isWellBehavedNumber-qNvGNJqB.js";import"./chartDataContext-C1NesgAa.js";import"./RechartsWrapper-CSC6kLWa.js";import"./index-fkyqtveo.js";import"./index-De1BUZgG.js";import"./index-DTm2_Ebd.js";import"./index-Ch3aQyu8.js";import"./throttle-DU3kigO2.js";import"./renderedTicksSlice-DtvoFkYT.js";import"./axisSelectors-DqMTsyvT.js";import"./d3-scale-BXdsYgex.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnHKmmwZ.js";import"./CategoricalChart-DWJWD5d1.js";import"./Curve-C2-sTxrm.js";import"./types-CDH6nNS8.js";import"./step-DYVQ7D-O.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D0mvcaGm.js";import"./Label-D2gt0uaB.js";import"./ZIndexLayer-BJaQcl6Z.js";import"./useAnimationId-Cjs3Y5s0.js";import"./ActivePoints-D0W1le7m.js";import"./Dot-Dfp7LnYV.js";import"./RegisterGraphicalItemId-CBE0jEK0.js";import"./ErrorBarContext-Cc-Db4VE.js";import"./GraphicalItemClipPath-BR4J-JYN.js";import"./SetGraphicalItem-CbnVMng4.js";import"./getRadiusAndStrokeWidthFromDot-DdGOUs2v.js";import"./ActiveShapeUtils-GEyAcK7d.js";import"./CartesianAxis-C2iZYvRC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-_h1NCy2L.js";import"./symbol-DDMMncL4.js";import"./useElementOffset-CSI1lZ64.js";import"./uniqBy-UEtfjGe3.js";import"./iteratee-HaGkk_IB.js";import"./Cross-Crmvd5H-.js";import"./Rectangle-D1qGnE1A.js";import"./util-Dxo8gN5i.js";import"./Sector-BjEDjMKc.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
