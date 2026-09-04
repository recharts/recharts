import{r as f,R as e}from"./iframe-DccHD9cJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DhvCla2D.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DTUZOs4Q.js";import{C as k}from"./ComposedChart-IZbmlTb-.js";import{X as K}from"./XAxis-Btq-uLxc.js";import{L as v}from"./Legend-ldQF-Jpy.js";import{B as s}from"./Bar-D2ZEg9FM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DVskdjtu.js";import"./Text-jeWIJF52.js";import"./resolveDefaultProps-Bx2wnEd4.js";import"./DOMUtils-D6lsaUk9.js";import"./isWellBehavedNumber-DqPgz5Yi.js";import"./useId-Dai3NE_g.js";import"./useBackwardsCompatibleTheme-DZ6Qm6iv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKXOPUJQ.js";import"./index-DMwNxWPw.js";import"./index-N3-9WR0Y.js";import"./RechartsWrapper-Df3mrbj3.js";import"./axisSelectors-F-OrX_Xw.js";import"./throttle-DVrp2GLO.js";import"./d3-scale-Bc5gFn0f.js";import"./index-6ZXP3-Xk.js";import"./index-C-5pzGe4.js";import"./renderedTicksSlice-D4ngpquf.js";import"./index-CWyYWxmD.js";import"./CartesianAxis-D0w9DA3M.js";import"./Layer-DWnnL9ma.js";import"./types-CsFJg5Ml.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ByhNp3iB.js";import"./chartDataContext-TE-BNMGm.js";import"./CategoricalChart-BciEww7Z.js";import"./Symbols-BM6J5XeJ.js";import"./symbol-CuC4WuRV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DqOwHG6I.js";import"./uniqBy-DzyHfYT5.js";import"./iteratee-BxX9M0vU.js";import"./AnimatedItems-DAcltxFf.js";import"./useAnimationId-pGJexV-0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZ08DrgT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-tvNFAdrs.js";import"./tooltipContext-CBdCq4p-.js";import"./RegisterGraphicalItemId-DELhDSX_.js";import"./ErrorBarContext-CYJw9jDs.js";import"./GraphicalItemClipPath-D_oXYnWb.js";import"./SetGraphicalItem-BeH6rSAO.js";import"./getZIndexFromUnknown-z1xVsGK0.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D_9KmnKg.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Re=["WithIncludeHidden"];export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
