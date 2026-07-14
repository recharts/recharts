import{r as n,R as t}from"./iframe-B5C9KTx6.js";import{L as p}from"./LineChart-Ct1MV1hO.js";import{R as s}from"./zIndexSlice-DWIJ7njb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B9V2LVaA.js";import{X as d}from"./XAxis-wVZq09ph.js";import{Y as y}from"./YAxis-DM3geQpa.js";import{L as u}from"./Legend-jIa9lPLl.js";import{L as h}from"./Line-COtlWy37.js";import{T as g}from"./Tooltip-mtVEiDey.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-LcQsrP5q.js";import"./index-Cc-xdkS4.js";import"./index-CcYL9FAW.js";import"./index-DqoBz7Th.js";import"./index-2f6O6x8k.js";import"./throttle-BbpYnvP-.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C1Unvwoa.js";import"./axisSelectors-DNhpWmqM.js";import"./resolveDefaultProps-CyjCxujM.js";import"./isWellBehavedNumber-D81K5xCr.js";import"./d3-scale-C_LGDl3j.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CdAE6abg.js";import"./chartDataContext-BUicgLG9.js";import"./CategoricalChart-CxbxfGOc.js";import"./CartesianAxis-BJNemJkp.js";import"./Layer-B1gLrgGj.js";import"./Text-CAlHzKeZ.js";import"./DOMUtils-DWemK0zS.js";import"./Label-BqsOZO9Z.js";import"./ZIndexLayer-BjQPgVfD.js";import"./types-Ca2Hpkj5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D_RCxJGK.js";import"./symbol-is9daAZU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BRCdZsgJ.js";import"./uniqBy-CV58Zprr.js";import"./iteratee-keYsgSb4.js";import"./Curve-Bcxn_nu1.js";import"./step-BO5HL1Kb.js";import"./AnimatedItems-CboUjumK.js";import"./useAnimationId-B9XgvcqX.js";import"./ActivePoints-Bphq3wpq.js";import"./Dot-BhAsUEQD.js";import"./RegisterGraphicalItemId-C9s_9ELq.js";import"./ErrorBarContext-BUevHKDk.js";import"./GraphicalItemClipPath-DBJwGDNu.js";import"./SetGraphicalItem-DFLthVJ4.js";import"./getRadiusAndStrokeWidthFromDot-DOjcOwBz.js";import"./ActiveShapeUtils-DHp3h3tZ.js";import"./Cross-BcMj7Ct3.js";import"./Rectangle-zp4NG0t5.js";import"./util-Dxo8gN5i.js";import"./Sector-vUYD7aVM.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
