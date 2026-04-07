import{r as n,e as t}from"./iframe-u6iaaRfQ.js";import{L as p}from"./LineChart-Bl6ZNbva.js";import{R as s}from"./arrayEqualityCheck-CLYylJu6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BY6Zx_xc.js";import{X as d}from"./XAxis-CafeDi3k.js";import{Y as y}from"./YAxis-DOArs6LY.js";import{L as h}from"./Legend-CQkR-ZeO.js";import{L as u}from"./Line-BT8py2Um.js";import{T as g}from"./Tooltip-CJ-qgz5i.js";import{R as K}from"./RechartsHookInspector-ChFSzWj0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxKNS5Rk.js";import"./index-CIiFpIIw.js";import"./immer-2VVJTBUN.js";import"./hooks-Dssc-Fg7.js";import"./axisSelectors-krUy4F6I.js";import"./d3-scale-Bj-ttDNW.js";import"./zIndexSlice-DWVvwkZr.js";import"./renderedTicksSlice-B-DvccZo.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dljgkd1w.js";import"./chartDataContext-CfRwcYbq.js";import"./CategoricalChart-CFZJD47L.js";import"./resolveDefaultProps-IMCpx0Yt.js";import"./CartesianAxis-D9B34M5E.js";import"./Layer-CT2CAOks.js";import"./Text-CgS9yB44.js";import"./DOMUtils-Nlbt7DfZ.js";import"./Label-DK4_THpm.js";import"./ZIndexLayer-D67zVttg.js";import"./types-BdeQdTqa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Bxoc8kEL.js";import"./symbol-BgXEUeDH.js";import"./step-0mVlQoKY.js";import"./useElementOffset-DUmZLxwu.js";import"./uniqBy-CfdH-2E7.js";import"./iteratee-Dv-ztwy4.js";import"./ReactUtils-BAv5fhiw.js";import"./ActivePoints-BaaXz2oX.js";import"./Dot-CTvFv7nE.js";import"./RegisterGraphicalItemId-C8o_81FM.js";import"./ErrorBarContext-qXy6_5PW.js";import"./GraphicalItemClipPath-PPuT3qYL.js";import"./SetGraphicalItem-CnqUUVpy.js";import"./useAnimationId-BD3P1pqn.js";import"./getRadiusAndStrokeWidthFromDot-PqQ1H61_.js";import"./ActiveShapeUtils-DdZUdvs2.js";import"./isPlainObject-B8BtVZgq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqG21RYU.js";import"./Trapezoid-CNfti2nG.js";import"./Sector-Cd7r1-lt.js";import"./Curve-5QbieyFV.js";import"./Cross-DqQk76bW.js";import"./index-BOENtfhc.js";import"./ChartSizeDimensions-CsL5LAMT.js";import"./OffsetShower-D3fuh2M8.js";import"./PlotAreaShower-FynNvHOc.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
