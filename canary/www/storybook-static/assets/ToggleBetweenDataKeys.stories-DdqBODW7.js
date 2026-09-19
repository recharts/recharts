import{r as p,R as t}from"./iframe-RJgsiaPL.js";import{L as n}from"./LineChart-D5z6XZDg.js";import{R as s}from"./zIndexSlice-CaPb3BS1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DdILdtqv.js";import{X as d}from"./XAxis-D1NHLWzc.js";import{Y as y}from"./YAxis-BC94qFyI.js";import{L as u}from"./Legend-BpJRPX2Z.js";import{L as h}from"./Line-DaDTKpZD.js";import{T as g}from"./Tooltip-DLD8jhoi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rp6dEN_z.js";import"./resolveDefaultProps-B7TAC97Z.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BvLTD4U6.js";import"./throttle-2XjV57Y3.js";import"./index-CUt9-oqi.js";import"./index-CYBMXNtj.js";import"./isWellBehavedNumber-BCdm_Taf.js";import"./d3-scale-a8xW28JY.js";import"./index-DvWZFtCS.js";import"./index-Bde12l31.js";import"./renderedTicksSlice-AZZMQyv9.js";import"./index-CETpxp5N.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJVuJ2_B.js";import"./chartDataContext-DMrvaJTD.js";import"./CategoricalChart-BIS8XmXt.js";import"./CartesianAxis-BXFp-lIC.js";import"./Layer-CDx7YXT6.js";import"./Text-DZ5ZEdji.js";import"./DOMUtils-BwBerndY.js";import"./useId-D3absDYU.js";import"./useBackwardsCompatibleTheme-DcNVN6Kh.js";import"./Label-DPnPk4i3.js";import"./ZIndexLayer-BoWVhfOi.js";import"./types-C_mapbFf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BfkRpYNl.js";import"./symbol-bC4XhbYr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ZiVaw6LG.js";import"./uniqBy-DLupEHg_.js";import"./iteratee-DLy57EFC.js";import"./Curve-CFCl1kCW.js";import"./step-K1SJUhGX.js";import"./AnimatedItems-Ct76uSB6.js";import"./useAnimationId-DsRwG-rm.js";import"./ActivePoints-B4kNxET0.js";import"./Dot-RwYGEtPS.js";import"./RegisterGraphicalItemId-CnzhIxcb.js";import"./ErrorBarContext-CV0SzBCK.js";import"./GraphicalItemClipPath-BmrXFZmB.js";import"./SetGraphicalItem-D4Kx71sv.js";import"./getRadiusAndStrokeWidthFromDot-BnbceeR1.js";import"./ActiveShapeUtils-BQ-YCn0D.js";import"./useGraphicalItemIdentity-BL8Yfc_I.js";import"./Cross-D6ax-tR9.js";import"./Rectangle-0ZcZVEk0.js";import"./util-Dxo8gN5i.js";import"./Sector-Cu3Rz7Q0.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
