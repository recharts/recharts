import{r as n,R as t}from"./iframe-zwg8Ck3J.js";import{L as p}from"./LineChart-B6jLLgSu.js";import{R as s}from"./zIndexSlice-NosrfnoV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CrVK4PBC.js";import{X as d}from"./XAxis-DImn2N-Q.js";import{Y as y}from"./YAxis-DeKq7CDg.js";import{L as u}from"./Legend-ITrt0eTY.js";import{L as h}from"./Line-SbcmXKdw.js";import{T as g}from"./Tooltip-DtLFdUd9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJ_EMk4a.js";import"./index-CbO-5G1T.js";import"./index-DgDwqqQh.js";import"./index-IvyDBjKP.js";import"./index-OSBoZXok.js";import"./throttle-Ba88YkIO.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B51wYZzi.js";import"./resolveDefaultProps-DG88vi2D.js";import"./isWellBehavedNumber-CwtCjuBS.js";import"./d3-scale-BoLYoZ-J.js";import"./renderedTicksSlice-Df0H0Vcu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJ82atYN.js";import"./chartDataContext-BLU5FY0s.js";import"./CategoricalChart-COKLxFKu.js";import"./CartesianAxis-B8LFrX_I.js";import"./Layer-BMjk1XnO.js";import"./Text-B5wvjkWp.js";import"./DOMUtils-DeVFgjhY.js";import"./useId-BhnbWZv2.js";import"./useBackwardsCompatibleTheme-CUoFrMEf.js";import"./Label-Bd61VRBp.js";import"./ZIndexLayer-B0otcv7p.js";import"./types-Cw6qbFf6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C-A3ojDn.js";import"./symbol-DekAy-hh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B9wTk-zI.js";import"./uniqBy-Goa-fjnL.js";import"./iteratee-RZACf7Ss.js";import"./Curve-DTQAtFrE.js";import"./step-CQ4et_T9.js";import"./AnimatedItems-m2rS7Ine.js";import"./useAnimationId-CNfugt_c.js";import"./ActivePoints-COOLxxHx.js";import"./Dot-Cd6zRWlN.js";import"./RegisterGraphicalItemId-BdhGFYIv.js";import"./ErrorBarContext-DQaSvvRh.js";import"./GraphicalItemClipPath-DzwEZpNn.js";import"./SetGraphicalItem-C-Nezax8.js";import"./getRadiusAndStrokeWidthFromDot-5Aw72VVf.js";import"./ActiveShapeUtils-CVVSTnC5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-zfAxRZxM.js";import"./Rectangle-EFaYZ8RA.js";import"./util-Dxo8gN5i.js";import"./Sector-DCY3Dtrz.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
