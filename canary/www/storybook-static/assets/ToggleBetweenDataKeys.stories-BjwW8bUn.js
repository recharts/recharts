import{r as n,e as t}from"./iframe-DhLWPZ06.js";import{L as p}from"./LineChart-MOV6xVWn.js";import{R as s}from"./arrayEqualityCheck-CC1O7uMi.js";import{C as c}from"./CartesianGrid-Dbvz7fke.js";import{X as l}from"./XAxis-DHBBBHf5.js";import{Y as d}from"./YAxis-CnLq9B_y.js";import{L as y}from"./Legend-D5X8NU7K.js";import{L as h}from"./Line-DV1Pc56J.js";import{T as u}from"./Tooltip-BYrJLHQh.js";import{R as g}from"./RechartsHookInspector-BYy17HVN.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DUMd0Jc6.js";import"./hooks-BVelaaLp.js";import"./axisSelectors-DMZtzusH.js";import"./zIndexSlice-DphDhRje.js";import"./resolveDefaultProps-Xflu8RP3.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-XrmXSdkV.js";import"./chartDataContext-D-yHh9FI.js";import"./CategoricalChart-CZEP5E7E.js";import"./CartesianAxis-DBjvK8IT.js";import"./Layer-DYv-jvxI.js";import"./Text-DO5FmLPB.js";import"./DOMUtils-CqWLBihg.js";import"./Label-FSHYxmdz.js";import"./ZIndexLayer-DD1HiNcR.js";import"./types-C2AjUdZP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BmApJZ92.js";import"./Curve-CrhEQPlh.js";import"./useElementOffset-BcoburPK.js";import"./iteratee-B1pJwrfy.js";import"./ReactUtils-BtUFOzkx.js";import"./ActivePoints-DprIqvLX.js";import"./Dot-BoxzeF_p.js";import"./RegisterGraphicalItemId-DKys76eX.js";import"./ErrorBarContext-D2Y9d5di.js";import"./GraphicalItemClipPath-CuDzi9bq.js";import"./SetGraphicalItem-BLAlPe4G.js";import"./useAnimationId-C9SVwlUf.js";import"./getRadiusAndStrokeWidthFromDot-Lki9i3qE.js";import"./ActiveShapeUtils-BM0r3s-g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DZfrdEyG.js";import"./Trapezoid-C38TpHLa.js";import"./Sector-DNph1k80.js";import"./Cross-Xmt4-0aU.js";import"./index-DvWkBSj_.js";import"./ChartSizeDimensions-C4EMLUii.js";import"./OffsetShower-DlJYxrX-.js";import"./PlotAreaShower-HP7o8TwR.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
