import{r as n,R as t}from"./iframe-1Nx1Hwd8.js";import{L as p}from"./LineChart-Bt5W1yKO.js";import{R as s}from"./zIndexSlice-BPgffy3O.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DiEp70pS.js";import{X as d}from"./XAxis-Iy9-nOhv.js";import{Y as y}from"./YAxis-CLaAdl_L.js";import{L as u}from"./Legend-DyA1uf70.js";import{L as h}from"./Line-N-ZSdJCU.js";import{T as g}from"./Tooltip-C0zSpESh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DOZVWK-P.js";import"./index-DrfO8rcp.js";import"./index-DuNxWLhT.js";import"./index-BxODcotD.js";import"./index-BxXrUDFi.js";import"./throttle-BvcOGqjl.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C77-vGCj.js";import"./resolveDefaultProps-BuS60Zcm.js";import"./isWellBehavedNumber-BZkA4GqO.js";import"./d3-scale-B_Ed44y-.js";import"./renderedTicksSlice-DdDjPDgD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CfBDZXwX.js";import"./chartDataContext-B9qtLtUj.js";import"./CategoricalChart-CmvqfSaL.js";import"./CartesianAxis-zUKk9a_2.js";import"./Layer-CY3HNiYQ.js";import"./Text-D7Dvlpl9.js";import"./DOMUtils-CyzSDn7U.js";import"./useId-y9Z6ZhpG.js";import"./useBackwardsCompatibleTheme-CJcbMh-P.js";import"./Label-CzY3tv0Q.js";import"./ZIndexLayer-CgXwR33B.js";import"./types-CW2QSzeT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DZorPepo.js";import"./symbol-C-30n4A9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CDb0HKNC.js";import"./uniqBy-o1WAa8Cs.js";import"./iteratee-BRVvFQUm.js";import"./Curve-BLyT9pX_.js";import"./step-DiCJ9NfT.js";import"./AnimatedItems-CvXLsYG2.js";import"./useAnimationId-BUamwr57.js";import"./ActivePoints-C0mFYRu2.js";import"./Dot-CrNXlHuf.js";import"./RegisterGraphicalItemId-Ctsh4Fgt.js";import"./ErrorBarContext-aNneKhPH.js";import"./GraphicalItemClipPath-l6BikrPU.js";import"./SetGraphicalItem-CfAx1sDn.js";import"./getRadiusAndStrokeWidthFromDot-BvpolENt.js";import"./ActiveShapeUtils-K1kvzU25.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-E4IP8E6G.js";import"./Rectangle-DQ3akkPb.js";import"./util-Dxo8gN5i.js";import"./Sector-CQHr_yNh.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
