import{r as n,R as t}from"./iframe-B27eVaFF.js";import{L as p}from"./LineChart-C3ieNne5.js";import{R as s}from"./zIndexSlice-DLq0QSm6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DXZtGi0Y.js";import{X as d}from"./XAxis-C-VjsgkB.js";import{Y as y}from"./YAxis-CC995jnJ.js";import{L as u}from"./Legend-iE0muHoS.js";import{L as h}from"./Line-Bk9BDUUg.js";import{T as g}from"./Tooltip-D3ki7Oi-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DlESZ7tm.js";import"./index-Cw-Wuc3D.js";import"./index-DI6zkpD0.js";import"./index-DoegUUyt.js";import"./index-DDpWztz3.js";import"./immer-YcLAmGMI.js";import"./get-BRxKQDDf.js";import"./renderedTicksSlice-DHlObRt7.js";import"./axisSelectors-DxuiIF3z.js";import"./d3-scale-BTGRH2n_.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BE08UwbV.js";import"./isWellBehavedNumber-CotgHNs1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bm35oZlB.js";import"./chartDataContext-Cx0GXsRx.js";import"./CategoricalChart-DFkUIq_Y.js";import"./CartesianAxis-1UkcRdSJ.js";import"./Layer-CvC1SkE0.js";import"./Text-dTW2gHUK.js";import"./DOMUtils-DxsvOJTL.js";import"./Label-k_ca_Zdh.js";import"./ZIndexLayer-DlBEWXQx.js";import"./types-CkVecV7M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DHmT1gXs.js";import"./symbol-DcOqxn3y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-IkfKbF5l.js";import"./uniqBy-BtjkBcJS.js";import"./iteratee-B8u85uZV.js";import"./Curve-C9ctIi4z.js";import"./step-C1n6zis1.js";import"./AnimatedItems-6YxWbeO7.js";import"./useAnimationId-BitHcKd_.js";import"./ActivePoints-59Xfju6r.js";import"./Dot-CXeM3dGw.js";import"./RegisterGraphicalItemId-oZqB1u6h.js";import"./ErrorBarContext-tb2PhcR_.js";import"./GraphicalItemClipPath-BA_nO_Lx.js";import"./SetGraphicalItem-DWdSfkk6.js";import"./getRadiusAndStrokeWidthFromDot-Dvm3ARSn.js";import"./ActiveShapeUtils-Bzy2q7aU.js";import"./Cross-h2tex2-h.js";import"./Rectangle-BCqcMhZI.js";import"./Sector-CvLA_0W-.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
