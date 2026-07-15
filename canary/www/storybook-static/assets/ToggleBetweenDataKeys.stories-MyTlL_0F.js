import{r as n,R as t}from"./iframe-DdGnkOFo.js";import{L as p}from"./LineChart-3IXj0JL7.js";import{R as s}from"./zIndexSlice-Coao54AN.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-8-gqwNmB.js";import{X as d}from"./XAxis-CwjUQWj_.js";import{Y as y}from"./YAxis-BBZ_UVPr.js";import{L as u}from"./Legend-j7wP2bqS.js";import{L as h}from"./Line-DbTGCsdD.js";import{T as g}from"./Tooltip-C3GMGeW6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWAtSdtd.js";import"./index-BT6JmE6p.js";import"./index-Ikz32X_R.js";import"./index-CLyHvciH.js";import"./index-Z1BsW0X1.js";import"./throttle-zZssU-Yn.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BOOh9KOs.js";import"./axisSelectors-Cd50OEg7.js";import"./resolveDefaultProps-Btuog99o.js";import"./isWellBehavedNumber-vlfZeEqT.js";import"./d3-scale-BvrGgEa2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BEpSJ7tS.js";import"./chartDataContext-DAj5ZKMQ.js";import"./CategoricalChart-B-_DRhy8.js";import"./CartesianAxis-Bo84uroF.js";import"./Layer-C_y1fxvr.js";import"./Text-DAM87njj.js";import"./DOMUtils-DV9Ec2hx.js";import"./Label-BhIy96Hp.js";import"./ZIndexLayer-Ohjg-EB3.js";import"./types-D3VR5HmA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-SKeYRtHY.js";import"./symbol-CcoCMD-R.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4OHFNcW2.js";import"./uniqBy-CXPCyF4-.js";import"./iteratee-aK0dWx0L.js";import"./Curve-BxYGAEW6.js";import"./step-B8IQ9ApF.js";import"./AnimatedItems-BUboBg0D.js";import"./useAnimationId-6rr0uMBz.js";import"./ActivePoints-fBjIF9Nl.js";import"./Dot-CqaCoBUP.js";import"./RegisterGraphicalItemId-COu7yO2P.js";import"./ErrorBarContext-BD7rxjgN.js";import"./GraphicalItemClipPath-DAEO1IcC.js";import"./SetGraphicalItem-2sM575PE.js";import"./getRadiusAndStrokeWidthFromDot-D5R5gYG2.js";import"./ActiveShapeUtils-D54fuxpr.js";import"./Cross-CiGCk2h5.js";import"./Rectangle-Dicu6Oub.js";import"./util-Dxo8gN5i.js";import"./Sector-D0r8VPbQ.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
