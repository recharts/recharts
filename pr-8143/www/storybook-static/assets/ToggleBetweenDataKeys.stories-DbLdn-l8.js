import{r as p,R as t}from"./iframe-DSNXEUn4.js";import{L as n}from"./LineChart-CAokEF_k.js";import{R as s}from"./zIndexSlice-Dz2masNo.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CxHGX94q.js";import{X as d}from"./XAxis-BIkQK5N1.js";import{Y as y}from"./YAxis--soXrgEQ.js";import{L as u}from"./Legend-DjfLBMPY.js";import{L as h}from"./Line-5dkC5hpH.js";import{T as g}from"./Tooltip-DAoA9VX1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-tZbMCMkz.js";import"./resolveDefaultProps-BJdscjTc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BVWqqaIl.js";import"./throttle-Cql2XGyq.js";import"./index-Cw6XMlov.js";import"./index-CTOcRvfR.js";import"./polarAxisSelectors-DNTU8wxf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CACIKaWJ.js";import"./index-DdyQ4Lu6.js";import"./index-C8EE5WMp.js";import"./renderedTicksSlice-cMVgg74g.js";import"./index-OleNvKsM.js";import"./fillDefinitions-C4gnViBV.js";import"./CartesianChart-BNpv4aK0.js";import"./ZIndexPortal-Gym7d-4C.js";import"./CategoricalChart-D3zd10d6.js";import"./CartesianAxis-2YdOU3ps.js";import"./Layer-0vZKA5Ep.js";import"./Text-Dh3TMTW4.js";import"./DOMUtils-DYnHuNon.js";import"./ZIndexLayer-C5-QklmA.js";import"./Label-CjMpSSpc.js";import"./types-CuvQqVdH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-B3a4QAq0.js";import"./symbol-DEPa4V4_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D1SkD3Zy.js";import"./uniqBy-CXWSUzZM.js";import"./iteratee-BQECtUia.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DnME_alY.js";import"./step-DRkdD1F5.js";import"./LabelList-CdZv6dYa.js";import"./ActivePoints-MPkH3V4_.js";import"./Dot-BLQG3Xnr.js";import"./activeStyles-BwY0V3hq.js";import"./useAnimationId-De32QbAN.js";import"./dataEntryStyles-CrqYJwRR.js";import"./ErrorBarContext-BvGzHJmi.js";import"./SetGraphicalItem-DTg-QJxg.js";import"./getRadiusAndStrokeWidthFromDot-Bio62kDH.js";import"./ActiveShapeUtils-CnL30Scg.js";import"./useEffectiveDataKey-Bw1Ayo3J.js";import"./Cross-LpXEk-07.js";import"./Rectangle-BONo7sHl.js";import"./util-Dxo8gN5i.js";import"./Sector-DHvS94XI.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
