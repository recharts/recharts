import{r as n,e as t}from"./iframe-BR42SwHx.js";import{L as p}from"./LineChart-BC0ocM9c.js";import{R as s}from"./arrayEqualityCheck-BTlu6_X5.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BKtI12iX.js";import{X as d}from"./XAxis-Tjb-FFWw.js";import{Y as y}from"./YAxis-vI32OOi5.js";import{L as h}from"./Legend-CgeqB7Dx.js";import{L as u}from"./Line-CDs3wcp9.js";import{T as g}from"./Tooltip-BTvrqCSy.js";import{R as K}from"./RechartsHookInspector-BoeADalq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0DQb4gv.js";import"./index-D16v1uX6.js";import"./immer-CBsUjXpI.js";import"./hooks-D8cR8gUo.js";import"./axisSelectors-CoHyz1fh.js";import"./d3-scale-UZASi0oQ.js";import"./zIndexSlice-DLL8OYNe.js";import"./renderedTicksSlice-C8E2aIah.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CEhCqBUJ.js";import"./chartDataContext-DeHpxm8Y.js";import"./CategoricalChart-6WrjOunx.js";import"./resolveDefaultProps-C3ZG36Xp.js";import"./CartesianAxis-Bu_sq35Y.js";import"./Layer-DvQoXU13.js";import"./Text-D4m4zxqs.js";import"./DOMUtils-sfbIoaFE.js";import"./Label-DVExpSeB.js";import"./ZIndexLayer-8Duyh3JO.js";import"./types-CNxj5JXu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BwMDCpyM.js";import"./symbol-DV-iQcJU.js";import"./step-CO8PYd_W.js";import"./useElementOffset-cx0ADUit.js";import"./uniqBy-CrOA1Xwi.js";import"./iteratee-DQsTI-if.js";import"./ReactUtils-CgBYlHJF.js";import"./ActivePoints-DIaFZui8.js";import"./Dot-mjncFdWi.js";import"./RegisterGraphicalItemId-BuXbHokx.js";import"./ErrorBarContext-BHkWs-ti.js";import"./GraphicalItemClipPath-C0dhtMPj.js";import"./SetGraphicalItem-BZOj4gaY.js";import"./useAnimationId-B6YKrKnq.js";import"./getRadiusAndStrokeWidthFromDot-zEBVevUM.js";import"./ActiveShapeUtils-Bs6a3E44.js";import"./isPlainObject-CgqdHIW2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Di_iOTI6.js";import"./Trapezoid-BEZ2jh2g.js";import"./Sector-CuH6E9-r.js";import"./Curve-MgYQVsjt.js";import"./Cross-LzqoNpy2.js";import"./index-2-eZpp4N.js";import"./ChartSizeDimensions-FLfKJQs_.js";import"./OffsetShower-DtintQJW.js";import"./PlotAreaShower-C0gn6wTT.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
