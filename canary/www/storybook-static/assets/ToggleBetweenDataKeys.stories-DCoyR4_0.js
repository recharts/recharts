import{r as n,R as t}from"./iframe-CEnpMkUD.js";import{L as p}from"./LineChart-_LkUkDYN.js";import{R as s}from"./zIndexSlice-05A266o9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cr1ZrP2M.js";import{X as d}from"./XAxis-BSzDUhhq.js";import{Y as y}from"./YAxis-EWhR1Mjx.js";import{L as u}from"./Legend-NUVilUcD.js";import{L as h}from"./Line-CUZbT2fY.js";import{T as g}from"./Tooltip-DaxPQzd-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0XuY0pKu.js";import"./index-D3euSQxt.js";import"./index-By9AGPbV.js";import"./index-BLMKt3XR.js";import"./index-CJbnSVQD.js";import"./throttle-Dmrqe0jJ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DC8u1mMs.js";import"./resolveDefaultProps-BfNWPFnd.js";import"./isWellBehavedNumber-DR4aYfcx.js";import"./d3-scale-Dz-RCPbg.js";import"./renderedTicksSlice-CMfBipfM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-RDTjk-Mf.js";import"./chartDataContext-fs3yspT4.js";import"./CategoricalChart-BbjRWCL9.js";import"./CartesianAxis-kR2Dl0Mj.js";import"./Layer-tgou8wwH.js";import"./Text-BovGSesW.js";import"./DOMUtils-Bq__MZjJ.js";import"./useId-DkQeXuoN.js";import"./useBackwardsCompatibleTheme-Cl8wy0Yl.js";import"./Label-keTZMkCE.js";import"./ZIndexLayer--32eJAmt.js";import"./types-Y-jxBs1c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DJnUr9Nq.js";import"./symbol-BMRcAJHE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfY-qvbk.js";import"./uniqBy-aUHDE_38.js";import"./iteratee-D1Sl_wcT.js";import"./Curve-DIlVUqzk.js";import"./step-CsA2_CTe.js";import"./AnimatedItems-BBWAA05W.js";import"./useAnimationId-CAXeIAhh.js";import"./ActivePoints-CXlwIH8j.js";import"./Dot-YV_AL6ol.js";import"./RegisterGraphicalItemId-CbjDoXD2.js";import"./ErrorBarContext-COjMx0cf.js";import"./GraphicalItemClipPath-CisBO3GG.js";import"./SetGraphicalItem-WHlYrVZg.js";import"./getRadiusAndStrokeWidthFromDot-QUOITjlg.js";import"./ActiveShapeUtils-BUkWWRfj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D83gUzik.js";import"./Rectangle-DwQubN_8.js";import"./util-Dxo8gN5i.js";import"./Sector-RIJvQ7_t.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
