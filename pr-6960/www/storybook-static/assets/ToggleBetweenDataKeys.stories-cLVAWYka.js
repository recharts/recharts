import{r as n,e as t}from"./iframe-CU9XYLf3.js";import{L as p}from"./LineChart-Du1ZX9LF.js";import{R as s}from"./arrayEqualityCheck-eFaqPFyI.js";import{C as c}from"./CartesianGrid-D5isxS3W.js";import{X as l}from"./XAxis-Bcv7Mskw.js";import{Y as d}from"./YAxis-BemMrlFL.js";import{L as y}from"./Legend-Bhep4iF3.js";import{L as h}from"./Line-C8QgLygJ.js";import{T as u}from"./Tooltip-D7bf9p2v.js";import{R as g}from"./RechartsHookInspector-_W3CqC5M.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CMA78OKy.js";import"./hooks-BpNXzUNL.js";import"./axisSelectors-zUwIil_A.js";import"./zIndexSlice-MqfV_Lfv.js";import"./resolveDefaultProps-Bb0L8kLp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C7ozkYMn.js";import"./chartDataContext-eO3XCw92.js";import"./CategoricalChart-CnWZI6Fz.js";import"./CartesianAxis-D8E3unsA.js";import"./Layer-DY220JH0.js";import"./Text-CY41MgYr.js";import"./DOMUtils-Dak0oEyJ.js";import"./Label-DXEyh5i9.js";import"./ZIndexLayer-Dc6Gk9II.js";import"./types-B0qniNwz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DqoOcyix.js";import"./Curve-_cbPrSga.js";import"./useElementOffset-DYTW7eVO.js";import"./iteratee-DCZOOTd4.js";import"./ReactUtils-D-xpVFtM.js";import"./ActivePoints-B2pGhw2h.js";import"./Dot-B5sv6NYe.js";import"./RegisterGraphicalItemId-CSmKkG0q.js";import"./ErrorBarContext-asfsfUUV.js";import"./GraphicalItemClipPath-BoX2yUt9.js";import"./SetGraphicalItem-Dr6ZmOI6.js";import"./useAnimationId-VWf3KASX.js";import"./getRadiusAndStrokeWidthFromDot-CFQCYzj3.js";import"./ActiveShapeUtils-DlS6WpAj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_wboqG7.js";import"./Trapezoid-BbNzWkoD.js";import"./Sector-CkX8bkkx.js";import"./Cross-CjWKJuRA.js";import"./index-DN73DgGW.js";import"./ChartSizeDimensions-Bvvn8A72.js";import"./OffsetShower-CnaZFh38.js";import"./PlotAreaShower-DsaFxt3j.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
