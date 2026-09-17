import{r as p,R as t}from"./iframe-Bcl-Wsua.js";import{L as n}from"./LineChart-Bvrg16LK.js";import{R as s}from"./zIndexSlice-CAQaUmZK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B2dFGKDr.js";import{X as d}from"./XAxis-BkzTF5vO.js";import{Y as y}from"./YAxis-DiEiYw2x.js";import{L as u}from"./Legend-BaM8PEnU.js";import{L as h}from"./Line-BYiC1NaN.js";import{T as g}from"./Tooltip-f5YOsvaZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DAZxuN02.js";import"./resolveDefaultProps-Dz58eYC6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-HkZtvUb3.js";import"./throttle-ByTEOgqW.js";import"./index-Byo_Z8h8.js";import"./index-CiCiyWr1.js";import"./isWellBehavedNumber-DyceyyjX.js";import"./d3-scale-Bz3uBv2F.js";import"./index-YOpejnVN.js";import"./index-6jgft-oG.js";import"./renderedTicksSlice-BjEraSyi.js";import"./index-D0zdUyje.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-5huH0yXB.js";import"./chartDataContext-LpcG4P9k.js";import"./CategoricalChart-xwTlxCLL.js";import"./CartesianAxis-C4G_M4Jp.js";import"./Layer-DZWwUS0u.js";import"./Text-82Vb94kC.js";import"./DOMUtils-f-jZlskf.js";import"./useId-B3g5LtRX.js";import"./useBackwardsCompatibleTheme-hNwFldyo.js";import"./Label-CKR6MZGL.js";import"./ZIndexLayer-j6jNc8g-.js";import"./types-DyxZGeRY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BPHmHU6k.js";import"./symbol-CCVwldng.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BS3Hp3MX.js";import"./uniqBy-BBRqX64r.js";import"./iteratee-BOTGeGNB.js";import"./Curve-nBoa-bSt.js";import"./step-D_84ehuK.js";import"./AnimatedItems-Du4sNDn0.js";import"./useAnimationId-CLfnnxh1.js";import"./ActivePoints-DjQ1bPvM.js";import"./Dot-BL8fSCF8.js";import"./RegisterGraphicalItemId-gwGVCH_O.js";import"./ErrorBarContext-Yi3ZPeq6.js";import"./GraphicalItemClipPath-w0-QNnMD.js";import"./SetGraphicalItem-Bv_ZKENs.js";import"./getRadiusAndStrokeWidthFromDot-A7w8EsXG.js";import"./ActiveShapeUtils-BI8YD_7c.js";import"./useGraphicalItemIdentity-BOUOyfoU.js";import"./Cross-CQH5U3p4.js";import"./Rectangle-Cc97JTbq.js";import"./util-Dxo8gN5i.js";import"./Sector-Be7wcIe7.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
