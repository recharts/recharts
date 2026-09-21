import{r as f,R as e}from"./iframe-B8S5mZni.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CXfsjvSU.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C7WPWBHj.js";import{C as k}from"./ComposedChart-BFmInjuY.js";import{X as K}from"./XAxis-Del5mp5I.js";import{L as v}from"./Legend-B9J4DJFB.js";import{B as a}from"./Bar-CxVwcMJJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DZ6C1Cc6.js";import"./Text-DDGxlEP5.js";import"./resolveDefaultProps-B-gwRbWC.js";import"./DOMUtils-DwuCUUr8.js";import"./isWellBehavedNumber-TBIenFex.js";import"./useId-7Q8874Q1.js";import"./useBackwardsCompatibleTheme-v1szHh_7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OLi9LTWb.js";import"./index-BRy-1fgE.js";import"./index-DkKi0J9U.js";import"./RechartsWrapper-DNwO_82A.js";import"./axisSelectors-Im4hMjdM.js";import"./throttle-DJQOHpml.js";import"./d3-scale-siXpSW3b.js";import"./index-wxI64tZb.js";import"./index-CiAWbHQN.js";import"./renderedTicksSlice-BoqO-m_z.js";import"./index-DmW1QCPA.js";import"./CartesianAxis-D2B7a931.js";import"./Layer-DKzqyPeV.js";import"./types-BZDZh7Dp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CYUUiu8V.js";import"./chartDataContext-B9Fl8ZXu.js";import"./CategoricalChart-za3sj-4w.js";import"./Symbols-AsGz6W8M.js";import"./symbol-dRXx8TTn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DPucxQk4.js";import"./uniqBy-RBk98CTS.js";import"./iteratee-w700QPS8.js";import"./AnimatedItems-BPa7Tabb.js";import"./useAnimationId-DSiNOIGc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-pFBKfI04.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BXPGLF8U.js";import"./tooltipContext-Aojyt3AD.js";import"./RegisterGraphicalItemId-CoAB0bbS.js";import"./ErrorBarContext-XJ_0JE40.js";import"./GraphicalItemClipPath-D8etsuAL.js";import"./SetGraphicalItem-bKrSk8yx.js";import"./getZIndexFromUnknown-DOFGyGAi.js";import"./useGraphicalItemIdentity-DMPVVD7J.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
