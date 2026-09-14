import{r as p,R as t}from"./iframe-bFSgLdPD.js";import{L as n}from"./LineChart-DoFndmV_.js";import{R as s}from"./zIndexSlice-D5upya8o.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-K9ueJ6XL.js";import{X as d}from"./XAxis-Bw0rvwCt.js";import{Y as y}from"./YAxis-bnO7DvP4.js";import{L as u}from"./Legend-oLYZNeeg.js";import{L as h}from"./Line-DgS_baGq.js";import{T as g}from"./Tooltip-CF-fAa6p.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BY-4gTQl.js";import"./resolveDefaultProps-Dwo3cyUv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-jpWGPgQR.js";import"./throttle-u-v2gKhP.js";import"./index-Dx35Wad7.js";import"./index-Bahp64_w.js";import"./isWellBehavedNumber-CxGT-_DT.js";import"./d3-scale-DJKaPyhK.js";import"./index-CNz3Scut.js";import"./index-XM-eSlQm.js";import"./renderedTicksSlice-BcG7Kuye.js";import"./index-DzQCF7Uo.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-tk8PYi9A.js";import"./chartDataContext-DUbpY4V-.js";import"./CategoricalChart-DBfHTq3P.js";import"./CartesianAxis-CrKpg4w8.js";import"./Layer-B9YPmvvS.js";import"./Text-BFarDq7U.js";import"./DOMUtils-DvIkXWfS.js";import"./useId-CXlgEyVd.js";import"./useBackwardsCompatibleTheme-DabWIItU.js";import"./Label-CpotZ0Ob.js";import"./ZIndexLayer-B1KbNkPu.js";import"./types-D_jE8zAs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BtHF7FpM.js";import"./symbol-q9QkaXHr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DgdUocH5.js";import"./uniqBy-C-W8pKck.js";import"./iteratee-BdAcVhmI.js";import"./Curve-C65UunW2.js";import"./step-my7iJLmD.js";import"./AnimatedItems-C1Ji84_q.js";import"./useAnimationId-C-HuNRtZ.js";import"./ActivePoints-t5f1lIKd.js";import"./Dot-DYaRHvIo.js";import"./RegisterGraphicalItemId-Ch2aaSbQ.js";import"./ErrorBarContext-BTgf3Fn1.js";import"./GraphicalItemClipPath-D0Gpm_sI.js";import"./SetGraphicalItem-BK4LEDF0.js";import"./getRadiusAndStrokeWidthFromDot-BeJ6jSsg.js";import"./ActiveShapeUtils-Tc7vH23C.js";import"./useGraphicalItemIdentity-BF3Qfnje.js";import"./Cross-DIq_YqZ2.js";import"./Rectangle-CtC0waIA.js";import"./util-Dxo8gN5i.js";import"./Sector-doVGkRfa.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
