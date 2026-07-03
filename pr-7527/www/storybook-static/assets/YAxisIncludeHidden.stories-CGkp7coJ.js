import{r as f,R as e}from"./iframe-uEKx9k1N.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-tAwATeqy.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DY2SAwlF.js";import{C as k}from"./ComposedChart-wuX6tP4V.js";import{X as K}from"./XAxis-DqNwoQQz.js";import{L as v}from"./Legend-BjQN7rgW.js";import{B as s}from"./Bar-CNeWqAkg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-StFKOZ7o.js";import"./Layer-BH5XLyL8.js";import"./resolveDefaultProps-ht_nEGGy.js";import"./Text-B8QKaTlG.js";import"./DOMUtils-CMP-Fz_P.js";import"./isWellBehavedNumber-DQ4HTAG3.js";import"./Label-CitoXnqP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ClIbinrc.js";import"./index-CSsm5ETf.js";import"./index-DPeMAw3v.js";import"./types-BnkDZvgK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DY-iZALX.js";import"./throttle-BszORo1S.js";import"./RechartsWrapper-B8Jh4kUL.js";import"./index-Du90D5xv.js";import"./index-CgS1QQ0H.js";import"./axisSelectors-w7ZWZmhc.js";import"./d3-scale-CoMxsikp.js";import"./CartesianChart-BzS97Wq2.js";import"./chartDataContext-w4FL8Pti.js";import"./CategoricalChart-ablhttF3.js";import"./Symbols-B4e3bZfl.js";import"./symbol-BzXGVBf4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Sr2wxqk0.js";import"./uniqBy-CM6A5tFB.js";import"./iteratee-C_fPFM1j.js";import"./tooltipContext-BZw_0Eaq.js";import"./AnimatedItems-B35P9OvY.js";import"./useAnimationId-ZeyHjL0b.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-9Jy7qhLH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BahjRs48.js";import"./RegisterGraphicalItemId-CTEk8rED.js";import"./ErrorBarContext-YXBGRjgp.js";import"./GraphicalItemClipPath-BIARRVEG.js";import"./SetGraphicalItem-CwhlaQHa.js";import"./getZIndexFromUnknown-wx0mmxl8.js";import"./graphicalItemSelectors-BRveUiGI.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
