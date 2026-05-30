import{P as f,c as e}from"./iframe-D2N5XcPI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BOjzt3yv.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-RoIFDUUO.js";import{C as k}from"./ComposedChart-Blurisz3.js";import{X as K}from"./XAxis-CXIGR-DS.js";import{L as v}from"./Legend-CXRIeaeL.js";import{B as s}from"./Bar-BzleUxkz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DEEjpUoM.js";import"./CartesianAxis-By2KL9D2.js";import"./Layer-BVkY8iZh.js";import"./resolveDefaultProps-Bi-9DeEE.js";import"./Text-S_HdFT4_.js";import"./DOMUtils-i2_cO7II.js";import"./isWellBehavedNumber-TNE8-lTU.js";import"./Label-Cnng5bNL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C0bDYuES.js";import"./index-DnYw-Xim.js";import"./index-B5AuwgDI.js";import"./types-O2bCi3CM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-uobIs_9Z.js";import"./immer-DD2jh41l.js";import"./RechartsWrapper-CuZS2kGu.js";import"./index-mVudWXdT.js";import"./index-BhCsKlJc.js";import"./axisSelectors-CRrbvK-r.js";import"./d3-scale-BsFKuCR3.js";import"./string-yHBgcFlJ.js";import"./CartesianChart-1QuMF_W-.js";import"./chartDataContext-CC_X3BVp.js";import"./CategoricalChart-BLp4HgeB.js";import"./Symbols-CN8y2VWu.js";import"./symbol-jIZX2tIm.js";import"./path-DyVhHtw_.js";import"./useElementOffset-3-y_yS5D.js";import"./uniqBy-COBWCQTb.js";import"./iteratee-DQH7eBbd.js";import"./tooltipContext-iUA5xi4R.js";import"./AnimatedItems-BoZ9ojjB.js";import"./useAnimationId-DqQ-6Bs7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BhEukgum.js";import"./ActiveShapeUtils-hlQp3kXL.js";import"./RegisterGraphicalItemId-B3-aUvfY.js";import"./ErrorBarContext-AJvViA7S.js";import"./GraphicalItemClipPath-C443LB5B.js";import"./SetGraphicalItem-Bb7tRa3R.js";import"./getZIndexFromUnknown-8QqgClJz.js";import"./graphicalItemSelectors-CEu_GPOk.js";const xe={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
