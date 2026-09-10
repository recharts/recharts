import{r as p,R as t}from"./iframe-CCc4Ig9t.js";import{L as n}from"./LineChart-B4YAmlau.js";import{R as s}from"./zIndexSlice-1P0wH6mw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BRYP-euc.js";import{X as d}from"./XAxis-B7UFXjXO.js";import{Y as y}from"./YAxis-BglDyQ9K.js";import{L as u}from"./Legend-C4s_iYBR.js";import{L as h}from"./Line-CXz5YjBC.js";import{T as g}from"./Tooltip-_zZ2gT0C.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cz1O2LQ_.js";import"./resolveDefaultProps-VNAAgVLt.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DPq5qkhW.js";import"./throttle-BYOhzTjU.js";import"./index-D-887qgc.js";import"./index-CZthC9SS.js";import"./isWellBehavedNumber-BwK7Fikb.js";import"./d3-scale-DD504LTb.js";import"./index-DP3dQjsk.js";import"./index-BMcDiNhW.js";import"./renderedTicksSlice-DEDWHMPA.js";import"./index-G3ylxvqW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-LpLVhPdZ.js";import"./chartDataContext-q63OH3iY.js";import"./CategoricalChart-Bf4qEJ6P.js";import"./CartesianAxis-Bp_xQTZ6.js";import"./Layer-CI2wc1Xr.js";import"./Text-Cj4kK8yu.js";import"./DOMUtils-Df_Ucl3X.js";import"./useId-CLSpndMM.js";import"./useBackwardsCompatibleTheme-BVGIiR_X.js";import"./Label-DTpe6J5w.js";import"./ZIndexLayer-BPtrp-aJ.js";import"./types-DJtqKg77.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CbvdSNpg.js";import"./symbol-B3VhryUs.js";import"./path-DyVhHtw_.js";import"./useElementOffset--AK27c3n.js";import"./uniqBy-D8aeMkbi.js";import"./iteratee-BQkyZMdx.js";import"./Curve-BvVtw5_4.js";import"./step-CwrGAB68.js";import"./AnimatedItems-Ca5Obh5D.js";import"./useAnimationId-ClzD5z7x.js";import"./ActivePoints-DjcQylVy.js";import"./Dot-ATZOOaE7.js";import"./RegisterGraphicalItemId-BnnRsli9.js";import"./ErrorBarContext-Buf_Z21J.js";import"./GraphicalItemClipPath-BbHKpjF5.js";import"./SetGraphicalItem-Bpek28vv.js";import"./getRadiusAndStrokeWidthFromDot-Ce6GbVl8.js";import"./ActiveShapeUtils-BtdS6G9Z.js";import"./useGraphicalItemIdentity-Ckfzcm_J.js";import"./Cross-BaBAe1FW.js";import"./Rectangle-sHtjAWaW.js";import"./util-Dxo8gN5i.js";import"./Sector-ByPik4Rg.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
