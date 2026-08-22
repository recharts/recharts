import{r as n,R as t}from"./iframe-BbXL7Cr7.js";import{L as p}from"./LineChart-DO8cGs9-.js";import{R as s}from"./zIndexSlice-BR49NRPU.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CX_zoSHh.js";import{X as d}from"./XAxis-Btj2F3fL.js";import{Y as y}from"./YAxis-BvXQJzoS.js";import{L as u}from"./Legend-B-mkfkLh.js";import{L as h}from"./Line-CIN54Xgr.js";import{T as g}from"./Tooltip-J7PVSXVe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-IiQ6LAia.js";import"./index-Dax1wg5T.js";import"./index-CN5luugM.js";import"./index-CvmUWFik.js";import"./index-BqU8wZ1z.js";import"./throttle-Bn8wVsPr.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BFPpN7bG.js";import"./resolveDefaultProps-DIGEkxJt.js";import"./isWellBehavedNumber-DUOtRF_5.js";import"./d3-scale-CN-R3gXh.js";import"./renderedTicksSlice-BsPa3zOZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DEFHsOHa.js";import"./chartDataContext-HJenhUyy.js";import"./CategoricalChart-D9M8vTvR.js";import"./CartesianAxis-CEc_iNEs.js";import"./Layer-D606BzuS.js";import"./Text-C5yxXkZn.js";import"./DOMUtils-rWy1CvzQ.js";import"./useId-Fqq5zcUf.js";import"./useBackwardsCompatibleTheme-DJFjGyq7.js";import"./Label-BH4Z3dzl.js";import"./ZIndexLayer-C89K7jek.js";import"./types-VwfPPVmd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CE-yqWpF.js";import"./symbol-pCYgDlPb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BwHd0lb7.js";import"./uniqBy-DbN_Kppn.js";import"./iteratee-C6TYOtpK.js";import"./Curve-NdHov05C.js";import"./step-DT7n-Jzc.js";import"./AnimatedItems-BMHffIkc.js";import"./useAnimationId-CZiH3Yfv.js";import"./ActivePoints-DJMU5OQu.js";import"./Dot-CBGeJdvC.js";import"./RegisterGraphicalItemId-Cp-8L8hF.js";import"./ErrorBarContext-C0nXUhFx.js";import"./GraphicalItemClipPath-CSpG8Jrq.js";import"./SetGraphicalItem-BiIYG94Z.js";import"./getRadiusAndStrokeWidthFromDot-BBwYGeYW.js";import"./ActiveShapeUtils-CNVIMFtT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CEQTBLEN.js";import"./Rectangle-D-sTh8XH.js";import"./util-Dxo8gN5i.js";import"./Sector-C6xVrq9L.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
