import{r as n,R as t}from"./iframe-ebWVliJd.js";import{L as p}from"./LineChart-zRp5vKmD.js";import{R as s}from"./zIndexSlice-BrrGtknp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BSR6Azjm.js";import{X as d}from"./XAxis-BweeNrXM.js";import{Y as y}from"./YAxis-CXtDAlyU.js";import{L as u}from"./Legend-DMKSuMke.js";import{L as h}from"./Line-BIWAc-1H.js";import{T as g}from"./Tooltip-Cvab7GjA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DUxjIduK.js";import"./index-DF02JQD9.js";import"./index-r7VIACUV.js";import"./index-CMkBnQa6.js";import"./index-Ca07HsLe.js";import"./immer-u2yF5cyx.js";import"./get-D4k_mNx-.js";import"./renderedTicksSlice-Ba1ooYto.js";import"./axisSelectors-BiXUDLnL.js";import"./d3-scale-BkusLtz6.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-B5O-6-WI.js";import"./isWellBehavedNumber-DRTDdH6f.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BJML043z.js";import"./chartDataContext-DV3K9IA2.js";import"./CategoricalChart-DdVMa29B.js";import"./CartesianAxis-R8Sp45dD.js";import"./Layer-CrSVK8w0.js";import"./Text-C6J-h8kC.js";import"./DOMUtils-D1VV_WMD.js";import"./Label-CEbu9yOv.js";import"./ZIndexLayer-DymXXG8t.js";import"./types-DIjbaJzk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B3k_HJlQ.js";import"./symbol-DwyeBK49.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DUZdlllQ.js";import"./uniqBy-O9s4KUKR.js";import"./iteratee-ftXPOfk-.js";import"./Curve-Cnpigwxh.js";import"./step-CrKVzxVu.js";import"./AnimatedItems-VPYkwJ4F.js";import"./index-BPJnJB5S.js";import"./useAnimationId-n62HywHx.js";import"./ActivePoints-B8szihic.js";import"./Dot-DBDb90gK.js";import"./RegisterGraphicalItemId-YmUQslDz.js";import"./ErrorBarContext-4bUYjOjX.js";import"./GraphicalItemClipPath-CLalv2k5.js";import"./SetGraphicalItem-DrFDycKg.js";import"./getRadiusAndStrokeWidthFromDot-viuhEb9q.js";import"./ActiveShapeUtils-WXdDf590.js";import"./Cross-TTvTr8g_.js";import"./Rectangle-Cbetr6hK.js";import"./Sector-DNOEb9QS.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
