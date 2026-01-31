import{r as n,e as t}from"./iframe-BsuuU2ac.js";import{L as p}from"./LineChart-C52OF2TC.js";import{R as s}from"./arrayEqualityCheck-BjO3Er2E.js";import{C as c}from"./CartesianGrid-CmOXpYee.js";import{X as l}from"./XAxis-CsIw1iGz.js";import{Y as d}from"./YAxis-BTKigBpk.js";import{L as y}from"./Legend-BeaGcWNT.js";import{L as h}from"./Line-DjevUKl6.js";import{T as u}from"./Tooltip-Cku2Xirq.js";import{R as g}from"./RechartsHookInspector-BGkLBTS7.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BH32z_Kk.js";import"./hooks-k3ZaWThG.js";import"./axisSelectors-jwf3irWh.js";import"./zIndexSlice-Bir2u6Kx.js";import"./resolveDefaultProps-saNtUn-1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CfWYFhMG.js";import"./chartDataContext-C2F3ksi1.js";import"./CategoricalChart-nOJreIrp.js";import"./CartesianAxis-CECRCtr2.js";import"./Layer-DM57kvBs.js";import"./Text-Bg2YicUS.js";import"./DOMUtils-oSkPNF4I.js";import"./Label-DXc_GGWc.js";import"./ZIndexLayer-DAoCiEXG.js";import"./types-DmRJx57M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CcIdb3bs.js";import"./Curve-C6_JEQin.js";import"./useElementOffset-HAHdxBZO.js";import"./iteratee-DhvHonxm.js";import"./ReactUtils-D7uw0LSD.js";import"./ActivePoints-C8qSTMe2.js";import"./Dot-C89l6B9O.js";import"./RegisterGraphicalItemId-DrCtvza9.js";import"./ErrorBarContext-CA3TWQkR.js";import"./GraphicalItemClipPath-CSReekSQ.js";import"./SetGraphicalItem-asJ_Ikn_.js";import"./useAnimationId-WGg8-jRM.js";import"./getRadiusAndStrokeWidthFromDot-Dsdre15A.js";import"./ActiveShapeUtils-Drd0OeIB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D5Cka5hS.js";import"./Trapezoid-Ds5p844S.js";import"./Sector-CZIlwJfI.js";import"./Cross-y83n1l5B.js";import"./index-BhAql3N3.js";import"./ChartSizeDimensions-DrD8f1Su.js";import"./OffsetShower-BRn6lv3J.js";import"./PlotAreaShower-C1V0JDKa.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
