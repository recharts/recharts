import{r as p,R as t}from"./iframe-XIWN-8LW.js";import{L as n}from"./LineChart-BUZeOAC5.js";import{R as s}from"./zIndexSlice-CeTDvnmV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B5DJtemm.js";import{X as d}from"./XAxis-xF4zDX5U.js";import{Y as y}from"./YAxis-DaPhatN5.js";import{L as u}from"./Legend-uzuxOhM0.js";import{L as h}from"./Line-B6hIzkaB.js";import{T as g}from"./Tooltip-CBhkgzkI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BeCgk11S.js";import"./resolveDefaultProps-B5b48pxf.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ct9ZEPSa.js";import"./throttle-DRx8DeZx.js";import"./index-aVJjGtUe.js";import"./index-BkVjohbh.js";import"./polarAxisSelectors-DQxdihyW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BvS2o_Zb.js";import"./index-CLmLkjoe.js";import"./index-DUogMgN_.js";import"./renderedTicksSlice-DpPQ5RFR.js";import"./index-pEcVg_GN.js";import"./fillDefinitions-BnpiLimK.js";import"./CartesianChart-Cb1xlur4.js";import"./ZIndexPortal-DjT5vY1_.js";import"./CategoricalChart-xnoIgStO.js";import"./CartesianAxis-BxPz-Jvl.js";import"./Layer-CxaTRkgO.js";import"./Text-DltUF9fa.js";import"./DOMUtils-CCpPdTbp.js";import"./ZIndexLayer-Bd21CySm.js";import"./Label-DO8sqqdZ.js";import"./types-CnZsW2lD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Cwdzyt52.js";import"./symbol-DWZ08l1L.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BeOaSn6a.js";import"./uniqBy-DWstni_N.js";import"./iteratee-D75QKWW0.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BDW_2Enz.js";import"./step-D7Gnf8qO.js";import"./LabelList-DPGWqLfL.js";import"./ActivePoints-CytZfQ5l.js";import"./Dot-8IXYnCyr.js";import"./activeStyles-C-BzGRm8.js";import"./useAnimationId-BQkOAk0c.js";import"./dataEntryStyles-GFsHahL2.js";import"./ErrorBarContext-BZ9_Mv4V.js";import"./SetGraphicalItem-DypkohdD.js";import"./getRadiusAndStrokeWidthFromDot-DRDDou6B.js";import"./ActiveShapeUtils-DHUczxG_.js";import"./useEffectiveDataKey-qss65ryL.js";import"./Cross-BHDzPOic.js";import"./Rectangle-GJprns1h.js";import"./util-Dxo8gN5i.js";import"./Sector-0QEj3RzN.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
