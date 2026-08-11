import{r as n,R as t}from"./iframe-7RWUuhSd.js";import{L as p}from"./LineChart-DxO3DmnE.js";import{R as s}from"./zIndexSlice-C-1xueag.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CTPNCTPZ.js";import{X as d}from"./XAxis-C-yl8jm9.js";import{Y as y}from"./YAxis-8kn4A2SS.js";import{L as u}from"./Legend-GiST82uZ.js";import{L as h}from"./Line-CL693QeV.js";import{T as g}from"./Tooltip-DVTWmIsy.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bxby6BNU.js";import"./index-BfsW4WVk.js";import"./index-CJpx5Qie.js";import"./index-DH_Nh8tm.js";import"./index-ST-ozWV_.js";import"./throttle-C227k_Ys.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DDo2hoqB.js";import"./resolveDefaultProps-DASEB5Wz.js";import"./isWellBehavedNumber-BpVUwl5Y.js";import"./d3-scale-BsnTxIDO.js";import"./renderedTicksSlice-CZ8pQT90.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cp-UDomk.js";import"./chartDataContext-CBmAGHT1.js";import"./CategoricalChart-Dy4quV1E.js";import"./CartesianAxis-DWQJI5tm.js";import"./Layer-BumiLaGI.js";import"./Text-C5AxehkZ.js";import"./DOMUtils-CAVKjQcs.js";import"./RechartsThemeContext-ajl3dqdh.js";import"./Label-DVgNkXBe.js";import"./ZIndexLayer-CjyDq4Qz.js";import"./types-DB_EcD1u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DKsKe8A2.js";import"./symbol-DIvMV5l6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BOAPUBRF.js";import"./uniqBy-CMb7Fqzi.js";import"./iteratee-0AIsNve9.js";import"./Curve-K5B3Xoou.js";import"./step-9lMeGmm4.js";import"./AnimatedItems-awhheCod.js";import"./useAnimationId-CBjNqWHO.js";import"./ActivePoints-DdYZ5tMW.js";import"./Dot-KQ9Tkozj.js";import"./RegisterGraphicalItemId-1lBEDF1k.js";import"./ErrorBarContext-CFwTRIJP.js";import"./GraphicalItemClipPath-BA1h2NiZ.js";import"./SetGraphicalItem-90z5HlWu.js";import"./getRadiusAndStrokeWidthFromDot-CVzIRP5K.js";import"./ActiveShapeUtils-DetKTjsC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-vsjs0DL_.js";import"./Rectangle-CHtXbmZu.js";import"./util-Dxo8gN5i.js";import"./Sector-Bz26gwEi.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
