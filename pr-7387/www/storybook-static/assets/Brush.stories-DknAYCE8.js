import{P as g,c as e}from"./iframe-C5MHh42j.js";import{B as i}from"./Brush-DddZTRCn.js";import{g as B}from"./zIndexSlice-BAxAD9Hd.js";import{C as p}from"./ComposedChart-WRhT-Z7E.js";import{p as c}from"./Page-DPte-9pC.js";import{L as t}from"./Line-Das4hafc.js";import{L as D}from"./LineChart-BKWPKtjV.js";import{R as m}from"./ReferenceLine-DGf51nrW.js";import{C as d}from"./CartesianGrid-BK0lHkTK.js";import{X as S}from"./XAxis-Dv4taIi_.js";import{Y as A}from"./YAxis-BesflX3C.js";import{L as P}from"./Legend-CWMVurX6.js";import{T as w}from"./Tooltip-O--widbV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-w_pNkTrF.js";import"./d3-scale-DROX3YQd.js";import"./immer-BEKu5nAB.js";import"./index-BtGgX82p.js";import"./index-CtWdDAnJ.js";import"./Layer-BTdnKXgq.js";import"./resolveDefaultProps-50eaHBP1.js";import"./Text-Dd3m04ll.js";import"./DOMUtils-DPyYMl93.js";import"./isWellBehavedNumber-Fry2DCdR.js";import"./chartDataContext-B3IBL15G.js";import"./RechartsWrapper-BXiQbHg3.js";import"./index-DTHX5ifG.js";import"./index-Ddmpcm8d.js";import"./renderedTicksSlice-DJahilIk.js";import"./axisSelectors-l2EEhLAN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DdDBbaWH.js";import"./CategoricalChart-iSFUJ3mM.js";import"./Curve-thevB7o-.js";import"./types-DIsFNNUR.js";import"./step-CW5jkV_V.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BVj-7vfo.js";import"./Label-DPuGsfIc.js";import"./ZIndexLayer-BqFMND8v.js";import"./ActivePoints-hHK0AETy.js";import"./Dot-C9bGlN1x.js";import"./RegisterGraphicalItemId-D7dR1c0l.js";import"./ErrorBarContext-BqD49I1j.js";import"./GraphicalItemClipPath-D6R49ofK.js";import"./SetGraphicalItem-3zA0iFCt.js";import"./useAnimationId-D3rbPHOS.js";import"./getRadiusAndStrokeWidthFromDot-Om5tnWtK.js";import"./ActiveShapeUtils-B0TwIl-q.js";import"./CartesianAxis-hicrxO07.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BZjZW0di.js";import"./symbol-EmTrNRMN.js";import"./useElementOffset-CwximdNT.js";import"./uniqBy-Ba9KhnrU.js";import"./iteratee-CTywduMo.js";import"./Cross-DeACoSyY.js";import"./Rectangle-Hfg__8px.js";import"./Sector-B-A7jX2D.js";const ze={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(P,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
