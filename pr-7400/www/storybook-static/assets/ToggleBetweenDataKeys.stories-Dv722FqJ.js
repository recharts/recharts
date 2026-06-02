import{P as n,c as t}from"./iframe-Dy-e7pIM.js";import{L as p}from"./LineChart-JuSWOshG.js";import{g as s}from"./zIndexSlice-BAzwug6r.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-Bab5luS-.js";import{X as d}from"./XAxis-CumYrXMb.js";import{Y as y}from"./YAxis-BX0V94CN.js";import{L as u}from"./Legend-CbtrycXF.js";import{L as g}from"./Line-C_3X6bsH.js";import{T as h}from"./Tooltip-Ba3QtjBw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D0mQ-9Gw.js";import"./index-SXoyUqv9.js";import"./index-rCxGgy9o.js";import"./index-DUyY-sZ6.js";import"./index-B7Kt7cV8.js";import"./immer-kVBDWM7h.js";import"./get-D_U-7Kmb.js";import"./renderedTicksSlice-D80uYtAJ.js";import"./axisSelectors-DHlr3EdZ.js";import"./d3-scale-MtjUkFvo.js";import"./resolveDefaultProps-BOUnRnbS.js";import"./isWellBehavedNumber-Bj92k7jm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cf77c1Wa.js";import"./chartDataContext-HpYadsZ6.js";import"./CategoricalChart-Csue9Qd9.js";import"./CartesianAxis-kW3aoD-D.js";import"./Layer-BQggJIEv.js";import"./Text-DrCcB5Q6.js";import"./DOMUtils-CWH-10kL.js";import"./Label-Bd4SV5Lr.js";import"./ZIndexLayer-DgxZOhGb.js";import"./types-B745wbwD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D4yMEFQO.js";import"./symbol-DCQhxAU3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DUL3oAoP.js";import"./uniqBy-Cl9Zf0qP.js";import"./iteratee-BiQdkXya.js";import"./Curve-rRxZ5v9J.js";import"./step-r56XM2D6.js";import"./ReactUtils-DdYRakW1.js";import"./ActivePoints-Bnfm65-K.js";import"./Dot-DJgC10rz.js";import"./RegisterGraphicalItemId-CWayAjG_.js";import"./ErrorBarContext-N7PuOz_i.js";import"./GraphicalItemClipPath-Birlsn4M.js";import"./SetGraphicalItem-rhS26CgA.js";import"./useAnimationId-D1tL6Rir.js";import"./getRadiusAndStrokeWidthFromDot-CBX6IKOe.js";import"./ActiveShapeUtils-FFunzflv.js";import"./Cross-fxfBIiUP.js";import"./Rectangle-BL03ALcW.js";import"./Sector-CH-N9u2o.js";const ft={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(g,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(h,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const vt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,vt as __namedExportsOrder,ft as default};
