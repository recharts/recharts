import{r as p,R as t}from"./iframe-O_zfFb6r.js";import{L as n}from"./LineChart-CTnN8oz0.js";import{R as s}from"./zIndexSlice-CDi6Z2zv.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DQoEYFTB.js";import{X as d}from"./XAxis-BJYhxEEM.js";import{Y as y}from"./YAxis-4IiwGwhc.js";import{L as u}from"./Legend-1Ol6OkJV.js";import{L as h}from"./Line-C-49beIg.js";import{T as g}from"./Tooltip-1DAkwEJk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DPG1lJEB.js";import"./resolveDefaultProps-Cy11K6xZ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cu-Cxseq.js";import"./throttle-nfGA0JID.js";import"./index-CpzZNRq1.js";import"./index-F3KKsDmf.js";import"./isWellBehavedNumber-zMKck78V.js";import"./d3-scale-CJf0BmNx.js";import"./index-Bs_5gbEM.js";import"./index-6nFN620n.js";import"./renderedTicksSlice-fycCYLaq.js";import"./index-Fqn27s52.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DjXROyBm.js";import"./chartDataContext-T_bYBa0C.js";import"./CategoricalChart-Cks6RsKt.js";import"./CartesianAxis-DAJd6uwN.js";import"./Layer-IOKs9hiO.js";import"./Text-TAeBHRIT.js";import"./DOMUtils-BJJ-vVKn.js";import"./useId-CBZzzSpP.js";import"./useBackwardsCompatibleTheme-DbcN9pdU.js";import"./Label-Bt0vOpuF.js";import"./ZIndexLayer-CbUFYwY1.js";import"./types-dgF4Zt0B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-cbozTFmP.js";import"./symbol-C4Mpqg-9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D293KLr8.js";import"./uniqBy-B-gqZXLG.js";import"./iteratee-Tn2QA64I.js";import"./Curve-Dj1kSGWk.js";import"./step-Cv1KNwyF.js";import"./AnimatedItems-B71252eU.js";import"./useAnimationId-O6XvtviY.js";import"./ActivePoints-C0Y8Gw_Z.js";import"./Dot-CLEBjmd0.js";import"./RegisterGraphicalItemId-D2Q5ahcD.js";import"./ErrorBarContext-CDadBxpm.js";import"./GraphicalItemClipPath-C_4Tb4-L.js";import"./SetGraphicalItem-BsFfkq2Z.js";import"./getRadiusAndStrokeWidthFromDot-BlCMDsUw.js";import"./ActiveShapeUtils-0QkmK8Hn.js";import"./useGraphicalItemIdentity-Q9Kv4PEr.js";import"./Cross-QLCt5l02.js";import"./Rectangle-DP-IEOGk.js";import"./util-Dxo8gN5i.js";import"./Sector-Bp2DPLi0.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
