import{r as p,R as t}from"./iframe-Cohm3Mgw.js";import{L as n}from"./LineChart-BXoI0wrZ.js";import{R as s}from"./zIndexSlice-B9ueg08S.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B44Zue7x.js";import{X as d}from"./XAxis-CVOvqpzX.js";import{Y as y}from"./YAxis-CL7XnP-K.js";import{L as u}from"./Legend-DdnPtxq-.js";import{L as h}from"./Line-CSUvTs5t.js";import{T as g}from"./Tooltip-D5IMBnAQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BRBo2AAI.js";import"./resolveDefaultProps-C0M5TZCe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CjhsklJ0.js";import"./throttle-yX9WQlUu.js";import"./index-D7CetYi-.js";import"./index-S5rsC3Tw.js";import"./isWellBehavedNumber-gcpDVDB0.js";import"./d3-scale-DvRyM4Sf.js";import"./index-DvtaYKH7.js";import"./index-BauJCgFC.js";import"./renderedTicksSlice-BCr9iPCV.js";import"./index-Cm_kbqdK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cpw2D3LX.js";import"./chartDataContext-H3bm4v7q.js";import"./CategoricalChart-Df9xH4Hr.js";import"./CartesianAxis-ayk5133x.js";import"./Layer-0g-9u_Rw.js";import"./Text-YiVIU37_.js";import"./DOMUtils-txvPDt5R.js";import"./useId-C6wOq3r0.js";import"./useBackwardsCompatibleTheme-VM02li75.js";import"./Label-CjpZErbZ.js";import"./ZIndexLayer-CYwij2WM.js";import"./types-DRz-ZInT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-TKWw2euB.js";import"./symbol-DN1AI-xQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CIa7YSgL.js";import"./uniqBy-DMinejVi.js";import"./iteratee-Cno2h-aJ.js";import"./Curve-BoBL6qva.js";import"./step-DcnLL6eP.js";import"./AnimatedItems-CnXe2R42.js";import"./useAnimationId-Cli-i2xG.js";import"./ActivePoints-D3t_JlJ4.js";import"./Dot-bF3RsuDa.js";import"./RegisterGraphicalItemId-zE1kxnUQ.js";import"./ErrorBarContext-CroV_pde.js";import"./GraphicalItemClipPath-C_0K_X_g.js";import"./SetGraphicalItem-Cu_GzdoF.js";import"./getRadiusAndStrokeWidthFromDot-BzpvHiho.js";import"./ActiveShapeUtils-Vqel86XU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-u0ASlHbu.js";import"./Rectangle-DOtTacNo.js";import"./util-Dxo8gN5i.js";import"./Sector-BbiA_v6i.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
