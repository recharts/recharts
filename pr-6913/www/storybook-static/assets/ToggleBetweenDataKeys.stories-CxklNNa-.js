import{r as n,e as t}from"./iframe-DNZpCyoe.js";import{L as p}from"./LineChart-BYA_UKv7.js";import{R as s}from"./arrayEqualityCheck-szoTsszl.js";import{C as c}from"./CartesianGrid-Dcjh4S5F.js";import{X as l}from"./XAxis-BWyuZPtw.js";import{Y as d}from"./YAxis-qzfDCcGS.js";import{L as y}from"./Legend-CfLCJzSJ.js";import{L as h}from"./Line-Cib4R8ji.js";import{T as u}from"./Tooltip-BtfUmTnN.js";import{R as g}from"./RechartsHookInspector-PStiuiJe.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQVorp6g.js";import"./hooks-BoDBEmNZ.js";import"./axisSelectors-BPOUZfxz.js";import"./zIndexSlice-CbXQpeLy.js";import"./resolveDefaultProps-2DomDO9e.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-ClznBUcn.js";import"./chartDataContext-IoENa7_Q.js";import"./CategoricalChart-BcCxfWo7.js";import"./CartesianAxis-CbYE_e4I.js";import"./Layer-CrRkJfyu.js";import"./Text-XEpcAul9.js";import"./DOMUtils-DNR30RXa.js";import"./Label-DtNzO2lD.js";import"./ZIndexLayer-eq4dVVjm.js";import"./types-Dxz_CRdn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D3jTalrW.js";import"./Curve-CA7wgxde.js";import"./useElementOffset-Baot8ccx.js";import"./iteratee-B96qlBzh.js";import"./ReactUtils-DE6T7IjU.js";import"./ActivePoints-z3WdP_zi.js";import"./Dot-BY0l9Z0V.js";import"./RegisterGraphicalItemId-BH87LWyT.js";import"./ErrorBarContext-CuMQg8zm.js";import"./GraphicalItemClipPath-DI-Q4qpn.js";import"./SetGraphicalItem-DkQhVMnS.js";import"./useAnimationId-CRV9WByP.js";import"./getRadiusAndStrokeWidthFromDot-BN7Lzvck.js";import"./ActiveShapeUtils-QhjeEfk1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DfjjH4Oz.js";import"./Trapezoid-CI8djX1t.js";import"./Sector-bkG1qaK_.js";import"./Cross-C0ZH_G-n.js";import"./index-CZ8HrsbR.js";import"./ChartSizeDimensions-Cev-F566.js";import"./OffsetShower-DlkB9H2-.js";import"./PlotAreaShower-DJtLg1j7.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
