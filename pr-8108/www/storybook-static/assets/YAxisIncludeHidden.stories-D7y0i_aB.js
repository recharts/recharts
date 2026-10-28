import{r as f,R as e}from"./iframe-BPaILHrg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CZAlOOP6.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bmw1fph3.js";import{C as k}from"./ComposedChart-DU4uZiCB.js";import{X as K}from"./XAxis-Bp49XRaF.js";import{L as v}from"./Legend-uniXBVqh.js";import{B as a}from"./Bar-Bm1zRaSc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-r7ey19qR.js";import"./Text-CtKpv6li.js";import"./resolveDefaultProps-fs0FwHaQ.js";import"./pageBackground-CWFMyAd2.js";import"./ZIndexLayer-DOVmR1lD.js";import"./index-CkFyYTJL.js";import"./index-CA_30Yt5.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CP4AmDBe.js";import"./throttle-B9kMlkpl.js";import"./axisSelectors-BgmzCmWH.js";import"./d3-scale-CvctqLlv.js";import"./CartesianAxis-DqZBHpVR.js";import"./Layer-BYN-xjEA.js";import"./types-DUbTKtwp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BvsmzMN6.js";import"./index-CnIUZT6I.js";import"./index-B04q1BNb.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D7MXGog1.js";import"./index-BFOFl-I4.js";import"./CartesianChart-DVMMqgwd.js";import"./ZIndexPortal-bECtAjmI.js";import"./CategoricalChart-DVM1oU_Q.js";import"./Symbols-Dk1_zaB2.js";import"./symbol-hCExAh31.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CYi5LIP9.js";import"./uniqBy-CQUkPewS.js";import"./iteratee-BSjHlBKG.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BA53HbEo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-zVYi39zS.js";import"./useAnimationId-BDqdHn7D.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-By1qTU3M.js";import"./tooltipContext-B-ibtteN.js";import"./dataEntryStyles-DyygVVmF.js";import"./ErrorBarContext-CUfKSzjm.js";import"./activeStyles-BRvUZ3GA.js";import"./SetGraphicalItem-CsCmCIZL.js";import"./getZIndexFromUnknown-8mUt18d_.js";import"./useEffectiveDataKey-Bbwl3GsC.js";import"./omit-CSgZzqcE.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
