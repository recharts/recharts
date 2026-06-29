import{r as n,R as t}from"./iframe-CszBinxB.js";import{L as p}from"./LineChart-Cvnq87be.js";import{R as s}from"./zIndexSlice-CutJbhUL.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DXxJFn4V.js";import{X as d}from"./XAxis-oYdZhs_K.js";import{Y as y}from"./YAxis-Dcemgb8R.js";import{L as u}from"./Legend-Bp3jy8fw.js";import{L as h}from"./Line-CF2pkJ7d.js";import{T as g}from"./Tooltip-D6DyKh1e.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9WMJT6y.js";import"./index-CJ5FwB5R.js";import"./index-CqsgrxyY.js";import"./index-Dk3UIdqq.js";import"./index-CK8GAH5B.js";import"./throttle-D83-jpt2.js";import"./get-Dkt-pB45.js";import"./renderedTicksSlice-BApmRI5D.js";import"./axisSelectors-ChU_3Lvt.js";import"./d3-scale-8f-0eAbn.js";import"./resolveDefaultProps-Bibg6aom.js";import"./isWellBehavedNumber-CQgoIKii.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CKqsh66i.js";import"./chartDataContext-D1nSjPO9.js";import"./CategoricalChart-KozYfQM0.js";import"./CartesianAxis-BWqORJkK.js";import"./Layer-CbC5ZndY.js";import"./Text-BedxJwrY.js";import"./DOMUtils-BDWRPNb8.js";import"./Label-Dp0h3UHP.js";import"./ZIndexLayer-BWnK9pgn.js";import"./types-BcRZVSBA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-zpUzwf6l.js";import"./symbol-CuwiIzpc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXwdlwFe.js";import"./uniqBy-BCYeHSUY.js";import"./iteratee-zMs8qLuf.js";import"./Curve-BU7ZSeTV.js";import"./step-F1REG5Zy.js";import"./AnimatedItems-dM5mhDfD.js";import"./useAnimationId-DACL8E3O.js";import"./ActivePoints-D0tv5d-k.js";import"./Dot-D-4kDITN.js";import"./RegisterGraphicalItemId-BWZQesOM.js";import"./ErrorBarContext--gRpVtKO.js";import"./GraphicalItemClipPath-BrN2bI9m.js";import"./SetGraphicalItem-DWL3HNya.js";import"./getRadiusAndStrokeWidthFromDot-DQWqw49n.js";import"./ActiveShapeUtils-BBAZWV6w.js";import"./Cross-Djz1b2yT.js";import"./Rectangle-3wzUTOWc.js";import"./util-Dxo8gN5i.js";import"./Sector-QnOONA2W.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
