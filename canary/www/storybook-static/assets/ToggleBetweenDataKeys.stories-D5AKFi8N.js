import{r as p,R as t}from"./iframe-Xtjdy8K6.js";import{L as n}from"./LineChart-BSAgiykc.js";import{R as s}from"./zIndexSlice-Ca3_di9O.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CpXgFykN.js";import{X as d}from"./XAxis-Dsuy05EW.js";import{Y as y}from"./YAxis-C0P2yrRK.js";import{L as u}from"./Legend-BWy8kwYj.js";import{L as h}from"./Line-ClPESsPf.js";import{T as g}from"./Tooltip-BaBPOWSY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLU1mxV-.js";import"./resolveDefaultProps-Boep7u7P.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CubJTdeO.js";import"./throttle-BJfO_UKv.js";import"./index-CD-q9qaf.js";import"./index-I4ONaVXX.js";import"./isWellBehavedNumber-CZ785SIV.js";import"./d3-scale-DZ-m0TzD.js";import"./index-BwTAVpnp.js";import"./index-DLvKfnax.js";import"./renderedTicksSlice-BtArWvvy.js";import"./index-Cf61T-z_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-uyYSGYFX.js";import"./chartDataContext-h8VmgL2W.js";import"./CategoricalChart-BG0XVVA5.js";import"./CartesianAxis-CmHtOK-l.js";import"./Layer-FeyHjh4s.js";import"./Text-LNKD3nQn.js";import"./DOMUtils-BmMu5huz.js";import"./useId-DBEZo7IS.js";import"./useBackwardsCompatibleTheme-JVp1trOZ.js";import"./Label-BQUl4kmN.js";import"./ZIndexLayer-B714zacF.js";import"./types-DxDlUmLu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BCh1_Gtu.js";import"./symbol-CsXV0QLt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DRzU6VaK.js";import"./uniqBy-C0abLPcx.js";import"./iteratee-CxPVqHqK.js";import"./Curve-_q4HdrfF.js";import"./step-C43hkdfh.js";import"./AnimatedItems-CiMNNQac.js";import"./useAnimationId-CuSCtoXZ.js";import"./ActivePoints-B88QV3Sj.js";import"./Dot-D52dYvYg.js";import"./RegisterGraphicalItemId-5IcKOSXK.js";import"./ErrorBarContext-DcFzK2E8.js";import"./GraphicalItemClipPath-CULhMThP.js";import"./SetGraphicalItem-BUfBrIkK.js";import"./getRadiusAndStrokeWidthFromDot-DLeCgjsD.js";import"./ActiveShapeUtils-kAxIXwKe.js";import"./useGraphicalItemIdentity-BFTytd0c.js";import"./Cross-BOVKbuFH.js";import"./Rectangle-BLk0GJfh.js";import"./util-Dxo8gN5i.js";import"./Sector-BUmVWEQm.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
