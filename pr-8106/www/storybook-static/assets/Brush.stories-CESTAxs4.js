import{r as g,R as e}from"./iframe-C82DQHN8.js";import{B as s}from"./Brush-RPVxSt3U.js";import{R as B}from"./zIndexSlice-KEmmKuiN.js";import{C as p}from"./ComposedChart-CYmsodFg.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DR6e76wi.js";import{L as D}from"./LineChart-DXoJS7NU.js";import{R as m}from"./ReferenceLine-DLL3x-QO.js";import{C as d}from"./CartesianGrid-BguhZg3D.js";import{X as S}from"./XAxis-HS7HwOQV.js";import{Y as A}from"./YAxis-CY_V7IWg.js";import{L as R}from"./Legend-CBS3sR82.js";import{T as w}from"./Tooltip-_4wsMkeZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-C-QkALxJ.js";import"./resolveDefaultProps-VPX7RWl5.js";import"./Text-BsKwg4yV.js";import"./pageBackground-fR40L72L.js";import"./ZIndexLayer-BbgqXMZY.js";import"./index-DS_o04pJ.js";import"./index-CrBCcUcr.js";import"./ZIndexPortal-CwXxcVKW.js";import"./axisSelectors-BBwIpa2g.js";import"./throttle-DrIjUdEi.js";import"./polarAxisSelectors-CI9V5B2f.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-YRVCFiEs.js";import"./RechartsWrapper-C7FIcLUG.js";import"./index-Dxrl0h9V.js";import"./index-BzW5Id2r.js";import"./renderedTicksSlice-Dyzu-B2T.js";import"./index-Q0hLYzZW.js";import"./CartesianChart-DkUBM6DF.js";import"./CategoricalChart-CSFGEuTa.js";import"./Curve-DL-Hbuxt.js";import"./types-zIpyflln.js";import"./step-CNEvn2Wv.js";import"./path-DyVhHtw_.js";import"./LabelList-CqrMkTfo.js";import"./Label-Ckx9XYdx.js";import"./ActivePoints-BwyWhSZo.js";import"./Dot-BljD15xb.js";import"./activeStyles-BTVFwqk3.js";import"./useAnimationId-B8gyVu2h.js";import"./dataEntryStyles-Dn-nirF7.js";import"./Symbols-CFD8lW7l.js";import"./symbol-BmeELTCq.js";import"./ErrorBarContext-D11z8twA.js";import"./SetGraphicalItem-Bgxm3FOo.js";import"./getRadiusAndStrokeWidthFromDot-LeBNisO_.js";import"./ActiveShapeUtils-DQaA7sJq.js";import"./useEffectiveDataKey-bWUuu12H.js";import"./CartesianAxis-DKLzLHvo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-CVdUc2iG.js";import"./uniqBy-DXinuiHK.js";import"./iteratee-0NsStHsr.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C-S5v_ih.js";import"./Rectangle-CZ-MIfgH.js";import"./util-Dxo8gN5i.js";import"./Sector-BJdx_vz4.js";const je={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},qe=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};export{a as ControlledBrush,i as NoChartBrush,o as PanoramicBrush,qe as __namedExportsOrder,je as default};
