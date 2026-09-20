import{r as p,R as t}from"./iframe-CgFNOWkZ.js";import{L as n}from"./LineChart-DWR_vU4y.js";import{R as s}from"./zIndexSlice-CnfPauoq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B3_ZhlFR.js";import{X as d}from"./XAxis-Bdjd5PBO.js";import{Y as y}from"./YAxis-Bn0ZQNQZ.js";import{L as u}from"./Legend-DsuBGmj6.js";import{L as h}from"./Line-4xvbcNSQ.js";import{T as g}from"./Tooltip-hzNlJo4b.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CU75wXMo.js";import"./resolveDefaultProps-B5p3Q00G.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CDnWxexV.js";import"./throttle-CwNcKmkm.js";import"./index-hYkm-J_b.js";import"./index-DjTwooh3.js";import"./isWellBehavedNumber-Cr26aOyF.js";import"./d3-scale-EAUzpRo7.js";import"./index-DlEkrCr0.js";import"./index-CIxokqwK.js";import"./renderedTicksSlice-dpz4HLD4.js";import"./index-BKLtIohb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C2LWrJC3.js";import"./chartDataContext-BPHBCGRy.js";import"./CategoricalChart-DEeDNDbs.js";import"./CartesianAxis-CE5tgyYR.js";import"./Layer-DQEpCXa4.js";import"./Text-BCy-48NS.js";import"./DOMUtils-BuWky4GR.js";import"./useId-Cn22DgH8.js";import"./useBackwardsCompatibleTheme-qMLBJgjs.js";import"./Label-DM_lkfp6.js";import"./ZIndexLayer-ZdAzMWJW.js";import"./types-C1vo7smu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dhpqo7YW.js";import"./symbol-DMRhcOQz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFZH7CAW.js";import"./uniqBy-B6NCt-4C.js";import"./iteratee-DHR339hL.js";import"./Curve-O27qjVv6.js";import"./step-D28zNE0u.js";import"./AnimatedItems-UKua_m0c.js";import"./useAnimationId-DZ6wcHPj.js";import"./ActivePoints-DfS8V4yA.js";import"./Dot-DaO5ThZO.js";import"./RegisterGraphicalItemId-DQaeZdby.js";import"./ErrorBarContext-he3EC3WX.js";import"./GraphicalItemClipPath-BUB4x5xD.js";import"./SetGraphicalItem-CsabRogn.js";import"./getRadiusAndStrokeWidthFromDot-BfxRkwb-.js";import"./ActiveShapeUtils-CgLseHdF.js";import"./useGraphicalItemIdentity-Z3uBGV6O.js";import"./Cross-t6tx45j-.js";import"./Rectangle-lr0FbpfG.js";import"./util-Dxo8gN5i.js";import"./Sector-ClDWYj6L.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
