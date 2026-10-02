import{r as p,R as t}from"./iframe-B0sakJiE.js";import{L as n}from"./LineChart-D5dd-ycI.js";import{R as s}from"./zIndexSlice-C2JoSOuc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BbkjZe_5.js";import{X as d}from"./XAxis-BMxSzB1I.js";import{Y as y}from"./YAxis-CZvdB1-4.js";import{L as u}from"./Legend-C-A0bCgE.js";import{L as h}from"./Line-84fb3iOh.js";import{T as g}from"./Tooltip-CvneTsD4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BpIUDAEt.js";import"./resolveDefaultProps-ssIH5a_N.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DAvStXmd.js";import"./throttle-C7TX7owl.js";import"./index-DsNYe81z.js";import"./index-BXQEz9WW.js";import"./isWellBehavedNumber-DiVn1zM4.js";import"./d3-scale-CBENh8dV.js";import"./index-CshZKuHv.js";import"./index-B_LLgB3d.js";import"./renderedTicksSlice-BPkvdwOw.js";import"./index-7d7qLSfx.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BkOoMrfQ.js";import"./chartDataContext-Bl9ftmGr.js";import"./CategoricalChart-i5JvNUXt.js";import"./CartesianAxis-6gx2DY-1.js";import"./Layer-CcOy9dqf.js";import"./Text-YdcYRLnk.js";import"./DOMUtils-Cp8HsdRc.js";import"./useId-ByzngA9u.js";import"./useBackwardsCompatibleTheme-yTt122QS.js";import"./Label-CXhmz5va.js";import"./ZIndexLayer-C7T7VX-U.js";import"./types-BxUBO_Vd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-VzAfvAVY.js";import"./symbol-BbQhUQUQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4fRB1JA3.js";import"./uniqBy-CUMmWf25.js";import"./iteratee-XhZZr9kx.js";import"./Curve-B_1SwL8s.js";import"./step-step2nKl.js";import"./AnimatedItems-DhCfcvtd.js";import"./useAnimationId-fISgZVPU.js";import"./ActivePoints-REhV00gC.js";import"./Dot-CHjZWmhk.js";import"./RegisterGraphicalItemId-BMnnO_Y6.js";import"./ErrorBarContext-lXq8p5sv.js";import"./GraphicalItemClipPath-DDSyttGC.js";import"./SetGraphicalItem-BtMMOS1d.js";import"./getRadiusAndStrokeWidthFromDot-Bo_6wHZf.js";import"./ActiveShapeUtils-DnkyzZr6.js";import"./useGraphicalItemIdentity-CN480731.js";import"./Cross-jsPGEXbR.js";import"./Rectangle-RAovKYee.js";import"./util-Dxo8gN5i.js";import"./Sector-CcFisYpN.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
