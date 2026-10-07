import{r as p,R as t}from"./iframe-Cs_QEvnb.js";import{L as n}from"./LineChart-BnPbFFs2.js";import{R as s}from"./zIndexSlice-DkQ_r41R.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BDjqFDM5.js";import{X as d}from"./XAxis-C6JaM3hk.js";import{Y as y}from"./YAxis-BzFBF6j_.js";import{L as u}from"./Legend-CdK3p2Qt.js";import{L as h}from"./Line-D7GW9opj.js";import{T as g}from"./Tooltip-BNYQt66B.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-LSBx4CxW.js";import"./resolveDefaultProps-DexuDbrM.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BjaL6nRE.js";import"./throttle-Dy_oOifq.js";import"./index-CAK1Ad6q.js";import"./index-MOJSfEXi.js";import"./isWellBehavedNumber-Cid5nUs7.js";import"./d3-scale-CEFQXImZ.js";import"./index-bdmoNa-p.js";import"./index-CyoiD9ix.js";import"./renderedTicksSlice-BwrC6eZ3.js";import"./index-CKqZwqIV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Der_Lez1.js";import"./chartDataContext-CDCJ_kQh.js";import"./CategoricalChart-CewNnnVL.js";import"./CartesianAxis-Btqo2Ljv.js";import"./Layer-D-shTj0T.js";import"./Text-xCnIxjvW.js";import"./DOMUtils-BYSGKLNe.js";import"./useId-B0dpXwOa.js";import"./useBackwardsCompatibleTheme-CJoqqjxP.js";import"./Label-AhMBQLf8.js";import"./ZIndexLayer-BGjzOXsU.js";import"./types-C9b0uGu7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DC35OQmJ.js";import"./symbol-Dj3ENcoy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFIrW7Gj.js";import"./uniqBy-D0TPWZAb.js";import"./iteratee-B3WPktIR.js";import"./Curve-CeUIPmBM.js";import"./step-B6gEEVRS.js";import"./AnimatedItems-CbRljsJB.js";import"./useAnimationId-CXhRBgnj.js";import"./ActivePoints-BbHlS5_x.js";import"./Dot-BlS3hK8R.js";import"./RegisterGraphicalItemId-rAn7D8nX.js";import"./ErrorBarContext-Ds3D9aj6.js";import"./GraphicalItemClipPath-DfPatAeC.js";import"./SetGraphicalItem-BtIj06CJ.js";import"./getRadiusAndStrokeWidthFromDot-CPpHwE7T.js";import"./ActiveShapeUtils-BhwN6W_6.js";import"./useGraphicalItemIdentity-DK8Vxub1.js";import"./Cross-HvfR3zEO.js";import"./Rectangle-B9nz3j4B.js";import"./util-Dxo8gN5i.js";import"./Sector-C5Q_SGqF.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
