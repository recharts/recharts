import{r as n,R as t}from"./iframe-O6BbDbFD.js";import{L as p}from"./LineChart-DHuGr_za.js";import{R as s}from"./zIndexSlice-ufl9shMa.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-id1gFFMS.js";import{X as d}from"./XAxis-DBoP-lnN.js";import{Y as y}from"./YAxis-D4M42lWl.js";import{L as u}from"./Legend-7ddVC25Z.js";import{L as h}from"./Line-CvuXmhQn.js";import{T as g}from"./Tooltip-akFsLPn_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CoeUwGvc.js";import"./index-CnIZ7xjW.js";import"./index-BUePfml7.js";import"./index-BpSs36Jm.js";import"./index-C0YTM7Q0.js";import"./throttle-C3IkSeoT.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B4uTofMj.js";import"./resolveDefaultProps-Tk25gN9F.js";import"./isWellBehavedNumber-CZqzhzTI.js";import"./d3-scale-C59jQ7wQ.js";import"./renderedTicksSlice-B4DLXLOp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B9Asj-o-.js";import"./chartDataContext-CMEfpaNZ.js";import"./CategoricalChart-aiOnciBW.js";import"./CartesianAxis-B8nYUrro.js";import"./Layer-BCiB-dL4.js";import"./Text-ti8Fj8zJ.js";import"./DOMUtils-BG1uuH7H.js";import"./useId-Cennb_xj.js";import"./useBackwardsCompatibleTheme-DlXi3557.js";import"./Label-SH09pAJC.js";import"./ZIndexLayer-Bt9vBpxW.js";import"./types-o_WouL0J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BFe2cyG5.js";import"./symbol-Bc4BbbRZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dpoz46wZ.js";import"./uniqBy-CNBDR_xD.js";import"./iteratee-ZH8ZQkoC.js";import"./Curve-r6vAjm_u.js";import"./step-rmFojxwR.js";import"./AnimatedItems-BmR1pSA0.js";import"./useAnimationId-DHIHugsV.js";import"./ActivePoints-BgZirJxM.js";import"./Dot-D6BD33aP.js";import"./RegisterGraphicalItemId-DqjeB-Ir.js";import"./ErrorBarContext-CsR2u1pe.js";import"./GraphicalItemClipPath-DQtsyL-k.js";import"./SetGraphicalItem-BTWaHo9u.js";import"./getRadiusAndStrokeWidthFromDot-DUN_awyu.js";import"./ActiveShapeUtils-CApqjo8g.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D33RwA4Z.js";import"./Rectangle-C8trBQbW.js";import"./util-Dxo8gN5i.js";import"./Sector-DIVyjiXZ.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
