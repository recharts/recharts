import{r as p,R as t}from"./iframe-C1V3amVF.js";import{L as n}from"./LineChart-yx4aL11e.js";import{R as s}from"./zIndexSlice-CxDitcfM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-iPOUv6eS.js";import{X as d}from"./XAxis-CUJJeScp.js";import{Y as y}from"./YAxis-CCWiCDwe.js";import{L as u}from"./Legend-DYuR-vxK.js";import{L as h}from"./Line-DBox68tq.js";import{T as g}from"./Tooltip-DwozMVE2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cc-bEMHs.js";import"./resolveDefaultProps-maTY1UNo.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BX0vcNuG.js";import"./throttle-DLY36_v2.js";import"./index-B41u_h9l.js";import"./index-B4ZIiFXx.js";import"./isWellBehavedNumber-sSvUiVa0.js";import"./d3-scale-BOUMSuvG.js";import"./index-CssId3o7.js";import"./index-DnibiSA_.js";import"./renderedTicksSlice-D9YwC06X.js";import"./index-BGhjEBZe.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-6UNv2iJv.js";import"./chartDataContext-CaPayD00.js";import"./CategoricalChart-B25IDucc.js";import"./CartesianAxis-DtpXHVOF.js";import"./Layer-BYwPbOg9.js";import"./Text-C-wx4MGw.js";import"./DOMUtils-BorqH6Wm.js";import"./useId-CqxK22LB.js";import"./useBackwardsCompatibleTheme-DW9fdEyu.js";import"./Label-B5Mwu39-.js";import"./ZIndexLayer-3Hvhzeb3.js";import"./types-BJLf6sJx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DCPONZ93.js";import"./symbol-DsoNMZia.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cvn3bpJq.js";import"./uniqBy-CIEuKI_-.js";import"./iteratee-DBOMspHe.js";import"./Curve-DehrnztG.js";import"./step-DAx8CwGE.js";import"./AnimatedItems-aGWDQ20-.js";import"./useAnimationId-CfyL2S79.js";import"./ActivePoints-DuRb2Tsi.js";import"./Dot-CjGXKiL0.js";import"./RegisterGraphicalItemId-DC_0c8kg.js";import"./ErrorBarContext-BBO43QIU.js";import"./GraphicalItemClipPath-CMqb799B.js";import"./SetGraphicalItem-BaWbpx0v.js";import"./getRadiusAndStrokeWidthFromDot-m1wPeMBb.js";import"./ActiveShapeUtils-MAleYnD7.js";import"./useGraphicalItemIdentity-DMF19NMJ.js";import"./Cross-BReV1fvT.js";import"./Rectangle-D28FxDHn.js";import"./util-Dxo8gN5i.js";import"./Sector-Dx9uw-JU.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
