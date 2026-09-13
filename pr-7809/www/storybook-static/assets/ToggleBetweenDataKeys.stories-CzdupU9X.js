import{r as p,R as t}from"./iframe-Dv0y1gpD.js";import{L as n}from"./LineChart-ArGSomGk.js";import{R as s}from"./zIndexSlice-Dcg1qyEP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-55hsH-2z.js";import{X as d}from"./XAxis-DC1yM-4Y.js";import{Y as y}from"./YAxis-Bad4LtVV.js";import{L as u}from"./Legend-D883gPeo.js";import{L as h}from"./Line-DsKTVdZ7.js";import{T as g}from"./Tooltip-cQbAJuRP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DBZPU8BT.js";import"./resolveDefaultProps-BSnMxCtb.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CWVN05a4.js";import"./throttle-DRnb1olJ.js";import"./index-CDdFi7FD.js";import"./index-CuUTphOp.js";import"./isWellBehavedNumber-CSH4eNbA.js";import"./d3-scale-C1I5bktH.js";import"./index-C_-lX3o6.js";import"./index-L6ZabEtj.js";import"./renderedTicksSlice-BROtRsGC.js";import"./index-D08948xk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-By9n1b2a.js";import"./chartDataContext-BgIF_Hcs.js";import"./CategoricalChart-CsjQZa1B.js";import"./CartesianAxis-XZ9E7gxq.js";import"./Layer-BhVcBCwc.js";import"./Text-yCn_2ASS.js";import"./DOMUtils-BDbpPHw_.js";import"./useId-CIoPvc9K.js";import"./useBackwardsCompatibleTheme-D_XOd78A.js";import"./Label-BjJ47aqL.js";import"./ZIndexLayer-DKxKOknR.js";import"./types-DPFKMWXW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bx_FRGYv.js";import"./symbol-DeK-e7tj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ck17hGtu.js";import"./uniqBy-DBrVusL1.js";import"./iteratee-DAD7IavB.js";import"./Curve-BcMDBBzU.js";import"./step-CmmDeSbO.js";import"./AnimatedItems-DuOoJz7j.js";import"./useAnimationId-CIZ8sAVQ.js";import"./ActivePoints-ipJb0gdg.js";import"./Dot-jZhU2Vzn.js";import"./RegisterGraphicalItemId-Cct8Dhhi.js";import"./ErrorBarContext-W61HXda7.js";import"./GraphicalItemClipPath-C2A6ObbO.js";import"./SetGraphicalItem-bcdkfO_p.js";import"./getRadiusAndStrokeWidthFromDot-Bl_0a7Wc.js";import"./ActiveShapeUtils-Du3md58W.js";import"./useGraphicalItemIdentity-DxPaTWc4.js";import"./Cross-DNPJlbtn.js";import"./Rectangle-CBwgxWI1.js";import"./util-Dxo8gN5i.js";import"./Sector-yhDp5fID.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
