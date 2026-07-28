import{r as n,R as t}from"./iframe-C-D94QkC.js";import{L as p}from"./LineChart-BIleSLdM.js";import{R as s}from"./zIndexSlice-BKwIbV_L.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B52-lAEO.js";import{X as d}from"./XAxis-CUwTyuxs.js";import{Y as y}from"./YAxis-gSjGcUn4.js";import{L as u}from"./Legend-CM_99vEO.js";import{L as h}from"./Line-CdnILgMU.js";import{T as g}from"./Tooltip-C4QZOuVo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C8SdZUxr.js";import"./index-CVumJag_.js";import"./index-Dq3qqcGT.js";import"./index-BIeQrv2Z.js";import"./index-CTfmrlJH.js";import"./throttle-2piy3LIT.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DheIhU3o.js";import"./axisSelectors-RkZJ2biJ.js";import"./resolveDefaultProps-I0oO3hVe.js";import"./isWellBehavedNumber-CW3dwjTv.js";import"./d3-scale-DDXy3r7j.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DbK0sv1B.js";import"./chartDataContext-BuH_IHSv.js";import"./CategoricalChart-ChFoWP6Y.js";import"./CartesianAxis-DdUGRqEL.js";import"./Layer-CmhR3M6w.js";import"./Text-BGLH01e4.js";import"./DOMUtils-CTJUeuSO.js";import"./Label-CEdJYykS.js";import"./ZIndexLayer-D0m4rTFg.js";import"./types-BVMbYXvi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-FU4W4bTr.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-Cww2ej7G.js";import"./symbol-DQDhapF0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DvCPVQU2.js";import"./uniqBy-Dbcfcj0B.js";import"./iteratee-DSgJFqTf.js";import"./Curve-CdyB7qtw.js";import"./step-C--YvIRl.js";import"./AnimatedItems-CNnKFhUF.js";import"./useAnimationId-Qux1tHbm.js";import"./ActivePoints-DZjXqzdI.js";import"./Dot-BeDd8SJ_.js";import"./RegisterGraphicalItemId-BEroCjsR.js";import"./ErrorBarContext-xYFd4kf3.js";import"./GraphicalItemClipPath-D86AO83t.js";import"./SetGraphicalItem-D38tmZrb.js";import"./getRadiusAndStrokeWidthFromDot-B5yZBW7E.js";import"./ActiveShapeUtils-mVYQLGWO.js";import"./Cross-DBoiUStt.js";import"./Rectangle-DbIEjk7Y.js";import"./util-Dxo8gN5i.js";import"./Sector-BRY6nb6Y.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
