import{r as p,R as t}from"./iframe-DFG5UB_B.js";import{L as n}from"./LineChart-aN3Ktnvk.js";import{R as s}from"./zIndexSlice-BfnucyES.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D6XXFOpi.js";import{X as d}from"./XAxis-BGV0t6fj.js";import{Y as y}from"./YAxis-C9ahxlQr.js";import{L as u}from"./Legend-D9pzZTHI.js";import{L as h}from"./Line-DbNr04kS.js";import{T as g}from"./Tooltip-BX_C2Z3k.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6oLib6N.js";import"./resolveDefaultProps-BatIk00Z.js";import"./get-C2VjdU0L.js";import"./axisSelectors-THUDlcaK.js";import"./throttle-8CKkbV4u.js";import"./index-CvfO2mCp.js";import"./index-DZ38vEa6.js";import"./isWellBehavedNumber-LLrASzdJ.js";import"./d3-scale-CVPVhJLx.js";import"./index-DPl35esh.js";import"./index-CFKpipae.js";import"./renderedTicksSlice-BAoPBO0b.js";import"./index-Bx8tOa6m.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CyJda43K.js";import"./chartDataContext-CMj3DEnW.js";import"./CategoricalChart-DoM1RUNO.js";import"./CartesianAxis-BNuKFBQN.js";import"./Layer-CTQ0XvXO.js";import"./Text-CeNXkw59.js";import"./DOMUtils-BhwdevaN.js";import"./useId-s4zjQZaU.js";import"./useBackwardsCompatibleTheme-CQyv0Qul.js";import"./Label-BlYeas0v.js";import"./ZIndexLayer-BhF6Z1GT.js";import"./types-DcAH2tiO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B-DKfZZn.js";import"./symbol-D4kPCsbv.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CESdl8j9.js";import"./uniqBy-BvJpBkfI.js";import"./iteratee-CT_szyVB.js";import"./Curve-D7P2ouTL.js";import"./step-Cpq8yTJq.js";import"./AnimatedItems-DaUsoCvA.js";import"./useAnimationId-DtAgjjoV.js";import"./ActivePoints-DcPgsYfH.js";import"./Dot-DokBxO_D.js";import"./RegisterGraphicalItemId-7hocZulP.js";import"./ErrorBarContext-SVRkM6ha.js";import"./GraphicalItemClipPath-Dn5pirN6.js";import"./SetGraphicalItem-B5Jco2Ub.js";import"./getRadiusAndStrokeWidthFromDot-BtIvPgrq.js";import"./ActiveShapeUtils-BBhCvNS_.js";import"./useGraphicalItemIdentity-D1Y6AxtT.js";import"./Cross-B0BI2ykV.js";import"./Rectangle-DvysmnTh.js";import"./util-Dxo8gN5i.js";import"./Sector-Cn30566z.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
