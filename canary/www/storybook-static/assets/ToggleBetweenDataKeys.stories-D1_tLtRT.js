import{r as p,R as t}from"./iframe-02jumC35.js";import{L as n}from"./LineChart-YlDplJdV.js";import{R as s}from"./zIndexSlice-Dh2CbWTc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D2T66nDB.js";import{X as d}from"./XAxis-CnRK3wsv.js";import{Y as y}from"./YAxis-mNI4SsbU.js";import{L as u}from"./Legend-mpzgqkwF.js";import{L as h}from"./Line-qAcnYglM.js";import{T as g}from"./Tooltip-lonz9YP2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ClpzkpkH.js";import"./resolveDefaultProps-BsN5ISV3.js";import"./get-cF5BDHN6.js";import"./axisSelectors-M7ebD7ER.js";import"./throttle-C3YzeAkV.js";import"./index-CYmUsGYv.js";import"./index-rCxfu9Lu.js";import"./isWellBehavedNumber-Bh9Ud_H9.js";import"./d3-scale-cjemRmDN.js";import"./index-DIJUc9fc.js";import"./index-CDDoEg3V.js";import"./renderedTicksSlice-DSmyYzjS.js";import"./index-3m7_l-7v.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cmtw3EH1.js";import"./chartDataContext-DXKdIbz5.js";import"./CategoricalChart-2aphxpDk.js";import"./CartesianAxis-BreAXyHF.js";import"./Layer-BluUqzQG.js";import"./Text-CUWOvwAb.js";import"./pageBackground-hJZbYU9A.js";import"./useId-QUVye4Jg.js";import"./useBackwardsCompatibleTheme-WAtXE9gt.js";import"./Label-DdA7iutk.js";import"./ZIndexLayer-Usgx4vbu.js";import"./dataEntryStyles-B_KbhbaV.js";import"./types-BU7rhtDT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Dm7SeMDV.js";import"./symbol-7GPz0Uc5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CDDOtZbO.js";import"./uniqBy-BgoixCH6.js";import"./iteratee-8yTmLCe3.js";import"./isArguments-yB-y1yaH.js";import"./Curve-sD1K-_o7.js";import"./step-DZxAeMnC.js";import"./activeStyles-BV4ZXPNg.js";import"./useAnimationId-BlDuhaIC.js";import"./ActivePoints-p_qQIX4t.js";import"./Dot-DmS4t6aH.js";import"./RegisterGraphicalItemId-C0Bo0Cv1.js";import"./ErrorBarContext-DP5SPbAE.js";import"./SetGraphicalItem-CYjreQQF.js";import"./getRadiusAndStrokeWidthFromDot-C-prUT-T.js";import"./ActiveShapeUtils-CJWo4eBA.js";import"./useEffectiveDataKey-C4Vtw6Mo.js";import"./Cross-7liUWqsX.js";import"./Rectangle-tsu_f_5l.js";import"./util-Dxo8gN5i.js";import"./Sector-DJKjfNoO.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
