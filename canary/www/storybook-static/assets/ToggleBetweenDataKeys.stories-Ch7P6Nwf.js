import{r as p,R as t}from"./iframe-D_MXUc9j.js";import{L as n}from"./LineChart-D5RKLdbW.js";import{R as s}from"./zIndexSlice-BFHspQ3h.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CXNbNNZo.js";import{X as d}from"./XAxis-DDjL-5lR.js";import{Y as y}from"./YAxis-B9TFZTi1.js";import{L as u}from"./Legend-DzzdQsbu.js";import{L as h}from"./Line-D31G47M9.js";import{T as g}from"./Tooltip-CtR_GybZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-w9ky9w-N.js";import"./resolveDefaultProps-2frX1lOh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cm02wLJ7.js";import"./throttle-et5ks_cI.js";import"./index-CKJUXvOM.js";import"./index-7XNg-5qX.js";import"./isWellBehavedNumber-CsgFecko.js";import"./d3-scale-qgwr3MMy.js";import"./index-CKZvu-mT.js";import"./index-Bxr9K7DU.js";import"./renderedTicksSlice-TfnwoJLt.js";import"./index-DtuXK4VP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-tuemJXRr.js";import"./chartDataContext-_Ju6-fzp.js";import"./CategoricalChart-DJ7BKDkl.js";import"./CartesianAxis-6tNxOuLT.js";import"./Layer-BZB8UiQK.js";import"./Text-BRrhokiO.js";import"./DOMUtils-DhRIYphT.js";import"./useId-BnOkh28B.js";import"./useBackwardsCompatibleTheme-BwLA5NQz.js";import"./Label-BzW6Kco1.js";import"./ZIndexLayer-2Sh7_Zup.js";import"./types-C3dbXUSG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BSu_9T6j.js";import"./symbol-CA7d1SdW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CVAvobNx.js";import"./uniqBy-CxcVQtEW.js";import"./iteratee-iKvfq8Bu.js";import"./Curve-CuSFZQj8.js";import"./step-BhNzxzT7.js";import"./AnimatedItems-C_wvnbpu.js";import"./useAnimationId-Bnx7NtOE.js";import"./ActivePoints-BiO6enUY.js";import"./Dot-LN8MpyP_.js";import"./RegisterGraphicalItemId-BQytnqfH.js";import"./ErrorBarContext-CVxV46GA.js";import"./GraphicalItemClipPath-BnUM0bi_.js";import"./SetGraphicalItem-B4WgsP5a.js";import"./getRadiusAndStrokeWidthFromDot-4YSuZBjL.js";import"./ActiveShapeUtils-VpxDx_Hn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D5LHG89_.js";import"./Rectangle-CDDISee0.js";import"./util-Dxo8gN5i.js";import"./Sector-Cl-R6c6b.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
