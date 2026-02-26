import{r as n,e as t}from"./iframe-Gi8dyZ6e.js";import{L as p}from"./LineChart-xsJm0e_u.js";import{R as s}from"./arrayEqualityCheck-DuhG7Z2p.js";import{C as c}from"./CartesianGrid-B_ujkWpT.js";import{X as l}from"./XAxis-y3nTYyyS.js";import{Y as d}from"./YAxis-CqPjiITk.js";import{L as y}from"./Legend-DpGN4liK.js";import{L as h}from"./Line-Bi1p01P8.js";import{T as u}from"./Tooltip-Cgq1PAsR.js";import{R as g}from"./RechartsHookInspector-xuUFm4Np.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CB2AOINA.js";import"./index-DFJBHj5i.js";import"./immer-D5pmFx9i.js";import"./hooks-BTT9-kp9.js";import"./axisSelectors-BVT7Qm3f.js";import"./d3-scale-B9haREcB.js";import"./zIndexSlice-DnlbZmgt.js";import"./renderedTicksSlice-C1sYLHQR.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BTWnBU7d.js";import"./chartDataContext-a1u8I7YY.js";import"./CategoricalChart-qcsoPY3x.js";import"./resolveDefaultProps-B-oYS9lk.js";import"./CartesianAxis-Cy_oOLdQ.js";import"./Layer-DeXjDdnZ.js";import"./Text-BcSPYkwi.js";import"./DOMUtils-D2DkSNEb.js";import"./Label-DaPx3_eW.js";import"./ZIndexLayer-gbXEsAYB.js";import"./types-I1HiLSRe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CboXRb1J.js";import"./symbol-U_eLqT-N.js";import"./step-fw1t_kgZ.js";import"./useElementOffset--glOhg75.js";import"./uniqBy-Cmyunk0k.js";import"./iteratee-ZMZMMttA.js";import"./ReactUtils-CMiXbBDc.js";import"./ActivePoints-BT7VY6a-.js";import"./Dot-Bar0xDVX.js";import"./RegisterGraphicalItemId-eSxeD-8T.js";import"./ErrorBarContext-BpvUZnWq.js";import"./GraphicalItemClipPath-Cze4veVF.js";import"./SetGraphicalItem-CtHZzRYw.js";import"./useAnimationId-DlkxhLWt.js";import"./getRadiusAndStrokeWidthFromDot-ruaZLZ0D.js";import"./ActiveShapeUtils-Cw5EPp8e.js";import"./isPlainObject-DlPp7zEZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2pGK9fNN.js";import"./Trapezoid-CjUP9FD5.js";import"./Sector-D2nuXpAg.js";import"./Curve-BOJjXgXN.js";import"./Cross-BbsmXdpH.js";import"./index-rE-DaWJc.js";import"./ChartSizeDimensions-zCU3Rmg-.js";import"./OffsetShower-CbBMFbGN.js";import"./PlotAreaShower-BZejz9x4.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
