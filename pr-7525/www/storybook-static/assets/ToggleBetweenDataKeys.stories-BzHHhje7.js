import{r as n,R as t}from"./iframe-Dlbg_GZB.js";import{L as p}from"./LineChart-DkOsJWvW.js";import{R as s}from"./zIndexSlice-CMn4Cwlm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-g5KYVCwt.js";import{X as d}from"./XAxis-g3Yqs_q0.js";import{Y as y}from"./YAxis-K45jOkJG.js";import{L as u}from"./Legend-D4rjc0mf.js";import{L as h}from"./Line-BpbqzpNB.js";import{T as g}from"./Tooltip-DcxPDA9e.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_RHeF5kh.js";import"./index-5rk_KAjc.js";import"./index-De4F06zW.js";import"./index-CFtDWJsT.js";import"./index-C4pT71Bv.js";import"./throttle-C3Y4hQMj.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CsfsF6Cn.js";import"./axisSelectors-C_hiMAlk.js";import"./resolveDefaultProps-CIJSTnSl.js";import"./isWellBehavedNumber-BSYl2eep.js";import"./d3-scale-DJYjYDtT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DHiwjDYa.js";import"./chartDataContext-MC8Fu7xC.js";import"./CategoricalChart-BQo9vmvV.js";import"./CartesianAxis-dbSJQeo2.js";import"./Layer-DlhGxg7N.js";import"./Text-BLnCmUHB.js";import"./DOMUtils-vSgsVfRP.js";import"./Label-d3wc6rF5.js";import"./ZIndexLayer-feAlcx_0.js";import"./types-Ctdv5TaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CUnsQXWy.js";import"./symbol-BBKXJ5vn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CDDZoyN1.js";import"./uniqBy-DQCU_Q9Y.js";import"./iteratee-CC9cIx0G.js";import"./Curve-Dcq__Vxv.js";import"./step-BcjH0w06.js";import"./AnimatedItems-xmicP7QL.js";import"./useAnimationId-K2Oa5cBe.js";import"./ActivePoints-CEnLoFiW.js";import"./Dot-DZ8iWzlt.js";import"./RegisterGraphicalItemId-Dj61QivB.js";import"./ErrorBarContext-BKnwTpIO.js";import"./GraphicalItemClipPath-8DGGiF_D.js";import"./SetGraphicalItem-jqk9vogH.js";import"./getRadiusAndStrokeWidthFromDot-rZ7RT_fb.js";import"./ActiveShapeUtils-BApyZjjc.js";import"./Cross-CxODRasK.js";import"./Rectangle-CRztim86.js";import"./util-Dxo8gN5i.js";import"./Sector-trkJxZEY.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
