import{r as p,R as t}from"./iframe-Cr7yvMyR.js";import{L as n}from"./LineChart-2uMppyWO.js";import{R as s}from"./zIndexSlice-CsHxFK6N.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-qOjoXZ7o.js";import{X as d}from"./XAxis-6YWl141g.js";import{Y as y}from"./YAxis-CzA9LN6m.js";import{L as u}from"./Legend-C_9JRBub.js";import{L as h}from"./Line-BPy1KVNT.js";import{T as g}from"./Tooltip-DiW-QkFW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtToZ6Qn.js";import"./resolveDefaultProps-7XokfeB_.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BefgmR9V.js";import"./throttle-RI9qCIcF.js";import"./index-BW-7B_Oi.js";import"./index-BxNxBv76.js";import"./polarAxisSelectors-Bu65NBmY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DsBZl9Yj.js";import"./index-D9o51X71.js";import"./index-DqRp8Gio.js";import"./renderedTicksSlice-BFO9fjGk.js";import"./index-DcWjrMSV.js";import"./CartesianChart-BdMrkwen.js";import"./ZIndexPortal-BAJpkEGh.js";import"./CategoricalChart-Cyp6BiKR.js";import"./CartesianAxis-CEqebLVd.js";import"./Layer-Dr_Plb3q.js";import"./Text-Bgk62K3n.js";import"./DOMUtils-DpKBhuMF.js";import"./ZIndexLayer-DE1YK584.js";import"./Label-Bde3ooKp.js";import"./types-NTnKzXXZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BTpF-zfb.js";import"./symbol-AnQJSsJ7.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-C6DfZjQD.js";import"./dataEntryStyles-Df9giDaD.js";import"./useElementOffset-DLS-U19J.js";import"./uniqBy-WRjYJOFh.js";import"./iteratee-ru1DkRCS.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BMeJMEVZ.js";import"./step-C7lw2IuE.js";import"./LabelList-DKDyf66o.js";import"./ActivePoints-CeFLQPPR.js";import"./Dot-C8oJPXZf.js";import"./activeStyles-4Qukhfp5.js";import"./useAnimationId-CrRcWCxT.js";import"./ErrorBarContext-DICVo2af.js";import"./SetGraphicalItem-CPzrGo_B.js";import"./getRadiusAndStrokeWidthFromDot-BmiuMj8w.js";import"./ActiveShapeUtils-DimJ4nan.js";import"./useEffectiveDataKey-DcbjY3Lr.js";import"./Cross-Bh3oRRwe.js";import"./Rectangle-CzWgcXDx.js";import"./util-Dxo8gN5i.js";import"./Sector-BicQVizF.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
