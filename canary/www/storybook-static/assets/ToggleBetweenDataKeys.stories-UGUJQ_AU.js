import{r as p,R as t}from"./iframe-BTkF_ck3.js";import{L as n}from"./LineChart-BpSy-ToF.js";import{R as s}from"./zIndexSlice-DMb1iT4y.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BryifyLu.js";import{X as d}from"./XAxis-XXOeJL4_.js";import{Y as y}from"./YAxis-xlfioMoU.js";import{L as u}from"./Legend-B4kkcuCQ.js";import{L as h}from"./Line-D7qRA9BJ.js";import{T as g}from"./Tooltip-BpiRcGXu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bfhw4EQp.js";import"./resolveDefaultProps-BHlGR1I9.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CNaIfHAW.js";import"./throttle-C296Coau.js";import"./index-DZJF29uL.js";import"./index-CJeeJVsL.js";import"./polarAxisSelectors-CGdJ8Zqs.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmgL8dDE.js";import"./index-COsBfOSj.js";import"./index-Ds77U3-G.js";import"./renderedTicksSlice-By9SNFPy.js";import"./index-C6zBHn9J.js";import"./CartesianChart-CVzabnxl.js";import"./ZIndexPortal-B00rDc6m.js";import"./CategoricalChart-gs1piNoX.js";import"./CartesianAxis-BPFkFfQP.js";import"./Layer-DbGB2kqV.js";import"./Text-TXIjjn1-.js";import"./DOMUtils-D4gdagBn.js";import"./ZIndexLayer-C-SL7ltI.js";import"./Label-BzrvAI-c.js";import"./types-8wxp4ZmL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CwIwUCy8.js";import"./symbol-OVGei777.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-BHSDIcCA.js";import"./dataEntryStyles-CxN2r_W-.js";import"./useElementOffset-Cl0zCrTJ.js";import"./uniqBy-CAi9PQ3u.js";import"./iteratee-zmWyJk5j.js";import"./isArguments-yB-y1yaH.js";import"./Curve-sIdkl0eW.js";import"./step-DBbPIMUm.js";import"./LabelList-2kTqXwcO.js";import"./ActivePoints-KDHW2NPu.js";import"./Dot-Doj0VDvS.js";import"./activeStyles-DacmxpXN.js";import"./useAnimationId-BxLJVC0T.js";import"./ErrorBarContext-nR9VGpMB.js";import"./SetGraphicalItem-DBGhZH7_.js";import"./getRadiusAndStrokeWidthFromDot-BR6gVE_1.js";import"./ActiveShapeUtils-D-HoRWJg.js";import"./useEffectiveDataKey-IRMZLONN.js";import"./Cross-DVTuHcBA.js";import"./Rectangle-CRH2iL4s.js";import"./util-Dxo8gN5i.js";import"./Sector-DwUhOI5m.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
