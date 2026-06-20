import{r as n,R as t}from"./iframe-C2Yu5A-b.js";import{L as p}from"./LineChart-BqMBftyN.js";import{R as s}from"./zIndexSlice-tndcr-lp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DBvkaZMp.js";import{X as d}from"./XAxis-WqnJVPHT.js";import{Y as y}from"./YAxis-CAeM0KFi.js";import{L as u}from"./Legend-Bb8Czknq.js";import{L as h}from"./Line-qnNBUaij.js";import{T as g}from"./Tooltip-D4_5mk3v.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLm4movc.js";import"./index-Cf-iiIX8.js";import"./index-RvHlbfdo.js";import"./index-Crtw70Th.js";import"./index-Bw2J7CiK.js";import"./immer-Dw4t5i4O.js";import"./get-sXbEBADG.js";import"./renderedTicksSlice-DRR4JQds.js";import"./axisSelectors-ldKOVrRn.js";import"./d3-scale-CalfYQM5.js";import"./resolveDefaultProps-Bpz2fUNW.js";import"./isWellBehavedNumber-hO-3eJ3M.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-GviTQT_7.js";import"./chartDataContext-BCayYLP6.js";import"./CategoricalChart-CfUCGvtZ.js";import"./CartesianAxis-Che9oLkh.js";import"./Layer-B5f-JESM.js";import"./Text-nteLn1KQ.js";import"./DOMUtils-D5PdJ1Ca.js";import"./Label-5FD90Jk0.js";import"./ZIndexLayer-DuYz_T9C.js";import"./types-D2qrwj6D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-OVliTJ0w.js";import"./symbol-BfsTRDbP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D1jcGseP.js";import"./uniqBy-EOs9hKbg.js";import"./iteratee-BIwzy5Sd.js";import"./Curve-BOpkUjqJ.js";import"./step-Badcwj1a.js";import"./AnimatedItems-Bx_qRQBs.js";import"./useAnimationId-_dE112Ua.js";import"./ActivePoints-BTO62zcn.js";import"./Dot-CKPKAf35.js";import"./RegisterGraphicalItemId-BBUK6ex4.js";import"./ErrorBarContext-CB1md74y.js";import"./GraphicalItemClipPath-ByyRz6Zm.js";import"./SetGraphicalItem-B-XBlhKJ.js";import"./getRadiusAndStrokeWidthFromDot-CLg6UhmZ.js";import"./ActiveShapeUtils-BR-aw80X.js";import"./Cross-CDEkmIQU.js";import"./Rectangle-CYfm48t9.js";import"./util-Dxo8gN5i.js";import"./Sector-CXcIFBrm.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
