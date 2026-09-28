import{r as p,R as t}from"./iframe-B-FpQGVE.js";import{L as n}from"./LineChart-INmjELcX.js";import{R as s}from"./zIndexSlice-Be4STqbb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-HVDcDqwX.js";import{X as d}from"./XAxis-BLmB4Uxb.js";import{Y as y}from"./YAxis-BmhJWmSw.js";import{L as u}from"./Legend-D8WaZukF.js";import{L as h}from"./Line-D-uQwQl5.js";import{T as g}from"./Tooltip-aVmuAa7U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D1D1pk27.js";import"./resolveDefaultProps-Dtl_SfnV.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BKBkYNOt.js";import"./throttle-fO2SI_hD.js";import"./index-Bwqm2cxX.js";import"./index-zzhJWva7.js";import"./isWellBehavedNumber-DgH__KwF.js";import"./d3-scale-BVd2nsAD.js";import"./index-BOg1JrYi.js";import"./index-DrqVEo4b.js";import"./renderedTicksSlice-C87TKpMP.js";import"./index-BSKvdyte.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CZbjQu0s.js";import"./chartDataContext-BgCxNtXs.js";import"./CategoricalChart-DYpdXtUy.js";import"./CartesianAxis-AFvQJOoy.js";import"./Layer-CC5u66Wi.js";import"./Text-Djuu9tRj.js";import"./DOMUtils-miVyGpMZ.js";import"./useId-DAIuZYFe.js";import"./useBackwardsCompatibleTheme-CLDALELV.js";import"./Label-CsGEr2R8.js";import"./ZIndexLayer-BnTzkaQy.js";import"./types-DD3qZx3A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-WNmAeczg.js";import"./symbol-QicekGWa.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4G7IjkNE.js";import"./uniqBy-Ddgi9D3Q.js";import"./iteratee-mgHFghyh.js";import"./Curve-CAoBmZPA.js";import"./step-C2pk31G8.js";import"./AnimatedItems-e1etCO8j.js";import"./useAnimationId-BcCVwFd_.js";import"./ActivePoints-DdCBd2pZ.js";import"./Dot-B9Hx6qjI.js";import"./RegisterGraphicalItemId-1yR8tuVZ.js";import"./ErrorBarContext-BYOHAx31.js";import"./GraphicalItemClipPath-Cm6Nokyc.js";import"./SetGraphicalItem-Bih-NG2S.js";import"./getRadiusAndStrokeWidthFromDot-DjdOmN1y.js";import"./ActiveShapeUtils-DC9lclqW.js";import"./useGraphicalItemIdentity-DhhteXck.js";import"./Cross-B69nvR11.js";import"./Rectangle-BiqGpkxr.js";import"./util-Dxo8gN5i.js";import"./Sector-CEqLBkmr.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
