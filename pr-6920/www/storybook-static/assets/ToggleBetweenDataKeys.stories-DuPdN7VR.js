import{r as n,e as t}from"./iframe-CgKUDY6I.js";import{L as p}from"./LineChart-MbR2oz9_.js";import{R as s}from"./arrayEqualityCheck-4uJZ54sz.js";import{C as c}from"./CartesianGrid-HdDclIG7.js";import{X as l}from"./XAxis-DwOryPfA.js";import{Y as d}from"./YAxis-D1iy5DZK.js";import{L as y}from"./Legend-DDBb85lz.js";import{L as h}from"./Line-PRm828Ee.js";import{T as u}from"./Tooltip-B0QSnoqq.js";import{R as g}from"./RechartsHookInspector-BbTYK-9O.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DRtAtWmJ.js";import"./hooks-C-jfEB0O.js";import"./axisSelectors-78x8Dv2Q.js";import"./zIndexSlice-L1yp4KKu.js";import"./resolveDefaultProps-DMHVQbHf.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DklQ4GGx.js";import"./chartDataContext-B10HjSyG.js";import"./CategoricalChart-BTXI1VEa.js";import"./CartesianAxis-B5IaiaWB.js";import"./Layer-DyDQThNB.js";import"./Text-D7eyVQni.js";import"./DOMUtils-oL5y8gGU.js";import"./Label-Dn5iT33K.js";import"./ZIndexLayer-Cm5c_q02.js";import"./types-DoxvimZ4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Crrpo09o.js";import"./Curve-BuIdVsH6.js";import"./useElementOffset-Db-z7mz0.js";import"./iteratee-CbFyJTBX.js";import"./ReactUtils-4_OOWgDq.js";import"./ActivePoints-M28xof4x.js";import"./Dot-DU9l2ZZW.js";import"./RegisterGraphicalItemId-DTO6cAIg.js";import"./ErrorBarContext-DEMjkEM_.js";import"./GraphicalItemClipPath-D2P2Wy6l.js";import"./SetGraphicalItem-GcELh7Cs.js";import"./useAnimationId-BABjQp7J.js";import"./getRadiusAndStrokeWidthFromDot-C8stW6xl.js";import"./ActiveShapeUtils-4Z7GGztm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDDRsXYi.js";import"./Trapezoid-XOwgAbCO.js";import"./Sector-BF2Rl4dz.js";import"./Cross-CmxHccTU.js";import"./index-2ufv7V98.js";import"./ChartSizeDimensions-BloifcJy.js";import"./OffsetShower-BASfXPJZ.js";import"./PlotAreaShower-d7Om0wsj.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
