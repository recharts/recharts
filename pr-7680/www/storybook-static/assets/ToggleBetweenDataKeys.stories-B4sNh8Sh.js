import{r as n,R as t}from"./iframe-CJ35PD5A.js";import{L as p}from"./LineChart-mSSu63tY.js";import{R as s}from"./zIndexSlice-CXvAqe1u.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DqtRbboz.js";import{X as d}from"./XAxis-CQkckETF.js";import{Y as y}from"./YAxis-C-pxpMoP.js";import{L as u}from"./Legend-CAVHwqQQ.js";import{L as h}from"./Line-DfqxCfzG.js";import{T as g}from"./Tooltip-BlmUwRsX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxyVG0mr.js";import"./index-D5VY6D4m.js";import"./index-DuaQKKCa.js";import"./index-DCTwsO2l.js";import"./index-BTcur_ii.js";import"./throttle-BvFenjAj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BMiLu3pU.js";import"./resolveDefaultProps-B4ysfGm0.js";import"./isWellBehavedNumber-DCFZS65F.js";import"./d3-scale-BMNy9LMQ.js";import"./renderedTicksSlice-BOsENmMF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-M-BqrDCQ.js";import"./chartDataContext-3LBg74Yj.js";import"./CategoricalChart-CE-ZSJzH.js";import"./CartesianAxis-A2w9N0VH.js";import"./Layer-DSIl_tFJ.js";import"./Text-C5ltUD8c.js";import"./DOMUtils-DuAj34SJ.js";import"./useId-BZocWyjW.js";import"./useBackwardsCompatibleTheme-BQ1enFxD.js";import"./Label-cSvk2bVk.js";import"./ZIndexLayer-BbmNpztl.js";import"./types-C2sHPoqW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-4vesr3cT.js";import"./symbol-DTaQU34d.js";import"./path-DyVhHtw_.js";import"./useElementOffset-k35BE04p.js";import"./uniqBy-CxVqVc_e.js";import"./iteratee-DGK4JZ60.js";import"./Curve-T8FgtlQU.js";import"./step-Bm6k0KcJ.js";import"./AnimatedItems-DkvJpJ1L.js";import"./useAnimationId-BrX_XnAR.js";import"./ActivePoints-Ch1REeHD.js";import"./Dot-BpKSJ4gZ.js";import"./RegisterGraphicalItemId-B595cwUV.js";import"./ErrorBarContext-BXwuVsqs.js";import"./GraphicalItemClipPath-DCmI04ho.js";import"./SetGraphicalItem-y646d7k1.js";import"./getRadiusAndStrokeWidthFromDot-DIhYmtUO.js";import"./ActiveShapeUtils-B17w6t33.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CZ2tgYbo.js";import"./Rectangle-CMWnDzZf.js";import"./util-Dxo8gN5i.js";import"./Sector-HolV0iej.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
