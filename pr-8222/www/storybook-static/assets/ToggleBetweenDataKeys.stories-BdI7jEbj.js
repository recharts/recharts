import{r as p,R as t}from"./iframe-C5Zmv3_Q.js";import{L as n}from"./LineChart-Di7-xOHb.js";import{R as s}from"./zIndexSlice-C4av0-dC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-d1gBM25Q.js";import{X as d}from"./XAxis-CXSd1JZe.js";import{Y as y}from"./YAxis-iK8t4Zai.js";import{L as u}from"./Legend-DPMB5n98.js";import{L as h}from"./Line-CPW9K2II.js";import{T as g}from"./Tooltip-h6O9GZQi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cbn62-za.js";import"./resolveDefaultProps-CwLCHu7g.js";import"./get-cF5BDHN6.js";import"./axisSelectors-LAQsy88k.js";import"./throttle-D_vuQCXn.js";import"./index-CUtPCjcT.js";import"./index-uwf7-i8Q.js";import"./polarAxisSelectors-C3ABPV6P.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-AN13rbty.js";import"./index-DOiQQlaZ.js";import"./index-SEOAbOhc.js";import"./renderedTicksSlice-Bu3GXH9z.js";import"./index-eHYTpsq_.js";import"./fillDefinitions-chfTF0ar.js";import"./CartesianChart-7XbIDtU0.js";import"./chartDataContext-DtLXn_BI.js";import"./CategoricalChart-XRCYKQSl.js";import"./CartesianAxis-Bf2m6kfJ.js";import"./Layer-DEJLFQPm.js";import"./Text-CCFi8jW2.js";import"./ZIndexLayer-Dmgp-ZTU.js";import"./Label-nDrE78J8.js";import"./types-BtbrjSJt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CWRNkrAk.js";import"./symbol-B4pqWh0c.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bvo80b_z.js";import"./uniqBy-4dpdqULc.js";import"./iteratee-BNZjisoW.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CazSWC5X.js";import"./step-D-ukyLTR.js";import"./dataEntryStyles-BKf5w-lY.js";import"./ActivePoints-GlAtMEJD.js";import"./Dot-BoR4BuHa.js";import"./activeStyles-CRgGZhKT.js";import"./useAnimationId-Dbt3XGZ7.js";import"./ErrorBarContext-9P_gyWZq.js";import"./SetGraphicalItem-Bb8-L5uL.js";import"./getRadiusAndStrokeWidthFromDot-C3ICIzAo.js";import"./ActiveShapeUtils-HLQ9J4sr.js";import"./useEffectiveDataKey-DifAuVlu.js";import"./Cross-BgRtOIbM.js";import"./Rectangle-BqOgBzLM.js";import"./util-Dxo8gN5i.js";import"./Sector-MSOin3JQ.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
