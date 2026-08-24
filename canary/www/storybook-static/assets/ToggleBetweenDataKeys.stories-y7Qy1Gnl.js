import{r as n,R as t}from"./iframe-B5plfFOD.js";import{L as p}from"./LineChart-BzSjwwkF.js";import{R as s}from"./zIndexSlice-DbNmOY3-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DKX8upjI.js";import{X as d}from"./XAxis-BSTDbcVl.js";import{Y as y}from"./YAxis-GTebhYCm.js";import{L as u}from"./Legend-DuVru4ga.js";import{L as h}from"./Line-ovty_Oih.js";import{T as g}from"./Tooltip-uZz8yr8Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CGezTKFK.js";import"./index-CL4khl8X.js";import"./index-Wbnw9Fvi.js";import"./index-PX_n5hQs.js";import"./index-CNQoj7bz.js";import"./throttle-B-azr0kq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BLYlno2y.js";import"./resolveDefaultProps-BlDjsfrB.js";import"./isWellBehavedNumber-Da64mp0K.js";import"./d3-scale-DCKop38A.js";import"./renderedTicksSlice-BhrWC83q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DwKWqDkX.js";import"./chartDataContext-kMO755bg.js";import"./CategoricalChart-C1LQoQak.js";import"./CartesianAxis-DCr9g_ht.js";import"./Layer-ByEseNp7.js";import"./Text-CpDGg_G2.js";import"./DOMUtils-D6jyt4Vs.js";import"./useId-Bp2MS-0a.js";import"./useBackwardsCompatibleTheme-DbWiZjcQ.js";import"./Label-D1J3ucoA.js";import"./ZIndexLayer-IfT3mYts.js";import"./types-BGPhMwrg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-t-UFktWC.js";import"./symbol-DbuhexXP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_k_9iR3.js";import"./uniqBy-C0NyoxrU.js";import"./iteratee-COozC7kh.js";import"./Curve-CaJzkXTx.js";import"./step-BSKO3-IJ.js";import"./AnimatedItems-B1lzxzMI.js";import"./useAnimationId-B-SkX0Hu.js";import"./ActivePoints-0px9-aiA.js";import"./Dot-DN6yzzHr.js";import"./RegisterGraphicalItemId-CWna7QKU.js";import"./ErrorBarContext-CLev7xWU.js";import"./GraphicalItemClipPath-Qthp7O67.js";import"./SetGraphicalItem-CTmoE1ld.js";import"./getRadiusAndStrokeWidthFromDot-bk7Qsl9y.js";import"./ActiveShapeUtils-DUhOL-u8.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-Cu31EOYV.js";import"./Rectangle-DpWbdB20.js";import"./util-Dxo8gN5i.js";import"./Sector-CCHpfLHh.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
