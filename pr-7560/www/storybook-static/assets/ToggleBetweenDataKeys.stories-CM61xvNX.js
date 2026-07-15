import{r as n,R as t}from"./iframe-CkvJyCps.js";import{L as p}from"./LineChart-nd3gPtTb.js";import{R as s}from"./zIndexSlice-Ui89VFRT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CZK0Ig3T.js";import{X as d}from"./XAxis-Cs2owod8.js";import{Y as y}from"./YAxis-DiR5kzGo.js";import{L as u}from"./Legend-BSm1HiW3.js";import{L as h}from"./Line-BWXEwsOW.js";import{T as g}from"./Tooltip-uwTbQiHm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CjY8J2vT.js";import"./index-Cjf8FZO7.js";import"./index-D8Jo1LfZ.js";import"./index-BX-3EqNW.js";import"./index-BsiD65Ad.js";import"./throttle-DgDNnF1i.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BMi6DZwf.js";import"./axisSelectors-CC2H0zuo.js";import"./resolveDefaultProps-DCKyJEY4.js";import"./isWellBehavedNumber-DqH8GE3H.js";import"./d3-scale-Crqr5kEu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DFWFnz0T.js";import"./chartDataContext-BT6jQe_1.js";import"./CategoricalChart-E0pKYNLO.js";import"./CartesianAxis-mgc-X0Bi.js";import"./Layer-C4byj5K8.js";import"./Text-R9sJDfcz.js";import"./DOMUtils-CxWIP_C8.js";import"./Label-BMESeQSE.js";import"./ZIndexLayer-t0g3b6Ty.js";import"./types-CzkLD6k1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BWAxmpkp.js";import"./symbol-C7v9Wwia.js";import"./path-DyVhHtw_.js";import"./useElementOffset-cxxtLqzc.js";import"./uniqBy-BHjvX3lg.js";import"./iteratee-DA1LVjZi.js";import"./Curve-OKr52WO3.js";import"./step-KO3U5RtM.js";import"./AnimatedItems-CNADXJdo.js";import"./useAnimationId-jBCdM9CL.js";import"./ActivePoints-D5IySJuv.js";import"./Dot-CltbR6Uk.js";import"./RegisterGraphicalItemId-p5LXpBOx.js";import"./ErrorBarContext-CbXX-ZBj.js";import"./GraphicalItemClipPath-Ci1KSEKS.js";import"./SetGraphicalItem-BSfhP0b_.js";import"./getRadiusAndStrokeWidthFromDot-BhqCzyG1.js";import"./ActiveShapeUtils-DlrbS-G4.js";import"./Cross-NbitfARG.js";import"./Rectangle-_yFhjmBj.js";import"./util-Dxo8gN5i.js";import"./Sector-CZNNIZba.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
