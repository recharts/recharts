import{r as n,e as t}from"./iframe-Dt2-Rn2T.js";import{L as p}from"./LineChart-Ct2spzHg.js";import{R as s}from"./arrayEqualityCheck-e3rdG8sZ.js";import{C as c}from"./CartesianGrid-BL4VMlI3.js";import{X as l}from"./XAxis-CRrkfAWq.js";import{Y as d}from"./YAxis-CkTVj5OB.js";import{L as y}from"./Legend-D3DE2sEM.js";import{L as h}from"./Line-BoGV8EYk.js";import{T as u}from"./Tooltip-zi9iWAjn.js";import{R as g}from"./RechartsHookInspector-5aSdxu_t.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CBGhND_r.js";import"./hooks-DJKBhfj1.js";import"./axisSelectors-B_oLlWSB.js";import"./zIndexSlice-C1nzEFYS.js";import"./resolveDefaultProps-BoKEDzkZ.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-B7uV6D3o.js";import"./chartDataContext-DW1Hpk6b.js";import"./CategoricalChart-Dpdb76Jr.js";import"./CartesianAxis-CuL6QCDl.js";import"./Layer-Cy-kS3Tn.js";import"./Text-Bi0muiqL.js";import"./DOMUtils-ngjC_q0v.js";import"./Label-C32CYHoq.js";import"./ZIndexLayer-RqzvM65R.js";import"./types-BU6HIYaW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cq9VSHhf.js";import"./Curve-Ff2ksW4t.js";import"./useElementOffset-CUFeQ2ye.js";import"./iteratee-HLQGaxaB.js";import"./ReactUtils-OtSSiA15.js";import"./ActivePoints-DYpwLrvq.js";import"./Dot-yws4r2HM.js";import"./RegisterGraphicalItemId-BHPtgntX.js";import"./ErrorBarContext-Ds0jOqwg.js";import"./GraphicalItemClipPath-DzB0Slfu.js";import"./SetGraphicalItem-C72JWaDt.js";import"./useAnimationId-C5m05tY7.js";import"./getRadiusAndStrokeWidthFromDot-9ys3gSvC.js";import"./ActiveShapeUtils-d0cRIwlh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbTbEpru.js";import"./Trapezoid-BtcZZN-I.js";import"./Sector-D7OsKu7Y.js";import"./Cross-jy0XmrOG.js";import"./index-DBIfqZnx.js";import"./ChartSizeDimensions-CGKu1G21.js";import"./OffsetShower-Cg1AihHI.js";import"./PlotAreaShower-Byk-bE4C.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
