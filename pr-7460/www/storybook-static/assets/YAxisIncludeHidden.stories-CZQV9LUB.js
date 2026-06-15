import{r as f,R as e}from"./iframe-BaPbaLaJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DYYvtRQh.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Ct9oD4yM.js";import{C as k}from"./ComposedChart-Cue8tnaZ.js";import{X as K}from"./XAxis-DyE7q0u7.js";import{L as v}from"./Legend-9g7Cx5VN.js";import{B as s}from"./Bar-BX6LyV64.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D2ZTbC0U.js";import"./CartesianAxis-C9WUsr8e.js";import"./Layer-DnTHWC2s.js";import"./resolveDefaultProps-B9a4hmwF.js";import"./Text-gi3hDHLU.js";import"./DOMUtils-N0jxLcJa.js";import"./isWellBehavedNumber-Cw93K2XK.js";import"./Label-nvXx3zPl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cmf1UnqU.js";import"./index-8NR0Yac6.js";import"./index-uHodW5ti.js";import"./types-Bxe0zMe1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6EU1Gxc.js";import"./immer-DiDZ85-K.js";import"./RechartsWrapper-j68O-sFh.js";import"./index-DbNPAuc7.js";import"./index-C-SXM_61.js";import"./axisSelectors-Csn4G978.js";import"./d3-scale-njnUDxXP.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FGH_s-P1.js";import"./chartDataContext-BKJVmU0E.js";import"./CategoricalChart-D9BrBGmX.js";import"./Symbols-DgaJdi9-.js";import"./symbol-CFlzKY_N.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BiSEPHYV.js";import"./uniqBy-CEb4341A.js";import"./iteratee-DHRfW3v4.js";import"./tooltipContext-Dxao8-sY.js";import"./AnimatedItems-BRL6-mrZ.js";import"./useAnimationId-BlKkbeMI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ClzNIlMR.js";import"./ActiveShapeUtils-BKxrj1Kx.js";import"./RegisterGraphicalItemId-C1UHdJ8R.js";import"./ErrorBarContext-D5Gab5oy.js";import"./GraphicalItemClipPath-DrUrL8JH.js";import"./SetGraphicalItem-D7ChpxF2.js";import"./getZIndexFromUnknown-DjS664wq.js";import"./graphicalItemSelectors-CIniFY1e.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
