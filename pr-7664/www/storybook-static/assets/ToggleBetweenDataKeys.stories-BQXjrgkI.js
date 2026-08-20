import{r as n,R as t}from"./iframe-BB2cSF8T.js";import{L as p}from"./LineChart-BoM4P_vX.js";import{R as s}from"./zIndexSlice-Ck0CRfK_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BkpWEDC_.js";import{X as d}from"./XAxis-DwBzx4b3.js";import{Y as y}from"./YAxis-CMkp761K.js";import{L as u}from"./Legend-Bg34nPWt.js";import{L as h}from"./Line-DAcc-yk_.js";import{T as g}from"./Tooltip-rc2r0gI0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkB_KEzo.js";import"./index-MTvadirX.js";import"./index-DyAmptVd.js";import"./index-EzV7mwgL.js";import"./index-DofPxVLY.js";import"./throttle-nMA59eYs.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BurdOGu6.js";import"./resolveDefaultProps-DjeWZstQ.js";import"./isWellBehavedNumber-BQXiM-z-.js";import"./d3-scale-C3zxZmRj.js";import"./renderedTicksSlice-lUF_NPm1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ChdkOd-C.js";import"./chartDataContext-CB4jnkAv.js";import"./CategoricalChart-DAFEAISl.js";import"./CartesianAxis-BWqAGBTh.js";import"./Layer-LVpAC3_2.js";import"./Text-Bwx_fWQU.js";import"./DOMUtils-yFTvziLR.js";import"./useId-D4zb9cEW.js";import"./useBackwardsCompatibleTheme-g8RWGYmo.js";import"./Label-BZkQksct.js";import"./ZIndexLayer-DbM1bO0L.js";import"./types-ChWRaT57.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CyMSTzZI.js";import"./symbol-D3j02ylc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Mg-Nq6uP.js";import"./uniqBy-CkqXGP9K.js";import"./iteratee-DMriX-zr.js";import"./Curve-C11_GYZZ.js";import"./step-BWHrm9dE.js";import"./AnimatedItems-0WotYsMt.js";import"./useAnimationId-C8wX-p7z.js";import"./ActivePoints-CuAhK7lR.js";import"./Dot-byNEGz8Q.js";import"./RegisterGraphicalItemId-Bts6fFM2.js";import"./ErrorBarContext-DNeGzoAb.js";import"./GraphicalItemClipPath-CT1W7nLy.js";import"./SetGraphicalItem-Ct2uSDpP.js";import"./getRadiusAndStrokeWidthFromDot-eavX8tOz.js";import"./ActiveShapeUtils-Uvcq9QCX.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D7-z2vjD.js";import"./Rectangle-D-ZdRLCN.js";import"./util-Dxo8gN5i.js";import"./Sector-DR9-vfw9.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
