import{r as n,R as t}from"./iframe-D-BXEDkQ.js";import{L as p}from"./LineChart-C7AsqbZr.js";import{R as s}from"./zIndexSlice-CNOaqOPA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B1yDuSfR.js";import{X as d}from"./XAxis-CsYsIQZ3.js";import{Y as y}from"./YAxis-CY9nfIzq.js";import{L as u}from"./Legend-DTUE0otA.js";import{L as h}from"./Line-BWnL5Flc.js";import{T as g}from"./Tooltip-DLESUsdO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DAPlnek-.js";import"./index-CSvF-BDD.js";import"./index-Dzr30MxI.js";import"./index-G9DZGzqS.js";import"./index-DyZMLGLF.js";import"./throttle-DcYZZCS9.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BW0B_yyu.js";import"./axisSelectors-DbolJrr5.js";import"./resolveDefaultProps-BCmCl_HK.js";import"./isWellBehavedNumber-DG1BXq00.js";import"./d3-scale-Cw0gW9iZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B9gu2iu_.js";import"./chartDataContext-Drjp45TO.js";import"./CategoricalChart-Dffh87Ow.js";import"./CartesianAxis-BPou2DWk.js";import"./Layer-DZ4WZEl1.js";import"./Text-DKRb_pWs.js";import"./DOMUtils-BtYPMtse.js";import"./Label-BXssQtMI.js";import"./ZIndexLayer-BMtWXslr.js";import"./types-CKqvof5k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B9FyNMJt.js";import"./symbol-Bk2j1MEP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DxoNRjwJ.js";import"./uniqBy-Bq10x9oa.js";import"./iteratee-V8Uwp1qB.js";import"./Curve-BiodO3IJ.js";import"./step-O6juOnPn.js";import"./AnimatedItems-Bb-goO_2.js";import"./useAnimationId-BbJgISg4.js";import"./ActivePoints-C16wOqeD.js";import"./Dot-JDsRBdmy.js";import"./RegisterGraphicalItemId-D4LQkijr.js";import"./ErrorBarContext-CYH48hpc.js";import"./GraphicalItemClipPath-CpDe9sQE.js";import"./SetGraphicalItem-DFCa6_Km.js";import"./getRadiusAndStrokeWidthFromDot-BimxZCtp.js";import"./ActiveShapeUtils-D6NCpbS5.js";import"./Cross-Dx3XzPYb.js";import"./Rectangle-DhH6fWaa.js";import"./util-Dxo8gN5i.js";import"./Sector-B5fL-Syb.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
