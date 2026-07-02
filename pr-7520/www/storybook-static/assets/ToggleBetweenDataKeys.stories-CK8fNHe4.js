import{r as n,R as t}from"./iframe-BiO1LFJs.js";import{L as p}from"./LineChart-hobzGqpN.js";import{R as s}from"./zIndexSlice-CmtXwCpm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DDsPSIUw.js";import{X as d}from"./XAxis-BRwCq2oj.js";import{Y as y}from"./YAxis-JFjnQJGm.js";import{L as u}from"./Legend-DGK-zcSs.js";import{L as h}from"./Line-1_BYKPYm.js";import{T as g}from"./Tooltip-n88-j1Kq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CzSMI4by.js";import"./index-De8uMPL0.js";import"./index-xoOEAtk6.js";import"./index-CQxwz_yZ.js";import"./index-aP1SqDBB.js";import"./throttle-CSNtF4Q0.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DYPlU4wm.js";import"./axisSelectors-C_E3bYBf.js";import"./resolveDefaultProps-gKXUf8-9.js";import"./isWellBehavedNumber-Dxkk48kL.js";import"./d3-scale-B0MWpAf5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-IjCJKDDX.js";import"./chartDataContext-Dd2hF0M7.js";import"./CategoricalChart-CD1H2W0S.js";import"./CartesianAxis-Bp6siJa-.js";import"./Layer-H8Y9pDd0.js";import"./Text-BSmuYjPa.js";import"./DOMUtils-DsPsNFwh.js";import"./Label-CZnmw5cu.js";import"./ZIndexLayer-P1dNdSQJ.js";import"./types-Bn2J_DOa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DD05aFL0.js";import"./symbol-UBJpJrB_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-dpEKlp0x.js";import"./uniqBy-BVXibjHx.js";import"./iteratee-C9sw1IiS.js";import"./Curve-kUjOM15F.js";import"./step-CvpshmWh.js";import"./AnimatedItems-DgpiirzW.js";import"./useAnimationId-CvsS4m8J.js";import"./ActivePoints-BKJaC1Uq.js";import"./Dot-B5F-cqV_.js";import"./RegisterGraphicalItemId-DTynMESK.js";import"./ErrorBarContext-DCf_sWWl.js";import"./GraphicalItemClipPath-BeoHEVW6.js";import"./SetGraphicalItem-BmZzevIp.js";import"./getRadiusAndStrokeWidthFromDot-DCnDKADl.js";import"./ActiveShapeUtils-Bl46xbNE.js";import"./Cross-TOJOS5mm.js";import"./Rectangle-CTCiy3q0.js";import"./util-Dxo8gN5i.js";import"./Sector-CAilI50V.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
