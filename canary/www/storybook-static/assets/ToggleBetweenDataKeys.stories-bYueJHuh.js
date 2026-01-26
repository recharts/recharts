import{r as n,e as t}from"./iframe-BfI_ST9A.js";import{L as p}from"./LineChart-BknMg2tE.js";import{R as s}from"./arrayEqualityCheck-Dpn6Yh1q.js";import{C as c}from"./CartesianGrid-B6zMTXDB.js";import{X as l}from"./XAxis-BmtgQOLB.js";import{Y as d}from"./YAxis-DTgMZjXd.js";import{L as y}from"./Legend-DSv1DviZ.js";import{L as h}from"./Line-DGppnglh.js";import{T as u}from"./Tooltip-oJHpgK_Y.js";import{R as g}from"./RechartsHookInspector-CVEQV9do.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B_X6-_SZ.js";import"./hooks-DvK6IaUs.js";import"./axisSelectors-DDmdM9p6.js";import"./zIndexSlice-DXwF7pA6.js";import"./resolveDefaultProps-AaslCT8i.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DXCnOxpF.js";import"./chartDataContext-CeBJp2Px.js";import"./CategoricalChart-DD3vhlwU.js";import"./CartesianAxis-DmSsZovB.js";import"./Layer-Y7LjbTmX.js";import"./Text-rhuK2TCR.js";import"./DOMUtils-bXouPdN4.js";import"./Label-bNYHk-eM.js";import"./ZIndexLayer-BqmPWyE4.js";import"./types-C63RoX8s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BZnP9syB.js";import"./Curve-CQI60C70.js";import"./useElementOffset-B9zSC1oG.js";import"./iteratee-BtHt7oJb.js";import"./ReactUtils-DCNpXtNn.js";import"./ActivePoints-2nVhg-uB.js";import"./Dot-4aiHSk1j.js";import"./RegisterGraphicalItemId-B5NRYeBm.js";import"./ErrorBarContext-Dkb4HGWS.js";import"./GraphicalItemClipPath-Dc-fHHFr.js";import"./SetGraphicalItem-CI8DucV2.js";import"./useAnimationId-COKmXqbi.js";import"./getRadiusAndStrokeWidthFromDot-gYu2i8Au.js";import"./ActiveShapeUtils-DHutry9j.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ClKhcP1j.js";import"./Trapezoid-BD9djYD6.js";import"./Sector-65rnMIz8.js";import"./Cross-DgvRjqnG.js";import"./index-ChuKY9XN.js";import"./ChartSizeDimensions-BiyrgYor.js";import"./OffsetShower-SG_pY0kd.js";import"./PlotAreaShower-DWEL4ESW.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
