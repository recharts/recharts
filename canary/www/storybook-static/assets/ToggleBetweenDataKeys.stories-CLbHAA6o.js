import{r as p,R as t}from"./iframe-CeCOqiJm.js";import{L as n}from"./LineChart-DaRNR3kd.js";import{R as s}from"./zIndexSlice-DdaMb5XG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-U2exIhj8.js";import{X as d}from"./XAxis-C64KB_q-.js";import{Y as y}from"./YAxis-A7bYD_ch.js";import{L as u}from"./Legend-NBKfN6k5.js";import{L as h}from"./Line-C5ZRb_5H.js";import{T as g}from"./Tooltip-B4kC64qA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkI5rWg4.js";import"./resolveDefaultProps-CkuoYXav.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DY_V65z5.js";import"./throttle-Bex5NkUv.js";import"./index-B9TMiPeS.js";import"./index-Dpi_zLnO.js";import"./isWellBehavedNumber-B7aD_M3c.js";import"./d3-scale-Cd6mqy1G.js";import"./index-D0EsppEB.js";import"./index-DrQMD2ku.js";import"./renderedTicksSlice-Bncz9dIB.js";import"./index-DRO0vfdx.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DsDUvZ6B.js";import"./chartDataContext-CJlR_4xR.js";import"./CategoricalChart-DiPqSwwe.js";import"./CartesianAxis-VCLAEQIg.js";import"./Layer-DpcMSheP.js";import"./Text-DDswsbtv.js";import"./DOMUtils-BCUi_GUC.js";import"./useId-Bah-b0hR.js";import"./useBackwardsCompatibleTheme-C_9NEiLi.js";import"./Label-Xd_rxrmK.js";import"./ZIndexLayer-BQtw6wpF.js";import"./types-m_9hz0N1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DQqX5H-U.js";import"./symbol-DkOFKYHt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CZclPecY.js";import"./uniqBy-BFlog4hA.js";import"./iteratee-DngjopU3.js";import"./Curve-ig6Db0bN.js";import"./step-D1fpC4Ci.js";import"./AnimatedItems-Di-68duO.js";import"./useAnimationId-CPtx5Z6n.js";import"./ActivePoints-BK3_tt-0.js";import"./Dot-DoByF9sv.js";import"./RegisterGraphicalItemId-BNFTgn8t.js";import"./ErrorBarContext-C_Gf5gdw.js";import"./GraphicalItemClipPath-CNDfJ_fQ.js";import"./SetGraphicalItem-DcgFqiOy.js";import"./getRadiusAndStrokeWidthFromDot-r7hnUPNX.js";import"./ActiveShapeUtils-FS6Mn2Zl.js";import"./useGraphicalItemIdentity-BZQpyUJc.js";import"./Cross-BSxKHq8j.js";import"./Rectangle-Td5JxEu-.js";import"./util-Dxo8gN5i.js";import"./Sector-CiPHfOJS.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
