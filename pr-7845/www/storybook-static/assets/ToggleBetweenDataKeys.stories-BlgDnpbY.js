import{r as p,R as t}from"./iframe-DKiAUKfj.js";import{L as n}from"./LineChart-DP8IFttT.js";import{R as s}from"./zIndexSlice-DRDYTCs-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CbvomsAs.js";import{X as d}from"./XAxis-BHxip6nG.js";import{Y as y}from"./YAxis-CPqJ1LPY.js";import{L as u}from"./Legend-C9YapKWg.js";import{L as h}from"./Line-6oCir5Dk.js";import{T as g}from"./Tooltip-62Dqd3SI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-V6OGhvVE.js";import"./resolveDefaultProps-wQyeqB4t.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CgDB5I1Y.js";import"./throttle-C4io43Xn.js";import"./index-B0JUl7NQ.js";import"./index-CGte46WL.js";import"./isWellBehavedNumber-BQkgEIAs.js";import"./d3-scale-DhJR9ZRz.js";import"./index-D64JEJSP.js";import"./index-BZWqRos3.js";import"./renderedTicksSlice-BJG2XwKW.js";import"./index-CTMR6STe.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BTQ_MHvG.js";import"./chartDataContext-CVDaw3GU.js";import"./CategoricalChart-DJIGb7_j.js";import"./CartesianAxis-C20v2lN6.js";import"./Layer-TOA8EzlX.js";import"./Text-DzjLOXSn.js";import"./DOMUtils-kE23eB48.js";import"./useId-DXDEV1Zs.js";import"./useBackwardsCompatibleTheme-Bntz2N2r.js";import"./Label-BqJsTdph.js";import"./ZIndexLayer-Cu2kJPTs.js";import"./types-CesjT3HQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DNiqT9Oi.js";import"./symbol-cWeA-9da.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CfjQprQ-.js";import"./uniqBy-BRiSgWCU.js";import"./iteratee-DYj_iQuR.js";import"./Curve-NEEyYudm.js";import"./step-DrkPABVT.js";import"./AnimatedItems-CPnSyqXV.js";import"./useAnimationId-D05enbBD.js";import"./ActivePoints-loRSqDJl.js";import"./Dot-B085JP8i.js";import"./RegisterGraphicalItemId-DL0AdrUW.js";import"./ErrorBarContext-CdB3k_cz.js";import"./GraphicalItemClipPath-DJ7nq7QD.js";import"./SetGraphicalItem-B2eXT-xm.js";import"./getRadiusAndStrokeWidthFromDot-Bn_cXEBB.js";import"./ActiveShapeUtils-CameuY1c.js";import"./useGraphicalItemIdentity-BklSfqcr.js";import"./Cross-CxyMpGOk.js";import"./Rectangle-C3_ltPRK.js";import"./util-Dxo8gN5i.js";import"./Sector-gklvmQfA.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
