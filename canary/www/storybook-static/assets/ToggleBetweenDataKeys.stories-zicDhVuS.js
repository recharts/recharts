import{r as n,R as t}from"./iframe-B4kUD3F_.js";import{L as p}from"./LineChart-CD8Ad3Pj.js";import{R as s}from"./zIndexSlice-DRZxBlWj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CAwnAibP.js";import{X as d}from"./XAxis-BqSSrpGv.js";import{Y as y}from"./YAxis-DxN0d4h_.js";import{L as u}from"./Legend-CLN0xR-G.js";import{L as h}from"./Line-BZIfpmth.js";import{T as g}from"./Tooltip-559atlXM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0Rch8-X.js";import"./index-DCwDzrBS.js";import"./index-C-xuAHoJ.js";import"./index-CYqd0Uq6.js";import"./index-BV_azGi8.js";import"./immer-DI7Qg7MS.js";import"./get-SuicBCAy.js";import"./renderedTicksSlice-DO7nzrZX.js";import"./axisSelectors-7DMUz--h.js";import"./d3-scale-CJLHhLGS.js";import"./resolveDefaultProps-DRQB4Pss.js";import"./isWellBehavedNumber-Bmjbb00R.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DZtIiDJu.js";import"./chartDataContext-hd9fJl9r.js";import"./CategoricalChart-DUPJdAnz.js";import"./CartesianAxis-CnkwfMH6.js";import"./Layer-Dsy9hdjd.js";import"./Text-79gK0PXl.js";import"./DOMUtils-D7Mb2TVV.js";import"./Label-Ckw8TK4e.js";import"./ZIndexLayer-B7kHgW_5.js";import"./types-7cnic641.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CR3OsKM1.js";import"./symbol-B22FKZ0A.js";import"./path-DyVhHtw_.js";import"./useElementOffset-MNUOYE5n.js";import"./uniqBy-B6b2iUeP.js";import"./iteratee-D9R9LmOY.js";import"./Curve-CthZ8FHS.js";import"./step-DrWCufuT.js";import"./AnimatedItems-DHDZsGIH.js";import"./useAnimationId-DS8iKUy9.js";import"./ActivePoints-H5S3JmFF.js";import"./Dot-eB8aq2hu.js";import"./RegisterGraphicalItemId-Ci8r16YO.js";import"./ErrorBarContext-CXDz_6c0.js";import"./GraphicalItemClipPath-BXEDANj9.js";import"./SetGraphicalItem-CcBXcnnP.js";import"./getRadiusAndStrokeWidthFromDot-DOq9cCaw.js";import"./ActiveShapeUtils-BYIaqgjd.js";import"./Cross-BoUPjysy.js";import"./Rectangle-1pwmvYkO.js";import"./util-Dxo8gN5i.js";import"./Sector-Dj-Q3kNf.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
