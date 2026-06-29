import{r as n,R as t}from"./iframe-DyrNzYfG.js";import{L as p}from"./LineChart-DElWMyzm.js";import{R as s}from"./zIndexSlice-BxcBivH8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BOQAsPrY.js";import{X as d}from"./XAxis-BfZ0zCU8.js";import{Y as y}from"./YAxis-D2470_wO.js";import{L as u}from"./Legend-BsnMj6Wq.js";import{L as h}from"./Line-zTFVT4TP.js";import{T as g}from"./Tooltip-C065pFJA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BdG0zq9-.js";import"./index-CdQUwFqU.js";import"./index-BpeVWu4H.js";import"./index-CHWPJWR6.js";import"./index-NUd0OKr5.js";import"./throttle-Cm4al6R2.js";import"./get-cagOI5AH.js";import"./renderedTicksSlice-C6uhyxBm.js";import"./axisSelectors-CD9PShsx.js";import"./d3-scale-BldhV8lg.js";import"./resolveDefaultProps-xqaJSNtt.js";import"./isWellBehavedNumber-Bd2sibwy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-UfO6rtst.js";import"./chartDataContext-CubF16Dj.js";import"./CategoricalChart-CWXn607r.js";import"./CartesianAxis-DqWwR38e.js";import"./Layer-BL2D6iSn.js";import"./Text-CnNg3gGa.js";import"./DOMUtils-odAOb060.js";import"./Label-mQIBMRk4.js";import"./ZIndexLayer-BkddZKJi.js";import"./types-DDNG0zv9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BMQcqtYo.js";import"./symbol-DJNZJDlM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CsvBpDcL.js";import"./uniqBy-DxrPsyJv.js";import"./iteratee-DWMjSvsX.js";import"./Curve-CV1SC5oG.js";import"./step-BTLusNHS.js";import"./AnimatedItems-Cq3mCAt5.js";import"./useAnimationId-AVj-rcCC.js";import"./ActivePoints-DnBcqYjd.js";import"./Dot-DyBJR96w.js";import"./RegisterGraphicalItemId-CvfrlEi9.js";import"./ErrorBarContext-XAPu5vDV.js";import"./GraphicalItemClipPath-ClGJav6d.js";import"./SetGraphicalItem-xVo5bUKT.js";import"./getRadiusAndStrokeWidthFromDot-DwRxyJur.js";import"./ActiveShapeUtils-9juqJKGt.js";import"./Cross-CKC1fqG6.js";import"./Rectangle-CK9rNIIm.js";import"./util-Dxo8gN5i.js";import"./Sector-wCt2OPFG.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
