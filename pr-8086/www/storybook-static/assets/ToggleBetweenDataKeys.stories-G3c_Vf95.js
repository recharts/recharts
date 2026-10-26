import{r as p,R as t}from"./iframe-BK3Sisey.js";import{L as n}from"./LineChart-BuYm4-GU.js";import{R as s}from"./zIndexSlice-BetgAyCc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-6-enjERH.js";import{X as d}from"./XAxis-DZM3ZRq3.js";import{Y as y}from"./YAxis-D-L_pdrV.js";import{L as u}from"./Legend-DcfRiBX1.js";import{L as h}from"./Line-XxjUVcCS.js";import{T as g}from"./Tooltip-DziaoSJI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DORC7p_L.js";import"./resolveDefaultProps-C_F1VMOc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BspbFoiI.js";import"./throttle-biJe8rDV.js";import"./index-DRUOZNOo.js";import"./index-de72ObtI.js";import"./polarAxisSelectors-DUPrNhEV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bzw5IHoB.js";import"./index-c0twB4Fw.js";import"./index-B0fPjlHo.js";import"./renderedTicksSlice-By71GZi8.js";import"./index-LqSrX9BA.js";import"./CartesianChart-BDnUkJu9.js";import"./chartDataContext-DOIuQ-MV.js";import"./CategoricalChart-CF961821.js";import"./CartesianAxis-DZgjpOyW.js";import"./Layer-D1HH46xf.js";import"./Text-CRgN4x4u.js";import"./pageBackground-CgvVcPsa.js";import"./useId-zAfHK1iY.js";import"./ZIndexLayer-BE0p1xel.js";import"./Label-UVuQgYwr.js";import"./dataEntryStyles-B4V6KkDF.js";import"./types-DkavCTl8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-PPNvVUUW.js";import"./symbol-BQrXtAQf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C7iIcJbq.js";import"./uniqBy-Bso09DYT.js";import"./iteratee-Bfjg1LJA.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DG5NWTvD.js";import"./step-DmrcgL_N.js";import"./activeStyles-Tawg351V.js";import"./useAnimationId-CS-FJwCc.js";import"./ActivePoints-D-7HMJrF.js";import"./Dot-SPXRnAns.js";import"./RegisterGraphicalItemId-BBZLH_Nk.js";import"./ErrorBarContext-HVXU_-2l.js";import"./SetGraphicalItem-Cx8SQgq9.js";import"./getRadiusAndStrokeWidthFromDot-Bj490LjI.js";import"./ActiveShapeUtils-CgpbZaR3.js";import"./useEffectiveDataKey-Cwm-IkPM.js";import"./Cross-Dxo8y2Lo.js";import"./Rectangle-BNfPDvJT.js";import"./util-Dxo8gN5i.js";import"./Sector-vXpxhJQs.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
