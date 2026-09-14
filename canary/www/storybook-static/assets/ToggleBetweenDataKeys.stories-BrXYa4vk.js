import{r as p,R as t}from"./iframe-C8hleUub.js";import{L as n}from"./LineChart-D1_N9eUn.js";import{R as s}from"./zIndexSlice-vCE-ybpn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CgFVxxAM.js";import{X as d}from"./XAxis-R1M6mi21.js";import{Y as y}from"./YAxis-abD2mpGE.js";import{L as u}from"./Legend-BZNCHYTe.js";import{L as h}from"./Line-ByuQgILV.js";import{T as g}from"./Tooltip-Vor344cH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_qv-3Hz.js";import"./resolveDefaultProps-K4N7KwiK.js";import"./get-C2VjdU0L.js";import"./axisSelectors-2_wVdrP-.js";import"./throttle-DqZhpB0B.js";import"./index-YGCqGUHr.js";import"./index-Ybsy0-7F.js";import"./isWellBehavedNumber-B3eGUodw.js";import"./d3-scale-5YAUGhno.js";import"./index-BNE3_iNf.js";import"./index-DRei1T7T.js";import"./renderedTicksSlice-NbxY696c.js";import"./index-D7OGaE6M.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BMIYUzX5.js";import"./chartDataContext-CXErNkaS.js";import"./CategoricalChart-ZxlZFsha.js";import"./CartesianAxis-D9UtSAv7.js";import"./Layer-Bnkm0B65.js";import"./Text-CGkuih9W.js";import"./DOMUtils-Chkxh9Pu.js";import"./useId-BChEDpq7.js";import"./useBackwardsCompatibleTheme-D4jGgcPz.js";import"./Label-Dx4oA-8H.js";import"./ZIndexLayer-BFXWo7W3.js";import"./types-CanoAHyf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BmSYL37f.js";import"./symbol-C11Oalrt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BtmZHt_r.js";import"./uniqBy-Czc-xqRe.js";import"./iteratee-BftLTKNs.js";import"./Curve-CIcYFtSq.js";import"./step-DrIu7wrv.js";import"./AnimatedItems-CjbyLJ1n.js";import"./useAnimationId-lPT865ra.js";import"./ActivePoints-CMDHZxxf.js";import"./Dot-CXjyuPw6.js";import"./RegisterGraphicalItemId-BA4uM9gD.js";import"./ErrorBarContext-DZ7sAk5y.js";import"./GraphicalItemClipPath-LpKqTX6v.js";import"./SetGraphicalItem-KHbn2Vk7.js";import"./getRadiusAndStrokeWidthFromDot-DVFiqn2t.js";import"./ActiveShapeUtils-BDBm5gcU.js";import"./useGraphicalItemIdentity-FCLYk-L1.js";import"./Cross-DQsjb1RE.js";import"./Rectangle-BI9aQQPe.js";import"./util-Dxo8gN5i.js";import"./Sector-D28aMowq.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
