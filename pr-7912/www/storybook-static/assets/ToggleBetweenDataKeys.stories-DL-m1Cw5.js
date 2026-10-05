import{r as p,R as t}from"./iframe-zVk88q-r.js";import{L as n}from"./LineChart-DqQWellH.js";import{R as s}from"./zIndexSlice-DfutBn7L.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ChAwnnD8.js";import{X as d}from"./XAxis-DfHugD0J.js";import{Y as y}from"./YAxis-BU4R0oLg.js";import{L as u}from"./Legend-O59i4-Ol.js";import{L as h}from"./Line-cW_DbcN0.js";import{T as g}from"./Tooltip-yI4F6phI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0-bRbC3.js";import"./resolveDefaultProps-B_GPAkFH.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CmXBEtTu.js";import"./throttle-BmkgAj5t.js";import"./index-DsALRTV8.js";import"./index-Bk0bK2TA.js";import"./isWellBehavedNumber-C-ZPk_Xp.js";import"./d3-scale-CFGG9Jl0.js";import"./index-fUo0OINa.js";import"./index-DlbGxR67.js";import"./renderedTicksSlice-BX5u_Wlp.js";import"./index-C7LumEWu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CaeWlYzw.js";import"./chartDataContext-2A6w0qLe.js";import"./CategoricalChart-DJLnAv9C.js";import"./CartesianAxis-CfxKlxox.js";import"./Layer-lcnk2Jvi.js";import"./Text-Nx4ACQwF.js";import"./DOMUtils-Dnj4_Ujh.js";import"./useId-BC8SsZ2L.js";import"./useBackwardsCompatibleTheme-BjS2fGJi.js";import"./Label-CrnAbRyD.js";import"./ZIndexLayer-r6epNlFr.js";import"./types-gJ-qKTie.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CCBoxX71.js";import"./symbol-BjLCTHgg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dc53Yk5t.js";import"./uniqBy-54ckHNjc.js";import"./iteratee-CnMF74mw.js";import"./Curve-CDtDqQyg.js";import"./step-CBXY0TZz.js";import"./AnimatedItems-CE9fFFYl.js";import"./useAnimationId-DztKFKRO.js";import"./ActivePoints-D0FJzWSP.js";import"./Dot-DByu-vHs.js";import"./RegisterGraphicalItemId-DbfLY7XL.js";import"./ErrorBarContext-DAwElSG5.js";import"./GraphicalItemClipPath-BL0H_9p-.js";import"./SetGraphicalItem-1sdGamMS.js";import"./getRadiusAndStrokeWidthFromDot-BohBFAZA.js";import"./ActiveShapeUtils-a-OI7kZz.js";import"./useGraphicalItemIdentity-D7Hr4JLm.js";import"./Cross-DBsBm5TM.js";import"./Rectangle-o8c6UGkH.js";import"./util-Dxo8gN5i.js";import"./Sector-CaIcWj5Y.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
