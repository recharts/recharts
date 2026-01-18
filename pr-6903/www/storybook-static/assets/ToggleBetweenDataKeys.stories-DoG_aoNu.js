import{r as n,e as t}from"./iframe-Bn_7jga7.js";import{L as p}from"./LineChart-CFEz67a2.js";import{R as s}from"./arrayEqualityCheck-CSuBYCWj.js";import{C as c}from"./CartesianGrid-Bjka6DH2.js";import{X as l}from"./XAxis-CkQlFxje.js";import{Y as d}from"./YAxis-C7ibSyRg.js";import{L as y}from"./Legend-D1Nunbxs.js";import{L as h}from"./Line-DpIWCQIN.js";import{T as u}from"./Tooltip-DQIXZzn5.js";import{R as g}from"./RechartsHookInspector-B4H5Lyo-.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DSmS8nVp.js";import"./hooks-BL6pVXml.js";import"./axisSelectors-B3n8BDRj.js";import"./zIndexSlice-usP7cHtF.js";import"./resolveDefaultProps-DCdxs1iD.js";import"./PolarUtils-CBWSHxoJ.js";import"./CartesianChart-CFgpMI4e.js";import"./chartDataContext-CGN_dwZ0.js";import"./CategoricalChart-C3CVYlbu.js";import"./CartesianAxis-5Tz-WD7f.js";import"./Layer-COTxk2h3.js";import"./Text-BQI8M-tq.js";import"./DOMUtils-CRyukOD8.js";import"./Label-CS-Zhu5a.js";import"./ZIndexLayer-BXCJNtZK.js";import"./types-SXh4X6nB.js";import"./Symbols-DCEXw1ah.js";import"./Curve-qns-9S5i.js";import"./useElementOffset-B0onx-6f.js";import"./iteratee-UAJrQy9o.js";import"./ReactUtils-GlbSvDIy.js";import"./ActivePoints-L2b5HdRv.js";import"./Dot-B7wgCnVd.js";import"./RegisterGraphicalItemId-BEPfbN5x.js";import"./ErrorBarContext-D9hbJwiU.js";import"./GraphicalItemClipPath-ECv6yN9n.js";import"./SetGraphicalItem-BWnuaPkJ.js";import"./useAnimationId-id_mTj1h.js";import"./getRadiusAndStrokeWidthFromDot-DzdTRjkG.js";import"./ActiveShapeUtils-BF53wkQd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Wjj6MIuU.js";import"./Trapezoid-BCX-j7xi.js";import"./Sector-CuwRjw3S.js";import"./Cross-D4gM0r3o.js";import"./index-wlSGh2Q3.js";import"./ChartSizeDimensions-C28_hYOe.js";import"./OffsetShower-BxoubtuL.js";import"./PlotAreaShower-Czw-Abfi.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
