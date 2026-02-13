import{r as n,e as t}from"./iframe-8rINPBCK.js";import{L as p}from"./LineChart-D7nyU6p6.js";import{R as s}from"./arrayEqualityCheck-C3wBHH11.js";import{C as c}from"./CartesianGrid-jtKOKpn1.js";import{X as l}from"./XAxis-rjkohJgP.js";import{Y as d}from"./YAxis-CTYabjHl.js";import{L as y}from"./Legend-6K_8fDBA.js";import{L as h}from"./Line-Cdkk60tb.js";import{T as u}from"./Tooltip-C0vCUnAp.js";import{R as g}from"./RechartsHookInspector-DhGNdH08.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_hkcN4D.js";import"./hooks-Bk__qHm-.js";import"./axisSelectors-CvWz5XTo.js";import"./zIndexSlice-DaWAVY1S.js";import"./resolveDefaultProps-wjmL_qr9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BO1mb6Fl.js";import"./chartDataContext-Djz4dVa4.js";import"./CategoricalChart-_BatnBQS.js";import"./CartesianAxis-DTB3wekJ.js";import"./Layer-rS2qKox4.js";import"./Text-aD2aJQms.js";import"./DOMUtils-CWnqia8Q.js";import"./Label-CPR5zbup.js";import"./ZIndexLayer-BIlvRP3G.js";import"./types-BtRlzhwr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CLShZ5Ps.js";import"./Curve-D7sQ6QWi.js";import"./useElementOffset-XeKITz-u.js";import"./iteratee-CK2LdAr9.js";import"./ReactUtils-BygGLMXM.js";import"./ActivePoints-BLBDxNan.js";import"./Dot-DDl1biMb.js";import"./RegisterGraphicalItemId-BjvKjhdQ.js";import"./ErrorBarContext-CL1XlF2D.js";import"./GraphicalItemClipPath-BLYpZTZk.js";import"./SetGraphicalItem-DdHorGvs.js";import"./useAnimationId-D141hJYN.js";import"./getRadiusAndStrokeWidthFromDot-K8DspZJi.js";import"./ActiveShapeUtils-BOQsXSI9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CeeZo8YN.js";import"./Trapezoid-CwrzKYaP.js";import"./Sector-C71MUP7Q.js";import"./Cross-jTFVIBga.js";import"./index--Y6JWCN_.js";import"./ChartSizeDimensions-CAkoMsi5.js";import"./OffsetShower-CYXSrIBv.js";import"./PlotAreaShower-PTRY2LvG.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
