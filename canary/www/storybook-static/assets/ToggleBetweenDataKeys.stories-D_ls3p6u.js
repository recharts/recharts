import{r as n,e as t}from"./iframe-CsBbFWpF.js";import{L as p}from"./LineChart-DMyxn1iz.js";import{R as s}from"./arrayEqualityCheck-jcy1YLjA.js";import{C as c}from"./CartesianGrid-CaHAkppf.js";import{X as l}from"./XAxis-n00lD-aM.js";import{Y as d}from"./YAxis-Ctuh_Y30.js";import{L as y}from"./Legend-BwPUQflq.js";import{L as h}from"./Line-8NeaciPU.js";import{T as u}from"./Tooltip-B8PRtCZT.js";import{R as g}from"./RechartsHookInspector-Ce0vrec4.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-M1yD5X0u.js";import"./hooks-51EGl8Fk.js";import"./axisSelectors-C8uaVJja.js";import"./zIndexSlice-CXgHVliP.js";import"./resolveDefaultProps-Di-bRFCz.js";import"./PolarUtils-DudrDAyL.js";import"./CartesianChart-DlU5PpKX.js";import"./chartDataContext-C4MvfWzW.js";import"./CategoricalChart-BoRcIHlb.js";import"./CartesianAxis-DTyJ3mcB.js";import"./Layer-B5pUJ7d6.js";import"./Text-CXOTFpC0.js";import"./DOMUtils-DCk3Ra7U.js";import"./Label-vO0tFBMQ.js";import"./ZIndexLayer-DoHUAHyH.js";import"./types-DZkoNYJ-.js";import"./Symbols-GutgQl5i.js";import"./Curve-BV6casI8.js";import"./useElementOffset-DKVHg2OE.js";import"./iteratee-DG0CEwld.js";import"./ReactUtils-B73M-NEp.js";import"./ActivePoints-BtxRiwR-.js";import"./Dot-pAY9JTIt.js";import"./RegisterGraphicalItemId-DEKbhPBq.js";import"./ErrorBarContext-UJH6PLVM.js";import"./GraphicalItemClipPath-BGGubKyF.js";import"./SetGraphicalItem-D-yEZ2eQ.js";import"./useAnimationId-DQyCpAJd.js";import"./getRadiusAndStrokeWidthFromDot-Dzk2HrW3.js";import"./ActiveShapeUtils-Cp7opGs8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRfJXidx.js";import"./Trapezoid-CqG9LomH.js";import"./Sector-DZ4anR9n.js";import"./Cross-eYJkkoHv.js";import"./index-30ex7hAw.js";import"./ChartSizeDimensions-BxqurYlH.js";import"./OffsetShower-Cz9yhNvC.js";import"./PlotAreaShower-CYw1ViUZ.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
