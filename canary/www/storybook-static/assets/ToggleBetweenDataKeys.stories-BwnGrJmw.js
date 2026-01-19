import{r as n,e as t}from"./iframe-BfEeuf29.js";import{L as p}from"./LineChart-cMAhXrDE.js";import{R as s}from"./arrayEqualityCheck-CQTYn8oK.js";import{C as c}from"./CartesianGrid-Pr14iCpc.js";import{X as l}from"./XAxis-DCok0cmX.js";import{Y as d}from"./YAxis-Dk-NUqCy.js";import{L as y}from"./Legend-DV-YA5se.js";import{L as h}from"./Line-BeWiuKbx.js";import{T as u}from"./Tooltip-2YB9s4AJ.js";import{R as g}from"./RechartsHookInspector-CaAU2h8E.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DsA4AxRI.js";import"./hooks-CshdMEx0.js";import"./axisSelectors-BzW232an.js";import"./zIndexSlice-DJbSQN7A.js";import"./resolveDefaultProps-D5wHr7xB.js";import"./PolarUtils-B3A4Bn44.js";import"./CartesianChart-Ded3Vhag.js";import"./chartDataContext-96TYBSAN.js";import"./CategoricalChart-Dc9eAC4P.js";import"./CartesianAxis-D11Z6FnG.js";import"./Layer-WUPrCNhO.js";import"./Text-Cat3JN_E.js";import"./DOMUtils-kfWXwCLP.js";import"./Label-BQL_xh_a.js";import"./ZIndexLayer-nNaEVjlH.js";import"./types-B9h6Osdn.js";import"./Symbols-DTph50Q3.js";import"./Curve-QDibvidp.js";import"./useElementOffset-C3xH1JMH.js";import"./iteratee-D9HA3Tju.js";import"./ReactUtils-Dy1dqhtA.js";import"./ActivePoints-BLQCmbLM.js";import"./Dot-CJLw0pnw.js";import"./RegisterGraphicalItemId-BNJoKXDB.js";import"./ErrorBarContext-D7bWjwna.js";import"./GraphicalItemClipPath-BkoIn00V.js";import"./SetGraphicalItem-D6lIAA2e.js";import"./useAnimationId-593qmaql.js";import"./getRadiusAndStrokeWidthFromDot-7aN4YOPs.js";import"./ActiveShapeUtils-DAJHbM11.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLgB_eL-.js";import"./Trapezoid-D5AU_-Tp.js";import"./Sector-Bpai8LVK.js";import"./Cross-Cx1nVWUe.js";import"./index-n-fO4kHm.js";import"./ChartSizeDimensions-DtODaN3g.js";import"./OffsetShower-usFsQs5P.js";import"./PlotAreaShower-Pa3IuuRb.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
