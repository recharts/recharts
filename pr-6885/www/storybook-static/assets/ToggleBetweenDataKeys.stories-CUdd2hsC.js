import{r as n,e as t}from"./iframe-DYFx2r-j.js";import{L as p}from"./LineChart-_C1jJ99K.js";import{R as s}from"./arrayEqualityCheck-DCVaqN9G.js";import{C as c}from"./CartesianGrid-BbLxz0NB.js";import{X as l}from"./XAxis-CrWNcebb.js";import{Y as d}from"./YAxis-BQSE3w1-.js";import{L as y}from"./Legend-BtJKmN-Z.js";import{L as h}from"./Line-VsvTPScv.js";import{T as u}from"./Tooltip-PjWmQu43.js";import{R as g}from"./RechartsHookInspector-8HiD6XU_.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C83nyDwr.js";import"./hooks-DjCJ821w.js";import"./axisSelectors-CNJps_KV.js";import"./zIndexSlice-CSYHepNq.js";import"./resolveDefaultProps-BTmxXdy3.js";import"./PolarUtils-C1zbAlbA.js";import"./CartesianChart-CZCpz_Bc.js";import"./chartDataContext-BcNxXqiP.js";import"./CategoricalChart-D0ijd2iH.js";import"./CartesianAxis-DetyPtZ0.js";import"./Layer-BC3vDM2H.js";import"./Text-CehOywt1.js";import"./DOMUtils-dzsDioow.js";import"./Label-DjuisPzU.js";import"./ZIndexLayer-CCFXe3ig.js";import"./types-Cik9NZHM.js";import"./Symbols-DOMt1Ple.js";import"./Curve-7IBZZol0.js";import"./useElementOffset-DPcBTbkI.js";import"./iteratee-CwwQ69r8.js";import"./ReactUtils-B5hh0nCE.js";import"./ActivePoints-D9sD73LE.js";import"./Dot-Bp4mtK_T.js";import"./RegisterGraphicalItemId-CuPr_ukv.js";import"./ErrorBarContext-BaEgtdW6.js";import"./GraphicalItemClipPath-CYj9KQXB.js";import"./SetGraphicalItem-BLQ-q15z.js";import"./useAnimationId-xTCLSGwz.js";import"./getRadiusAndStrokeWidthFromDot-CdsImqpX.js";import"./ActiveShapeUtils-5VBSo5Lq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Du9Z9pvb.js";import"./Trapezoid-B1aN-PmS.js";import"./Sector-Cw_s6D-z.js";import"./Cross-Be-I10Rh.js";import"./index-BqI5oxI8.js";import"./ChartSizeDimensions-CyZcFbe9.js";import"./OffsetShower-D26sUntH.js";import"./PlotAreaShower--zaCCVLK.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
