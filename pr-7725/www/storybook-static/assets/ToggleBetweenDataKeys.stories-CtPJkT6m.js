import{r as n,R as t}from"./iframe-DccHD9cJ.js";import{L as p}from"./LineChart-B02cHoW5.js";import{R as s}from"./zIndexSlice-DTUZOs4Q.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DUh1sXV-.js";import{X as d}from"./XAxis-Btq-uLxc.js";import{Y as y}from"./YAxis-DhvCla2D.js";import{L as u}from"./Legend-ldQF-Jpy.js";import{L as h}from"./Line-ChUnqlEz.js";import{T as g}from"./Tooltip-CL_4DQ_e.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Df3mrbj3.js";import"./resolveDefaultProps-Bx2wnEd4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-F-OrX_Xw.js";import"./throttle-DVrp2GLO.js";import"./index-DMwNxWPw.js";import"./index-N3-9WR0Y.js";import"./isWellBehavedNumber-DqPgz5Yi.js";import"./d3-scale-Bc5gFn0f.js";import"./index-6ZXP3-Xk.js";import"./index-C-5pzGe4.js";import"./renderedTicksSlice-D4ngpquf.js";import"./index-CWyYWxmD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ByhNp3iB.js";import"./chartDataContext-TE-BNMGm.js";import"./CategoricalChart-BciEww7Z.js";import"./CartesianAxis-D0w9DA3M.js";import"./Layer-DWnnL9ma.js";import"./Text-jeWIJF52.js";import"./DOMUtils-D6lsaUk9.js";import"./useId-Dai3NE_g.js";import"./useBackwardsCompatibleTheme-DZ6Qm6iv.js";import"./Label-DVskdjtu.js";import"./ZIndexLayer-DKXOPUJQ.js";import"./types-CsFJg5Ml.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BM6J5XeJ.js";import"./symbol-CuC4WuRV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DqOwHG6I.js";import"./uniqBy-DzyHfYT5.js";import"./iteratee-BxX9M0vU.js";import"./Curve-v6KG-oLe.js";import"./step-BNCkH4O7.js";import"./AnimatedItems-DAcltxFf.js";import"./useAnimationId-pGJexV-0.js";import"./ActivePoints-BC5zZJgg.js";import"./Dot-zbPRTYvb.js";import"./RegisterGraphicalItemId-DELhDSX_.js";import"./ErrorBarContext-CYJw9jDs.js";import"./GraphicalItemClipPath-D_oXYnWb.js";import"./SetGraphicalItem-BeH6rSAO.js";import"./getRadiusAndStrokeWidthFromDot-Dnr5euKK.js";import"./ActiveShapeUtils-tvNFAdrs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-3PP3p9V9.js";import"./Rectangle-DZ08DrgT.js";import"./util-Dxo8gN5i.js";import"./Sector-DcR_WF-c.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
