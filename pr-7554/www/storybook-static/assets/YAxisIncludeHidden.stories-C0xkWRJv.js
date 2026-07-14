import{r as f,R as e}from"./iframe-B5C9KTx6.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DM3geQpa.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DWIJ7njb.js";import{C as k}from"./ComposedChart-Ioa1DS1M.js";import{X as K}from"./XAxis-wVZq09ph.js";import{L as v}from"./Legend-jIa9lPLl.js";import{B as s}from"./Bar-CSeXWpTg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BJNemJkp.js";import"./Layer-B1gLrgGj.js";import"./resolveDefaultProps-CyjCxujM.js";import"./Text-CAlHzKeZ.js";import"./DOMUtils-DWemK0zS.js";import"./isWellBehavedNumber-D81K5xCr.js";import"./Label-BqsOZO9Z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BjQPgVfD.js";import"./index-DqoBz7Th.js";import"./index-2f6O6x8k.js";import"./types-Ca2Hpkj5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C1Unvwoa.js";import"./throttle-BbpYnvP-.js";import"./RechartsWrapper-LcQsrP5q.js";import"./index-Cc-xdkS4.js";import"./index-CcYL9FAW.js";import"./axisSelectors-DNhpWmqM.js";import"./d3-scale-C_LGDl3j.js";import"./CartesianChart-CdAE6abg.js";import"./chartDataContext-BUicgLG9.js";import"./CategoricalChart-CxbxfGOc.js";import"./Symbols-D_RCxJGK.js";import"./symbol-is9daAZU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BRCdZsgJ.js";import"./uniqBy-CV58Zprr.js";import"./iteratee-keYsgSb4.js";import"./tooltipContext-DPXXKpbg.js";import"./AnimatedItems-CboUjumK.js";import"./useAnimationId-B9XgvcqX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-zp4NG0t5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DHp3h3tZ.js";import"./RegisterGraphicalItemId-C9s_9ELq.js";import"./ErrorBarContext-BUevHKDk.js";import"./GraphicalItemClipPath-DBJwGDNu.js";import"./SetGraphicalItem-DFLthVJ4.js";import"./getZIndexFromUnknown-CO4wiC2w.js";import"./graphicalItemSelectors-BpumiOSR.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
