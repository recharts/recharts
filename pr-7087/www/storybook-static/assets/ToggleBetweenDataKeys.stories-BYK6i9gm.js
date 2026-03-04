import{r as n,e as t}from"./iframe-kEab-1de.js";import{L as p}from"./LineChart-DMUt8epG.js";import{R as s}from"./arrayEqualityCheck-CYrh2cjl.js";import{C as c}from"./CartesianGrid-Dz-jm-Oh.js";import{X as l}from"./XAxis-B2e8gJVO.js";import{Y as d}from"./YAxis-C_wTf9xH.js";import{L as y}from"./Legend-DdWnIPN0.js";import{L as h}from"./Line-WaM8nLHp.js";import{T as u}from"./Tooltip-TX44mn0w.js";import{R as g}from"./RechartsHookInspector-CC5UoVXz.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CML9BKQL.js";import"./index-D1RE61xO.js";import"./immer-C4eWxQIR.js";import"./hooks-CJ2fHPGA.js";import"./axisSelectors-Tp_fxU6n.js";import"./d3-scale-sz-3qxpi.js";import"./zIndexSlice-BaIw-MhD.js";import"./renderedTicksSlice-BrUKQsnm.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BAMega6b.js";import"./chartDataContext-DvTCGmxA.js";import"./CategoricalChart-C5mOLgQl.js";import"./resolveDefaultProps-D3Hyj-pA.js";import"./CartesianAxis-3YcfdTBf.js";import"./Layer-Dvp9QxpM.js";import"./Text-DdI2ODY4.js";import"./DOMUtils-WUqQkZq5.js";import"./Label-CVjBmkuR.js";import"./ZIndexLayer-DOe9AOBU.js";import"./types-B8qtknYP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-eEknJRPm.js";import"./symbol-Mwvb6Rn8.js";import"./step-BiRjne67.js";import"./useElementOffset-D67KLAg1.js";import"./uniqBy-fOXykw6h.js";import"./iteratee-DB8hmdOG.js";import"./ReactUtils-BiGj3rxx.js";import"./ActivePoints-E55BUQ9b.js";import"./Dot-oRWifsYs.js";import"./RegisterGraphicalItemId-Z8hxEYqU.js";import"./ErrorBarContext-CSP8NLhc.js";import"./GraphicalItemClipPath-CrzbaPUK.js";import"./SetGraphicalItem-D6ZVSQU1.js";import"./useAnimationId-DmziQOA2.js";import"./getRadiusAndStrokeWidthFromDot-CUkSAeld.js";import"./ActiveShapeUtils-DS-9aDIa.js";import"./isPlainObject-DYt69ZGI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bb8G2Q0h.js";import"./Trapezoid-DOWeSYXh.js";import"./Sector-DyyTlWTh.js";import"./Curve-B815kJjs.js";import"./Cross-Cu4bh41C.js";import"./index-DRJo_4d4.js";import"./ChartSizeDimensions-D96mYFyL.js";import"./OffsetShower-Db9WbllM.js";import"./PlotAreaShower-_gQbuJS1.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
