import{r as n,e as t}from"./iframe-DP2mOMln.js";import{L as p}from"./LineChart-CxKONjb3.js";import{R as s}from"./arrayEqualityCheck-5iTHPuD6.js";import{C as c}from"./CartesianGrid-CwGJdEIL.js";import{X as l}from"./XAxis-B_VQg86f.js";import{Y as d}from"./YAxis-WXcImUvg.js";import{L as y}from"./Legend-CKQzX7-y.js";import{L as h}from"./Line-7aVkqytC.js";import{T as u}from"./Tooltip-CtUAS5no.js";import{R as g}from"./RechartsHookInspector-DVpbP7qM.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-T4ODBC4p.js";import"./hooks-zeoTqeYF.js";import"./axisSelectors-1ZBBcU4q.js";import"./zIndexSlice-Cik2D4vv.js";import"./resolveDefaultProps-_qLwNxhH.js";import"./PolarUtils-DkgNb_vz.js";import"./CartesianChart-DpJZ7Wkf.js";import"./chartDataContext-B_bP7OxR.js";import"./CategoricalChart-DEV1B1BC.js";import"./CartesianAxis-CF6IOTSN.js";import"./Layer-BZqUSVid.js";import"./Text-C5XiBNyf.js";import"./DOMUtils-DWLh1SLI.js";import"./Label-DnLJWwCk.js";import"./ZIndexLayer-BOwqkVYS.js";import"./types-DdS-Ezdx.js";import"./Symbols-1_tOvOdR.js";import"./Curve-DYGBu986.js";import"./useElementOffset-Bme7kzJ-.js";import"./iteratee-VohP_WFB.js";import"./ReactUtils-DJEcSmKG.js";import"./ActivePoints-CZ6tlVSr.js";import"./Dot-qyySS_n7.js";import"./RegisterGraphicalItemId-30jUMiK8.js";import"./ErrorBarContext-D6qGOW5T.js";import"./GraphicalItemClipPath-C-hXbMEZ.js";import"./SetGraphicalItem-ZmYa4ptY.js";import"./useAnimationId-BuyyHYgP.js";import"./getRadiusAndStrokeWidthFromDot-ChYaQN1P.js";import"./ActiveShapeUtils-BdyerBrO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DcVYjSDm.js";import"./Trapezoid-3yVnAnN-.js";import"./Sector-CAH7EP92.js";import"./Cross-CBOoYy9A.js";import"./index-CMQ1Twes.js";import"./ChartSizeDimensions-fmpk3s6Q.js";import"./OffsetShower-B4eNU7sm.js";import"./PlotAreaShower-CPDnvxOK.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
