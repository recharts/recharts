import{r as n,e as t}from"./iframe-C1zBrMCd.js";import{L as p}from"./LineChart-CxhwdDAR.js";import{R as s}from"./arrayEqualityCheck-Df8r3poz.js";import{C as c}from"./CartesianGrid-CcFLJXfP.js";import{X as l}from"./XAxis-DU1SAysF.js";import{Y as d}from"./YAxis-Bcx80oq7.js";import{L as y}from"./Legend-CBGg87Ia.js";import{L as h}from"./Line-Cv9Z5K6p.js";import{T as u}from"./Tooltip-qW59qqQb.js";import{R as g}from"./RechartsHookInspector-BISA2G0k.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cv1tlCaV.js";import"./hooks-WF-Co-wK.js";import"./axisSelectors-DB8TkCkM.js";import"./zIndexSlice-hFBZ82Qc.js";import"./resolveDefaultProps-BsIlMHa7.js";import"./PolarUtils-_NKSevVn.js";import"./CartesianChart-B5UDYtnc.js";import"./chartDataContext-DI2kF2Ct.js";import"./CategoricalChart-2Vole5cF.js";import"./CartesianAxis-DF9he0a4.js";import"./Layer-D3PE35Mq.js";import"./Text-dJAbnPql.js";import"./DOMUtils-DOdR4DF9.js";import"./Label-6nnLE5h5.js";import"./ZIndexLayer-BetO650l.js";import"./types-HpBDQdg7.js";import"./Symbols-PCV2wn4X.js";import"./Curve-BNkJ4mrR.js";import"./useElementOffset-DxJmq_d_.js";import"./iteratee-CFC-11_Q.js";import"./ReactUtils-D752dz6O.js";import"./ActivePoints-CGgxDnb1.js";import"./Dot-BCpEYGUg.js";import"./RegisterGraphicalItemId-Bok-rErT.js";import"./ErrorBarContext-KwhhmAaQ.js";import"./GraphicalItemClipPath-M-I7Ebzy.js";import"./SetGraphicalItem-ZpSJ1YOV.js";import"./useAnimationId-D3t9NmUg.js";import"./getRadiusAndStrokeWidthFromDot-DliVvnt0.js";import"./ActiveShapeUtils-CdNQy3O6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BhdzWbEl.js";import"./Trapezoid-D2TjGKOo.js";import"./Sector-w-WfrIQ8.js";import"./Cross-C-d0KZBI.js";import"./index-D7UfPOGu.js";import"./ChartSizeDimensions-Dtypf1Rq.js";import"./OffsetShower-DOhEeiaZ.js";import"./PlotAreaShower-B0-XWkzL.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
