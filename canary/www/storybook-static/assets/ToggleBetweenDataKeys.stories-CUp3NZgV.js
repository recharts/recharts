import{r as p,R as t}from"./iframe-BUclCYGi.js";import{L as n}from"./LineChart-DZMnsQe2.js";import{R as s}from"./zIndexSlice-Cw_uenFh.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CspLYrOZ.js";import{X as d}from"./XAxis-BHZhhSq5.js";import{Y as y}from"./YAxis-DpN8u2C4.js";import{L as u}from"./Legend-CHR3AkWJ.js";import{L as h}from"./Line-B5cqUxCo.js";import{T as g}from"./Tooltip-CP58zDjP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DwnYFdtG.js";import"./resolveDefaultProps-CDaHLq6V.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D1NJ4aqF.js";import"./throttle-SXE1z9w6.js";import"./index-Bn5su_0t.js";import"./index-BQEsNi1X.js";import"./isWellBehavedNumber-DhRe89GX.js";import"./d3-scale-BmoaGtPl.js";import"./index-ChGyrwHq.js";import"./index-gTT2X1bJ.js";import"./renderedTicksSlice-BS7nbOgQ.js";import"./index-BsSpSNv1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C6YloXmX.js";import"./chartDataContext-RCVSOfKr.js";import"./CategoricalChart-mNhIGUHY.js";import"./CartesianAxis-NWR4v8N2.js";import"./Layer-DDGYJVwv.js";import"./Text-CMwjB0Gb.js";import"./DOMUtils-CDNaNL9M.js";import"./useId-Cf0k-OMu.js";import"./useBackwardsCompatibleTheme-D2gq_Aw8.js";import"./Label-BB58AW_H.js";import"./ZIndexLayer-tXuqEnu1.js";import"./types-aN_pljKn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CYpWTU4I.js";import"./symbol-C8sQv5zl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Byj6o50B.js";import"./uniqBy-BzsdVyGP.js";import"./iteratee-7-jp9xNG.js";import"./Curve--oo5YHjc.js";import"./step-CfDvQFtP.js";import"./AnimatedItems-BNylu8US.js";import"./useAnimationId-CydbYcnQ.js";import"./ActivePoints-C2LY5I7a.js";import"./Dot-DxUjT08J.js";import"./RegisterGraphicalItemId-BqK8bbcf.js";import"./ErrorBarContext-CpA0sHX8.js";import"./GraphicalItemClipPath-DAWuVc0K.js";import"./SetGraphicalItem-DrDTFijX.js";import"./getRadiusAndStrokeWidthFromDot-CFQbdYts.js";import"./ActiveShapeUtils-CW3_54sQ.js";import"./useGraphicalItemIdentity-DY8lhZ2G.js";import"./Cross-CO_U7i-0.js";import"./Rectangle-BBHVBl_F.js";import"./util-Dxo8gN5i.js";import"./Sector-Bu1Ob-nK.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
