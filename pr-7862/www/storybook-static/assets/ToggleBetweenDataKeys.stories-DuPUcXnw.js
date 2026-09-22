import{r as p,R as t}from"./iframe-DaQbgwSM.js";import{L as n}from"./LineChart-gOl0_kkK.js";import{R as s}from"./zIndexSlice-GtlpPVbP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BaDvzjUn.js";import{X as d}from"./XAxis-Dwi6B5gb.js";import{Y as y}from"./YAxis-DJNfgCPe.js";import{L as u}from"./Legend-DzwOaoA_.js";import{L as h}from"./Line-BQic4Z5R.js";import{T as g}from"./Tooltip-BQZ3CNSI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMsAihAT.js";import"./resolveDefaultProps-C03kBNGe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DiPrK3uM.js";import"./throttle-D86JN7dt.js";import"./index-fR-dYqAy.js";import"./index-pcae8h2v.js";import"./isWellBehavedNumber-CF6bOuRt.js";import"./d3-scale-C28Mr6C_.js";import"./index-B9PrDzsD.js";import"./index-C_QxJfjv.js";import"./renderedTicksSlice-BBiwG0aF.js";import"./index-DVT6pdU4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DWDjryZ8.js";import"./chartDataContext-C5kvJ464.js";import"./CategoricalChart-D9AKOXtI.js";import"./CartesianAxis-Dd7LPnIK.js";import"./Layer-Dy562RhS.js";import"./Text-6pf8QaaJ.js";import"./DOMUtils-B-aaPPhR.js";import"./useId-C9TE6S2g.js";import"./useBackwardsCompatibleTheme-jIXNHWAs.js";import"./Label-BMF2NwhK.js";import"./ZIndexLayer-e1DF3LHV.js";import"./types-BrU75Oof.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C4k0V28S.js";import"./symbol-D1P_EmQR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D2-2eyIk.js";import"./uniqBy-Bqm10COm.js";import"./iteratee-CZBTSYNz.js";import"./Curve-_5Fn1COl.js";import"./step-C8sn29Vk.js";import"./AnimatedItems-BlzsOhEO.js";import"./useAnimationId-BjF9VJ68.js";import"./ActivePoints-oBCdZOS2.js";import"./Dot-C7TPiZG8.js";import"./RegisterGraphicalItemId-Clsr70g_.js";import"./ErrorBarContext-B2kb74U-.js";import"./GraphicalItemClipPath-D0ATNOOi.js";import"./SetGraphicalItem-HJSDm9m5.js";import"./getRadiusAndStrokeWidthFromDot-3aetdsat.js";import"./ActiveShapeUtils-CrKaudC-.js";import"./useGraphicalItemIdentity-CLitx1ml.js";import"./Cross-DSdbtvKr.js";import"./Rectangle-C77_7Qyp.js";import"./util-Dxo8gN5i.js";import"./Sector-BTnt08UU.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
