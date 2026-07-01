import{r as n,R as t}from"./iframe-EI0Ls4hC.js";import{L as p}from"./LineChart-Cb4fsKou.js";import{R as s}from"./zIndexSlice-yKXgbZM9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BC9TO7ip.js";import{X as d}from"./XAxis-isMopIja.js";import{Y as y}from"./YAxis-BDDTXkrb.js";import{L as u}from"./Legend-BLL7Q6Zz.js";import{L as h}from"./Line-B9NkJQGA.js";import{T as g}from"./Tooltip-Bw5DnfvW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVfLxVvb.js";import"./index-CzoIO75z.js";import"./index-BIz2bYpH.js";import"./index-nHjkW3_e.js";import"./index-D-rMjtE6.js";import"./throttle-Cdlad3bH.js";import"./get-BON1YutH.js";import"./renderedTicksSlice-CoFXcUVC.js";import"./axisSelectors-Cok1HNra.js";import"./d3-scale-DBYKxB4y.js";import"./resolveDefaultProps-NPYXHAaZ.js";import"./isWellBehavedNumber-DWxIjg9k.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DxsNLdfg.js";import"./chartDataContext-AgenIsJt.js";import"./CategoricalChart-DnbprEZ3.js";import"./CartesianAxis-C7eaHI9Q.js";import"./Layer-D2PSeBO4.js";import"./Text-BwBPbfGl.js";import"./DOMUtils-DrXieiLo.js";import"./Label-V9mTYK6m.js";import"./ZIndexLayer-C3S5Zj6R.js";import"./types-C8rhvdfR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B8MT8cbd.js";import"./symbol-BEc4O7h7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CcBFNVWl.js";import"./uniqBy-DSBYfBdC.js";import"./iteratee-kPsQss5F.js";import"./Curve-eRlCLt7Q.js";import"./step-B6IK1iGd.js";import"./AnimatedItems-CvuB6fQ_.js";import"./useAnimationId-B72UM_RE.js";import"./ActivePoints-gc55JVjB.js";import"./Dot-Cx4WJ9n0.js";import"./RegisterGraphicalItemId-CXkeXAps.js";import"./ErrorBarContext-BeDV4HJb.js";import"./GraphicalItemClipPath-5KTFkQ5K.js";import"./SetGraphicalItem-BhScXCrX.js";import"./getRadiusAndStrokeWidthFromDot-DzmGdQsa.js";import"./ActiveShapeUtils-CplwhB-J.js";import"./Cross-C0YHKLl7.js";import"./Rectangle-Dj6dtcwd.js";import"./util-Dxo8gN5i.js";import"./Sector-BMV3V-O7.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
