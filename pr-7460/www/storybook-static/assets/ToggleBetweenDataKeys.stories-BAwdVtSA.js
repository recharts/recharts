import{r as n,R as t}from"./iframe-DQmeeGiA.js";import{L as p}from"./LineChart-Dx7BfYFb.js";import{R as s}from"./zIndexSlice-vj7A5RkB.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D1MIA-G4.js";import{X as d}from"./XAxis-CPOb-1qE.js";import{Y as y}from"./YAxis-BSQK2YTa.js";import{L as u}from"./Legend-C01_CC6W.js";import{L as h}from"./Line-BWR_fQDK.js";import{T as g}from"./Tooltip-C6MCJIIJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3uqokgy.js";import"./index-D1lTGX2z.js";import"./index-ZLNt73_J.js";import"./index-DCJPjZ_f.js";import"./index-D_KMR0re.js";import"./immer-CuM-_qKB.js";import"./get-D0YgmYSp.js";import"./renderedTicksSlice-CpMyOcpp.js";import"./axisSelectors-Cn3uvYUg.js";import"./d3-scale-B-26TW07.js";import"./resolveDefaultProps-CQRwsHO0.js";import"./isWellBehavedNumber-CJ4H_fXR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CE19F1By.js";import"./chartDataContext-GPNpGYxg.js";import"./CategoricalChart-D7Ayh5uN.js";import"./CartesianAxis-CsI9VW1t.js";import"./Layer-C92GpBxv.js";import"./Text-CaOtzMPo.js";import"./DOMUtils-D4CFUHQm.js";import"./Label-DLumr0gz.js";import"./ZIndexLayer-LS7m1tXW.js";import"./types-BWqAEvBR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-uMOogOnn.js";import"./symbol-BWzlkA2r.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Duwsc3QZ.js";import"./uniqBy-KqLhsUPy.js";import"./iteratee-B34lqcgr.js";import"./Curve-BSCksJ2p.js";import"./step-B5y8ObV2.js";import"./AnimatedItems-DSodAZpf.js";import"./useAnimationId-VbcZ3sEu.js";import"./ActivePoints-CeLiAPaS.js";import"./Dot-DKRonFKw.js";import"./RegisterGraphicalItemId-Bgc1uwdC.js";import"./ErrorBarContext-aN2SYuw4.js";import"./GraphicalItemClipPath-BWRZakeV.js";import"./SetGraphicalItem-CiXKqcwE.js";import"./getRadiusAndStrokeWidthFromDot-AjrfEp5x.js";import"./ActiveShapeUtils-CHmC6EYX.js";import"./Cross-RQft4sJ7.js";import"./Rectangle-Bsb4rUs5.js";import"./util-Dxo8gN5i.js";import"./Sector-CjffYPJE.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
