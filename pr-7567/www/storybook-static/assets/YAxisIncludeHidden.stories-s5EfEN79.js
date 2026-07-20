import{r as f,R as e}from"./iframe-S_Q04LyU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Cd8RwLuY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bxg2BBQ3.js";import{C as k}from"./ComposedChart-Bj5eSX1M.js";import{X as K}from"./XAxis-D78GJHE5.js";import{L as v}from"./Legend-BAFGOlgK.js";import{B as s}from"./Bar-Cgnnx9ML.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DhttszFl.js";import"./Layer-gdhaFlzY.js";import"./resolveDefaultProps-Dy-13YZo.js";import"./Text-C30Me8vu.js";import"./DOMUtils-b86ja7SN.js";import"./isWellBehavedNumber-B7JVG4WI.js";import"./Label-DpgEyudD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cyu3q_2t.js";import"./index-B7fnCzo3.js";import"./index-bxbAArpl.js";import"./types-B2JQaABL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xSk0hPIv.js";import"./throttle-sJ5Xwj7N.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DllIXhjL.js";import"./index-rMJKouwD.js";import"./index-TooQEcPQ.js";import"./axisSelectors-BPn6DSnk.js";import"./d3-scale-C2cmQNtP.js";import"./CartesianChart-BKdvFgR6.js";import"./chartDataContext-pLCds2Ae.js";import"./CategoricalChart-90tJb_l9.js";import"./Symbols-B-Gfn4AE.js";import"./symbol-BVP44yda.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DsJA345U.js";import"./uniqBy-BtJ9oYS7.js";import"./iteratee-DpqljlNu.js";import"./tooltipContext-Dkeeb5v3.js";import"./AnimatedItems-BE3OLqfb.js";import"./useAnimationId-CWYmV7EH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Qt7Z3o8D.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CQj2Q4HD.js";import"./RegisterGraphicalItemId-C_r44y5X.js";import"./ErrorBarContext-TTmfdmNR.js";import"./GraphicalItemClipPath-BhFzIWrz.js";import"./SetGraphicalItem-CmPnocAL.js";import"./getZIndexFromUnknown-DVwprQMK.js";import"./graphicalItemSelectors-DI4Jnxhi.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
