import{r as p,R as t}from"./iframe-DFlWwuKT.js";import{L as n}from"./LineChart-DJlDcaw9.js";import{R as s}from"./zIndexSlice-DTl3Es75.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D6qo-7gd.js";import{X as d}from"./XAxis-9-A5V75m.js";import{Y as y}from"./YAxis-BS_00hSs.js";import{L as u}from"./Legend-e4PwlEr8.js";import{L as h}from"./Line-BBf0J4Pb.js";import{T as g}from"./Tooltip-mMsmfM8-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CGvYSOfx.js";import"./resolveDefaultProps-C-JEXzOC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DjksfEx4.js";import"./throttle-D8jnmLcF.js";import"./index-BUYqSBiu.js";import"./index-ClU2ON40.js";import"./isWellBehavedNumber-SARVqwHy.js";import"./d3-scale--iSGTKPS.js";import"./index-L-g3VAbm.js";import"./index-xbsAyBNd.js";import"./renderedTicksSlice-CCjZBqyR.js";import"./index-DATKdWyT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DW2e8sMm.js";import"./chartDataContext-BIDgL1iJ.js";import"./CategoricalChart-B-7TRfVL.js";import"./CartesianAxis-C9eM4ktZ.js";import"./Layer-URuQnAjL.js";import"./Text-7kqB13RI.js";import"./DOMUtils-CYU7OgfG.js";import"./useId-CRaXWjDX.js";import"./useBackwardsCompatibleTheme-DQ42sPpY.js";import"./Label-Cg_hrWdd.js";import"./ZIndexLayer-DHVkI8jl.js";import"./types-BOBvmLK9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CApAx5hI.js";import"./symbol-D6xFDwvn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CApEq3WG.js";import"./uniqBy-CT4IUB8Q.js";import"./iteratee-DCytidek.js";import"./Curve-BoAyROId.js";import"./step-DPc2nVCG.js";import"./AnimatedItems-B-WGLUSk.js";import"./useAnimationId-mTQIyJO-.js";import"./ActivePoints-BjXgqI1Z.js";import"./Dot-iIg854rO.js";import"./RegisterGraphicalItemId-Dc_pYr9G.js";import"./ErrorBarContext-DzGj33gU.js";import"./GraphicalItemClipPath-DvdfNGh6.js";import"./SetGraphicalItem-B77033X0.js";import"./getRadiusAndStrokeWidthFromDot-54dC4Ufn.js";import"./ActiveShapeUtils-B5PusxhY.js";import"./useGraphicalItemIdentity-w3ZvPmOP.js";import"./Cross-C-bHzLRH.js";import"./Rectangle-BQPyv6_x.js";import"./util-Dxo8gN5i.js";import"./Sector-CK7yeWYX.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
