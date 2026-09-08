import{r as p,R as t}from"./iframe-pbo-QmUV.js";import{L as n}from"./LineChart-DWdZgPGc.js";import{R as s}from"./zIndexSlice-uFV94i-F.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BJc9xt0z.js";import{X as d}from"./XAxis-D3aLIvS-.js";import{Y as y}from"./YAxis-nh7YJu46.js";import{L as u}from"./Legend-BlWFc7hv.js";import{L as h}from"./Line-6O9C2MB0.js";import{T as g}from"./Tooltip-Dw5XD65M.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D_F_8pjg.js";import"./resolveDefaultProps-Bn-8X6Qs.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Ry70X2n2.js";import"./throttle-pz4AEyIn.js";import"./index-D_Ub_wFV.js";import"./index-CKUumD7T.js";import"./isWellBehavedNumber-zRxxoDF3.js";import"./d3-scale-CHgOHIs9.js";import"./index-Cqrsc3wV.js";import"./index-DRjmG3NL.js";import"./renderedTicksSlice-DBjq58iQ.js";import"./index-CgW8Pfrl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CVXeZ94e.js";import"./chartDataContext-D8AV35hB.js";import"./CategoricalChart-C7FDKNmd.js";import"./CartesianAxis-DdLDEoN3.js";import"./Layer-Cu62JC_z.js";import"./Text-BdcAn3_A.js";import"./DOMUtils-C6RebZcO.js";import"./useId-BuOtXniO.js";import"./useBackwardsCompatibleTheme-CqO1jBVJ.js";import"./Label-DU5Wkeud.js";import"./ZIndexLayer-DMCFd0Py.js";import"./types-C5-2SUHa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BEL-A10D.js";import"./symbol-Chjg7NBq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Br9Bj8uR.js";import"./uniqBy-H0z77HUa.js";import"./iteratee-pV8VR7RL.js";import"./Curve-mcatnmip.js";import"./step-LTM-Duq3.js";import"./AnimatedItems--5FH9Bfg.js";import"./useAnimationId-w92tOT6t.js";import"./ActivePoints-D9o-N645.js";import"./Dot-D4f4qHEu.js";import"./RegisterGraphicalItemId-m6HZhBI1.js";import"./ErrorBarContext-DqrAg45D.js";import"./GraphicalItemClipPath-Q1XGfFBL.js";import"./SetGraphicalItem-Dbyeimyx.js";import"./getRadiusAndStrokeWidthFromDot-CFJndDg7.js";import"./ActiveShapeUtils-ompTjO3b.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-Bfo2Pftl.js";import"./Rectangle-rbQamDu_.js";import"./util-Dxo8gN5i.js";import"./Sector-T8h-oVN9.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
