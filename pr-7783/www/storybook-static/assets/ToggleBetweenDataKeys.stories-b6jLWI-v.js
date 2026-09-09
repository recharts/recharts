import{r as p,R as t}from"./iframe-DzgNGLlq.js";import{L as n}from"./LineChart-4gvp03GY.js";import{R as s}from"./zIndexSlice-CTnIst4D.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BY9FXplk.js";import{X as d}from"./XAxis-Cw-Rs66g.js";import{Y as y}from"./YAxis-TE47wPZ7.js";import{L as u}from"./Legend-CCVMTi1z.js";import{L as h}from"./Line-DUp_JOgK.js";import{T as g}from"./Tooltip-vVLQQKgj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CboTFEd7.js";import"./resolveDefaultProps-CaF46lB1.js";import"./get-C2VjdU0L.js";import"./axisSelectors-94eYl4rY.js";import"./throttle-uLx0gES7.js";import"./index-BQnnRDe7.js";import"./index-8oVCWn1c.js";import"./isWellBehavedNumber-BgtbXlLK.js";import"./d3-scale-yT9SK4Da.js";import"./index-C14b3CKC.js";import"./index-Xa_KNetQ.js";import"./renderedTicksSlice-Bkx7Xpqk.js";import"./index-Dbv9pvOZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dev9z_OT.js";import"./chartDataContext-BBsc4T1N.js";import"./CategoricalChart-CJCvkzIF.js";import"./CartesianAxis-Cz79nqzF.js";import"./Layer-OlcmJ5EJ.js";import"./Text-Cmcmp6Rw.js";import"./DOMUtils-qoFWhjfZ.js";import"./useId-lk8BfN7M.js";import"./useBackwardsCompatibleTheme-CWFDA9S4.js";import"./Label-B2-HhKmy.js";import"./ZIndexLayer-BSDazUEj.js";import"./types-jKlbb9F_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CVUsTJ0K.js";import"./symbol-CmjPbuz2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-jStCutUO.js";import"./uniqBy-u5dTU2Kl.js";import"./iteratee-DNOBrypk.js";import"./Curve-jqISDG95.js";import"./step-CuPD0mOn.js";import"./AnimatedItems-Cm23KMMu.js";import"./useAnimationId-CKHGdmz-.js";import"./ActivePoints-DkCNlDk1.js";import"./Dot-BwV8U2lv.js";import"./RegisterGraphicalItemId-CGkeXCMx.js";import"./ErrorBarContext-BTHVw71_.js";import"./GraphicalItemClipPath-0iLoH1-r.js";import"./SetGraphicalItem-BCo8L_08.js";import"./getRadiusAndStrokeWidthFromDot-BoQ0loRr.js";import"./ActiveShapeUtils-O11gFqO3.js";import"./useGraphicalItemIdentity-BAh9vCkO.js";import"./Cross-CgngORpb.js";import"./Rectangle-Chy5A9Vo.js";import"./util-Dxo8gN5i.js";import"./Sector-D-QglBrT.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
