import{r as n,R as t}from"./iframe-DHvlXZZp.js";import{L as p}from"./LineChart-DJFnKyaG.js";import{R as s}from"./zIndexSlice-D7_5YQCx.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ClkzgT-p.js";import{X as d}from"./XAxis-C0xAN7Vm.js";import{Y as y}from"./YAxis-DYTJhxlv.js";import{L as u}from"./Legend-DfYfxjVN.js";import{L as h}from"./Line-DYyHO80i.js";import{T as g}from"./Tooltip-B5NiwQTr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CaVHAbWI.js";import"./index-CDvSCu-7.js";import"./index-B_pekVWz.js";import"./index-rrh18h4R.js";import"./index-DGFoeBTW.js";import"./throttle-Bg-VcpoN.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C2TzwS0g.js";import"./axisSelectors-lbKqd9aP.js";import"./resolveDefaultProps-DAXfWdSl.js";import"./isWellBehavedNumber-D3uQHhq6.js";import"./d3-scale-Cey7ctPf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DFvBiy9D.js";import"./chartDataContext-kJZSLmpd.js";import"./CategoricalChart-sk98qpS9.js";import"./CartesianAxis-DdKNIbtf.js";import"./Layer-BW5xomOj.js";import"./Text-D-2er-qS.js";import"./DOMUtils-CXaSfF0Q.js";import"./Label-TKCFRexK.js";import"./ZIndexLayer-D7_As1-8.js";import"./types-CRJA0nge.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BqfUunGe.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-vArPBIj6.js";import"./symbol-CMZuJUeF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWKaUxb_.js";import"./uniqBy-B1Poqyga.js";import"./iteratee-CZdVePke.js";import"./Curve-Bc6Wc-5h.js";import"./step-B2khkJJz.js";import"./AnimatedItems-BVZCnb1h.js";import"./useAnimationId-uiW7aOrL.js";import"./ActivePoints-oifiU6yf.js";import"./Dot-Btw86tRD.js";import"./RegisterGraphicalItemId-DWC6_slS.js";import"./ErrorBarContext-BK2fwAvo.js";import"./GraphicalItemClipPath-b_iqRJZZ.js";import"./SetGraphicalItem-D2M9GsyT.js";import"./getRadiusAndStrokeWidthFromDot-B-WHlf9E.js";import"./ActiveShapeUtils-CUQXZ3i4.js";import"./Cross-BBJ1Kyk2.js";import"./Rectangle-DPmaYH73.js";import"./util-Dxo8gN5i.js";import"./Sector-C_z4Y56l.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
