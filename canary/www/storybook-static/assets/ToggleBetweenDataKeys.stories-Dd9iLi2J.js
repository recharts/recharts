import{r as n,R as t}from"./iframe-J2FnkNkN.js";import{L as p}from"./LineChart-D1kBRbrQ.js";import{R as s}from"./zIndexSlice-CIfx3dbz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BFUC7PPJ.js";import{X as d}from"./XAxis-9YTS4CGv.js";import{Y as y}from"./YAxis-DtzyVJ31.js";import{L as u}from"./Legend-D-Zhozxt.js";import{L as h}from"./Line-BrRmSeyv.js";import{T as g}from"./Tooltip-Dg32n1R1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-tuonj_dH.js";import"./index-udl5h_c3.js";import"./index-B1zoM-7H.js";import"./index-DOkoL7Wj.js";import"./index-DRH1Q61C.js";import"./throttle-Dd6uK12C.js";import"./get-C2VjdU0L.js";import"./axisSelectors-XOgqlW54.js";import"./resolveDefaultProps-C36Ti6I7.js";import"./isWellBehavedNumber-Bda2kxwI.js";import"./d3-scale-BnVmKfe4.js";import"./renderedTicksSlice-uiaDKKzv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-7orgvIwE.js";import"./chartDataContext-DsIZ8kzc.js";import"./CategoricalChart-Dws3VtHh.js";import"./CartesianAxis-yBNynPDV.js";import"./Layer-B9c44e16.js";import"./Text-DoArQ2iR.js";import"./DOMUtils-DrtZ7889.js";import"./useId-BqCnyWtn.js";import"./useBackwardsCompatibleTheme-iB5pgxqo.js";import"./Label-Bl3T8NIS.js";import"./ZIndexLayer-BcQVAnhI.js";import"./types-cmsIqA-S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D6nbCmzg.js";import"./symbol-Cnvzar8t.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CcIe0GmH.js";import"./uniqBy-HD7GgsnH.js";import"./iteratee-Bg0tlSUT.js";import"./Curve-CNSL121i.js";import"./step-B2sXv2yh.js";import"./AnimatedItems-DaE3ZoZL.js";import"./useAnimationId-B8FTTFdD.js";import"./ActivePoints-Cu9CSGsi.js";import"./Dot-BQU71g_n.js";import"./RegisterGraphicalItemId-4W54GOXR.js";import"./ErrorBarContext-nAJ3rKAi.js";import"./GraphicalItemClipPath-BR02B87f.js";import"./SetGraphicalItem-B2-Omghc.js";import"./getRadiusAndStrokeWidthFromDot-DwBzFWb4.js";import"./ActiveShapeUtils-DbeW4ISg.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BRmVujOL.js";import"./Rectangle-B_K-GkWm.js";import"./util-Dxo8gN5i.js";import"./Sector-CpcwYh-j.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
