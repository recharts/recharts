import{r as n,R as t}from"./iframe-Dv5VASSf.js";import{L as p}from"./LineChart-nRALDaax.js";import{R as s}from"./zIndexSlice-CM9TsEF-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DTZqqX6q.js";import{X as d}from"./XAxis-DxRbB3rx.js";import{Y as y}from"./YAxis-CgS9V_Pe.js";import{L as u}from"./Legend-B8PmGeIW.js";import{L as h}from"./Line-D9tGWa1P.js";import{T as g}from"./Tooltip-BxYunMJ1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DX1uLaD6.js";import"./index-Ben5USOE.js";import"./index-B6-1923T.js";import"./index-DkjavtyB.js";import"./index-CvMvJg2Y.js";import"./immer-DhSozQAr.js";import"./get-Bs09YXrP.js";import"./renderedTicksSlice-BO9tlAnq.js";import"./axisSelectors-xODl-OZb.js";import"./d3-scale-BXwJ1MAg.js";import"./resolveDefaultProps-Bff0INFN.js";import"./isWellBehavedNumber-CBezu4RU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DkI46ifx.js";import"./chartDataContext-CF17-miU.js";import"./CategoricalChart-U0rXY0aa.js";import"./CartesianAxis-UbDtFbfy.js";import"./Layer-LJvjQizz.js";import"./Text-Dd7f7n_i.js";import"./DOMUtils-DlL30Y-Y.js";import"./Label-sX9J87v-.js";import"./ZIndexLayer-CuZjWQGk.js";import"./types-DANPZVh2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-T07kToHp.js";import"./symbol-B3QIDv-h.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CvwtkPiT.js";import"./uniqBy-Cz0JqC6a.js";import"./iteratee-DX-qp5DO.js";import"./Curve-Bq9FIxO9.js";import"./step-Bs8kSgCl.js";import"./AnimatedItems-D5YeeLN_.js";import"./useAnimationId-MWsls-nH.js";import"./ActivePoints-CEMt9Ilr.js";import"./Dot-D2nW7dgA.js";import"./RegisterGraphicalItemId-BgWpYWle.js";import"./ErrorBarContext-D_vZY3q2.js";import"./GraphicalItemClipPath-CCozhxOu.js";import"./SetGraphicalItem-nBqj_N_H.js";import"./getRadiusAndStrokeWidthFromDot-C0Qzj9c9.js";import"./ActiveShapeUtils-CEehWVTg.js";import"./Cross-BXBNH4eL.js";import"./Rectangle-Dsk6_L47.js";import"./util-Dxo8gN5i.js";import"./Sector-BtYcWvDH.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
