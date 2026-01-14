import{r as n,e as t}from"./iframe-AMdIPtJ_.js";import{L as p}from"./LineChart-muAAJLdr.js";import{R as s}from"./arrayEqualityCheck-3UyTPjiS.js";import{C as c}from"./CartesianGrid-Cp4flrLp.js";import{X as l}from"./XAxis-CXCVRDkD.js";import{Y as d}from"./YAxis-L1AiUQKA.js";import{L as y}from"./Legend-C8erwHas.js";import{L as h}from"./Line-DT_lVAK5.js";import{T as u}from"./Tooltip-Diu-5ejz.js";import{R as g}from"./RechartsHookInspector-Bq93gymj.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-QBdH5qJC.js";import"./hooks-BddCSC5x.js";import"./axisSelectors-CYvP6yih.js";import"./zIndexSlice-CLEOTtEz.js";import"./resolveDefaultProps-eDHOoSb6.js";import"./PolarUtils-KOfaMXsG.js";import"./CartesianChart-C7nb5Il8.js";import"./chartDataContext-BsDdYGEp.js";import"./CategoricalChart-C39w_Gis.js";import"./CartesianAxis-5YsJLijc.js";import"./Layer-s4o8RnMf.js";import"./Text-Bmd0wKqf.js";import"./DOMUtils-Bw_kQjwH.js";import"./Label-BXNXe9p5.js";import"./ZIndexLayer-DJXgyukI.js";import"./types-CQP6j9X1.js";import"./Symbols-B091hayX.js";import"./Curve-CXXZiBGe.js";import"./useElementOffset-B3aomIQv.js";import"./iteratee-Y8fEdtnU.js";import"./ReactUtils-BJF5ZjW2.js";import"./ActivePoints-Du82FzFM.js";import"./Dot-BW7Cs_-q.js";import"./RegisterGraphicalItemId-BIrQ-TMI.js";import"./ErrorBarContext-DTL9as4J.js";import"./GraphicalItemClipPath-CU1RZZTa.js";import"./SetGraphicalItem-BrubgrnS.js";import"./useAnimationId-DD0SbbDQ.js";import"./getRadiusAndStrokeWidthFromDot-dgMzj4wl.js";import"./ActiveShapeUtils-CYbAsT4q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BXzCN27L.js";import"./Trapezoid-vgj8eyPg.js";import"./Sector-DeLHi04Y.js";import"./Cross-D2A-BP76.js";import"./index-C1Q9sGQl.js";import"./ChartSizeDimensions-C4K5r_rw.js";import"./OffsetShower-DJsmVlcW.js";import"./PlotAreaShower-poQ332x-.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
