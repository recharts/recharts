import{r as p,R as t}from"./iframe-BobpZpVS.js";import{L as n}from"./LineChart-B_XS8djb.js";import{R as s}from"./zIndexSlice-B5VUc3FO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CuGfEpsz.js";import{X as d}from"./XAxis-BH9jyr1P.js";import{Y as y}from"./YAxis-BrRETyZ5.js";import{L as u}from"./Legend-CGS_rYuE.js";import{L as h}from"./Line-BliFn9Dn.js";import{T as g}from"./Tooltip-D_aCS2jn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DSKVysWi.js";import"./resolveDefaultProps-5KovoEsD.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bu_v2Lbu.js";import"./throttle-fEV8U6G7.js";import"./index-DvsroPxE.js";import"./index-hH2wUpdj.js";import"./isWellBehavedNumber-DQVuNcQo.js";import"./d3-scale-VuFeIDMA.js";import"./index-C6hjAe0R.js";import"./index-CSAFGNBA.js";import"./renderedTicksSlice-BCdbdoOJ.js";import"./index-RL4br-tv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DSfZoi_U.js";import"./chartDataContext-C6lKjqxm.js";import"./CategoricalChart-DkLSs2T9.js";import"./CartesianAxis-BxngHTzr.js";import"./Layer-Clw1CWo5.js";import"./Text-BN-_pQam.js";import"./pageBackground-DetAsOi9.js";import"./useId-Fbd6tkKG.js";import"./useBackwardsCompatibleTheme-BHDQUTNL.js";import"./Label-BmZLFZpv.js";import"./ZIndexLayer-Bl_UcLFa.js";import"./types-C4bXB_C_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CIh84bSt.js";import"./symbol-9WIN_U8L.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B88yDXSB.js";import"./uniqBy-CPmUYUdg.js";import"./iteratee-v_noJUXw.js";import"./Curve-CcNLhp3P.js";import"./step-jQ6ElyLT.js";import"./activeStyles-DmXgXh0p.js";import"./useAnimationId-IPDjwgCP.js";import"./dataEntryStyles-JNlk2hjG.js";import"./ActivePoints-C8uj9bPt.js";import"./Dot--zx8-KPd.js";import"./ErrorBarContext-CJCBopYS.js";import"./GraphicalItemClipPath-DHs6ehgp.js";import"./SetGraphicalItem-BeNFDElG.js";import"./getRadiusAndStrokeWidthFromDot-CIGb04Tt.js";import"./ActiveShapeUtils-FaefHkVT.js";import"./useEffectiveDataKey-CwNvQLsF.js";import"./Cross-CeLxTsAz.js";import"./Rectangle-D8bi7cvO.js";import"./util-Dxo8gN5i.js";import"./Sector-BE7b76Fg.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
