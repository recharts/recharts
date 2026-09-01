import{r as n,R as t}from"./iframe-Dk9ZDdT1.js";import{L as p}from"./LineChart-DWznxct4.js";import{R as s}from"./zIndexSlice-DeceblpS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B7u57R78.js";import{X as d}from"./XAxis-A_28Fvyn.js";import{Y as y}from"./YAxis-BG4jVm_S.js";import{L as u}from"./Legend-CCsIj-6h.js";import{L as h}from"./Line-CTBd3E56.js";import{T as g}from"./Tooltip-DxRWiHMA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DP2ymT_2.js";import"./resolveDefaultProps-zYTWecoa.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DxLef304.js";import"./throttle-DIOOZof0.js";import"./index-CmUfEz5q.js";import"./index-B2rutIU6.js";import"./isWellBehavedNumber-CxvtDvRb.js";import"./d3-scale-MpKXBNtT.js";import"./index-BxlkNIur.js";import"./index-bvujDpj7.js";import"./renderedTicksSlice-Ckrd08To.js";import"./index-DbhjdF6k.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DIP7sg4A.js";import"./chartDataContext-QSp1AmWQ.js";import"./CategoricalChart-Bx3cIM0F.js";import"./CartesianAxis-DltOMyOx.js";import"./Layer-DmyqVj_Z.js";import"./Text-DxLESXkZ.js";import"./DOMUtils-BpNuC4xp.js";import"./useId-DehfeINH.js";import"./useBackwardsCompatibleTheme-C4vQm8Qy.js";import"./Label-B5fu-9Ux.js";import"./ZIndexLayer-DeueZom8.js";import"./types-B5p8Vh7N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-COFyOQ-q.js";import"./symbol-C02v1ewE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KhQd1oWd.js";import"./uniqBy-CX3aiEBe.js";import"./iteratee-CvAqSA3n.js";import"./Curve-1m4xWofF.js";import"./step-CLhWgX2G.js";import"./AnimatedItems-BJxfKwUv.js";import"./useAnimationId-Br2uK6cb.js";import"./ActivePoints-FU3V29Uc.js";import"./Dot-Dxbx8gos.js";import"./RegisterGraphicalItemId-z6QxmQfF.js";import"./ErrorBarContext-BvizcH0k.js";import"./GraphicalItemClipPath-CdL4vBCz.js";import"./SetGraphicalItem-BbnWj2u0.js";import"./getRadiusAndStrokeWidthFromDot-CO6bt368.js";import"./ActiveShapeUtils-EOWKKtqz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-Pm4B82Mc.js";import"./Rectangle-Cb1y9t4l.js";import"./util-Dxo8gN5i.js";import"./Sector-DlwIDXc0.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
