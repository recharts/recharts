import{r as p,R as t}from"./iframe-DlBA_NHD.js";import{L as n}from"./LineChart-Dc89kjfO.js";import{R as s}from"./zIndexSlice-BOYVZGeR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-_pYFmvqD.js";import{X as d}from"./XAxis-CN5TgDqJ.js";import{Y as y}from"./YAxis-B5aZasbZ.js";import{L as u}from"./Legend-CLPSwn_J.js";import{L as h}from"./Line-apD60rO_.js";import{T as g}from"./Tooltip--Y-ls0Bw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-hVJCe5PM.js";import"./resolveDefaultProps-C8Ozokz2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CON7ryxt.js";import"./throttle-EeT9c_n_.js";import"./index-2M50Q2uq.js";import"./index-CsNZB3UM.js";import"./isWellBehavedNumber-BHQR8F7C.js";import"./d3-scale-nBoiSLy0.js";import"./index-Bc4bnspn.js";import"./index-BgT2sRhI.js";import"./renderedTicksSlice-BAGWAjRI.js";import"./index-B9Sew5zo.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DNfpc-WW.js";import"./chartDataContext-Dz5AUJl-.js";import"./CategoricalChart-YMws6pgL.js";import"./CartesianAxis-C833i1Hp.js";import"./Layer-DLKMiHzQ.js";import"./Text-CICH4fLL.js";import"./DOMUtils-B-Y8jIku.js";import"./useId-DfZYzD58.js";import"./useBackwardsCompatibleTheme-DZYIoyAk.js";import"./Label-Bdz7xSee.js";import"./ZIndexLayer-R1mFVhfI.js";import"./types-CqsOLULy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BgaBOx_k.js";import"./symbol-CzVP89M7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CqxEVlyX.js";import"./uniqBy-1Xh4LtIK.js";import"./iteratee-D-EbqcpX.js";import"./Curve-DRH1VSH_.js";import"./step-BzPuQicN.js";import"./AnimatedItems-KG4Q9B6N.js";import"./useAnimationId-ZOIa2F-P.js";import"./ActivePoints-B_ryvrm8.js";import"./Dot-coVzMkTm.js";import"./RegisterGraphicalItemId-DYXz-Xt3.js";import"./ErrorBarContext-ZM-eyTPM.js";import"./GraphicalItemClipPath-CLhUFps9.js";import"./SetGraphicalItem-0kKuUivG.js";import"./getRadiusAndStrokeWidthFromDot-CuoUyQpF.js";import"./ActiveShapeUtils-BF0jq83h.js";import"./useGraphicalItemIdentity-DwrMS_39.js";import"./Cross-7WT4Tp6d.js";import"./Rectangle-oI5YaF0F.js";import"./util-Dxo8gN5i.js";import"./Sector-JXpynQLH.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
