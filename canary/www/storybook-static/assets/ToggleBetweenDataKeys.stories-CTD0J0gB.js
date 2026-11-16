import{r as p,R as t}from"./iframe-KWoDlvv0.js";import{L as n}from"./LineChart-BqGOzDd7.js";import{R as s}from"./zIndexSlice-D6_TQa48.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CwnO4f1F.js";import{X as d}from"./XAxis-Dha5DL-7.js";import{Y as y}from"./YAxis-BpsL_9nJ.js";import{L as u}from"./Legend-zpJKMWIs.js";import{L as h}from"./Line-CoYDa0ns.js";import{T as g}from"./Tooltip-DyIqXAOf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cd2ytf7V.js";import"./resolveDefaultProps-fIhDXQnx.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CV2At8Yo.js";import"./throttle-BvqCZ8Vh.js";import"./index-Li49Ujhl.js";import"./index-D_eG4QRf.js";import"./polarAxisSelectors-8HEoWBh0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oWIqdaah.js";import"./index-BfCybvCF.js";import"./index-CCYlIY-z.js";import"./renderedTicksSlice-C40hju2e.js";import"./index-Dv3wNeKm.js";import"./fillDefinitions-BahzxKfc.js";import"./CartesianChart-D1x7M7Ji.js";import"./chartDataContext-CRRlgIpa.js";import"./CategoricalChart-539yhc35.js";import"./CartesianAxis-CyfkCIs2.js";import"./Layer-waQQT3dP.js";import"./Text-DoeJcgDd.js";import"./ZIndexLayer-UqbdP99s.js";import"./Label-BPcs5PEB.js";import"./types-DGnljtoN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-etFAQ42y.js";import"./symbol-DnM84iFX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-1JyRc5h3.js";import"./uniqBy-CbPnR-9p.js";import"./iteratee-DIz1rWLv.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B7-98jub.js";import"./step-e6HwNXpN.js";import"./dataEntryStyles-B50QbiA3.js";import"./ActivePoints-DgWtUVYM.js";import"./Dot-8l7EA-ok.js";import"./activeStyles-DdJ_j3KP.js";import"./useAnimationId-Dr1qu-UX.js";import"./ErrorBarContext-B7AiZePC.js";import"./SetGraphicalItem-C36UrnCq.js";import"./getRadiusAndStrokeWidthFromDot-CjrqjHcw.js";import"./ActiveShapeUtils-C8mQk9io.js";import"./useEffectiveDataKey-Dnh6CHxJ.js";import"./Cross-XnGezxgG.js";import"./Rectangle-9Jhf_J89.js";import"./util-Dxo8gN5i.js";import"./Sector-sU6YNYVD.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
