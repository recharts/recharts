import{r as n,R as t}from"./iframe-BQrvPSLN.js";import{L as p}from"./LineChart-B8UiaPpG.js";import{R as s}from"./zIndexSlice-7Hw-ZWkF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BoCTC1f5.js";import{X as d}from"./XAxis-COEcW9k3.js";import{Y as y}from"./YAxis-BdyzdtnU.js";import{L as u}from"./Legend-B9VGxu5U.js";import{L as h}from"./Line-DjugYbR2.js";import{T as g}from"./Tooltip-Bj971vpB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bwj5H6_7.js";import"./resolveDefaultProps-Dldn7S-M.js";import"./get-C2VjdU0L.js";import"./axisSelectors-rztmSPpu.js";import"./throttle-0gn-kluv.js";import"./index-n8L9L6eU.js";import"./index-DCJ-lssY.js";import"./isWellBehavedNumber--jy1hcq-.js";import"./d3-scale-Dpwc0BRN.js";import"./index-C-4Z9rOq.js";import"./index-Cod02e9Y.js";import"./renderedTicksSlice-DgYqXOgC.js";import"./index-JVOuHVdP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bonfnn_6.js";import"./chartDataContext-BgdaUcoV.js";import"./CategoricalChart-DzUyeNOX.js";import"./CartesianAxis-wwQP6TZJ.js";import"./Layer-BL59xEeu.js";import"./Text-CV4rnU1k.js";import"./DOMUtils-DGTFhh_s.js";import"./useId-Cxn74IfF.js";import"./useBackwardsCompatibleTheme-DM-kCCC-.js";import"./Label-fnZYxsAf.js";import"./ZIndexLayer-B-lyDO19.js";import"./types-DmUtaJkc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dopogqan.js";import"./symbol-CmH2wsGM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bi53hePS.js";import"./uniqBy-CbDZKJB_.js";import"./iteratee-zdI_LkTN.js";import"./Curve-BvFQjNVt.js";import"./step-Dz5dQj2m.js";import"./AnimatedItems-DoNW6X9C.js";import"./useAnimationId-DGJmUGW3.js";import"./ActivePoints-DNIiWjQ1.js";import"./Dot-BNdpCbfX.js";import"./RegisterGraphicalItemId-D_J9lCCC.js";import"./ErrorBarContext-M_C8hAbg.js";import"./GraphicalItemClipPath-ZQcwoD7Q.js";import"./SetGraphicalItem-DNCLDvoD.js";import"./getRadiusAndStrokeWidthFromDot-Da7-LUzg.js";import"./ActiveShapeUtils-Ds3BnvmO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BpKvfUtK.js";import"./Rectangle-HVKv7_Bo.js";import"./util-Dxo8gN5i.js";import"./Sector-BE6y_5ku.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
