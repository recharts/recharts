import{r as p,R as t}from"./iframe-Bz2BdfN4.js";import{L as n}from"./LineChart-B2R0-lJa.js";import{R as s}from"./zIndexSlice-CrpvQ3cZ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D_WKqQan.js";import{X as d}from"./XAxis-Dd1a0uMa.js";import{Y as y}from"./YAxis-BsNZ_B30.js";import{L as u}from"./Legend-D6gq-Yot.js";import{L as h}from"./Line-05lQBnag.js";import{T as g}from"./Tooltip-BD_wy8eu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BKy4IHB9.js";import"./resolveDefaultProps-CwyxmUze.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DHqPZzoA.js";import"./throttle-B-XPotXa.js";import"./index-m3Fpm_2g.js";import"./index-C_HDr07T.js";import"./isWellBehavedNumber-CN1l9n-g.js";import"./d3-scale-BYzlom2n.js";import"./index-Coj5AO7r.js";import"./index-D7YhX5lQ.js";import"./renderedTicksSlice-BaDfPCVK.js";import"./index-CC0XKx94.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D9Oal9EV.js";import"./chartDataContext-BjNcuyRP.js";import"./CategoricalChart-Bq1JSSY0.js";import"./CartesianAxis-CSM2PXhl.js";import"./Layer-DzdETfRU.js";import"./Text-BBc8PFQR.js";import"./DOMUtils-DYVcve-D.js";import"./useId-BTmP1k4h.js";import"./useBackwardsCompatibleTheme-CuJrnw16.js";import"./Label-CorAy009.js";import"./ZIndexLayer-CfRVDFXb.js";import"./types-DhKwB64F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DS7eYpzL.js";import"./symbol-DBsI5LTA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DQacgx_s.js";import"./uniqBy-DfpjFZky.js";import"./iteratee-Dk6qS1Wc.js";import"./Curve-Di-YqH3x.js";import"./step-BuRQ76GT.js";import"./AnimatedItems-CrHQSA2B.js";import"./useAnimationId-DBdf0eRq.js";import"./ActivePoints-CCokz9Hm.js";import"./Dot-l8R5dmYj.js";import"./RegisterGraphicalItemId-T7-fSXxk.js";import"./ErrorBarContext-CeKdQ828.js";import"./GraphicalItemClipPath-DlHTJze-.js";import"./SetGraphicalItem-BSvf_Zq8.js";import"./getRadiusAndStrokeWidthFromDot-DcpCddvL.js";import"./ActiveShapeUtils-Ds6IyY6j.js";import"./useGraphicalItemIdentity-Ccoked2c.js";import"./Cross-DtjLt1X8.js";import"./Rectangle-Cg4r9N9p.js";import"./util-Dxo8gN5i.js";import"./Sector-BHAOOcL0.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
