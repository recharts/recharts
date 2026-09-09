import{r as p,R as t}from"./iframe-D0hbihpw.js";import{L as n}from"./LineChart-BUYxz17P.js";import{R as s}from"./zIndexSlice-BQR9Og2n.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B23msN0v.js";import{X as d}from"./XAxis-BAOUXnRk.js";import{Y as y}from"./YAxis-fB5-70kE.js";import{L as u}from"./Legend-C0bXGM57.js";import{L as h}from"./Line-DNABoAU9.js";import{T as g}from"./Tooltip-PXWDBjYQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CXRkLc1K.js";import"./resolveDefaultProps-Dmu88e8o.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Va6d-v4h.js";import"./throttle-DvTX4uc0.js";import"./index-BZ9qdzrn.js";import"./index-Dh99j1-7.js";import"./isWellBehavedNumber-CZhc5lub.js";import"./d3-scale-O8h2L0ph.js";import"./index-DrgC61Jv.js";import"./index-8bi5BFX5.js";import"./renderedTicksSlice-CXB8MRbw.js";import"./index-BDFJggKj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-V6lubhpa.js";import"./chartDataContext-DAXrP6D1.js";import"./CategoricalChart-Byua6Cow.js";import"./CartesianAxis-DbFRpkHK.js";import"./Layer-DikASeyh.js";import"./Text-CuYqG2IB.js";import"./DOMUtils-pnmg3tR-.js";import"./useId-CqMWBNZ1.js";import"./useBackwardsCompatibleTheme-BB_m6SGU.js";import"./Label-CuFmC-Nb.js";import"./ZIndexLayer-J_UAcRhh.js";import"./types-C5BTVxoc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CYKbw1ao.js";import"./symbol-CWSGDuFW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Npapc4qs.js";import"./uniqBy-BS3q8RgG.js";import"./iteratee-kuyUhPZO.js";import"./Curve-ar9QbNVF.js";import"./step-DPrNd-pa.js";import"./AnimatedItems-SbRPQVaD.js";import"./useAnimationId-qESP7nT-.js";import"./ActivePoints-CEQslcDp.js";import"./Dot-bpGHDnlK.js";import"./RegisterGraphicalItemId-DeHO2KGG.js";import"./ErrorBarContext-BWM6Th1h.js";import"./GraphicalItemClipPath-BlTfPWVo.js";import"./SetGraphicalItem-DqlrOVj_.js";import"./getRadiusAndStrokeWidthFromDot-DEVmJr6b.js";import"./ActiveShapeUtils-5v_sCHFD.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CMALfafA.js";import"./Rectangle-C_uu3MYE.js";import"./util-Dxo8gN5i.js";import"./Sector-DFu2VDPJ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
