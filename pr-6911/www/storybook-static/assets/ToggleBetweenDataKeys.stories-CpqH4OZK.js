import{r as n,e as t}from"./iframe-BJE3gYiz.js";import{L as p}from"./LineChart-BBHrha7a.js";import{R as s}from"./arrayEqualityCheck-DOpOKb7k.js";import{C as c}from"./CartesianGrid-IzZGbxwv.js";import{X as l}from"./XAxis-CiUlidyy.js";import{Y as d}from"./YAxis-DFb5sVBj.js";import{L as y}from"./Legend-DeQPVjIj.js";import{L as h}from"./Line-Cl4Kd4w4.js";import{T as u}from"./Tooltip-DvJ-I219.js";import{R as g}from"./RechartsHookInspector-CmJjyPOL.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-6YVSs0X2.js";import"./hooks-CzpWgTi2.js";import"./axisSelectors-BAfv6-Wm.js";import"./zIndexSlice-CPc0PYoJ.js";import"./resolveDefaultProps-BKNlGFt8.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-Dvfq7kHx.js";import"./chartDataContext-dCefmzkT.js";import"./CategoricalChart-BCQDahMf.js";import"./CartesianAxis-DYQqdQ0S.js";import"./Layer-BpHZQDe5.js";import"./Text-CV7Ey6jK.js";import"./DOMUtils-DGjslG0U.js";import"./Label-8Du7WhKH.js";import"./ZIndexLayer-PGry8EqE.js";import"./types-BgpWyLLK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CA9SXzw3.js";import"./Curve-9wsGsorR.js";import"./useElementOffset-AxHRwjYB.js";import"./iteratee-CDq5lI64.js";import"./ReactUtils-DpOzmnGs.js";import"./ActivePoints-B4GG4aUL.js";import"./Dot-ELwl5DRr.js";import"./RegisterGraphicalItemId-DDZY4GcH.js";import"./ErrorBarContext-CmxXk9PG.js";import"./GraphicalItemClipPath-VPQqj0Oy.js";import"./SetGraphicalItem-Bs3LcTS6.js";import"./useAnimationId-xUHk75MJ.js";import"./getRadiusAndStrokeWidthFromDot-T6tgT4MC.js";import"./ActiveShapeUtils-D_XtSxMo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-oe8iNjEY.js";import"./Trapezoid-wLmtEI-B.js";import"./Sector-D1swSw6R.js";import"./Cross-B75I7rUJ.js";import"./index-BZmliZtD.js";import"./ChartSizeDimensions-kmApRxRi.js";import"./OffsetShower-Cu7vEAUz.js";import"./PlotAreaShower-3gxA0MT2.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
